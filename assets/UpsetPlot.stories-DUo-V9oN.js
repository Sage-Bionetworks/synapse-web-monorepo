import{U as L}from"./UpsetPlot-DbSBOcTH.js";import{f as u}from"./index-CuvzRtJ_.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CaQsTMYm.js";import"./DefaultPropsProvider-B7rH05j0.js";import"./createTheme-DolW38o8.js";import"./index-DY3OEpIc.js";import"./iframe-5G1creHY.js";import"./Button-D4hsDkIF.js";import"./createSimplePaletteValueFilter-DH_f5Q0y.js";import"./useTimeout-mVgk-OEX.js";import"./ButtonBase-DiwyAVK4.js";import"./useForkRef-BuTdfqyw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-IoPbused.js";import"./useFiles-CvkLCgvb.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-C9l08Y0T.js";import"./OrientationBanner-CkJeDWbe.js";import"./index-CFGa6oS-.js";import"./spreadSx-CwcO6WA9.js";import"./react-du1M-3g5.js";import"./FullWidthAlert-DtqWDIT4.js";import"./Alert-CfDw6kgn.js";import"./useSlot-BwPxmdEK.js";import"./createSvgIcon-BkxlEEde.js";import"./Close-DQ0imrdY.js";import"./IconButton-Bh5-L8Vh.js";import"./Paper-BMZBcLke.js";import"./useTheme-BX6Sw0fI.js";import"./useTheme-Bk-9zqNg.js";import"./Stack-CQq6BAXa.js";import"./extendSxProp-DAVZLGTZ.js";import"./getThemeProps-CSsj0YYT.js";import"./Box-B62GPBkO.js";import"./AlertTitle-C08CnuZ6.js";import"./Typography-sABE_9NT.js";import"./index-C-XptRMi.js";import"./ClickAwayListener-D_EltHT6.js";import"./getReactElementRef-DMTqY5TQ.js";import"./index-um_XUqMv.js";import"./index-4aVnsOHZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DPoUdyMf.js";import"./Tooltip-CfspOjMw.js";import"./index-y_SU34WU.js";import"./useControlled-DcLwo5kp.js";import"./Popper-BxS1SMUl.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BzjRZEbq.js";import"./QueryClientProvider-ZdnXoWE-.js";import"./Link-D0BnBx3E.js";import"./Collapse-DDmwW3NY.js";import"./_baseUniq-bA_A-iJ6.js";import"./_Uint8Array-D3pmos-z.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CErJF2LU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-C7eoyW69.js";import"./isEqual-Bb9Get5N.js";import"./merge-CUDYmyEs.js";import"./_initCloneObject-BQLQ2z7h.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DcC4Ey4y.js";import"./inputBaseClasses-eUwvjpv9.js";import"./calculateFriendlyFileSize-BjTXUzYU.js";import"./CheckCircleTwoTone-DBzjgsv2.js";import"./InfoTwoTone-rdOob-oL.js";import"./useMutation-D3-ukzm0.js";import"./dayjs.min-BVuutMqG.js";import"./chunk-AYJ5UCUI-B9xju9eP.js";import"./cloneDeep-C249KZrC.js";import"./Skeleton-B2JH7j6y.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DVViUl6H.js";import"./Backdrop-B-Xuv_Jd.js";import"./LinearProgress-CJ2rTI04.js";import"./index-B41uIaIS.js";import"./index-B2-Btgmd.js";import"./index-CFVFbTyt.js";import"./const-BP60AzNb.js";import"./index-BjS5r2J0.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
