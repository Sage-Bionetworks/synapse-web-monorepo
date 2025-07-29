import{U as L}from"./UpsetPlot-EoZd0ewM.js";import{f as u}from"./index-CYYXEMem.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CSNNjUa9.js";import"./DefaultPropsProvider-B93j11NS.js";import"./createTheme-C65121Eq.js";import"./index-BgqEGoYw.js";import"./iframe-BNzW0Vu_.js";import"./Button-BRf54AUE.js";import"./createSimplePaletteValueFilter-BLmDH_bu.js";import"./useTimeout-zV8pl8s0.js";import"./ButtonBase-bfqPe5-W.js";import"./useForkRef-BUCdoQJu.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BHzjVEsQ.js";import"./useFiles-KiTy3Z3P.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DbzIcXKJ.js";import"./OrientationBanner-Br9QB-0q.js";import"./index-Cf2wQO0T.js";import"./spreadSx-CwcO6WA9.js";import"./react-CQvrs41i.js";import"./FullWidthAlert-BWGXaJFy.js";import"./Alert-BwsUmVK7.js";import"./useSlot-Bqot826z.js";import"./createSvgIcon-D5Da5Jdz.js";import"./Close-OUoS5tCg.js";import"./IconButton-D5s8LN4k.js";import"./Paper-BOGp1cIL.js";import"./useTheme-FoBl1a68.js";import"./useTheme-DjP_NvVt.js";import"./Stack-07kMQ-8X.js";import"./extendSxProp-Dw4EYBpz.js";import"./getThemeProps-BK3Hwaop.js";import"./Box-BHzAAdtE.js";import"./AlertTitle-Q37-n-JO.js";import"./Typography-DZFu15BE.js";import"./index-DCwkHJnW.js";import"./ClickAwayListener-CniG53Ou.js";import"./getReactElementRef-bsTI1QOV.js";import"./index-BEdcGBiA.js";import"./index-pN3ZbJTp.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C7dIUIOW.js";import"./Tooltip-D8xgGHq0.js";import"./index-BBzJ2h35.js";import"./useControlled-Bbz1rn0m.js";import"./Popper-C0J_iJHD.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-DaHLg1Na.js";import"./QueryClientProvider-DKA2tRKY.js";import"./Link-BJVbZnYH.js";import"./Collapse-BUTezwaP.js";import"./_baseUniq-DvbkWL9Y.js";import"./_Uint8Array-BEjKHBXJ.js";import"./isArray-C7fdCft4.js";import"./_getTag-Dia_4dL4.js";import"./isEqual-EeoQ59Qx.js";import"./merge-jmjASqbE.js";import"./_initCloneObject-DN-dmQ1i.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CXHEFCpj.js";import"./inputBaseClasses-CSVpQyp-.js";import"./calculateFriendlyFileSize-B2w9M3PF.js";import"./CheckCircleTwoTone-91C58tG7.js";import"./InfoTwoTone-t3Ru72u9.js";import"./useMutation-C8RNElRf.js";import"./dayjs.min-Di4sf_5l.js";import"./chunk-AYJ5UCUI-BiGX4WeM.js";import"./cloneDeep-QNxhR9y6.js";import"./Skeleton-CaA-fJni.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DqqnBd-P.js";import"./Backdrop-xOU0DkPC.js";import"./LinearProgress-CW9nFHuG.js";import"./index-CJzk4zdl.js";import"./index-Bxfw-uJM.js";import"./index-BIEHDjnU.js";import"./const-BP60AzNb.js";import"./index-DhD9TzOL.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
