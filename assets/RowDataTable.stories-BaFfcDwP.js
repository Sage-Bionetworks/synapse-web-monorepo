import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CR4qI0Ep.js";import{f as n,t as r}from"./dist-jiKX-16m.js";import{n as i,t as a}from"./RowDataTable-i2NfBv1K.js";var o,s,c,l,u,d,f,p;e((()=>{i(),r(),o=t(),s={name:`Name`,grantDOI:`DOI`,dataType:`Data Type(s)`},c=`Synodos NF2`,l=`["Analysis, drugScreen, geneExpression, genomicVariants, immunoassay, kinomics, volume"]`,u=`["https://doi.org/10.48105/pc.gr.88541, https://doi.org/10.48105/pc.gr.88552, https://doi.org/10.48105/pc.gr.88580, https://doi.org/10.48105/pc.gr.88495, https://doi.org/10.48105/pc.gr.88438, https://doi.org/10.48105/pc.gr.88461, https://doi.org/10.48105/pc.gr.88567, https://doi.org/10.48105/pc.gr.88682, https://doi.org/10.48105/pc.gr.88823"]`,d={title:`UI/RowDataTable`,component:a,parameters:{chromatic:{viewports:[600,1200]}}},f={render:e=>(0,o.jsx)(a,{...e}),args:{rowData:[c,l,u],headers:[{name:`name`,columnType:n.STRING},{name:`dataType`,columnType:n.STRING_LIST},{name:`grantDOI`,columnType:n.STRING_LIST}],columnAliases:s,columnLinks:[{isMarkdown:!1,matchColumnName:`Grant DOI`,linkColumnName:`Grant DOI`}]}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <RowDataTable {...args} />,
  args: {
    rowData: [nameVal, dataTypeVal, doiVal],
    headers: [{
      name: 'name',
      columnType: ColumnTypeEnum.STRING
    }, {
      name: 'dataType',
      columnType: ColumnTypeEnum.STRING_LIST
    }, {
      name: 'grantDOI',
      columnType: ColumnTypeEnum.STRING_LIST
    }],
    columnAliases: dataColumnAliases,
    columnLinks: [{
      isMarkdown: false,
      matchColumnName: 'Grant DOI',
      linkColumnName: 'Grant DOI'
    }]
  }
}`,...f.parameters?.docs?.source}}},p=[`Demo`]}))();export{f as Demo,p as __namedExportsOrder,d as default};