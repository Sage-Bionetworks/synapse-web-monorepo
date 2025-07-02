import{U as L}from"./UpsetPlot-C90umt41.js";import{f as u}from"./index-bGhI4EoK.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Ce7sxC4E.js";import"./DefaultPropsProvider-CQoP04Am.js";import"./createTheme-DJXLoyL4.js";import"./index-D5M2_3G3.js";import"./iframe-VnvBbPjt.js";import"./Button-gndjKYaP.js";import"./createSimplePaletteValueFilter-CNKafHS4.js";import"./useTimeout-CFHsUIho.js";import"./ButtonBase-Cw6a0jrk.js";import"./useForkRef-CpB3Rdo1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CrJiODmY.js";import"./useFiles-D04VbCHX.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-BDg7pxzV.js";import"./OrientationBanner-CFdXDZTa.js";import"./index-aAdsPaRO.js";import"./spreadSx-CwcO6WA9.js";import"./react-DB59zw4q.js";import"./FullWidthAlert-Y7Kwlqi4.js";import"./Alert-h_ZqOy-R.js";import"./useSlot-DXyNz7-0.js";import"./createSvgIcon-BeTmQEqT.js";import"./Close-BCD4Xzg2.js";import"./IconButton-Ct-1cHkm.js";import"./Paper-CjbgwGhN.js";import"./useTheme-_EYAa35L.js";import"./useTheme-B9kzyBem.js";import"./Stack-DGaebw4f.js";import"./extendSxProp-C8ly7XkF.js";import"./getThemeProps-BTsMPG3o.js";import"./Box-CbwyQH91.js";import"./AlertTitle-jbzmrVKQ.js";import"./Typography-kp_OeXei.js";import"./index-DHredDN0.js";import"./ClickAwayListener-3k0whZQl.js";import"./getReactElementRef-CTKeNC3C.js";import"./index-ceiLpkOX.js";import"./index-BHNDTJUO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DDp3-mAe.js";import"./Tooltip-DiMuQltE.js";import"./index-BTEZWKfo.js";import"./useControlled-CV0fJiZo.js";import"./Popper-DfELmAHW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BnTdor-E.js";import"./QueryClientProvider-BNdEVBzI.js";import"./Link-D3TUHQlA.js";import"./Collapse-CLxgAYXZ.js";import"./_baseUniq-DPMJLRLH.js";import"./_Uint8Array-CTsVmAuw.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CsCizWG1.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CCJ1hUvQ.js";import"./isEqual-Boz_NY8h.js";import"./merge-DL3WTvwf.js";import"./_initCloneObject-Dx391l2S.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bj78bouL.js";import"./inputBaseClasses-C9rPflTt.js";import"./calculateFriendlyFileSize-DdiBStNf.js";import"./CheckCircleTwoTone-Cg6Zc16C.js";import"./InfoTwoTone-DXY7kIha.js";import"./useMutation-CZzltqcm.js";import"./dayjs.min-kQkHikLK.js";import"./chunk-AYJ5UCUI-D1D5QMg7.js";import"./cloneDeep-Lo2_optc.js";import"./Skeleton-C3mfVU1l.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Xe-bLJId.js";import"./Backdrop-B8K95RPU.js";import"./LinearProgress-YOCC7dYY.js";import"./index-B_vXG9lV.js";import"./index-DIZ4AjQc.js";import"./index-BzDvCyy_.js";import"./const-BP60AzNb.js";import"./index-DlpX3UaU.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
