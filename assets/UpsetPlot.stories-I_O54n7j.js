import{U as L}from"./UpsetPlot-BoOHMfME.js";import{f as u}from"./index-CJ9wa9gu.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-QigkfaQm.js";import"./DefaultPropsProvider-0BNkwUkh.js";import"./createTheme-Dr8QaAop.js";import"./index-CNOD_coP.js";import"./iframe-B7beX9fc.js";import"./Button-D3Wh7UHU.js";import"./createSimplePaletteValueFilter-Bi8T94Z2.js";import"./useTimeout-C3wGn6Ja.js";import"./ButtonBase-BYXCgz1G.js";import"./useForkRef-Dh8WXGOQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CgzCiAbs.js";import"./useFiles-BZkk-Nb_.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CFDmXB66.js";import"./OrientationBanner-Dzbaa3iB.js";import"./index-k5Hu8eSZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-D45Oek5q.js";import"./FullWidthAlert-C-KYctTm.js";import"./Alert-BdaEog2i.js";import"./useSlot-Cmo4uO1e.js";import"./createSvgIcon-DoUBNCW0.js";import"./Close-Cf8-Cnex.js";import"./IconButton-XG9vKa8a.js";import"./Paper-DGfiId5j.js";import"./useTheme-DTovFKgt.js";import"./useTheme-DZEQxr-3.js";import"./Stack-BaCFBVeB.js";import"./extendSxProp-Bc2u4vrI.js";import"./getThemeProps-BTbN-bVN.js";import"./Box-j1U5tBug.js";import"./AlertTitle-YXpZ_rlQ.js";import"./Typography-Cfe7s5kX.js";import"./index-Bed1RkRa.js";import"./ClickAwayListener-CYoYah1s.js";import"./getReactElementRef-FzNjKFPL.js";import"./index-ts2EtFAQ.js";import"./index-DmQ8Zlzm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-xMuuKoQQ.js";import"./Tooltip-BVpBX0Tl.js";import"./index-BDcq4vhx.js";import"./useControlled-Clk3odGP.js";import"./Popper-HBom_ZGM.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Kd0L9zxX.js";import"./QueryClientProvider-BU9Nf1bS.js";import"./Link-DNz2LEpH.js";import"./Collapse-C0PAI9k5.js";import"./_baseUniq-3tq4cnpB.js";import"./_Uint8Array-BBklPthB.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C1Vf3me3.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BPgWCeD8.js";import"./isEqual-CImg_hBM.js";import"./merge-DCXe3tr_.js";import"./_initCloneObject-D0Zyj4v_.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CCyFKjzK.js";import"./inputBaseClasses-D28FMvSG.js";import"./calculateFriendlyFileSize-c_1sgylr.js";import"./CheckCircleTwoTone-BDMbfUlA.js";import"./InfoTwoTone-5ZSjfGa_.js";import"./useMutation-B17cM71k.js";import"./dayjs.min-tNmmlBRn.js";import"./chunk-AYJ5UCUI-DrYvtS15.js";import"./cloneDeep-B0cW39CL.js";import"./Skeleton-DlQYAId0.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-689GkORW.js";import"./Backdrop-D8CPeR1m.js";import"./LinearProgress-CpruFA9W.js";import"./index-C8wDMUaE.js";import"./index-UAua7uQ8.js";import"./index-B_kp1xSp.js";import"./const-BP60AzNb.js";import"./index-BI826aDG.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
