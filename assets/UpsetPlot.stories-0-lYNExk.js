import{U as L}from"./UpsetPlot-Bznkdb1k.js";import{f as u}from"./index-DGsAPtaM.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BrUjI-Nf.js";import"./DefaultPropsProvider-OmFXGUgd.js";import"./createTheme-BlVEnTR5.js";import"./index-BnsAmEtq.js";import"./iframe-B4TujuON.js";import"./Button-DvVXu8mn.js";import"./createSimplePaletteValueFilter-BGampqua.js";import"./useTimeout-C2orhFSZ.js";import"./ButtonBase-Dl_5hXw0.js";import"./useForkRef-B5w0ReP-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Sv7dHwXp.js";import"./useFiles-d4kpjNGQ.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BH4LLXmY.js";import"./OrientationBanner-Yieju6se.js";import"./index-CfpbnZNI.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bnk5KY85.js";import"./FullWidthAlert-BS_TZWyp.js";import"./Alert-CoysFjkK.js";import"./useSlot-BHAGHt0n.js";import"./createSvgIcon-kvxBrd-t.js";import"./Close-LwTSue0v.js";import"./IconButton-5P6iShNd.js";import"./Paper-BO5epkPB.js";import"./useTheme-1YICGajx.js";import"./useTheme-CNMaTEWn.js";import"./Stack-DYZqiZ6i.js";import"./extendSxProp-koO_2w88.js";import"./getThemeProps-Bh_q7kvm.js";import"./Box-B5vRZfzY.js";import"./AlertTitle-BWBdfgnl.js";import"./Typography-BFH2hiN4.js";import"./index-BKheZmbu.js";import"./ClickAwayListener-aRsUnuQe.js";import"./getReactElementRef-DLRXomsv.js";import"./index-KcgmlDz6.js";import"./index-BLtIAzY4.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-EO0f-oq1.js";import"./Tooltip-BPrOIWIK.js";import"./index-I4ofRSQS.js";import"./useControlled-Bp6TR6mf.js";import"./Popper-DvFhUK6r.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-04RYnwEz.js";import"./QueryClientProvider-CMlW2tF1.js";import"./Link-xr0WhLoh.js";import"./Collapse-DSz046KH.js";import"./_baseUniq-Defz6Y26.js";import"./_Uint8Array-zr0PqO_f.js";import"./isArray-pEgRuqDv.js";import"./_getTag-B6wfRYtY.js";import"./isEqual-BLb2ZH25.js";import"./merge-Bn1fK-_l.js";import"./_initCloneObject-DcsVX5be.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C_6V6RV4.js";import"./inputBaseClasses-CGUn8g5c.js";import"./calculateFriendlyFileSize-DjmXNXd1.js";import"./CheckCircleTwoTone-Biso3ktg.js";import"./InfoTwoTone-BXK2g6US.js";import"./useMutation-8Dd83spH.js";import"./dayjs.min-Dyj_DlME.js";import"./chunk-AYJ5UCUI-Bjt3vE5l.js";import"./cloneDeep-CoFd_ir3.js";import"./Skeleton-BN7SCgP4.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BYgUk4Xr.js";import"./Backdrop-CJ5MMLVR.js";import"./LinearProgress-BFL7fpd6.js";import"./index-BBgXzvzL.js";import"./index-GZngU-I8.js";import"./index-2rVQcAdR.js";import"./const-BP60AzNb.js";import"./index-p5ttx_3M.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
