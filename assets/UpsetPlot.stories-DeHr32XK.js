import{U as L}from"./UpsetPlot-tKe0RkQw.js";import{f as u}from"./index-DdRoKIqI.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BdQLzGU8.js";import"./DefaultPropsProvider-igusQ6nr.js";import"./createTheme-H1Dsx0f2.js";import"./index-CyaC6C9M.js";import"./iframe-DVO2sOA7.js";import"./Button-DY4-erp3.js";import"./createSimplePaletteValueFilter-DXhg1chW.js";import"./useTimeout-DnzmxlwV.js";import"./ButtonBase-DeKe3_Pq.js";import"./useForkRef-BdoLN6De.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-HR6r5QDp.js";import"./useFiles-DqXWRdLP.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BcS6pAr3.js";import"./OrientationBanner-CG03QXVu.js";import"./index-BDHVF7zq.js";import"./spreadSx-CwcO6WA9.js";import"./react-JIiKIcnf.js";import"./FullWidthAlert-Dm9wjr4x.js";import"./Alert-CX_6dWjM.js";import"./useSlot-DtqzQqwD.js";import"./createSvgIcon-D26Ik47l.js";import"./Close-36WCucuH.js";import"./IconButton-B4lJlp-J.js";import"./Paper-C1zodLdI.js";import"./useTheme-Dzwgi_yn.js";import"./useTheme-2WTqdYsP.js";import"./Stack-DuNoS5UG.js";import"./extendSxProp-aFKfhcg8.js";import"./getThemeProps-DUb0x1pd.js";import"./Box-TtuRu3g-.js";import"./AlertTitle-LRTkPzvh.js";import"./Typography-st_y82mL.js";import"./index-CV5xniWo.js";import"./ClickAwayListener-DJZi5PU9.js";import"./getReactElementRef-C9kSLM4V.js";import"./index-Oc3CgUQO.js";import"./index-DxB4MPXu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-UQ58OAOl.js";import"./Tooltip-6R1JgVQo.js";import"./index-CXR7n0Cv.js";import"./useControlled-j4hQ7Q1o.js";import"./Popper-ROR_DG8Z.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CHsUcFhx.js";import"./QueryClientProvider-B3zHAd0y.js";import"./Link-BW12XdVC.js";import"./Collapse-BynCIxJe.js";import"./_baseUniq-D4p32fKM.js";import"./_Uint8Array-Cy6t9XcF.js";import"./isArray-Cc0W7s7X.js";import"./_getTag-BAhJrBE8.js";import"./isEqual-BykgLa6_.js";import"./merge-7a-O-WLR.js";import"./_initCloneObject-CGLRXhCQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-YGgjrwuC.js";import"./inputBaseClasses-aQr5mJnX.js";import"./calculateFriendlyFileSize-JYrc0r5a.js";import"./CheckCircleTwoTone-BH5aKRhu.js";import"./InfoTwoTone-CoaCnS3M.js";import"./useMutation-BAQZYviv.js";import"./dayjs.min-BArBwRfF.js";import"./chunk-AYJ5UCUI-B1YFZTwg.js";import"./cloneDeep-BLJr3MDv.js";import"./Skeleton-BHuZd6hg.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BDHD6GuR.js";import"./Backdrop-DO9nPZPx.js";import"./LinearProgress-DDC0rDA-.js";import"./index-aiExeFTj.js";import"./index-EbR8_Hft.js";import"./index-xEm3-msB.js";import"./const-BP60AzNb.js";import"./index-BpASOoYA.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
