import{U as L}from"./UpsetPlot-BRXlRmxy.js";import{f as u}from"./index-D-R_b6rp.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C9bmBZgC.js";import"./DefaultPropsProvider-Dvr-tTK6.js";import"./createTheme-BK6UElHJ.js";import"./index-BuJDQnUk.js";import"./iframe-Cr6ezPsl.js";import"./Button-DDnrRDpv.js";import"./createSimplePaletteValueFilter-Cpx97Rr9.js";import"./useTimeout-DM9L0rxB.js";import"./ButtonBase-D82xi4uS.js";import"./useForkRef-CF7zyPlu.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcfM6f79.js";import"./useFiles-Db54t-tY.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./SynapseConstants-DaRxMVmF.js";import"./OrientationBanner-B1qNwquP.js";import"./index-DGL3HO56.js";import"./spreadSx-CwcO6WA9.js";import"./react-AlFvuvNv.js";import"./FullWidthAlert-mRZoSYPq.js";import"./Alert-Be0A-LgM.js";import"./useSlot-DalP7ee8.js";import"./createSvgIcon-D2yClPAP.js";import"./Close-UkcISrWM.js";import"./IconButton-Ck0nC-my.js";import"./Paper-BPJSyr-F.js";import"./useTheme-B7yNuM8W.js";import"./useTheme-C-Nrlkd0.js";import"./Stack-B7Qpj5Ki.js";import"./extendSxProp-DLwRLLo9.js";import"./getThemeProps-sKYYbfmA.js";import"./Box-D7QdnBU4.js";import"./AlertTitle-C-dr4K0A.js";import"./Typography-BHnBpTHA.js";import"./index-BKX1-w9C.js";import"./ClickAwayListener-CmfTuM2N.js";import"./getReactElementRef-BRpsy5_3.js";import"./index-DLfqkzAN.js";import"./index-YcRuu0bH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D254RFQI.js";import"./Tooltip-2iC1TBx7.js";import"./index-Ci5oPOxK.js";import"./useControlled-DgIckgW6.js";import"./Popper-CucXU77N.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-DYvqTKcd.js";import"./QueryClientProvider-D35J8jSd.js";import"./Link-B4y9rQD-.js";import"./Collapse-Bd3x3sfg.js";import"./_baseUniq-BL-JTcV7.js";import"./_Uint8Array-okef9fpr.js";import"./isArray-CQL2Omy9.js";import"./_getTag-oDqqQs_x.js";import"./isEqual-D3NjyQZR.js";import"./merge-d6zHDzVE.js";import"./_initCloneObject-zeb2rLvj.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B3b9dqgH.js";import"./inputBaseClasses-BKILOaiU.js";import"./calculateFriendlyFileSize-D-5lh9-e.js";import"./CheckCircleTwoTone-BWGId32i.js";import"./InfoTwoTone-BSHHymaY.js";import"./useMutation-d2WF_4zr.js";import"./dayjs.min-D3lvmW2A.js";import"./chunk-AYJ5UCUI-qjDTf1To.js";import"./cloneDeep-Ct9R0eu9.js";import"./Skeleton-B7QVWXYf.js";import"./SqlFunctions-DQ27hT8m.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Di2hObSj.js";import"./Backdrop-a8GybRm_.js";import"./LinearProgress-CkYoi2yU.js";import"./index-DQlramzP.js";import"./index-DjsQIIAR.js";import"./index-EHz5URq4.js";import"./const-BP60AzNb.js";import"./index-CAiv-rR1.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
