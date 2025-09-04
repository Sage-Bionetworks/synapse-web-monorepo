import{T as p}from"./ThemesPlot-BkC-1lTL.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-KQZnDEqY.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-E9b7EaUq.js";import"./OrientationBanner-CmbPS0a4.js";import"./index-RZq23un7.js";import"./index-CzGzXEn8.js";import"./iframe-uFVp_yWY.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbvsEyPG.js";import"./FullWidthAlert-D1yw4iHk.js";import"./Alert-CNLtvy8P.js";import"./createTheme-k23OqXGa.js";import"./DefaultPropsProvider-DIhp9cRI.js";import"./useSlot-C-gtFsMB.js";import"./useForkRef-BSQlPluY.js";import"./createSimplePaletteValueFilter-ByhsrVNu.js";import"./createSvgIcon-BMaNoRgk.js";import"./Close-D_tYQfNe.js";import"./IconButton-C9kv8evX.js";import"./useTimeout-Bco06NxJ.js";import"./ButtonBase--LE7YHRM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C1rPjsSq.js";import"./Paper-BVxUU9_K.js";import"./useTheme-m-jJYqTk.js";import"./useTheme-BdRzPGfO.js";import"./Stack-BdenFWgB.js";import"./extendSxProp-BQjDsJY_.js";import"./getThemeProps-BlF0lh8z.js";import"./Box-B-VzN5Jx.js";import"./AlertTitle-B9QtK9uS.js";import"./Typography-C2XHzVQE.js";import"./index-CAod7njC.js";import"./ClickAwayListener-Du3ELzpP.js";import"./getReactElementRef-Dgr12Jgk.js";import"./index-B21--ivY.js";import"./index-D6SZASGo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-gVpppe5W.js";import"./Tooltip-BQoBuipX.js";import"./index-sNVsSmo5.js";import"./useControlled-3AOcwQZd.js";import"./Popper-DFhQZQac.js";import"./Button-Bzn_cVpu.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DF84rRyD.js";import"./QueryClientProvider-csjxr0Oq.js";import"./Link-VKSHRpIP.js";import"./Collapse-B3cTWS02.js";import"./_baseUniq-Fd2G2IPR.js";import"./_Uint8Array-LlKGp4K5.js";import"./isArray-ChG02qwo.js";import"./_getTag-cnLzI9NN.js";import"./isEqual-yp226Bbx.js";import"./merge-Y_2GYteb.js";import"./_initCloneObject-BpCV3dag.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaG8l8BS.js";import"./inputBaseClasses-DKgm0JXr.js";import"./calculateFriendlyFileSize-HPCnRThz.js";import"./CheckCircleTwoTone-RDTFbucz.js";import"./InfoTwoTone-BPpuRQC9.js";import"./useMutation-BXU6_2Hh.js";import"./dayjs.min-Cml6m9_C.js";import"./chunk-AYJ5UCUI-CA4qBvwQ.js";import"./cloneDeep-mhbB0HAm.js";import"./Skeleton-CJd0uABn.js";import"./SqlFunctions-D9jcfCB0.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-ox3pgfQ8.js";import"./Backdrop-BD4yA7GX.js";import"./LinearProgress-BwBxaIV1.js";import"./uniq-BQQqY5_3.js";import"./Plot-bWsl9fkU.js";import"./index-Chjiymov.js";import"./_createAggregator-5hQR7Yh_.js";import"./_baseEach-Oo8r2Aw8.js";import"./_baseIteratee-DtT4ddMb.js";import"./_baseGet-5KfeWLsL.js";import"./isSymbol-nj6BaCVk.js";import"./toString-eb50UqWN.js";import"./hasIn-DBenL1hF.js";import"./_baseOrderBy-Dauj5orj.js";import"./_baseMap-DcRehr9M.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
