import{n as e}from"./chunk-jRWAZmH_.js";import{n as t,t as n}from"./UpsetPlot-C24iDBO0.js";var r,i,a,o,s,c;e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Home Page/UpsetPlot`,component:n},a={args:{sql:`SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)`,rgbIndex:0,maxBarCount:20,setName:`Individuals (#) per Assay`,combinationName:`Individuals (#)`,summaryLink:`#`,summaryLinkText:`Explore All Of Something`,onClick:e=>{let t={sql:`select * from syn12345`,selectedFacets:[{concreteType:`org.sagebionetworks.repo.model.table.FacetColumnValuesRequest`,columnName:`Assays`,facetValues:[...e.sets.values()].map(e=>e.name)}]},n=`/Explore/Data%20by%20Files?qw0=${JSON.stringify(t)}`;console.log(n)}}},o={args:{sql:`SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL`,rgbIndex:0,maxBarCount:10,setName:`Set size`,combinationName:`Intersection size`,onClick:r()}},s={args:{sql:`SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL`,maxBarCount:10,setName:`Set size`,combinationName:`Intersection size`,variant:`ampals`,onClick:r()}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
    onClick: selection => {
      const sets = (selection as any).sets;
      const query: Query = {
        sql: 'select * from syn12345',
        // stub files sql
        selectedFacets: [{
          concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          columnName: 'Assays',
          facetValues: [...sets.values()].map((v: any) => v.name) as string[]
        }]
      };
      const url = \`/Explore/Data%20by%20Files?qw0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`Demo`,`ElitePortalDemo`,`AMPALSPortalVariant`]}))();export{s as AMPALSPortalVariant,a as Demo,o as ElitePortalDemo,c as __namedExportsOrder,i as default};