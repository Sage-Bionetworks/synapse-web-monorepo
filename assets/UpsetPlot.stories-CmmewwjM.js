import{U as L}from"./UpsetPlot-BE7QFh8d.js";import{f as u}from"./index-BbmQXit1.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BG74hhGN.js";import"./DefaultPropsProvider-p-VvPMcS.js";import"./createTheme-Ci6bVZs8.js";import"./index-BjYqh8CN.js";import"./iframe-GZmPJQmw.js";import"./Button-RzPtlbLb.js";import"./createSimplePaletteValueFilter-CRAp9ozw.js";import"./useTimeout-oOEcrwX8.js";import"./ButtonBase-CdN_s3us.js";import"./useForkRef-DjK00V5X.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwcuRZZH.js";import"./useFiles-ChJXuE_G.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BgVWTBvG.js";import"./OrientationBanner-CgO-jgpe.js";import"./index-BVMLTliA.js";import"./spreadSx-CwcO6WA9.js";import"./react-DYf9vH9v.js";import"./FullWidthAlert-CrgL78dl.js";import"./Alert-B8BaFiwn.js";import"./useSlot-DjiMerLm.js";import"./createSvgIcon-Cg3F_JaT.js";import"./Close-DQp4Ab7t.js";import"./IconButton-BDNvR3N2.js";import"./Paper-C9Te-8_v.js";import"./useTheme-Chrl7Xny.js";import"./useTheme-B9Eo60Il.js";import"./Stack-wnfKJykl.js";import"./useThemeProps-DqWLfYoN.js";import"./getThemeProps-DBSpe4l4.js";import"./extendSxProp-D59BLFsM.js";import"./Box-Ci2u2n8R.js";import"./AlertTitle-DXxtItD6.js";import"./Typography-C4bCrnhF.js";import"./index-BVOHcrQX.js";import"./ClickAwayListener-BZ6LIgVx.js";import"./getReactElementRef-DMDF8VWZ.js";import"./index-CRKwKLDy.js";import"./index-De9pklvj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DV3m8xn_.js";import"./Tooltip-DS2_bocJ.js";import"./index-CqDcjKYL.js";import"./useControlled-D7Hv9h3B.js";import"./Popper-BD3sWAZF.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-Dnr6EabU.js";import"./QueryClientProvider-BT5rH4_G.js";import"./Link-BXPkqIaF.js";import"./Collapse-DXsRlhM4.js";import"./_baseUniq-DxBf4Di9.js";import"./_Uint8Array-CkNwlXWO.js";import"./isArray-CVqdkdHi.js";import"./_getTag-k5zGXYGR.js";import"./isEqual-CM_V142D.js";import"./noop-DX6rZLP_.js";import"./merge-CjHAQmH1.js";import"./_initCloneObject-luMxzLHE.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cbte7BvX.js";import"./inputBaseClasses-BD4tWqAD.js";import"./calculateFriendlyFileSize-B18g-3Th.js";import"./CheckCircleTwoTone-BchYLEzy.js";import"./InfoTwoTone-BazwzvUl.js";import"./useMutation-DF0qP4Yb.js";import"./dayjs.min-DxdUSqs4.js";import"./chunk-AYJ5UCUI-Y88dghcf.js";import"./cloneDeep-DALKoszi.js";import"./Skeleton-BgJRY0_p.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DAUSuiup.js";import"./Backdrop-DuXz0Gww.js";import"./LinearProgress-DvqrJqMd.js";import"./index-C4ck_ZNu.js";import"./index-DJMzNDHZ.js";import"./index-B8YEIttr.js";import"./const-BP60AzNb.js";import"./index-DtcxtKF2.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
