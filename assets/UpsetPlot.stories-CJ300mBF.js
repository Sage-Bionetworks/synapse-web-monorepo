import{U as L}from"./UpsetPlot-Ba5THGzr.js";import{f as u}from"./index-DKoILed1.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CNB3qiIA.js";import"./DefaultPropsProvider-Co2U1lMc.js";import"./createTheme-pm8LRWbk.js";import"./index-I47wiYIl.js";import"./iframe-BIRVXKtz.js";import"./Button-BI3Kszfw.js";import"./createSimplePaletteValueFilter-COdju6vm.js";import"./useTimeout-15wWwOfh.js";import"./ButtonBase-DFqyxasY.js";import"./useForkRef-F5lBvnNp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DlzCVn2P.js";import"./useFiles-BCul-Kto.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BhTPdqIw.js";import"./OrientationBanner-CpM7feV-.js";import"./index-Dde0MMRw.js";import"./spreadSx-CwcO6WA9.js";import"./react-57OIsDQs.js";import"./FullWidthAlert-BdZiiicp.js";import"./Alert-LFuot4nI.js";import"./useSlot-DuiEseUx.js";import"./createSvgIcon-DyrDxnX7.js";import"./Close-J--QK8Cg.js";import"./IconButton-RK8r0xoX.js";import"./Paper-C8Tlt3sf.js";import"./useTheme-Bjk-I74T.js";import"./useTheme-BOR1hqnI.js";import"./Stack-BN2JubgB.js";import"./useThemeProps-C7_WbH6p.js";import"./getThemeProps-C5epIPj9.js";import"./extendSxProp-B3jQw9QO.js";import"./Box-eSr-YAL7.js";import"./AlertTitle-CG27oB8x.js";import"./Typography-CZHcTN_R.js";import"./index-CXcybxh3.js";import"./ClickAwayListener-CXjYouvN.js";import"./getReactElementRef-yWR0RLTL.js";import"./index-nu_gismG.js";import"./index-DSWuzwrE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAInw1zM.js";import"./Tooltip-CxD1G1sD.js";import"./index-B93jVWeB.js";import"./useControlled-d8tFX0ZU.js";import"./Popper-CtTY4Mia.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-D4xRRBQP.js";import"./QueryClientProvider-dbCAoZAQ.js";import"./Link-DKOI-_XW.js";import"./Collapse-CHjz_AqJ.js";import"./_baseUniq-1B8GuVm1.js";import"./_Uint8Array-DS-5GFdR.js";import"./isArray-Ctrc6fnc.js";import"./_getTag-CleDswLE.js";import"./isEqual-CXvU_izF.js";import"./noop-DX6rZLP_.js";import"./merge-CQisCZUP.js";import"./_initCloneObject-CR2LMhD8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BNmhwNHo.js";import"./inputBaseClasses-ejL_XemP.js";import"./calculateFriendlyFileSize-tXFygyJT.js";import"./CheckCircleTwoTone-BrqBPp1W.js";import"./InfoTwoTone-CFBOiOe6.js";import"./useMutation-ChkO_Gzl.js";import"./dayjs.min-BvbWT1W4.js";import"./chunk-AYJ5UCUI-COIl7r1G.js";import"./cloneDeep-CC58hguY.js";import"./Skeleton-CgDjgcaK.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DqnwXpAp.js";import"./Backdrop-CDOPSSiH.js";import"./LinearProgress-CQ0t-nDm.js";import"./index-DyyocuHY.js";import"./index-UcFvTA5i.js";import"./index-DkcpujyS.js";import"./const-BP60AzNb.js";import"./index-B5zEXoh1.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
