import{U as L}from"./UpsetPlot-BTUfbfmK.js";import{f as u}from"./index-C6hN5Eup.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CWXEtctf.js";import"./DefaultPropsProvider-BfKrtFVi.js";import"./createTheme-C6bqhua0.js";import"./index-CSE36ICp.js";import"./iframe-CqSJpTCy.js";import"./Button-B6J3WU5D.js";import"./createSimplePaletteValueFilter-D-iyMC-H.js";import"./useTimeout-CCItwXi2.js";import"./ButtonBase--22gFC1F.js";import"./useForkRef-RXrVeQ0C.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DONuS5NU.js";import"./useFiles-BaJAH9XY.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-DMGIdueU.js";import"./OrientationBanner-DUshzBaI.js";import"./index-B_lRpC5f.js";import"./spreadSx-CwcO6WA9.js";import"./react-Btp66E_r.js";import"./FullWidthAlert-myzi9ql8.js";import"./Alert-DRyQ6wfY.js";import"./useSlot-DIEd0YVT.js";import"./createSvgIcon-CSAfthzH.js";import"./Close-BR86yxSt.js";import"./IconButton-CYDSApHG.js";import"./Paper-DvzBAoOz.js";import"./useTheme-lnmLpkgY.js";import"./useTheme-I3E3ZiMz.js";import"./Stack-BjN-nToO.js";import"./extendSxProp-DAzojmTC.js";import"./getThemeProps-byGOx03y.js";import"./Box-CoETCWSt.js";import"./AlertTitle-Br7tF-tW.js";import"./Typography-LYiyWESH.js";import"./index-CHoUYjX-.js";import"./ClickAwayListener-DUqqEUmv.js";import"./getReactElementRef-DeFkALY0.js";import"./index-Bni9IJvc.js";import"./index-DUhGnweT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BpSK5ccS.js";import"./Tooltip-B4zpHuik.js";import"./index-pemOETow.js";import"./useControlled-DODXT4o6.js";import"./Popper-DqlH9wRI.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-D4BdxgaS.js";import"./QueryClientProvider-CBlIsH89.js";import"./Link-Ce593ddH.js";import"./Collapse-B-_w-6g2.js";import"./_baseUniq-OIB7YxdY.js";import"./_Uint8Array-BSMQ2YmQ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Btd4GiYg.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BYQCS-dN.js";import"./isEqual-Dlkt8XhN.js";import"./merge-D9JTs6nR.js";import"./_initCloneObject-uNg5fFXM.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DdbMU_xb.js";import"./inputBaseClasses-BKWB4umQ.js";import"./calculateFriendlyFileSize-DTSCAOkD.js";import"./CheckCircleTwoTone-DJVxAojM.js";import"./InfoTwoTone-I2WNyAv4.js";import"./useMutation-DkX2R8XR.js";import"./dayjs.min-Dx4KCr9S.js";import"./chunk-AYJ5UCUI-BeQIqwMB.js";import"./cloneDeep-BG4tgoNc.js";import"./Skeleton-CpGRarIH.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BV0YlLQM.js";import"./Backdrop-CszDDuup.js";import"./LinearProgress-CsSRoNE6.js";import"./index-D27YZA-f.js";import"./index-DXAV7su9.js";import"./index-BsRwMwO2.js";import"./const-BP60AzNb.js";import"./index-D-UkJQu8.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
