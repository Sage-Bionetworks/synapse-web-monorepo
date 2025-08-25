import{U as L}from"./UpsetPlot-BUIS77cL.js";import{f as u}from"./index-DyKvQeQp.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Y-NkkuPI.js";import"./DefaultPropsProvider-DPtW3vxh.js";import"./createTheme-zhaCRmkM.js";import"./index-CNMTJ46z.js";import"./iframe-BJviWTqp.js";import"./Button-BNOHA6TW.js";import"./createSimplePaletteValueFilter-BeNeyznZ.js";import"./useTimeout-D5CpEaw_.js";import"./ButtonBase-BLePZJCP.js";import"./useForkRef-qN9Lg4wt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BIKFNcu_.js";import"./useFiles-2TyPXxt4.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-psamMqWq.js";import"./OrientationBanner-BFYFv59n.js";import"./index-xjd9PeKK.js";import"./spreadSx-CwcO6WA9.js";import"./react-CT8wgIwV.js";import"./FullWidthAlert-Bpuvfh1_.js";import"./Alert-ITpKP4sT.js";import"./useSlot-spgws4xY.js";import"./createSvgIcon-D8PnHcXI.js";import"./Close-C7dYT7w0.js";import"./IconButton-C7Nw5lJf.js";import"./Paper-Dik6GTog.js";import"./useTheme-ICdOAtbl.js";import"./useTheme-aLami-tv.js";import"./Stack-BGpq_-To.js";import"./extendSxProp-wdNZDvym.js";import"./getThemeProps-Ccd5Mcjt.js";import"./Box-BcE9yvph.js";import"./AlertTitle-BKpJvv99.js";import"./Typography-DtntXaKd.js";import"./index-CJ1gOIxh.js";import"./ClickAwayListener-CVd4muIH.js";import"./getReactElementRef-C3gFMLhu.js";import"./index-BCwsOVmd.js";import"./index-By9oCF5Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CxbUMiqI.js";import"./Tooltip-DxSAO_PP.js";import"./index-Dgkqn9pp.js";import"./useControlled-KwZho2LT.js";import"./Popper-DFlTrhfk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BrsdH-SX.js";import"./QueryClientProvider-C16TczSl.js";import"./Link-gmr1YpL6.js";import"./Collapse-Ccqe5DI2.js";import"./_baseUniq-D_rYiE-m.js";import"./_Uint8Array-BBrlSxhv.js";import"./isArray-CSGooqXb.js";import"./_getTag-hHn1v1FD.js";import"./isEqual-gq7oDh_t.js";import"./merge-BhfWzDjT.js";import"./_initCloneObject-sDs-YUjP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CulMwIXg.js";import"./inputBaseClasses-Cc_4do0e.js";import"./calculateFriendlyFileSize-Ccucj4mI.js";import"./CheckCircleTwoTone-B5WN67QL.js";import"./InfoTwoTone-D8kHcvjo.js";import"./useMutation-BLmWgYC_.js";import"./dayjs.min-CLjfTRTa.js";import"./chunk-AYJ5UCUI-C3d9T5HW.js";import"./cloneDeep-D2b6hgrH.js";import"./Skeleton-D2BAnm5-.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DN9Lg_qn.js";import"./Backdrop-6Hns235g.js";import"./LinearProgress-Bc16wxb9.js";import"./index-DfKricgO.js";import"./index-CwyPkCPi.js";import"./index-CurFti2g.js";import"./const-BP60AzNb.js";import"./index-CPWRikjb.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
