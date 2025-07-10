import{U as L}from"./UpsetPlot-CWrGY95I.js";import{f as u}from"./index-CW4yrHS-.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-tjIMSMA0.js";import"./DefaultPropsProvider-CeF2hwve.js";import"./createTheme-CInhu1jk.js";import"./index-B9OyQX1A.js";import"./iframe-BP07wQTd.js";import"./Button-CHa3icr7.js";import"./createSimplePaletteValueFilter-DDD03rs-.js";import"./useTimeout-o50hQisp.js";import"./ButtonBase-C_jXD34S.js";import"./useForkRef-pLKXAdEO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-bun6EuGk.js";import"./useFiles-DB0e0hPr.js";import"./VerificationSubmission-CeTJ0zsJ.js";import"./SynapseConstants-CkDDb4nX.js";import"./OrientationBanner-B9qwIkMf.js";import"./index-BqFegMld.js";import"./spreadSx-CwcO6WA9.js";import"./react-sEPuFSBp.js";import"./FullWidthAlert-OAdAocG4.js";import"./Alert-CULkja03.js";import"./useSlot-BHxKxjwn.js";import"./createSvgIcon-qvaYmqZl.js";import"./Close-tKgndRYU.js";import"./IconButton-CSnfzuaL.js";import"./Paper-M2B7o7bl.js";import"./useTheme-B2RdUQoD.js";import"./useTheme-CTj6XPaI.js";import"./Stack-h7MpaAG4.js";import"./extendSxProp-B-dbdkUC.js";import"./getThemeProps-Bf9O57Lq.js";import"./Box-Rvhx3he2.js";import"./AlertTitle-CM4Zufgn.js";import"./Typography-8PbpLowS.js";import"./index-PUfiHWKW.js";import"./ClickAwayListener-CKCTU7Hr.js";import"./getReactElementRef-CBjh8eNi.js";import"./index-HQ1M5axI.js";import"./index-BfGC-F9L.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B6mZ4tx-.js";import"./Tooltip-DML62oGu.js";import"./index-CIP6CSIB.js";import"./useControlled-CbbNDYpt.js";import"./Popper-B4buaPr2.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Cb5gkxAY.js";import"./useQuery-CTnkseG7.js";import"./QueryClientProvider-ERQKxfhR.js";import"./Link-CEagi7As.js";import"./Collapse-DUIYxFRt.js";import"./_baseUniq-To6IgKKu.js";import"./_Uint8Array-CFpIIXDl.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CpneB495.js";import"./isArray-Dxzbedgu.js";import"./_getTag-K_H0Alg4.js";import"./isEqual-BtbKiwVM.js";import"./merge-CqU8LKYn.js";import"./_initCloneObject-r3Ku30rA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-R-BmApSw.js";import"./inputBaseClasses-B2yUi8zg.js";import"./calculateFriendlyFileSize-0sPzrG8j.js";import"./CheckCircleTwoTone-GSVLRlFB.js";import"./InfoTwoTone-DWDlvgmG.js";import"./useMutation-7S_5iV1F.js";import"./dayjs.min-CwPglUFt.js";import"./chunk-AYJ5UCUI-dLqhGQtZ.js";import"./cloneDeep-YzygmnfS.js";import"./Skeleton-BFGVvZk1.js";import"./SqlFunctions-CBeb21zR.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Czm1aS1o.js";import"./Backdrop-CqogE-J6.js";import"./LinearProgress-D8_kFsr-.js";import"./index-_3K7Ep1B.js";import"./index-BXQH5YlQ.js";import"./index-DprUMiS9.js";import"./const-BP60AzNb.js";import"./index-BFb1eoPt.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
