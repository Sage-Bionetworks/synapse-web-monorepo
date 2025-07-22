import{U as L}from"./UpsetPlot-C4HPDPfm.js";import{f as u}from"./index-CQr-V6Tm.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-vN5V3mA9.js";import"./DefaultPropsProvider-CHwO8Irh.js";import"./createTheme-CH0S07Xl.js";import"./index-BlD88g6h.js";import"./iframe-Dw2kzFmB.js";import"./Button-acN03ydj.js";import"./createSimplePaletteValueFilter-PozQUcR9.js";import"./useTimeout-CBvk5HB8.js";import"./ButtonBase-BbZdtk3k.js";import"./useForkRef-DLhOhr1j.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BzD6ZhYg.js";import"./useFiles-BAiph8Ej.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CYj6kXbQ.js";import"./OrientationBanner-fbSmiwhA.js";import"./index-D0fIp_t6.js";import"./spreadSx-CwcO6WA9.js";import"./react-C3RSnw2z.js";import"./FullWidthAlert-BFCll_GI.js";import"./Alert-CLnis_wa.js";import"./useSlot-CyLwBbxN.js";import"./createSvgIcon-BI80JrgA.js";import"./Close-CEirCeG1.js";import"./IconButton-CtEoJzuT.js";import"./Paper-CIxRtZl4.js";import"./useTheme-DYKHbQqC.js";import"./useTheme-COGVK8pJ.js";import"./Stack-CvINZxhI.js";import"./extendSxProp-B2u3Q9Pp.js";import"./getThemeProps-nOnHEFGz.js";import"./Box-BGkXd8ho.js";import"./AlertTitle-Dnb-77sV.js";import"./Typography-e2IiOH4S.js";import"./index-DdoUcSEN.js";import"./ClickAwayListener-Bmj-Z5W3.js";import"./getReactElementRef-DmWaJQ_1.js";import"./index-Ccc0V01c.js";import"./index-DZEeyIQH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CY8LBbso.js";import"./Tooltip-BOQgbOBe.js";import"./index-D4uhv7w9.js";import"./useControlled-BNsMtrFO.js";import"./Popper-Bz3MVMCK.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CbujSmpl.js";import"./QueryClientProvider-BBCGFjVi.js";import"./Link-DXSEdgEI.js";import"./Collapse-Czjt1YE3.js";import"./_baseUniq-CBw35EsX.js";import"./_Uint8Array-D6j-lsbe.js";import"./isArray-wxYDmiSy.js";import"./_getTag-Ce3sAoVI.js";import"./isEqual-DaCmCZrZ.js";import"./merge-DC5vg56i.js";import"./_initCloneObject--NHd_UNu.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DMpsy5Bs.js";import"./inputBaseClasses-Dp8MT5pH.js";import"./calculateFriendlyFileSize-umI_uxNa.js";import"./CheckCircleTwoTone-CIsibCt1.js";import"./InfoTwoTone-DCKJ2vct.js";import"./useMutation-y0cbPqin.js";import"./dayjs.min-JYtXttkU.js";import"./chunk-AYJ5UCUI-C4czLWrh.js";import"./cloneDeep-nG13UmtC.js";import"./Skeleton-D8Egyo3_.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dycsny19.js";import"./Backdrop-wYLWETJy.js";import"./LinearProgress-Bz5rhxIF.js";import"./index-CbdO1biB.js";import"./index-Dzi9uL5A.js";import"./index-CBNDQx5j.js";import"./const-BP60AzNb.js";import"./index-BvhD7ZzE.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
