// Data Use Ontology (DUO) vocabulary, plus Sage's DUO-Plus extensions.
//
// Source of truth for codes/labels: Sage-Bionetworks/governanceDUO
// (`metadata structure.md`), which mirrors the GA4GH DUO term set and adds
// Sage's "DUOplus" modifiers. Datasets are annotated with the ontology code
// (e.g. DUO:0000042); the displayed tag is derived from that code here, so the
// annotation and the display can evolve independently.

export type DuoCategory = 'permission' | 'commercial' | 'obligation' | 'limit'

export type DuoTerm = {
  /** Ontology code, e.g. "DUO:0000042". DUO-Plus terms use a "DUOplus#" code. */
  code: string
  /** Short abbreviation (shown in tooltips). */
  abbr: string
  /** Full human-readable name (the visible tag label). */
  name: string
  category: DuoCategory
  definition: string
}

const TERMS: DuoTerm[] = [
  // --- Permitted use (what research the data may be used for) ---
  {
    code: 'DUO:0000042',
    abbr: 'GRU',
    name: 'General Research Use',
    category: 'permission',
    definition:
      'Use is allowed for any research purpose, including methods development and population/ancestry research.',
  },
  {
    code: 'DUO:0000006',
    abbr: 'HMB',
    name: 'Health or Medical or Biomedical Research',
    category: 'permission',
    definition:
      'Use is allowed for health, medical, or biomedical research purposes.',
  },
  {
    code: 'DUO:0000007',
    abbr: 'DS',
    name: 'Disease Specific Research',
    category: 'permission',
    definition:
      'Use is allowed for research into the specified disease or condition.',
  },
  {
    code: 'DUO:0000011',
    abbr: 'POA',
    name: 'Population Origins or Ancestry Research Only',
    category: 'permission',
    definition:
      'Use is limited to population origins or ancestry research only.',
  },
  {
    code: 'DUO:0000043',
    abbr: 'CC',
    name: 'Clinical Care Use',
    category: 'permission',
    definition: 'Use is allowed for clinical care purposes.',
  },
  {
    code: 'DUO:0000004',
    abbr: 'NRES',
    name: 'No Restriction',
    category: 'permission',
    definition: 'No restrictions on use; data is available under open access.',
  },

  // --- Commercial-use restriction ---
  {
    code: 'DUO:0000046',
    abbr: 'NCU',
    name: 'Non-Commercial Use Only',
    category: 'commercial',
    definition: 'Use is limited to non-commercial purposes.',
  },
  {
    code: 'DUO:0000018',
    abbr: 'NPUNCU',
    name: 'Not-for-Profit, Non-Commercial Use Only',
    category: 'commercial',
    definition:
      'Use is limited to not-for-profit organizations for non-commercial purposes.',
  },
  {
    code: 'DUO:0000045',
    abbr: 'NPU',
    name: 'Not-for-Profit Organisation Use Only',
    category: 'commercial',
    definition: 'Use is limited to not-for-profit organizations.',
  },

  // --- Obligations (things the requester must do) ---
  {
    code: 'DUO:0000019',
    abbr: 'PUB',
    name: 'Publication Required',
    category: 'obligation',
    definition:
      'Requestor agrees to make results of studies using the data available to the larger scientific community.',
  },
  {
    code: 'DUO:0000020',
    abbr: 'COL',
    name: 'Collaboration Required',
    category: 'obligation',
    definition:
      'Requestor agrees to collaborate with the primary study investigator(s).',
  },
  {
    code: 'DUO:0000021',
    abbr: 'IRB',
    name: 'Ethics Approval Required',
    category: 'obligation',
    definition:
      'Requestor must provide documentation of local IRB/ethics approval.',
  },
  {
    code: 'DUO:0000029',
    abbr: 'RTN',
    name: 'Return to Database or Resource',
    category: 'obligation',
    definition:
      'Requestor must return derived/enriched data to the database or resource.',
  },
  {
    // Sage DUO-Plus extension (no GA4GH ontology id).
    code: 'DUOplus7',
    abbr: 'ATTR',
    name: 'Attribution Required',
    category: 'obligation',
    definition:
      'Requestor must provide the specified attribution/acknowledgement statement when using the data. (Sage DUO-Plus extension.)',
  },

  // --- Use limits (narrow who / where / when / what kind of research) ---
  {
    code: 'DUO:0000026',
    abbr: 'US',
    name: 'User Specific Restriction',
    category: 'limit',
    definition: 'Use is limited to specified, approved users.',
  },
  {
    code: 'DUO:0000027',
    abbr: 'PS',
    name: 'Project Specific Restriction',
    category: 'limit',
    definition: 'Use is limited to a specified, approved project.',
  },
  {
    code: 'DUO:0000028',
    abbr: 'IS',
    name: 'Institution Specific Restriction',
    category: 'limit',
    definition: 'Use is limited to specified, approved institutions.',
  },
  {
    code: 'DUO:0000022',
    abbr: 'GS',
    name: 'Geographical Restriction',
    category: 'limit',
    definition: 'Use is limited to within a specified geographic region.',
  },
  {
    code: 'DUO:0000025',
    abbr: 'TS',
    name: 'Time Limit on Use',
    category: 'limit',
    definition: 'Use is approved for a specified period of time.',
  },
  {
    code: 'DUO:0000024',
    abbr: 'MOR',
    name: 'Publication Moratorium',
    category: 'limit',
    definition: 'Requestor must not publish results until a specified date.',
  },
  {
    code: 'DUO:0000016',
    abbr: 'GSO',
    name: 'Genetic Studies Only',
    category: 'limit',
    definition: 'Use is limited to genetic studies only.',
  },
  {
    code: 'DUO:0000015',
    abbr: 'NMDS',
    name: 'No General Methods Research',
    category: 'limit',
    definition: 'Use for general methods development research is prohibited.',
  },
  {
    code: 'DUO:0000044',
    abbr: 'NPOA',
    name: 'Population Origins or Ancestry Research Prohibited',
    category: 'limit',
    definition:
      'Use for population origins or ancestry research is prohibited.',
  },
  {
    code: 'DUO:0000012',
    abbr: 'RS',
    name: 'Research Specific Restrictions',
    category: 'limit',
    definition:
      'Use is limited to the specific research type(s) described by the data provider.',
  },
]

/** All known terms, in canonical (category) order — for demos/legends. */
export const ALL_DUO_TERMS: readonly DuoTerm[] = TERMS

/**
 * Link to the term's definition in Bioregistry (GA4GH DUO terms only;
 * DUO-Plus extensions have no registry entry).
 */
export function duoRegistryUrl(term: DuoTerm): string | undefined {
  return term.code.startsWith('DUO:')
    ? `https://bioregistry.io/${term.code.toLowerCase()}`
    : undefined
}

/**
 * Parse a `dataUseModifiers` cell into a list of values. The column is a
 * STRING_LIST, returned as a JSON-array string (e.g. `["General Research Use"]`
 * or, once migrated, `["DUO:0000042"]`).
 */
export function parseDuoModifiers(raw: string | null | undefined): string[] {
  if (!raw) {
    return []
  }
  try {
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.map(String) : [String(raw)]
  } catch {
    return [raw]
  }
}

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const BY_NAME = new Map(TERMS.map(t => [normalize(t.name), t]))
const BY_CODE = new Map(TERMS.map(t => [t.code.toUpperCase(), t]))

/**
 * Resolve a raw `dataUseModifiers` value (an ontology code like DUO:0000042, a
 * DUOplus# code, or a term name) to a known DuoTerm. Unknown values fall back
 * to a neutral "limit" tag built from the raw text so nothing is dropped.
 */
export function resolveDuoTerm(raw: string): DuoTerm {
  const value = raw.trim()
  const byCode = BY_CODE.get(value.toUpperCase())
  if (byCode) {
    return byCode
  }
  const match = BY_NAME.get(normalize(value))
  if (match) {
    return match
  }
  // Unknown value: present the raw text as-is. Don't fabricate an abbreviation —
  // known terms carry a hard-coded abbr in TERMS; a guessed initialism would be
  // arbitrary and potentially wrong.
  return {
    code: '',
    abbr: '',
    name: value,
    category: 'limit',
    definition: value,
  }
}
