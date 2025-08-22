import{U as L}from"./UpsetPlot-D1lkWtqE.js";import{f as u}from"./index-CN-TRIzK.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D252ka7Y.js";import"./DefaultPropsProvider-C3VHkWTY.js";import"./createTheme-4YtjTmS_.js";import"./index-B1W5WNgJ.js";import"./iframe-MHlXG0HA.js";import"./Button-D03MFFMq.js";import"./createSimplePaletteValueFilter-D2FMHYeY.js";import"./useTimeout-Cs2HoDjc.js";import"./ButtonBase-ChPpEqOK.js";import"./useForkRef-CaEGGiEl.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BKDJ5rkw.js";import"./useFiles-C5KQCC6t.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-u69kbdqM.js";import"./OrientationBanner-Ddf3lLdM.js";import"./index-CvhDhX6u.js";import"./spreadSx-CwcO6WA9.js";import"./react-BTSVRfVy.js";import"./FullWidthAlert-C_BBQmTm.js";import"./Alert-D_dzlE-h.js";import"./useSlot-2q2LYMo2.js";import"./createSvgIcon-l1RjMTva.js";import"./Close-CF2uOmcv.js";import"./IconButton-CGQqBcgV.js";import"./Paper-BvVO5eUD.js";import"./useTheme-QhhyLIuU.js";import"./useTheme-DOuWHGWV.js";import"./Stack-BL7qtwo2.js";import"./extendSxProp-DB9awf9E.js";import"./getThemeProps-D9TNRttJ.js";import"./Box-8QQP0DYh.js";import"./AlertTitle-BhuLBLYK.js";import"./Typography-_6VRFWmU.js";import"./index-C-gqQIMz.js";import"./ClickAwayListener-t0pKiAG_.js";import"./getReactElementRef-BQo3qkIg.js";import"./index-DEWSSy9Q.js";import"./index-DC5kNJrm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-pQq64t3k.js";import"./Tooltip-UlufiAyt.js";import"./index-B1p0gP3S.js";import"./useControlled-BUOgx5qY.js";import"./Popper-Cm1i59-L.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Bv8ltnIt.js";import"./QueryClientProvider-DNzmMbq6.js";import"./Link-B71KkcZ0.js";import"./Collapse-1t69axGl.js";import"./_baseUniq-BImmrfwB.js";import"./_Uint8Array-DrGc3PPg.js";import"./isArray-CVsAWsIX.js";import"./_getTag-BU9Y5Ey-.js";import"./isEqual-BYvDwKrb.js";import"./merge-Dth-e1TY.js";import"./_initCloneObject-sfaIGWP2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bv3eCvAv.js";import"./inputBaseClasses-DUGrsJdw.js";import"./calculateFriendlyFileSize-CNlbHJx8.js";import"./CheckCircleTwoTone-CDt56jj-.js";import"./InfoTwoTone-teTa1z1M.js";import"./useMutation-_Uc1Hbj5.js";import"./dayjs.min-BUdMulCI.js";import"./chunk-AYJ5UCUI-DwXOjjlr.js";import"./cloneDeep-BUF6UF9n.js";import"./Skeleton-BNsxiZii.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-9NIUJxUa.js";import"./Backdrop-DLbD9Jlc.js";import"./LinearProgress-BlBfpdE-.js";import"./index-D8LYdu43.js";import"./index-C4JDA0bQ.js";import"./index-9_vlGeT8.js";import"./const-BP60AzNb.js";import"./index-Dnln2s_T.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
