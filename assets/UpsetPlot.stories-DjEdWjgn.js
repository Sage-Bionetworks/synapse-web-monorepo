import{U as L}from"./UpsetPlot-DQtF4uJn.js";import{f as u}from"./index-vt_KrGMG.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-C4QZS8ED.js";import"./DefaultPropsProvider-DpDTlY9g.js";import"./createTheme-II-gce0K.js";import"./index-dRMNsM6r.js";import"./iframe-C1GxMnSF.js";import"./Button-Cfsde_36.js";import"./createSimplePaletteValueFilter-D_QP2TIw.js";import"./useTimeout-vUNmq_Ja.js";import"./ButtonBase-4leAHaA8.js";import"./useForkRef-A6I0jKwp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ch5OpiUe.js";import"./useFiles-DMCaKYx_.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-Bwr8pSXM.js";import"./OrientationBanner-Du-Bw8Mf.js";import"./index-Ctrt0GTW.js";import"./spreadSx-CwcO6WA9.js";import"./react-BVjGH0qj.js";import"./FullWidthAlert-D44pg8w2.js";import"./Alert-COQ3nnEa.js";import"./useSlot-DNSvN4UU.js";import"./createSvgIcon-CYX0Tew8.js";import"./Close-DWgxR1B3.js";import"./IconButton-DIOOSn47.js";import"./Paper-DuTz12zY.js";import"./useTheme-CvXzZeki.js";import"./useTheme-r15zWzow.js";import"./Stack-C8Za8DAU.js";import"./extendSxProp-Djd_jGwW.js";import"./getThemeProps-BPzt8l9W.js";import"./Box-D5Fxj2nM.js";import"./AlertTitle-DvEksnrC.js";import"./Typography-CqEvxqsG.js";import"./index-DcmlVU4e.js";import"./ClickAwayListener-BDjF2LUg.js";import"./getReactElementRef-DKRUGJMP.js";import"./index-BhOHl5zu.js";import"./index-D1wMG73m.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DbqcAO5i.js";import"./Tooltip-BjtJtB3s.js";import"./index-CecS_nQt.js";import"./useControlled-DAPaJ43j.js";import"./Popper-CiMmGBvk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-BEloXky3.js";import"./QueryClientProvider-Ze6iADVs.js";import"./Link-D_PCEKs0.js";import"./Collapse-DgpS2Hov.js";import"./_baseUniq-D2tVVG5U.js";import"./_Uint8Array-CwKcyaa6.js";import"./isArray-Ba9Vt-uY.js";import"./_getTag-1Ee3ZuLF.js";import"./isEqual-DffE9IoK.js";import"./merge-CVA6Ete2.js";import"./_initCloneObject-B5PifE7N.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BI1VlvIU.js";import"./inputBaseClasses-332p_dKL.js";import"./calculateFriendlyFileSize-COMcZm57.js";import"./CheckCircleTwoTone-B-hwok2b.js";import"./InfoTwoTone-CKY1kk3g.js";import"./useMutation-DxXMTOE2.js";import"./dayjs.min-B7hk726v.js";import"./chunk-AYJ5UCUI-D2JU_FS7.js";import"./cloneDeep-Dkw8GaT_.js";import"./Skeleton-CwMQHgSR.js";import"./SqlFunctions-BjspnTaW.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CQS6nMOh.js";import"./Backdrop-o_xYbFGg.js";import"./LinearProgress-CUwV5ME8.js";import"./index-C4kuOvOy.js";import"./index-B9laFjdc.js";import"./index-DmxWRcnC.js";import"./const-BP60AzNb.js";import"./index-Cwgu_tdW.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
