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

// Matrix-style files that combine a handful of participants produce small
// per-file participant counts, which exercise below-threshold count masking.
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
  return entries[entries.length - 1][0]
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

/**
 * Generates a deterministic synthetic participant ⋈ file/dataset dataset (the
 * MATERIAL rows) from a mock profile.
 */
export function createCohortBuilderSyntheticData(
  profile: CohortBuilderMockProfile,
  seed: number = DEFAULT_SYNTHETIC_DATA_SEED,
): CohortBuilderSyntheticData {
  const random = createSeededRandom(seed)
  const dataAttributeNames = [
    ...CORE_DATA_ATTRIBUTE_NAMES,
    ...profile.extraDataAttributeNames,
  ]
  const references = new Map<string, SyntheticDataReference>()
  const materialRows: MaterialRow[] = []
  let nextEntityId = profile.firstReferenceEntityId
  let nextParticipantIndex = 1

  function addReference(
    study: MockStudy,
    assay: MockAssay,
    referenceType: ReferenceType,
    name: string,
  ): SyntheticDataReference {
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
  }

  function link(participant: Participant, reference: SyntheticDataReference) {
    materialRows.push({
      ...participant,
      [DATA_REFERENCE_COLUMN_NAME]: reference.id,
      [REFERENCE_TYPE_COLUMN_NAME]: reference.referenceType,
      ...reference.attributes,
    })
  }

  for (const study of profile.studies) {
    const participants = createParticipants(
      random,
      profile,
      study,
      nextParticipantIndex,
    )
    nextParticipantIndex += participants.length

    if (study.mapping === 'DATASET') {
      // Many:many studies map every participant to every study dataset.
      for (const assay of study.assays) {
        const dataset = addReference(
          study,
          assay,
          'DATASET',
          `${study.name} ${assay.assay} (synthetic)`,
        )
        participants.forEach(participant => link(participant, dataset))
      }
      continue
    }

    const participantsByAssay = new Map<MockAssay, Participant[]>(
      study.assays.map(assay => [assay, []]),
    )
    for (const participant of participants) {
      for (const assay of pickSubset(random, study.assays, 1)) {
        participantsByAssay.get(assay)!.push(participant)
        const file = addReference(
          study,
          assay,
          'FILE',
          `${study.name}_${assay.assay}_sample${String(references.size).padStart(5, '0')}`,
        )
        link(participant, file)
      }
    }

    for (const [assay, assayParticipants] of participantsByAssay) {
      if (assayParticipants.length === 0) {
        continue
      }
      const matrix = addReference(
        study,
        assay,
        'FILE',
        `${study.name}_${assay.assay}_all_participants_matrix`,
      )
      assayParticipants.forEach(participant => link(participant, matrix))

      for (let batch = 1; batch <= SMALL_BATCHES_PER_ASSAY; batch++) {
        const batchSize =
          SMALL_BATCH_MIN_SIZE +
          Math.floor(
            random() * (SMALL_BATCH_MAX_SIZE - SMALL_BATCH_MIN_SIZE + 1),
          )
        const batchFile = addReference(
          study,
          assay,
          'FILE',
          `${study.name}_${assay.assay}_batch${batch}_matrix`,
        )
        const start = Math.floor(
          random() * Math.max(1, assayParticipants.length - batchSize),
        )
        assayParticipants
          .slice(start, start + batchSize)
          .forEach(participant => link(participant, batchFile))
      }
    }
  }

  return { profile, dataAttributeNames, references, materialRows }
}
