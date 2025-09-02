import{U as L}from"./UpsetPlot-BfMWcfT8.js";import{f as u}from"./index-DS9dZfQo.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-COEw6_Ge.js";import"./DefaultPropsProvider-DUqZ9kBw.js";import"./createTheme-D21a6jVE.js";import"./index-Dvc8DXNj.js";import"./iframe-BwvIV_wz.js";import"./Button-CuRvemX1.js";import"./createSimplePaletteValueFilter-slgZ3hH6.js";import"./useTimeout-n8UuqgZm.js";import"./ButtonBase-DLjfdFYs.js";import"./useForkRef-Dhz7ykZQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BTmW-fZF.js";import"./useFiles-CKcUsXxo.js";import"./VerificationSubmission-CDh9xETu.js";import"./SynapseConstants-f1HHzz_j.js";import"./OrientationBanner-m-cOM088.js";import"./index-Dr34NRIV.js";import"./spreadSx-CwcO6WA9.js";import"./react-PzVUkSXC.js";import"./FullWidthAlert-CUjAN9qZ.js";import"./Alert-BpXwWVSg.js";import"./useSlot-DJuYx4Uy.js";import"./createSvgIcon-DW48BYr9.js";import"./Close-DwkY6Qiq.js";import"./IconButton-BPZiwUaT.js";import"./Paper-ttVskSGJ.js";import"./useTheme-Dmw3ER-A.js";import"./useTheme-Dc8HS8-T.js";import"./Stack-DrKhoQrj.js";import"./extendSxProp-B4WGgZTT.js";import"./getThemeProps-B50kq3gk.js";import"./Box-CTY3I0FB.js";import"./AlertTitle-gzg991Kd.js";import"./Typography-BhPtSSz2.js";import"./index-BLJFs8HZ.js";import"./ClickAwayListener-BucHVlrs.js";import"./getReactElementRef-IfbnFzgG.js";import"./index-CqCBL84x.js";import"./index--qtQ6bhr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CDAsFndF.js";import"./Tooltip-snkrOiqJ.js";import"./index-DxUDSVJR.js";import"./useControlled-IlM_E7l9.js";import"./Popper-C8rE9mDK.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-Bup0EY49.js";import"./QueryClientProvider-ChpI_0EU.js";import"./Link-CLvRSdAZ.js";import"./Collapse-MKzszx7X.js";import"./_baseUniq-WnlZjegG.js";import"./_Uint8Array-DayFYAX9.js";import"./isArray-9GOQtFcp.js";import"./_getTag-BkCGiN6B.js";import"./isEqual-Dks0Mg8j.js";import"./merge-Dy633DfB.js";import"./_initCloneObject-Dqf9gVZ1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bok-lFku.js";import"./inputBaseClasses-AHLU7mnu.js";import"./calculateFriendlyFileSize-tudez9ms.js";import"./CheckCircleTwoTone-B4GsZuMD.js";import"./InfoTwoTone-cRma8_X6.js";import"./useMutation-CnqeAjOr.js";import"./dayjs.min-DtZNiT87.js";import"./chunk-AYJ5UCUI-C5dJESas.js";import"./cloneDeep-DozhuijG.js";import"./Skeleton-B2H4n811.js";import"./SqlFunctions-B3tep9ZC.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B4Vaf4eS.js";import"./Backdrop-DGxR8xHs.js";import"./LinearProgress-BAciHsOu.js";import"./index-CB3f3xJ_.js";import"./index-Cf_LoHOK.js";import"./index-D1ZTunFL.js";import"./const-BP60AzNb.js";import"./index-D_oSDOVV.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
