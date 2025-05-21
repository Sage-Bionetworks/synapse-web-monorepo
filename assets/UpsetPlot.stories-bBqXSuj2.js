import{U as L}from"./UpsetPlot-PPBtxWIY.js";import{f as u}from"./index-BZspauu8.js";import"./jsx-runtime-CmUBiTSS.js";import"./index-B2mmVxOD.js";import"./iframe-DsjoRgeV.js";import"./LargeButton-DKQQtOg9.js";import"./DefaultPropsProvider-HrPDOaQj.js";import"./createTheme-BYqAVevx.js";import"./Button-MnbgKpIJ.js";import"./ButtonBase-Ba5_fvQa.js";import"./useTimeout-DfID44yi.js";import"./TransitionGroupContext-CNQWmoPq.js";import"./useForkRef-B7GgJKmZ.js";import"./useIsFocusVisible-DNP6iLGB.js";import"./useEventCallback-DTUVY-xC.js";import"./useFiles-CvqXu3qP.js";import"./VerificationSubmission-B0kBNeMy.js";import"./SynapseConstants-BlsqOTHC.js";import"./OrientationBanner-2QI37Wfz.js";import"./index-D5VFXiz7.js";import"./spreadSx-CwcO6WA9.js";import"./react-C4gcExyr.js";import"./FullWidthAlert-BvgWiVQR.js";import"./Alert-B-cn8V0o.js";import"./resolveComponentProps-DIVgucYq.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CXv11Dc8.js";import"./Close-8Hs4OiKc.js";import"./IconButton-C2H3UkEd.js";import"./Paper-C5IK7UQQ.js";import"./Stack-nY20Dr3r.js";import"./getThemeProps-eRGJN_py.js";import"./useTheme-GMYttHBr.js";import"./Box-B5_L4GWb.js";import"./AlertTitle-CjTD5uFs.js";import"./Typography-BM-M-p3D.js";import"./useTheme-DODxR0TP.js";import"./Grow-CLzqoJXl.js";import"./index-DILzB3oy.js";import"./utils-Co3IOaXm.js";import"./ClickAwayListener-C2W41t9R.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-D8GA7O7E.js";import"./index-B1J7WTRX.js";import"./useControlled-B2db4EWk.js";import"./useId-B2N2XShu.js";import"./Popper-CBcXCHhQ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-Bx5eY2jj.js";import"./utils-DKTCckgQ.js";import"./Link-C7sf-qNT.js";import"./Collapse-beDlu7I0.js";import"./isNil-CZYLZObm.js";import"./_Uint8Array-BgOhq7U8.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DP5A2EKp.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DA4b58eN.js";import"./_getTag-DQ9vJk3b.js";import"./tinycolor-Begke6kS.js";import"./Fade-DFW6SVXN.js";import"./Skeleton--p_DRxXi.js";import"./inputBaseClasses-DiOO8wJ9.js";import"./calculateFriendlyFileSize-DSmqR10B.js";import"./CheckCircleTwoTone-DoCCywjP.js";import"./InfoTwoTone-ZuwsmNOx.js";import"./mutation-BIqmHUfI.js";import"./dayjs.min-Due_NQNo.js";import"./chunk-AYJ5UCUI-BafslQL4.js";import"./cloneDeep-w5MjdiAW.js";import"./_initCloneObject-DiF2uFhN.js";import"./isEqual-BohAHrtr.js";import"./merge-BKjEj6FU.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DnxC6kpb.js";import"./react-sizeme-CLe0Mupe.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C-pDF34o.js";import"./Backdrop-9xMxJYWH.js";import"./LinearProgress-BuIr2c9G.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
