import{U as L}from"./UpsetPlot-BOAgpsYk.js";import{f as u}from"./index-Zs-PUCTg.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bcff67TH.js";import"./DefaultPropsProvider-Bui4IzwN.js";import"./createTheme-C6Taoo5g.js";import"./index-DiXMM0wQ.js";import"./iframe-Cz30SbtZ.js";import"./Button-DDb1CEug.js";import"./createSimplePaletteValueFilter-BaC-FLVO.js";import"./useTimeout-CYUA101b.js";import"./ButtonBase-Bo73fpiC.js";import"./useForkRef-Cc3SVOJt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DyDjhxBI.js";import"./useFiles-G66KxfZQ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CHsDh7RO.js";import"./OrientationBanner-DGQnFCDH.js";import"./index-cEXOR-s0.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_LjTTx-.js";import"./FullWidthAlert-CTeztU2Z.js";import"./Alert-qGFNccp3.js";import"./useSlot-Ds0Mc0Ou.js";import"./createSvgIcon-DYM86rZv.js";import"./Close-Clq7eSLy.js";import"./IconButton-COwuqtT4.js";import"./Paper-B1zZt7O7.js";import"./useTheme-EuFAtu8l.js";import"./useTheme-DFVbi8Ay.js";import"./Stack-DmcIcguA.js";import"./extendSxProp-C7hIpNK4.js";import"./getThemeProps-D5cDfXzu.js";import"./Box-k_g3WZ6l.js";import"./AlertTitle-BWUKECEn.js";import"./Typography-CT4xLIUA.js";import"./index-BFBmiiq7.js";import"./ClickAwayListener-tl_dLV2J.js";import"./getReactElementRef-D01GUzN3.js";import"./index-C-D1k6wC.js";import"./index-DJgSRtY2.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C0nCZHMB.js";import"./Tooltip-Cs1bMaIY.js";import"./index-CWcOH_w-.js";import"./useControlled-BEO5kqGQ.js";import"./Popper-CH3jVZGd.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-XvHzqDjO.js";import"./QueryClientProvider-DW6QrWAK.js";import"./Link-WN2Ht7C2.js";import"./Collapse-DH6lKLpe.js";import"./_baseUniq-kvNiw2RP.js";import"./_Uint8Array-DoEymzPe.js";import"./isArray-abBARDY4.js";import"./_getTag-CGMrV_Eo.js";import"./isEqual-Dl6e1zWB.js";import"./merge-Csthr0QZ.js";import"./_initCloneObject-BVPOTz7a.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BRRG5DzI.js";import"./inputBaseClasses-DlDltUjN.js";import"./calculateFriendlyFileSize-BrqlOu-4.js";import"./CheckCircleTwoTone-sKhpjZEv.js";import"./InfoTwoTone-CMUbsSvw.js";import"./useMutation-CS9idiqR.js";import"./dayjs.min-C0Wpa3r2.js";import"./chunk-AYJ5UCUI-CIeRibBH.js";import"./cloneDeep-CHykcOUR.js";import"./Skeleton-qy9X9A7k.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BNoNlqXC.js";import"./Backdrop-BUmJbkKZ.js";import"./LinearProgress-H3j4l7K6.js";import"./index-VJGuUAbi.js";import"./index-DNubUi8f.js";import"./index-wg10m72Y.js";import"./const-BP60AzNb.js";import"./index-Y7AImJmM.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
