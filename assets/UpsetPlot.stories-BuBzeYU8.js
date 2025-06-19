import{U as L}from"./UpsetPlot-pqJxfYO5.js";import{f as u}from"./index-5wPHW1v-.js";import"./jsx-runtime-fkddYsRa.js";import"./index-Cv6nX037.js";import"./iframe-DgCb13ZA.js";import"./LargeButton-CmIJi2O4.js";import"./DefaultPropsProvider-MkP_nBB1.js";import"./createTheme-D0G-YdBM.js";import"./Button-CmrMbQmW.js";import"./createSimplePaletteValueFilter-CetX1-So.js";import"./useTimeout-CWy7v3j4.js";import"./ButtonBase-LNl8xRHv.js";import"./useForkRef-BhjVp7Fj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ci1F78nB.js";import"./useFiles-C2-6Q0yh.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-B6O6HlOX.js";import"./OrientationBanner-B6u9ADNN.js";import"./index-Vb_Vm6Or.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dmo1sR7O.js";import"./FullWidthAlert-ps7c1lte.js";import"./Alert-DDBgpbQe.js";import"./useSlot-D9bUdOMX.js";import"./createSvgIcon-BOkPVFng.js";import"./Close-CqKNMRrw.js";import"./IconButton-C7gfjzB0.js";import"./Paper-CRdKJZEk.js";import"./useTheme-ew_Nfzhg.js";import"./useTheme-5BzmGwuh.js";import"./Stack-53rHix6w.js";import"./extendSxProp-DwLH-5iL.js";import"./getThemeProps-D-_clwMN.js";import"./Box-BhadhPsK.js";import"./AlertTitle-rtM38Mk8.js";import"./Typography-Cned48Hn.js";import"./index-DoLSYN_E.js";import"./ClickAwayListener-CZsKMghQ.js";import"./getReactElementRef-C8j0xIA6.js";import"./index-yKH7ayG0.js";import"./index-5fD7g6aK.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-vhaNN5gj.js";import"./Tooltip-B4z_2CfG.js";import"./index-A5Xj5tp_.js";import"./useControlled-C9uiSwtu.js";import"./Popper-CzOnVF7V.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-B8tUDD-z.js";import"./utils-DLIvMn1C.js";import"./Link-Cc7_4k2q.js";import"./Collapse-DpBQClav.js";import"./_baseUniq-Bj3tTBPP.js";import"./_Uint8Array-DSvqUWPA.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-pddUo-wZ.js";import"./isArray-Dxzbedgu.js";import"./_getTag-e_ukLjVm.js";import"./isEqual-CfffNHyk.js";import"./merge-CF373bos.js";import"./_initCloneObject-CBrcGSWB.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BqFRP1kA.js";import"./inputBaseClasses-cUXSQoU1.js";import"./calculateFriendlyFileSize-CMzKI-kY.js";import"./CheckCircleTwoTone-BgfHa_Vb.js";import"./InfoTwoTone-Csrt26-i.js";import"./useMutation-DytpqhvV.js";import"./dayjs.min-_KuDUFdc.js";import"./chunk-AYJ5UCUI-P89pSlIj.js";import"./cloneDeep-CwdKXb1h.js";import"./Skeleton-wOC2k2PG.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-y0XrX_2v.js";import"./Backdrop-DoatZg-s.js";import"./LinearProgress-NQl9sOCW.js";import"./index-CzWN40wg.js";import"./index-p3nygD5I.js";import"./index-TDwWKOzl.js";import"./const-Doag8klc.js";import"./index-DkCjYCKh.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
