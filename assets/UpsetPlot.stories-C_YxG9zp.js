import{U as L}from"./UpsetPlot-eSHAo1HV.js";import{f as u}from"./index-CbVG4VWd.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Cuah6URM.js";import"./DefaultPropsProvider-BjHJDCJr.js";import"./createTheme-CRQ7I_dX.js";import"./index-BnMe2I9X.js";import"./iframe-Dyk8IJ-S.js";import"./Button-ZtEOC2FI.js";import"./createSimplePaletteValueFilter-cWNbIY60.js";import"./useTimeout-CaCqnfzd.js";import"./ButtonBase-C8vqs9WW.js";import"./useForkRef-DX3Y6Sj8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-By7awDiI.js";import"./useFiles-DW966Sxu.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CkvAnyYS.js";import"./OrientationBanner-B_V_8P-O.js";import"./index-CtHvokBV.js";import"./spreadSx-CwcO6WA9.js";import"./react-DtD5Y0AT.js";import"./FullWidthAlert-UbNPxrSF.js";import"./Alert-BjLLEYQE.js";import"./useSlot-DaAbZ6g5.js";import"./createSvgIcon-C2q1nMwu.js";import"./Close-C7SsaOD8.js";import"./IconButton-BpjBSXnW.js";import"./Paper-Cm0ZKM3A.js";import"./useTheme-DGSOp33U.js";import"./useTheme-C0reHQDp.js";import"./Stack-C-HLu5NC.js";import"./extendSxProp-BKMPj3sl.js";import"./getThemeProps-DT-e-uqc.js";import"./Box-CAzztnMs.js";import"./AlertTitle-BHzRW8bN.js";import"./Typography-YqtMErXG.js";import"./index-DkcUolcj.js";import"./ClickAwayListener-Yo19yUA2.js";import"./getReactElementRef-ZqzxhBtP.js";import"./index-Dy1Bjgd_.js";import"./index-CYCi8QkA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DdJ2MXtp.js";import"./Tooltip-D0YpnBhP.js";import"./index-BvEgmguE.js";import"./useControlled-DNKL0F_F.js";import"./Popper-BdxdSPd9.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-D0ZIeSwo.js";import"./QueryClientProvider-B1B9bJpc.js";import"./Link-D5Q1X9eZ.js";import"./Collapse-BryfRUf4.js";import"./_baseUniq-C3xWzPcM.js";import"./_Uint8Array-WQu6sT7x.js";import"./isArray-_2Wn4RW0.js";import"./_getTag-BRueWzvo.js";import"./isEqual-CHx69R3G.js";import"./merge-Dz8auUWg.js";import"./_initCloneObject-T6ZxVYQi.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BVHiNZZI.js";import"./inputBaseClasses-D5snuY8I.js";import"./calculateFriendlyFileSize-DGWeS3EQ.js";import"./CheckCircleTwoTone-O3B4OxHZ.js";import"./InfoTwoTone-ZATdcR--.js";import"./useMutation-DYT2sKRm.js";import"./dayjs.min-BEz-0kVO.js";import"./chunk-AYJ5UCUI-CifHNI74.js";import"./cloneDeep-D2swbxo-.js";import"./Skeleton-P1Q-QFo6.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DsHUpU4w.js";import"./Backdrop-BJg5nsDI.js";import"./LinearProgress-CGO7HodK.js";import"./index-BVbPXFxR.js";import"./index-BgBWocI_.js";import"./index-DPL_BeE1.js";import"./const-BP60AzNb.js";import"./index-vW2xB7_o.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
