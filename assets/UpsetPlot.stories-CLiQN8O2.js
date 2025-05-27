import{U as L}from"./UpsetPlot-DWhJVYkW.js";import{f as u}from"./index-C9qlcywL.js";import"./jsx-runtime-BK5U4Ogm.js";import"./index-Di6pL9sS.js";import"./iframe-BcMO-NRu.js";import"./LargeButton-MTa6CheC.js";import"./DefaultPropsProvider-jCgqZX_L.js";import"./createTheme-Cp4i8P3j.js";import"./Button-CS3Qxzkw.js";import"./ButtonBase-CBxmSsKP.js";import"./useTimeout-Bk2aBz7o.js";import"./TransitionGroupContext-D2Egnh2Q.js";import"./useForkRef-CDRx8QSv.js";import"./useIsFocusVisible-Dwuhnw_i.js";import"./useEventCallback-pwXQXOzV.js";import"./useFiles-CEIeiagI.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-zKFIzren.js";import"./OrientationBanner-Dd3gjuUa.js";import"./index-B46zhNA6.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJTyKqpK.js";import"./FullWidthAlert-CErQ6Muc.js";import"./Alert-HUDZRYOW.js";import"./resolveComponentProps-BcPJL9MH.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-6f5z08nh.js";import"./Close-D3QPaLjh.js";import"./IconButton-C0uO2agS.js";import"./Paper-CE1mL2qJ.js";import"./Stack-BWSA6lgs.js";import"./getThemeProps-Dfs0VSTM.js";import"./useTheme-6ADmrWxD.js";import"./Box-CgFRiWSE.js";import"./AlertTitle-COi1QU0e.js";import"./Typography-DdVpYyJT.js";import"./useTheme-BJOxI8Pz.js";import"./Grow-BJi-xmc6.js";import"./index-BlWCVmXL.js";import"./utils-Bm34yggg.js";import"./ClickAwayListener-Bzi36C9_.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BGdElWBC.js";import"./index-UlGlXuF6.js";import"./useControlled-ctFy0C0l.js";import"./useId-Kr4560Rl.js";import"./Popper-C7mrmf4N.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-Bp4ICN7A.js";import"./utils-T3gzeC7B.js";import"./Link-DCsN9Cs6.js";import"./Collapse-S9FTNTmT.js";import"./isNil-BZDfliEp.js";import"./_Uint8Array-DGhKdq-D.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-uDeW5XEe.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-4Tr9waQ7.js";import"./_getTag-BrZ1c84X.js";import"./tinycolor-Begke6kS.js";import"./Fade-CHZVGOkF.js";import"./Skeleton-GFVDgsi6.js";import"./inputBaseClasses-Dy6ALZto.js";import"./calculateFriendlyFileSize-rchZGA0L.js";import"./CheckCircleTwoTone-CoVF2IX7.js";import"./InfoTwoTone-Cv6-lHeT.js";import"./mutation-CGeFCzcu.js";import"./dayjs.min-C22uDXZr.js";import"./chunk-AYJ5UCUI-tVdleHmn.js";import"./cloneDeep-DvV4HJnE.js";import"./_initCloneObject-DVxuy2j7.js";import"./isEqual-D21U_Xmz.js";import"./merge-4Yp0APiD.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./react-sizeme-BtxvvOi8.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-WzPjyiNV.js";import"./Backdrop-BtTzk7qz.js";import"./LinearProgress-DxAzS0oH.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
