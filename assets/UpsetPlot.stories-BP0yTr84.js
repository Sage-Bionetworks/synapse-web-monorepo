import{U as L}from"./UpsetPlot-BAyT25nu.js";import{f as u}from"./index-BY4b160Z.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Rl_C7ck4.js";import"./DefaultPropsProvider-TigZOw0c.js";import"./createTheme-DO0GeJVN.js";import"./index-KGN7nUgE.js";import"./iframe-CMQeI9WK.js";import"./Button-3qFS6i5P.js";import"./createSimplePaletteValueFilter-DZ3Cd0ZY.js";import"./useTimeout-CbCrOuyo.js";import"./ButtonBase-Dpm3dYIG.js";import"./useForkRef--CXcjM6c.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-tpeZfTSG.js";import"./useFiles-DKBjGtH0.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BPxSYXRt.js";import"./OrientationBanner-BRUSGBks.js";import"./index-Dr7n8Bu6.js";import"./spreadSx-CwcO6WA9.js";import"./react-CMig-9PE.js";import"./FullWidthAlert-kwfi_d0a.js";import"./Alert-DJ8X3BSK.js";import"./useSlot-BeLwitnn.js";import"./createSvgIcon-BwJ4Z0yb.js";import"./Close-B39SLtS7.js";import"./IconButton-DDxgpgKz.js";import"./Paper-OHiCXA0a.js";import"./useTheme-DqFjo4Vk.js";import"./useTheme-DNfJZ9a1.js";import"./Stack-SWup2UhN.js";import"./extendSxProp-BYQFtxYN.js";import"./getThemeProps-Bdh-DyuI.js";import"./Box-CvOrwV-N.js";import"./AlertTitle-DU-H4ICD.js";import"./Typography-Bx5U0C2d.js";import"./index-BKxVS2q8.js";import"./ClickAwayListener-BU9wvTpl.js";import"./getReactElementRef-CWKqg3UA.js";import"./index-DfI_pPk5.js";import"./index-CNJXOAct.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bj8lCSBe.js";import"./Tooltip-C0iVGWe9.js";import"./index-Ch-D0VSk.js";import"./useControlled-CYxMkq6A.js";import"./Popper-B69y1AqZ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BiFVnL5m.js";import"./QueryClientProvider-BM1sWabn.js";import"./Link-ChVk8ADt.js";import"./Collapse-BffAQEYD.js";import"./_baseUniq-CODlLnhx.js";import"./_Uint8Array-DL2TZi9X.js";import"./isArray-DjjF7-P3.js";import"./_getTag-Cgl2tQw4.js";import"./isEqual-wQQmtEJR.js";import"./merge-CTQFuPxa.js";import"./_initCloneObject-Ctr9Y8Ai.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cv-DSv5P.js";import"./inputBaseClasses-4MqSuc0L.js";import"./calculateFriendlyFileSize-DcjtLEas.js";import"./CheckCircleTwoTone-D1Vqh63T.js";import"./InfoTwoTone-BXDH4Dcy.js";import"./useMutation-Dn2nWpvI.js";import"./dayjs.min-DKhR2V7G.js";import"./chunk-AYJ5UCUI-o4WQ5ozd.js";import"./cloneDeep-ChJ6elbg.js";import"./Skeleton-C3ppgLNp.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Ca6FvBo3.js";import"./Backdrop-DyiMxsUF.js";import"./LinearProgress-DsBuey8S.js";import"./index-DnKvimMO.js";import"./index-C7vogbSh.js";import"./index-Bvdb1Peh.js";import"./const-BP60AzNb.js";import"./index-m6jVD3zE.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
