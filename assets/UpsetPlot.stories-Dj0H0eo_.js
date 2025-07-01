import{U as L}from"./UpsetPlot-BC8T2k0F.js";import{f as u}from"./index-DfLSW_eP.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-HaeKBdQy.js";import"./DefaultPropsProvider-h88qGke-.js";import"./createTheme-OG4SESHy.js";import"./index-1kje7hbp.js";import"./iframe-P3oO2Icm.js";import"./Button-B5AeWKRO.js";import"./createSimplePaletteValueFilter-BUYDpYB7.js";import"./useTimeout-Dv-V-iGQ.js";import"./ButtonBase-BVH95p2m.js";import"./useForkRef-D9dMJQ0q.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-RCFFSlDy.js";import"./useFiles-CtpAYHeN.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-B20IWiKQ.js";import"./OrientationBanner-Cqm-nmkv.js";import"./index-BthYrhqK.js";import"./spreadSx-CwcO6WA9.js";import"./react-c7S9S6V3.js";import"./FullWidthAlert-C0XuvKAZ.js";import"./Alert-DYTEWiub.js";import"./useSlot-DXxgJls1.js";import"./createSvgIcon-COTmfNQD.js";import"./Close-DPjoDAV3.js";import"./IconButton-DVCziVzo.js";import"./Paper-B7Sf59Qm.js";import"./useTheme-74bKXp5k.js";import"./useTheme-C1oGBCFg.js";import"./Stack-DiwR9M8A.js";import"./extendSxProp-Ba4rz3fq.js";import"./getThemeProps-BV0JmN8D.js";import"./Box-BSsC5_fo.js";import"./AlertTitle-DY2vZVnp.js";import"./Typography-UsUy27h4.js";import"./index-DY2CjuTt.js";import"./ClickAwayListener-D6k5Nu1Z.js";import"./getReactElementRef-DUePG06p.js";import"./index-BlODw5Ln.js";import"./index-Bx-o-xN8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DcG1qn5x.js";import"./Tooltip-SiJ2L_4C.js";import"./index-jBLJh1fo.js";import"./useControlled-CXyTmM0a.js";import"./Popper-8XwYGZA6.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Pnsivd9m.js";import"./QueryClientProvider-CsWguKkd.js";import"./Link-DMonRavy.js";import"./Collapse-IxLkIakE.js";import"./_baseUniq-9RLn5ltf.js";import"./_Uint8Array-CZ5euGBW.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ClkwTU3U.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BCK38-UW.js";import"./isEqual-Hccqq_XK.js";import"./merge-CNAz1M9N.js";import"./_initCloneObject-9Ptb3yvA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLtm4mZl.js";import"./inputBaseClasses-BHIaVwMH.js";import"./calculateFriendlyFileSize-Bog6ZeEG.js";import"./CheckCircleTwoTone-BagqzJ7q.js";import"./InfoTwoTone-CoAhai06.js";import"./useMutation-CUuS3dzJ.js";import"./dayjs.min-CXJYOgSw.js";import"./chunk-AYJ5UCUI-C63Z2g3T.js";import"./cloneDeep-Dnx1G2Tq.js";import"./Skeleton-DenV4mbe.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C_OOQkhw.js";import"./Backdrop-CrCjcF58.js";import"./LinearProgress-DAh3U_FK.js";import"./index-Bb_AsQiN.js";import"./index-79vUA2PA.js";import"./index-eR9qglyf.js";import"./const-BP60AzNb.js";import"./index-z0UTgfff.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
