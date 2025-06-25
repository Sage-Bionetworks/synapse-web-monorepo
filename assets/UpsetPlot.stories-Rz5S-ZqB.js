import{U as L}from"./UpsetPlot-BUwazAVr.js";import{f as u}from"./index-BXwuyqSK.js";import"./jsx-runtime-2dfIfU3r.js";import"./index-5JMdGahQ.js";import"./iframe-DhTQcQ3F.js";import"./LargeButton-UmMN9Ddz.js";import"./DefaultPropsProvider-DWaPTsuO.js";import"./createTheme-B8kGFBlV.js";import"./Button-Bj9GQT73.js";import"./createSimplePaletteValueFilter-BB5KmPs3.js";import"./useTimeout-6cM8qZEx.js";import"./ButtonBase-Cz4vO_Lv.js";import"./useForkRef-WPqv8QK0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B5ZgS4zN.js";import"./useFiles-BFeZ_ZJ6.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-UuPyjxi_.js";import"./OrientationBanner-CzxFx2jG.js";import"./index-BYJv6Bsd.js";import"./spreadSx-CwcO6WA9.js";import"./react-BZTedZTp.js";import"./FullWidthAlert-CF0SOlWZ.js";import"./Alert-hxUFCOWR.js";import"./useSlot-CapPe3Ll.js";import"./createSvgIcon-r4tj0IbI.js";import"./Close-S53sJciA.js";import"./IconButton-DofgUFwE.js";import"./Paper-BzDUbuS1.js";import"./useTheme-C-dvLIHh.js";import"./useTheme-DRx6aaQt.js";import"./Stack-COnJGcbH.js";import"./extendSxProp-BzI-gJOg.js";import"./getThemeProps-B-Gly8Zd.js";import"./Box-2DxmALU2.js";import"./AlertTitle-OmFMPEq6.js";import"./Typography-CpAlcH3X.js";import"./index-G_wVDABB.js";import"./ClickAwayListener-CyEaVCQx.js";import"./getReactElementRef-DHQj-uSL.js";import"./index-0JVd7jt9.js";import"./index-uCSxDv0P.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D8pMyf2f.js";import"./Tooltip-BlwrRREv.js";import"./index-DNe2VP0L.js";import"./useControlled-DWWAB3KI.js";import"./Popper-DZ9rafFw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ChvZ1ijm.js";import"./useQuery-CSizPZx0.js";import"./utils-CDr4aw5s.js";import"./Link-DSyU__8a.js";import"./Collapse-hKqnA6lo.js";import"./_baseUniq-HWEVlids.js";import"./_Uint8Array-DQEWnLMa.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DKGTqfD_.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BI-Fxu21.js";import"./isEqual-B0P5VD4W.js";import"./merge-ecPXGyJu.js";import"./_initCloneObject-CfEY3-lE.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-7gUD2uZz.js";import"./inputBaseClasses-JBmqD1oA.js";import"./calculateFriendlyFileSize-Dh90TU2u.js";import"./CheckCircleTwoTone-DxGNA53f.js";import"./InfoTwoTone-BUH_l7NO.js";import"./useMutation-kAFHTLbY.js";import"./dayjs.min-DL_qZvuq.js";import"./chunk-AYJ5UCUI-DBE9AyhI.js";import"./cloneDeep-ooho4h8_.js";import"./Skeleton-DUxhMnm9.js";import"./SqlFunctions-fxqtrCrh.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BQ_U-ki6.js";import"./Backdrop-64HKHl9n.js";import"./LinearProgress-D5tgjXwx.js";import"./index-DhR5VP6z.js";import"./index-DZw3CbMG.js";import"./index-CLbvpYT8.js";import"./const-Doag8klc.js";import"./index-WvhAhmL_.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
