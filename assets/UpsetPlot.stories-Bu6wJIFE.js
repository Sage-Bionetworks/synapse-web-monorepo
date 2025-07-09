import{U as L}from"./UpsetPlot-CoyXUbWc.js";import{f as u}from"./index-D4FMgXvg.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-FgRsmROf.js";import"./DefaultPropsProvider-ByL8xukQ.js";import"./createTheme-CWpXAeAD.js";import"./index-s7fC-_RI.js";import"./iframe-CI9s9X5I.js";import"./Button-BrtALbnR.js";import"./createSimplePaletteValueFilter-BJGZUQIS.js";import"./useTimeout-8Gvd2qkd.js";import"./ButtonBase-COsfQhAy.js";import"./useForkRef-CMEAjcE_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BszqDeOS.js";import"./useFiles-BZQATRqq.js";import"./VerificationSubmission-CeTJ0zsJ.js";import"./SynapseConstants-BXePmAe7.js";import"./OrientationBanner-vKeVXHUS.js";import"./index-Ld_bxIOo.js";import"./spreadSx-CwcO6WA9.js";import"./react-uoVEAcY2.js";import"./FullWidthAlert-CzCKVIIM.js";import"./Alert-Bq3rLHec.js";import"./useSlot-CjJcqFoO.js";import"./createSvgIcon-DTIfiSXG.js";import"./Close-B-St3DDX.js";import"./IconButton-DsHdCtaa.js";import"./Paper-Bu2H3lJ_.js";import"./useTheme-CsAqJUbS.js";import"./useTheme-CFasK5lR.js";import"./Stack-B86BQTNP.js";import"./extendSxProp-Df0IZ6wD.js";import"./getThemeProps-T6cdU2h5.js";import"./Box-q8YkQw0q.js";import"./AlertTitle-C3eWNWMf.js";import"./Typography-G_VE77n_.js";import"./index-BbFn9--C.js";import"./ClickAwayListener-D0o3byy8.js";import"./getReactElementRef-B7g9U7iP.js";import"./index-B6mt7uvV.js";import"./index-pcnQ6s1c.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-vnt5G_Et.js";import"./Tooltip-DRZRTEZt.js";import"./index-D0F2b0gm.js";import"./useControlled-B8rEpr-m.js";import"./Popper-Dzip5sHe.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Cb5gkxAY.js";import"./useQuery-DJEzKKWx.js";import"./QueryClientProvider-BlC6IBcQ.js";import"./Link-DPBDyF4z.js";import"./Collapse-DUuEEvZv.js";import"./_baseUniq-BBqCRzqe.js";import"./_Uint8Array-kVpQfpOY.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DxAo8Jr3.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Df0v3WdY.js";import"./isEqual-CwQKvmbv.js";import"./merge-DvaRFt7B.js";import"./_initCloneObject-COIMbWnn.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DUcI3kkz.js";import"./inputBaseClasses-CJ9CT0yM.js";import"./calculateFriendlyFileSize-BLY44VqQ.js";import"./CheckCircleTwoTone-CZve4sSJ.js";import"./InfoTwoTone-Dpk2bSSb.js";import"./useMutation-C8UorNOd.js";import"./dayjs.min-DkU97gqT.js";import"./chunk-AYJ5UCUI-B-g-Yn9t.js";import"./cloneDeep-BRfBHvdn.js";import"./Skeleton-CVVeToV1.js";import"./SqlFunctions-CBeb21zR.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BFtJdyL2.js";import"./Backdrop-CzcAwzKC.js";import"./LinearProgress-DjxB_ysg.js";import"./index-CLO5qOIu.js";import"./index-AEHPNFYF.js";import"./index-BNVbs5Zd.js";import"./const-BP60AzNb.js";import"./index-B7rPfWbb.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
