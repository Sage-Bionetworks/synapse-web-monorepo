import{U as L}from"./UpsetPlot-D6RH46Qh.js";import{f as u}from"./index-H4aJnr41.js";import"./jsx-runtime-DyzG1hwI.js";import"./index-CrSrYSTF.js";import"./iframe-CMGcwyU8.js";import"./LargeButton-CNshlxOP.js";import"./DefaultPropsProvider-DWF5CBcq.js";import"./createTheme-Is747m2y.js";import"./Button-DtaNQqCu.js";import"./ButtonBase-Btia2eQe.js";import"./useTimeout-CaiJjEK4.js";import"./TransitionGroupContext-DxZXjnHx.js";import"./useForkRef-C8M4wLUf.js";import"./useIsFocusVisible-BTCzTTr7.js";import"./useEventCallback-DHPME8kn.js";import"./useFiles-Bka2L5ox.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-Bwu0qB46.js";import"./OrientationBanner-DXkttNGr.js";import"./index-qI3IIQ-p.js";import"./spreadSx-CwcO6WA9.js";import"./react-O48Z7vaA.js";import"./FullWidthAlert-rjMyFGK6.js";import"./Alert-Cm8kQflu.js";import"./resolveComponentProps-DyjLIVKx.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CUNVkehu.js";import"./Close-B9m6eLPP.js";import"./IconButton-DHpv-rlf.js";import"./Paper-BwPqQmBI.js";import"./Stack-DknzwWm6.js";import"./getThemeProps-B56GMEUH.js";import"./useTheme-C0i1PFNN.js";import"./Box-1gY1bGlg.js";import"./AlertTitle-1VF7a4z7.js";import"./Typography-DzUle5GT.js";import"./useTheme-DhD4Q8NU.js";import"./Grow-BUmN-gNH.js";import"./index-CAg7QE2R.js";import"./utils-D7M9m_8l.js";import"./ClickAwayListener-DxQfJRP3.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BwMDWNOg.js";import"./index-HDNDhk7k.js";import"./useControlled-DgCtf78D.js";import"./useId-DuezacBB.js";import"./Popper-BnveApbh.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-DJ0M6IWq.js";import"./utils-BPMC0IQI.js";import"./Link-B-mm3T7u.js";import"./Collapse-BFoXWlCs.js";import"./isNil-BrU7Yzj-.js";import"./_Uint8Array-CdKCkqyI.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-iezpm4wN.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-fkYr_Tyw.js";import"./_getTag-2sIXRL8V.js";import"./tinycolor-Begke6kS.js";import"./Fade-DRISSy7_.js";import"./Skeleton-BhyIo3kT.js";import"./inputBaseClasses-DGjAuvih.js";import"./calculateFriendlyFileSize-yzj5Sy8t.js";import"./CheckCircleTwoTone-DJHnZOGu.js";import"./InfoTwoTone-BB__BbP8.js";import"./mutation-BUMzrZ3W.js";import"./dayjs.min-BrH-GAW7.js";import"./chunk-AYJ5UCUI-CjNLu336.js";import"./cloneDeep-Bp1YEk0j.js";import"./_initCloneObject-CzqCuNIq.js";import"./isEqual-B8DTjVuz.js";import"./merge-C1qPWmGd.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-BqL-KOpK.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BnEJZ9gD.js";import"./Backdrop-Ch_p3ORd.js";import"./LinearProgress-D7mNsozj.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
