import{U as L}from"./UpsetPlot-C3l44vqR.js";import{f as u}from"./index-P0f_oTfn.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-B-DyvjSy.js";import"./DefaultPropsProvider-C2oHESUC.js";import"./createTheme-CBBRw45H.js";import"./index-D3pHUmD6.js";import"./iframe-BpSRLMba.js";import"./Button-DFhgsAEV.js";import"./createSimplePaletteValueFilter-Bv3ERxxM.js";import"./useTimeout-BzIrd2dm.js";import"./ButtonBase-DQEerWyv.js";import"./useForkRef-EEaY0xJF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Brn47whz.js";import"./useFiles-CqmGsx9e.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-CGuZkUES.js";import"./OrientationBanner-CnSRSzGI.js";import"./index-DdN6M7oU.js";import"./spreadSx-CwcO6WA9.js";import"./react-BUCepjMZ.js";import"./FullWidthAlert-CZIscZLy.js";import"./Alert-AkkXbhSb.js";import"./useSlot-DTI4mSKk.js";import"./createSvgIcon-DXCLit9r.js";import"./Close-Bdf7Qli9.js";import"./IconButton-CS-lRm_S.js";import"./Paper-ChaWEqlg.js";import"./useTheme-B-qufAMP.js";import"./useTheme-CfYlG3ge.js";import"./Stack-VNT7LZdB.js";import"./extendSxProp-BfPTzD4A.js";import"./getThemeProps-DdnzTGNl.js";import"./Box-CupcJaB7.js";import"./AlertTitle-OcVQIOHM.js";import"./Typography-BaIISwON.js";import"./index-LQ44ZR_d.js";import"./ClickAwayListener-CqnY7POu.js";import"./getReactElementRef-C5REN14H.js";import"./index-swe7WJVh.js";import"./index-CJxYXPto.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D2Vq3YXn.js";import"./Tooltip-D_9QqXCy.js";import"./index-Cp1tdZxc.js";import"./useControlled-DsFar4lI.js";import"./Popper-XM_TxQH5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CWVzDLQ7.js";import"./QueryClientProvider-IIYYUr9E.js";import"./Link-D30DhZYx.js";import"./Collapse-BjdLubi6.js";import"./_baseUniq-C2lnGCfY.js";import"./_Uint8Array-BLyIfwHx.js";import"./isArray-6JAmOhNR.js";import"./_getTag-DXXF4jl8.js";import"./isEqual-BzLJyYLm.js";import"./merge-DXiCbZrQ.js";import"./_initCloneObject-BkHnv0Lv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DMA4TlHY.js";import"./inputBaseClasses-D4rBBtbv.js";import"./calculateFriendlyFileSize-BAvtWXML.js";import"./CheckCircleTwoTone-B78RO6Fq.js";import"./InfoTwoTone-ttP8RaV1.js";import"./useMutation-C9iErl7-.js";import"./dayjs.min-T-8gDYmI.js";import"./chunk-AYJ5UCUI-Bf-rUtCm.js";import"./cloneDeep-Dm5lhDgZ.js";import"./Skeleton-B6UnaRSd.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Did3ruNK.js";import"./Backdrop-Cg0l_tdn.js";import"./LinearProgress-DhsCx8V4.js";import"./index-C48SOvN6.js";import"./index-HUlv8iYY.js";import"./index-C7g0cVl0.js";import"./const-BP60AzNb.js";import"./index-Cbqo5Nik.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
