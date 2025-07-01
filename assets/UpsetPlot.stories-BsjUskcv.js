import{U as L}from"./UpsetPlot-BAE9_vTQ.js";import{f as u}from"./index-hJqC0h_h.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BWIfVXmE.js";import"./DefaultPropsProvider-CdO6L0Pk.js";import"./createTheme-CWG0cW6y.js";import"./index-C3nj_fG2.js";import"./iframe-BDBfVSKg.js";import"./Button-DyfF777x.js";import"./createSimplePaletteValueFilter-BlzGvdSq.js";import"./useTimeout-C4rLKdn2.js";import"./ButtonBase-DS44odlx.js";import"./useForkRef-DHnp6OMB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DQo2XILu.js";import"./useFiles-CtxO9x8p.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CI_K8LaY.js";import"./OrientationBanner-DAmiSc00.js";import"./index-CQQcttyB.js";import"./spreadSx-CwcO6WA9.js";import"./react-CqJFq3qs.js";import"./FullWidthAlert-UQuqXn6f.js";import"./Alert-C1hJ4Z-y.js";import"./useSlot-Dgg782u-.js";import"./createSvgIcon-CVDzM-Yp.js";import"./Close-CcfzD6eO.js";import"./IconButton-x-kANNti.js";import"./Paper-Cje9dWPp.js";import"./useTheme-1oHqtnzX.js";import"./useTheme-DE8xzC4Q.js";import"./Stack-CNoJqn02.js";import"./extendSxProp-Cs4_b5go.js";import"./getThemeProps-D5cSSqxK.js";import"./Box-DBpIvjQ1.js";import"./AlertTitle-bc4vF6jv.js";import"./Typography-BJGOlnOW.js";import"./index-qtpbYGz0.js";import"./ClickAwayListener-BE9w4MIS.js";import"./getReactElementRef-B6qVbtvW.js";import"./index-D8917n5i.js";import"./index-3syzP3pj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CLWDFLja.js";import"./Tooltip-IVO2_Dmw.js";import"./index-TGKDGBko.js";import"./useControlled-DT8cewLf.js";import"./Popper-DhKK_zwe.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BRMyBt73.js";import"./QueryClientProvider-CPQ6Oj_G.js";import"./Link-D0i1Vnel.js";import"./Collapse-DojPvq5i.js";import"./_baseUniq-CrUh03pQ.js";import"./_Uint8Array-xgfglyII.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-10sIIJZj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CfV5mstV.js";import"./isEqual-DLQCrc3U.js";import"./merge-B3nj5qzg.js";import"./_initCloneObject-CKK6YiUV.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D0ZbppsZ.js";import"./inputBaseClasses-Cw-3KtZn.js";import"./calculateFriendlyFileSize-BjGnrfzV.js";import"./CheckCircleTwoTone-C-PIsQg6.js";import"./InfoTwoTone-w8pZJCEs.js";import"./useMutation-Dk6C_iA4.js";import"./dayjs.min-DM6YuFz3.js";import"./chunk-AYJ5UCUI-BLGARkf6.js";import"./cloneDeep-DUWud5eC.js";import"./Skeleton-BzOWywy2.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B-CCA_se.js";import"./Backdrop-BfKWpm2e.js";import"./LinearProgress-CliVmXSc.js";import"./index-DsRP4A2i.js";import"./index-BtxaZG9A.js";import"./index-D9dRY_Or.js";import"./const-BP60AzNb.js";import"./index-CvhsoDN_.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
