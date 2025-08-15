import{U as L}from"./UpsetPlot-DJxkscP4.js";import{f as u}from"./index-Li1rbyPN.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bii3_0WX.js";import"./DefaultPropsProvider-BYuvptnG.js";import"./createTheme-ev_cnLba.js";import"./index-BULbjeCJ.js";import"./iframe-D8Kty_Cx.js";import"./Button-r_CHdG4P.js";import"./createSimplePaletteValueFilter-C5m0hHOH.js";import"./useTimeout-DWmVZNbT.js";import"./ButtonBase-CiAIFq4G.js";import"./useForkRef-7bnDI6EI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwBC6jxn.js";import"./useFiles-DaYozhj8.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-CZPiPVFz.js";import"./OrientationBanner-B2DF_DFi.js";import"./index-B1UExM3p.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4pAv_N3.js";import"./FullWidthAlert-EAoJPxu-.js";import"./Alert-CClpx-g6.js";import"./useSlot-BwDIOyOX.js";import"./createSvgIcon-C0GalzBE.js";import"./Close-CYhpPBds.js";import"./IconButton-DMIkHh5_.js";import"./Paper-Cx_w1032.js";import"./useTheme-B5FTPKZL.js";import"./useTheme-dcyxTKNU.js";import"./Stack-BFFoH8un.js";import"./extendSxProp-Ce12OY0O.js";import"./getThemeProps-BORvnqwy.js";import"./Box-DqnviQW6.js";import"./AlertTitle-geORYhAF.js";import"./Typography-DitlkZyP.js";import"./index-ClN6qXii.js";import"./ClickAwayListener-BbaBQeHw.js";import"./getReactElementRef-D0uGMMsH.js";import"./index-fk2bcQrb.js";import"./index-Dct6V00c.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D5RDzHRC.js";import"./Tooltip-BLYw3Ezs.js";import"./index-B4uz7QPW.js";import"./useControlled-ByKzLjYb.js";import"./Popper-1vHQSSRm.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Mk4mN9q8.js";import"./QueryClientProvider-C83H8mhw.js";import"./Link-DxLeV4Tk.js";import"./Collapse-Cd_tDlUa.js";import"./_baseUniq-DnPxHH0Q.js";import"./_Uint8Array-Cji-Snuo.js";import"./isArray-tOqOrFMs.js";import"./_getTag-C3CHM0S0.js";import"./isEqual-BQ3mKdqC.js";import"./merge-Dr5C9d-b.js";import"./_initCloneObject-CM0Vu1zc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-7vaEf5cW.js";import"./inputBaseClasses-BsVVbgu8.js";import"./calculateFriendlyFileSize-aCuYBZYU.js";import"./CheckCircleTwoTone-CxOtohD-.js";import"./InfoTwoTone-CqaUMjXS.js";import"./useMutation-CZS0_A_1.js";import"./dayjs.min-CmsqEN2B.js";import"./chunk-AYJ5UCUI-BnMQ8BOG.js";import"./cloneDeep-oCmGEZxM.js";import"./Skeleton-jbL9UTdY.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DrB2s5Ut.js";import"./Backdrop-B74hGJY7.js";import"./LinearProgress-BNLEsBC4.js";import"./index-tYBf_tUT.js";import"./index-ClqnxJej.js";import"./index-2VINkEoc.js";import"./const-BP60AzNb.js";import"./index-D6cNCKHM.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
