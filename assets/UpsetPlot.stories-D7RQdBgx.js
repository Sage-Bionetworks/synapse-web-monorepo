import{U as L}from"./UpsetPlot-I1wBxq6j.js";import{f as u}from"./index-Cx55DSBl.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D3BrzwYA.js";import"./DefaultPropsProvider-DIhp9cRI.js";import"./createTheme-k23OqXGa.js";import"./index-CzGzXEn8.js";import"./iframe-uFVp_yWY.js";import"./Button-Bzn_cVpu.js";import"./createSimplePaletteValueFilter-ByhsrVNu.js";import"./useTimeout-Bco06NxJ.js";import"./ButtonBase--LE7YHRM.js";import"./useForkRef-BSQlPluY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C1rPjsSq.js";import"./useFiles-KQZnDEqY.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-E9b7EaUq.js";import"./OrientationBanner-CmbPS0a4.js";import"./index-RZq23un7.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbvsEyPG.js";import"./FullWidthAlert-D1yw4iHk.js";import"./Alert-CNLtvy8P.js";import"./useSlot-C-gtFsMB.js";import"./createSvgIcon-BMaNoRgk.js";import"./Close-D_tYQfNe.js";import"./IconButton-C9kv8evX.js";import"./Paper-BVxUU9_K.js";import"./useTheme-m-jJYqTk.js";import"./useTheme-BdRzPGfO.js";import"./Stack-BdenFWgB.js";import"./extendSxProp-BQjDsJY_.js";import"./getThemeProps-BlF0lh8z.js";import"./Box-B-VzN5Jx.js";import"./AlertTitle-B9QtK9uS.js";import"./Typography-C2XHzVQE.js";import"./index-CAod7njC.js";import"./ClickAwayListener-Du3ELzpP.js";import"./getReactElementRef-Dgr12Jgk.js";import"./index-B21--ivY.js";import"./index-D6SZASGo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-gVpppe5W.js";import"./Tooltip-BQoBuipX.js";import"./index-sNVsSmo5.js";import"./useControlled-3AOcwQZd.js";import"./Popper-DFhQZQac.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DF84rRyD.js";import"./QueryClientProvider-csjxr0Oq.js";import"./Link-VKSHRpIP.js";import"./Collapse-B3cTWS02.js";import"./_baseUniq-Fd2G2IPR.js";import"./_Uint8Array-LlKGp4K5.js";import"./isArray-ChG02qwo.js";import"./_getTag-cnLzI9NN.js";import"./isEqual-yp226Bbx.js";import"./merge-Y_2GYteb.js";import"./_initCloneObject-BpCV3dag.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaG8l8BS.js";import"./inputBaseClasses-DKgm0JXr.js";import"./calculateFriendlyFileSize-HPCnRThz.js";import"./CheckCircleTwoTone-RDTFbucz.js";import"./InfoTwoTone-BPpuRQC9.js";import"./useMutation-BXU6_2Hh.js";import"./dayjs.min-Cml6m9_C.js";import"./chunk-AYJ5UCUI-CA4qBvwQ.js";import"./cloneDeep-mhbB0HAm.js";import"./Skeleton-CJd0uABn.js";import"./SqlFunctions-D9jcfCB0.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-ox3pgfQ8.js";import"./Backdrop-BD4yA7GX.js";import"./LinearProgress-BwBxaIV1.js";import"./index-BSNyTFIg.js";import"./index-DrE7_7vr.js";import"./index-WdfpV6f-.js";import"./const-BP60AzNb.js";import"./index-D56pGEz8.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
