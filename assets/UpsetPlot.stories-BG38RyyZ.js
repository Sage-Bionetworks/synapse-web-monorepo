import{U as L}from"./UpsetPlot-BdS-3qUB.js";import{f as u}from"./index-BkwObPdf.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-HdrCpB3C.js";import"./DefaultPropsProvider-0orHMIEF.js";import"./createTheme-BYmso0tz.js";import"./index-Hq9GMvWN.js";import"./iframe-Cz0yRYSQ.js";import"./Button-BTB592up.js";import"./createSimplePaletteValueFilter-W2Zo5aou.js";import"./useTimeout-h73ObAmM.js";import"./ButtonBase-EgupweKT.js";import"./useForkRef-Ba32e_nF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B04Cl_da.js";import"./useFiles-6Eopo0xs.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Bd5uMFWd.js";import"./OrientationBanner-BSDlOhEl.js";import"./index-BgcdhoxH.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNQEch4T.js";import"./FullWidthAlert-BRRQ8k9I.js";import"./Alert-Q-zP0WQf.js";import"./useSlot-DsnxFfh1.js";import"./createSvgIcon-AN35XKd_.js";import"./Close-DfokZKzC.js";import"./IconButton-DyX-TFkE.js";import"./Paper-DyztGkog.js";import"./useTheme-D93wozFQ.js";import"./useTheme-D3m_In28.js";import"./Stack-BWD33RJX.js";import"./useThemeProps-xhGgonhN.js";import"./getThemeProps-D-XMYL24.js";import"./extendSxProp-CaJIvMa_.js";import"./Box-Coa0Hm63.js";import"./AlertTitle-CAGvnUl-.js";import"./Typography-Bn1QEpSJ.js";import"./index-vkeMoorD.js";import"./ClickAwayListener-Tz4LQtH4.js";import"./getReactElementRef-ZSL1cRU-.js";import"./index-Dz78O9fy.js";import"./index-BsWHRc5B.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Mg9gNMCu.js";import"./Tooltip-PLHpmtuF.js";import"./index-bI8fuLwa.js";import"./useControlled-DjqDKOV6.js";import"./Popper-BdXdlnhi.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-C632Gpdg.js";import"./QueryClientProvider-BNaKABDx.js";import"./Link-D4cnvwEL.js";import"./Collapse-C7CbTo5y.js";import"./_baseUniq-y6CeNGmm.js";import"./_Uint8Array-Nn_bOMDG.js";import"./isArray-DqrD0I4d.js";import"./_getTag-CCxMSq7g.js";import"./isEqual-CdAtuOnJ.js";import"./noop-DX6rZLP_.js";import"./merge-Ds3aECQA.js";import"./_initCloneObject-B9n5P3J6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bb6hCor6.js";import"./inputBaseClasses-CYg77Bp9.js";import"./calculateFriendlyFileSize-DAK12mf4.js";import"./CheckCircleTwoTone-Dt6znZiS.js";import"./InfoTwoTone-B7HNLyVQ.js";import"./useMutation-DkUvZSje.js";import"./dayjs.min-BvJHBx7G.js";import"./chunk-AYJ5UCUI-BVFhXq1p.js";import"./cloneDeep-B0KeqOcz.js";import"./Skeleton-Bp3OxjtJ.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-ByAKRMgu.js";import"./Backdrop-S4J0QI4u.js";import"./LinearProgress-BVyoMXeg.js";import"./index-B1IERcAN.js";import"./index-nU6M-84-.js";import"./index-DRML0hBw.js";import"./const-BP60AzNb.js";import"./index-CkfnoyAw.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
