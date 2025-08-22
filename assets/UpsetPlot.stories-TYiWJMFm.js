import{U as L}from"./UpsetPlot-g_xixJ13.js";import{f as u}from"./index-DrxM2D3M.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DidMvgyR.js";import"./DefaultPropsProvider-BbTAaXIy.js";import"./createTheme-DbKOl4Le.js";import"./index-BJ9pKfJH.js";import"./iframe-DcThTE0h.js";import"./Button-Bj9lVpmX.js";import"./createSimplePaletteValueFilter-CezW-3Ao.js";import"./useTimeout-slEDUsKi.js";import"./ButtonBase-BlxuE7SQ.js";import"./useForkRef-CwCDw6Tr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-6SNqrwQk.js";import"./useFiles-kM8FABGC.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-CyZSxEuv.js";import"./OrientationBanner-Dc5LbzCq.js";import"./index-0NL1Bje1.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bld6dsrU.js";import"./FullWidthAlert-BFMSMQp2.js";import"./Alert-PG892XY6.js";import"./useSlot-DT6nhazi.js";import"./createSvgIcon-yacdQOod.js";import"./Close-BeMoxAY7.js";import"./IconButton-CNywqq3k.js";import"./Paper-ECHqwlk-.js";import"./useTheme-BiiYzy1E.js";import"./useTheme-a0Qu90O2.js";import"./Stack-CjIqnmGU.js";import"./extendSxProp-ebS_vFpY.js";import"./getThemeProps-BfnCJv_o.js";import"./Box-B8JfRE7I.js";import"./AlertTitle-uf64PAGB.js";import"./Typography-IeN-5oua.js";import"./index-DEhP263F.js";import"./ClickAwayListener-OfeFmDDl.js";import"./getReactElementRef-BqgwEq_c.js";import"./index-CWpDvFJ0.js";import"./index-Bqhsk9Ot.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ClsapN5l.js";import"./Tooltip-BHQhLEkq.js";import"./index-CmY-2Ldf.js";import"./useControlled-DtrKzj0c.js";import"./Popper-lL2Z-IJA.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-fbwOgxry.js";import"./QueryClientProvider-DmmVUpB6.js";import"./Link-MyZfKeO-.js";import"./Collapse-BywIXBbb.js";import"./_baseUniq-DXm80NQ7.js";import"./_Uint8Array-CoIAhxXb.js";import"./isArray-BKEAVnPW.js";import"./_getTag-Dk5jvp_8.js";import"./isEqual-DkrBvloY.js";import"./merge-Dioot0W9.js";import"./_initCloneObject-IpaGePU1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4AIkgM3.js";import"./inputBaseClasses-C0ikFJnL.js";import"./calculateFriendlyFileSize-C-z5zx8V.js";import"./CheckCircleTwoTone-BT1qsGJW.js";import"./InfoTwoTone-DAqrAouQ.js";import"./useMutation-CMD0rr9F.js";import"./dayjs.min-dT29jMjz.js";import"./chunk-AYJ5UCUI-vyUrxl2c.js";import"./cloneDeep-CfbO4KF9.js";import"./Skeleton-BoriEOuR.js";import"./SqlFunctions-C8HqQ3uk.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-Dn7PATyn.js";import"./Backdrop-C0zodV82.js";import"./LinearProgress-CCx5OmUV.js";import"./index-LrDb8piQ.js";import"./index-DkZpgHXY.js";import"./index-CM0lXx71.js";import"./const-BP60AzNb.js";import"./index-CRMBIqgs.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
