import{U as L}from"./UpsetPlot-Bw2Hovr7.js";import{f as u}from"./index-BWw_hycQ.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BBHkSG-M.js";import"./DefaultPropsProvider-LSaRYRMW.js";import"./createTheme-xxG_Y475.js";import"./index-FnFoRS2l.js";import"./iframe-BQgclLfy.js";import"./Button-Bfbd_Rk8.js";import"./createSimplePaletteValueFilter-B89P2Dui.js";import"./useTimeout-DZfUf5bC.js";import"./ButtonBase-CAhI8_mC.js";import"./useForkRef-BJPB9EdG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CJsjeJiY.js";import"./useFiles-DgA4sua4.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-zhQmHXV5.js";import"./OrientationBanner-DsTkx0ky.js";import"./index-DjodvIJ6.js";import"./spreadSx-CwcO6WA9.js";import"./react-BSQxsnlC.js";import"./FullWidthAlert-B8IEykrY.js";import"./Alert-DnM99hfv.js";import"./useSlot-CteJh10u.js";import"./createSvgIcon-BMJln5th.js";import"./Close-DykoredG.js";import"./IconButton-CZDDDf23.js";import"./Paper-CsXkdq0v.js";import"./useTheme-Cpa7SYtl.js";import"./useTheme-CfY3xsPY.js";import"./Stack-CUWnYNVz.js";import"./extendSxProp-BWUDsKqM.js";import"./getThemeProps-QKc8-Hqp.js";import"./Box-DyKT-36E.js";import"./AlertTitle-_U30P438.js";import"./Typography-COutbzFt.js";import"./index-CvIgDNYY.js";import"./ClickAwayListener-DgVK_jOs.js";import"./getReactElementRef-DEnUjsW1.js";import"./index-DKvTqSYg.js";import"./index-BzKQHyrx.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BgEkX_7W.js";import"./Tooltip-DDWHVSDc.js";import"./index-BUAnQT2C.js";import"./useControlled-BUg4_r2X.js";import"./Popper-BDFe7_BE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BF7bVPWQ.js";import"./QueryClientProvider-CqDDjuBT.js";import"./Link-CXFgKSkP.js";import"./Collapse-DbXwNbAg.js";import"./_baseUniq-BrlURNwb.js";import"./_Uint8Array-DZ13kat9.js";import"./isArray-W6YcrcUU.js";import"./_getTag-CK2ZhFSX.js";import"./isEqual-BoqKulYO.js";import"./merge-CLKi3xPO.js";import"./_initCloneObject-lvQYDOyD.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D88S9uD9.js";import"./inputBaseClasses-BxmTzBG0.js";import"./calculateFriendlyFileSize-CqeuH4m4.js";import"./CheckCircleTwoTone-C0axq3F9.js";import"./InfoTwoTone-DROq7EBW.js";import"./useMutation-B7DmEc4c.js";import"./dayjs.min-Bqzlt4CZ.js";import"./chunk-AYJ5UCUI-X23U4ZIo.js";import"./cloneDeep-8pg9jL2B.js";import"./Skeleton-GGWL1Irm.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DQsdmnrJ.js";import"./Backdrop-BNDjKHgZ.js";import"./LinearProgress-D6vjNkMr.js";import"./index-soVznjRm.js";import"./index-B4a2Dgfu.js";import"./index-DHHHVB2l.js";import"./const-BP60AzNb.js";import"./index-Bn1OlZHX.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
