import{U as L}from"./UpsetPlot-CPCBvdIN.js";import{f as u}from"./index-D1PD5bQr.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Cy5VI_Jo.js";import"./DefaultPropsProvider-3eyk2Txf.js";import"./createTheme-DVClLd7X.js";import"./index-xmm9gAaY.js";import"./iframe-BLfO6aD9.js";import"./Button-BQ9hegyQ.js";import"./createSimplePaletteValueFilter-DA4fbU4r.js";import"./useTimeout-CTZN5zBp.js";import"./ButtonBase-Basorg-T.js";import"./useForkRef-DvtekOdY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CHoQ7_Rd.js";import"./useFiles-kZSrZ9Ud.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-DYoP0nRn.js";import"./OrientationBanner-Qk1K_6I6.js";import"./index-D_uc9XbK.js";import"./spreadSx-CwcO6WA9.js";import"./react-CuMjtN5y.js";import"./FullWidthAlert-Bz88xFci.js";import"./Alert-RiqhnlRv.js";import"./useSlot-CHgLn1WK.js";import"./createSvgIcon-6kteNG6A.js";import"./Close-h06LoBnq.js";import"./IconButton-gHyFlbtt.js";import"./Paper-Ct4ctbAN.js";import"./useTheme-CH7R4AfQ.js";import"./useTheme-BLayVfxu.js";import"./Stack-PI8hM1BB.js";import"./extendSxProp-DX_Fz431.js";import"./getThemeProps-Bwr70u8D.js";import"./Box-BCntL9FC.js";import"./AlertTitle-BcRK1r2c.js";import"./Typography-BXb4EtOU.js";import"./index-PDnFGU16.js";import"./ClickAwayListener-LzdKEsFM.js";import"./getReactElementRef-sTjaeLV5.js";import"./index-PRSM6i0G.js";import"./index-B_u2j2y1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-R6SW3_B-.js";import"./Tooltip-3Repz8AZ.js";import"./index-BkSClrnh.js";import"./useControlled-Bi_oKIMR.js";import"./Popper-CtFkY9eE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-BwJgRCPd.js";import"./QueryClientProvider-DIZJNeGl.js";import"./Link-2vRBwpyb.js";import"./Collapse-Dt2LMx-J.js";import"./_baseUniq-DO6MvtTY.js";import"./_Uint8Array-Barbc0xF.js";import"./isArray-DqJyE-ae.js";import"./_getTag-B4HID6kO.js";import"./isEqual-BMQBBpcz.js";import"./merge-CX1TyP4Z.js";import"./_initCloneObject-B8h9bv3d.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B3n2ow4P.js";import"./inputBaseClasses-DgLki_aL.js";import"./calculateFriendlyFileSize-ByLDm4LS.js";import"./CheckCircleTwoTone-DdN3AAbf.js";import"./InfoTwoTone-CpJjxsZv.js";import"./useMutation-Cw8UnkpD.js";import"./dayjs.min-D3LjA4Zc.js";import"./chunk-AYJ5UCUI-D97_DYX9.js";import"./cloneDeep-DParBPEr.js";import"./Skeleton-Cmw2ajBl.js";import"./SqlFunctions-Dcy2rA-G.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Cug-jrJB.js";import"./Backdrop-D-2yJaKd.js";import"./LinearProgress-58Kk5wLX.js";import"./index-DHeZDB7-.js";import"./index-D4PzfZVN.js";import"./index-WsrtPfqy.js";import"./const-BP60AzNb.js";import"./index-DwCo1FQw.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
