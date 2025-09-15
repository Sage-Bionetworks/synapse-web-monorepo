import{U as L}from"./UpsetPlot-Aok1QiNw.js";import{f as u}from"./index-DfTXCxi6.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-mtawNzGi.js";import"./DefaultPropsProvider-CC2ZtPmq.js";import"./createTheme-D-kospWj.js";import"./index-C2PZBrLv.js";import"./iframe-CNTF6X_t.js";import"./Button-c0UHW0MR.js";import"./createSimplePaletteValueFilter-D08C6jui.js";import"./useTimeout-BUOTtkI_.js";import"./ButtonBase-ClEqCu4q.js";import"./useForkRef-CUmErhp7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce_-6k31.js";import"./useFiles-B0U4gzY5.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./SynapseConstants-Dtw8JT9K.js";import"./OrientationBanner-BFfM4kQK.js";import"./index-o3mbyDJ_.js";import"./spreadSx-CwcO6WA9.js";import"./react-C1E0WWj9.js";import"./FullWidthAlert-C_J5Noie.js";import"./Alert-DNb5zPwV.js";import"./useSlot-BoukHlmH.js";import"./createSvgIcon-CZi17tUa.js";import"./Close-raPQlKpe.js";import"./IconButton-DL9Auw19.js";import"./Paper-DlQITwJL.js";import"./useTheme-CWrjHpSC.js";import"./useTheme-CnkkHqH9.js";import"./Stack-Dy4-WgM_.js";import"./extendSxProp-DCZvLCZ1.js";import"./getThemeProps-BghImWoL.js";import"./Box-YD4QvbDf.js";import"./AlertTitle-CJceuYZo.js";import"./Typography-5nQ2YQd7.js";import"./index-D39n2xwi.js";import"./ClickAwayListener-C_f-0IT0.js";import"./getReactElementRef-QZCM3h1T.js";import"./index-BkdGZOWW.js";import"./index-D7wXRBOq.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D045avyu.js";import"./Tooltip-BP3wuRWq.js";import"./index-DgnACGHd.js";import"./useControlled-Chb41gWY.js";import"./Popper-DFXRF7a3.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-DZqyF7W4.js";import"./QueryClientProvider-CTUgZ56q.js";import"./Link-S3cKxk76.js";import"./Collapse-B3YoQXgf.js";import"./_baseUniq-BRoY8VEw.js";import"./_Uint8Array-B4xmgUBf.js";import"./isArray-42N_5E-2.js";import"./_getTag-LSp1chIl.js";import"./isEqual-CMiPFqsp.js";import"./merge-FniWYtdi.js";import"./_initCloneObject-R9J6iBsV.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CUlhCYG9.js";import"./inputBaseClasses-DHiWbVro.js";import"./calculateFriendlyFileSize-B_omjKN-.js";import"./CheckCircleTwoTone-CiIEkiU2.js";import"./InfoTwoTone-60mfq9v0.js";import"./useMutation-CBu7Udma.js";import"./dayjs.min-CHEXfb8p.js";import"./chunk-AYJ5UCUI-Cxe4yrTd.js";import"./cloneDeep-DabqN8bB.js";import"./Skeleton-L-wdtKFv.js";import"./SqlFunctions-DQ27hT8m.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-ZoufKF0h.js";import"./Backdrop-87_nV6vj.js";import"./LinearProgress-BK1ry841.js";import"./index-C3GBIdTm.js";import"./index-yZ4ACe00.js";import"./index-BqL--isr.js";import"./const-BP60AzNb.js";import"./index-C6QkiBrj.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
