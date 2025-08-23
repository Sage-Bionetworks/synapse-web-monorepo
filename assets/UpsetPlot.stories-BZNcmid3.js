import{U as L}from"./UpsetPlot-fOPiQtN9.js";import{f as u}from"./index-Cu9UxW9Y.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CTh4shZJ.js";import"./DefaultPropsProvider-GvbBlk1O.js";import"./createTheme-CJaSHM8i.js";import"./index-BW17KZKz.js";import"./iframe-AlUFIbQA.js";import"./Button-CvHXhaAM.js";import"./createSimplePaletteValueFilter-DJdOpCq8.js";import"./useTimeout-C-2tZBQJ.js";import"./ButtonBase-cLl0L_-X.js";import"./useForkRef-BbR4VQwJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-XIYmj3c5.js";import"./useFiles-Dgs3uMNM.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-wJcRwust.js";import"./OrientationBanner-CHIYKSEx.js";import"./index-mio91fxR.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cpw0QdjG.js";import"./FullWidthAlert-Cbox3Wt6.js";import"./Alert-D14P_WXX.js";import"./useSlot-CIodoxpa.js";import"./createSvgIcon-C4Pt1he2.js";import"./Close-B0lT3RNc.js";import"./IconButton-CDzmaI7z.js";import"./Paper-CRPbRcXd.js";import"./useTheme-DGgtVRkC.js";import"./useTheme-BT7Iu2cS.js";import"./Stack-GwaC4Ni9.js";import"./extendSxProp-DR6Eobbt.js";import"./getThemeProps-jCeH95Yf.js";import"./Box-BTXbyZ2n.js";import"./AlertTitle-B6_xGnBg.js";import"./Typography-D1F-iNAZ.js";import"./index-C4Yh2wPI.js";import"./ClickAwayListener-DDE9KQe2.js";import"./getReactElementRef-jlFeFyay.js";import"./index-CinYwbgZ.js";import"./index-XSW94zJ8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DCWexVAj.js";import"./Tooltip-DITPsrzh.js";import"./index-CeSOllUY.js";import"./useControlled-CLD-pQrt.js";import"./Popper-Be4VvP_C.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BRKwIggm.js";import"./QueryClientProvider-CfU8EORi.js";import"./Link-DJd8FYSi.js";import"./Collapse-D1glpoFn.js";import"./_baseUniq-DZkpOZuT.js";import"./_Uint8Array-CabcxReM.js";import"./isArray-Hdn9cI6Y.js";import"./_getTag-CVjReAgr.js";import"./isEqual-BSL4CLyC.js";import"./merge-9eTURKQA.js";import"./_initCloneObject-BV3thbhv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CHNlJFXp.js";import"./inputBaseClasses-oDpC98vD.js";import"./calculateFriendlyFileSize-BbKg9Xga.js";import"./CheckCircleTwoTone-D_EH_ocU.js";import"./InfoTwoTone-B1r95wou.js";import"./useMutation-CbrFQrRG.js";import"./dayjs.min-BtGMXT4Y.js";import"./chunk-AYJ5UCUI-FooUYMmZ.js";import"./cloneDeep-Djr6Dklt.js";import"./Skeleton-n40_vaA5.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DjYYltm4.js";import"./Backdrop-DCrqUyhf.js";import"./LinearProgress-pR25bTrq.js";import"./index-Coyq94r1.js";import"./index-CZ4t7h6X.js";import"./index-CK7JZGD5.js";import"./const-BP60AzNb.js";import"./index-BX-EIGkT.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
