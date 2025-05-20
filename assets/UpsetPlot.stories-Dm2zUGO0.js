import{U as L}from"./UpsetPlot-CiXnxXMr.js";import{f as u}from"./index-CPbhrzak.js";import"./jsx-runtime-BruYoQko.js";import"./index-B-uy-sdx.js";import"./iframe-EbtsSfNi.js";import"./LargeButton-gt-uPfYo.js";import"./DefaultPropsProvider-DFjoNSbJ.js";import"./createTheme-srFiYvEO.js";import"./Button-BnBdmOxs.js";import"./ButtonBase-DG0zMMeh.js";import"./useTimeout-Cv-QQYzw.js";import"./TransitionGroupContext-n7ftLhnx.js";import"./useForkRef-ChVQG-lw.js";import"./useIsFocusVisible-DiXQCVbx.js";import"./useEventCallback-C16K_eB4.js";import"./useFiles-Y12FH1bv.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-B3NxpShm.js";import"./OrientationBanner-BZu9QjtH.js";import"./index-DomK8mv2.js";import"./spreadSx-CwcO6WA9.js";import"./react-DQ_ckMew.js";import"./FullWidthAlert-Bj0hNDHq.js";import"./Alert-DBLm8Pok.js";import"./resolveComponentProps-B82OG9Zp.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-2G3uB26y.js";import"./Close-Dy69P2Lg.js";import"./IconButton-Dwzx9qi2.js";import"./Paper-D4Tga6OS.js";import"./Stack-CZCOHPbK.js";import"./getThemeProps-DeCu2QiA.js";import"./useTheme-Cbn8UOjv.js";import"./Box-Cqz8jNcW.js";import"./AlertTitle-Dludu-yD.js";import"./Typography-oxIQOfGg.js";import"./useTheme-DHXa63_v.js";import"./Grow-CRBk-oNE.js";import"./index-DpIgPCaI.js";import"./utils-BP1xdL2F.js";import"./ClickAwayListener-5g4aG161.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DDQG6vte.js";import"./index-3w0ggcn7.js";import"./useControlled-Baesg9Fm.js";import"./useId-C6yrAKwc.js";import"./Popper-BVfSTFT0.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-CZIsftBW.js";import"./utils-D7XdtvjZ.js";import"./Link-CSVa4weM.js";import"./Collapse-BLl7ItWH.js";import"./isNil-1RPAbAz-.js";import"./_Uint8Array-CnGxCulp.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CB51Nx8C.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CDbb4T68.js";import"./_getTag-CxzBhuc_.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4jjhn0e.js";import"./Skeleton-5aKuyqmQ.js";import"./inputBaseClasses-DSstwJAW.js";import"./calculateFriendlyFileSize-Bglr51Pk.js";import"./CheckCircleTwoTone-BXw1IUwh.js";import"./InfoTwoTone-CjzZE5sW.js";import"./mutation-Cl20WE66.js";import"./dayjs.min-Djvj_XYE.js";import"./chunk-AYJ5UCUI-1wUcRWZS.js";import"./cloneDeep-BWJvylmg.js";import"./_initCloneObject-CmQS0zFf.js";import"./isEqual-BQl57RAj.js";import"./merge-BPZ2_WTR.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-CKPqtniy.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-gQp2VOUV.js";import"./Backdrop-CQCXNLiq.js";import"./LinearProgress-Bu8lBfY4.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
