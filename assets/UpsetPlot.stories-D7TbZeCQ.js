import{U as L}from"./UpsetPlot-Y8o3Mc4_.js";import{f as u}from"./index-DXcY5-mo.js";import"./jsx-runtime-CguOVfHD.js";import"./index-BPLjgkvc.js";import"./iframe-HsP_CKag.js";import"./LargeButton-Dd9mluWj.js";import"./DefaultPropsProvider-BFT5Y31i.js";import"./createTheme-DSQpJzsh.js";import"./Button-txH2CBk9.js";import"./createSimplePaletteValueFilter-CQ41cGYC.js";import"./useTimeout-Iw5I26ua.js";import"./ButtonBase-Dh8mOJ4H.js";import"./useForkRef-C8XUjv9b.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CiFyp6L0.js";import"./useFiles-Dg7eR79m.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-BxpxSwZg.js";import"./OrientationBanner-C0kyK34I.js";import"./index-9yjLkDDq.js";import"./spreadSx-CwcO6WA9.js";import"./react-tnRwdzGP.js";import"./FullWidthAlert-D6eLCa6A.js";import"./Alert-B5AVurxH.js";import"./useSlot-IIo6VvIg.js";import"./createSvgIcon-dnX2B-sC.js";import"./Close-SfuOdAFJ.js";import"./IconButton-BwxFgBKe.js";import"./Paper-D6ksFxPp.js";import"./useTheme-D_FaDKRS.js";import"./useTheme-Bz8qIJiG.js";import"./Stack-CZLd3YjP.js";import"./extendSxProp-BMJn0HH0.js";import"./getThemeProps-Dfy_7JRT.js";import"./Box-ov5DWmLq.js";import"./AlertTitle-vhhceDVB.js";import"./Typography-B2Whpmc6.js";import"./index-CT6kAEcw.js";import"./ClickAwayListener-D9ee_HqF.js";import"./getReactElementRef-D-mRAnyG.js";import"./index-BLYj9l4G.js";import"./index-D4coSwQD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAMsuofr.js";import"./Tooltip-C_eS1gRK.js";import"./index-6eOWtwI5.js";import"./useControlled-CCxX1tZW.js";import"./Popper-n-GOgUYn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-Cpcl1qQp.js";import"./utils-DLVmLcJd.js";import"./Link-p85Y9p0X.js";import"./Collapse-C-5hsue_.js";import"./isNil-DexuwFSn.js";import"./_Uint8Array-RSwHdnNb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BpJD8AE3.js";import"./isArray-Dxzbedgu.js";import"./isEqual-B_PFPNDj.js";import"./_getTag-BVfIJeFy.js";import"./tinycolor-Begke6kS.js";import"./Fade-C0pPIw3E.js";import"./inputBaseClasses-DajRJ63n.js";import"./calculateFriendlyFileSize-DHNphkMw.js";import"./CheckCircleTwoTone-CzmQ4BzX.js";import"./InfoTwoTone-DKYXWrg4.js";import"./useMutation-BZ9E3-1P.js";import"./dayjs.min-Dv3fukef.js";import"./chunk-AYJ5UCUI-DoXlqfXr.js";import"./cloneDeep-B6usTqsl.js";import"./_initCloneObject-D0FHna8U.js";import"./Skeleton-CB7phFqE.js";import"./merge-CGet5vcJ.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-C0P3x86-.js";import"./Backdrop-CR2So-tG.js";import"./LinearProgress-BUosRv5q.js";import"./index-BUaVpG1v.js";import"./index-CloFYsME.js";import"./index-s6ll5N7b.js";import"./const-Doag8klc.js";import"./index-BDC0mQW3.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
