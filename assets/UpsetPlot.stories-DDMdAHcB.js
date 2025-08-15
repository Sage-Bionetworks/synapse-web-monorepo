import{U as L}from"./UpsetPlot-PMdhWULi.js";import{f as u}from"./index-C6xN4RAu.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Bmn9MO6i.js";import"./DefaultPropsProvider-H9_8ZvTU.js";import"./createTheme-D0pL0qQP.js";import"./index-CcrsiwgI.js";import"./iframe-DkAN1I_g.js";import"./Button-xIVjleXs.js";import"./createSimplePaletteValueFilter-CdCRSs_B.js";import"./useTimeout-KPLmy49i.js";import"./ButtonBase-CixOXMZC.js";import"./useForkRef-CWW1kaxd.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D1i1Xybt.js";import"./useFiles-BQEO-69M.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-ByJ4SBiX.js";import"./OrientationBanner-BUQ62TYj.js";import"./index-BDqCLLtG.js";import"./spreadSx-CwcO6WA9.js";import"./react-BSbW4s-G.js";import"./FullWidthAlert-5Ne4J_9o.js";import"./Alert-xBWLXl1Y.js";import"./useSlot-CDWcpGsY.js";import"./createSvgIcon-EFbRc6ub.js";import"./Close-mR81D45w.js";import"./IconButton-B-H21jSi.js";import"./Paper-C5Va8tEQ.js";import"./useTheme-Bv7DV3GC.js";import"./useTheme-C9aeDpm1.js";import"./Stack-DB53MkM8.js";import"./extendSxProp-BOrFJbhA.js";import"./getThemeProps-CqvZsTgu.js";import"./Box-5WPD-AqJ.js";import"./AlertTitle-BRV0cPHG.js";import"./Typography-Blcis-6R.js";import"./index-D79hvqRM.js";import"./ClickAwayListener-BOUF5eQl.js";import"./getReactElementRef-DODCH2Uv.js";import"./index-FmU7P8-W.js";import"./index-BQKvVLPL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGALCZc1.js";import"./Tooltip-DW8zSJ13.js";import"./index-EWxYWF3M.js";import"./useControlled-C9ig_TM1.js";import"./Popper-D-2uPAjO.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Ca66mrDJ.js";import"./QueryClientProvider-DhcOouJr.js";import"./Link-JpAHplQA.js";import"./Collapse-CoBc5Um2.js";import"./_baseUniq-DWDW-Ywk.js";import"./_Uint8Array-DP_PQern.js";import"./isArray-L2CpAKpI.js";import"./_getTag-DMmtDXrU.js";import"./isEqual-CxigYvVh.js";import"./merge-C9M7mJ3m.js";import"./_initCloneObject-16YS23Lt.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BlJ0L8LZ.js";import"./inputBaseClasses-DSbshDwR.js";import"./calculateFriendlyFileSize-D-Ld3tQe.js";import"./CheckCircleTwoTone-Co6ze5Ep.js";import"./InfoTwoTone-S22d2WfP.js";import"./useMutation-C2MhW39A.js";import"./dayjs.min-CYWw-vQ3.js";import"./chunk-AYJ5UCUI-HMrZDw_1.js";import"./cloneDeep-4lWfUU40.js";import"./Skeleton-CNNLcJzv.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BI9YY1nz.js";import"./Backdrop-C_vqHE7p.js";import"./LinearProgress-BqNvkYz6.js";import"./index-DdwCbwfJ.js";import"./index-8oFTIowm.js";import"./index-Itoin5aN.js";import"./const-BP60AzNb.js";import"./index-O3BhH0_1.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
