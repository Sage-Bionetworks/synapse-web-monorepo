import{U as L}from"./UpsetPlot-hDkfdE9K.js";import{f as u}from"./index-DD4WWu6p.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CCKtoNzw.js";import"./DefaultPropsProvider-BngAxNfg.js";import"./createTheme-C3ZlBHOR.js";import"./index-DG11J9On.js";import"./iframe-CFx4SmlQ.js";import"./Button-C53OkhyL.js";import"./createSimplePaletteValueFilter-DLcVTaCv.js";import"./useTimeout-BVRtd2bj.js";import"./ButtonBase-Byp5VrHb.js";import"./useForkRef-DqKQMU6v.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwCph7sa.js";import"./useFiles-DTIYA5rx.js";import"./VerificationSubmission-16RBrwfH.js";import"./SynapseConstants-Badmnctn.js";import"./OrientationBanner-W-oxA1oW.js";import"./index-SKRyRm18.js";import"./spreadSx-CwcO6WA9.js";import"./react-DjUZwrS0.js";import"./FullWidthAlert-dAH4WwYR.js";import"./Alert-Bwo9jVk2.js";import"./useSlot-DTL4s5Fo.js";import"./createSvgIcon-CaT9xKql.js";import"./Close-XhtxoZ4V.js";import"./IconButton-BGgUVhRP.js";import"./Paper-CQ-ti9pd.js";import"./useTheme-CGOBdzwx.js";import"./useTheme-Dlh4q2q2.js";import"./Stack-DVpO78Of.js";import"./extendSxProp-De9UySGh.js";import"./getThemeProps-BqQ-LewE.js";import"./Box-DSEnYR08.js";import"./AlertTitle-TTBh0xNw.js";import"./Typography-Bg3Brpmd.js";import"./index-q0p95m-D.js";import"./ClickAwayListener-B4yhA0Px.js";import"./getReactElementRef-DrXrtI8G.js";import"./index-CJuEcaaD.js";import"./index-DBl0twju.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DP_AFsYT.js";import"./Tooltip-CdI8BHtE.js";import"./index-CKkvvCY2.js";import"./useControlled-ByefJ87W.js";import"./Popper-BFgdKwjW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-BXO0nReV.js";import"./QueryClientProvider-BCm9WdUt.js";import"./Link-vyBZc_X6.js";import"./Collapse-0lsId-M4.js";import"./_baseUniq-nvsczMT_.js";import"./_Uint8Array-DQTcvvta.js";import"./isArray-ol0mTvVW.js";import"./_getTag-Cty8vqd7.js";import"./isEqual-DXatWGPi.js";import"./merge-CeYIG25n.js";import"./_initCloneObject-BBpqQKrX.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-7kRVzn_c.js";import"./inputBaseClasses-sMEcRXLK.js";import"./calculateFriendlyFileSize-CYRBhA6n.js";import"./CheckCircleTwoTone-C1_4w8s1.js";import"./InfoTwoTone-B9OihmVW.js";import"./useMutation-CmMiPDVM.js";import"./dayjs.min-CLD5-AUH.js";import"./chunk-AYJ5UCUI-56tzNCw-.js";import"./cloneDeep-SdJSSkEq.js";import"./Skeleton-BejAbq-W.js";import"./SqlFunctions-BeciCvGs.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cs7JXrRE.js";import"./Backdrop-CYHptUNh.js";import"./LinearProgress-C-0lOfL8.js";import"./index-ClDCaHgl.js";import"./index-7hjITPcP.js";import"./index-BGyjrBSk.js";import"./const-BP60AzNb.js";import"./index-ClBg1m-L.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
