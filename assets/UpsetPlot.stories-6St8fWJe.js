import{U as L}from"./UpsetPlot-CVzT5TPM.js";import{f as u}from"./index-CqD6J4Tf.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-ByNd_7z3.js";import"./DefaultPropsProvider-GHBqEJT2.js";import"./createTheme-CdBGe3A9.js";import"./index-DTiucX1-.js";import"./iframe-BPdeJRIc.js";import"./Button-RFo2xAOi.js";import"./createSimplePaletteValueFilter-DxGY06TG.js";import"./useTimeout-C3q3_1GQ.js";import"./ButtonBase-CODV-5ol.js";import"./useForkRef-DLJbdNV-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DgaFUJOs.js";import"./useFiles-CSpN989q.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BYmnDa2q.js";import"./OrientationBanner-VaVGF65z.js";import"./index-ho4g8501.js";import"./spreadSx-CwcO6WA9.js";import"./react-F5ucaG-H.js";import"./FullWidthAlert-Ba9F-jmT.js";import"./Alert-B41bfpeU.js";import"./useSlot-I8FLieFo.js";import"./createSvgIcon-BTFgaDhp.js";import"./Close-lSmauOAH.js";import"./IconButton-DYtoyTee.js";import"./Paper-wVWwCaVf.js";import"./useTheme-BI99mBpH.js";import"./useTheme-DjT_8-R5.js";import"./Stack-08nnDyO9.js";import"./extendSxProp-lrmHIORZ.js";import"./getThemeProps-DD6PYkmp.js";import"./Box-m6d38t7d.js";import"./AlertTitle-D4RtFlat.js";import"./Typography-SEe_jd4g.js";import"./index-Bcg5C1w6.js";import"./ClickAwayListener-BqkOztd0.js";import"./getReactElementRef-D4EdHFTt.js";import"./index-EXgdFXVC.js";import"./index-DHZ9XFHD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bxaf_lLg.js";import"./Tooltip-lkEFrFtR.js";import"./index-DeTyZKLb.js";import"./useControlled-ChiK7g5q.js";import"./Popper-3uMhxsXW.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DySft6ts.js";import"./QueryClientProvider-Br6Pa3c6.js";import"./Link-DkqxuGR5.js";import"./Collapse-B0SFoJWz.js";import"./_baseUniq-kecnPfBf.js";import"./_Uint8Array-BPSdPbUW.js";import"./isArray-4pmS_fD6.js";import"./_getTag-Bq4R2FwC.js";import"./isEqual-BojHzzbq.js";import"./merge-Xk0KA-e4.js";import"./_initCloneObject-QfqTw_-S.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bh3JWz5y.js";import"./inputBaseClasses-DHVG9zCC.js";import"./calculateFriendlyFileSize-CBs-QxsO.js";import"./CheckCircleTwoTone-vWDfNogy.js";import"./InfoTwoTone-DNofee99.js";import"./useMutation-QRG3uNAG.js";import"./dayjs.min-Brm1XBLT.js";import"./chunk-AYJ5UCUI-DnCbA0Sb.js";import"./cloneDeep-CYQ_RdzJ.js";import"./Skeleton-B-x23h3k.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DHi_oufQ.js";import"./Backdrop-CZgM-tBC.js";import"./LinearProgress-DW5or1cq.js";import"./index-DqHq0ndG.js";import"./index-BaWENSgM.js";import"./index-MYc3g0bE.js";import"./const-BP60AzNb.js";import"./index-C8CRLY1n.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
