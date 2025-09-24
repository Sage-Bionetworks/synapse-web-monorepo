import{T as p}from"./ThemesPlot-Df1_Mj_m.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DKBjGtH0.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BPxSYXRt.js";import"./OrientationBanner-BRUSGBks.js";import"./index-Dr7n8Bu6.js";import"./index-KGN7nUgE.js";import"./iframe-CMQeI9WK.js";import"./spreadSx-CwcO6WA9.js";import"./react-CMig-9PE.js";import"./FullWidthAlert-kwfi_d0a.js";import"./Alert-DJ8X3BSK.js";import"./createTheme-DO0GeJVN.js";import"./DefaultPropsProvider-TigZOw0c.js";import"./useSlot-BeLwitnn.js";import"./useForkRef--CXcjM6c.js";import"./createSimplePaletteValueFilter-DZ3Cd0ZY.js";import"./createSvgIcon-BwJ4Z0yb.js";import"./Close-B39SLtS7.js";import"./IconButton-DDxgpgKz.js";import"./useTimeout-CbCrOuyo.js";import"./ButtonBase-Dpm3dYIG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-tpeZfTSG.js";import"./Paper-OHiCXA0a.js";import"./useTheme-DqFjo4Vk.js";import"./useTheme-DNfJZ9a1.js";import"./Stack-SWup2UhN.js";import"./extendSxProp-BYQFtxYN.js";import"./getThemeProps-Bdh-DyuI.js";import"./Box-CvOrwV-N.js";import"./AlertTitle-DU-H4ICD.js";import"./Typography-Bx5U0C2d.js";import"./index-BKxVS2q8.js";import"./ClickAwayListener-BU9wvTpl.js";import"./getReactElementRef-CWKqg3UA.js";import"./index-DfI_pPk5.js";import"./index-CNJXOAct.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bj8lCSBe.js";import"./Tooltip-C0iVGWe9.js";import"./index-Ch-D0VSk.js";import"./useControlled-CYxMkq6A.js";import"./Popper-B69y1AqZ.js";import"./Button-3qFS6i5P.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BiFVnL5m.js";import"./QueryClientProvider-BM1sWabn.js";import"./Link-ChVk8ADt.js";import"./Collapse-BffAQEYD.js";import"./_baseUniq-CODlLnhx.js";import"./_Uint8Array-DL2TZi9X.js";import"./isArray-DjjF7-P3.js";import"./_getTag-Cgl2tQw4.js";import"./isEqual-wQQmtEJR.js";import"./merge-CTQFuPxa.js";import"./_initCloneObject-Ctr9Y8Ai.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cv-DSv5P.js";import"./inputBaseClasses-4MqSuc0L.js";import"./calculateFriendlyFileSize-DcjtLEas.js";import"./CheckCircleTwoTone-D1Vqh63T.js";import"./InfoTwoTone-BXDH4Dcy.js";import"./useMutation-Dn2nWpvI.js";import"./dayjs.min-DKhR2V7G.js";import"./chunk-AYJ5UCUI-o4WQ5ozd.js";import"./cloneDeep-ChJ6elbg.js";import"./Skeleton-C3ppgLNp.js";import"./SqlFunctions-B6aZ8mL4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Ca6FvBo3.js";import"./Backdrop-DyiMxsUF.js";import"./LinearProgress-DsBuey8S.js";import"./uniq-CP87yyHn.js";import"./Plot-D7EOkNPq.js";import"./index-Chjiymov.js";import"./_createAggregator-B0HsngF6.js";import"./_baseEach-Bhr_NEtM.js";import"./_baseIteratee-CeP6_ogE.js";import"./_baseGet-DEPH11Uv.js";import"./isSymbol-CslOALvZ.js";import"./toString-DqSm65F6.js";import"./hasIn-C1M2mkrb.js";import"./_baseOrderBy-CNNSGzgG.js";import"./_baseMap-CNxdueov.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Jo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Jo as __namedExportsOrder,Go as default};
