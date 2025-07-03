import{U as L}from"./UpsetPlot-BUoZLORQ.js";import{f as u}from"./index-D7aag9-8.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C2dhLXsA.js";import"./DefaultPropsProvider-Cw4cD2Gs.js";import"./createTheme-B4aZ-Zb2.js";import"./index-yCUnEpY5.js";import"./iframe-gNKfM8gk.js";import"./Button-BfDj8hwD.js";import"./createSimplePaletteValueFilter-51s7PY1W.js";import"./useTimeout-CuZ_JqjA.js";import"./ButtonBase-KeBM-9MT.js";import"./useForkRef-M_noYJ9D.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cf6g4eFb.js";import"./useFiles-BgDpzSnZ.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-DGsf9P7A.js";import"./OrientationBanner-CTtXbnax.js";import"./index-9tLppOC1.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dul7Z0Mc.js";import"./FullWidthAlert-DNjDgXrI.js";import"./Alert-DpGXSR6i.js";import"./useSlot-aoyyrGdd.js";import"./createSvgIcon-oOHEqfPt.js";import"./Close-CEW3NUG1.js";import"./IconButton-CY4FGYEd.js";import"./Paper-Cl6BDWzj.js";import"./useTheme-BmTDZfhV.js";import"./useTheme-6GaGjVsK.js";import"./Stack-STyAyUlw.js";import"./extendSxProp-CIrdn-hR.js";import"./getThemeProps-D8PjLR4-.js";import"./Box-BpOhxbKA.js";import"./AlertTitle-CUoFin8k.js";import"./Typography-SZRRhZD9.js";import"./index-Dp2dJGDM.js";import"./ClickAwayListener-DfC_WHzv.js";import"./getReactElementRef-XvbMGsPx.js";import"./index-CeNEsVvN.js";import"./index-ADdtT980.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CgDG11Ji.js";import"./Tooltip-B0dyqfMl.js";import"./index-Ju-LDmZ1.js";import"./useControlled-B6_8KTCH.js";import"./Popper-DF-ZzgM2.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CXRWCbXO.js";import"./QueryClientProvider-ciQTGKoG.js";import"./Link-DSFeBM2I.js";import"./Collapse-BBN76sqD.js";import"./_baseUniq-DrUqYJIw.js";import"./_Uint8Array-Bou5iouL.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BcAt8LvK.js";import"./isArray-Dxzbedgu.js";import"./_getTag-4mQ6siyT.js";import"./isEqual-RUS3s1a1.js";import"./merge-BQXjkqWm.js";import"./_initCloneObject-B3ZOc9-m.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-tqVDjiEK.js";import"./inputBaseClasses-BMS-bvkT.js";import"./calculateFriendlyFileSize-DRlc7BcI.js";import"./CheckCircleTwoTone-Db5nc3S1.js";import"./InfoTwoTone-Bo1e0FiV.js";import"./useMutation-Cyqe_83_.js";import"./dayjs.min-C35W30AG.js";import"./chunk-AYJ5UCUI-CQTlz4ZC.js";import"./cloneDeep-C-8X_Eyi.js";import"./Skeleton-BHgRHJw1.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D6UOJqJ_.js";import"./Backdrop-DnS2_k8W.js";import"./LinearProgress-D0Gm_ybT.js";import"./index-CPvNXcXX.js";import"./index-8dLWOYop.js";import"./index-BGpjueqd.js";import"./const-BP60AzNb.js";import"./index-knW4GyPv.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
