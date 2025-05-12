import{U as L}from"./UpsetPlot-BYCkhwi7.js";import{f as u}from"./index-BGImgjS_.js";import"./jsx-runtime-tHJZYBcw.js";import"./index-Df9ki4m7.js";import"./iframe-gu9nKSuU.js";import"./LargeButton-MNoMtke2.js";import"./DefaultPropsProvider-BBINbyFF.js";import"./createTheme-BINNrTrD.js";import"./Button-otBf-fCg.js";import"./ButtonBase-BJnbOYI0.js";import"./useTimeout-CkReBcKO.js";import"./TransitionGroupContext-Bx3VJPm0.js";import"./useForkRef-By6tpA4H.js";import"./useIsFocusVisible-CFzyuqS3.js";import"./useEventCallback-FcdrOq4M.js";import"./useFiles-jPWlXuHc.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-Ba1heHX4.js";import"./OrientationBanner-DmtTd2TQ.js";import"./index-DgcLTxff.js";import"./spreadSx-CwcO6WA9.js";import"./react-EBci5e-X.js";import"./FullWidthAlert-DPDY4mXa.js";import"./Alert-BCxFFk19.js";import"./resolveComponentProps-C_h7LpqL.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-aeHwAv7r.js";import"./Close-Dg0Yyhdl.js";import"./IconButton-C4fHQ2mP.js";import"./Paper-DL6O15NN.js";import"./Stack-BcSaEj59.js";import"./getThemeProps-_buxTbuI.js";import"./useTheme-CrZO8DL0.js";import"./Box-C3CCkmvB.js";import"./AlertTitle-BgljIgUy.js";import"./Typography-CPW1w4ki.js";import"./useTheme-D7aU4zJW.js";import"./Grow-Bw7JNtNh.js";import"./index-Bs9oirMy.js";import"./utils-FhFw91KO.js";import"./ClickAwayListener-CvMIu_kV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip--cxr29Mn.js";import"./index-Cxy_adfL.js";import"./useControlled-D0Pe8713.js";import"./useId-BitcG2W_.js";import"./Popper-C7DDlbfw.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-DQWZeiYF.js";import"./utils-8n4YkW-3.js";import"./Link-CaTJJdl0.js";import"./Collapse-Cv_pKtFc.js";import"./isNil-dfygdcyY.js";import"./_Uint8Array-BY3nRIcz.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CnZoMM3i.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bsx2OylX.js";import"./_getTag-DaN_q5c6.js";import"./tinycolor-Begke6kS.js";import"./Fade-CNMLBLPt.js";import"./Skeleton-CgkAeMKL.js";import"./inputBaseClasses-Czd2LOTF.js";import"./calculateFriendlyFileSize-DvGvzjK0.js";import"./CheckCircleTwoTone-gIIBURBC.js";import"./InfoTwoTone-D0xmy2qt.js";import"./mutation-BRa-ekOT.js";import"./dayjs.min-MYorRcO6.js";import"./chunk-AYJ5UCUI-hydSzuez.js";import"./cloneDeep-CeJYBU74.js";import"./_initCloneObject-BmsGmtIF.js";import"./isEqual-DW03Q8_-.js";import"./merge-Byo7_oei.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-CZ7CcVVY.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DMsIYWbO.js";import"./Backdrop-BXwT-rTA.js";import"./LinearProgress-DAH29SpC.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
