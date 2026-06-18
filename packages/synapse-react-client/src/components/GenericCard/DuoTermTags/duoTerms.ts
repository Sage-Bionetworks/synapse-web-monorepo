// Data Use Ontology (DUO) vocabulary used by the mockup. The NF datasets table
// stores `dataUseModifiers` as human-readable term names; this maps each to its
// DUO code + EGA-style abbreviation and a coarse category so the UI can
// emphasize restrictions (especially commercial-use ones).
//
// Mockup data only — if this display approach is adopted, the canonical list
// should come from the DUO ontology rather than this hand-maintained table.

export type DuoCategory = 'permission' | 'restriction' | 'commercial'

export type DuoTerm = {
  code: string
  abbr: string
  name: string
  category: DuoCategory
  description: string
}

const TERMS: DuoTerm[] = [
  // Primary permissions
  {
    code: 'DUO:0000042',
    abbr: 'GRU',
    name: 'General Research Use',
    category: 'permission',
    description:
      'Use is allowed for any research purpose, including methods development and population/ancestry research.',
  },
  {
    code: 'DUO:0000006',
    abbr: 'HMB',
    name: 'Health or Medical or Biomedical Research',
    category: 'permission',
    description:
      'Use is allowed for health, medical, or biomedical research purposes.',
  },
  {
    code: 'DUO:0000007',
    abbr: 'DS',
    name: 'Disease Specific Research',
    category: 'permission',
    description:
      'Use is allowed for research into a specified disease or condition.',
  },
  {
    code: 'DUO:0000004',
    abbr: 'NRES',
    name: 'No Restriction',
    category: 'permission',
    description: 'No restrictions on use.',
  },
  {
    code: 'DUO:0000011',
    abbr: 'POA',
    name: 'Population Origins or Ancestry Research',
    category: 'permission',
    description: 'Use is allowed for population origins or ancestry research.',
  },
  {
    code: 'DUO:0000043',
    abbr: 'CC',
    name: 'Clinical Care Use',
    category: 'permission',
    description: 'Use is allowed for clinical care purposes.',
  },
  // Commercial-use restriction (the headline concern)
  {
    code: 'DUO:0000018',
    abbr: 'NCU',
    name: 'Not For Profit Use Only',
    category: 'commercial',
    description:
      'Use is limited to not-for-profit organizations and not-for-profit use; commercial use is prohibited.',
  },
  // Other restrictions / obligations
  {
    code: 'DUO:0000016',
    abbr: 'GSO',
    name: 'Genetic Studies Only',
    category: 'restriction',
    description: 'Use is limited to genetic studies only.',
  },
  {
    code: 'DUO:0000019',
    abbr: 'PUB',
    name: 'Publication Required',
    category: 'restriction',
    description:
      'Requesters must agree to make results of use publicly available.',
  },
  {
    code: 'DUO:0000020',
    abbr: 'COL',
    name: 'Collaboration Required',
    category: 'restriction',
    description:
      'Requesters must agree to collaborate with the primary study investigators.',
  },
  {
    code: 'DUO:0000021',
    abbr: 'IRB',
    name: 'Ethics Approval Required',
    category: 'restriction',
    description:
      'Requesters must provide documentation of local ethics/IRB approval.',
  },
  {
    code: 'DUO:0000022',
    abbr: 'GS',
    name: 'Geographical Restriction',
    category: 'restriction',
    description: 'Use is limited to within a specified geographic region.',
  },
  {
    code: 'DUO:0000024',
    abbr: 'MOR',
    name: 'Publication Moratorium',
    category: 'restriction',
    description: 'Requesters must not publish results until a specified date.',
  },
  {
    code: 'DUO:0000025',
    abbr: 'TS',
    name: 'Time Limit on Use',
    category: 'restriction',
    description: 'Use is approved for a specified period of time.',
  },
  {
    code: 'DUO:0000026',
    abbr: 'US',
    name: 'User Specific Restriction',
    category: 'restriction',
    description: 'Use is limited to specified, approved users.',
  },
  {
    code: 'DUO:0000027',
    abbr: 'PS',
    name: 'Project Specific Restriction',
    category: 'restriction',
    description: 'Use is limited to a specified, approved project.',
  },
  {
    code: 'DUO:0000028',
    abbr: 'IS',
    name: 'Institution Specific Restriction',
    category: 'restriction',
    description: 'Use is limited to specified, approved institutions.',
  },
  {
    code: 'DUO:0000029',
    abbr: 'RTN',
    name: 'Return to Database or Resource',
    category: 'restriction',
    description:
      'Requesters must return derived/enriched data to the resource.',
  },
]

/** All known DUO terms, in canonical order (for demos/legends). */
export const ALL_DUO_TERMS: readonly DuoTerm[] = TERMS

/**
 * Parse a `dataUseModifiers` cell into a list of term names. The column is a
 * STRING_LIST, returned as a JSON-array string (e.g. `["General Research Use"]`).
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
// A few common phrasings that don't match the canonical names verbatim.
const ALIASES: Record<string, string> = {
  'non commercial use only': 'DUO:0000018',
  'not for profit use only': 'DUO:0000018',
  'not for profit organisation use only': 'DUO:0000018',
  'health medical biomedical research': 'DUO:0000006',
  'health medical biomedical': 'DUO:0000006',
}
const BY_CODE = new Map(TERMS.map(t => [t.code, t]))

/**
 * Resolve a raw `dataUseModifiers` value (a DUO term name, or sometimes a code)
 * to a known DuoTerm. Unknown values fall back to a neutral restriction tag
 * built from the raw text so nothing is silently dropped.
 */
export function resolveDuoTerm(raw: string): DuoTerm {
  const value = raw.trim()
  const byCode = BY_CODE.get(value.toUpperCase())
  if (byCode) {
    return byCode
  }
  const key = normalize(value)
  const match = BY_NAME.get(key) ?? BY_CODE.get(ALIASES[key] ?? '')
  if (match) {
    return match
  }
  // Unknown term: abbreviate from initials, treat as a restriction to be safe.
  const abbr = value
    .split(/\s+/)
    .map(w => w[0]?.toUpperCase() ?? '')
    .join('')
    .slice(0, 4)
  return {
    code: '',
    abbr: abbr || '?',
    name: value,
    category: 'restriction',
    description: value,
  }
}
