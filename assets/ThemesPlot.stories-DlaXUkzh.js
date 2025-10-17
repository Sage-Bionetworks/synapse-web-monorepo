import{T as p}from"./ThemesPlot-CBEpbL_q.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BMNFt-8g.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-ruF53FsM.js";import"./OrientationBanner-DeOiH3yd.js";import"./index-D5GYg9hQ.js";import"./index-BD8T7zq6.js";import"./iframe-BCztISwF.js";import"./spreadSx-CwcO6WA9.js";import"./react-BmWlFtp9.js";import"./FullWidthAlert-DeCznv24.js";import"./Alert-DXEjMnWz.js";import"./createTheme-CTBtZ_cy.js";import"./DefaultPropsProvider-B9JV_CUS.js";import"./useSlot-fds4Yeop.js";import"./useForkRef-C_rm1XEs.js";import"./createSimplePaletteValueFilter-DeoxNqRG.js";import"./createSvgIcon-Pv2fR8IF.js";import"./Close-H9g7nKcO.js";import"./IconButton-BRuECVtO.js";import"./useTimeout-0eXle5dh.js";import"./ButtonBase-DzeUsUkN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BxBCqc4_.js";import"./Paper-_pmqSPmr.js";import"./useTheme-CQSNJTUG.js";import"./useTheme-DFpCyL4Y.js";import"./Stack-l4t04YEH.js";import"./useThemeProps-CGtS0plU.js";import"./getThemeProps-Fi8dnZUZ.js";import"./extendSxProp-iPj9BVlN.js";import"./Box-DQV0lxds.js";import"./AlertTitle-Bm25oWD_.js";import"./Typography-Cxv8qnpg.js";import"./index-CIL5iEm5.js";import"./ClickAwayListener-D0w7bfZZ.js";import"./getReactElementRef-JB-rNIYf.js";import"./index-C6FD6fLo.js";import"./index-CLf-jdg9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BkapnwIp.js";import"./Tooltip-BrvlfHcB.js";import"./index-CKxt-HAj.js";import"./useControlled-BDiO9zgL.js";import"./Popper-CPoBNdFa.js";import"./Button-D3ajUzUs.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DQtNzDr0.js";import"./QueryClientProvider-DStyJqXK.js";import"./Link-DckGLzQN.js";import"./Collapse-EXdIFGDf.js";import"./_baseUniq-4-5ousxn.js";import"./_Uint8Array-C6Z07qUy.js";import"./isArray-DGqRpJYm.js";import"./_getTag-Bu_44Cjs.js";import"./isEqual-BwYcoTf8.js";import"./noop-DX6rZLP_.js";import"./merge-DiV7m9Pu.js";import"./_initCloneObject-CmXH6YeZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DlP0g-24.js";import"./inputBaseClasses-BQe-pxTr.js";import"./calculateFriendlyFileSize-Dks1cdcZ.js";import"./CheckCircleTwoTone-HUw_GkW9.js";import"./InfoTwoTone-DFOS-ggU.js";import"./useMutation-O6IXzSsV.js";import"./dayjs.min-B3-A15Bv.js";import"./chunk-AYJ5UCUI-BsG23He-.js";import"./cloneDeep-f1dMV6ix.js";import"./Skeleton-whSO5RLo.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-lOlRPj3G.js";import"./Backdrop-BXaQqlUz.js";import"./LinearProgress-Py_EGnx4.js";import"./uniq-6sjEsxlk.js";import"./Plot-DskQkq5w.js";import"./index-Chjiymov.js";import"./_createAggregator-CZ6Hs2vs.js";import"./_baseEach-B1hFcX9H.js";import"./_baseIteratee-BPCRbcjn.js";import"./_baseGet-AW2g8BPy.js";import"./isSymbol-DLj05rTF.js";import"./toString-DQNT6C4h.js";import"./hasIn-hsbPGxQx.js";import"./_baseOrderBy-DjjqGYoN.js";import"./_baseMap-SP2D0frJ.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    onPointClick: e => {
      console.log(e.event);
    },
    topBarPlot: {
      entityId: 'syn21641485',
      xField: 'totalCount',
      yField: 'groupBy',
      groupField: 'consortium',
      colors: {
        CSBC: 'rgba(64,123,160, 1)',
        'PS-ON': 'rgba(91,176,181,1)',
        ICBP: 'rgba(197, 191, 223, 1)',
        TEC: 'rgba(156, 196, 233, 1)'
      },
      whereClause: 'totalCount is not NULL'
    },
    sideBarPlot: {
      entityId: 'syn21649281',
      xField: 'totalCount',
      yField: 'theme',
      groupField: 'consortium',
      countLabel: 'grants',
      plotStyle: {
        backgroundColor: '#f5f9fa'
      },
      colors: {
        CSBC: '#1c76af',
        'PS-ON': '#5bb0b5',
        ICBP: '#9cc4e9',
        TEC: '#c5bfdf'
      }
    },
    dotPlot: {
      entityId: 'syn21639584',
      xField: 'totalCount',
      yField: 'theme',
      groupField: 'groupBy',
      infoField: 'themeDescription',
      whereClause: "groupBy IN ('publications', 'tools', 'datasets')",
      markerSymbols: {
        tools: 'y-down',
        datasets: 'diamond-x',
        publications: 'circle'
      },
      plotStyle: {
        markerLine: 'rgba(0, 0, 0,1)',
        markerFill: 'rgba(255, 255, 255,1)',
        markerSize: 11,
        backgroundColor: '#f5f9fa'
      }
    }
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Mo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Mo as __namedExportsOrder,Ko as default};
