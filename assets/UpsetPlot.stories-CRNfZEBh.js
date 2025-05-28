import{U as L}from"./UpsetPlot-Dtj5Tvx9.js";import{f as u}from"./index-CkX7w7wv.js";import"./jsx-runtime-G3kcun9p.js";import"./index-Yg--iZq-.js";import"./iframe-BCAWC2I3.js";import"./LargeButton-6paYamUe.js";import"./DefaultPropsProvider-C_pLLkTF.js";import"./createTheme-N1-IWSxF.js";import"./Button-C1jDFRQd.js";import"./ButtonBase-CscigYjd.js";import"./useTimeout-DZZ8kkGX.js";import"./TransitionGroupContext-82H1ouW-.js";import"./useForkRef-CP5fgMc-.js";import"./useIsFocusVisible-DqibNYDO.js";import"./useEventCallback-B2bKWCyK.js";import"./useFiles-Csa7dt3u.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-BlBmq_8s.js";import"./OrientationBanner-CyUpBZqy.js";import"./index-BmkGWmvH.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_-pcSi9.js";import"./FullWidthAlert-BHmvYLXZ.js";import"./Alert-DfvFtguU.js";import"./resolveComponentProps-D4e1xWws.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-cnhKmrGB.js";import"./Close-DoMxHeVd.js";import"./IconButton-Di2GD9l2.js";import"./Paper-nI3QrkK7.js";import"./Stack-B-60LY7Q.js";import"./getThemeProps-CnIQNgOP.js";import"./useTheme-D7OueLh-.js";import"./Box-D2jroMLZ.js";import"./AlertTitle-BH9q9-gu.js";import"./Typography-82RYpCCZ.js";import"./useTheme-BEHJ7b1Q.js";import"./Grow-D5UV9RB1.js";import"./index-C1xQEisA.js";import"./utils-whpWPMHJ.js";import"./ClickAwayListener-BO4uKgNA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-b-ocpEJh.js";import"./index-CxihIUxw.js";import"./useControlled-B7iGhHHh.js";import"./useId-BW8Wy0LR.js";import"./Popper-Bu2gOJgQ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-C-x_EuHm.js";import"./utils-Dw86f0ge.js";import"./Link-Cn2J7rSx.js";import"./Collapse-CUMtwh7G.js";import"./isNil-B6br_ZUr.js";import"./_Uint8Array-D2lqwLng.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CFnMZm62.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-so24MjHt.js";import"./_getTag-VdZ1AeIP.js";import"./tinycolor-Begke6kS.js";import"./Fade-MvuZT9g3.js";import"./Skeleton-CtwgzPcw.js";import"./inputBaseClasses-bR0UpD5b.js";import"./calculateFriendlyFileSize-C234RjjD.js";import"./CheckCircleTwoTone-D907d1Fo.js";import"./InfoTwoTone-FuykDER9.js";import"./mutation-ClyIXRCV.js";import"./dayjs.min-B30jtBEV.js";import"./chunk-AYJ5UCUI-Do7oMhra.js";import"./cloneDeep-DyVOe_3L.js";import"./_initCloneObject-F6eDGnab.js";import"./isEqual-1qT8SkT_.js";import"./merge-B4L7tGLW.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-yUjLWLxZ.js";import"./react-sizeme-BIrrAuXl.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BEfRXrAv.js";import"./Backdrop-BDFbH7e0.js";import"./LinearProgress-B7cxSAcQ.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
