import{U as L}from"./UpsetPlot-gob26t9p.js";import{f as u}from"./index-CdlE709m.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-G9izcJ2E.js";import"./DefaultPropsProvider-DNj85cPU.js";import"./createTheme-Ckpp2aJZ.js";import"./index-Z_niMZcI.js";import"./iframe-9d_xT48Y.js";import"./Button-CE2q8GZa.js";import"./createSimplePaletteValueFilter-DgrzAZvi.js";import"./useTimeout-Lo-a2r10.js";import"./ButtonBase-D3TfkVgz.js";import"./useForkRef-RZxkIAYG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bk44l8uz.js";import"./useFiles-zOESdhzI.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-hreeKAiu.js";import"./OrientationBanner-CYdEM79E.js";import"./index-DznES9q-.js";import"./spreadSx-CwcO6WA9.js";import"./react-CYczaA45.js";import"./FullWidthAlert-CAXTHdyF.js";import"./Alert-fhf9ZcTF.js";import"./useSlot-CGhf7FeQ.js";import"./createSvgIcon-CyMI1MCl.js";import"./Close-DKqsZ7f0.js";import"./IconButton-D8dvWPnB.js";import"./Paper-DB8P-rkI.js";import"./useTheme-De4w3W1h.js";import"./useTheme-BTCL84tt.js";import"./Stack-D6h9mjEk.js";import"./useThemeProps-DwadHsRm.js";import"./getThemeProps-C_wawT9I.js";import"./extendSxProp-D-Q_-68W.js";import"./Box-B0N2xX3m.js";import"./AlertTitle-DRXY24RG.js";import"./Typography-CO7fscfq.js";import"./index-BmRs8eVL.js";import"./ClickAwayListener-CuOvNdFo.js";import"./getReactElementRef-DjY0RuEK.js";import"./index-qAeAYKDl.js";import"./index-pthXlbu6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B5ZRnJdx.js";import"./Tooltip-DkoGxs3D.js";import"./index-4CrF3sPv.js";import"./useControlled-BO3AYCap.js";import"./Popper-D7dI-vcX.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-D7eNVn05.js";import"./QueryClientProvider-wm4deiul.js";import"./Link-CkNjpNVk.js";import"./Collapse-B3lfXU47.js";import"./_baseUniq-BfPE21S4.js";import"./_Uint8Array-CxEDNqDG.js";import"./isArray-DEVg6Y6f.js";import"./_getTag-CyB7UJq2.js";import"./isEqual-CjQ0xsUP.js";import"./noop-DX6rZLP_.js";import"./merge-w5SVnV7S.js";import"./_initCloneObject-BXD3EUEW.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTsGKFOx.js";import"./inputBaseClasses-BquiKfq4.js";import"./calculateFriendlyFileSize-CV2UvVgj.js";import"./CheckCircleTwoTone-DsSnAxaE.js";import"./InfoTwoTone-OsnIp2rF.js";import"./useMutation-CwPhuXlo.js";import"./dayjs.min-BstykqR9.js";import"./chunk-AYJ5UCUI-CpTQ0xdT.js";import"./cloneDeep-Ba0G_3Y-.js";import"./Skeleton-DaUiC_M2.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DoC540B7.js";import"./Backdrop-Bl5kEyWe.js";import"./LinearProgress-CRiZHLD8.js";import"./index-6hV5b4k7.js";import"./index-DKPBY6ZQ.js";import"./index-Bvb1o1M1.js";import"./const-BP60AzNb.js";import"./index-tt7xYfm1.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
