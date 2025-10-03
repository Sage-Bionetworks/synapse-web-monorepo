import{U as L}from"./UpsetPlot-lfYSbSZW.js";import{f as u}from"./index-BYVKxjqM.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CszQk8nS.js";import"./DefaultPropsProvider-7LTu_nV0.js";import"./createTheme-BA32YtVb.js";import"./index-gzV-alW2.js";import"./iframe-CIVWQ33K.js";import"./Button-qzsh14nT.js";import"./createSimplePaletteValueFilter-0d-v7Hop.js";import"./useTimeout-CxPr5NUX.js";import"./ButtonBase-BCM_qFb6.js";import"./useForkRef-CiJASnht.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-WbW725xQ.js";import"./useFiles-CeB0xe6L.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CEjEDq8u.js";import"./OrientationBanner-CGeLU5Gh.js";import"./index-nnySlh3_.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bm_BhgKX.js";import"./FullWidthAlert-XP7ocI2x.js";import"./Alert-C3HI3P9G.js";import"./useSlot-Fmis5Wjd.js";import"./createSvgIcon-D1QNFdjc.js";import"./Close-62PudIRj.js";import"./IconButton-D8S1CJpy.js";import"./Paper-C7lyUKCR.js";import"./useTheme-BZAXixA8.js";import"./useTheme-Da2-NH-T.js";import"./Stack-C6tV91ai.js";import"./useThemeProps-BIHnaG_n.js";import"./getThemeProps-ChgRYrqu.js";import"./extendSxProp-YxuWZy5-.js";import"./Box-BPtaDF2R.js";import"./AlertTitle-CpWyWMb4.js";import"./Typography-CZJl8X-1.js";import"./index-Du0AoN3s.js";import"./ClickAwayListener-CBaHIHRJ.js";import"./getReactElementRef-y_Sl7aoG.js";import"./index-C0-mTje_.js";import"./index-B91qemJH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D-7O8-XK.js";import"./Tooltip-zgLZWkWd.js";import"./index-B4U5oXLw.js";import"./useControlled-D-YZcAca.js";import"./Popper-KFskyvW_.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-RFtqpdqG.js";import"./QueryClientProvider-C8qXa91E.js";import"./Link-DogJ1V6b.js";import"./Collapse-CnT0kb48.js";import"./_baseUniq-DGNmZFTe.js";import"./_Uint8Array-DQwJx2XB.js";import"./isArray-DVD3pNqz.js";import"./_getTag-DdIxGYJG.js";import"./isEqual-BSGvFaHM.js";import"./noop-DX6rZLP_.js";import"./merge-CmCs04-I.js";import"./_initCloneObject-BHRy_7Wm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DND1I4Lo.js";import"./inputBaseClasses-BLHktJev.js";import"./calculateFriendlyFileSize-zUPO000Z.js";import"./CheckCircleTwoTone-DCcbywJT.js";import"./InfoTwoTone-DV-D_RT7.js";import"./useMutation-BzDbphy2.js";import"./dayjs.min-LJjFF34K.js";import"./chunk-AYJ5UCUI-C5BA4_2k.js";import"./cloneDeep-DU8IJ5IE.js";import"./Skeleton-DVIPn0Lj.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BG_4fNIC.js";import"./Backdrop-CmYaljhw.js";import"./LinearProgress-u-jlTzmb.js";import"./index-C7I-sgK4.js";import"./index-CywEEkFu.js";import"./index-BOOQ5QEK.js";import"./const-BP60AzNb.js";import"./index-Cg3wmup6.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
