import{U as L}from"./UpsetPlot-DbvFGjpn.js";import{f as u}from"./index-DVKDE631.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-RukkCBpC.js";import"./DefaultPropsProvider-BY_0FA5C.js";import"./createTheme-BgxtNNjv.js";import"./index-dl3BENNE.js";import"./iframe-YzSniT58.js";import"./Button-CaS34oa5.js";import"./createSimplePaletteValueFilter-DEkc7xSs.js";import"./useTimeout-DEPt3vzo.js";import"./ButtonBase-Ch46_Px2.js";import"./useForkRef-B_TXRjop.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CFPitjFl.js";import"./useFiles-DaAs4C7F.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Z3CRsZYt.js";import"./OrientationBanner-CC_XtpV_.js";import"./index-Ff6_4CvW.js";import"./spreadSx-CwcO6WA9.js";import"./react-rlO6wCGu.js";import"./FullWidthAlert-CecE_a1y.js";import"./Alert-DgISjGix.js";import"./useSlot-CHgzIXs0.js";import"./createSvgIcon-6arnPa6T.js";import"./Close-B2mQaGHe.js";import"./IconButton-e0_pjJVh.js";import"./Paper-irBPXwWY.js";import"./useTheme-gfAm54P6.js";import"./useTheme-9zFXKC6n.js";import"./Stack-CzsLlE0q.js";import"./useThemeProps-DY0zHm8Z.js";import"./getThemeProps-DFkkYRku.js";import"./extendSxProp-BdGy26Iu.js";import"./Box-CinyAz2a.js";import"./AlertTitle-DIoVMWOY.js";import"./Typography-7Hx3-lad.js";import"./index-DrWYxZ6u.js";import"./ClickAwayListener-BXFkIWGN.js";import"./getReactElementRef-OY13IImd.js";import"./index-2OM9t87W.js";import"./index-m5koAVBQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BetBJGpU.js";import"./Tooltip-CVuQHWBZ.js";import"./index-C8O0EzsL.js";import"./useControlled-CILy8dEh.js";import"./Popper-Bf2T5vzu.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CB35_T_J.js";import"./QueryClientProvider-kY5BcVat.js";import"./Link-X6fiBXQM.js";import"./Collapse-3grCuIF0.js";import"./_baseUniq-XoRpnQmG.js";import"./_Uint8Array-Bp2iOdm1.js";import"./isArray-CnbFH_tG.js";import"./_getTag-CXHbED9t.js";import"./isEqual-D0qOQWhk.js";import"./noop-DX6rZLP_.js";import"./merge-NKPcWwcN.js";import"./_initCloneObject-CmAZK0SY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DasqS6yT.js";import"./inputBaseClasses-tyR2w6fO.js";import"./calculateFriendlyFileSize-DLwkHUF4.js";import"./CheckCircleTwoTone-B3hZpcoo.js";import"./InfoTwoTone-C0-NVkTV.js";import"./useMutation-C3rNwsvu.js";import"./dayjs.min-Bf5GrB6_.js";import"./chunk-AYJ5UCUI-DrWBj7YT.js";import"./cloneDeep-CMYyigHX.js";import"./Skeleton-CNwnEJ1Y.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-EzSCYjgO.js";import"./Backdrop-DKo0mSTX.js";import"./LinearProgress-DdovUTR8.js";import"./index-DS9pW3xK.js";import"./index-B2wmt1sK.js";import"./index-8yVCy2X4.js";import"./const-BP60AzNb.js";import"./index-C9y5LXDN.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
