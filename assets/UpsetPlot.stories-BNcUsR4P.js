import{U as L}from"./UpsetPlot-_UtL7KVw.js";import{f as u}from"./index-D_vA3ajy.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Ca7HkAEc.js";import"./DefaultPropsProvider-Bn8LRgKh.js";import"./createTheme-D4aPuV1u.js";import"./index-7kUQIJda.js";import"./iframe-Bufyq7gT.js";import"./Button-BHZrD0a2.js";import"./createSimplePaletteValueFilter-BEt-i54Y.js";import"./useTimeout-DKXj7ZoE.js";import"./ButtonBase-X43DuaPS.js";import"./useForkRef-DL0inOAS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Do_fn7Gj.js";import"./useFiles-BrvpFcHE.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-D7sLaKy_.js";import"./OrientationBanner-C0XTaJMW.js";import"./index-obCXUC8H.js";import"./spreadSx-CwcO6WA9.js";import"./react-CKAq3oVa.js";import"./FullWidthAlert-PJ8urHsT.js";import"./Alert-BMSC638d.js";import"./useSlot-D0mFnmL3.js";import"./createSvgIcon-ZiAuN7BE.js";import"./Close-Bl3LK6CA.js";import"./IconButton-CY5UwIMQ.js";import"./Paper-iByHW3jK.js";import"./useTheme-B9hs1vf7.js";import"./useTheme-DYE74pi0.js";import"./Stack-wKihdjB8.js";import"./extendSxProp-BP-eLuwj.js";import"./getThemeProps-B3fA16IA.js";import"./Box-DUMek0QV.js";import"./AlertTitle-Tv9KCYDf.js";import"./Typography-BZFFdM9O.js";import"./index-BTbDipTT.js";import"./ClickAwayListener-Dx5z9E1D.js";import"./getReactElementRef-CMCqw8Si.js";import"./index-C50bOCgW.js";import"./index-CUUOnlbp.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-r_DCaGO6.js";import"./Tooltip-BdYw0Ui8.js";import"./index-D4vj2bi1.js";import"./useControlled-BmyrkJhm.js";import"./Popper-Dx1QT2Hf.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BmLt0lw7.js";import"./QueryClientProvider-BD4tEhHC.js";import"./Link-CGBiOtpH.js";import"./Collapse-o-ca4Bd7.js";import"./_baseUniq-TPiJtr0Z.js";import"./_Uint8Array-CGeEjqws.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BbwlYwBr.js";import"./isArray-Dxzbedgu.js";import"./_getTag-C_ExSknu.js";import"./isEqual-PpuJ5c99.js";import"./merge-DZLKoClN.js";import"./_initCloneObject-CvCjrSzO.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BeG5-ZVA.js";import"./inputBaseClasses-o89gsDaC.js";import"./calculateFriendlyFileSize-BVrjJ4AN.js";import"./CheckCircleTwoTone-XpSzkXr7.js";import"./InfoTwoTone-B1O3nL8U.js";import"./useMutation-DroixX2q.js";import"./dayjs.min-D-tGVyTP.js";import"./chunk-AYJ5UCUI-BeWs92Yf.js";import"./cloneDeep-DDXqHXmK.js";import"./Skeleton-DD0AE17B.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DDI9A5IY.js";import"./Backdrop-ZWQ_qpH3.js";import"./LinearProgress-DeWkTc1g.js";import"./index-OyIFLAro.js";import"./index-4vcVQ0tu.js";import"./index-BWqehS6S.js";import"./const-BP60AzNb.js";import"./index-UfbLtn7_.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
