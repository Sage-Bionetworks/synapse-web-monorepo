import{U as L}from"./UpsetPlot-CB6khGnV.js";import{f as u}from"./index-9_ABhabr.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-B0wvRMud.js";import"./DefaultPropsProvider-BBZIFPvR.js";import"./createTheme-iPWGREpV.js";import"./index-Bdq4dmxh.js";import"./iframe-5yykBupe.js";import"./Button-B5BE5G75.js";import"./createSimplePaletteValueFilter-B08EAaoN.js";import"./useTimeout-BgfxGmiP.js";import"./ButtonBase-K5QUFqmx.js";import"./useForkRef-FkJ5xwJz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B3csqgbt.js";import"./useFiles-DEvOFmFa.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-hOwjwdFE.js";import"./OrientationBanner-BPvudHr3.js";import"./index-CM8-5iHT.js";import"./spreadSx-CwcO6WA9.js";import"./react-1IQ7WwpW.js";import"./FullWidthAlert-CuVItq3x.js";import"./Alert-D5J_QYyB.js";import"./useSlot-B1AafxGW.js";import"./createSvgIcon-BAPuczsE.js";import"./Close-x0g1LbKt.js";import"./IconButton-Bm0mQzZG.js";import"./Paper-DtBiqJHv.js";import"./useTheme-CX35NsQR.js";import"./useTheme-CIm1AslH.js";import"./Stack-IYrRXk3F.js";import"./extendSxProp-uGraOKmh.js";import"./getThemeProps-B5uRTLYs.js";import"./Box-CmW2E2u3.js";import"./AlertTitle-DbRisxUh.js";import"./Typography-Bfy3NAwK.js";import"./index-Gt54P5Cv.js";import"./ClickAwayListener-rcZhvlfv.js";import"./getReactElementRef-CO5JF6fA.js";import"./index-DNhnPR2V.js";import"./index-cD1hMmUR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-mCCzwbDE.js";import"./Tooltip-CAaYHkt6.js";import"./index-DN-kZBvF.js";import"./useControlled-CuMNUpX-.js";import"./Popper-BcHEeLWk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DlYhqM71.js";import"./QueryClientProvider-WVsmkAUI.js";import"./Link-C9U5o0S_.js";import"./Collapse-Da-lqXQN.js";import"./_baseUniq-BzXwBHbs.js";import"./_Uint8Array-okti9onC.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-HMheKOEV.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DgX4jnQH.js";import"./isEqual-L-KNPlIu.js";import"./merge-C55x1JO3.js";import"./_initCloneObject-B1qigGUv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2n0ls8-.js";import"./inputBaseClasses-BDrUoQOh.js";import"./calculateFriendlyFileSize-vxbAcG0j.js";import"./CheckCircleTwoTone-CBXoT0Sj.js";import"./InfoTwoTone-Dw6Bdq5N.js";import"./useMutation-k3w03tVk.js";import"./dayjs.min-Bkrd2JzD.js";import"./chunk-AYJ5UCUI-CTppoZqK.js";import"./cloneDeep-DplcVtEj.js";import"./Skeleton-DUMrFc95.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-osSgfkHD.js";import"./Backdrop-C_7Zn_cl.js";import"./LinearProgress-Dh7ZdQqs.js";import"./index-Dnt92Ft9.js";import"./index-JOrG1NKM.js";import"./index-DNyl6F5s.js";import"./const-BP60AzNb.js";import"./index-Bj6vl4ft.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
