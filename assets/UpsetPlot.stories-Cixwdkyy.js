import{U as L}from"./UpsetPlot-B5dRQ6uN.js";import{f as u}from"./index-gL65PPG3.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Cty7DAus.js";import"./DefaultPropsProvider-DllTIwuT.js";import"./createTheme-Cmip4D3k.js";import"./index-CsQ_dtFt.js";import"./iframe-BrZuctF3.js";import"./Button-BC4TwfXN.js";import"./createSimplePaletteValueFilter-tlZ8CI8S.js";import"./useTimeout-BfOIeXZu.js";import"./ButtonBase-DphK-mGP.js";import"./useForkRef-ChoTOfXn.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DSIdQNfw.js";import"./useFiles-6WrTqGM5.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Cg_4Agmh.js";import"./OrientationBanner-D8ZR4pD2.js";import"./index-BxSlDoHW.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNQHEto8.js";import"./FullWidthAlert-BfiXHZxu.js";import"./Alert-Bw88P3_8.js";import"./useSlot-DdaJYVUE.js";import"./createSvgIcon-DJcBpyjP.js";import"./Close-BOsW5qMc.js";import"./IconButton-Ci8W1Yhy.js";import"./Paper-BjTwNz8F.js";import"./useTheme-DzUDjm22.js";import"./useTheme-CBnc1aZ_.js";import"./Stack-B0kdWABf.js";import"./extendSxProp-B3wFOf4h.js";import"./getThemeProps-DpnPGkbN.js";import"./Box-sYcFPFE4.js";import"./AlertTitle-Dl0ipMyg.js";import"./Typography-DrYL7mon.js";import"./index-BLf4na4t.js";import"./ClickAwayListener-DlAC2NUk.js";import"./getReactElementRef-MCnNlpng.js";import"./index-B57y3sov.js";import"./index-CiyvAaLz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CuMuHmpZ.js";import"./Tooltip-wSUIYq70.js";import"./index-30FK6v6B.js";import"./useControlled-Oabr0Ps4.js";import"./Popper-TK99_ULZ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CON6sbsO.js";import"./QueryClientProvider-DrnsKFO0.js";import"./Link-CHIwKtz4.js";import"./Collapse-B5yca7Jx.js";import"./_baseUniq-C3U75rlo.js";import"./_Uint8Array-BSammFXB.js";import"./isArray-BBPx6tkp.js";import"./_getTag-CdV3gicE.js";import"./isEqual-Bkbn_e1j.js";import"./merge-8_g12ylz.js";import"./_initCloneObject-CFCSuk4S.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CupicnC-.js";import"./inputBaseClasses-CXyb78Fj.js";import"./calculateFriendlyFileSize-BR0yD13t.js";import"./CheckCircleTwoTone-qt2LfLaU.js";import"./InfoTwoTone-fzLd9iyA.js";import"./useMutation-CmpFDWM1.js";import"./dayjs.min-crYlBkAO.js";import"./chunk-AYJ5UCUI-DjQcL2EA.js";import"./cloneDeep-s7ZyiLW1.js";import"./Skeleton-CMFgpc0r.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CetxdPY1.js";import"./Backdrop-DhVNNgRe.js";import"./LinearProgress-ziXNcWk_.js";import"./index-BefF6MXs.js";import"./index-CLBqwj0n.js";import"./index-DULUlL1K.js";import"./const-BP60AzNb.js";import"./index-C1oaBekE.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
