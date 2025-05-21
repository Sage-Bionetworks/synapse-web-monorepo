import{U as L}from"./UpsetPlot-q-GwRJ_q.js";import{f as u}from"./index-CxZvmol_.js";import"./jsx-runtime-DmKnoNQ-.js";import"./index-BFCc_wv0.js";import"./iframe-DVK1wk6d.js";import"./LargeButton-Bjie7ZLK.js";import"./DefaultPropsProvider-DUkpy3gp.js";import"./createTheme-BXEwkt-l.js";import"./Button-DYb5I_h6.js";import"./ButtonBase-BvXHS7E8.js";import"./useTimeout-B89Jbts_.js";import"./TransitionGroupContext-U6akLiTY.js";import"./useForkRef-BjgbR4nl.js";import"./useIsFocusVisible-BNNkxGZE.js";import"./useEventCallback-BViUXQES.js";import"./useFiles-Bmp6q2a5.js";import"./VerificationSubmission-B0kBNeMy.js";import"./SynapseConstants-DJnXKVNq.js";import"./OrientationBanner-DLwSvgHC.js";import"./index-7sMRgjqI.js";import"./spreadSx-CwcO6WA9.js";import"./react-B7JEe_9q.js";import"./FullWidthAlert-C2j0NeYe.js";import"./Alert-CKvIY_ZC.js";import"./resolveComponentProps-DEEyNDFA.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CexmQeMX.js";import"./Close-BLLYpaxl.js";import"./IconButton-CtoYFknA.js";import"./Paper-Dn3hpbBt.js";import"./Stack-CilMpvcP.js";import"./getThemeProps-DEqWItKx.js";import"./useTheme-txGj-KA5.js";import"./Box-CnkquDgp.js";import"./AlertTitle-De-Y6WlG.js";import"./Typography-CoReq-7T.js";import"./useTheme-DbaDTwfd.js";import"./Grow-DRdE8lYO.js";import"./index-HtDB6D_8.js";import"./utils-CH6UHCvk.js";import"./ClickAwayListener-C935n3RT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BESuS2go.js";import"./index-zScYxpIZ.js";import"./useControlled-BCnvLdxA.js";import"./useId-B4FULkf-.js";import"./Popper-DjVyUDrD.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-BBtTkatK.js";import"./utils-DGVs3mxC.js";import"./Link-iK3V06Y5.js";import"./Collapse-BHBLFnaj.js";import"./isNil-DF8LcSjB.js";import"./_Uint8Array-BGMUFk-X.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CzyhUoMh.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-HSUY0yvO.js";import"./_getTag-B7_rEu3Z.js";import"./tinycolor-Begke6kS.js";import"./Fade-9Bau5x4J.js";import"./Skeleton-DlWq6871.js";import"./inputBaseClasses-DWCx47eo.js";import"./calculateFriendlyFileSize-BHEbv2lr.js";import"./CheckCircleTwoTone-D4_hhNK2.js";import"./InfoTwoTone-E9_F69oy.js";import"./mutation-DUrdKa48.js";import"./dayjs.min-TSt401mi.js";import"./chunk-AYJ5UCUI-BAlWt6x4.js";import"./cloneDeep-BBUYS9nA.js";import"./_initCloneObject-CB_EWvAd.js";import"./isEqual-36wh2HjX.js";import"./merge-CAkvabO_.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DnxC6kpb.js";import"./react-sizeme-N7Dnpdhs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dss2jdRB.js";import"./Backdrop-8qA_F1hP.js";import"./LinearProgress-UGlfctSQ.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
