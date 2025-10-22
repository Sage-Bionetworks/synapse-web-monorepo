import{U as L}from"./UpsetPlot-C29KqJXC.js";import{f as u}from"./index-CH2Cmo3g.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-csGMR3sD.js";import"./DefaultPropsProvider-DoDLwSqP.js";import"./createTheme-DGEGp_SD.js";import"./index-DGv34HBD.js";import"./iframe-DfhwYfkN.js";import"./Button-CxRuB6Io.js";import"./createSimplePaletteValueFilter-CEiraeEP.js";import"./useTimeout-D9n6b9ga.js";import"./ButtonBase-BwS93VGp.js";import"./useForkRef-DorXlh5L.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CxFD3KzI.js";import"./useFiles-DN5jeuBs.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Dk9mSEK3.js";import"./OrientationBanner-C5rRxLOd.js";import"./index-DJ2Mj2aK.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dqq1nFIk.js";import"./FullWidthAlert-7hlJBHTN.js";import"./Alert-DAG9Aucx.js";import"./useSlot-h-XFZ_xK.js";import"./createSvgIcon-BwKRHuRw.js";import"./Close-BoYD-Ye6.js";import"./IconButton-ByahMUeh.js";import"./Paper-CH1kNGpI.js";import"./useTheme-DBhTySsI.js";import"./useTheme-D6P-YjrR.js";import"./Stack-Dr6m2zrE.js";import"./useThemeProps-ahUk6xR1.js";import"./getThemeProps-DeX8Xk5f.js";import"./extendSxProp-CXOYizRA.js";import"./Box-6ErQd4eQ.js";import"./AlertTitle-C391Qgh2.js";import"./Typography-DFWCAegs.js";import"./index-D2dQp3lw.js";import"./ClickAwayListener-a0xZHR2I.js";import"./getReactElementRef-DFiSuhzk.js";import"./index-DDkg0FwF.js";import"./index-B11uVym8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CyTlzzNv.js";import"./Tooltip-CuLP43i6.js";import"./index-BSM79-Da.js";import"./useControlled-DeakbIaX.js";import"./Popper-CuO8c7be.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-B5XD2W2D.js";import"./QueryClientProvider-DgRSjt1E.js";import"./Link-aPqunS_C.js";import"./Collapse-DFPiA3AQ.js";import"./_baseUniq-fLehImUc.js";import"./_Uint8Array-BAfJSe8d.js";import"./isArray-RjWnP_xj.js";import"./_getTag-UgO0rBGX.js";import"./isEqual-DucS0a4x.js";import"./noop-DX6rZLP_.js";import"./merge-DNvf83vX.js";import"./_initCloneObject-g_hm0NT-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DrTUWBA-.js";import"./inputBaseClasses-CHlIYh-9.js";import"./calculateFriendlyFileSize-FKoHcqwG.js";import"./CheckCircleTwoTone-B7GhCg84.js";import"./InfoTwoTone-DrINNaoG.js";import"./useMutation-C7G01Xnf.js";import"./dayjs.min-DwRsZaK6.js";import"./chunk-AYJ5UCUI-CVKajfNP.js";import"./cloneDeep-CV4bwBv0.js";import"./Skeleton-M7Xx-4bt.js";import"./SqlFunctions-B8wRZva4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-DQ8xOPc8.js";import"./Backdrop-CEuhl1vD.js";import"./LinearProgress-CvBWrjBz.js";import"./index-CFS4HnaX.js";import"./index-DwMifvk6.js";import"./index-BqRwhhHX.js";import"./const-BP60AzNb.js";import"./index-EQdMNjMV.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
