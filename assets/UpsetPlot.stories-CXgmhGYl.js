import{U as L}from"./UpsetPlot-ej66MpRF.js";import{f as u}from"./index-DY2eYKvD.js";import"./jsx-runtime-D_zvdyIk.js";import"./LargeButton-D0q80oqx.js";import"./DefaultPropsProvider-CsIOc2_l.js";import"./createTheme-BKtT3vHL.js";import"./index-C4bFWea_.js";import"./iframe-DR_wcsJ3.js";import"./Button-DlngBMCX.js";import"./createSimplePaletteValueFilter-foGX4r19.js";import"./useTimeout-Ch_01VeS.js";import"./ButtonBase-DIEaJI0n.js";import"./useForkRef-CReL5Qun.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D37HSALL.js";import"./useFiles-DPmKtaqp.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BbI0AJBI.js";import"./OrientationBanner-lZgnnZcG.js";import"./index-Be2xkMBW.js";import"./spreadSx-CwcO6WA9.js";import"./react-Diy3wJ2J.js";import"./FullWidthAlert-Bm8mD_nI.js";import"./Alert-Gm8LkqSS.js";import"./useSlot-ChH1W-cP.js";import"./createSvgIcon-NOjMq3CR.js";import"./Close-MzmSqWNs.js";import"./IconButton-D1l0t7O6.js";import"./Paper-C6vQplp2.js";import"./useTheme-C3LmMcRI.js";import"./useTheme-BXNQ9Oj4.js";import"./Stack-wvYbR1wo.js";import"./extendSxProp-T8cT23Rr.js";import"./getThemeProps-DrmqKevn.js";import"./Box-BV9qkT5w.js";import"./AlertTitle-CN8BhV3h.js";import"./Typography-8oN0kMzT.js";import"./index-BgV9qtHJ.js";import"./ClickAwayListener-DGKw14OH.js";import"./getReactElementRef-C5BUXneH.js";import"./index-BqTtgb23.js";import"./index-D8zxXPsW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BSXzewNv.js";import"./Tooltip-Dnd3ZbUN.js";import"./index-BgIpVkb_.js";import"./useControlled-ibM83Vh5.js";import"./Popper-Bg-xoKDy.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-eVv6WEkZ.js";import"./QueryClientProvider-Bhgh6MhR.js";import"./Link-CzopMOzZ.js";import"./Collapse-C2O0PVYE.js";import"./_baseUniq-o-vnUTJB.js";import"./_Uint8Array-BTv2MYuK.js";import"./isArray-DZRaET66.js";import"./_getTag-D8MmAh0k.js";import"./isEqual-BaO30kUk.js";import"./merge-ykGFvrTe.js";import"./_initCloneObject-RtGkh5Y0.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DiIvNAK2.js";import"./inputBaseClasses-B6_bqzpm.js";import"./calculateFriendlyFileSize-D4ChoND8.js";import"./CheckCircleTwoTone-BO-FnXe-.js";import"./InfoTwoTone-CYADDrkm.js";import"./useMutation-CmFUdHTM.js";import"./dayjs.min-ClxLSL3W.js";import"./chunk-AYJ5UCUI-BOl_xBJE.js";import"./cloneDeep-B1_bHtD-.js";import"./Skeleton-DplS7Xu7.js";import"./SqlFunctions-B6aZ8mL4.js";import"./ColorGradient-Zy7TAKxK.js";import"./colorPalette-BALeOMsp.js";import"./LoadingScreen-CROT2vVZ.js";import"./Backdrop-CJHEe6Wz.js";import"./LinearProgress-Z8kghisw.js";import"./index-CQ-lOjsf.js";import"./index-BH3PrLk0.js";import"./index-DbKdxQ5t.js";import"./const-BP60AzNb.js";import"./index-CKFWsihz.js";const $t={title:"Home Page/UpsetPlot",component:L},t={args:{sql:"SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)",rgbIndex:0,maxBarCount:20,setName:"Individuals (#) per Assay",combinationName:"Individuals (#)",summaryLink:"#",summaryLinkText:"Explore All Of Something",onClick:d=>{const y={sql:"select * from syn12345",selectedFacets:[{concreteType:"org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",columnName:"Assays",facetValues:[...d.sets.values()].map(I=>I.name)}]},E=`/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(y)}`;console.log(E)}}},o={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",rgbIndex:0,maxBarCount:10,setName:"Set size",combinationName:"Intersection size",onClick:u()}},r={args:{sql:"SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL",maxBarCount:10,setName:"Set size",combinationName:"Intersection size",variant:"ampals",onClick:u()}};var i,e,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
