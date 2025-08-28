import{U as L}from"./UpsetPlot-tCg24GCs.js";import{f as u}from"./index-C42XX-J2.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-6yLGGKXD.js";import"./DefaultPropsProvider-Ch4-9Ppr.js";import"./createTheme-BeLomVuw.js";import"./index-DUnR2wGU.js";import"./iframe-DxIMUiis.js";import"./Button-B3GtIfhR.js";import"./createSimplePaletteValueFilter-DXXCLVZW.js";import"./useTimeout-NW5ssq_A.js";import"./ButtonBase-cWAJQrxa.js";import"./useForkRef-12BzkMWI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B4vna3RV.js";import"./useFiles-GseVYpjW.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-BecqIzhK.js";import"./OrientationBanner-CMmM2nyC.js";import"./index-qKI0Fo62.js";import"./spreadSx-CwcO6WA9.js";import"./react-BtLSKeTf.js";import"./FullWidthAlert-CgwAdh3k.js";import"./Alert-OcKEIYp6.js";import"./useSlot-QI6ENMq9.js";import"./createSvgIcon-BP5oj4Nx.js";import"./Close-CNp0-j0C.js";import"./IconButton-CxtjwAaM.js";import"./Paper-D5jfsf_T.js";import"./useTheme-DqJVsaV_.js";import"./useTheme-Bz9krQHR.js";import"./Stack-DiJhusha.js";import"./extendSxProp-CrNYGNvh.js";import"./getThemeProps-DmCS3g9S.js";import"./Box-DdkmxDon.js";import"./AlertTitle-D82A8tMJ.js";import"./Typography-D4ivI4uJ.js";import"./index-DSC2q4_Y.js";import"./ClickAwayListener-XLfp0UFq.js";import"./getReactElementRef-CFI6Vxtr.js";import"./index-C70ee6RX.js";import"./index-BcO9ILEt.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqG2xl5N.js";import"./Tooltip-D3bJvEAc.js";import"./index-CNaEswH4.js";import"./useControlled-BEh-GGuG.js";import"./Popper-CZN6YGZz.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-BoJvFqc3.js";import"./QueryClientProvider-CmpDJ9Jl.js";import"./Link-BLcNJuX4.js";import"./Collapse-DOavcrSg.js";import"./_baseUniq-BhG86eyQ.js";import"./_Uint8Array-DhmTz7H2.js";import"./isArray-CHk-r7uL.js";import"./_getTag-C-hzITuP.js";import"./isEqual-CRTjFSJk.js";import"./merge-DwBHZN9j.js";import"./_initCloneObject-Uix_53RU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BiglsW2E.js";import"./inputBaseClasses-C0Gy_uNc.js";import"./calculateFriendlyFileSize-DgnhvtUi.js";import"./CheckCircleTwoTone-BuvGG69W.js";import"./InfoTwoTone-DXv8Re3u.js";import"./useMutation-4FuFtcke.js";import"./dayjs.min-DjHfNNqw.js";import"./chunk-AYJ5UCUI-C211ZVfw.js";import"./cloneDeep-NhLAab3Z.js";import"./Skeleton-BpQQLQwA.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-3ziU1vNV.js";import"./Backdrop-DoNb98a5.js";import"./LinearProgress-C8lp9o03.js";import"./index-noW0Vz3U.js";import"./index-Pb9GscjL.js";import"./index-QEM5RCbd.js";import"./const-BP60AzNb.js";import"./index-CtS3JldX.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
