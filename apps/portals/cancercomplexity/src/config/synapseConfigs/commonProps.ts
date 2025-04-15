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
        label: 'Bio Chemical Physical Data Available',
      },
      clinical: {
        icon: 'clinical',
        label: 'Clinical Data Available',
      },
      computationalTool: {
        icon: 'computationalTool',
        label: 'Computational Tool Data Available',
      },
      dataReuse: {
        icon: 'dataReuse',
        label: 'Data Reuse Data Available',
      },
      epigenomeProfiling: {
        icon: 'chromatin',
        label: 'Epigenome Profiling Data Available',
      },
      expressionProfiling: {
        icon: 'geneExpression',
        label: 'Expression Profiling Data Available',
      },
      genomeProfiling: {
        icon: 'geneVariants',
        label: 'Genome Profiling Data Available',
      },
      imaging: { icon: 'imaging', label: 'Image Data Available' },
      inSilicoModel: {
        icon: 'inSilicoModel',
        label: 'In Silico Model Data Available',
      },
      modelSystem: {
        icon: 'modelSystem',
        label: 'Model System Data Available',
      },
      proteomics: { icon: 'proteomics', label: 'Proteomics Data Available' },
      spatialProfiling: {
        icon: 'spatialProfiling',
        label: 'Spatial Profiling Data Available',
      },
      other: { icon: 'other', label: 'Other Data Available' },
    },
  },
}
