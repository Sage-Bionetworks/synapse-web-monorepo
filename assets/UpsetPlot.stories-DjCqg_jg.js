import{U as L}from"./UpsetPlot-B_g104y0.js";import{f as u}from"./index-9ggvEdbh.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-CfJed8ZP.js";import"./DefaultPropsProvider-IokPXP0z.js";import"./createTheme-Bs3gvIc1.js";import"./index-C7A9hLup.js";import"./iframe-DYHn9FoU.js";import"./Button-DjtaKSRa.js";import"./createSimplePaletteValueFilter-miHcWXXO.js";import"./useTimeout-O_ZJW0DC.js";import"./ButtonBase-Vh4sHaAq.js";import"./useForkRef-jebBSqDW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DP1zvZ6B.js";import"./useFiles-BQgeR-8x.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-BNgiZuII.js";import"./OrientationBanner-27sPHSvY.js";import"./index-DlQ8Rxo6.js";import"./spreadSx-CwcO6WA9.js";import"./react-9RKrzU1j.js";import"./FullWidthAlert-CBJpLxoh.js";import"./Alert-Dkq6FKuF.js";import"./useSlot-Beyp9NpN.js";import"./createSvgIcon-BCzRTN0-.js";import"./Close-UNtzqSQ6.js";import"./IconButton-CpIHqhTv.js";import"./Paper-rl2XeBHU.js";import"./useTheme-CjdEEB0o.js";import"./useTheme-CLzZjeP0.js";import"./Stack-cBDUEwoU.js";import"./extendSxProp-DVhrI1Yp.js";import"./getThemeProps-CU5Sm-rK.js";import"./Box-DRej04OG.js";import"./AlertTitle-DdK7THqv.js";import"./Typography-RsNMpAQC.js";import"./index-BO4R3ads.js";import"./ClickAwayListener-0ZoK3Jws.js";import"./getReactElementRef-DVxyBdsm.js";import"./index-BFMqbgTj.js";import"./index-BEbzCxs1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DNZW_rFC.js";import"./Tooltip--Jyxve2u.js";import"./index-C6nIQqN4.js";import"./useControlled-BdpGnz5r.js";import"./Popper-BeZ4pCzN.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CFCjlTK1.js";import"./QueryClientProvider-BvIlhMXk.js";import"./Link-CPYMTjHA.js";import"./Collapse-lrzrXUVs.js";import"./_baseUniq-DBnix07j.js";import"./_Uint8Array-CRbAemZL.js";import"./isArray-C1rE2XmZ.js";import"./_getTag-C5r8l2eL.js";import"./isEqual-DXuy0wpW.js";import"./merge-BG42TlLL.js";import"./_initCloneObject-Cnn1Dw6z.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CLwgXDNC.js";import"./inputBaseClasses-CZCwbHKV.js";import"./calculateFriendlyFileSize-DzX2RpVC.js";import"./CheckCircleTwoTone-CdnWGJLw.js";import"./InfoTwoTone-BKQBqHsa.js";import"./useMutation-XRBeUDdd.js";import"./dayjs.min-BDm4eXvA.js";import"./chunk-AYJ5UCUI-DnO7bFxv.js";import"./cloneDeep-Yf7z2hzg.js";import"./Skeleton-BC1ZrhQc.js";import"./SqlFunctions-B-lgMRiM.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C4y6naIb.js";import"./Backdrop-BKWjRKYM.js";import"./LinearProgress-DTVNVxJS.js";import"./index-DxMKiuu_.js";import"./index-Dgc9UNEY.js";import"./index-DVYwVswa.js";import"./const-BP60AzNb.js";import"./index-Bxm-yFB4.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
