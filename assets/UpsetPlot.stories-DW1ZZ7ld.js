import{U as L}from"./UpsetPlot-jFjBxCn9.js";import{f as u}from"./index-BSkYPsoO.js";import"./jsx-runtime-DzZnOzqg.js";import"./index-C60fwWGm.js";import"./iframe-BCxQYagR.js";import"./LargeButton-6vbqJ3Ht.js";import"./DefaultPropsProvider-BuN52GuK.js";import"./createTheme-CYWnjTil.js";import"./Button-DpKUeDej.js";import"./ButtonBase-CdwHWq9j.js";import"./useTimeout-BPh3bJVB.js";import"./TransitionGroupContext-B9UPuYLo.js";import"./useForkRef-C3QGtmSj.js";import"./useIsFocusVisible-Bukda0BQ.js";import"./useEventCallback-BHMz769w.js";import"./useFiles-D8uG9HU0.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-B1FWRhdk.js";import"./OrientationBanner-w1VcnD_5.js";import"./index-BCKAJkgQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-BhSIdDPr.js";import"./FullWidthAlert-cAgO7bVX.js";import"./Alert-CbCSI8ns.js";import"./resolveComponentProps-B2e4_KER.js";import"./isHostComponent-DVu5iVWx.js";import"./createSvgIcon-m9fHyGyS.js";import"./Close-CzUlLz04.js";import"./IconButton-BNmjBrUK.js";import"./Paper-CA8X2nmN.js";import"./Stack-BisZ62cv.js";import"./getThemeProps-BYxHHPXx.js";import"./useTheme-D6IuG_uC.js";import"./Box-FDIqTSOb.js";import"./AlertTitle-B4fbjN8A.js";import"./Typography-BmZ7G-Jn.js";import"./useTheme-CypcUUjZ.js";import"./Grow-DhFF0lAh.js";import"./index-CSh4ftr3.js";import"./utils-CRAVGkRr.js";import"./ClickAwayListener-BAN580I8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-xln8x51v.js";import"./index-Cz5g-qWT.js";import"./useControlled-BMCukgAB.js";import"./useId-DjK6D95n.js";import"./Popper-DTiq_qV1.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-DlRymLBd.js";import"./utils-C1A9897Y.js";import"./Link-Cbuy5Khz.js";import"./Collapse-sufiHMck.js";import"./isNil-5_7q3K66.js";import"./_Uint8Array-BVEqVThY.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dxq-98_C.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BlXHlzVN.js";import"./_getTag-BiZXTrrh.js";import"./tinycolor-Begke6kS.js";import"./Fade-CqoyTvjP.js";import"./Skeleton-FYvl9i-x.js";import"./inputBaseClasses-Qjg2uSnc.js";import"./calculateFriendlyFileSize-CpEXOQcO.js";import"./CheckCircleTwoTone-Bmp6VC1Z.js";import"./InfoTwoTone-DsLs3GaH.js";import"./mutation-DUOv2tBk.js";import"./dayjs.min-CA1ARrMC.js";import"./chunk-AYJ5UCUI-CCXOOs5x.js";import"./cloneDeep-CbpOHm8w.js";import"./_initCloneObject-C8Pds_s0.js";import"./isEqual-SADtRp1R.js";import"./merge-QkVvsKfT.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxVSBgLJ.js";import"./react-sizeme-BVD3w2Sp.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CT5mABBt.js";import"./Backdrop-boD7Ippf.js";import"./LinearProgress-CuW7qZFf.js";const Yt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var e,i,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const _t=["Demo","ElitePortalDemo","AMPALSPortalVariant"];export{r as AMPALSPortalVariant,t as Demo,o as ElitePortalDemo,_t as __namedExportsOrder,Yt as default};
