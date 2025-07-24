import{U as L}from"./UpsetPlot-xNP6ItyU.js";import{f as u}from"./index-BQ8vPx-m.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CO3P4dSW.js";import"./DefaultPropsProvider-BDtHF6Wn.js";import"./createTheme-BM4VXEF7.js";import"./index-CjvYtqpU.js";import"./iframe-CmNuBUtR.js";import"./Button-CpGbp6fi.js";import"./createSimplePaletteValueFilter-DDSH0Dac.js";import"./useTimeout-4mSsQgfw.js";import"./ButtonBase-CjRtnrZ-.js";import"./useForkRef-D4tbPone.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-uqgitlHM.js";import"./useFiles-CwVXbZ4Q.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-B8yZduIw.js";import"./OrientationBanner-C481yTHm.js";import"./index-CIzR3_nv.js";import"./spreadSx-CwcO6WA9.js";import"./react-wu8OeX_M.js";import"./FullWidthAlert-B_e91uE3.js";import"./Alert-DiF7BjqH.js";import"./useSlot-0xjR5-eu.js";import"./createSvgIcon-CXDifqDc.js";import"./Close-DsTJrrze.js";import"./IconButton-xVMoyj-U.js";import"./Paper-4NPAipfw.js";import"./useTheme-wwyqa66a.js";import"./useTheme-DdsShxW3.js";import"./Stack-CqxARfsH.js";import"./extendSxProp-BjTGpY0p.js";import"./getThemeProps-D2GKi1qB.js";import"./Box-Comp2lGu.js";import"./AlertTitle-B62ZZQBM.js";import"./Typography-DXVyKKZC.js";import"./index-DozLoM4X.js";import"./ClickAwayListener-DEZREAEY.js";import"./getReactElementRef-BgUGMaJC.js";import"./index-BvtI68fQ.js";import"./index-C5zCDDJj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B7vOKqny.js";import"./Tooltip-CE3Twi72.js";import"./index-B4pO1bVN.js";import"./useControlled-DWL3i0vL.js";import"./Popper-BZbuaw7Z.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-B73aGslE.js";import"./QueryClientProvider-BEav2MG4.js";import"./Link-Czy36zDt.js";import"./Collapse-Cv9Th3Bg.js";import"./_baseUniq-BWxWngIF.js";import"./_Uint8Array-tj6b5Sej.js";import"./isArray-C2HehnyO.js";import"./_getTag-Cp7QeK2Q.js";import"./isEqual-BLo86LRt.js";import"./merge-WwGDVXfv.js";import"./_initCloneObject-LyroLBM8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ChvB7WU8.js";import"./inputBaseClasses-Bi3VPfdW.js";import"./calculateFriendlyFileSize-BSQ-A4fb.js";import"./CheckCircleTwoTone-1_pXCpeZ.js";import"./InfoTwoTone-Dmc4vDk0.js";import"./useMutation-DwUCRkQ5.js";import"./dayjs.min--_9ECAgO.js";import"./chunk-AYJ5UCUI-BPGJkqcl.js";import"./cloneDeep-CZqY96B_.js";import"./Skeleton-tTQ1Ps97.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BItiRC4I.js";import"./Backdrop-x-YAmUDh.js";import"./LinearProgress-ChWRkCFG.js";import"./index-CR-xr_Jj.js";import"./index-DxGdZB7n.js";import"./index-C0GXkiU7.js";import"./const-BP60AzNb.js";import"./index-BfbiH6Ja.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
