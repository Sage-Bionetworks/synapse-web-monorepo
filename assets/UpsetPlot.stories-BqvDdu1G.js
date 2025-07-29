import{U as L}from"./UpsetPlot-BUVg674_.js";import{f as u}from"./index-Ce6tjihc.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BMztpq5H.js";import"./DefaultPropsProvider-DOcNzQ9R.js";import"./createTheme-rlsKoCaI.js";import"./index-CnKwGr1y.js";import"./iframe-BU8JiGFx.js";import"./Button-BtM-gMQx.js";import"./createSimplePaletteValueFilter-1OM3Zajm.js";import"./useTimeout-BErCNBpu.js";import"./ButtonBase-B9wNdFQY.js";import"./useForkRef-dt3m--Ki.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CaLxGmIR.js";import"./useFiles-Byx12y_p.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-fQXdVJ-c.js";import"./OrientationBanner-Y2-1qgzb.js";import"./index-Co0cmdyX.js";import"./spreadSx-CwcO6WA9.js";import"./react-DfG7gNXj.js";import"./FullWidthAlert-DzkgBCTU.js";import"./Alert-Bmd5ZNXS.js";import"./useSlot-yZIb9gbZ.js";import"./createSvgIcon-Bta1rE4w.js";import"./Close-CsGLNGYR.js";import"./IconButton-DOb2mOZL.js";import"./Paper-D6s_ZdQS.js";import"./useTheme-IAvPa7pt.js";import"./useTheme-R60J1bs9.js";import"./Stack-DBk8sxSV.js";import"./extendSxProp-CwDJNcxu.js";import"./getThemeProps-BQ8nwEqe.js";import"./Box-BBXWKHrY.js";import"./AlertTitle-DBXhSchx.js";import"./Typography-eceePh8m.js";import"./index-Bqlegoam.js";import"./ClickAwayListener-BggZ74LF.js";import"./getReactElementRef-qmrSwM0o.js";import"./index-CrVRpWIU.js";import"./index-qzqpRhr6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BmG_Rl5o.js";import"./Tooltip-CcQtZRnu.js";import"./index-C6Kpllp9.js";import"./useControlled-7Ocvyg46.js";import"./Popper-Bjhq1YSD.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DUVBYySx.js";import"./QueryClientProvider-B34cSsln.js";import"./Link-BqIyIHSp.js";import"./Collapse-B35jjpe2.js";import"./_baseUniq-8lFMhfOv.js";import"./_Uint8Array-DDgzCeGk.js";import"./isArray-C-J5KbEh.js";import"./_getTag-ByxgOAps.js";import"./isEqual-leovmj5N.js";import"./merge-Bft55LJ1.js";import"./_initCloneObject-Dnsp8Jos.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D7Joq1MA.js";import"./inputBaseClasses-BquIgVUE.js";import"./calculateFriendlyFileSize-DlivtD4b.js";import"./CheckCircleTwoTone-BvbSxHSY.js";import"./InfoTwoTone-DZpdjobH.js";import"./useMutation-Czr-HM9X.js";import"./dayjs.min-CJD9nsEW.js";import"./chunk-AYJ5UCUI-DiOLbsSA.js";import"./cloneDeep-BYe4LT1C.js";import"./Skeleton-Clk01pg8.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BLkwXWkS.js";import"./Backdrop-ChQyvWMa.js";import"./LinearProgress-DVoRy197.js";import"./index-DyayjY64.js";import"./index-BewRbGU4.js";import"./index-BDyl5Tcj.js";import"./const-BP60AzNb.js";import"./index-CbKWrmhA.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
