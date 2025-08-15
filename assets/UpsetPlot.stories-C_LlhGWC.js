import{U as L}from"./UpsetPlot-DTHLXNSY.js";import{f as u}from"./index-CDepsYYu.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BywsSmc-.js";import"./DefaultPropsProvider-Df1PfarS.js";import"./createTheme-UonGQGw4.js";import"./index-BUsvr3pR.js";import"./iframe-BOf6LPjK.js";import"./Button-CkV_4l2j.js";import"./createSimplePaletteValueFilter-CJ-IbVpc.js";import"./useTimeout-BMsv0ZJ3.js";import"./ButtonBase-On86KBDi.js";import"./useForkRef-CRv5njRE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BCAN28JR.js";import"./useFiles-D7R6W0Po.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BF-cq9I-.js";import"./OrientationBanner-BPE7jN4H.js";import"./index-DRmLmgSG.js";import"./spreadSx-CwcO6WA9.js";import"./react-CqXSjSjN.js";import"./FullWidthAlert-CyxVaTo-.js";import"./Alert-Bk5JlffV.js";import"./useSlot-wrl7o3Ug.js";import"./createSvgIcon-DKQD7mOV.js";import"./Close-CeUTRSXW.js";import"./IconButton-BLusjQnA.js";import"./Paper-WLG-MfiP.js";import"./useTheme-B7irvlgN.js";import"./useTheme-Cf0y_-BP.js";import"./Stack-Be1fl8B2.js";import"./extendSxProp-6X8i3Ual.js";import"./getThemeProps-CiHhwHIs.js";import"./Box-CjXe8gIr.js";import"./AlertTitle-D0l0ox_T.js";import"./Typography-CBmUgXmK.js";import"./index-knRHlM1X.js";import"./ClickAwayListener-CenNq_25.js";import"./getReactElementRef-CRfSQGz0.js";import"./index-Bv-8_qSa.js";import"./index-BJ97qXsD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BCPuHGGV.js";import"./Tooltip-yDHB8MiT.js";import"./index-CjNVpIRd.js";import"./useControlled-DeIG_K28.js";import"./Popper-Dpckc59n.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BzsoOeu3.js";import"./QueryClientProvider-B1Ol8Yry.js";import"./Link-Bfy-wYj9.js";import"./Collapse-B5BlCAjr.js";import"./_baseUniq-jQ8xeg2H.js";import"./_Uint8Array-XpvvWAw1.js";import"./isArray-7pzLm2zZ.js";import"./_getTag-C6gRbf3L.js";import"./isEqual-D7UROsmS.js";import"./merge-DK1gT9qk.js";import"./_initCloneObject-DK2bw49X.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-fuokgPOZ.js";import"./inputBaseClasses-C7UFnbtn.js";import"./calculateFriendlyFileSize-Do506Vrw.js";import"./CheckCircleTwoTone-CnMK8m3r.js";import"./InfoTwoTone-UlfRuzPu.js";import"./useMutation-CcZ13Imf.js";import"./dayjs.min-DIAzs0dw.js";import"./chunk-AYJ5UCUI-D_jbnITc.js";import"./cloneDeep-Czp6lS9T.js";import"./Skeleton-Bvxz5ehu.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-xJOBv8J4.js";import"./Backdrop-5FmwRqGl.js";import"./LinearProgress-CvALm9xa.js";import"./index-Bp54NL6A.js";import"./index-C_D488zC.js";import"./index-DPfsrvyM.js";import"./const-BP60AzNb.js";import"./index-DG5F353b.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
