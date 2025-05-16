import{U as L}from"./UpsetPlot-CybioEs-.js";import{f as u}from"./index-CCE6e1dP.js";import"./jsx-runtime-CqspjScI.js";import"./index-DwELiOEm.js";import"./iframe-CKpkvSud.js";import"./LargeButton-DWnolXPo.js";import"./DefaultPropsProvider-BIi4x-Qk.js";import"./createTheme-C2yLSCAv.js";import"./Button-DQWEjOY_.js";import"./ButtonBase-DEUBlcAw.js";import"./useTimeout-uQTgiUpa.js";import"./TransitionGroupContext-_kMZOmjP.js";import"./useForkRef-6nS14oXc.js";import"./useIsFocusVisible-DwoqQW0f.js";import"./useEventCallback-oeZLWsf5.js";import"./useFiles-DzrQRRrm.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-DDq6k8Bk.js";import"./OrientationBanner-2eG-FyEA.js";import"./index-Ca1CNIs_.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1sJcC6U.js";import"./FullWidthAlert-BAOByKqU.js";import"./Alert-C8X3IXXe.js";import"./resolveComponentProps-Bsjh6FAz.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-Dw7Y1Pmy.js";import"./Close-_v6Lyygk.js";import"./IconButton-YhUBk163.js";import"./Paper-BYnSKEKu.js";import"./Stack-D-PASjtE.js";import"./getThemeProps-Bq6i_dzk.js";import"./useTheme-CLgGp1-V.js";import"./Box-DT2Sh8Hk.js";import"./AlertTitle-BNslf1IY.js";import"./Typography-c8mIpSFm.js";import"./useTheme-CDQpdfq0.js";import"./Grow-B9oahLxp.js";import"./index-QL2Y3aCJ.js";import"./utils-4etkwNtb.js";import"./ClickAwayListener-CigyFLxQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BHqwo6lq.js";import"./index-Cb4vUnA6.js";import"./useControlled-CLVGBDQk.js";import"./useId-OZGz37hj.js";import"./Popper-N_aUFGyv.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-DzQ5xZKl.js";import"./utils-Lg92kfS4.js";import"./Link-4I5wKCkj.js";import"./Collapse-CWZgeIDo.js";import"./isNil-Yh1UL_xP.js";import"./_Uint8Array-AY3rwX4N.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DwKTkmxs.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-blO9GVwM.js";import"./_getTag-C6cJi8CE.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5KpZEr-.js";import"./Skeleton-B4iZ4BQm.js";import"./inputBaseClasses-DGI8OHrn.js";import"./calculateFriendlyFileSize-Ddpg9m3m.js";import"./CheckCircleTwoTone-B8wv6GAX.js";import"./InfoTwoTone-DpwJN-va.js";import"./mutation-UeCho2I4.js";import"./dayjs.min-CrNzlzo_.js";import"./chunk-AYJ5UCUI-fioPvBwi.js";import"./cloneDeep-ti_eOLLH.js";import"./_initCloneObject-CTeuSNQJ.js";import"./isEqual-bSNg52dZ.js";import"./merge-BByWj7sc.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./react-sizeme-oafQdAjK.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-oAOt9x7F.js";import"./Backdrop-yZKKcadj.js";import"./LinearProgress-CGHrvs_0.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
