import{U as L}from"./UpsetPlot-Cp2QFIJn.js";import{f as u}from"./index-DFtH2_uy.js";import"./jsx-runtime-B_2Gc3SG.js";import"./index-BBU0z9G2.js";import"./iframe-DCUtDlCX.js";import"./LargeButton-D3Q-FO7W.js";import"./DefaultPropsProvider-DY6zb-dH.js";import"./createTheme-Bb-of80E.js";import"./Button-C3J87jrs.js";import"./ButtonBase-C72q6tJT.js";import"./useTimeout-CAuc4a13.js";import"./TransitionGroupContext-BQut1n65.js";import"./useForkRef-CyoLs8EC.js";import"./useIsFocusVisible-DyEAvkJ4.js";import"./useEventCallback-BQjsW7DO.js";import"./useFiles-JXlVRPV9.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-DX-WDDd9.js";import"./OrientationBanner-Dq1docnb.js";import"./index-BwisHB0G.js";import"./spreadSx-CwcO6WA9.js";import"./react-BhylcftK.js";import"./FullWidthAlert-CFzbZiUT.js";import"./Alert-CGNyaEdA.js";import"./resolveComponentProps-DCAiF6Pg.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-CNsbaAaL.js";import"./Close-B0UOP1QV.js";import"./IconButton-DNEKqMCi.js";import"./Paper-BcXxrzhK.js";import"./Stack-qWau2zCa.js";import"./getThemeProps-6OAybboU.js";import"./useTheme-Dh1Papyn.js";import"./Box-D2RYsU2i.js";import"./AlertTitle-B4Mai8jL.js";import"./Typography-DPPBqnKa.js";import"./useTheme-B-6l9toe.js";import"./Grow-CJiXtLX9.js";import"./index-DFDg9nQ_.js";import"./index-Dt_7HUR0.js";import"./utils-DvLr3dDh.js";import"./ClickAwayListener-CK1-KmpA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-nNNsqjbp.js";import"./index-DMnlBYgJ.js";import"./useControlled-B661O_AT.js";import"./useId-Bk9Oe8XM.js";import"./Popper-BWeeHEmm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-BnMaqJyd.js";import"./utils-BWj42cP7.js";import"./Link-DOGBJLC7.js";import"./Collapse-D4s4BkvF.js";import"./isNil-DpeP_R9j.js";import"./_Uint8Array-BRfoxawQ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DBBLIIk8.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Db4d4u_t.js";import"./_getTag-9sNPBvjh.js";import"./tinycolor-Begke6kS.js";import"./Fade-DsP6RvZm.js";import"./Skeleton-B1rt5Ztc.js";import"./inputBaseClasses-CIhkIKVR.js";import"./calculateFriendlyFileSize-BQ3RZ0VU.js";import"./CheckCircleTwoTone-GV37EoOE.js";import"./InfoTwoTone-B7FqZEQJ.js";import"./useMutation-B6YewPuT.js";import"./isEqual-CQ7yWffo.js";import"./dayjs.min-Df7AXePR.js";import"./chunk-AYJ5UCUI-BRBikskr.js";import"./cloneDeep-jHGJI57J.js";import"./_initCloneObject-7i-0qHSD.js";import"./merge-oSJTsFDD.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DY4KPajP.js";import"./Backdrop-B9quXnVI.js";import"./LinearProgress-BMM4Tl2j.js";import"./index-BQ8a_MHM.js";import"./index-o8VHgiTP.js";import"./index-NNYUvToU.js";import"./const-Doag8klc.js";import"./index-CxjG0IFD.js";const Xt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Zt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Zt as __namedExportsOrder,Xt as default};
