import{U as L}from"./UpsetPlot-C1IBjS0W.js";import{f as u}from"./index-Bxnj_zKa.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CiWfxXvF.js";import"./DefaultPropsProvider-CdZ-TRIM.js";import"./createTheme-BKPwUAfk.js";import"./index-DaTBybXe.js";import"./iframe--yFez3Al.js";import"./Button-BYG8DFHi.js";import"./createSimplePaletteValueFilter-DiD2ONol.js";import"./useTimeout-rL_18_XW.js";import"./ButtonBase-CgPIXsM6.js";import"./useForkRef-BZAA15f3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Wi5tu9JN.js";import"./useFiles-Xhru7nLd.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BqhDifOr.js";import"./OrientationBanner-DzfNzdUh.js";import"./index-B4XRG68x.js";import"./spreadSx-CwcO6WA9.js";import"./react-Pb0NEBSA.js";import"./FullWidthAlert-_tFDAG69.js";import"./Alert-CS0ZjUJW.js";import"./useSlot-B1igJx-T.js";import"./createSvgIcon-CbCm1XK6.js";import"./Close-DYZja2kY.js";import"./IconButton-CAHC7YYx.js";import"./Paper-C6idgaEO.js";import"./useTheme-C6LfNkUQ.js";import"./useTheme-DlM204bG.js";import"./Stack-CWfHCwRC.js";import"./extendSxProp-Djycy254.js";import"./getThemeProps-D9AtXPyY.js";import"./Box-BztlAJDN.js";import"./AlertTitle-C_XUz4ZV.js";import"./Typography-D1rsUm_t.js";import"./index-Vh8bh29G.js";import"./ClickAwayListener-BQz92f_7.js";import"./getReactElementRef-Dt3Z1NPg.js";import"./index-DXfrIQQF.js";import"./index-Qf1tKrE8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DStkP8oW.js";import"./Tooltip-1tUD6Zst.js";import"./index-CiHMej98.js";import"./useControlled-EryUCQh-.js";import"./Popper-CjsY8qE4.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DgnJ03lX.js";import"./QueryClientProvider-H2N9izuu.js";import"./Link-cMf7melx.js";import"./Collapse-BJ4yZBkl.js";import"./_baseUniq-CeDH7iT-.js";import"./_Uint8Array-qeTLqarC.js";import"./isArray-6LMrQIXo.js";import"./_getTag-OFAcIPOT.js";import"./isEqual-DWRi7yzo.js";import"./merge-CWvqfBqd.js";import"./_initCloneObject-C9H3eTJC.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CG0WdJOG.js";import"./inputBaseClasses-V6DwAvLl.js";import"./calculateFriendlyFileSize-BpMPpPoy.js";import"./CheckCircleTwoTone-Ddxtix5i.js";import"./InfoTwoTone-DxpXp-8o.js";import"./useMutation-CoYFm7AG.js";import"./dayjs.min-Cmx1FqwA.js";import"./chunk-AYJ5UCUI-IxvEqZR4.js";import"./cloneDeep-oCPUZlQ9.js";import"./Skeleton-CILfjMmk.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cg5zXXVA.js";import"./Backdrop-BsiF-rFw.js";import"./LinearProgress-Cn0UM8tQ.js";import"./index-0rGRJc1r.js";import"./index-DsOza03m.js";import"./index-nLV8IV7_.js";import"./const-BP60AzNb.js";import"./index-BC4enOz_.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
