import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { Link } from '@mui/material'
import { TargetEnum } from '@/utils/html/TargetEnum'
import { bioregistryRules } from './BioregistryRules'

export type LinkifyProps = {
  text?: string
  className?: string
}

export type LinkifyRule = {
  regex: RegExp
  onMatch: (value: string) => string
}

// PORTALS-3600:  No longer match synapse IDs that are not preceded by a space or the start of the string
// (?:(?<=\s)|^): non-capturing group that matches either:
// (?<=\s) — a positive lookbehind for a whitespace character (ensures there's a space before), or
// ^ — the start of the string
const synapseIdRule: LinkifyRule = {
  regex: /((?:(?<=\s)|^)syn\d+)/,
  onMatch: value => `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${value}`,
}

const httpRule: LinkifyRule = {
  regex: /(http:\/\/[^ ",]+)/,
  onMatch: value => value,
}
const httpsRule: LinkifyRule = {
  regex: /(https:\/\/[^ ",]+)/,
  onMatch: value => value,
}
const ftpRule: LinkifyRule = {
  regex: /(ftp:\/\/[^ ",]+)/,
  onMatch: value => value,
}

const doiRule: LinkifyRule = {
  regex: /(doi:10.\d+\/[-._;()/:a-zA-Z0-9]+)/,
  onMatch: value => {
    const id = value.slice('doi:'.length)
    return `https://doi.org/${id}`
  },
}

const pubMedRule: LinkifyRule = {
  regex: /(PMID:\d+)/,
  onMatch: value => {
    const id = value.slice('PMID:'.length)
    return `https://pubmed.ncbi.nlm.nih.gov/${id}`
  },
}
const mutationIdRule: LinkifyRule = {
  regex: /(MGI:\d+)/,
  onMatch: value => `https://www.informatics.jax.org/allele/${value}`,
}
const sciCrunchResolverRule: LinkifyRule = {
  regex:
    /(AB_\d+)|(Addgene_\d+)|(CVCL_[a-zA-Z0-9]+)|(MMRRC_\d+-.{3})|(IMSR_JAX:\d+)/,
  onMatch: value => `https://scicrunch.org/resolver/${value}`,
}
const clinVarVCVRule: LinkifyRule = {
  regex: /(ClinVar:VCV\d+)/,
  onMatch: value => {
    const id = value.slice('ClinVar:'.length)
    return `https://www.ncbi.nlm.nih.gov/clinvar/variation/${id}`
  },
}
const clinVarRCVRule: LinkifyRule = {
  regex: /(ClinVar:RCV\d+)/,
  onMatch: value => {
    const id = value.slice('ClinVar:'.length)
    return `https://www.ncbi.nlm.nih.gov/clinvar/${id}`
  },
}

const arXivRule: LinkifyRule = {
  regex: /(arXiv:[a-zA-Z0-9.]+)/,
  onMatch: value => {
    const id = value.slice('arXiv:'.length)
    return `https://arxiv.org/abs/${id}`
  },
}

const cbioPortalRule: LinkifyRule = {
  regex: /(cbioportal:[a-zA-Z0-9._]+)/,
  onMatch: value => {
    return `https://identifiers.org/${value}`
  },
}
const rridRule: LinkifyRule = {
  regex: /(rrid:[a-zA-Z]+.+)/,
  onMatch: value => {
    return `https://bioregistry.io/${value}`
  },
}

const rules: LinkifyRule[] = [
  httpRule,
  httpsRule,
  ftpRule,
  synapseIdRule,
  rridRule,
  pubMedRule,
  sciCrunchResolverRule,
  mutationIdRule,
  clinVarVCVRule,
  clinVarRCVRule,
  doiRule,
  arXivRule,
  cbioPortalRule,
  ...bioregistryRules,
]
const allRegexes = rules.map(r => r.regex.source).join('|')
const splitter = new RegExp(allRegexes, 'g')

function Linkify({ text, className }: LinkifyProps) {
  if (text == null) {
    return <></>
  }
  // Split the string using the joined regular expressions so we can add links to identifiers within free text
  const parts = text.split(splitter)
  return (
    <>
      {parts.map((part, index) => {
        const match = rules.find(r => r.regex.test(part))
        if (match) {
          return (
            <Link
              href={match.onMatch(part)}
              key={index}
              target={TargetEnum.NEW_WINDOW}
              rel="noopener noreferrer"
              className={className}
            >
              {part}
            </Link>
          )
        }
        // else
        return part
      })}
    </>
  )
}

export default Linkify
