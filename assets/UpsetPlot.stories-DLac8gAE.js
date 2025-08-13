import{U as L}from"./UpsetPlot-BWnsHA1h.js";import{f as u}from"./index-CmlWPIJj.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BrwD4Rgg.js";import"./DefaultPropsProvider-BaPAusYQ.js";import"./createTheme-DJ8jmDR5.js";import"./index-BOJl8zs4.js";import"./iframe-CwIwQgjS.js";import"./Button-BiJGPmgV.js";import"./createSimplePaletteValueFilter-D3fy_EAD.js";import"./useTimeout-BPDMM2Tp.js";import"./ButtonBase-Pz8AKCrZ.js";import"./useForkRef-DqLNG00X.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BsIUyss-.js";import"./useFiles-D5HclbhU.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-C2at6siE.js";import"./OrientationBanner-CnZ8ryTL.js";import"./index-mQKK7BYu.js";import"./spreadSx-CwcO6WA9.js";import"./react-ktKOxBA1.js";import"./FullWidthAlert-D9AAhhU7.js";import"./Alert-DSVOF20n.js";import"./useSlot-BRv_P9G7.js";import"./createSvgIcon-CRVcpVfa.js";import"./Close-CRWJHQI3.js";import"./IconButton-Dp9SWVtE.js";import"./Paper-Cwhi4Tas.js";import"./useTheme-4GlJ13p_.js";import"./useTheme-CcSGYcKa.js";import"./Stack-BBvHuinB.js";import"./extendSxProp-DDKnzEFU.js";import"./getThemeProps-CRFwgDoK.js";import"./Box-L9_0Hhtv.js";import"./AlertTitle-Creet3Rb.js";import"./Typography-DIesS9OZ.js";import"./index-BCs6URVP.js";import"./ClickAwayListener-Bw57uiSd.js";import"./getReactElementRef-Dsz2AORi.js";import"./index-DN1Hu2iA.js";import"./index-DIVf0ck2.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C99bG9AM.js";import"./Tooltip-CuMQvwjd.js";import"./index-mQ9NJMf-.js";import"./useControlled-CbcrRPN_.js";import"./Popper-B3vUIkac.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BPsfCRMH.js";import"./QueryClientProvider-CeUuksW1.js";import"./Link-fW7RxGvv.js";import"./Collapse-9Xyv3Wfq.js";import"./_baseUniq-Dfu2R1A5.js";import"./_Uint8Array-BNBBqm3y.js";import"./isArray-HHyoN429.js";import"./_getTag-toCrByOt.js";import"./isEqual-s-DXNk-z.js";import"./merge-C4g7vkBa.js";import"./_initCloneObject-BGJxU9AK.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Zf8L2ljd.js";import"./inputBaseClasses-BVCtGGkj.js";import"./calculateFriendlyFileSize-CcvVINcD.js";import"./CheckCircleTwoTone-CTEklNTy.js";import"./InfoTwoTone-BxpAvk01.js";import"./useMutation-BBtQQukP.js";import"./dayjs.min-Ctg6EyvP.js";import"./chunk-AYJ5UCUI-Enb11es7.js";import"./cloneDeep-DLBG6wMo.js";import"./Skeleton-DdoF2QLM.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DrV99t_k.js";import"./Backdrop-Q4HlnH3r.js";import"./LinearProgress-BM8hytRo.js";import"./index-CNhjOfGa.js";import"./index-CaQBgVH9.js";import"./index-Cz-MVpe7.js";import"./const-BP60AzNb.js";import"./index-BcFrYDeH.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
