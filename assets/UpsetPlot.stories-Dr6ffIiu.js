import{U as L}from"./UpsetPlot-CeVtk3ue.js";import{f as u}from"./index-BeOjlT8z.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DHXTofk5.js";import"./DefaultPropsProvider-CLKCV2Mi.js";import"./createTheme-imD3fCVn.js";import"./index-2EIvOttE.js";import"./iframe-DpptiLI-.js";import"./Button-CqnPIptI.js";import"./createSimplePaletteValueFilter-DQPU1mUg.js";import"./useTimeout-LX_WXvhJ.js";import"./ButtonBase-2Al4R6rm.js";import"./useForkRef-CQBF0-9j.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CnOo6aT0.js";import"./useFiles-Cbsnwjt3.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-C9xfz5QX.js";import"./OrientationBanner-CW1l7Mqe.js";import"./index-BxSI5hVp.js";import"./spreadSx-CwcO6WA9.js";import"./react-4bRY5ye_.js";import"./FullWidthAlert-CITnWOfR.js";import"./Alert-C72wtLHY.js";import"./useSlot-DoBOlu1a.js";import"./createSvgIcon-DUQGFfak.js";import"./Close-B_G3Iub9.js";import"./IconButton-B0ZmnlWb.js";import"./Paper-CV-B9zFQ.js";import"./useTheme-D_4w8MCh.js";import"./useTheme-Ciobwydk.js";import"./Stack-5zoDyFv3.js";import"./extendSxProp-D7O4jEYO.js";import"./getThemeProps-Dtxv23iM.js";import"./Box-BG32HO33.js";import"./AlertTitle-BXFaL8WV.js";import"./Typography-BT3suWQB.js";import"./index-dfgY8llv.js";import"./ClickAwayListener-CC69yVg5.js";import"./getReactElementRef-d5BjQxB2.js";import"./index-ByoKiG1s.js";import"./index-IMcdB26k.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-vaXZjNYk.js";import"./Tooltip-Ck3Rzo7Y.js";import"./index-DShgwOlG.js";import"./useControlled-DD36GO9l.js";import"./Popper-BHQPU2s8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-D8KNzrSM.js";import"./QueryClientProvider-D12m3ESQ.js";import"./Link-CJL1KQjT.js";import"./Collapse-DeiysQkN.js";import"./_baseUniq-C08lmC_s.js";import"./_Uint8Array-CIxlcGRg.js";import"./isArray-DyfWaqSJ.js";import"./_getTag-EYLlIWYl.js";import"./isEqual-DaLj24Av.js";import"./merge-DvZzeZy3.js";import"./_initCloneObject-D4MI0F4s.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BOVbR8I6.js";import"./inputBaseClasses-CoMJ3N6h.js";import"./calculateFriendlyFileSize-CCsv7DKx.js";import"./CheckCircleTwoTone-BwGHibj0.js";import"./InfoTwoTone-DKwRulIF.js";import"./useMutation-DVU_Ff2F.js";import"./dayjs.min-Ddg9VyqD.js";import"./chunk-AYJ5UCUI-DsC9wD1H.js";import"./cloneDeep-VNPHphhQ.js";import"./Skeleton-COrlt5zJ.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-lCN9OvYv.js";import"./Backdrop-DQvGbUxn.js";import"./LinearProgress-C0h0bPtM.js";import"./index-DB6pency.js";import"./index-lj0xC-KW.js";import"./index-CuTOqzNN.js";import"./const-BP60AzNb.js";import"./index-DjGX8ezM.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
