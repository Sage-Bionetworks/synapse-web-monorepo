import{U as L}from"./UpsetPlot-DWmMUJBy.js";import{f as u}from"./index-Cy1UPa4T.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BT9qPZkZ.js";import"./DefaultPropsProvider-DkB9qiCW.js";import"./createTheme-DbTVx9wk.js";import"./index-DlbKFsS_.js";import"./iframe-0wVslN7b.js";import"./Button-Cw1keIu4.js";import"./createSimplePaletteValueFilter-B2_2URZH.js";import"./useTimeout-DZY_Ldn6.js";import"./ButtonBase-BSSfV59K.js";import"./useForkRef-dmtj3swN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DwsvCZV6.js";import"./useFiles-ChepUPeC.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-uuZQ07ZG.js";import"./OrientationBanner-BMTtxCRZ.js";import"./index-DZwoqB70.js";import"./spreadSx-CwcO6WA9.js";import"./react-_2U-C0GU.js";import"./FullWidthAlert-DM2vrgRA.js";import"./Alert-ByvuzRIz.js";import"./useSlot-D2G1tdG6.js";import"./createSvgIcon-D3A_t-T8.js";import"./Close-C835DunE.js";import"./IconButton-CdNa3UAM.js";import"./Paper-CmTDa9ue.js";import"./useTheme-CmWvFfrN.js";import"./useTheme-BkeJ3rG0.js";import"./Stack-CICCoKMV.js";import"./extendSxProp-CkTWBxQk.js";import"./getThemeProps-CDavjzIJ.js";import"./Box-C41TTZyw.js";import"./AlertTitle-CpyBs_uL.js";import"./Typography-QhlHI-oV.js";import"./index-Dg0Jby1P.js";import"./ClickAwayListener-M7aD0F4C.js";import"./getReactElementRef-C_kE-ach.js";import"./index-j7g_Ug4x.js";import"./index-DZsggVEU.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BWTyqGfK.js";import"./Tooltip-C-YsDLR5.js";import"./index-B_X4U_Mc.js";import"./useControlled-fzollbDs.js";import"./Popper-jZJ7QXLK.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DYS1_2Hc.js";import"./QueryClientProvider-BI7jbFXj.js";import"./Link-CxT6ZAtC.js";import"./Collapse-DBT4GF4U.js";import"./_baseUniq-DbxKqsNd.js";import"./_Uint8Array-CnaUAbwU.js";import"./isArray-B4fJuMgT.js";import"./_getTag-Bdvo1j8R.js";import"./isEqual-C0jfZ1nU.js";import"./merge-DTEhEQRY.js";import"./_initCloneObject-BHwFfX6u.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-T_moeo9f.js";import"./inputBaseClasses-BD6lXioz.js";import"./calculateFriendlyFileSize-eluljBmG.js";import"./CheckCircleTwoTone-BIDizvcR.js";import"./InfoTwoTone-BUbbgrPF.js";import"./useMutation-BU-UzXwG.js";import"./dayjs.min-twCecxUk.js";import"./chunk-AYJ5UCUI-BjaXvkqd.js";import"./cloneDeep-Cj0ZoDZo.js";import"./Skeleton-CZTbWp2s.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DzXCtpYn.js";import"./Backdrop-CYwR1bds.js";import"./LinearProgress-Bndq1ODW.js";import"./index-Btaj5JXe.js";import"./index-CNxkZLQg.js";import"./index-C-S2jY7y.js";import"./const-BP60AzNb.js";import"./index-CTr9ZeU2.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
