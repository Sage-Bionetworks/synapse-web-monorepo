import{U as L}from"./UpsetPlot-Dq1WYItv.js";import{f as u}from"./index-DHX-oaD-.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C7Q5B7Le.js";import"./DefaultPropsProvider-Dhj4bf-l.js";import"./createTheme-eQRLfG40.js";import"./index-D4Q3ONxQ.js";import"./iframe-B4ilnuJG.js";import"./Button-Bj_IwDEU.js";import"./createSimplePaletteValueFilter-DtspGyG6.js";import"./useTimeout-B1_K0-pY.js";import"./ButtonBase-Bv_bFBFO.js";import"./useForkRef-CpvpfvrQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B74R9xnJ.js";import"./useFiles-DKRZIanE.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BBoZDD4P.js";import"./OrientationBanner-BLAhke4h.js";import"./index-DKL9L_BY.js";import"./spreadSx-CwcO6WA9.js";import"./react-CAq8nAJq.js";import"./FullWidthAlert-DuP5wrYb.js";import"./Alert-C67NzIWU.js";import"./useSlot-CBd769ny.js";import"./createSvgIcon-Br-hcPq3.js";import"./Close-G4NEwhux.js";import"./IconButton-C6noyifK.js";import"./Paper-Dy9tjFrv.js";import"./useTheme-CHGhrpTH.js";import"./useTheme-C37fkXB4.js";import"./Stack-DM2PFLKL.js";import"./extendSxProp-Duqnu7M_.js";import"./getThemeProps-DZf8MFcp.js";import"./Box--ACRCC9D.js";import"./AlertTitle-CMR2Kvl3.js";import"./Typography-DwouxU_H.js";import"./index-ByZNrIFb.js";import"./ClickAwayListener-CFxDF2kG.js";import"./getReactElementRef-BmnoCqlY.js";import"./index-CLiK0qGk.js";import"./index-BNFLIj9_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-NTzniY5l.js";import"./Tooltip-Vck-mLGE.js";import"./index-Beg8-miO.js";import"./useControlled-Ba29HQQf.js";import"./Popper-Bk_Ars4X.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BFuwe7cX.js";import"./QueryClientProvider-DaEi_Twt.js";import"./Link-Dz2MRzFS.js";import"./Collapse-shGKBp_d.js";import"./_baseUniq-Dkz_1hma.js";import"./_Uint8Array-B2nHI9Ad.js";import"./isArray-CFVxwRPF.js";import"./_getTag-Cc9LAsVk.js";import"./isEqual-ZcdUzgZT.js";import"./merge-Bv9XZfxW.js";import"./_initCloneObject-CVyr40Wx.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DnAikE-j.js";import"./inputBaseClasses-BMZfyCm0.js";import"./calculateFriendlyFileSize-BgbVnmAq.js";import"./CheckCircleTwoTone-Bv4El-EC.js";import"./InfoTwoTone-B4GN6vaz.js";import"./useMutation-DWajAj7L.js";import"./dayjs.min-DuethHKS.js";import"./chunk-AYJ5UCUI-CD69_1OJ.js";import"./cloneDeep-DhOLnah7.js";import"./Skeleton-CgzjTWeY.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B1NSilpo.js";import"./Backdrop-C9lnS645.js";import"./LinearProgress-A_I97zE9.js";import"./index-D73Z9fbH.js";import"./index-DNEFpdiT.js";import"./index-DL9PG3Uc.js";import"./const-BP60AzNb.js";import"./index-D-2WvAry.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
