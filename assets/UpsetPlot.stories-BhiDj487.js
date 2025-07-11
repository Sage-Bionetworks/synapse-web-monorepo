import{U as L}from"./UpsetPlot-D5YN_G6W.js";import{f as u}from"./index-B9bYdGwm.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bv_fBJN_.js";import"./DefaultPropsProvider-BRK8Gpgv.js";import"./createTheme-BSolit1L.js";import"./index-DEIgO5g0.js";import"./iframe-DRO4Mibm.js";import"./Button-DJE7iHzr.js";import"./createSimplePaletteValueFilter-DiaghoeG.js";import"./useTimeout-C3fnIm3j.js";import"./ButtonBase-BTOrtbxv.js";import"./useForkRef-ML_8ULgM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B03UST9X.js";import"./useFiles-BGrxL2iU.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-BntnvZH2.js";import"./OrientationBanner-HRNQ16-S.js";import"./index-CD6LRfjk.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cie7PCkE.js";import"./FullWidthAlert-MSTP7abe.js";import"./Alert-7UwccEQI.js";import"./useSlot-BCsmIOuw.js";import"./createSvgIcon-BUqZN3uJ.js";import"./Close-Bgy01rC6.js";import"./IconButton-B-jAlb2d.js";import"./Paper-CFzpqlYG.js";import"./useTheme-DBeyBhi1.js";import"./useTheme-BMOOn5Gt.js";import"./Stack-CMvDN6wI.js";import"./extendSxProp-Bfe98iSr.js";import"./getThemeProps-c3yHcgjd.js";import"./Box-CZNSunrR.js";import"./AlertTitle-CH1jH-vY.js";import"./Typography-BABWS0JL.js";import"./index-CS8B7mXd.js";import"./ClickAwayListener-CFizcL6r.js";import"./getReactElementRef-CvSzv7Ek.js";import"./index-C_zxhu3D.js";import"./index-CYW7llYR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BvvUKrEE.js";import"./Tooltip-Beoc5yzh.js";import"./index-BlPrlTn7.js";import"./useControlled-CG5f7BHT.js";import"./Popper-fz5TkfFk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BfPnFRzo.js";import"./QueryClientProvider-DjP109WM.js";import"./Link-C4G_EJya.js";import"./Collapse-rZubCBR0.js";import"./_baseUniq-CrHYoj_7.js";import"./_Uint8Array-CiGkbB2-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D2gDBPDN.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BTjUuWeO.js";import"./isEqual-B7Qx9sLZ.js";import"./merge-BD0x1C3U.js";import"./_initCloneObject-aSybOn34.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaYnAlan.js";import"./inputBaseClasses-YDjGCLQC.js";import"./calculateFriendlyFileSize-Djp4AHR3.js";import"./CheckCircleTwoTone-DR2KICn0.js";import"./InfoTwoTone-B2oXj03G.js";import"./useMutation-BewQEQgZ.js";import"./dayjs.min-BimRwZVh.js";import"./chunk-AYJ5UCUI-DLRn4oZF.js";import"./cloneDeep-BlyOP8Q9.js";import"./Skeleton-C9NGKUUZ.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-hthbrNOw.js";import"./Backdrop-D-Q9OPIK.js";import"./LinearProgress-CibV_yZ5.js";import"./index-DH3BVZRR.js";import"./index-CNT301xx.js";import"./index-B42X3EIr.js";import"./const-BP60AzNb.js";import"./index-BFTgbfHe.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
