import{U as L}from"./UpsetPlot-CJiGy0OY.js";import{f as u}from"./index-C32r_M3l.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-B_kNMqhv.js";import"./DefaultPropsProvider-Cc0Pr5n3.js";import"./createTheme-Bm_LWWer.js";import"./index-4rQWsg7w.js";import"./iframe-CcbFInBH.js";import"./Button-BjQB2kT9.js";import"./createSimplePaletteValueFilter-DE9cDTR6.js";import"./useTimeout-B7hTnc20.js";import"./ButtonBase-CL-S2AlO.js";import"./useForkRef-BwCYdf5Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B_bRZkNu.js";import"./useFiles-CDtyypvQ.js";import"./VerificationSubmission-16RBrwfH.js";import"./SynapseConstants-BoNlleXj.js";import"./OrientationBanner-DU08nB5M.js";import"./index-COgomViE.js";import"./spreadSx-CwcO6WA9.js";import"./react-DB3GvYML.js";import"./FullWidthAlert-Dg71CEZ0.js";import"./Alert-C2I_KYn3.js";import"./useSlot-DbLKugs_.js";import"./createSvgIcon-CvtTfXSY.js";import"./Close-jijW1zMn.js";import"./IconButton-DOeY9i8P.js";import"./Paper-BaJDg2gE.js";import"./useTheme-BKqn0RbP.js";import"./useTheme-BaHpITS4.js";import"./Stack-BjTTHAev.js";import"./extendSxProp-D4U4cllC.js";import"./getThemeProps-TCS4Lcys.js";import"./Box-B-z2Wn3T.js";import"./AlertTitle-C-_dyzvL.js";import"./Typography-zf9xiWio.js";import"./index-DL_3F7fc.js";import"./ClickAwayListener-BCkMOy2i.js";import"./getReactElementRef-BaFO5tC3.js";import"./index-BMgcitHH.js";import"./index-CzdvnrNd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CdIC-B9C.js";import"./Tooltip-BTFCh_bD.js";import"./index-Bg_aIjO4.js";import"./useControlled-DYO_k7w0.js";import"./Popper-DG6dlf9c.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-CAFEVghr.js";import"./QueryClientProvider-_RY6Yhiq.js";import"./Link-_nO4g-sD.js";import"./Collapse-C3OMEBr4.js";import"./_baseUniq-DWURcJHe.js";import"./_Uint8Array-B7K-43nq.js";import"./isArray-DdpjBUqz.js";import"./_getTag-DT_WTpYG.js";import"./isEqual-C_Nd6Dpx.js";import"./merge-DGQo8ukK.js";import"./_initCloneObject-CtYURX9T.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-I9obbtrd.js";import"./inputBaseClasses-ezG5ieVl.js";import"./calculateFriendlyFileSize-DsSMX6PZ.js";import"./CheckCircleTwoTone-CylHzlFL.js";import"./InfoTwoTone-DJFi4_MF.js";import"./useMutation-BbF47SYJ.js";import"./dayjs.min-DO5OZYrH.js";import"./chunk-AYJ5UCUI-CqqfLa0q.js";import"./cloneDeep-C8akjPpC.js";import"./Skeleton-DZpetao_.js";import"./SqlFunctions-BeciCvGs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DB6tXbRf.js";import"./Backdrop-eW2vuTJb.js";import"./LinearProgress-DBhu0uJI.js";import"./index-77ZJgzO4.js";import"./index-BNkvyul1.js";import"./index-CIejI04Y.js";import"./const-BP60AzNb.js";import"./index-B_yVJ7oQ.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
