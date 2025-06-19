import{U as L}from"./UpsetPlot-DwjP8DaX.js";import{f as u}from"./index-CALBAmq4.js";import"./jsx-runtime-BFXWMKZc.js";import"./index-D_pyoJeF.js";import"./iframe-D_yBs-4r.js";import"./LargeButton-BW2Byn_S.js";import"./DefaultPropsProvider-BahuCuBQ.js";import"./createTheme-1xr-80h-.js";import"./Button-DRPAyHS3.js";import"./createSimplePaletteValueFilter-7em8lTd1.js";import"./useTimeout-B7IP0G6T.js";import"./ButtonBase-CK5wBRG4.js";import"./useForkRef-CDFucD7y.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CvONy6WE.js";import"./useFiles-08ax02E-.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-DmRaMcRv.js";import"./OrientationBanner-CkWPScZc.js";import"./index-LN9B4DhW.js";import"./spreadSx-CwcO6WA9.js";import"./react-CCDHJzMi.js";import"./FullWidthAlert-D2RPxRYK.js";import"./Alert-BNmvEUEK.js";import"./useSlot-D8PJQatE.js";import"./createSvgIcon-C5lrm-bN.js";import"./Close-D_3dkcMR.js";import"./IconButton-By-wRGIS.js";import"./Paper-CP60vdL5.js";import"./useTheme-CkaB82ut.js";import"./useTheme-DpkrdbtW.js";import"./Stack-DiWOtagw.js";import"./extendSxProp-B_QRsu6b.js";import"./getThemeProps-CF3hQaQh.js";import"./Box-D9EI7yvi.js";import"./AlertTitle-Z9VHju2U.js";import"./Typography-Em3plqb-.js";import"./index-CjrxtM-b.js";import"./ClickAwayListener-CR_a0-_E.js";import"./getReactElementRef-Cb6_WgiO.js";import"./index-BErIIWRC.js";import"./index-ij4xiAr7.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CisvWGr-.js";import"./Tooltip-DavDF6Dc.js";import"./index-CC01-gZ0.js";import"./useControlled-Ca7fQw0M.js";import"./Popper-CP6xWkKC.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-DpIURBis.js";import"./utils-C2JOEKA9.js";import"./Link-C_ucfB6H.js";import"./Collapse-BopMEsFI.js";import"./_baseUniq-D2-SJ7dF.js";import"./_Uint8Array-wjvJVDIM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ClIIHxnV.js";import"./isArray-Dxzbedgu.js";import"./_getTag-_WPpb9Lx.js";import"./isEqual-DKQ9N4pb.js";import"./merge-Dfr9bJau.js";import"./_initCloneObject-DeXLGZO2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Byv_i-Tg.js";import"./inputBaseClasses-DIE4lhwo.js";import"./calculateFriendlyFileSize-ECzjj6_0.js";import"./CheckCircleTwoTone-BCj2_bWN.js";import"./InfoTwoTone-DuRbV58N.js";import"./useMutation-CUDBwAFY.js";import"./dayjs.min-DIT4lERO.js";import"./chunk-AYJ5UCUI-CSQaHYsW.js";import"./cloneDeep-mbs_mYf7.js";import"./Skeleton-CKRGRrIM.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BYhQRe5O.js";import"./Backdrop-CC3RiqPZ.js";import"./LinearProgress-W-gLRb4y.js";import"./index-wGDukt08.js";import"./index-DH-q1_oM.js";import"./index-CnO9P0LU.js";import"./const-Doag8klc.js";import"./index-BM67Zxo4.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
