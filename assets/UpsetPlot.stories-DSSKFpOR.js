import{U as L}from"./UpsetPlot-BoBPE4i9.js";import{f as u}from"./index-DCWLlvFK.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DCoxKEPa.js";import"./DefaultPropsProvider-DObZu-x4.js";import"./createTheme-CR4l9uHY.js";import"./index-B_NH1tG1.js";import"./iframe-DHCImqeI.js";import"./Button-DoIvstwE.js";import"./createSimplePaletteValueFilter-B4F2o6yw.js";import"./useTimeout-B2kCgEvL.js";import"./ButtonBase-Bkor91_R.js";import"./useForkRef-LW0sx3G7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DoHiQExb.js";import"./useFiles-KkqJyoYZ.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BuxqniVA.js";import"./OrientationBanner-CQ4al9ts.js";import"./index-CqfvS4OY.js";import"./spreadSx-CwcO6WA9.js";import"./react-D2T44UuD.js";import"./FullWidthAlert-Cnt4nJ8k.js";import"./Alert-XDLX-kgZ.js";import"./useSlot-BgKGFXDJ.js";import"./createSvgIcon-DWa7O56I.js";import"./Close-Di3tbyvY.js";import"./IconButton-BJ3jKP03.js";import"./Paper-B8iPITrA.js";import"./useTheme-D3T9ikY1.js";import"./useTheme-DIzPV2Gw.js";import"./Stack-CDLC3VVo.js";import"./extendSxProp-CPr-MONH.js";import"./getThemeProps-Ds3KKIqm.js";import"./Box-B3jqVByX.js";import"./AlertTitle-C2sBobMK.js";import"./Typography-i0V5tERP.js";import"./index-O1AecroA.js";import"./ClickAwayListener-Cp_ppUmU.js";import"./getReactElementRef-ByWD4INQ.js";import"./index-BtONyuYK.js";import"./index-BqR61apv.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-PH4sX_uL.js";import"./Tooltip-xaz2F5ki.js";import"./index-VdUxzL5Z.js";import"./useControlled-D93q3dyv.js";import"./Popper-FEJGxMLG.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BuLOb3lc.js";import"./QueryClientProvider-WI38r6wY.js";import"./Link-Dp5s2AVD.js";import"./Collapse-D3fprLKJ.js";import"./_baseUniq-CD_mmW-P.js";import"./_Uint8Array-CyA3Nt41.js";import"./isArray-BOhUVnS7.js";import"./_getTag-C4-01JXd.js";import"./isEqual-DikMqJ7x.js";import"./merge-CCMRKMk9.js";import"./_initCloneObject-Cn82PUw-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTOeofJf.js";import"./inputBaseClasses-CNuRHAx7.js";import"./calculateFriendlyFileSize-DJiWUp2i.js";import"./CheckCircleTwoTone-GQrVTNRb.js";import"./InfoTwoTone-DiCCtnov.js";import"./useMutation-CHIXNxbT.js";import"./dayjs.min-Wk8Alc5x.js";import"./chunk-AYJ5UCUI-C1dCOLZ7.js";import"./cloneDeep-DFZ6TNqL.js";import"./Skeleton-sOiy-Fvd.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BnI3JkMw.js";import"./Backdrop-DorHw4JW.js";import"./LinearProgress-CRQSyC1b.js";import"./index-DaREduGx.js";import"./index-D1AMEzqR.js";import"./index-D3IjbJIq.js";import"./const-BP60AzNb.js";import"./index-BHiQDPeQ.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
