import{U as L}from"./UpsetPlot-B7GwebA5.js";import{f as u}from"./index-DsWsuJgi.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Dg6_3aPH.js";import"./DefaultPropsProvider-BDt2e6U1.js";import"./createTheme-CTYanVb6.js";import"./index-BWypuEAC.js";import"./iframe-DLoU1ahu.js";import"./Button-Dcf2Uy6O.js";import"./createSimplePaletteValueFilter-DyxFD1HT.js";import"./useTimeout-CV-UDPnG.js";import"./ButtonBase-B1Aawh7J.js";import"./useForkRef-BYimg5tu.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cv2RV5mv.js";import"./useFiles-K8DYYfbL.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BNqJ1dmQ.js";import"./OrientationBanner-DO3atoak.js";import"./index-DMGiq-oD.js";import"./spreadSx-CwcO6WA9.js";import"./react-DjBUmadF.js";import"./FullWidthAlert-CRt1fznC.js";import"./Alert-BV3pGEf4.js";import"./useSlot-Bjs5jEzg.js";import"./createSvgIcon-BtjRo1s8.js";import"./Close-TuaEvS9Q.js";import"./IconButton-CG40tOLN.js";import"./Paper-CnCPZiGK.js";import"./useTheme-C5bnTO0C.js";import"./useTheme-vH2-3CZY.js";import"./Stack-B3sHXsJB.js";import"./extendSxProp-An3U-zM_.js";import"./getThemeProps-Ds-P6itY.js";import"./Box-BNUP0C4N.js";import"./AlertTitle-Co0RehR7.js";import"./Typography-BuQPwiWH.js";import"./index-B_N18MqX.js";import"./ClickAwayListener-DXEacgiq.js";import"./getReactElementRef-C59rUygw.js";import"./index-Dsh6_7g_.js";import"./index-OIClFg-6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow--ZE6kIjo.js";import"./Tooltip-LGtZ2wNx.js";import"./index-BTTxMwcY.js";import"./useControlled-zZFQr41i.js";import"./Popper-CqfbaZIs.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DE-P6w3m.js";import"./QueryClientProvider-C0WTo0Yv.js";import"./Link-CTVAbhge.js";import"./Collapse-Csaq8Kqm.js";import"./_baseUniq-Di1qZggb.js";import"./_Uint8Array-BMT3sbmx.js";import"./isArray-OPNH0lK8.js";import"./_getTag-DHdisHvI.js";import"./isEqual-UFGSw-KB.js";import"./merge-CwLris3H.js";import"./_initCloneObject-lij9pG62.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4hRl5lB.js";import"./inputBaseClasses-6-j6zI35.js";import"./calculateFriendlyFileSize-Z2sNf6lN.js";import"./CheckCircleTwoTone-BGkZTGGE.js";import"./InfoTwoTone-DB8Ypec5.js";import"./useMutation-7J5H8WCt.js";import"./dayjs.min-CjfNKo90.js";import"./chunk-AYJ5UCUI-BocGNCD5.js";import"./cloneDeep-BDdpJTPu.js";import"./Skeleton-ZFgYUmdS.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cr5w4fIw.js";import"./Backdrop-BAGHeVaI.js";import"./LinearProgress-BoAtZwY0.js";import"./index-w53bkd4G.js";import"./index-B2QbFTl6.js";import"./index-DxccLOxx.js";import"./const-BP60AzNb.js";import"./index-D6cyGYhc.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
