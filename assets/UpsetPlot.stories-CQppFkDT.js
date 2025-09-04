import{U as L}from"./UpsetPlot-T2B3YTTc.js";import{f as u}from"./index-C3tCEEGF.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D3nqpPJv.js";import"./DefaultPropsProvider-DA0U_kgt.js";import"./createTheme-CLYM1FUC.js";import"./index-eFl-S8ON.js";import"./iframe-Bwktd0AN.js";import"./Button-C4ZeJCRl.js";import"./createSimplePaletteValueFilter-D1o4f4ux.js";import"./useTimeout-C_PuK_9Y.js";import"./ButtonBase-7gRlsKFg.js";import"./useForkRef-jNhyWntA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W9eU435C.js";import"./useFiles-B5LO1uxe.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-Olv1Zxsm.js";import"./OrientationBanner-BXuTAg1A.js";import"./index-DIfqU3_E.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAjnC65B.js";import"./FullWidthAlert-DJNHmQMq.js";import"./Alert-BDyGXl7E.js";import"./useSlot-DH6QMbEO.js";import"./createSvgIcon-CnwVkhPD.js";import"./Close-DBIfCGXf.js";import"./IconButton-BfaoKVbM.js";import"./Paper-CxU6RlC_.js";import"./useTheme-BFWFuju5.js";import"./useTheme-CJmN68Ix.js";import"./Stack-CCfAF-IQ.js";import"./extendSxProp-_bdPkhlD.js";import"./getThemeProps-CFhiInyd.js";import"./Box-DohQnecE.js";import"./AlertTitle-DHUMM-no.js";import"./Typography-CP_QeUGL.js";import"./index-8yy629tL.js";import"./ClickAwayListener-DVltpB5j.js";import"./getReactElementRef-DAdCLlMf.js";import"./index-DJsR3SOo.js";import"./index-DjGKRKV1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BBlT1Etq.js";import"./Tooltip-ChkUZoxB.js";import"./index-CTdLJCZx.js";import"./useControlled-Bq2zjJFV.js";import"./Popper-BGtMDbHv.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-Dze-Gcid.js";import"./QueryClientProvider-JY8B-ej3.js";import"./Link-Da7z_I0z.js";import"./Collapse-BJSa4r00.js";import"./_baseUniq-CBn-njXz.js";import"./_Uint8Array-l2RPaGmH.js";import"./isArray-C5VllVpE.js";import"./_getTag-Do2m6-7_.js";import"./isEqual-bbIu23Cq.js";import"./merge-OOrelz3k.js";import"./_initCloneObject-kc9We_Be.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dx5i-c0V.js";import"./inputBaseClasses-BTx6rMf0.js";import"./calculateFriendlyFileSize-Dq2slKjG.js";import"./CheckCircleTwoTone-C0G3ehLD.js";import"./InfoTwoTone-BfDmBmuP.js";import"./useMutation-D8DuA68J.js";import"./dayjs.min-DiFORWWY.js";import"./chunk-AYJ5UCUI-CuvoydLy.js";import"./cloneDeep-BJdQ3bik.js";import"./Skeleton-YXjxykSC.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BqCFZgSC.js";import"./Backdrop-B6XVhb64.js";import"./LinearProgress-C-2nKc9a.js";import"./index-DZik6y3H.js";import"./index-SELjoNRF.js";import"./index-CIeyumv5.js";import"./const-BP60AzNb.js";import"./index-DcheKHJo.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
