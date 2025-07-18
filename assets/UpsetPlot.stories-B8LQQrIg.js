import{U as L}from"./UpsetPlot-Dh44knMR.js";import{f as u}from"./index-DqkGyCp3.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CJgW6fjS.js";import"./DefaultPropsProvider-w1vijPDc.js";import"./createTheme-Bf_MdCTh.js";import"./index-ZZTtOf4-.js";import"./iframe-CD_2jMIE.js";import"./Button-XZhgB0d-.js";import"./createSimplePaletteValueFilter-CQbNe3ux.js";import"./useTimeout-C4L8nwxw.js";import"./ButtonBase-LT684Uv3.js";import"./useForkRef-DlhsxcsI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bzzjda-U.js";import"./useFiles-C6AV9Q8a.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-WszFjH7H.js";import"./OrientationBanner-hMV47St2.js";import"./index-BU4KNxfc.js";import"./spreadSx-CwcO6WA9.js";import"./react-2jvo8p0i.js";import"./FullWidthAlert-DIR8vg_z.js";import"./Alert-ljpEvp4L.js";import"./useSlot-pHtyNc2f.js";import"./createSvgIcon-CfjYDsTS.js";import"./Close-DVFB0Dve.js";import"./IconButton-Cqq2e3f-.js";import"./Paper-gLA6iPlf.js";import"./useTheme-ClEuG-Ii.js";import"./useTheme-BFUEu2BR.js";import"./Stack-F5yJDEja.js";import"./extendSxProp-CtY8Dw4j.js";import"./getThemeProps-DmxVk26V.js";import"./Box-BGUP5juR.js";import"./AlertTitle-BwkJ1jQs.js";import"./Typography-Bv6EJ4dy.js";import"./index-CC1dLL8g.js";import"./ClickAwayListener-BuatsOLL.js";import"./getReactElementRef-D8XAVsu7.js";import"./index-BmyKXe-L.js";import"./index-BCxbmZiL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-SIr3PisF.js";import"./Tooltip-CRm_Ie1y.js";import"./index-YMO0rTZa.js";import"./useControlled-DDo6hj5H.js";import"./Popper-Ci3wIbu8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-Dt72K2C5.js";import"./QueryClientProvider-BIQBceHN.js";import"./Link-BRhPE3PH.js";import"./Collapse-BUFNs0xv.js";import"./_baseUniq-D5ZIWAC8.js";import"./_Uint8Array-CqzHzfVS.js";import"./isArray-CYCVDk7c.js";import"./_getTag-DMywFZAb.js";import"./isEqual-C3dHO4jk.js";import"./merge-CIDyGqhy.js";import"./_initCloneObject-BNQn2L_G.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BJRxMULJ.js";import"./inputBaseClasses-zqjwa2eD.js";import"./calculateFriendlyFileSize-BAoxRKq5.js";import"./CheckCircleTwoTone-CMNhAHbs.js";import"./InfoTwoTone-BSPgIkj6.js";import"./useMutation-2P9e-5l7.js";import"./dayjs.min-BXK7E4Tj.js";import"./chunk-AYJ5UCUI-C3eeMINE.js";import"./cloneDeep-ChQCA-Nl.js";import"./Skeleton-Bz8GaS8V.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dmp58J57.js";import"./Backdrop-Diozzh4k.js";import"./LinearProgress-EAtDwMpi.js";import"./index-tnH4neeZ.js";import"./index-BlLkyEuT.js";import"./index-OwHn_8Fh.js";import"./const-BP60AzNb.js";import"./index-DcT2WTXV.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
