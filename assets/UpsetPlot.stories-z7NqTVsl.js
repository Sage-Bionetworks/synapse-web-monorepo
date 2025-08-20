import{U as L}from"./UpsetPlot-B0uC90zc.js";import{f as u}from"./index--EZBeNc9.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DJU0QlTV.js";import"./DefaultPropsProvider-XLuEdgCM.js";import"./createTheme-7VwcU9MX.js";import"./index-rmXZupeT.js";import"./iframe-CnAxXqxV.js";import"./Button-z7wIW46U.js";import"./createSimplePaletteValueFilter-BrqKSbt1.js";import"./useTimeout-C7Qw7JlA.js";import"./ButtonBase-bRyxANaO.js";import"./useForkRef-B964cD4p.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B7bm9t_J.js";import"./useFiles-C6BwGmgN.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-CHfc5BRa.js";import"./OrientationBanner-CkE3LJzk.js";import"./index-DyKzhNf1.js";import"./spreadSx-CwcO6WA9.js";import"./react-BslqEXOo.js";import"./FullWidthAlert-Cij9Lr9P.js";import"./Alert-Bd4EOZMs.js";import"./useSlot-D6xm9tOe.js";import"./createSvgIcon-C-kUqDRU.js";import"./Close-B2HfX8kl.js";import"./IconButton-BGihFqQO.js";import"./Paper-CXW8nM1b.js";import"./useTheme-Dj_3GmAW.js";import"./useTheme-CjWK0QVA.js";import"./Stack-ZJG2wcld.js";import"./extendSxProp-CMhnceC8.js";import"./getThemeProps-CCWsl_Bt.js";import"./Box-CMDBeJLc.js";import"./AlertTitle-Ba2SDaus.js";import"./Typography-C1bnshF6.js";import"./index-BQPAD3Qw.js";import"./ClickAwayListener-Dfg_Mgii.js";import"./getReactElementRef-ChnRrIQ2.js";import"./index-DEyJTSZg.js";import"./index-BFCDf8FD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-bzjsRX5V.js";import"./Tooltip-Byt5Qei4.js";import"./index-DwY_HY0j.js";import"./useControlled-PcFy2od8.js";import"./Popper-BIm3Cl6k.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-IHp_taKB.js";import"./QueryClientProvider-D0RjbjLi.js";import"./Link-LP8RV5_G.js";import"./Collapse-BwPnxzem.js";import"./_baseUniq-CxWngQTg.js";import"./_Uint8Array-DEe3OgvP.js";import"./isArray-CLQzkOlL.js";import"./_getTag-39rwr1vt.js";import"./isEqual-zjmzDneB.js";import"./merge-DvCmlctf.js";import"./_initCloneObject-BoJxgDin.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DbJe4Bd2.js";import"./inputBaseClasses-Dgezdmn3.js";import"./calculateFriendlyFileSize-O_GSSh-o.js";import"./CheckCircleTwoTone-UW5_dW2R.js";import"./InfoTwoTone-C_kTkL1y.js";import"./useMutation-CHebwS8k.js";import"./dayjs.min-CPnKhPbP.js";import"./chunk-AYJ5UCUI-ZuTesFP-.js";import"./cloneDeep-CODQJftl.js";import"./Skeleton-BziL8Y5z.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BP6L2hxG.js";import"./Backdrop-BSxXA-nh.js";import"./LinearProgress-Dcny4CQN.js";import"./index-CtHayggO.js";import"./index-CnGc5sPW.js";import"./index-F57VZSMZ.js";import"./const-BP60AzNb.js";import"./index-Dp6y0K7Z.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
