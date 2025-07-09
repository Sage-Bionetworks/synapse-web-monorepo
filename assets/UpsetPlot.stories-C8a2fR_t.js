import{U as L}from"./UpsetPlot-BsS0tPRJ.js";import{f as u}from"./index-BdwiYgCg.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-GQzVRR9p.js";import"./DefaultPropsProvider-CoGa70uG.js";import"./createTheme-DvbsM9Gd.js";import"./index-BWKRneOV.js";import"./iframe-BhricgUu.js";import"./Button-BHI08wYr.js";import"./createSimplePaletteValueFilter-gXd7lDZR.js";import"./useTimeout-DUOAKbFB.js";import"./ButtonBase-DjJZ3Tap.js";import"./useForkRef-CoWZJBIY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-BLDG-J.js";import"./useFiles-DjcKRMVW.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CJdz_Y6G.js";import"./OrientationBanner-COV2ej6u.js";import"./index-0vKntbcb.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ps5VvxXi.js";import"./FullWidthAlert-CmqIKfwS.js";import"./Alert-CYyYr4Pz.js";import"./useSlot-DDQCBXbd.js";import"./createSvgIcon-CONqxTxe.js";import"./Close-BwUlOmQW.js";import"./IconButton-cT3ZjqEA.js";import"./Paper-BiHcAXhh.js";import"./useTheme-Uk70tDF_.js";import"./useTheme-BoL-FF8e.js";import"./Stack-BlF66rx8.js";import"./extendSxProp-0xdvgH0b.js";import"./getThemeProps-DAZ7QmCk.js";import"./Box-DpzMXl_-.js";import"./AlertTitle-Ca_FYDp_.js";import"./Typography-CgwzPzS4.js";import"./index-CEl4alCE.js";import"./ClickAwayListener-BIK4ucG1.js";import"./getReactElementRef-DZq85MjR.js";import"./index-DpNKR-l2.js";import"./index-CfKD-UMg.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CZSvpLI6.js";import"./Tooltip-Bc_4Oics.js";import"./index-CcPBZI4z.js";import"./useControlled-C7swfzWb.js";import"./Popper-DjLUfmEs.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DF3fh9cf.js";import"./QueryClientProvider-CIZjXG1o.js";import"./Link-BQbF7JxS.js";import"./Collapse-D6LSBqLU.js";import"./_baseUniq-5n8Q7RzC.js";import"./_Uint8Array-CYD9rB-G.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWxeF1T8.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DkXw7hlR.js";import"./isEqual-Cp5UmJIB.js";import"./merge-BViOEajO.js";import"./_initCloneObject-8DjFhKUY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BgzPRQK5.js";import"./inputBaseClasses-4XkeR1Yh.js";import"./calculateFriendlyFileSize-BQzEVkul.js";import"./CheckCircleTwoTone-D8Cok0NF.js";import"./InfoTwoTone-CrbVitJJ.js";import"./useMutation-BWW6WqJ1.js";import"./dayjs.min-CPE1_-9E.js";import"./chunk-AYJ5UCUI-I-s4kGOL.js";import"./cloneDeep-p0a3Y1D4.js";import"./Skeleton-BgFwYveO.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Bh34HEwr.js";import"./Backdrop-BP4YPqvZ.js";import"./LinearProgress-Dxtu6sjy.js";import"./index-NJ-6by4L.js";import"./index-BTvQBiGN.js";import"./index-BxnuTCVR.js";import"./const-BP60AzNb.js";import"./index-qouj8Rlt.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
