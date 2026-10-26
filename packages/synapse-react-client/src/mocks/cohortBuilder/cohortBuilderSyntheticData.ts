import {
  CohortBuilderMockProfile,
  CORE_DATA_ATTRIBUTE_NAMES,
  DATA_REFERENCE_COLUMN_NAME,
  MockAssay,
  MockStudy,
  PARTICIPANT_ID_COLUMN_NAME,
  REFERENCE_TYPE_COLUMN_NAME,
  STUDY_COLUMN_NAME,
  WeightedValues,
} from './cohortBuilderMockProfiles'

export type ReferenceType = 'FILE' | 'DATASET'

/** One MATERIAL row: a participant joined to one file or dataset reference. */
export type MaterialRow = Readonly<Record<string, string>>

export type SyntheticDataReference = {
  id: string
  name: string
  referenceType: ReferenceType
  study: string
  attributes: Readonly<Record<string, string>>
}

export type CohortBuilderSyntheticData = {
  profile: CohortBuilderMockProfile
  dataAttributeNames: readonly string[]
  references: ReadonlyMap<string, SyntheticDataReference>
  materialRows: readonly MaterialRow[]
}

export const DEFAULT_SYNTHETIC_DATA_SEED = 42

// Matrix-style files that each combine a handful of participants, alongside
// the one-participant files.
const SMALL_BATCH_MIN_SIZE = 3
const SMALL_BATCH_MAX_SIZE = 12
const SMALL_BATCHES_PER_ASSAY = 4

/** Mulberry32: a small, fast, seedable PRNG returning floats in [0, 1). */
export function createSeededRandom(seed: number): () => number {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function pickWeighted(random: () => number, values: WeightedValues): string {
  const entries = Object.entries(values)
  const total = entries.reduce((sum, [, weight]) => sum + weight, 0)
  let target = random() * total
  for (const [value, weight] of entries) {
    target -= weight
    if (target < 0) {
      return value
    }
  }
  return entries.at(-1)![0]
}

function pickOne<T>(random: () => number, values: readonly T[]): T {
  return values[Math.floor(random() * values.length)]
}

function pickSubset<T>(
  random: () => number,
  values: readonly T[],
  minSize: number,
): T[] {
  const subset = values.filter(() => random() < 0.6)
  while (subset.length < minSize) {
    const candidate = pickOne(random, values)
    if (!subset.includes(candidate)) {
      subset.push(candidate)
    }
  }
  return subset
}

type Participant = Readonly<Record<string, string>>

function createParticipants(
  random: () => number,
  profile: CohortBuilderMockProfile,
  study: MockStudy,
  firstIndex: number,
): Participant[] {
  return Array.from({ length: study.participantCount }, (_, offset) => {
    const participant: Record<string, string> = {
      [PARTICIPANT_ID_COLUMN_NAME]: `${profile.participantIdPrefix}-${String(
        firstIndex + offset,
      ).padStart(6, '0')}`,
      [STUDY_COLUMN_NAME]: study.name,
    }
    for (const attribute of profile.participantAttributes) {
      participant[attribute.name] = pickWeighted(random, attribute.values)
    }
    return participant
  })
}

type SyntheticDataBuilder = {
  random: () => number
  references: Map<string, SyntheticDataReference>
  materialRows: MaterialRow[]
  addReference: (
    study: MockStudy,
    assay: MockAssay,
    referenceType: ReferenceType,
    name: string,
  ) => SyntheticDataReference
  link: (
    participants: readonly Participant[],
    reference: SyntheticDataReference,
  ) => void
}

function createSyntheticDataBuilder(
  random: () => number,
  profile: CohortBuilderMockProfile,
): SyntheticDataBuilder {
  const references = new Map<string, SyntheticDataReference>()
  const materialRows: MaterialRow[] = []
  let nextEntityId = profile.firstReferenceEntityId
  return {
    random,
    references,
    materialRows,
    addReference(study, assay, referenceType, name) {
      const attributes: Record<string, string> = {
        dataType: assay.dataType,
        assay: assay.assay,
        fileFormat: pickOne(random, assay.fileFormats),
      }
      for (const attributeName of profile.extraDataAttributeNames) {
        attributes[attributeName] = pickOne(
          random,
          assay.extraAttributes[attributeName] ?? ['Unknown'],
        )
      }
      const reference: SyntheticDataReference = {
        id: `syn${nextEntityId++}`,
        name,
        referenceType,
        study: study.name,
        attributes,
      }
      references.set(reference.id, reference)
      return reference
    },
    link(participants, reference) {
      for (const participant of participants) {
        materialRows.push({
          ...participant,
          [DATA_REFERENCE_COLUMN_NAME]: reference.id,
          [REFERENCE_TYPE_COLUMN_NAME]: reference.referenceType,
          ...reference.attributes,
        })
      }
    },
  }
}

/** Many:many studies map every participant to every study dataset. */
function addDatasetStudy(
  builder: SyntheticDataBuilder,
  study: MockStudy,
  participants: readonly Participant[],
) {
  for (const assay of study.assays) {
    const dataset = builder.addReference(
      study,
      assay,
      'DATASET',
      `${study.name} ${assay.assay} (synthetic)`,
    )
    builder.link(participants, dataset)
  }
}

function addBatchMatrixFiles(
  builder: SyntheticDataBuilder,
  study: MockStudy,
  assay: MockAssay,
  assayParticipants: readonly Participant[],
) {
  const { random } = builder
  for (let batch = 1; batch <= SMALL_BATCHES_PER_ASSAY; batch++) {
    const batchSize =
      SMALL_BATCH_MIN_SIZE +
      Math.floor(random() * (SMALL_BATCH_MAX_SIZE - SMALL_BATCH_MIN_SIZE + 1))
    const batchFile = builder.addReference(
      study,
      assay,
      'FILE',
      `${study.name}_${assay.assay}_batch${batch}_matrix`,
    )
    const start = Math.floor(
      random() * Math.max(1, assayParticipants.length - batchSize),
    )
    builder.link(assayParticipants.slice(start, start + batchSize), batchFile)
  }
}

/**
 * FILE studies give each participant a file per assay they took part in, plus
 * an all-participants matrix and several small batch matrices per assay.
 */
function addFileStudy(
  builder: SyntheticDataBuilder,
  study: MockStudy,
  participants: readonly Participant[],
) {
  const participantsByAssay = new Map<MockAssay, Participant[]>(
    study.assays.map(assay => [assay, []]),
  )
  for (const participant of participants) {
    for (const assay of pickSubset(builder.random, study.assays, 1)) {
      participantsByAssay.get(assay)!.push(participant)
      const file = builder.addReference(
        study,
        assay,
        'FILE',
        `${study.name}_${assay.assay}_sample${String(builder.references.size).padStart(5, '0')}`,
      )
      builder.link([participant], file)
    }
  }

  for (const [assay, assayParticipants] of participantsByAssay) {
    if (assayParticipants.length === 0) {
      continue
    }
    const matrix = builder.addReference(
      study,
      assay,
      'FILE',
      `${study.name}_${assay.assay}_all_participants_matrix`,
    )
    builder.link(assayParticipants, matrix)
    addBatchMatrixFiles(builder, study, assay, assayParticipants)
  }
}

/**
 * Generates a deterministic synthetic participant ⋈ file/dataset dataset (the
 * MATERIAL rows) from a mock profile.
 */
export function createCohortBuilderSyntheticData(
  profile: CohortBuilderMockProfile,
  seed: number = DEFAULT_SYNTHETIC_DATA_SEED,
): CohortBuilderSyntheticData {
  const random = createSeededRandom(seed)
  const builder = createSyntheticDataBuilder(random, profile)
  let nextParticipantIndex = 1
  for (const study of profile.studies) {
    const participants = createParticipants(
      random,
      profile,
      study,
      nextParticipantIndex,
    )
    nextParticipantIndex += participants.length
    if (study.mapping === 'DATASET') {
      addDatasetStudy(builder, study, participants)
    } else {
      addFileStudy(builder, study, participants)
    }
  }
  return {
    profile,
    dataAttributeNames: [
      ...CORE_DATA_ATTRIBUTE_NAMES,
      ...profile.extraDataAttributeNames,
    ],
    references: builder.references,
    materialRows: builder.materialRows,
  }
}
