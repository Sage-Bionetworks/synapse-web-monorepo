import{U as L}from"./UpsetPlot-Bwijip8y.js";import{f as u}from"./index-Cr18B7Pu.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CLDUz0G1.js";import"./DefaultPropsProvider-C0BG17d4.js";import"./createTheme-BxansSaP.js";import"./index-ijsm3mBy.js";import"./iframe-2dG-YY9-.js";import"./Button-sd4ooRmS.js";import"./createSimplePaletteValueFilter-DF0-Q_sR.js";import"./useTimeout-BHJGkgoe.js";import"./ButtonBase-COXFE6tZ.js";import"./useForkRef-BUPBxQCC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DuN8C9YO.js";import"./useFiles-D3DLEnco.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CdVOt2dc.js";import"./OrientationBanner-DY4cNwXq.js";import"./index-xJTQyrwQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-BpjFLlG7.js";import"./FullWidthAlert-B3BBpfmE.js";import"./Alert-CksGxhHq.js";import"./useSlot-DwNJrAe8.js";import"./createSvgIcon-Tjl1dYM0.js";import"./Close-BEpv9aVr.js";import"./IconButton-BSE-Wm4J.js";import"./Paper-Cra7tOWX.js";import"./useTheme-BlIhEXZO.js";import"./useTheme-BguFC_Yf.js";import"./Stack-DkqLNuQk.js";import"./useThemeProps-Dfd8LZYq.js";import"./getThemeProps-D6jrdoYB.js";import"./extendSxProp-D6bOc2yu.js";import"./Box-D11bBFwR.js";import"./AlertTitle-CUnCZtfx.js";import"./Typography-DKWA_FkP.js";import"./index-BYBjn3Mm.js";import"./ClickAwayListener-CeIKyymb.js";import"./getReactElementRef-BqqLpY_U.js";import"./index-BwEXD9Sp.js";import"./index-CLoZ34tt.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ddu7BFI0.js";import"./Tooltip-D4GNWK6u.js";import"./index-DD_DY1ge.js";import"./useControlled-fSPDUO3C.js";import"./Popper-CQCjOtHT.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DJmCx-dC.js";import"./QueryClientProvider-BMd9N-KC.js";import"./Link-DTbmoeb_.js";import"./Collapse-J-Fir_Qt.js";import"./_baseUniq-xOxQiqA9.js";import"./_Uint8Array-wJdmpIr7.js";import"./isArray-CTByjuZm.js";import"./_getTag-CccqWhF2.js";import"./isEqual-CL_VQgn2.js";import"./noop-DX6rZLP_.js";import"./merge-CJQkSP_u.js";import"./_initCloneObject-COJXPyDD.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DPwN_GcI.js";import"./inputBaseClasses-8L5uwA3P.js";import"./calculateFriendlyFileSize-D3lSxj6e.js";import"./CheckCircleTwoTone-DVKZgV-7.js";import"./InfoTwoTone-CAJyCA_f.js";import"./useMutation-BTNFEee6.js";import"./dayjs.min-BMe_1oX1.js";import"./chunk-AYJ5UCUI-BXNkd_hA.js";import"./cloneDeep-Cbc43DTf.js";import"./Skeleton-CxQUKy7B.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DCaOTCDJ.js";import"./Backdrop-CBOSG6Fc.js";import"./LinearProgress-CDEaGPUW.js";import"./index-D-hQYkUb.js";import"./index-DEGJyh_r.js";import"./index-01vlyDUE.js";import"./const-BP60AzNb.js";import"./index-q00EovAc.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
