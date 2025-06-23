/* eslint-disable no-useless-escape */
// This file is auto-generated. Do not edit manually.
// Generated from bioregistry.io API based on collection.yaml

const onMatch = (value: string) => `https://bioregistry.io/${value}`

export const bioregistryRules = [
  {
    regex: /(ado:\d{7})/,
    onMatch,
  },
  {
    regex: /(agrkb:[1-9][0-9]{14})/,
    onMatch,
  },
  {
    regex: /(anzctr:ACTRN\d+)/,
    onMatch,
  },
  {
    regex: /(arrayexpress:[AEP]-\w{4}-\d+)/,
    onMatch,
  },
  {
    regex: /(arxiv:(?:\w+(?:\-\w+)?(?:\.\w+)?)?\d{4,7}(?:\.\d+(?:v\d+)?)?)/,
    onMatch,
  },
  {
    regex: /(atc:[A-Z](?:\d+(?:[A-Z]{1,2}(?:\d+)?)?)?)/,
    onMatch,
  },
  {
    regex: /(atcc:(?:[a-zA-Z]+-)?\d+(?:\.\d)?)/,
    onMatch,
  },
  {
    regex: /(bacdive:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(bfo:\d{7})/,
    onMatch,
  },
  {
    regex: /(bgee.gene:[A-Za-z0-9]+)/,
    onMatch,
  },
  {
    regex: /(biocyc:[A-Z-0-9]+(?:\:)?[A-Za-z0-9+_.%-:]+)/,
    onMatch,
  },
  {
    regex: /(biogrid:\d+)/,
    onMatch,
  },
  {
    regex: /(bioportal:(?:(?:\d+)|(?:\w+)))/,
    onMatch,
  },
  {
    regex: /(bioproject:PRJ[DEN][A-Z]\d+)/,
    onMatch,
  },
  {
    regex: /(biorxiv:(?:\d{4}\.\d{2}\.\d{2}\.)?\d{6,8}(?:v\d{1,3})?)/,
    onMatch,
  },
  {
    regex: /(biosample:SAM[NED](?:\w)?\d+)/,
    onMatch,
  },
  {
    regex: /(biostudies:S-[A-Z]{4}[\-\_A-Z\d]+)/,
    onMatch,
  },
  {
    regex: /(bmrb:(?:bmr|bmse|bmst)?[0-9]{1,6})/,
    onMatch,
  },
  {
    regex:
      /(brenda:(?:(?:\d+\.-\.-\.-)|(?:\d+\.\d+\.-\.-)|(?:\d+\.\d+\.\d+\.-)|(?:\d+\.\d+\.\d+\.\d+)))/,
    onMatch,
  },
  {
    regex: /(brenda.ligand:\d+)/,
    onMatch,
  },
  {
    regex: /(brenda.ligandgroup:\d+)/,
    onMatch,
  },
  {
    regex: /(bto:\d{7})/,
    onMatch,
  },
  {
    regex: /(cath:[1-6]\.[0-9]+\.[0-9]+\.[0-9]+)/,
    onMatch,
  },
  {
    regex: /(cbioportal:[a-z0-9\_]+)/,
    onMatch,
  },
  {
    regex: /(cdd:(?:cd)?\d{5})/,
    onMatch,
  },
  {
    regex: /(cellimage:\d+)/,
    onMatch,
  },
  {
    regex:
      /(cellxgene.collection:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/,
    onMatch,
  },
  {
    regex: /(chebi:\d+)/,
    onMatch,
  },
  {
    regex: /(chembl:CHEMBL\d+)/,
    onMatch,
  },
  {
    regex: /(chembl.compound:CHEMBL\d+)/,
    onMatch,
  },
  {
    regex: /(chemspider:\d+)/,
    onMatch,
  },
  {
    regex: /(civic.aid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.did:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.eid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.gid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.sid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.tid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(civic.vid:[0-9]+)/,
    onMatch,
  },
  {
    regex: /(clinicaltrials:NCT\d{8})/,
    onMatch,
  },
  {
    regex: /(clinvar:\d+)/,
    onMatch,
  },
  {
    regex: /(clinvar.record:RCV\d+(?:\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(complexportal:CPX-[0-9]+)/,
    onMatch,
  },
  {
    regex: /(cosmic:[A-Z0-9][A-Z0-9-]*)/,
    onMatch,
  },
  {
    regex: /(cosmic.cell:\d+)/,
    onMatch,
  },
  {
    regex: /(cpt:\d+)/,
    onMatch,
  },
  {
    regex: /(ctd.chemical:[CD]\d+)/,
    onMatch,
  },
  {
    regex: /(ctri:CTRI\/\d{4}\/\d{2,3}\/\d+)/,
    onMatch,
  },
  {
    regex: /(cvx:\d+)/,
    onMatch,
  },
  {
    regex: /(dbgap:phs[0-9]{6}(?:.v\d+.p\d+)?)/,
    onMatch,
  },
  {
    regex: /(dbsnp:rs\d+)/,
    onMatch,
  },
  {
    regex: /(decipher:\d+)/,
    onMatch,
  },
  {
    regex: /(depmap:ACH-\d+)/,
    onMatch,
  },
  {
    regex: /(dhba:\d+)/,
    onMatch,
  },
  {
    regex: /(disprot:DP\d{5})/,
    onMatch,
  },
  {
    regex: /(dmba:\d+)/,
    onMatch,
  },
  {
    regex: /(doi:10.\d{2,9}\/.*)/,
    onMatch,
  },
  {
    regex: /(doid:\d+)/,
    onMatch,
  },
  {
    regex: /(drks:DRKS\d+)/,
    onMatch,
  },
  {
    regex: /(drugbank:DB\d{5})/,
    onMatch,
  },
  {
    regex: /(drugcentral:\d+)/,
    onMatch,
  },
  {
    regex: /(duo:\d{7})/,
    onMatch,
  },
  {
    regex:
      /(ec:\d{1,2}(?:(?:(?:\.\d{1,3}){1,3})|(?:\.\d+){2}\.[nB]\d{1,3}|\.-\.-\.-|\.\d{1,3}\.-\.-|\.\d{1,3}\.\d{1,3}\.-)?)/,
    onMatch,
  },
  {
    regex: /(ecacc:\d+)/,
    onMatch,
  },
  {
    regex: /(edam:(?:data|topic|operation|format)\_\d{4})/,
    onMatch,
  },
  {
    regex: /(ega.dataset:EGAD\d{11})/,
    onMatch,
  },
  {
    regex: /(ega.study:EGAS\d{11})/,
    onMatch,
  },
  {
    regex: /(emdb:EMD-\d{4,5})/,
    onMatch,
  },
  {
    regex: /(empiar:\d+)/,
    onMatch,
  },
  {
    regex: /(ena.embl:[A-Z]+[0-9]+(?:\.\d+)?)/,
    onMatch,
  },
  {
    regex:
      /(ensembl:(?:(?:ENS[FPTG]\d{11}(?:\.\d+)?)|(?:FB\w{2}\d{7})|(?:Y[A-Z]{2}\d{3}[a-zA-Z](?:\-[A-Z])?)|(?:[A-Z_a-z0-9]+(?:\.)?(?:t)?(?:\d+)?(?:[a-z])?)))/,
    onMatch,
  },
  {
    regex: /(ensembl.metazoa:\w+(?:\.)?\d+)/,
    onMatch,
  },
  {
    regex: /(ensembl.plant:\w+(?:\.\d+)?(?:\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(euclinicaltrials:\d{4}\-\d{6}\-\d{2})/,
    onMatch,
  },
  {
    regex: /(eupath:\d{7})/,
    onMatch,
  },
  {
    regex: /(exac.variant:\d{1,2}\-\d+\-[GATC]\-[GATC])/,
    onMatch,
  },
  {
    regex: /(fairsharing:(?:bsg-[dscp]?\d{6})|(?:FAIRsharing\.\w+))/,
    onMatch,
  },
  {
    regex: /(flybase:FB\w{2}\d{7})/,
    onMatch,
  },
  {
    regex: /(fma:\d+)/,
    onMatch,
  },
  {
    regex: /(funderregistry:\d+)/,
    onMatch,
  },
  {
    regex: /(gard:\d+)/,
    onMatch,
  },
  {
    regex: /(gbif:\d+)/,
    onMatch,
  },
  {
    regex: /(gdc:[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12})/,
    onMatch,
  },
  {
    regex: /(genecards:[A-Za-z-0-9_]+(?:\@)?)/,
    onMatch,
  },
  {
    regex: /(geo:G(?:PL|SM|SE|DS)\d+)/,
    onMatch,
  },
  {
    regex: /(go:\d{7})/,
    onMatch,
  },
  {
    regex: /(gramene.gene:GR\:\d+)/,
    onMatch,
  },
  {
    regex: /(gramene.growthstage:\d{7})/,
    onMatch,
  },
  {
    regex: /(gramene.protein:\d+)/,
    onMatch,
  },
  {
    regex: /(gtdb:[cdfgops]__\w+\S+)/,
    onMatch,
  },
  {
    regex: /(hba:\d+)/,
    onMatch,
  },
  {
    regex: /(hc.trial:\d+)/,
    onMatch,
  },
  {
    regex: /(hgnc:\d{1,5})/,
    onMatch,
  },
  {
    regex: /(hl7.v2codesystem:\d+)/,
    onMatch,
  },
  {
    regex: /(hmdb:HMDB\d+)/,
    onMatch,
  },
  {
    regex:
      /(icd10:(?:(?:[XVI]+)|(?:[A-Z][0-9]+(?:(?:-[A-Z][0-9]+)|(?:\.[0-9]))?)))/,
    onMatch,
  },
  {
    regex:
      /(icd9:(?:(?:\d{1,3}-\d{1,3})|(?:(?:\d\d\d|V\d\d|E[8-9]\d\d)(?:\.\d{1,2})?)))/,
    onMatch,
  },
  {
    regex: /(icdc:\d{6})/,
    onMatch,
  },
  {
    regex: /(icf:\d+)/,
    onMatch,
  },
  {
    regex: /(idr:[0-9]{4})/,
    onMatch,
  },
  {
    regex: /(imgt.hla:[A-Z0-9*:]+)/,
    onMatch,
  },
  {
    regex:
      /(inchi:InChI\=1S?\/[A-Za-z0-9\.]+(?:\+[0-9]+)?(?:\/[cnpqbtmsih][A-Za-z0-9\-\+\(?:\)\,\/\?\;\.]+)*)/,
    onMatch,
  },
  {
    regex: /(inchikey:[A-Z]{14}\-[A-Z]{10}(?:\-[A-Z])?)/,
    onMatch,
  },
  {
    regex:
      /(insdc:(?:[A-Z]\d{5}|[A-Z]{2}\d{6}|[A-Z]{4,6}\d{8,10}|[A-J][A-Z]{2}\d{5})(?:\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(insdc.sra:[SED]R[APRSXZ]\d+)/,
    onMatch,
  },
  {
    regex: /(intact:EBI\-[0-9]+)/,
    onMatch,
  },
  {
    regex: /(interpro:IPR\d{6})/,
    onMatch,
  },
  {
    regex: /(iso.3166:\d+)/,
    onMatch,
  },
  {
    regex: /(isrctn:ISRCTN\d+)/,
    onMatch,
  },
  {
    regex: /(itis:\d+)/,
    onMatch,
  },
  {
    regex: /(jaxmice:\d{6})/,
    onMatch,
  },
  {
    regex:
      /(kegg:(?:(?:[CHDEGTMKR]\d+)|(?:\w+:[\w\d\.-]*)|(?:\w{2,4}\d{5})|(?:[a-z]{3,5})))/,
    onMatch,
  },
  {
    regex: /(kegg.compound:C\d+)/,
    onMatch,
  },
  {
    regex: /(kegg.disease:H\d+)/,
    onMatch,
  },
  {
    regex: /(kegg.drug:D\d+)/,
    onMatch,
  },
  {
    regex: /(kegg.glycan:G\d+)/,
    onMatch,
  },
  {
    regex: /(kegg.pathway:\w{2,4}\d{5})/,
    onMatch,
  },
  {
    regex: /(kegg.reaction:R\d+)/,
    onMatch,
  },
  {
    regex: /(loinc:(?:\d|\w)+-\d)/,
    onMatch,
  },
  {
    regex: /(massive:MSV\d+)/,
    onMatch,
  },
  {
    regex: /(mba:\d+)/,
    onMatch,
  },
  {
    regex: /(mesh:(?:C|D|M)\d{6,9})/,
    onMatch,
  },
  {
    regex: /(metabolights:MTBLS\d+)/,
    onMatch,
  },
  {
    regex: /(metacyc.compound:[A-Za-z0-9+_.%-:]+)/,
    onMatch,
  },
  {
    regex: /(mgi:\d+)/,
    onMatch,
  },
  {
    regex: /(mir:\d{8})/,
    onMatch,
  },
  {
    regex: /(mirbase:MI\d{7})/,
    onMatch,
  },
  {
    regex: /(mondo:\d{7})/,
    onMatch,
  },
  {
    regex: /(ncbigene:\d+)/,
    onMatch,
  },
  {
    regex: /(ncbiprotein:\w+_?\d+(?:.\d+)?)/,
    onMatch,
  },
  {
    regex: /(ncbitaxon:(?:(?:\d+)|(?:[a-zA-Z_]+)))/,
    onMatch,
  },
  {
    regex: /(ncit:[CRPA]\d+)/,
    onMatch,
  },
  {
    regex: /(ndc:\d+\-\d+\-\d+)/,
    onMatch,
  },
  {
    regex: /(ndfrt:N[0-9]{10})/,
    onMatch,
  },
  {
    regex: /(nextprot:NX_\w+)/,
    onMatch,
  },
  {
    regex: /(nord:\d+)/,
    onMatch,
  },
  {
    regex: /(omim:\d+)/,
    onMatch,
  },
  {
    regex: /(omop:\d+)/,
    onMatch,
  },
  {
    regex: /(orcid:\d{4}-\d{4}-\d{4}-\d{3}(?:\d|X))/,
    onMatch,
  },
  {
    regex: /(orphanet:C?\d+)/,
    onMatch,
  },
  {
    regex: /(orphanet.ordo:C?\d+)/,
    onMatch,
  },
  {
    regex: /(osf:[a-z0-9]{5})/,
    onMatch,
  },
  {
    regex: /(panther.family:PTHR\d{5}(?:\:SF\d{1,3})?)/,
    onMatch,
  },
  {
    regex: /(panther.pathway:P\d{5})/,
    onMatch,
  },
  {
    regex: /(panther.pthcmp:(?:G|P|U|C|S)\d{5})/,
    onMatch,
  },
  {
    regex: /(pba:\d+)/,
    onMatch,
  },
  {
    regex: /(pdb:[0-9][A-Za-z0-9]{3})/,
    onMatch,
  },
  {
    regex: /(pdb-ccd:\w{1,3})/,
    onMatch,
  },
  {
    regex: /(pdb.ligand:[A-Za-z0-9]+)/,
    onMatch,
  },
  {
    regex: /(pdc.study:PDC\d+)/,
    onMatch,
  },
  {
    regex: /(peco:\d{7})/,
    onMatch,
  },
  {
    regex: /(peptideatlas.dataset:PASS\d{5})/,
    onMatch,
  },
  {
    regex: /(pfam:PF\d{5})/,
    onMatch,
  },
  {
    regex: /(pfam.clan:CL\d+)/,
    onMatch,
  },
  {
    regex: /(pharmgkb.disease:PA\d+)/,
    onMatch,
  },
  {
    regex: /(pharmgkb.drug:PA\d+)/,
    onMatch,
  },
  {
    regex: /(pharmgkb.gene:PA\w+)/,
    onMatch,
  },
  {
    regex: /(pharmgkb.pathways:PA\d+)/,
    onMatch,
  },
  {
    regex: /(pmc:PMC\d+(?:\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(pombase:S\w+(?:\.)?\w+(?:\.)?)/,
    onMatch,
  },
  {
    regex: /(pride:\d{7})/,
    onMatch,
  },
  {
    regex: /(pubchem.compound:\d+)/,
    onMatch,
  },
  {
    regex: /(pubmed:\d+)/,
    onMatch,
  },
  {
    regex: /(px:(?:R)?PXD\d{6})/,
    onMatch,
  },
  {
    regex: /(radlex:RID\d+)/,
    onMatch,
  },
  {
    regex: /(reactome:R-[A-Z]{3}-\d+(?:-\d+)?(?:\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(rebec:RBR-\w+)/,
    onMatch,
  },
  {
    regex:
      /(refseq:(?:(?:(?:AC|AP|NC|NG|NM|NP|NR|NT|NW|WP|XM|XP|XR|YP|ZP)_\d+)|(?:NZ_[A-Z]{2,4}\d+))(?:\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(rfam:RF\d{5})/,
    onMatch,
  },
  {
    regex: /(rfc:\d+)/,
    onMatch,
  },
  {
    regex: /(rgd:\d{4,})/,
    onMatch,
  },
  {
    regex: /(rhea:\d{5})/,
    onMatch,
  },
  {
    regex: /(rnacentral:URS[0-9A-F]{10}(?:\_\d+)?)/,
    onMatch,
  },
  {
    regex: /(ror:0[a-hj-km-np-tv-z|0-9]{6}[0-9]{2})/,
    onMatch,
  },
  {
    regex: /(rrid:[a-zA-Z]+.+)/,
    onMatch,
  },
  {
    regex: /(rrrc:\d+)/,
    onMatch,
  },
  {
    regex: /(rxnorm:[0-9]{1,7})/,
    onMatch,
  },
  {
    regex: /(scop:\d+)/,
    onMatch,
  },
  {
    regex: /(sgd:(?:(?:S\d+$)|(?:Y[A-Z]{2}\d{3}[a-zA-Z](?:\-[A-Z])?)))/,
    onMatch,
  },
  {
    regex: /(signor:SIGNOR\-[A-Z]+\d+)/,
    onMatch,
  },
  {
    regex: /(snomedct:(?:\w+)?\d+)/,
    onMatch,
  },
  {
    regex: /(so:\d{7})/,
    onMatch,
  },
  {
    regex: /(ssbd.dataset:\d+)/,
    onMatch,
  },
  {
    regex: /(ssbd.project:\d+)/,
    onMatch,
  },
  {
    regex: /(stitch:\w{14})/,
    onMatch,
  },
  {
    regex:
      /(string:(?:(?:[A-N,R-Z][0-9][A-Z][A-Z, 0-9][A-Z, 0-9][0-9])|(?:[O,P,Q][0-9][A-Z, 0-9][A-Z, 0-9][A-Z, 0-9][0-9])|(?:[0-9][A-Za-z0-9]{3})))/,
    onMatch,
  },
  {
    regex: /(tao:\d{7})/,
    onMatch,
  },
  {
    regex: /(tcdb:\d+(?:\.[A-Z])?(?:\.\d+)?(?:\.\d+)?(?:\.\d+)?)/,
    onMatch,
  },
  {
    regex: /(uberon:\d+)/,
    onMatch,
  },
  {
    regex: /(unii:[A-Z0-9]+)/,
    onMatch,
  },
  {
    regex: /(uniparc:UPI[A-F0-9]{10})/,
    onMatch,
  },
  {
    regex:
      /(uniprot:(?:(?:[A-N,R-Z][0-9](?:[A-Z][A-Z, 0-9][A-Z, 0-9][0-9]){1,2})|(?:[O,P,Q][0-9][A-Z, 0-9][A-Z, 0-9][A-Z, 0-9][0-9])(?:\.\d+)?))/,
    onMatch,
  },
  {
    regex:
      /(uniprot.isoform:(?:[A-N,R-Z][0-9][A-Z][A-Z, 0-9][A-Z, 0-9][0-9])|(?:[O,P,Q][0-9][A-Z, 0-9][A-Z, 0-9][A-Z, 0-9][0-9])(?:\-\d+))/,
    onMatch,
  },
  {
    regex: /(uniprot.proteome:UP\d{9})/,
    onMatch,
  },
  {
    regex:
      /(uniref:UniRef(?:100|90|50)_(?:[OPQ][0-9][A-Z0-9]{3}[0-9]|[A-NR-Z][0-9](?:[A-Z][A-Z0-9]{2}[0-9]){1,2}|UPI[A-F0-9]{10}))/,
    onMatch,
  },
  {
    regex: /(wikidata:(?:Q|P|E|L)\d+)/,
    onMatch,
  },
  {
    regex: /(wikigenes:\d+)/,
    onMatch,
  },
  {
    regex: /(wikipathways:WP\d{1,5}(?:\_r\d+)?)/,
    onMatch,
  },
  {
    regex: /(wormbase:(?:CE[0-9]{5}|WB[A-Z][a-z]+\d+))/,
    onMatch,
  },
  {
    regex: /(xenbase:XB\-\w+\-\d+)/,
    onMatch,
  },
  {
    regex: /(zenodo.record:\d+)/,
    onMatch,
  },
  {
    regex: /(zfin:ZDB\-\w+\-\d+\-\d+)/,
    onMatch,
  },
  {
    regex: /(zinc:(?:ZINC)?\d+)/,
    onMatch,
  },
]
