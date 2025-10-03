import{U as L}from"./UpsetPlot-iio1ClfG.js";import{f as u}from"./index-B7MzQrlU.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DSCzfZsF.js";import"./DefaultPropsProvider-Cd0Gz93F.js";import"./createTheme-DAhIYT-q.js";import"./index-F3OlDRPU.js";import"./iframe-DWrAiNuW.js";import"./Button-dxqTEXs9.js";import"./createSimplePaletteValueFilter-B4BYpzTy.js";import"./useTimeout-BY1gF1wp.js";import"./ButtonBase-CE9Zydrz.js";import"./useForkRef-BJo3Z_u-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DyPJ1xlt.js";import"./useFiles-DAUKQIuz.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-ptYewzyF.js";import"./OrientationBanner-_kC-PSdY.js";import"./index-DdSYxNDW.js";import"./spreadSx-CwcO6WA9.js";import"./react-CQiWL19i.js";import"./FullWidthAlert-C0tQO5dM.js";import"./Alert-CKgV8xSf.js";import"./useSlot-BZid6he4.js";import"./createSvgIcon-CifjPXpO.js";import"./Close-Bkkfhvag.js";import"./IconButton-BRQS4WU3.js";import"./Paper-CzObAxXu.js";import"./useTheme-C8ob8KsR.js";import"./useTheme-GfoGaI95.js";import"./Stack-BnkLG2u3.js";import"./extendSxProp-CVuKJmNN.js";import"./getThemeProps-DopSKNma.js";import"./Box-BW-aRCkO.js";import"./AlertTitle-CLDWMYy3.js";import"./Typography-C3oNv7Lx.js";import"./index-BmZDKNdG.js";import"./ClickAwayListener-BK2szM5u.js";import"./getReactElementRef-D-JNnrD6.js";import"./index-B25muIup.js";import"./index-xIDK1h82.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-VoMSPk_y.js";import"./Tooltip-DpuXVHKS.js";import"./index-BuwriByj.js";import"./useControlled-BTMnxbhY.js";import"./Popper-DHPObmJG.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DdyJtvdB.js";import"./QueryClientProvider-3nZ8Vgn_.js";import"./Link-BLjn6yhp.js";import"./Collapse-yq6QQpA6.js";import"./_baseUniq-5rt_sj8d.js";import"./_Uint8Array-AzO7VDN6.js";import"./isArray-DzTtH0J2.js";import"./_getTag-DZd-TdrH.js";import"./isEqual-xC6FCH9I.js";import"./merge-DRz5Ifpb.js";import"./_initCloneObject-6FTFQYcl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DoIPu-7y.js";import"./inputBaseClasses-YZuK0aY4.js";import"./calculateFriendlyFileSize-D8lL7o7B.js";import"./CheckCircleTwoTone-DwvVQvXI.js";import"./InfoTwoTone-DNgAn7mt.js";import"./useMutation-D94Q-XAu.js";import"./dayjs.min-Cha11me8.js";import"./chunk-AYJ5UCUI-Ca0YKpc9.js";import"./cloneDeep-jeYACF2d.js";import"./Skeleton-C-zuVtl_.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cfg07f0j.js";import"./Backdrop-qrHo7ph_.js";import"./LinearProgress-r-vJoYY6.js";import"./index-BQZlEp7p.js";import"./index-Cgq6Up3-.js";import"./index-6pBs1G8P.js";import"./const-BP60AzNb.js";import"./index-CDYcFXBZ.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
