import{T as p}from"./ThemesPlot-BgAd2oni.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BZV17LRY.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-VIskHFE7.js";import"./OrientationBanner-mYD1KLJ5.js";import"./index-C6oCx5Q4.js";import"./index-CREGy4JU.js";import"./iframe-DFtThXn_.js";import"./spreadSx-CwcO6WA9.js";import"./react-B2udbvLI.js";import"./FullWidthAlert-ZCTjro34.js";import"./Alert-AqaPj6PE.js";import"./createTheme-CE1nmSdD.js";import"./DefaultPropsProvider-BHzoV1Dn.js";import"./useSlot-DMKKbB6i.js";import"./useForkRef-CyS_o1Iz.js";import"./createSimplePaletteValueFilter-C9Flh5mR.js";import"./createSvgIcon-CkgBCV8y.js";import"./Close-DQp0oEqq.js";import"./IconButton-BUM-FX0_.js";import"./useTimeout-BE5W8YJ8.js";import"./ButtonBase-DaZ_7lRI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DfEpdioV.js";import"./Paper-DBVwlpo2.js";import"./useTheme-CwYhMF_O.js";import"./useTheme-JvF5LZla.js";import"./Stack-CPIUTT_1.js";import"./useThemeProps-zgF3fqlo.js";import"./getThemeProps-CRUQo9sp.js";import"./extendSxProp-BOce1nm_.js";import"./Box-DZiaVZnl.js";import"./AlertTitle-ChsCM4TP.js";import"./Typography-ANEGaihN.js";import"./index-B74xXF-A.js";import"./ClickAwayListener-YW0z3svG.js";import"./getReactElementRef-DO_5aoCT.js";import"./index-DD8x44wX.js";import"./index-C1cgcAs1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DpBJrWe9.js";import"./Tooltip-Dr1XL-Zz.js";import"./index-ClwLs2xL.js";import"./useControlled-D4h4kRjW.js";import"./Popper-C1co2brQ.js";import"./Button-Mc4n0qjd.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DI2Ey6nc.js";import"./QueryClientProvider-BA1QpnVt.js";import"./Link-D3QslX_P.js";import"./Collapse-DD7JCiwU.js";import"./_baseUniq-7YcikviV.js";import"./_Uint8Array-B6jpFBB6.js";import"./isArray-CV7tcOmy.js";import"./_getTag-HkVF-QgG.js";import"./isEqual-KtQk5CnN.js";import"./noop-DX6rZLP_.js";import"./merge-PkoklwUB.js";import"./_initCloneObject-Bh5HWbpD.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CbrDphCM.js";import"./inputBaseClasses-BMTzFsPJ.js";import"./calculateFriendlyFileSize-B4sPoU2L.js";import"./CheckCircleTwoTone-Ty_us4is.js";import"./InfoTwoTone-rbOzY5QT.js";import"./useMutation-DaNzmEzQ.js";import"./dayjs.min-CbGnbLpw.js";import"./chunk-AYJ5UCUI-DCSckdQY.js";import"./cloneDeep-CvkUHlHg.js";import"./Skeleton-CvrJKXGx.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Cfh1ISk5.js";import"./Backdrop-ny4D8UkP.js";import"./LinearProgress-CgGXrEBr.js";import"./uniq-DUQegDgT.js";import"./Plot-BakoyWPA.js";import"./index-Chjiymov.js";import"./_createAggregator-DWp2S9x6.js";import"./_baseEach-CQCzqfUD.js";import"./_baseIteratee-Dlrpz6Vx.js";import"./_baseGet-BKNKxkxZ.js";import"./isSymbol-BhCFEInU.js";import"./toString-BOGGYPmT.js";import"./hasIn-DmFJG4jW.js";import"./_baseOrderBy-CrzvQMZK.js";import"./_baseMap-CQ3GvGCW.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
