import{U as L}from"./UpsetPlot-C0sh4Yyg.js";import{f as u}from"./index-DEtTvaj4.js";import"./jsx-runtime-CQPQXr52.js";import"./index-KKmRTF5s.js";import"./iframe-DRiXRSY5.js";import"./LargeButton-BwHp5k3W.js";import"./DefaultPropsProvider-CWjJlZr6.js";import"./createTheme-BqgKvQ8G.js";import"./Button-CDG2w3Q3.js";import"./createSimplePaletteValueFilter-BTPJzFbr.js";import"./useTimeout-BCXwqZGe.js";import"./ButtonBase-BaArPKRC.js";import"./useForkRef-D79-SeVS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bq52wuuH.js";import"./useFiles-CwDpHdTz.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-pq2jxX2i.js";import"./OrientationBanner-DyZBz6DX.js";import"./index-lUjIlAO0.js";import"./spreadSx-CwcO6WA9.js";import"./react-B4ldvmD6.js";import"./FullWidthAlert-DtTI913S.js";import"./Alert-C_ZZXjq8.js";import"./useSlot-CLNHE8BT.js";import"./createSvgIcon-B8xlFo8P.js";import"./Close-DwV5UBXB.js";import"./IconButton-m3tI1RB4.js";import"./Paper-jcbo9BO-.js";import"./useTheme-DBGU2jzI.js";import"./useTheme-HEqh14Zh.js";import"./Stack-9Hc468Wb.js";import"./extendSxProp-CQpNTWbd.js";import"./getThemeProps-DjdTtCv_.js";import"./Box-Xg0w7t2C.js";import"./AlertTitle-DFGqbxHs.js";import"./Typography-DVQWdlVG.js";import"./index-DLQYH-hE.js";import"./ClickAwayListener-ChCwd6mN.js";import"./getReactElementRef-Bvh2yZ15.js";import"./index-CbuTK_hw.js";import"./index-CS9z8aEe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-lyiR1ZA0.js";import"./Tooltip-CCpJJKI-.js";import"./index-ygp4hJLM.js";import"./useControlled-DKh-KTFM.js";import"./Popper-C9xFKDlU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DH7Ym7ZZ.js";import"./utils-CtWK0csr.js";import"./Link-BuOcEBSX.js";import"./Collapse-D4K7Ux3-.js";import"./isNil-B_BJKF3J.js";import"./_Uint8Array-Dx0fLmqC.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dd4dGT1V.js";import"./isArray-Dxzbedgu.js";import"./isEqual-CAN5-Gd-.js";import"./_getTag-D0V2SLmd.js";import"./tinycolor-Begke6kS.js";import"./Fade-HbE-yoUa.js";import"./inputBaseClasses-D0lO1Juj.js";import"./calculateFriendlyFileSize-DQ8c_zc0.js";import"./CheckCircleTwoTone-DpMtbz9w.js";import"./InfoTwoTone-BNWQZzrY.js";import"./useMutation-DLlT5jgZ.js";import"./dayjs.min-CZ_KWEVN.js";import"./chunk-AYJ5UCUI-sa7DX7t9.js";import"./cloneDeep-BGb7d97h.js";import"./_initCloneObject-B4x6wi9T.js";import"./Skeleton-DRAPXtU3.js";import"./merge-iQbBRW5N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CWDEOIr1.js";import"./Backdrop-DI4CezY2.js";import"./LinearProgress-DPIRP_tj.js";import"./index-BBXmHzXW.js";import"./index-DBgqbKOD.js";import"./index-Cdmo-ibb.js";import"./const-Doag8klc.js";import"./index-xosa-Xuu.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
