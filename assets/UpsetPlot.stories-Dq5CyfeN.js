import{U as L}from"./UpsetPlot-C11cwDZM.js";import{f as u}from"./index-C9E9OCDo.js";import"./jsx-runtime-iTckiti-.js";import"./index-OmKv73xn.js";import"./iframe--GHfuLEa.js";import"./LargeButton-D62dB6DB.js";import"./DefaultPropsProvider-m8uC2dx3.js";import"./createTheme-DdjUdKD8.js";import"./Button-CKq-XtVo.js";import"./createSimplePaletteValueFilter-D2fPYCk7.js";import"./useTimeout-lsN_4YZN.js";import"./ButtonBase-Ddz4PRLN.js";import"./useForkRef-BMsIR7A2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-RCSR5afN.js";import"./useFiles-BStaXocn.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-Vk5n6xdz.js";import"./OrientationBanner-DruA684W.js";import"./index-DjvzjlK9.js";import"./spreadSx-CwcO6WA9.js";import"./react-Di00t4ym.js";import"./FullWidthAlert-gs85-68Y.js";import"./Alert-DFXFwOoD.js";import"./useSlot-BDZe0K82.js";import"./createSvgIcon-DaKklsSP.js";import"./Close-CBzjYm2V.js";import"./IconButton-BLxRufzo.js";import"./Paper--Ek-rOjO.js";import"./useTheme-wqjdtqKl.js";import"./useTheme-DyFYj_Od.js";import"./Stack-D_cZIW5H.js";import"./extendSxProp-lNt0Lqwv.js";import"./getThemeProps-8g7cwFhp.js";import"./Box-CDnpDSqJ.js";import"./AlertTitle-DepColIi.js";import"./Typography-D7jX6E3C.js";import"./index-BbWdtbRX.js";import"./ClickAwayListener-cUUEbsf5.js";import"./getReactElementRef-O1pz2c9_.js";import"./index-B0sesRE2.js";import"./index-Dmj9pDvv.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CrGAHFQv.js";import"./Tooltip-Df8LoEvS.js";import"./index-BTMxsB14.js";import"./useControlled-C5hjvIoJ.js";import"./Popper-CVmXhaxr.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-Ck_JqutI.js";import"./utils-B8xz8Y1w.js";import"./Link-CpQL_QhH.js";import"./Collapse-LtaPanW6.js";import"./_baseUniq-CyZrehIc.js";import"./_Uint8Array-BEYiI4Hb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-YWwYBF9X.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BDVqsmY6.js";import"./isEqual-DsNYYQ4s.js";import"./merge-DEOWGRJ0.js";import"./_initCloneObject-DRXptzaQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-lT0Ugc1Q.js";import"./inputBaseClasses-BBR0S8_g.js";import"./calculateFriendlyFileSize-CG7HQJ8D.js";import"./CheckCircleTwoTone-C3XC_MY0.js";import"./InfoTwoTone-Brolf2hD.js";import"./useMutation-DWv4RrhX.js";import"./dayjs.min-CPZsdPh_.js";import"./chunk-AYJ5UCUI-bcHceysS.js";import"./cloneDeep-B6sAkpIg.js";import"./Skeleton-y9i4KNfR.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-tFlFUaPd.js";import"./Backdrop-BRu3vhPf.js";import"./LinearProgress-DdN1vMT9.js";import"./index-BB50vpTw.js";import"./index-BCK0qD4U.js";import"./index-CeyhQqFj.js";import"./const-Doag8klc.js";import"./index-Bagjw42s.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
