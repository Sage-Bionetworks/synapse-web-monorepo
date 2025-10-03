import{U as L}from"./UpsetPlot-CFGzqHUN.js";import{f as u}from"./index-CCexbfTg.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-DnwscB5C.js";import"./DefaultPropsProvider-DGSUwyrZ.js";import"./createTheme-BH_THfxa.js";import"./index-BETkQVTs.js";import"./iframe-DR00MtQa.js";import"./Button-CpvAnFlJ.js";import"./createSimplePaletteValueFilter-BKXYzHpo.js";import"./useTimeout-C_0QQQPC.js";import"./ButtonBase-C8k3v_8l.js";import"./useForkRef-C4r6o0mS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C6LFjy3p.js";import"./useFiles-DFd5b1XQ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DnnDD9S4.js";import"./OrientationBanner-BKD3mXs2.js";import"./index-Bukyj4O5.js";import"./spreadSx-CwcO6WA9.js";import"./react-COIuWRyg.js";import"./FullWidthAlert-lZwpVcfv.js";import"./Alert-PoDNxqsT.js";import"./useSlot-DO3YmjNd.js";import"./createSvgIcon-Uprnm4UY.js";import"./Close-BN20Ndtb.js";import"./IconButton-BMqupDK0.js";import"./Paper-DjjbmjWh.js";import"./useTheme-DFG--JId.js";import"./useTheme-m71gqaUa.js";import"./Stack-B_EGg9Xt.js";import"./useThemeProps-O0oaPQsO.js";import"./getThemeProps-4QQKnSwF.js";import"./extendSxProp-CpK08kBd.js";import"./Box-B9ThoOBq.js";import"./AlertTitle-CI7HLN44.js";import"./Typography-COE6duH8.js";import"./index-DBYQapkN.js";import"./ClickAwayListener-ImhnVk8c.js";import"./getReactElementRef-Bz4vM71q.js";import"./index-CmnwMZoC.js";import"./index-Cxyl9LGV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DXq3JD5F.js";import"./Tooltip-Cy35VhK6.js";import"./index-DJuPeuUq.js";import"./useControlled-CHLGFfK2.js";import"./Popper-MqYOJopP.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DS0RhEjV.js";import"./QueryClientProvider-CsYE3JnP.js";import"./Link-BvOhnWpV.js";import"./Collapse-jSswtkK8.js";import"./_baseUniq-DV1niuS7.js";import"./_Uint8Array-Bgnh0Mur.js";import"./isArray-D-j8zubJ.js";import"./_getTag-K4XAuv8J.js";import"./isEqual-D2N_ZygK.js";import"./noop-DX6rZLP_.js";import"./merge-CdXNYD4z.js";import"./_initCloneObject-CiGbOdta.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CWljGQaI.js";import"./inputBaseClasses-7vLKzToA.js";import"./calculateFriendlyFileSize-BzDK5ry9.js";import"./CheckCircleTwoTone-DceYN4QX.js";import"./InfoTwoTone-DZlBy9ZW.js";import"./useMutation-B0TMRoqc.js";import"./dayjs.min-BoIqCcg2.js";import"./chunk-AYJ5UCUI-iVW4Bb0p.js";import"./cloneDeep-DyZAojRt.js";import"./Skeleton-BvWNufUl.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-B7WEe-nj.js";import"./Backdrop-Dda0ouTM.js";import"./LinearProgress-bjDYtjx2.js";import"./index-BSuHru8t.js";import"./index-LQO9ZmVw.js";import"./index-BrQHLu95.js";import"./const-BP60AzNb.js";import"./index-D8Dhpwdd.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
