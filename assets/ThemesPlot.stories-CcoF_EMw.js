import{T as p}from"./ThemesPlot-CKq0T9Dz.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DjcKRMVW.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CJdz_Y6G.js";import"./OrientationBanner-COV2ej6u.js";import"./index-0vKntbcb.js";import"./index-BWKRneOV.js";import"./iframe-BhricgUu.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ps5VvxXi.js";import"./FullWidthAlert-CmqIKfwS.js";import"./Alert-CYyYr4Pz.js";import"./createTheme-DvbsM9Gd.js";import"./DefaultPropsProvider-CoGa70uG.js";import"./useSlot-DDQCBXbd.js";import"./useForkRef-CoWZJBIY.js";import"./createSimplePaletteValueFilter-gXd7lDZR.js";import"./createSvgIcon-CONqxTxe.js";import"./Close-BwUlOmQW.js";import"./IconButton-cT3ZjqEA.js";import"./useTimeout-DUOAKbFB.js";import"./ButtonBase-DjJZ3Tap.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-BLDG-J.js";import"./Paper-BiHcAXhh.js";import"./useTheme-Uk70tDF_.js";import"./useTheme-BoL-FF8e.js";import"./Stack-BlF66rx8.js";import"./extendSxProp-0xdvgH0b.js";import"./getThemeProps-DAZ7QmCk.js";import"./Box-DpzMXl_-.js";import"./AlertTitle-Ca_FYDp_.js";import"./Typography-CgwzPzS4.js";import"./index-CEl4alCE.js";import"./ClickAwayListener-BIK4ucG1.js";import"./getReactElementRef-DZq85MjR.js";import"./index-DpNKR-l2.js";import"./index-CfKD-UMg.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CZSvpLI6.js";import"./Tooltip-Bc_4Oics.js";import"./index-CcPBZI4z.js";import"./useControlled-C7swfzWb.js";import"./Popper-DjLUfmEs.js";import"./Button-BHI08wYr.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DF3fh9cf.js";import"./QueryClientProvider-CIZjXG1o.js";import"./Link-BQbF7JxS.js";import"./Collapse-D6LSBqLU.js";import"./_baseUniq-5n8Q7RzC.js";import"./_Uint8Array-CYD9rB-G.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWxeF1T8.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DkXw7hlR.js";import"./isEqual-Cp5UmJIB.js";import"./merge-BViOEajO.js";import"./_initCloneObject-8DjFhKUY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BgzPRQK5.js";import"./inputBaseClasses-4XkeR1Yh.js";import"./calculateFriendlyFileSize-BQzEVkul.js";import"./CheckCircleTwoTone-D8Cok0NF.js";import"./InfoTwoTone-CrbVitJJ.js";import"./useMutation-BWW6WqJ1.js";import"./dayjs.min-CPE1_-9E.js";import"./chunk-AYJ5UCUI-I-s4kGOL.js";import"./cloneDeep-p0a3Y1D4.js";import"./Skeleton-BgFwYveO.js";import"./SqlFunctions-c3WXx9n7.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Bh34HEwr.js";import"./Backdrop-BP4YPqvZ.js";import"./LinearProgress-Dxtu6sjy.js";import"./uniq-BM0F78o5.js";import"./Plot-C3NTIOIM.js";import"./index-Chjiymov.js";import"./_createAggregator-DJHHMTB0.js";import"./_baseEach-DeOa0Khp.js";import"./_baseIteratee-BXLmS2zj.js";import"./_baseGet-DQt3Myx8.js";import"./isSymbol-DWzxk1Ve.js";import"./toString-rxXlGdQw.js";import"./hasIn-CUk7Tkph.js";import"./_baseOrderBy-bg1IDfcX.js";import"./_baseMap-gouwEJBz.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
