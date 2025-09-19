import{U as L}from"./UpsetPlot-l-E-9GdK.js";import{f as u}from"./index-DQxC06bQ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-dhKa6GPY.js";import"./DefaultPropsProvider-Yj25Mou0.js";import"./createTheme-DdIeWMhk.js";import"./index-sd0YBnCi.js";import"./iframe-DVYlga3I.js";import"./Button-KNb4UeA6.js";import"./createSimplePaletteValueFilter-zeUINUQY.js";import"./useTimeout-B_Tp_-WM.js";import"./ButtonBase-BTjmQqw3.js";import"./useForkRef-CHUct0W1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CVVcdaCj.js";import"./useFiles-Do5IBH1c.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-C_IwDCRv.js";import"./OrientationBanner-D7uInX_M.js";import"./index-D2v4tOag.js";import"./spreadSx-CwcO6WA9.js";import"./react-BdgbTTL6.js";import"./FullWidthAlert-D-JIEHkV.js";import"./Alert-Lky9k3yL.js";import"./useSlot-B15kkZE-.js";import"./createSvgIcon-BB914k_q.js";import"./Close-B4WTN9qd.js";import"./IconButton-Drb2gRwi.js";import"./Paper-DTwSBB6m.js";import"./useTheme-DT7PkjGc.js";import"./useTheme-BgNkO1EL.js";import"./Stack-ec17v0Gb.js";import"./extendSxProp-mslzv5DB.js";import"./getThemeProps-9mJ2iQYz.js";import"./Box-_qmyWplA.js";import"./AlertTitle-BiuU5EAB.js";import"./Typography-D5MbW9_J.js";import"./index-BmMoY9aL.js";import"./ClickAwayListener-lzupNfXx.js";import"./getReactElementRef-Cu_0CXbf.js";import"./index-DdccfWLe.js";import"./index-FmDvS8Q8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-EJ2qm4Dg.js";import"./Tooltip-DVqhwzdl.js";import"./index-Djpzpj5X.js";import"./useControlled-DYvBVNIT.js";import"./Popper-DATX_HyC.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-C6imdaHY.js";import"./QueryClientProvider-nJ0R6vFz.js";import"./Link-DXy5Fg4p.js";import"./Collapse-DWu1Ndrz.js";import"./_baseUniq-BPJPICvm.js";import"./_Uint8Array-CGDsgUvk.js";import"./isArray-BQwmoBWm.js";import"./_getTag-C2Lnsqb5.js";import"./isEqual-BnkqVwwC.js";import"./merge-BnaNBIC1.js";import"./_initCloneObject-DaiBktpY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C1-s1xYp.js";import"./inputBaseClasses-BGVgyZbo.js";import"./calculateFriendlyFileSize-CCEZ1tKZ.js";import"./CheckCircleTwoTone-BJMpAPc2.js";import"./InfoTwoTone-D_B42BPL.js";import"./useMutation-DCePfSwN.js";import"./dayjs.min-CvA7XRhY.js";import"./chunk-AYJ5UCUI-BNxn_8R-.js";import"./cloneDeep-gKltjWRB.js";import"./Skeleton-DJOP7Jrw.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CnS6P251.js";import"./Backdrop-CXvbQ6VG.js";import"./LinearProgress-eXJFvw98.js";import"./index-CcDNt488.js";import"./index-Btluu0C2.js";import"./index-DpiG1aFD.js";import"./const-BP60AzNb.js";import"./index-wYW5DuxF.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      const url = \`/Explore/Data%20by%20Files?QueryWrapper0=\${JSON.stringify(query)}\`;
      console.log(url);
    }
  }
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn()
  }
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn()
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
