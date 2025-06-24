import{U as L}from"./UpsetPlot-Bm55APe7.js";import{f as u}from"./index-C4Bvrv0X.js";import"./jsx-runtime-TM5gBVMz.js";import"./index-DcrLmmvh.js";import"./iframe-BfmWAJ1G.js";import"./LargeButton-DhyJ1Hb8.js";import"./DefaultPropsProvider-BNasm-Ou.js";import"./createTheme-BKvghQEf.js";import"./Button-CeywVuQa.js";import"./createSimplePaletteValueFilter-DHCUxeJ8.js";import"./useTimeout-BftIpzR-.js";import"./ButtonBase-Cl-S3PYL.js";import"./useForkRef-XqLeOv9F.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BsYeRfew.js";import"./useFiles-Dx4nqkrZ.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-Cy-pIAQY.js";import"./OrientationBanner-BxanlOCo.js";import"./index-DtkhSScd.js";import"./spreadSx-CwcO6WA9.js";import"./react-C80836hF.js";import"./FullWidthAlert-B6-1XxnC.js";import"./Alert-CBYuJjUz.js";import"./useSlot-XdCIW-h3.js";import"./createSvgIcon-BbcBufaS.js";import"./Close-D492_-ET.js";import"./IconButton-BEEZ6tpT.js";import"./Paper-H-iBRfk0.js";import"./useTheme-DtdHK4vR.js";import"./useTheme-BhuPaSeU.js";import"./Stack-Y-KdTpE4.js";import"./extendSxProp-oKPMvBLW.js";import"./getThemeProps-Cb8oY0Qe.js";import"./Box-CMo5M51H.js";import"./AlertTitle-Bi606xzP.js";import"./Typography-CgSuXiyf.js";import"./index-CFEbK4PF.js";import"./ClickAwayListener-dAZKGzwC.js";import"./getReactElementRef-Cyw8ECuQ.js";import"./index-CpnHSm9k.js";import"./index-BfBfPSox.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Hoso1Ov1.js";import"./Tooltip-DWnEW01p.js";import"./index-DyZIyS5M.js";import"./useControlled-Bw9-6emG.js";import"./Popper-DLhvBE31.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-DWcuFtFn.js";import"./utils-BSLg82VF.js";import"./Link-AwFPqLn3.js";import"./Collapse-D80fVN7l.js";import"./_baseUniq-DcrBDh3N.js";import"./_Uint8Array-B9oWbY4J.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CGp-n6LW.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Bi02mvlw.js";import"./isEqual-D-64DOLy.js";import"./merge-BQVcazkY.js";import"./_initCloneObject-DLnryqg0.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CggMuk3s.js";import"./inputBaseClasses-Zx-pyOTC.js";import"./calculateFriendlyFileSize-DuuHQRMP.js";import"./CheckCircleTwoTone-C33LPoZ-.js";import"./InfoTwoTone-CaPa5gLu.js";import"./useMutation-Bn2cJuV2.js";import"./dayjs.min-BixASCcq.js";import"./chunk-AYJ5UCUI-CnETIcAk.js";import"./cloneDeep-ChkAVuXo.js";import"./Skeleton-DL-SXoBE.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-6I8HhD-d.js";import"./Backdrop-C6yGNqvM.js";import"./LinearProgress-BxNDg3c9.js";import"./index-BaYOv1TD.js";import"./index-BZhzQssp.js";import"./index-BdoJ4ISj.js";import"./const-Doag8klc.js";import"./index-OqpcsUsr.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
