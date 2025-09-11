import{U as L}from"./UpsetPlot-gt8U146P.js";import{f as u}from"./index-C8cxh_oT.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-B54p-_ZA.js";import"./DefaultPropsProvider-DyEeNxXZ.js";import"./createTheme-DWFPzI--.js";import"./index-DUdYTmGT.js";import"./iframe-BdB6XJHD.js";import"./Button-BR3jAR33.js";import"./createSimplePaletteValueFilter-uLvstcBV.js";import"./useTimeout-V3giDCFR.js";import"./ButtonBase-DcQPpRud.js";import"./useForkRef-Ck-u4s--.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D4Nuac2l.js";import"./useFiles-dk1thily.js";import"./VerificationSubmission-16RBrwfH.js";import"./SynapseConstants-KeGsajGR.js";import"./OrientationBanner-D437S5nk.js";import"./index-DEdxnbu2.js";import"./spreadSx-CwcO6WA9.js";import"./react-GmtzOC26.js";import"./FullWidthAlert-B3oyLgJH.js";import"./Alert-moQJ5G_4.js";import"./useSlot-BkaT3gs9.js";import"./createSvgIcon-CaC1UKxt.js";import"./Close-CfWvUmDT.js";import"./IconButton-BBKovbiE.js";import"./Paper-CU61ixE5.js";import"./useTheme-B83Lx1Yt.js";import"./useTheme-C1Ce151G.js";import"./Stack-Bo4LyGjf.js";import"./extendSxProp-S57QbXtS.js";import"./getThemeProps-7dtkUy7e.js";import"./Box-nePxhetE.js";import"./AlertTitle-DJtNofrQ.js";import"./Typography-C2z_Zh6j.js";import"./index-D1afb3t5.js";import"./ClickAwayListener-DEf6_Xwi.js";import"./getReactElementRef-Cz-ckvWn.js";import"./index-DwSYObV4.js";import"./index-yS8BlOB_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B9hk4yxs.js";import"./Tooltip-bSFGcH92.js";import"./index-B4oHC8c-.js";import"./useControlled-DMxpFoel.js";import"./Popper-D12HzteZ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-SO-6-VdB.js";import"./QueryClientProvider-3LpSImf3.js";import"./Link-DFKa6a8_.js";import"./Collapse-BMSdPa9t.js";import"./_baseUniq-sr8vBqLy.js";import"./_Uint8Array-Cw0eJEb3.js";import"./isArray-HsSskGIt.js";import"./_getTag-BuCIjrxV.js";import"./isEqual-1CR8dmm0.js";import"./merge-01PMaHOz.js";import"./_initCloneObject-ChW2f-gZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BrDAfqPP.js";import"./inputBaseClasses-BvzR5aac.js";import"./calculateFriendlyFileSize-CWTRee5o.js";import"./CheckCircleTwoTone-B0aYIoVs.js";import"./InfoTwoTone-BIM_DGH9.js";import"./useMutation-bbCrE7-i.js";import"./dayjs.min-BC_L2v2b.js";import"./chunk-AYJ5UCUI-B7YF2jCw.js";import"./cloneDeep-DtGhnbbh.js";import"./Skeleton-BvoupDet.js";import"./SqlFunctions-BeciCvGs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cez7mBAk.js";import"./Backdrop-Bb86mCZN.js";import"./LinearProgress-CGNHKOh3.js";import"./index-lCZJgdow.js";import"./index-RISa6dZu.js";import"./index-Bctut1Ie.js";import"./const-BP60AzNb.js";import"./index-DnHkjRWD.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
