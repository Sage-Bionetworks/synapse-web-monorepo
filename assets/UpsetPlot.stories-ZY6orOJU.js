import{U as L}from"./UpsetPlot-Dqys-uNK.js";import{f as u}from"./index-D3f4jUsX.js";import"./jsx-runtime-DPiG3R0R.js";import"./index-DRlER7nw.js";import"./iframe-gi3XisdE.js";import"./LargeButton-BZWEjf-P.js";import"./DefaultPropsProvider-UlX5bXx-.js";import"./createTheme-DQIvOmBk.js";import"./Button-AJnSQ6Ut.js";import"./createSimplePaletteValueFilter-DVwuXgvt.js";import"./useTimeout-B2bPIzMS.js";import"./ButtonBase-D3zgPrFN.js";import"./useForkRef-ChqFpJWE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-O-qj_I90.js";import"./useFiles-DU3bXuAE.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-DsCgHoOU.js";import"./OrientationBanner-DJ4alAZp.js";import"./index-BI1mSjG2.js";import"./spreadSx-CwcO6WA9.js";import"./react-BnG7FJAV.js";import"./FullWidthAlert-R6EVtHKx.js";import"./Alert-BYxbQIxM.js";import"./useSlot-D8yvO1xQ.js";import"./createSvgIcon-CtDRwr3p.js";import"./Close-BBiabR_k.js";import"./IconButton-CNH7gO9P.js";import"./Paper-Df0ViG5C.js";import"./useTheme-DNUoLfsv.js";import"./useTheme-B_Xprks4.js";import"./Stack-pM5AE4OC.js";import"./extendSxProp-1Gj-CtJT.js";import"./getThemeProps-DP5W_O2x.js";import"./Box-Y1nj0ApN.js";import"./AlertTitle-Bk5UvP8h.js";import"./Typography-BCGqRzgO.js";import"./index-CFzJowKf.js";import"./ClickAwayListener-YB_ofQ_g.js";import"./getReactElementRef-Dw4MON7M.js";import"./index-B4fFtDTl.js";import"./index-DdFze2Ln.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BONjhKmI.js";import"./Tooltip-CtRWM5bs.js";import"./index-DanVeDdQ.js";import"./useControlled-C8ZsNrtG.js";import"./Popper-yosZaOGL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-BFkXHN1n.js";import"./utils-FQaTZWKo.js";import"./Link-Y_M4S6oM.js";import"./Collapse-BwMzmQIR.js";import"./isNil-BPAgBugS.js";import"./_Uint8Array-BS3jSnnJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DT1F5_Ix.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BHCCo4qE.js";import"./_getTag-BqzSQALn.js";import"./tinycolor-Begke6kS.js";import"./Fade-DT4Zl6lr.js";import"./inputBaseClasses-DXtOTEzM.js";import"./calculateFriendlyFileSize-CB-owWsp.js";import"./CheckCircleTwoTone-BDWuetOC.js";import"./InfoTwoTone-Ms5lPGxf.js";import"./useMutation-96DTmNIV.js";import"./dayjs.min-hNWLMaQU.js";import"./chunk-AYJ5UCUI-DL7t06aT.js";import"./cloneDeep-C3r-Yrwt.js";import"./_initCloneObject-BLTkGPGB.js";import"./Skeleton-CZHFA_u-.js";import"./merge-CBSVjRxV.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-o6NDlEEX.js";import"./Backdrop--OtiCitv.js";import"./LinearProgress-D5W31BuD.js";import"./index-DdxIgNNo.js";import"./index-jr3MyvB3.js";import"./index-CSw4HMVA.js";import"./const-Doag8klc.js";import"./index-34O7LSLX.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
