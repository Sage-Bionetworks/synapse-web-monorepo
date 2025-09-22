import{U as L}from"./UpsetPlot-DPQvYvrg.js";import{f as u}from"./index-C3Mf4AvV.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Eg39X0uA.js";import"./DefaultPropsProvider-BOBWKWsP.js";import"./createTheme-B8tVnoKa.js";import"./index-DWtRjqxE.js";import"./iframe-dC7zyD38.js";import"./Button-BsTgAid7.js";import"./createSimplePaletteValueFilter-CI1PPbZz.js";import"./useTimeout-C10Fy58h.js";import"./ButtonBase-eKGtCu5K.js";import"./useForkRef-BsHVNaER.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bepf3adF.js";import"./useFiles-dWGrqz_D.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CTIB33D3.js";import"./OrientationBanner-CQFR5l9R.js";import"./index-BMgqcLmn.js";import"./spreadSx-CwcO6WA9.js";import"./react-DSUFze6-.js";import"./FullWidthAlert-mM8bmdFl.js";import"./Alert-CO4LRSIc.js";import"./useSlot-Bbu2_Uh5.js";import"./createSvgIcon-BgawE0cA.js";import"./Close-ZUvqdUvf.js";import"./IconButton-BYWzvY5r.js";import"./Paper-BN7kDLUZ.js";import"./useTheme-Bqfldhhz.js";import"./useTheme-44ZyrYIV.js";import"./Stack-B_1G5Dgc.js";import"./extendSxProp-B1uoARpz.js";import"./getThemeProps-DtfQR3gl.js";import"./Box-CJwkuUVc.js";import"./AlertTitle-Dny0ic5F.js";import"./Typography-8YdQWFwx.js";import"./index-6HQiBBz4.js";import"./ClickAwayListener-cCk8f9_L.js";import"./getReactElementRef-DFZw1bWU.js";import"./index-DWZIDMAz.js";import"./index-DHmZPXnJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-egikrnTN.js";import"./Tooltip-ChGVg_eO.js";import"./index-Bh9Mm5w5.js";import"./useControlled-jIUY62E0.js";import"./Popper-8zb1kIwC.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BJdHVLrD.js";import"./QueryClientProvider-CUCt5UMY.js";import"./Link-9MVZDgxR.js";import"./Collapse-DcRUmTWs.js";import"./_baseUniq-DexRrmkQ.js";import"./_Uint8Array-CgwNuqWK.js";import"./isArray-Dvp0SrYH.js";import"./_getTag-yEmMQGSX.js";import"./isEqual-BrJ8BCp_.js";import"./merge-BVgGw762.js";import"./_initCloneObject-BO9WrdaY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-6tQ1BYQE.js";import"./inputBaseClasses-BBU_2lni.js";import"./calculateFriendlyFileSize-BqN9629y.js";import"./CheckCircleTwoTone-puf-7GIZ.js";import"./InfoTwoTone-Cw0LVZ8W.js";import"./useMutation-BRVUSdsV.js";import"./dayjs.min-P2dLUj27.js";import"./chunk-AYJ5UCUI-DaTh8-5G.js";import"./cloneDeep-C2Thqa1j.js";import"./Skeleton-DbEDjigm.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DaC1zK-z.js";import"./Backdrop-aRG8-Yyh.js";import"./LinearProgress-C8sJmQ4J.js";import"./index-CBat9Csj.js";import"./index-CGaJIgCf.js";import"./index-BYxC4md0.js";import"./const-BP60AzNb.js";import"./index-Caz4oPyo.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
