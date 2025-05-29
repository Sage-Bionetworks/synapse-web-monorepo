import{U as L}from"./UpsetPlot-D8Zg_inQ.js";import{f as u}from"./index-Ca8wVLXi.js";import"./jsx-runtime-DkbpurNs.js";import"./index-BWTz5das.js";import"./iframe-CIwcPPSS.js";import"./LargeButton-vHE-WMRt.js";import"./DefaultPropsProvider-ByOVQs-n.js";import"./createTheme-A3wdy6CE.js";import"./Button-iLozBQyn.js";import"./ButtonBase-BhLDaX_S.js";import"./useTimeout-vSjzk-Un.js";import"./TransitionGroupContext-C__s9c2O.js";import"./useForkRef-D76_CRuH.js";import"./useIsFocusVisible-FsgV9KWa.js";import"./useEventCallback-Bwqph7YH.js";import"./useFiles-DsFYUvgk.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-WdyYb7Om.js";import"./OrientationBanner-Db5b4wt6.js";import"./index-WdIyC9zy.js";import"./spreadSx-CwcO6WA9.js";import"./react-B92lp8oH.js";import"./FullWidthAlert-CV5VqY0G.js";import"./Alert-oO57gt13.js";import"./resolveComponentProps-D-CanUzl.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-D1wrlE5j.js";import"./Close-B0Wd8leo.js";import"./IconButton-4eAf36A2.js";import"./Paper-C9rqLEV4.js";import"./Stack-bl7kY2rD.js";import"./getThemeProps-DZ0VtK3w.js";import"./useTheme--XQLJcej.js";import"./Box-oS9X8DmL.js";import"./AlertTitle-DXMw9tkm.js";import"./Typography-C9RmHiWH.js";import"./useTheme-BWFniEYL.js";import"./Grow-CF1islW1.js";import"./index-CWlTKyso.js";import"./utils-CnscWP4i.js";import"./ClickAwayListener-KlaQc122.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-AOG27yeN.js";import"./index-BF7XAVzO.js";import"./useControlled-BZcNW5Fh.js";import"./useId-CWMqiBBO.js";import"./Popper-mjGHPHZJ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-DcrUW3Ia.js";import"./utils-D0Sn12cL.js";import"./Link-DpF5ZODC.js";import"./Collapse-C3IE9BnM.js";import"./isNil-SLuPmgyU.js";import"./_Uint8Array-dFMtMdky.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BtYs4CQI.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CSEyos6D.js";import"./_getTag-9L9wrwHR.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cf5YgOGZ.js";import"./Skeleton-CjiSKKcr.js";import"./inputBaseClasses-B_tp1BOw.js";import"./calculateFriendlyFileSize-DFfVqf0N.js";import"./CheckCircleTwoTone-CXzQKqsF.js";import"./InfoTwoTone-B5Z1IoZb.js";import"./mutation-DVozW0ZS.js";import"./dayjs.min-BwO3N9YX.js";import"./chunk-AYJ5UCUI-Dw2DX1gQ.js";import"./cloneDeep-Bc5O_UuE.js";import"./_initCloneObject-B99hApBY.js";import"./isEqual-BTEFoVlQ.js";import"./merge-BKuaLmoA.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-C82iTfZi.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DsdKomU-.js";import"./Backdrop-MmdoHhD6.js";import"./LinearProgress-qaySfJFS.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
