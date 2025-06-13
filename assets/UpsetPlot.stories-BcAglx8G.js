import{U as L}from"./UpsetPlot-LjK3_xD5.js";import{f as u}from"./index-C78zfEwu.js";import"./jsx-runtime-O8TkLtV5.js";import"./index-BdL7riv0.js";import"./iframe-DBj53tT_.js";import"./LargeButton-DsnwW2B6.js";import"./DefaultPropsProvider-BEcU5m4O.js";import"./createTheme-Bv5mYTu1.js";import"./Button-wemfiAHD.js";import"./createSimplePaletteValueFilter-CsQijxTZ.js";import"./useTimeout-CSNp5plk.js";import"./ButtonBase-CxbkP8LH.js";import"./useForkRef-edQmTpSu.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D4ntz8sa.js";import"./useFiles-DxC7nl3D.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-CXTFm1VN.js";import"./OrientationBanner-BKv79mXg.js";import"./index-CeY3lIrK.js";import"./spreadSx-CwcO6WA9.js";import"./react-CF5aTxTJ.js";import"./FullWidthAlert-BF1VMUNH.js";import"./Alert-DM7UWADG.js";import"./useSlot-DzGficUl.js";import"./createSvgIcon-BvN6BTm-.js";import"./Close-BzD5K2sc.js";import"./IconButton-22JwbE8M.js";import"./Paper-D4hJvkH0.js";import"./useTheme-BkQG1Vvc.js";import"./useTheme-DY_86peL.js";import"./Stack-CDbBDHOE.js";import"./extendSxProp-DrqXgrYI.js";import"./getThemeProps-BNlrmySa.js";import"./Box-CT9i0kfz.js";import"./AlertTitle-G6vHreez.js";import"./Typography-BqmMHzok.js";import"./index-CsB3u6p3.js";import"./ClickAwayListener-D1RUcE6c.js";import"./getReactElementRef-CWFCGlr1.js";import"./index-D_l0Au_c.js";import"./index-BWcaaVS5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DzQd8rZb.js";import"./Tooltip-D_X6aErI.js";import"./index-DoS5ZV3O.js";import"./useControlled-BtOEwbLw.js";import"./Popper-nnkyRMWB.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CkCu-w-q.js";import"./utils-Cs3LXMa6.js";import"./Link-Dng4sksw.js";import"./Collapse-BRjmE_en.js";import"./isNil-D60xMXao.js";import"./_Uint8Array-BBVtwR3V.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BoiNzNpU.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BFeuiteO.js";import"./_getTag-BlJpn61a.js";import"./tinycolor-Begke6kS.js";import"./Fade-BtlJADv1.js";import"./inputBaseClasses-CAWV7teM.js";import"./calculateFriendlyFileSize-DhqizIil.js";import"./CheckCircleTwoTone-BjvZNhmr.js";import"./InfoTwoTone-DhOnXhJt.js";import"./useMutation-CweL2dWa.js";import"./dayjs.min-7Nt2QYG2.js";import"./chunk-AYJ5UCUI-Bhv9tQyJ.js";import"./cloneDeep-DkNLZXx1.js";import"./_initCloneObject-B3MBXCb2.js";import"./Skeleton-DrSkd8hR.js";import"./merge-BlmsI-Yg.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-_YJUiT0C.js";import"./Backdrop-D5TjUsOI.js";import"./LinearProgress-DUMPm6C0.js";import"./index-CmwMYYGT.js";import"./index-DbBT_KE4.js";import"./index-Chh5pb2a.js";import"./const-Doag8klc.js";import"./index-CPuiF63P.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
