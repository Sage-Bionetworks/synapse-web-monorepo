import{U as L}from"./UpsetPlot-BTNAFlUS.js";import{f as u}from"./index-D3Mzfedv.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-Cq_M_UcJ.js";import"./DefaultPropsProvider-GBlbFlKV.js";import"./createTheme-PLUvd-LB.js";import"./index-COg4wEFX.js";import"./iframe-dkyN7dEI.js";import"./Button-BEK3yIRk.js";import"./createSimplePaletteValueFilter-DQAv8etW.js";import"./useTimeout-DsoKzCC_.js";import"./ButtonBase-B-pzCcmV.js";import"./useForkRef-DVG_98-d.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BOr0l0Up.js";import"./useFiles-DJF03vT6.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-DHm6zyHz.js";import"./OrientationBanner-CEd_08H_.js";import"./index-Dp5GpsUb.js";import"./spreadSx-CwcO6WA9.js";import"./react-DJPd7xe3.js";import"./FullWidthAlert-D308uyri.js";import"./Alert-CrnmS790.js";import"./useSlot-CgItUNQr.js";import"./createSvgIcon-bY3B4qG0.js";import"./Close-CssOFyTt.js";import"./IconButton-BU7f1Bop.js";import"./Paper-CvFCa0d1.js";import"./useTheme-gzy1xqzN.js";import"./useTheme-CFs5QfCM.js";import"./Stack-DIxxvt5K.js";import"./extendSxProp-CLbKWQ-Q.js";import"./getThemeProps-DtRmK1JZ.js";import"./Box--vhDeXql.js";import"./AlertTitle-O6rhtZBG.js";import"./Typography-CgOlfgGT.js";import"./index-AywcLrDq.js";import"./ClickAwayListener-D7ZeQ8Mu.js";import"./getReactElementRef-BFjo364g.js";import"./index-HXW73S9Q.js";import"./index-5aEMNfv4.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C9D6P-BJ.js";import"./Tooltip-Cc1glevZ.js";import"./index-DonYfH0W.js";import"./useControlled-FM6R-wlx.js";import"./Popper-CVAa6830.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-DY1iTZwT.js";import"./QueryClientProvider-BNCmLqU6.js";import"./Link-CPDLC02_.js";import"./Collapse-U-DJwYCj.js";import"./_baseUniq-KIcBkx8v.js";import"./_Uint8Array-BPlFN3D7.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Efl7M4U8.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CHpGGJyd.js";import"./isEqual-BmRicIYy.js";import"./merge-ChNrRbcj.js";import"./_initCloneObject-YjrnLSjM.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cb3fWTVd.js";import"./inputBaseClasses-CyYVaNtx.js";import"./calculateFriendlyFileSize-DuKWcJdY.js";import"./CheckCircleTwoTone-1ZsT9niW.js";import"./InfoTwoTone-D-MOG8J1.js";import"./useMutation-DwgNcG58.js";import"./dayjs.min-s3rhTWCS.js";import"./chunk-AYJ5UCUI-kgQmGlEV.js";import"./cloneDeep-ByISa9ma.js";import"./Skeleton-BSFWdzll.js";import"./SqlFunctions-CqOxgBqv.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-D8s_h3Qq.js";import"./Backdrop-C7kGPy-6.js";import"./LinearProgress-DuCmP9C9.js";import"./index-BsF198Ed.js";import"./index-DNqXgvnC.js";import"./index-i1yy9yor.js";import"./const-BP60AzNb.js";import"./index-CcUgv745.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
