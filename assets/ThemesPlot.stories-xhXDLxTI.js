import{T as p}from"./ThemesPlot-DMGbr1t4.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DPmKtaqp.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BbI0AJBI.js";import"./OrientationBanner-lZgnnZcG.js";import"./index-Be2xkMBW.js";import"./index-C4bFWea_.js";import"./iframe-DR_wcsJ3.js";import"./spreadSx-CwcO6WA9.js";import"./react-Diy3wJ2J.js";import"./FullWidthAlert-Bm8mD_nI.js";import"./Alert-Gm8LkqSS.js";import"./createTheme-BKtT3vHL.js";import"./DefaultPropsProvider-CsIOc2_l.js";import"./useSlot-ChH1W-cP.js";import"./useForkRef-CReL5Qun.js";import"./createSimplePaletteValueFilter-foGX4r19.js";import"./createSvgIcon-NOjMq3CR.js";import"./Close-MzmSqWNs.js";import"./IconButton-D1l0t7O6.js";import"./useTimeout-Ch_01VeS.js";import"./ButtonBase-DIEaJI0n.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D37HSALL.js";import"./Paper-C6vQplp2.js";import"./useTheme-C3LmMcRI.js";import"./useTheme-BXNQ9Oj4.js";import"./Stack-wvYbR1wo.js";import"./extendSxProp-T8cT23Rr.js";import"./getThemeProps-DrmqKevn.js";import"./Box-BV9qkT5w.js";import"./AlertTitle-CN8BhV3h.js";import"./Typography-8oN0kMzT.js";import"./index-BgV9qtHJ.js";import"./ClickAwayListener-DGKw14OH.js";import"./getReactElementRef-C5BUXneH.js";import"./index-BqTtgb23.js";import"./index-D8zxXPsW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BSXzewNv.js";import"./Tooltip-Dnd3ZbUN.js";import"./index-BgIpVkb_.js";import"./useControlled-ibM83Vh5.js";import"./Popper-Bg-xoKDy.js";import"./Button-DlngBMCX.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-eVv6WEkZ.js";import"./QueryClientProvider-Bhgh6MhR.js";import"./Link-CzopMOzZ.js";import"./Collapse-C2O0PVYE.js";import"./_baseUniq-o-vnUTJB.js";import"./_Uint8Array-BTv2MYuK.js";import"./isArray-DZRaET66.js";import"./_getTag-D8MmAh0k.js";import"./isEqual-BaO30kUk.js";import"./merge-ykGFvrTe.js";import"./_initCloneObject-RtGkh5Y0.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DiIvNAK2.js";import"./inputBaseClasses-B6_bqzpm.js";import"./calculateFriendlyFileSize-D4ChoND8.js";import"./CheckCircleTwoTone-BO-FnXe-.js";import"./InfoTwoTone-CYADDrkm.js";import"./useMutation-CmFUdHTM.js";import"./dayjs.min-ClxLSL3W.js";import"./chunk-AYJ5UCUI-BOl_xBJE.js";import"./cloneDeep-B1_bHtD-.js";import"./Skeleton-DplS7Xu7.js";import"./SqlFunctions-B6aZ8mL4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CROT2vVZ.js";import"./Backdrop-CJHEe6Wz.js";import"./LinearProgress-Z8kghisw.js";import"./uniq-BtoDQA6j.js";import"./Plot-urIs_2Dl.js";import"./index-Chjiymov.js";import"./_createAggregator-BnPqKGNJ.js";import"./_baseEach-B2AxNyUI.js";import"./_baseIteratee-Dj8BkorV.js";import"./_baseGet-CVTaAZVC.js";import"./isSymbol-oe11Mw4O.js";import"./toString-D29nv_O4.js";import"./hasIn-DWWNnUI6.js";import"./_baseOrderBy-Dp_jlUiL.js";import"./_baseMap-CVcLQSCn.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
