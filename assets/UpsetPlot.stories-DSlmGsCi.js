import{U as L}from"./UpsetPlot-l5aLgxyB.js";import{f as u}from"./index-3S5l1f9F.js";import"./jsx-runtime-Zazi817E.js";import"./index-D-a7w8th.js";import"./iframe-DqOO6GmJ.js";import"./LargeButton-CKeMpFP-.js";import"./DefaultPropsProvider-CMeWClB2.js";import"./createTheme-BKO-I-SA.js";import"./Button-CxroDze3.js";import"./ButtonBase-BlnkqX4m.js";import"./useTimeout-NcCkJi-r.js";import"./TransitionGroupContext-KaYi-H8Q.js";import"./useForkRef-BoKjB57t.js";import"./useIsFocusVisible-BEvJgvyZ.js";import"./useEventCallback-CL3MT4n3.js";import"./useFiles-D6-60VlG.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-D8_u4KCY.js";import"./OrientationBanner-Brj_6R5O.js";import"./index-B9uCcEa8.js";import"./spreadSx-CwcO6WA9.js";import"./react-Drm6sDLN.js";import"./FullWidthAlert-DKf9_wpb.js";import"./Alert-CMSBW_9_.js";import"./resolveComponentProps-BCYM0ghF.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-5Cw73NIJ.js";import"./Close-CKICGMRN.js";import"./IconButton-D7fD1kT1.js";import"./Paper-DH45r-wy.js";import"./Stack-C28MH_Nj.js";import"./getThemeProps-RwE7Dgdk.js";import"./useTheme-BhctGpst.js";import"./Box-erjX2_Pn.js";import"./AlertTitle-DbbLAA4Q.js";import"./Typography-0amIDJ13.js";import"./useTheme-BRe1u070.js";import"./Grow-Cu1K5fdd.js";import"./index-D8Tj0NKP.js";import"./utils-CmeGA0Mj.js";import"./ClickAwayListener-susZPs9A.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BJj93p-l.js";import"./index-D-NA5Lgs.js";import"./useControlled-Cz3AFNPb.js";import"./useId-_0THTgRa.js";import"./Popper-Dwod_RPU.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-B5EBPYQk.js";import"./utils-pBpmfRy2.js";import"./Link-C8A1juNu.js";import"./Collapse-B2ReICNn.js";import"./isNil-DNbb0ZTY.js";import"./_Uint8Array-CDIqxLcW.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-tE4xW328.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BwEpiinV.js";import"./_getTag-BVzBaU_M.js";import"./tinycolor-Begke6kS.js";import"./Fade-Do1oESZB.js";import"./Skeleton-QtVV7vBl.js";import"./inputBaseClasses-DvVPbDNa.js";import"./calculateFriendlyFileSize-DFT7G6pD.js";import"./CheckCircleTwoTone-CqmyG6lC.js";import"./InfoTwoTone-B-oZrgFl.js";import"./mutation-COF64AgK.js";import"./dayjs.min-DoL1Vt0J.js";import"./chunk-AYJ5UCUI-DFKlZx2o.js";import"./cloneDeep-BMoExRqW.js";import"./_initCloneObject-DXlJBdkp.js";import"./isEqual-B5SJeZHH.js";import"./merge-CAy_Mw7I.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-yUjLWLxZ.js";import"./react-sizeme-DuJVvyIA.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dky51a1g.js";import"./Backdrop-BcaxFsEn.js";import"./LinearProgress-B-2U1swA.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
