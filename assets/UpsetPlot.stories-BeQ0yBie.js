import{U as L}from"./UpsetPlot-XdyQhgf6.js";import{f as u}from"./index-z-1rPpm0.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-NN6ojFyi.js";import"./DefaultPropsProvider-Bm9EWdCB.js";import"./createTheme-CIw9KUZV.js";import"./index-Bx7qxNz6.js";import"./iframe-oxiAqt3n.js";import"./Button-DC0Z6N20.js";import"./createSimplePaletteValueFilter-C7kcEEIl.js";import"./useTimeout-DnSoaJbv.js";import"./ButtonBase-BuLMg0uO.js";import"./useForkRef-C--zO68W.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CfiXH_Rk.js";import"./useFiles-DGDTxZYQ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-B1E3c0aq.js";import"./OrientationBanner-D7k3-QFh.js";import"./index-CmXUi2FL.js";import"./spreadSx-CwcO6WA9.js";import"./react-DdL6hUDw.js";import"./FullWidthAlert-DNYkg2ty.js";import"./Alert-CrPo9ras.js";import"./useSlot-Do7Q0LkH.js";import"./createSvgIcon-D4V7E9uK.js";import"./Close-oipHD91r.js";import"./IconButton-Dm-Kouzk.js";import"./Paper-DkuZylpL.js";import"./useTheme-DtItw25X.js";import"./useTheme-S-XYqDcy.js";import"./Stack-BYBjgcjC.js";import"./extendSxProp-DIhkEDJC.js";import"./getThemeProps-DEWIJyCD.js";import"./Box-DZHSTnWO.js";import"./AlertTitle-jBrq7hxW.js";import"./Typography-7uTmWE9G.js";import"./index-DZIDIo0P.js";import"./ClickAwayListener-5G5OKMq_.js";import"./getReactElementRef-pzoxrQJz.js";import"./index-DBYClo48.js";import"./index-xoTw1gRu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BWERmVKf.js";import"./Tooltip-D1wdw83J.js";import"./index-ka5kuvCs.js";import"./useControlled-CBZmQst1.js";import"./Popper-CHWsK8nH.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-C6S4eixI.js";import"./QueryClientProvider-C1R7g-OG.js";import"./Link-CLP81lMM.js";import"./Collapse-CAb26MWD.js";import"./_baseUniq-BdQbLaOf.js";import"./_Uint8Array-BLZKSuky.js";import"./isArray-qqpWvSAV.js";import"./_getTag-un9JyNDF.js";import"./isEqual-BdjFDA1t.js";import"./merge-CxrTOCc8.js";import"./_initCloneObject-BaOl87LU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-lUhhxWxn.js";import"./inputBaseClasses-BX8uqVyC.js";import"./calculateFriendlyFileSize-Bn7tHELT.js";import"./CheckCircleTwoTone-Bzxp8M2J.js";import"./InfoTwoTone-CBQ80vHJ.js";import"./useMutation-CK6zHCSY.js";import"./dayjs.min-CnWJMgNC.js";import"./chunk-AYJ5UCUI-X-KGLRdk.js";import"./cloneDeep-C0UUJMWd.js";import"./Skeleton-IyX7bYK-.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-SNMDrrT2.js";import"./Backdrop-65E97_Ij.js";import"./LinearProgress-CFVKCOsB.js";import"./index-DBW4l8Br.js";import"./index-CWAJBn04.js";import"./index-DjrZUmcc.js";import"./const-BP60AzNb.js";import"./index-Lv5hSf4r.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
