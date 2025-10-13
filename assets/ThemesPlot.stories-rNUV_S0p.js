import{T as p}from"./ThemesPlot-D7N3Zmb8.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-w6-CIEB7.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BvlkkbYT.js";import"./OrientationBanner-DQJGhgFu.js";import"./index-CWABsZZt.js";import"./index-50V2EGz2.js";import"./iframe-CnNyPxR5.js";import"./spreadSx-CwcO6WA9.js";import"./react-otK05ZBX.js";import"./FullWidthAlert-BQO2ZM0K.js";import"./Alert-B_-c_7mx.js";import"./createTheme-DSq-Mol7.js";import"./DefaultPropsProvider-C9wjepK5.js";import"./useSlot-DsxpMVrm.js";import"./useForkRef-BAPdpbNW.js";import"./createSimplePaletteValueFilter-CldMCLtR.js";import"./createSvgIcon-DGQsVitk.js";import"./Close-CVOLFbw1.js";import"./IconButton-BVSRfYlJ.js";import"./useTimeout-BhJq4kG5.js";import"./ButtonBase-BX83Z0VB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BGTymdZp.js";import"./Paper-BCS61ZLh.js";import"./useTheme-CjTtqgxL.js";import"./useTheme-CZTnF3AF.js";import"./Stack-BQvEapyr.js";import"./useThemeProps-CmnHZ3En.js";import"./getThemeProps-DlbFbBX7.js";import"./extendSxProp-Et1BOirn.js";import"./Box-BDTYEpGC.js";import"./AlertTitle-D8cxvMZv.js";import"./Typography-fBjhrNMo.js";import"./index-CLkWSig2.js";import"./ClickAwayListener-DDweZR_J.js";import"./getReactElementRef-DBAVQkW_.js";import"./index-D3DJx0X2.js";import"./index-CC6HTFNl.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BtgJxlwW.js";import"./Tooltip-C_M9hetJ.js";import"./index-Etco1RFO.js";import"./useControlled-DtifG75u.js";import"./Popper-C9tLJj2J.js";import"./Button-Cf0eu55O.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CH0n5MNt.js";import"./QueryClientProvider-Py7SAasE.js";import"./Link-DFtCODF5.js";import"./Collapse-BeiaCXPV.js";import"./_baseUniq-Cu_OF4Xp.js";import"./_Uint8Array-CzRmNIxi.js";import"./isArray-KvXH-Jx4.js";import"./_getTag-B8WXN5Nr.js";import"./isEqual-CzDcfwhI.js";import"./noop-DX6rZLP_.js";import"./merge-jd3NSUkd.js";import"./_initCloneObject-XmSwrlPI.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByV7WbF5.js";import"./inputBaseClasses-CtqzjeT7.js";import"./calculateFriendlyFileSize-uiD7W4tT.js";import"./CheckCircleTwoTone-DAKkXTN_.js";import"./InfoTwoTone-C_fE8DJq.js";import"./useMutation-0FRbsOeu.js";import"./dayjs.min-C2eBLBEm.js";import"./chunk-AYJ5UCUI-DBs_SlKK.js";import"./cloneDeep-7VEFdNK3.js";import"./Skeleton-Cb30zSej.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CovsMJ6T.js";import"./Backdrop-iwUY4j7_.js";import"./LinearProgress-rA35xzrE.js";import"./uniq-Dkf5_e8K.js";import"./Plot-BwA_7EJd.js";import"./index-Chjiymov.js";import"./_createAggregator-3MN3Hn_J.js";import"./_baseEach-fqXSjI4C.js";import"./_baseIteratee-_nJQ1U6V.js";import"./_baseGet-D95PYwDo.js";import"./isSymbol-prInbR1u.js";import"./toString-DgvCpfGu.js";import"./hasIn-C4YJlJ5M.js";import"./_baseOrderBy-CW0JeD8c.js";import"./_baseMap-BlkmyMXs.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
