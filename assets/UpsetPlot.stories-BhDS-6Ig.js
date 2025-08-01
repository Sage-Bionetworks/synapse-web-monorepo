import{U as L}from"./UpsetPlot-DOiYWlYY.js";import{f as u}from"./index-UfXIb5DW.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DueOnmgn.js";import"./DefaultPropsProvider-Qo7oSsrQ.js";import"./createTheme-BEpdVMRU.js";import"./index-DnLLVsSx.js";import"./iframe-BcfoM7fF.js";import"./Button-B7nY5Hwz.js";import"./createSimplePaletteValueFilter-CRdqsfK_.js";import"./useTimeout-thgVV2oO.js";import"./ButtonBase-5haTo7cl.js";import"./useForkRef-B9ZYh7Z-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BVQwjipO.js";import"./useFiles-DyVKrfnz.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-D5u4SM7Q.js";import"./OrientationBanner-DioMwN-d.js";import"./index-BY8E7Ck2.js";import"./spreadSx-CwcO6WA9.js";import"./react-CYbE_2Fh.js";import"./FullWidthAlert-BcAQ3oY4.js";import"./Alert-Cs--W5Rj.js";import"./useSlot-BO4LHlnr.js";import"./createSvgIcon-C8dizGNP.js";import"./Close-4pDLHMAi.js";import"./IconButton-Dwf6nyQC.js";import"./Paper-C3ljaFl1.js";import"./useTheme-BQfmZos-.js";import"./useTheme-DTn1FyjR.js";import"./Stack-BMN8z-Q4.js";import"./extendSxProp-BYC18Z55.js";import"./getThemeProps-CcY3c29N.js";import"./Box-Cpe7AX1D.js";import"./AlertTitle-BdK-BfXp.js";import"./Typography-CLfHpKLg.js";import"./index-Dl8PO9Nn.js";import"./ClickAwayListener-w9wbA2ba.js";import"./getReactElementRef-p1ymcQP3.js";import"./index-CV-fpmeq.js";import"./index-DCxT5mVo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ymxc9Ww9.js";import"./Tooltip-BcAzm78t.js";import"./index-0ybS0gTf.js";import"./useControlled-CW3VqTbP.js";import"./Popper-BJ7Wyrx4.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DV1R38Zz.js";import"./QueryClientProvider-DAfAf0Tj.js";import"./Link-CJN9zQKk.js";import"./Collapse-DeSwuB7t.js";import"./_baseUniq-FOT1em1B.js";import"./_Uint8Array-U3hVtwmZ.js";import"./isArray-BQd1KJct.js";import"./_getTag-DaZv14cv.js";import"./isEqual-DKDMgNC7.js";import"./merge-D0qz_gBt.js";import"./_initCloneObject-CflFE1Q7.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-2xZaPCmM.js";import"./inputBaseClasses-C-e1oPsU.js";import"./calculateFriendlyFileSize-BJG5XUC1.js";import"./CheckCircleTwoTone-BYYvvA8w.js";import"./InfoTwoTone-C9cV8nXc.js";import"./useMutation-34RxXcyI.js";import"./dayjs.min-CJjVq69r.js";import"./chunk-AYJ5UCUI-BbFN9-k1.js";import"./cloneDeep-BjHIkirm.js";import"./Skeleton-BhOh3kBH.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DNfiarl3.js";import"./Backdrop-DL_WFxxH.js";import"./LinearProgress-BQAXKI15.js";import"./index-CfNzuOb9.js";import"./index-BJGiVlsZ.js";import"./index-CUHOByoI.js";import"./const-BP60AzNb.js";import"./index-AYgShgMB.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
