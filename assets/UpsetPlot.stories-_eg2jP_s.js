import{U as L}from"./UpsetPlot-CmIgt9lX.js";import{f as u}from"./index-CJ8FvSmA.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CdQJ4yjT.js";import"./DefaultPropsProvider-DUvQZAvc.js";import"./createTheme-DBcr5Ze-.js";import"./index-BFt-kCns.js";import"./iframe-BkSR-qmL.js";import"./Button-DOSR-9oh.js";import"./createSimplePaletteValueFilter-DRHG1jQt.js";import"./useTimeout-BBxsofLl.js";import"./ButtonBase-O6v8WT9c.js";import"./useForkRef-Cqml73TA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIJdjpxt.js";import"./useFiles-S06PjAvD.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-dQCFsE3i.js";import"./OrientationBanner-j-cZ3R3X.js";import"./index-DvboFt9i.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cwd-ZDVN.js";import"./FullWidthAlert-D9PrSEnV.js";import"./Alert-DcMM7aLS.js";import"./useSlot-E9Y6G3Qh.js";import"./createSvgIcon-CttGmGJG.js";import"./Close-B1dynM7p.js";import"./IconButton-CcZKCjbJ.js";import"./Paper-BqG7mEz-.js";import"./useTheme-BwGwlFiU.js";import"./useTheme-juTxtaXW.js";import"./Stack-C1vT0niC.js";import"./extendSxProp-B6hqwN5r.js";import"./getThemeProps-Ds55W40A.js";import"./Box-gHZjr62r.js";import"./AlertTitle-CbAF6C0-.js";import"./Typography-C-daSuH-.js";import"./index-DzgWRzl2.js";import"./ClickAwayListener-DhxOx_gt.js";import"./getReactElementRef-DSub8oZl.js";import"./index-C-kMeRMp.js";import"./index-B9nWus-h.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGC7Jk7p.js";import"./Tooltip-CYPwHyOs.js";import"./index-CsR2r3uk.js";import"./useControlled-pote1Ppd.js";import"./Popper-DZKABHu6.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-C_kBIk68.js";import"./QueryClientProvider-mCVT3njF.js";import"./Link-DksPbLJd.js";import"./Collapse-4iqd6Oxl.js";import"./_baseUniq-gvahgWTI.js";import"./_Uint8Array-CLL54xUM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dj-EqCVy.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CT6a0cTP.js";import"./isEqual-DgYAS2ec.js";import"./merge-D3wjv0T3.js";import"./_initCloneObject-BPJXS-H9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DdJQRxaR.js";import"./inputBaseClasses-BThjxOQs.js";import"./calculateFriendlyFileSize-CuVDgWLK.js";import"./CheckCircleTwoTone-DETDhuzv.js";import"./InfoTwoTone-DZCtVAq2.js";import"./useMutation-BFrqJzF1.js";import"./dayjs.min-MQ8AEYdS.js";import"./chunk-AYJ5UCUI-CJ-PZnvH.js";import"./cloneDeep-BA9iNEBH.js";import"./Skeleton-DGfshh32.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DkcgqAK4.js";import"./Backdrop-DGgncvQg.js";import"./LinearProgress-Bus96gUE.js";import"./index-DqZPgmqT.js";import"./index-DwdlOUS5.js";import"./index-C-H2PEas.js";import"./const-BP60AzNb.js";import"./index-BaZcnGoT.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
