import{T as p}from"./ThemesPlot-B3EnENFD.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BGqzmh3K.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-ljMAdx68.js";import"./OrientationBanner-BJoiLH5u.js";import"./index-BLHxJKGR.js";import"./index-DfXhoS93.js";import"./iframe-CmMCQ4D1.js";import"./spreadSx-CwcO6WA9.js";import"./react-C55eq54t.js";import"./FullWidthAlert-Dmg54ubi.js";import"./Alert-DdXaF5ih.js";import"./createTheme-NstNY56j.js";import"./DefaultPropsProvider-BspoEs_3.js";import"./useSlot-G1lnVT-7.js";import"./useForkRef-BP-fxWVS.js";import"./createSimplePaletteValueFilter-BVA8XCKf.js";import"./createSvgIcon-DWS9jufq.js";import"./Close-Bw8bO_ey.js";import"./IconButton-BWMua7vU.js";import"./useTimeout-BXTGuQAu.js";import"./ButtonBase-Cx1k84i0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-LMad5R4j.js";import"./Paper-De0lh8eX.js";import"./useTheme-BWvFZ9eF.js";import"./useTheme-BYUnt95G.js";import"./Stack-CfaqAJqE.js";import"./extendSxProp-SsxQet_B.js";import"./getThemeProps-C5S3wagm.js";import"./Box-uE-W7Sa0.js";import"./AlertTitle-CCmDEvrt.js";import"./Typography-UvjlH3GM.js";import"./index-BhAvfGUh.js";import"./ClickAwayListener-BwjI0Npa.js";import"./getReactElementRef-mWD2ut9h.js";import"./index-Birxyppr.js";import"./index-C4Gk4dZy.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-HWLRwbg6.js";import"./Tooltip-D5cxmH7B.js";import"./index-D63gI9c1.js";import"./useControlled-DmifYyk4.js";import"./Popper-DR2KrX6d.js";import"./Button-CIhLg1aw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-8Z3xdu9W.js";import"./QueryClientProvider-DMlK99P5.js";import"./Link-BSPnFS7F.js";import"./Collapse-DBDRnYj5.js";import"./_baseUniq-BI8Wf5sc.js";import"./_Uint8Array-Ydrn2Wyi.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CX_aDVYj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D1f8lrtD.js";import"./isEqual-DxBbzxZF.js";import"./merge-DIokW4tV.js";import"./_initCloneObject-DQnn-fay.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-2DQ5ggOQ.js";import"./inputBaseClasses-CX2aFV1A.js";import"./calculateFriendlyFileSize-5GaeDM8q.js";import"./CheckCircleTwoTone-3PcAFoLI.js";import"./InfoTwoTone-o8EvCK01.js";import"./useMutation-Dx_N1B5f.js";import"./dayjs.min-BaM1Jxz1.js";import"./chunk-AYJ5UCUI-DkR7fV6X.js";import"./cloneDeep-C6XcWJ4n.js";import"./Skeleton-F5jMcS6Z.js";import"./SqlFunctions-CqOxgBqv.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Cnl3ObEs.js";import"./Backdrop-BLvUnQQJ.js";import"./LinearProgress-BBr9BU56.js";import"./uniq-BXim7_mc.js";import"./Plot-BUECJdET.js";import"./index-Chjiymov.js";import"./_createAggregator-CEprI9WN.js";import"./_baseEach-BDIC1Ush.js";import"./_baseIteratee-Dc3kR0lT.js";import"./_baseGet-CNJx6z9V.js";import"./isSymbol-Bx8sUzGK.js";import"./toString-BVqcuACr.js";import"./hasIn-DUNm4yIt.js";import"./_baseOrderBy-BcdC3Rqc.js";import"./_baseMap-5QMN1IG8.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
