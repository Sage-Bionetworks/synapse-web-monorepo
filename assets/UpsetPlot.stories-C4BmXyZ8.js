import{U as L}from"./UpsetPlot-sUFLcTBf.js";import{f as u}from"./index-O-2vhGkm.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-ZmbhHQfz.js";import"./DefaultPropsProvider-WJKOyJT-.js";import"./createTheme-B8qtGaPA.js";import"./index-DG5WaW8A.js";import"./iframe-DnJ5JHSL.js";import"./Button-DfdvB59M.js";import"./createSimplePaletteValueFilter-DKnUICEw.js";import"./useTimeout-C2yROX5q.js";import"./ButtonBase-HT1BmJkV.js";import"./useForkRef-CW6ZjnOu.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-szAnAP88.js";import"./useFiles-BaHBnPCT.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-BqMZZ0Uj.js";import"./OrientationBanner-D3mCNTls.js";import"./index-D9zPyMPU.js";import"./spreadSx-CwcO6WA9.js";import"./react-DpPAoAus.js";import"./FullWidthAlert-C15S_5lN.js";import"./Alert-CqLArlEA.js";import"./useSlot-JvNPDeI7.js";import"./createSvgIcon-COjOD54i.js";import"./Close-COST_jYw.js";import"./IconButton-D4tlpKJ0.js";import"./Paper-DP7YNfiE.js";import"./useTheme-a817PGTf.js";import"./useTheme-DoRa5GNx.js";import"./Stack-mJ9nGhMq.js";import"./extendSxProp-C3WEdxaP.js";import"./getThemeProps-nH5b3nzk.js";import"./Box-Dwzdnkyq.js";import"./AlertTitle-D_6eYjWf.js";import"./Typography-DJYJum-Z.js";import"./index-C0MKoZk1.js";import"./ClickAwayListener-BuTrm4_l.js";import"./getReactElementRef-Cn7e0r_1.js";import"./index-De9PzaEN.js";import"./index-BsQ9BBfm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DIlAcZ3T.js";import"./Tooltip-D9bXZBwE.js";import"./index-DepU4Aic.js";import"./useControlled-CEU-8lDi.js";import"./Popper-CRSbOcEy.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-Ba3IRlbK.js";import"./QueryClientProvider-CRM5FpDi.js";import"./Link-Don1gO5O.js";import"./Collapse-BifcPkpD.js";import"./_baseUniq-B4bOwasf.js";import"./_Uint8Array-93iIsemI.js";import"./isArray-BNx9SFw4.js";import"./_getTag-CC1IQGmn.js";import"./isEqual-DhexJtMb.js";import"./merge-COeUm6ZQ.js";import"./_initCloneObject-U8B2jDKi.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CvRe1w3X.js";import"./inputBaseClasses-Bj2LEIDd.js";import"./calculateFriendlyFileSize-Ddu106po.js";import"./CheckCircleTwoTone-C1fKEsD6.js";import"./InfoTwoTone-Cz9XMzuy.js";import"./useMutation-nRNz6yUF.js";import"./dayjs.min-DpTEiHjS.js";import"./chunk-AYJ5UCUI-DUTlC2ep.js";import"./cloneDeep-Bl5O9E0A.js";import"./Skeleton-Z_xAmh5P.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DJCS4dnF.js";import"./Backdrop-vcVR1Cn7.js";import"./LinearProgress-mYVJrgmp.js";import"./index-CGluu2Xf.js";import"./index-ZT0ItsKN.js";import"./index-CbkTsAas.js";import"./const-BP60AzNb.js";import"./index-BK3ab3Th.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
