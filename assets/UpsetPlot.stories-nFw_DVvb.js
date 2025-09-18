import{U as L}from"./UpsetPlot-5gEuSeyp.js";import{f as u}from"./index-CrSgyB_-.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BHSZ00Fu.js";import"./DefaultPropsProvider-9tco0o_j.js";import"./createTheme-D5ho8bLN.js";import"./index-CeDLyl9l.js";import"./iframe-BSZkMUXl.js";import"./Button-mm7yYrVg.js";import"./createSimplePaletteValueFilter-C8A1b3wP.js";import"./useTimeout-B7GR-Evu.js";import"./ButtonBase-C059MY5T.js";import"./useForkRef-CyRsSJmZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-J2HwhF.js";import"./useFiles-mTKuC2yr.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-C6sTWsVv.js";import"./OrientationBanner-BYHu2Ktw.js";import"./index-BWLoVAyd.js";import"./spreadSx-CwcO6WA9.js";import"./react-BqDpjQ7r.js";import"./FullWidthAlert-DOe5UBN4.js";import"./Alert-CrJqm9aK.js";import"./useSlot-DECbMb1e.js";import"./createSvgIcon-DA82QREK.js";import"./Close-D60m63-8.js";import"./IconButton-Bq_AHk6p.js";import"./Paper-CWTb8To6.js";import"./useTheme-BlbhpKS0.js";import"./useTheme-TiDWFKS5.js";import"./Stack-BRnrbFjh.js";import"./extendSxProp-DbbvJvSv.js";import"./getThemeProps-Cdr16aLU.js";import"./Box-VTcCPpeM.js";import"./AlertTitle-CIx9ogsl.js";import"./Typography-CxzrTbGc.js";import"./index-CmTl4AKZ.js";import"./ClickAwayListener-DaStbp1P.js";import"./getReactElementRef-BZmorcFu.js";import"./index-BDH-fVtR.js";import"./index-C4x1OYBd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-pFpWI2g5.js";import"./Tooltip-RDwYirt5.js";import"./index-CdMMjrZE.js";import"./useControlled-OMQDlMeu.js";import"./Popper-CsrHmFop.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DvhLvv6Z.js";import"./QueryClientProvider-OOeHWQdN.js";import"./Link-BRbfQpGl.js";import"./Collapse-BBuA1S7b.js";import"./_baseUniq-CfQXy7y5.js";import"./_Uint8Array-BZa94JeL.js";import"./isArray-Bc1EE5Zd.js";import"./_getTag-DXOE1H10.js";import"./isEqual-Gu5h_3XJ.js";import"./merge-BraDPTtN.js";import"./_initCloneObject-C6fm1qu1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DyqfKaPo.js";import"./inputBaseClasses-DRF5GQ6i.js";import"./calculateFriendlyFileSize-CZ7NYNbR.js";import"./CheckCircleTwoTone-DA2k4Zpo.js";import"./InfoTwoTone-DAjJJCar.js";import"./useMutation-DnMoiO85.js";import"./dayjs.min-DooOLoqQ.js";import"./chunk-AYJ5UCUI-CpC21ICV.js";import"./cloneDeep-DqrAPpyN.js";import"./Skeleton-CFce4gLg.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dlr03rlJ.js";import"./Backdrop-CXKdS48H.js";import"./LinearProgress-CeDGHuH8.js";import"./index-nbKChZIc.js";import"./index-D_QifSOS.js";import"./index-D_kJVgbc.js";import"./const-BP60AzNb.js";import"./index-C9SqzDc2.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
