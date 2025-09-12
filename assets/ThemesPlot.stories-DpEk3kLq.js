import{T as p}from"./ThemesPlot-DTB_w34f.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-Db54t-tY.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./SynapseConstants-DaRxMVmF.js";import"./OrientationBanner-B1qNwquP.js";import"./index-DGL3HO56.js";import"./index-BuJDQnUk.js";import"./iframe-Cr6ezPsl.js";import"./spreadSx-CwcO6WA9.js";import"./react-AlFvuvNv.js";import"./FullWidthAlert-mRZoSYPq.js";import"./Alert-Be0A-LgM.js";import"./createTheme-BK6UElHJ.js";import"./DefaultPropsProvider-Dvr-tTK6.js";import"./useSlot-DalP7ee8.js";import"./useForkRef-CF7zyPlu.js";import"./createSimplePaletteValueFilter-Cpx97Rr9.js";import"./createSvgIcon-D2yClPAP.js";import"./Close-UkcISrWM.js";import"./IconButton-Ck0nC-my.js";import"./useTimeout-DM9L0rxB.js";import"./ButtonBase-D82xi4uS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcfM6f79.js";import"./Paper-BPJSyr-F.js";import"./useTheme-B7yNuM8W.js";import"./useTheme-C-Nrlkd0.js";import"./Stack-B7Qpj5Ki.js";import"./extendSxProp-DLwRLLo9.js";import"./getThemeProps-sKYYbfmA.js";import"./Box-D7QdnBU4.js";import"./AlertTitle-C-dr4K0A.js";import"./Typography-BHnBpTHA.js";import"./index-BKX1-w9C.js";import"./ClickAwayListener-CmfTuM2N.js";import"./getReactElementRef-BRpsy5_3.js";import"./index-DLfqkzAN.js";import"./index-YcRuu0bH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D254RFQI.js";import"./Tooltip-2iC1TBx7.js";import"./index-Ci5oPOxK.js";import"./useControlled-DgIckgW6.js";import"./Popper-CucXU77N.js";import"./Button-DDnrRDpv.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-DYvqTKcd.js";import"./QueryClientProvider-D35J8jSd.js";import"./Link-B4y9rQD-.js";import"./Collapse-Bd3x3sfg.js";import"./_baseUniq-BL-JTcV7.js";import"./_Uint8Array-okef9fpr.js";import"./isArray-CQL2Omy9.js";import"./_getTag-oDqqQs_x.js";import"./isEqual-D3NjyQZR.js";import"./merge-d6zHDzVE.js";import"./_initCloneObject-zeb2rLvj.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B3b9dqgH.js";import"./inputBaseClasses-BKILOaiU.js";import"./calculateFriendlyFileSize-D-5lh9-e.js";import"./CheckCircleTwoTone-BWGId32i.js";import"./InfoTwoTone-BSHHymaY.js";import"./useMutation-d2WF_4zr.js";import"./dayjs.min-D3lvmW2A.js";import"./chunk-AYJ5UCUI-qjDTf1To.js";import"./cloneDeep-Ct9R0eu9.js";import"./Skeleton-B7QVWXYf.js";import"./SqlFunctions-DQ27hT8m.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Di2hObSj.js";import"./Backdrop-a8GybRm_.js";import"./LinearProgress-CkYoi2yU.js";import"./uniq-WwvwZdFU.js";import"./Plot-D9TEJi8j.js";import"./index-Chjiymov.js";import"./_createAggregator-DJ_YeO76.js";import"./_baseEach-CdUmnT1s.js";import"./_baseIteratee-D4M9TUmq.js";import"./_baseGet-7om6dOsS.js";import"./isSymbol-CoBgEu09.js";import"./toString-DKSUWCSU.js";import"./hasIn-CYk5qVYT.js";import"./_baseOrderBy-BZrMNnn-.js";import"./_baseMap-BTiQx8XQ.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
