import{U as L}from"./UpsetPlot-DnJIM_po.js";import{f as u}from"./index-ddkEZi13.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CTqLu5k1.js";import"./DefaultPropsProvider-BwisLJoN.js";import"./createTheme-B99gvztp.js";import"./index-BgSjUAuI.js";import"./iframe-B2LJi_cW.js";import"./Button-i6WpB6BV.js";import"./createSimplePaletteValueFilter-BqHZnY8j.js";import"./useTimeout-B9vSmm-b.js";import"./ButtonBase-C9ld3sfo.js";import"./useForkRef-BWEHjpp5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CETpK90r.js";import"./useFiles-MN-D_6YK.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Dpo-4-F5.js";import"./OrientationBanner-e9CrJnDC.js";import"./index-7ZdLlOWA.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1t48EgC.js";import"./FullWidthAlert-h7Wmupj2.js";import"./Alert-BZ2_6v5t.js";import"./useSlot-BoOzURrI.js";import"./createSvgIcon-C3_cIczA.js";import"./Close-CYHpGdnA.js";import"./IconButton-BzXaqEAH.js";import"./Paper-d1YgxWUg.js";import"./useTheme-Crep25JH.js";import"./useTheme-B6PPiyBh.js";import"./Stack-D3AUxOwk.js";import"./extendSxProp-BG_8YU1P.js";import"./getThemeProps-tRf3h7Hu.js";import"./Box-DFEf2Lca.js";import"./AlertTitle-DMPrYQyA.js";import"./Typography-f_AbgqFl.js";import"./index-y7GTiB0o.js";import"./ClickAwayListener-p7Foeo8l.js";import"./getReactElementRef-TAJJAPvj.js";import"./index-3jGRQJto.js";import"./index-DJx0aOeo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BMIyt8WB.js";import"./Tooltip-BHlbKeDB.js";import"./index-0KhxVFZN.js";import"./useControlled-CCREmJrl.js";import"./Popper-C-cVjFlV.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-wFNB3FP4.js";import"./QueryClientProvider-Ck7orVaD.js";import"./Link-vTlZ9-pl.js";import"./Collapse-nircCAWM.js";import"./_baseUniq-DYuCTHDT.js";import"./_Uint8Array-JB1OFgus.js";import"./isArray-CaLyojua.js";import"./_getTag-B3_puU6c.js";import"./isEqual-CnJzKHIU.js";import"./merge-D8QSzr4_.js";import"./_initCloneObject-J-koMtFl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BQGvqggR.js";import"./inputBaseClasses-CW6CuO6Z.js";import"./calculateFriendlyFileSize-Blvrn06H.js";import"./CheckCircleTwoTone-qAglj5RI.js";import"./InfoTwoTone-CCdFqQd_.js";import"./useMutation-DlDOzlwr.js";import"./dayjs.min-fnKViZjk.js";import"./chunk-AYJ5UCUI-BIXu2e9s.js";import"./cloneDeep-BVaUE9Dw.js";import"./Skeleton-C9fzDANc.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CB_N-6Ri.js";import"./Backdrop-DW_hG3yE.js";import"./LinearProgress-DN8MeI3i.js";import"./index-8QAHgz3z.js";import"./index-Buk6rGzp.js";import"./index-C4P3g4EM.js";import"./const-BP60AzNb.js";import"./index-CNzPs0q8.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const jt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,jt as __namedExportsOrder,$t as default};
