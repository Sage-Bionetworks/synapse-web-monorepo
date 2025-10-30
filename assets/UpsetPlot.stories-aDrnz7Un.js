import{U as L}from"./UpsetPlot-BJfSMWFB.js";import{f as u}from"./index-CNQXqAK1.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C8d2qYfZ.js";import"./DefaultPropsProvider-BHwoOyH7.js";import"./createTheme-C4xHNGdh.js";import"./index-BtGDcTvp.js";import"./iframe-CBNphiDP.js";import"./Button-X-aMYJSh.js";import"./createSimplePaletteValueFilter-C_Cdnk9R.js";import"./useTimeout-Cmz87tz9.js";import"./ButtonBase-DBuVifEX.js";import"./useForkRef-BiijcE59.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BMJ4Jv0_.js";import"./useFiles-DP5r_8h_.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-B374GTlB.js";import"./OrientationBanner-BU-7X07a.js";import"./index-DOh4s_-E.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cn6UXufh.js";import"./FullWidthAlert-DNI0u40D.js";import"./Alert-C_0F6J7S.js";import"./useSlot-4Dt2bm7X.js";import"./createSvgIcon-s4G4qou3.js";import"./Close-Cg5bmZHm.js";import"./IconButton-DwyAerDa.js";import"./Paper-q9JuhaB3.js";import"./useTheme-Dx4TqPEY.js";import"./useTheme-DwROfidY.js";import"./Stack-DYtdGJnP.js";import"./useThemeProps-BpG_5eyZ.js";import"./getThemeProps-gvKTAKTt.js";import"./extendSxProp-B_iH4oL0.js";import"./Box-DcHUT-iR.js";import"./AlertTitle-Cc_aOr1q.js";import"./Typography-C87QV3YC.js";import"./index-DValAcPx.js";import"./ClickAwayListener-C8du9OzG.js";import"./getReactElementRef-Bvp3nBcK.js";import"./index-umcRd70c.js";import"./index-ChFLTI6y.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-7xCOvQFP.js";import"./Tooltip-BVGISXDf.js";import"./index-VuQkd2dy.js";import"./useControlled-ChZzA-b3.js";import"./Popper-1yvfHCmZ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DKU6Kxm0.js";import"./QueryClientProvider-Drv3DDYU.js";import"./Link-DNZklxO1.js";import"./Collapse-Bo6KiRDL.js";import"./_baseUniq-D9WPqwKE.js";import"./_Uint8Array-CtW1SfOY.js";import"./isArray-DJCEQSyb.js";import"./_getTag-C_b1pV5H.js";import"./isEqual-XYNdVziB.js";import"./noop-DX6rZLP_.js";import"./merge-BiadW8tB.js";import"./_initCloneObject-KGx9qkw7.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bp6vP_zE.js";import"./inputBaseClasses-ESUxP_6L.js";import"./calculateFriendlyFileSize-BGNYAu__.js";import"./CheckCircleTwoTone-B_j1OfQE.js";import"./InfoTwoTone-Fe5W6L4i.js";import"./useMutation-CR2RaXsm.js";import"./dayjs.min-BFapz5wS.js";import"./chunk-AYJ5UCUI-C5f8fAX_.js";import"./cloneDeep-BD-s7-9R.js";import"./Skeleton-DdZWbvza.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DFxQqN42.js";import"./Backdrop-Dlas9S1p.js";import"./LinearProgress-BA9iZH2r.js";import"./index-DI1n8VOp.js";import"./index-Bf-yU5tt.js";import"./index-D4qe9DxJ.js";import"./const-BP60AzNb.js";import"./index-DX0nyoxf.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Xt=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,Xt as __namedExportsOrder,Kt as default};
