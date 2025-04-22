import { ColumnIconConfigs } from 'synapse-react-client'

export const detailPageLinks = [
  {
    isMarkdown: false,
    baseURL: 'Explore/Publications',
    URLColumnName: 'Title',
    matchColumnName: 'Title',
  },
  {
    isMarkdown: false,
    baseURL: 'Explore/Grants',
    URLColumnName: 'grantName',
    matchColumnName: 'grantName',
  },
  {
    isMarkdown: false,
    baseURL: 'Explore/Datasets',
    URLColumnName: 'datasets',
    matchColumnName: 'datasets',
  },
]
export const citationBoilerplateText =
  'Searched and Downloaded through the Cancer Complexity Knowledge Portal'

export const columnIconConfigs: ColumnIconConfigs = {
  columns: {
    dataType: {
      bioChemicalPhysical: {
        icon: 'bioChemicalPhysical',
        label: 'Bio Chemical Physical Data',
      },
      clinical: {
        icon: 'clinical',
        label: 'Clinical Data',
      },
      computationalTool: {
        icon: 'computationalTool',
        label: 'Computational Tool',
      },
      dataReuse: {
        icon: 'dataReuse',
        label: 'Data Reuse',
      },
      epigenomeProfiling: {
        icon: 'chromatin',
        label: 'Epigenome Profiling Data',
      },
      expressionProfiling: {
        icon: 'geneExpression',
        label: 'Expression Profiling Data',
      },
      genomeProfiling: {
        icon: 'geneVariants',
        label: 'Genome Profiling Data',
      },
      imaging: { icon: 'imaging', label: 'Imaging Data' },
      inSilicoModel: {
        icon: 'inSilicoModel',
        label: 'In Silico Model',
      },
      modelSystem: {
        icon: 'modelSystem',
        label: 'Model System',
      },
      proteomics: { icon: 'proteomics', label: 'Proteomics Data' },
      spatialProfiling: {
        icon: 'spatialProfiling',
        label: 'Spatial Profiling Data',
      },
      other: { icon: 'other', label: 'Other' },
    },
  },
}
