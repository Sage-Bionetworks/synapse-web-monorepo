import{U as L}from"./UpsetPlot-CHg_z8-O.js";import{f as u}from"./index-CCg5zn6Y.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BG_NO1_s.js";import"./DefaultPropsProvider-B9JV_CUS.js";import"./createTheme-CTBtZ_cy.js";import"./index-BD8T7zq6.js";import"./iframe-BCztISwF.js";import"./Button-D3ajUzUs.js";import"./createSimplePaletteValueFilter-DeoxNqRG.js";import"./useTimeout-0eXle5dh.js";import"./ButtonBase-DzeUsUkN.js";import"./useForkRef-C_rm1XEs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BxBCqc4_.js";import"./useFiles-BMNFt-8g.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-ruF53FsM.js";import"./OrientationBanner-DeOiH3yd.js";import"./index-D5GYg9hQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-BmWlFtp9.js";import"./FullWidthAlert-DeCznv24.js";import"./Alert-DXEjMnWz.js";import"./useSlot-fds4Yeop.js";import"./createSvgIcon-Pv2fR8IF.js";import"./Close-H9g7nKcO.js";import"./IconButton-BRuECVtO.js";import"./Paper-_pmqSPmr.js";import"./useTheme-CQSNJTUG.js";import"./useTheme-DFpCyL4Y.js";import"./Stack-l4t04YEH.js";import"./useThemeProps-CGtS0plU.js";import"./getThemeProps-Fi8dnZUZ.js";import"./extendSxProp-iPj9BVlN.js";import"./Box-DQV0lxds.js";import"./AlertTitle-Bm25oWD_.js";import"./Typography-Cxv8qnpg.js";import"./index-CIL5iEm5.js";import"./ClickAwayListener-D0w7bfZZ.js";import"./getReactElementRef-JB-rNIYf.js";import"./index-C6FD6fLo.js";import"./index-CLf-jdg9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BkapnwIp.js";import"./Tooltip-BrvlfHcB.js";import"./index-CKxt-HAj.js";import"./useControlled-BDiO9zgL.js";import"./Popper-CPoBNdFa.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DQtNzDr0.js";import"./QueryClientProvider-DStyJqXK.js";import"./Link-DckGLzQN.js";import"./Collapse-EXdIFGDf.js";import"./_baseUniq-4-5ousxn.js";import"./_Uint8Array-C6Z07qUy.js";import"./isArray-DGqRpJYm.js";import"./_getTag-Bu_44Cjs.js";import"./isEqual-BwYcoTf8.js";import"./noop-DX6rZLP_.js";import"./merge-DiV7m9Pu.js";import"./_initCloneObject-CmXH6YeZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DlP0g-24.js";import"./inputBaseClasses-BQe-pxTr.js";import"./calculateFriendlyFileSize-Dks1cdcZ.js";import"./CheckCircleTwoTone-HUw_GkW9.js";import"./InfoTwoTone-DFOS-ggU.js";import"./useMutation-O6IXzSsV.js";import"./dayjs.min-B3-A15Bv.js";import"./chunk-AYJ5UCUI-BsG23He-.js";import"./cloneDeep-f1dMV6ix.js";import"./Skeleton-whSO5RLo.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-lOlRPj3G.js";import"./Backdrop-BXaQqlUz.js";import"./LinearProgress-Py_EGnx4.js";import"./index-B8Nv6blh.js";import"./index-C5YeGYok.js";import"./index-BwsyDRBQ.js";import"./const-BP60AzNb.js";import"./index-XZxLPeDZ.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
