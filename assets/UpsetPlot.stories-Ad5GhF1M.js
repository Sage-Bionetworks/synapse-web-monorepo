import{U as L}from"./UpsetPlot-BE5Ans-9.js";import{f as u}from"./index-DhJvGSY7.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-li-Buhof.js";import"./DefaultPropsProvider-Dji5gM7C.js";import"./createTheme-BnXa5zZK.js";import"./index-DNNN6rdJ.js";import"./iframe-oGQYvBKi.js";import"./Button-Cq9ZsfE1.js";import"./createSimplePaletteValueFilter-DU46ej2J.js";import"./useTimeout-CGpqBhHm.js";import"./ButtonBase-Dr8KFyFP.js";import"./useForkRef-JyorSLe1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-fa4TJCvY.js";import"./useFiles-BVPNraLD.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-Dv-MGM1J.js";import"./OrientationBanner-Cws2j4Mo.js";import"./index--CX0HyWh.js";import"./spreadSx-CwcO6WA9.js";import"./react-CGxkybS_.js";import"./FullWidthAlert-Dqr4oli-.js";import"./Alert-B_xnezcd.js";import"./useSlot-Cb_QlhVh.js";import"./createSvgIcon-D8jIrvPX.js";import"./Close-BDDORMGK.js";import"./IconButton-V_4NTwZz.js";import"./Paper-SUBod-rb.js";import"./useTheme-a7pwbdA5.js";import"./useTheme-DLZAYx4G.js";import"./Stack-DhnkcRXq.js";import"./extendSxProp-BZdJ7s64.js";import"./getThemeProps-AWcM1db2.js";import"./Box-EIKqjcJy.js";import"./AlertTitle-D2kQ5YCh.js";import"./Typography-DS8QrI39.js";import"./index-B9YJJuiU.js";import"./ClickAwayListener-C7bmldo6.js";import"./getReactElementRef-Cghnh0Pf.js";import"./index-jyYirorJ.js";import"./index-DeKTxRMD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DJ_Oa6j7.js";import"./Tooltip-DNNN56gH.js";import"./index-BO6uCNwC.js";import"./useControlled-iZXBhxfw.js";import"./Popper-Cuzgqsiw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Bf-DfLGF.js";import"./QueryClientProvider-hd-vwg1E.js";import"./Link-BfSlpjCj.js";import"./Collapse-DL3n47x_.js";import"./_baseUniq-CK8WzfJ6.js";import"./_Uint8Array-p32pFxMQ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-B9LQDD5T.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BIs_7e2S.js";import"./isEqual-DKLM-bz2.js";import"./merge-BqXjrW0p.js";import"./_initCloneObject-DMLlTLj-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DH8HxKI8.js";import"./inputBaseClasses-hOK3eq__.js";import"./calculateFriendlyFileSize-DauLOTgx.js";import"./CheckCircleTwoTone-zkkK8I6_.js";import"./InfoTwoTone-BUjP8Da4.js";import"./useMutation-pfkVBKwT.js";import"./dayjs.min-1sVOAIGh.js";import"./chunk-AYJ5UCUI-CddD74F6.js";import"./cloneDeep-B46xYFJ8.js";import"./Skeleton-Cky8RVh8.js";import"./SqlFunctions-c3WXx9n7.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-BS-RhGWY.js";import"./Backdrop-CC1YpMI-.js";import"./LinearProgress-DAA3t-ji.js";import"./index-x_r5A32k.js";import"./index-o24hzcJz.js";import"./index-CXMVm23y.js";import"./const-BP60AzNb.js";import"./index-C1faNB_a.js";const Kt={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
