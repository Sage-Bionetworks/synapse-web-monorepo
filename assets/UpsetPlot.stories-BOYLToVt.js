import{U as L}from"./UpsetPlot-CTpV0FpI.js";import{f as u}from"./index-DIEKjjyc.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BBoIIV2j.js";import"./DefaultPropsProvider-BSJaRsTl.js";import"./createTheme-rdXb4Z3n.js";import"./index-C8bD_8RJ.js";import"./iframe-6NIrtisn.js";import"./Button-BAI1H06J.js";import"./createSimplePaletteValueFilter-CnJEMf1_.js";import"./useTimeout-tSu105ec.js";import"./ButtonBase-s_N_k51K.js";import"./useForkRef-iNjtCg2u.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CJgqf_3y.js";import"./useFiles-CTnFA4bu.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CvwR6iLA.js";import"./OrientationBanner-DV5DjAg7.js";import"./index-JKjjlUJ_.js";import"./spreadSx-CwcO6WA9.js";import"./react-L-tuU4f9.js";import"./FullWidthAlert-BYAzIMj3.js";import"./Alert-W7Fn9LAQ.js";import"./useSlot-xRCA8-yW.js";import"./createSvgIcon-o81qpFfO.js";import"./Close-DkoDsS75.js";import"./IconButton-mB-mk9DV.js";import"./Paper-BY_NDt3Z.js";import"./useTheme-BMLVXfjV.js";import"./useTheme-B2ck8NEL.js";import"./Stack-NnGJ5qne.js";import"./extendSxProp-CjG0KNf_.js";import"./getThemeProps-aTPmA6S6.js";import"./Box-Cm0v7wfp.js";import"./AlertTitle-uJo3K6bg.js";import"./Typography-MIMEr5ls.js";import"./index-Co4awF9m.js";import"./ClickAwayListener-j1E8ceys.js";import"./getReactElementRef-BXbGSLa4.js";import"./index-DNI5SuWC.js";import"./index-B01S0N5E.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqSfdBtc.js";import"./Tooltip-X3XBQeaA.js";import"./index-D3moNsfw.js";import"./useControlled-C2I-Fb0l.js";import"./Popper-BJsw6KEJ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-c3aTz-1u.js";import"./QueryClientProvider-B0vgEJwN.js";import"./Link-DT1xrAE-.js";import"./Collapse-CkW4wqJc.js";import"./_baseUniq-Bh5IYYWn.js";import"./_Uint8Array-DvFvmNGE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C0Gz5PSj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D9xtNUPh.js";import"./isEqual-CRqgLt-Z.js";import"./merge-E1ABMEbN.js";import"./_initCloneObject-DPoQn5Vc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DteZvXvx.js";import"./inputBaseClasses-Ck21ZDTq.js";import"./calculateFriendlyFileSize-BhDEBuU0.js";import"./CheckCircleTwoTone-BX5nbuHN.js";import"./InfoTwoTone-DLogZ7mx.js";import"./useMutation-BvDubB4-.js";import"./dayjs.min-8GkHU6E7.js";import"./chunk-AYJ5UCUI-BLLTkN9d.js";import"./cloneDeep-Pu5ABENM.js";import"./Skeleton-0mTOQZYg.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Bp21MGwm.js";import"./Backdrop-DBO5i-QH.js";import"./LinearProgress-9IifhZsu.js";import"./index-djzosZUf.js";import"./index-CDzIOvKF.js";import"./index-C8NyxcR4.js";import"./const-BP60AzNb.js";import"./index-NcSvj1Ex.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
