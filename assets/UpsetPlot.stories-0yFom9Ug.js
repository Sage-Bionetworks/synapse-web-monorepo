import{U as L}from"./UpsetPlot-8khqSd_O.js";import{f as u}from"./index-CYZhxwMb.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BQ6nb3YT.js";import"./DefaultPropsProvider-BzJ4o39w.js";import"./createTheme-DrOEP9hS.js";import"./index-CENHngd5.js";import"./iframe-CQ-iLZT-.js";import"./Button-CnpDLg-d.js";import"./createSimplePaletteValueFilter-BpYg4GiX.js";import"./useTimeout-D-48mP1E.js";import"./ButtonBase-DBzMib1i.js";import"./useForkRef-D__m6DS7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-7MIiMb8U.js";import"./useFiles-BXDA8pCU.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CekQ24bQ.js";import"./OrientationBanner-BxafAep9.js";import"./index-BWuK4b6E.js";import"./spreadSx-CwcO6WA9.js";import"./react-C5sH5faB.js";import"./FullWidthAlert-AMR1_f-Y.js";import"./Alert-Dekg-2E1.js";import"./useSlot-DOzPDQ0Z.js";import"./createSvgIcon-BVgW14Kx.js";import"./Close-DEdMEwnu.js";import"./IconButton-Rn05qvbt.js";import"./Paper-D8av1KMq.js";import"./useTheme-DysUc_O5.js";import"./useTheme-_HHHuAwt.js";import"./Stack-DkMuG6xc.js";import"./extendSxProp-C_Q4zTeR.js";import"./getThemeProps-NTodJa7o.js";import"./Box-D4TN2X2Z.js";import"./AlertTitle-CjEexHZx.js";import"./Typography-bZpb3nqN.js";import"./index-Dcfas792.js";import"./ClickAwayListener-D2kObEGQ.js";import"./getReactElementRef-DutHMVVv.js";import"./index-jjydEFl4.js";import"./index-Cin9pIEG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B2c4qDhJ.js";import"./Tooltip-C8kUydBW.js";import"./index-B5OcUORg.js";import"./useControlled-DOxUNr9b.js";import"./Popper-BI98bRzf.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-R_INQPkn.js";import"./QueryClientProvider-8oJQ5WUD.js";import"./Link-CqoPerv2.js";import"./Collapse-BsfZtnGd.js";import"./_baseUniq-CKx7TvAI.js";import"./_Uint8Array-BvApqEED.js";import"./isArray-5O24cWbQ.js";import"./_getTag-04Tx6XyJ.js";import"./isEqual-DHO7BfdL.js";import"./merge-l8zgsR91.js";import"./_initCloneObject-DS2MpqhL.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CV4sTlsk.js";import"./inputBaseClasses-CKxlzvLI.js";import"./calculateFriendlyFileSize-C4ejO9Q0.js";import"./CheckCircleTwoTone-Dlr4tfxg.js";import"./InfoTwoTone-DcWSSdOM.js";import"./useMutation-uydFSsFv.js";import"./dayjs.min-DxeorMzz.js";import"./chunk-AYJ5UCUI-sI5wy6uE.js";import"./cloneDeep-BGVNLRDO.js";import"./Skeleton-NfSi4jVM.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CtmQP11j.js";import"./Backdrop-BiScPGR_.js";import"./LinearProgress-B86oFXH2.js";import"./index-Cp_XWsxi.js";import"./index-Bt2GZi1h.js";import"./index-Bj5qKjaG.js";import"./const-BP60AzNb.js";import"./index-DsjzIc7n.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
