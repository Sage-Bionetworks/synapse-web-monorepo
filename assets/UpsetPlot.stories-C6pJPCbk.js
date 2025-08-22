import{U as L}from"./UpsetPlot-BSiqzRZE.js";import{f as u}from"./index-ONastI6n.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Dcd3qBXl.js";import"./DefaultPropsProvider-B4wQ821E.js";import"./createTheme-pvhOUZyw.js";import"./index-Dj1d4BqT.js";import"./iframe-TlcNnpHp.js";import"./Button-LmC9B_pW.js";import"./createSimplePaletteValueFilter-D9dK7LRT.js";import"./useTimeout-Cn8rA_AT.js";import"./ButtonBase-D6StLzVo.js";import"./useForkRef-BHqKRelU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D5IZ-XOY.js";import"./useFiles-FYuonao8.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-Co8dGAeQ.js";import"./OrientationBanner-BKyyQUa8.js";import"./index-DGf3smqW.js";import"./spreadSx-CwcO6WA9.js";import"./react-DdDibM_d.js";import"./FullWidthAlert-C-IC2KrU.js";import"./Alert-DR4rcZNl.js";import"./useSlot-IA_vObsD.js";import"./createSvgIcon-Dj2HycGS.js";import"./Close-Dfx5VX34.js";import"./IconButton-5dp10n6T.js";import"./Paper-CRp1MfuN.js";import"./useTheme-DzaEsJZx.js";import"./useTheme-ChFb1gM-.js";import"./Stack-CU3hXGpo.js";import"./extendSxProp-XPQdjpPF.js";import"./getThemeProps-C8ZyFRso.js";import"./Box-BoJfoAK2.js";import"./AlertTitle-C9125y5h.js";import"./Typography-CeYlYS3n.js";import"./index-Gxu560yY.js";import"./ClickAwayListener-DwWoVyJe.js";import"./getReactElementRef-CbVIyvnd.js";import"./index-B81YNvG1.js";import"./index-DtXhXAQj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DgiJlUnu.js";import"./Tooltip-BnCZGVg6.js";import"./index-CnaJhkGM.js";import"./useControlled-qa7mk4OM.js";import"./Popper-CqhVe4Td.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Bvww99u4.js";import"./QueryClientProvider-BDoqR9Ee.js";import"./Link-BW1h0oRf.js";import"./Collapse-BRcEHh_Y.js";import"./_baseUniq-XaDoym7p.js";import"./_Uint8Array-DqLRerek.js";import"./isArray-BCPw1xdT.js";import"./_getTag-TRalT4-G.js";import"./isEqual-pR9-SkGa.js";import"./merge-Cr6niOtn.js";import"./_initCloneObject-C35SbE2c.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTvapujN.js";import"./inputBaseClasses-B5I_2cVd.js";import"./calculateFriendlyFileSize-CX4zkHbj.js";import"./CheckCircleTwoTone-BiSJyRNH.js";import"./InfoTwoTone-xmh64BVe.js";import"./useMutation-Mah1Ry7w.js";import"./dayjs.min-D6rrA4r6.js";import"./chunk-AYJ5UCUI-ByReiuUj.js";import"./cloneDeep-Bph8_Rcw.js";import"./Skeleton-3reWCr-Q.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D1PpK4ph.js";import"./Backdrop-BmAQTuZ8.js";import"./LinearProgress-BcO7OUy3.js";import"./index-yEEQoz0B.js";import"./index-B9aCyF5O.js";import"./index-BQbSZh-I.js";import"./const-BP60AzNb.js";import"./index-CntuSaeo.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
