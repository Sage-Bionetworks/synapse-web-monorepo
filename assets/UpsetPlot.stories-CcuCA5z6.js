import{U as L}from"./UpsetPlot-BcVqM20e.js";import{f as u}from"./index-DgdB-1PA.js";import"./jsx-runtime-3KUIpe_B.js";import"./index-DKQmXyTg.js";import"./iframe-yVMHiQlN.js";import"./LargeButton-kEvFLOr-.js";import"./DefaultPropsProvider-BLKPmz24.js";import"./createTheme-D71xLB5y.js";import"./Button-fGoJWvNB.js";import"./ButtonBase-CkYDoZ72.js";import"./useTimeout-D1oI4iH6.js";import"./TransitionGroupContext-B_1k5y15.js";import"./useForkRef-WbU4IK3w.js";import"./useIsFocusVisible-YFynukRh.js";import"./useEventCallback-DPuUUDpa.js";import"./useFiles-BUTSDjpp.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-BKYSFUA4.js";import"./OrientationBanner-hPZ43e6I.js";import"./index-C-TJzvvw.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dtsa6pJa.js";import"./FullWidthAlert-C4lmFUoi.js";import"./Alert-Aziq9jrC.js";import"./resolveComponentProps-BGzDORmu.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-50Cdg5i5.js";import"./Close-CSP2Jd51.js";import"./IconButton-pbjeZzOL.js";import"./Paper-CpI3p7vt.js";import"./Stack-CpeVWMZC.js";import"./getThemeProps-CQbQMCh0.js";import"./useTheme-BdTZ9glP.js";import"./Box-DHQrsK7r.js";import"./AlertTitle-BpB3V9XK.js";import"./Typography-SSCOYWVs.js";import"./useTheme-HpprIIPg.js";import"./Grow-DBVaKRUq.js";import"./index--OvIPCqu.js";import"./utils-DJQOJB4m.js";import"./ClickAwayListener-Dt1qC4MI.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BBYtGIG7.js";import"./index-Cle-c0aH.js";import"./useControlled-CtW-cS0b.js";import"./useId-CF9Yu02v.js";import"./Popper-CGUN53ew.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-B7kP4S9m.js";import"./utils-D5WnLCld.js";import"./Link-Bpjhw2CS.js";import"./Collapse-DgDuu3nh.js";import"./isNil-BwVJPUb-.js";import"./_Uint8Array-Hpg7Ovco.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CpRgRSSG.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Be5X7RjA.js";import"./_getTag-gn94A73Q.js";import"./tinycolor-Begke6kS.js";import"./Fade-CMDFt0Nj.js";import"./Skeleton-C670lw8b.js";import"./inputBaseClasses-DaTlLvG_.js";import"./calculateFriendlyFileSize-Dn_xi8Ur.js";import"./CheckCircleTwoTone-BsG1c10B.js";import"./InfoTwoTone-Brz641sQ.js";import"./mutation-CJXf9Cy9.js";import"./dayjs.min-D019G3yF.js";import"./chunk-AYJ5UCUI-DkAV2hPV.js";import"./cloneDeep-rpODRfQ8.js";import"./_initCloneObject-BIxNbgCW.js";import"./isEqual-CblXoSZj.js";import"./merge-CfMdqnSR.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-CZs03g8l.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BBMouywJ.js";import"./Backdrop-Co9O8Qob.js";import"./LinearProgress-BiWTHg34.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
