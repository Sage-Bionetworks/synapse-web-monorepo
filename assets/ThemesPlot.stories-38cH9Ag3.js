import{T as p}from"./ThemesPlot-B_FnWKrE.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DN5jeuBs.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Dk9mSEK3.js";import"./OrientationBanner-C5rRxLOd.js";import"./index-DJ2Mj2aK.js";import"./index-DGv34HBD.js";import"./iframe-DfhwYfkN.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dqq1nFIk.js";import"./FullWidthAlert-7hlJBHTN.js";import"./Alert-DAG9Aucx.js";import"./createTheme-DGEGp_SD.js";import"./DefaultPropsProvider-DoDLwSqP.js";import"./useSlot-h-XFZ_xK.js";import"./useForkRef-DorXlh5L.js";import"./createSimplePaletteValueFilter-CEiraeEP.js";import"./createSvgIcon-BwKRHuRw.js";import"./Close-BoYD-Ye6.js";import"./IconButton-ByahMUeh.js";import"./useTimeout-D9n6b9ga.js";import"./ButtonBase-BwS93VGp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CxFD3KzI.js";import"./Paper-CH1kNGpI.js";import"./useTheme-DBhTySsI.js";import"./useTheme-D6P-YjrR.js";import"./Stack-Dr6m2zrE.js";import"./useThemeProps-ahUk6xR1.js";import"./getThemeProps-DeX8Xk5f.js";import"./extendSxProp-CXOYizRA.js";import"./Box-6ErQd4eQ.js";import"./AlertTitle-C391Qgh2.js";import"./Typography-DFWCAegs.js";import"./index-D2dQp3lw.js";import"./ClickAwayListener-a0xZHR2I.js";import"./getReactElementRef-DFiSuhzk.js";import"./index-DDkg0FwF.js";import"./index-B11uVym8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CyTlzzNv.js";import"./Tooltip-CuLP43i6.js";import"./index-BSM79-Da.js";import"./useControlled-DeakbIaX.js";import"./Popper-CuO8c7be.js";import"./Button-CxRuB6Io.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-B5XD2W2D.js";import"./QueryClientProvider-DgRSjt1E.js";import"./Link-aPqunS_C.js";import"./Collapse-DFPiA3AQ.js";import"./_baseUniq-fLehImUc.js";import"./_Uint8Array-BAfJSe8d.js";import"./isArray-RjWnP_xj.js";import"./_getTag-UgO0rBGX.js";import"./isEqual-DucS0a4x.js";import"./noop-DX6rZLP_.js";import"./merge-DNvf83vX.js";import"./_initCloneObject-g_hm0NT-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DrTUWBA-.js";import"./inputBaseClasses-CHlIYh-9.js";import"./calculateFriendlyFileSize-FKoHcqwG.js";import"./CheckCircleTwoTone-B7GhCg84.js";import"./InfoTwoTone-DrINNaoG.js";import"./useMutation-C7G01Xnf.js";import"./dayjs.min-DwRsZaK6.js";import"./chunk-AYJ5UCUI-CVKajfNP.js";import"./cloneDeep-CV4bwBv0.js";import"./Skeleton-M7Xx-4bt.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DQ8xOPc8.js";import"./Backdrop-CEuhl1vD.js";import"./LinearProgress-CvBWrjBz.js";import"./uniq-B0TLKb6-.js";import"./Plot-BBO49CUd.js";import"./index-Chjiymov.js";import"./_createAggregator-vDoH-bBI.js";import"./_baseEach-CSGwKXvp.js";import"./_baseIteratee-qgSJKVZI.js";import"./_baseGet-DqmBafAL.js";import"./isSymbol-DJa5TpaM.js";import"./toString-W-CywYbt.js";import"./hasIn-_NGdB6ZW.js";import"./_baseOrderBy-16xW72OH.js";import"./_baseMap-BGLFsBsJ.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
