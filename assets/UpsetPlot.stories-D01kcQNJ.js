import{U as L}from"./UpsetPlot-CK3wei_Z.js";import{f as u}from"./index-DgHW6WK6.js";import"./jsx-runtime-CsNpV52b.js";import"./index-mFk7i4GH.js";import"./iframe-DEOEZpa7.js";import"./LargeButton-yXY-_j47.js";import"./DefaultPropsProvider-Bb4a2h8s.js";import"./createTheme-C3barXkp.js";import"./Button-D1O-XNc3.js";import"./ButtonBase-CRJlWVnj.js";import"./useTimeout-D6spdY7I.js";import"./TransitionGroupContext-Dt8W7umX.js";import"./useForkRef-5vJwFTIC.js";import"./useIsFocusVisible-BD-HS5zK.js";import"./useEventCallback-PvtZRVx5.js";import"./useFiles-D_KC07Yn.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-fzgxL-Wk.js";import"./OrientationBanner-D4K1PXbS.js";import"./index-BuZNpAEX.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAmm9IRN.js";import"./FullWidthAlert-DBUNX5Z0.js";import"./Alert-BxOYpbq5.js";import"./resolveComponentProps-fT-xUJV6.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-DxSwOgMO.js";import"./Close-DHLyXVKW.js";import"./IconButton-CQuDWsyU.js";import"./Paper-BzD9Caoq.js";import"./Stack-CFcOoEe3.js";import"./getThemeProps-Dtctgm80.js";import"./useTheme-N8XaFENF.js";import"./Box-D1r6O6zj.js";import"./AlertTitle-BjYPAFw4.js";import"./Typography-BaVgdRVq.js";import"./useTheme-0AVLLlD6.js";import"./Grow-BBkh1Ns9.js";import"./index-C3e2HYL3.js";import"./utils-Bd5lfNuN.js";import"./ClickAwayListener-DCBWfrxW.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-JlwuiT4k.js";import"./index-Dyubesn9.js";import"./useControlled-DdQGOSQo.js";import"./useId-B7w4jRC1.js";import"./Popper-Dj3tlAHp.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-Tl1FAVUS.js";import"./utils-Dft4bglm.js";import"./Link-DVKciDBj.js";import"./Collapse-Dxre2Wpg.js";import"./isNil-BBBzVpoC.js";import"./_Uint8Array-gbqBABgH.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ysIE1Q2w.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bwmz0e7V.js";import"./_getTag-d-X6q6ru.js";import"./tinycolor-Begke6kS.js";import"./Fade-Co4SyzRo.js";import"./Skeleton-BZAwj2-9.js";import"./inputBaseClasses-CQNINzSQ.js";import"./calculateFriendlyFileSize-Dk0vHyM_.js";import"./CheckCircleTwoTone-CNETuQEN.js";import"./InfoTwoTone-Cv4uWze4.js";import"./mutation-CVFNbaq8.js";import"./dayjs.min-C2vS6YTT.js";import"./chunk-AYJ5UCUI-c6JhkQ8h.js";import"./cloneDeep-Ds3WadWA.js";import"./_initCloneObject-BEqGcqh-.js";import"./isEqual-Bj0Ibk1q.js";import"./merge-oP5qKHGM.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-D2iKG8FQ.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D5g9A6gq.js";import"./Backdrop-sGl-J73g.js";import"./LinearProgress-Guen4GBl.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
