import{U as L}from"./UpsetPlot-y8F7tHZt.js";import{f as u}from"./index-BqYR0cDh.js";import"./jsx-runtime-DL_WWTnU.js";import"./index-Ca0vgBE2.js";import"./iframe-vp13wGio.js";import"./LargeButton-Barjql4k.js";import"./DefaultPropsProvider-DTJ4Ledd.js";import"./createTheme-Dhyjv3xA.js";import"./Button-B0IPsMBh.js";import"./createSimplePaletteValueFilter-DYPT81bM.js";import"./useTimeout-qrufc8Nw.js";import"./ButtonBase-Dc5nu1oB.js";import"./useForkRef-zY8Srn5B.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-eRbwk2PT.js";import"./useFiles-CmfAQj3A.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-Dc-ttipk.js";import"./OrientationBanner-CVST6OVh.js";import"./index-D_DvTLsn.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ca9hZXji.js";import"./FullWidthAlert-DsbPAcmw.js";import"./Alert-BFVVhWFo.js";import"./useSlot-CBgVbdPc.js";import"./createSvgIcon-w5N7BSNF.js";import"./Close-DUALyDjv.js";import"./IconButton-BxoUEiy4.js";import"./Paper-yym3rEzG.js";import"./useTheme-BNFTziT0.js";import"./useTheme-BV623lpF.js";import"./Stack-gdOpa8to.js";import"./extendSxProp-BA-YUD7e.js";import"./getThemeProps-yoa4ipGw.js";import"./Box-qYBNUyDe.js";import"./AlertTitle-Bx6M0cYd.js";import"./Typography-EZSXaI3O.js";import"./index-BFzhBnlS.js";import"./ClickAwayListener-3oYh5tN2.js";import"./getReactElementRef-CWtkUCNU.js";import"./index-BVUsC3uq.js";import"./index-D3FxUHBg.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DEL0Kn5_.js";import"./Tooltip-BqzA40Wu.js";import"./index-BrcwApQH.js";import"./useControlled-T5yeju5l.js";import"./Popper-K4ot8jqr.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ChvZ1ijm.js";import"./useQuery-ChVcGVsr.js";import"./utils-Dzrkucg8.js";import"./Link-DMdo9AUW.js";import"./Collapse-DHp1Ae9b.js";import"./_baseUniq-BEUHERND.js";import"./_Uint8Array-fCYA57F5.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ByfTA19Y.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BDlUNutQ.js";import"./isEqual-DBsGFs7h.js";import"./merge-DdeE93vC.js";import"./_initCloneObject-DGj_mOuF.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CHNlYjPZ.js";import"./inputBaseClasses-CdZo6ywH.js";import"./calculateFriendlyFileSize-CXGCRFJo.js";import"./CheckCircleTwoTone-BFS_hxgT.js";import"./InfoTwoTone-DLPiaRPA.js";import"./useMutation-B0m0Vaj5.js";import"./dayjs.min-BpDP_-lG.js";import"./chunk-AYJ5UCUI-fN7Lo2X2.js";import"./cloneDeep-Cm9WdDYd.js";import"./Skeleton-D1Ehl1Kx.js";import"./SqlFunctions-fxqtrCrh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cp4OtwEE.js";import"./Backdrop-C2xcPVbS.js";import"./LinearProgress-DY-0SMyL.js";import"./index-CZhY3XGb.js";import"./index-DMuh-als.js";import"./index-DKg5z-jz.js";import"./const-Doag8klc.js";import"./index-Bc078074.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
