import{U as L}from"./UpsetPlot-CSApE-UD.js";import{f as u}from"./index-BxBdoEck.js";import"./jsx-runtime-CTFcVP1P.js";import"./index-DUHgmkzF.js";import"./iframe-D88NDgS-.js";import"./LargeButton-BzjxN5Z_.js";import"./DefaultPropsProvider-idcb1ntx.js";import"./createTheme-Bdh3JIYj.js";import"./Button-CGHrnfkZ.js";import"./ButtonBase-BNY22oX6.js";import"./useTimeout-B69MFxFS.js";import"./TransitionGroupContext-DHifbCKs.js";import"./useForkRef-DMC24a-E.js";import"./useIsFocusVisible-DucQbIj6.js";import"./useEventCallback--EQ_6um4.js";import"./useFiles-qUB1aosH.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-0_JCnPTx.js";import"./OrientationBanner-AqWNQ2cQ.js";import"./index-BTiUUTPa.js";import"./spreadSx-CwcO6WA9.js";import"./react-TPPcq5Zx.js";import"./FullWidthAlert-CJMDbx2q.js";import"./Alert-CrkNhfWZ.js";import"./resolveComponentProps-o_QiupMa.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-Dus-DnDq.js";import"./Close-DWmoeP58.js";import"./IconButton-CTUXzWkr.js";import"./Paper-DvU1IbZk.js";import"./Stack-B6me4bCA.js";import"./getThemeProps-mddUnrqc.js";import"./useTheme-BhAWdgJj.js";import"./Box-DNw-4nBu.js";import"./AlertTitle-h8DRy4XN.js";import"./Typography-Q68JxFqv.js";import"./useTheme-DHihFqnY.js";import"./Grow-BhT6xGE8.js";import"./index-iHxUZM4O.js";import"./utils-BzYwzlkb.js";import"./ClickAwayListener-CwluvrFu.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-mDgrFK3A.js";import"./index-BOXVFOUz.js";import"./useControlled-B9n_Eohm.js";import"./useId-BMOO1Dfn.js";import"./Popper-CldeZf4a.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-cylXlfny.js";import"./utils-q5k7caco.js";import"./Link-BDWzO4Vf.js";import"./Collapse-DeDDevjs.js";import"./isNil-BhKOR87a.js";import"./_Uint8Array--rSyjlV8.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DqkFcfeQ.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D916oHJq.js";import"./_getTag-BQeWtWW7.js";import"./tinycolor-Begke6kS.js";import"./Fade-CptzKgX_.js";import"./Skeleton-WYPrVBD7.js";import"./inputBaseClasses-DiG8IQq1.js";import"./calculateFriendlyFileSize-C7gYpacp.js";import"./CheckCircleTwoTone-D_2jRsql.js";import"./InfoTwoTone-C0zLsr-G.js";import"./mutation-DRMJLiUA.js";import"./dayjs.min-BHrDvJsX.js";import"./chunk-AYJ5UCUI-BWP3PEQF.js";import"./cloneDeep-Bydrfo_1.js";import"./_initCloneObject-B0ccDjP9.js";import"./isEqual-B8v4tGSU.js";import"./merge-BRZVeKvn.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./react-sizeme-BW3elMGb.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CiPF0RRx.js";import"./Backdrop-xvSmIk71.js";import"./LinearProgress-C0Vw2gFm.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
