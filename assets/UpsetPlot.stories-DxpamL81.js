import{U as L}from"./UpsetPlot-BJOKvYZP.js";import{f as u}from"./index-lsjXAPnY.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-n2x42PeP.js";import"./DefaultPropsProvider-CBzoMWiB.js";import"./createTheme-Dh0f-PI4.js";import"./index-CHVMFH7M.js";import"./iframe-ClVMoJvW.js";import"./Button-D88emua3.js";import"./createSimplePaletteValueFilter-CJ4RsiJ_.js";import"./useTimeout-_MPtwmvh.js";import"./ButtonBase-C6tiUzg6.js";import"./useForkRef-DoDgdNBT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DssauoHK.js";import"./useFiles-CoUOOnVS.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-aXu1tDOr.js";import"./OrientationBanner-BWBFJ0yy.js";import"./index-e6oeiiS4.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNW0viHv.js";import"./FullWidthAlert-D-Y85AGg.js";import"./Alert-DBkyC7v2.js";import"./useSlot-CPBRkNk2.js";import"./createSvgIcon-1VmyitDI.js";import"./Close-DT5SYQ5j.js";import"./IconButton-CQJFqUxJ.js";import"./Paper-CscxC-nZ.js";import"./useTheme-xwvFlxes.js";import"./useTheme-CXK0bmkJ.js";import"./Stack-DNPip1HK.js";import"./extendSxProp-DlCy7HXm.js";import"./getThemeProps-Bw20A-vb.js";import"./Box-3JYTO1WU.js";import"./AlertTitle-T3qK4lpH.js";import"./Typography-CceGoqtm.js";import"./index-zQj8wIhf.js";import"./ClickAwayListener-BYjt3j0D.js";import"./getReactElementRef-ERmAiXQ4.js";import"./index-BxoVh5lP.js";import"./index-D0ejypGL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BlQIFe45.js";import"./Tooltip-Bsspg9XV.js";import"./index-YAqICTwX.js";import"./useControlled-CMLV-P_i.js";import"./Popper-jRWuHQW0.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DRP9e10O.js";import"./QueryClientProvider-eW7_5tl_.js";import"./Link-DXQkQAZf.js";import"./Collapse-CQU-jh41.js";import"./_baseUniq-ChE4L4Qu.js";import"./_Uint8Array-W6b_8ZQL.js";import"./isArray-D2RVMlgB.js";import"./_getTag-C3EbY4Ni.js";import"./isEqual-CYsEo0q4.js";import"./merge-C0nipVuY.js";import"./_initCloneObject-CMOQzCqQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2i4us37.js";import"./inputBaseClasses-DwHiXH96.js";import"./calculateFriendlyFileSize-BnpOZOH-.js";import"./CheckCircleTwoTone-DFLozXHx.js";import"./InfoTwoTone-DjBjCg4X.js";import"./useMutation-Db9mxQyg.js";import"./dayjs.min-BdWLMgSP.js";import"./chunk-AYJ5UCUI-6ko_yZTB.js";import"./cloneDeep-BpRUwq2a.js";import"./Skeleton-CEGItXWQ.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-OYnuucOF.js";import"./Backdrop-CKvDIej3.js";import"./LinearProgress-DJMgDffj.js";import"./index-C_gF_fa2.js";import"./index-BrA6C1vA.js";import"./index--fYUFyEN.js";import"./const-BP60AzNb.js";import"./index-D4t0_WfQ.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
