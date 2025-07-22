import{U as L}from"./UpsetPlot-CAvyMUkL.js";import{f as u}from"./index-b7YGoyBP.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-tVbN7ASV.js";import"./DefaultPropsProvider-DUe4SLC0.js";import"./createTheme-DouVkzZF.js";import"./index-BjhBhGxZ.js";import"./iframe-CAKRVY94.js";import"./Button-fWEQK8jF.js";import"./createSimplePaletteValueFilter-B7hCzxjC.js";import"./useTimeout-DR1J0EHh.js";import"./ButtonBase-B5GcETG2.js";import"./useForkRef-DoziFzYF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C4Zo5_zO.js";import"./useFiles-Bcrl0BGw.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-FXo_DyDb.js";import"./OrientationBanner-BXKiWy1p.js";import"./index-CCmOko8a.js";import"./spreadSx-CwcO6WA9.js";import"./react-BmGAKZwY.js";import"./FullWidthAlert-DMWPwNKF.js";import"./Alert-Cuv-PqdA.js";import"./useSlot-C6yZ3epQ.js";import"./createSvgIcon-BjojtdYW.js";import"./Close-6lLVp_EC.js";import"./IconButton-hUHxx1-A.js";import"./Paper-C8VfYpk9.js";import"./useTheme-5uMkSGI3.js";import"./useTheme-D5r2PTOw.js";import"./Stack-CjO5cU09.js";import"./extendSxProp-D5W_0O1z.js";import"./getThemeProps-DhOh3UIi.js";import"./Box-DQDMnk9d.js";import"./AlertTitle-Bvt17my0.js";import"./Typography-lkRJvgBP.js";import"./index-zuLHUcGH.js";import"./ClickAwayListener-BRDgwr-1.js";import"./getReactElementRef-D1DoIaoO.js";import"./index-CRlKgqQ0.js";import"./index-DxqzKTCE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-FaiCky57.js";import"./Tooltip-BuUL4GgZ.js";import"./index-DS43WhvP.js";import"./useControlled-BJ2c-GyL.js";import"./Popper-KrHjvaqU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CKLqaGno.js";import"./QueryClientProvider-DHk5eiZe.js";import"./Link-8kkS-mxx.js";import"./Collapse-CKQpnZfS.js";import"./_baseUniq-Dswgy6EB.js";import"./_Uint8Array-ChBpcGHI.js";import"./isArray-CS29XtqI.js";import"./_getTag-SF2PxsxB.js";import"./isEqual-CGyRRUPG.js";import"./merge-B0Gh6zE8.js";import"./_initCloneObject-BVydIEyN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ActGc6ip.js";import"./inputBaseClasses-_51fNEuP.js";import"./calculateFriendlyFileSize-DLPv6MaH.js";import"./CheckCircleTwoTone-DeOItwFW.js";import"./InfoTwoTone-jmaNwLhA.js";import"./useMutation-B4ZT0pCG.js";import"./dayjs.min-BGs6fL4y.js";import"./chunk-AYJ5UCUI-BCiY7pDA.js";import"./cloneDeep-DtBaUqoa.js";import"./Skeleton-DrfCxUok.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BFE2oQjb.js";import"./Backdrop-ZnD1vMlo.js";import"./LinearProgress-fhxWSFip.js";import"./index-BiW0uQbI.js";import"./index-CVXXdNI3.js";import"./index-CzFZbO2K.js";import"./const-BP60AzNb.js";import"./index-PDSSnJnU.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
