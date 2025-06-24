import{U as L}from"./UpsetPlot-BD-MfBBi.js";import{f as u}from"./index-BMeFU0Lk.js";import"./jsx-runtime-BMNmdmks.js";import"./index-DW0LBurA.js";import"./iframe-ClT2PY5H.js";import"./LargeButton-B5IInaUD.js";import"./DefaultPropsProvider-C4znEiUE.js";import"./createTheme-BdY77VP6.js";import"./Button-DAdJze2H.js";import"./createSimplePaletteValueFilter-Dvsm1UxE.js";import"./useTimeout-Ba2YGpsZ.js";import"./ButtonBase-DbZZ4BWx.js";import"./useForkRef-CzQCr4JB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DbjUFdcr.js";import"./useFiles-LVfmboon.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-LHIf88id.js";import"./OrientationBanner-cXrnnDJl.js";import"./index-o-ZcXs9X.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dq9KLFkp.js";import"./FullWidthAlert-BOWnhoc0.js";import"./Alert-C3hHW8Ss.js";import"./useSlot-iN9WwSqt.js";import"./createSvgIcon-C2Nt4yOs.js";import"./Close-DZ9dTHFV.js";import"./IconButton-C6d5-HOq.js";import"./Paper-BMjkBm4S.js";import"./useTheme-BqQBSBdf.js";import"./useTheme-lm-u5WWe.js";import"./Stack-CjAxTaE3.js";import"./extendSxProp-5NJ5D_8G.js";import"./getThemeProps-RHmuKqMk.js";import"./Box-DAofjfOr.js";import"./AlertTitle-BVKQI0HF.js";import"./Typography-DPG6xZ8P.js";import"./index-CfZpgxKm.js";import"./ClickAwayListener-CT7c1qCs.js";import"./getReactElementRef-DHNg_CKP.js";import"./index-BosE4YRb.js";import"./index-CsPck03e.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DLIa4n3u.js";import"./Tooltip-DNllSrzL.js";import"./index-DyZDKPzh.js";import"./useControlled-jN23sF3g.js";import"./Popper-Cfz3yOXG.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-BRiZJAAn.js";import"./utils-03tRPbj_.js";import"./Link-C0xwXBcC.js";import"./Collapse-idyiFB1C.js";import"./_baseUniq-BWbdnOiY.js";import"./_Uint8Array-B0t_xbaK.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-OSltXNR0.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Ca-82pc_.js";import"./isEqual-D0rtyjzd.js";import"./merge-CzGC5PWB.js";import"./_initCloneObject-DJIUKQWm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CqmJhiz0.js";import"./inputBaseClasses-BCsNgKHL.js";import"./calculateFriendlyFileSize-BrgP4UIi.js";import"./CheckCircleTwoTone-Cg0xOSIx.js";import"./InfoTwoTone-BH1JR2-n.js";import"./useMutation-C_Kg3YRh.js";import"./dayjs.min-CkwocMA_.js";import"./chunk-AYJ5UCUI-CN-XOAx5.js";import"./cloneDeep-y8PkmVZF.js";import"./Skeleton-CRBvsylm.js";import"./SqlFunctions-DPgti-mT.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CjAMf7fY.js";import"./Backdrop-D4GLppK2.js";import"./LinearProgress-P5UsnJO5.js";import"./index-Dq0M5pXa.js";import"./index-CEnUFj8F.js";import"./index-B76M_6UV.js";import"./const-Doag8klc.js";import"./index-CPk8XatI.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
