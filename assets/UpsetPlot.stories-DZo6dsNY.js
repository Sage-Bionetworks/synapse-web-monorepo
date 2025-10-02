import{U as L}from"./UpsetPlot-CfYNSg-7.js";import{f as u}from"./index-CH4HMHMY.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-BI67UxHp.js";import"./DefaultPropsProvider-D8qfDHRM.js";import"./createTheme-BEG23Ggb.js";import"./index-DhkrNZP9.js";import"./iframe-7mSOVxB4.js";import"./Button-Dze9PDvM.js";import"./createSimplePaletteValueFilter-DZHcTxQ7.js";import"./useTimeout-Dsks5eoH.js";import"./ButtonBase-ChUbS1mW.js";import"./useForkRef-DUgLIqtH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BSbUa5om.js";import"./useFiles-C5GiG6iR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DR3ZY5to.js";import"./OrientationBanner-DTwv04dt.js";import"./index-Cttw0ji8.js";import"./spreadSx-CwcO6WA9.js";import"./react-DNGujwIQ.js";import"./FullWidthAlert-DqSJWw0w.js";import"./Alert-Bcu7YUGe.js";import"./useSlot-Cgv1l8f6.js";import"./createSvgIcon-qNmQe6T_.js";import"./Close-BDpIkTE7.js";import"./IconButton-DUJ3IKSK.js";import"./Paper-BytkjR6o.js";import"./useTheme-DCbcQagQ.js";import"./useTheme-CJKuA382.js";import"./Stack-ChEyF6Lm.js";import"./extendSxProp-k92RHa9w.js";import"./getThemeProps-Bvz_Yv-K.js";import"./Box-GerujGRq.js";import"./AlertTitle-C1GLrwYc.js";import"./Typography-N2x2sTVo.js";import"./index-mhILb2ra.js";import"./ClickAwayListener-tdz5sGJK.js";import"./getReactElementRef-DX99WyYx.js";import"./index-lsxcFOrl.js";import"./index-DLyeVumG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-j8gNrfr7.js";import"./Tooltip-DytzHFyA.js";import"./index-DCR3wo31.js";import"./useControlled-qZ-DKamJ.js";import"./Popper-DajLVUbX.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-IRTxbv8J.js";import"./QueryClientProvider-BvgHDx5W.js";import"./Link-C0xIS8o2.js";import"./Collapse-CMsDtAkp.js";import"./_baseUniq-BNFfhkx0.js";import"./_Uint8Array-CYqUimyu.js";import"./isArray-DyXgv0Dp.js";import"./_getTag-B054JqLn.js";import"./isEqual-CZijml2n.js";import"./merge-DLdcbeqX.js";import"./_initCloneObject-D3LEGgk4.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DivBPYoP.js";import"./inputBaseClasses-DS1hE1Od.js";import"./calculateFriendlyFileSize-CRiqTUTG.js";import"./CheckCircleTwoTone-h7KWLQ_B.js";import"./InfoTwoTone-DiY69-1L.js";import"./useMutation-Bd72eRV1.js";import"./dayjs.min-DzXHqPwj.js";import"./chunk-AYJ5UCUI-rnSQre8c.js";import"./cloneDeep-qVXU3mzn.js";import"./Skeleton-BELkBN0u.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BAj9HGR3.js";import"./Backdrop-J3wN-_xe.js";import"./LinearProgress-DlHpbgZk.js";import"./index-MAK-S1-d.js";import"./index-EsDONBU0.js";import"./index-DOnTJQSw.js";import"./const-BP60AzNb.js";import"./index-B_hd9_Ss.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
