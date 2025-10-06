import{U as L}from"./UpsetPlot-BoqrPxvr.js";import{f as u}from"./index-eSDbffZz.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-427Te2ZJ.js";import"./DefaultPropsProvider-BNOxOf-A.js";import"./createTheme-DNQ2GBGi.js";import"./index-Md1bMW-z.js";import"./iframe-uIIVzD3j.js";import"./Button-C-zk0YkP.js";import"./createSimplePaletteValueFilter-Db9IlTh7.js";import"./useTimeout-DQ_-VO3O.js";import"./ButtonBase-IDXW5Yf8.js";import"./useForkRef-CoDOX8AE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cv2umIHD.js";import"./useFiles-EKpzv8MZ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-1HUBjtKm.js";import"./OrientationBanner-aZewHq-Z.js";import"./index-CGSHOwNi.js";import"./spreadSx-CwcO6WA9.js";import"./react-uSK3dJOn.js";import"./FullWidthAlert-Br1koMJ-.js";import"./Alert-DkgMFLOm.js";import"./useSlot-BTY_Z-d6.js";import"./createSvgIcon-92C3hb6t.js";import"./Close-DwqeNffU.js";import"./IconButton-sjmF_FEp.js";import"./Paper-C677K5L-.js";import"./useTheme-CslAt-wv.js";import"./useTheme-Cs2NNiMd.js";import"./Stack-B53g7fb1.js";import"./useThemeProps-C_b8E7rx.js";import"./getThemeProps-CHgiU3_j.js";import"./extendSxProp-D1VhlKw4.js";import"./Box-DohH8KGO.js";import"./AlertTitle-BlMhOmTu.js";import"./Typography-C96gU1wS.js";import"./index-DmeWQ-dO.js";import"./ClickAwayListener-B9bXJXQC.js";import"./getReactElementRef-HCWorscC.js";import"./index-CUeFsCSP.js";import"./index-BiIHeQLd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BzcQ-t9T.js";import"./Tooltip-2BuyJCJR.js";import"./index-DRTQrCcL.js";import"./useControlled-CxsZIN1F.js";import"./Popper-XHxJx-dX.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DVTeBwEW.js";import"./QueryClientProvider-BMNXHCEe.js";import"./Link-CqWD6rvZ.js";import"./Collapse-stLmF6Jw.js";import"./_baseUniq-DCP_CDE1.js";import"./_Uint8Array-Cby2pCoj.js";import"./isArray-B5klMKWj.js";import"./_getTag-DsElD8uv.js";import"./isEqual-BiFEM_GF.js";import"./noop-DX6rZLP_.js";import"./merge-Ds5Z6Gqt.js";import"./_initCloneObject--FlbFimB.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CSvEcrCc.js";import"./inputBaseClasses-CX7_9eBB.js";import"./calculateFriendlyFileSize-B2Y-Pd9F.js";import"./CheckCircleTwoTone-Cl1bOByO.js";import"./InfoTwoTone-BbyWd5yG.js";import"./useMutation-Di0sy3w_.js";import"./dayjs.min-BorLJNP_.js";import"./chunk-AYJ5UCUI-B4Oc2lbg.js";import"./cloneDeep-CGc5yc60.js";import"./Skeleton-BoefnFuB.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DElghcmr.js";import"./Backdrop-Cd-BMwRv.js";import"./LinearProgress-CzdujYO2.js";import"./index-ChtWlERz.js";import"./index-CqEnENpA.js";import"./index-D1fQOJwr.js";import"./const-BP60AzNb.js";import"./index-7GrO05UA.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
