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

export const columnIconConfigs: ColumnIconConfigs = {
  columns: {
    dataType: {
      bioChemicalPhysical: {
        icon: 'imaging',
        label: 'Bio Chemical Physical Data Available',
      },
      clinical: {
        icon: 'clinical',
        label: 'Clinical Data Available',
      },
      computationalTool: {
        icon: 'imaging',
        label: 'Computational Tool Data Available',
      },
      dataReuse: {
        icon: 'imaging',
        label: 'Data Reuse Data Available',
      },
      epigenomeProfiling: {
        icon: 'imaging',
        label: 'Epigenome Profiling Data Available',
      },
      expressionProfiling: {
        icon: 'imaging',
        label: 'Expression Profiling Data Available',
      },
      genomeProfiling: {
        icon: 'imaging',
        label: 'Genome Profiling Data Available',
      },
      imaging: { icon: 'imaging', label: 'Image Data Available' },
      inSilicoModel: {
        icon: 'imaging',
        label: 'In Silico Model Data Available',
      },
      modelSystem: { icon: 'imaging', label: 'Model System Data Available' },
      proteomics: { icon: 'proteomics', label: 'Proteomics Data Available' },
      spatialProfiling: {
        icon: 'imaging',
        label: 'Spatial Profiling Data Available',
      },
    },
  },
}
