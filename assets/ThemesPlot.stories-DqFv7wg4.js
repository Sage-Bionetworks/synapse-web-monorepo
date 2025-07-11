import{T as p}from"./ThemesPlot-Bchcb77r.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-Cicb2Fab.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CTkk0YcO.js";import"./OrientationBanner-BlUDpySg.js";import"./index-DQ--YI-K.js";import"./index-BGNdVh4R.js";import"./iframe-AE1mdQoy.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cuejj4jT.js";import"./FullWidthAlert-Be2gwQj0.js";import"./Alert-CrqIY-wz.js";import"./createTheme-X1uAO7Ls.js";import"./DefaultPropsProvider-DeTWygJX.js";import"./useSlot-CPEJSkHd.js";import"./useForkRef-C2dIUn0r.js";import"./createSimplePaletteValueFilter-UFX2hhfO.js";import"./createSvgIcon-CvselUDy.js";import"./Close-C_qvVBoC.js";import"./IconButton-C680_5sO.js";import"./useTimeout-DgF5bVxv.js";import"./ButtonBase-CNobuHaW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dy4elvdO.js";import"./Paper-BG7l0_y8.js";import"./useTheme-Mm30pFmH.js";import"./useTheme-DIi1T6MV.js";import"./Stack-lzsMsHwx.js";import"./extendSxProp-DtVryybG.js";import"./getThemeProps-DdP4bzUV.js";import"./Box-L0O0STFf.js";import"./AlertTitle-CfXld3PK.js";import"./Typography-D1X9pdoV.js";import"./index-C_i8MycT.js";import"./ClickAwayListener-0YWAWQC6.js";import"./getReactElementRef-DtWA-gMz.js";import"./index-DsBOwLp_.js";import"./index-DxPajm_D.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BShcMnXs.js";import"./Tooltip-CZAWndgC.js";import"./index-CqiNrveo.js";import"./useControlled-DQbRxG7o.js";import"./Popper-Dq6SXrQt.js";import"./Button-B1gMTkV-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-B_5XOlz9.js";import"./QueryClientProvider-Bh11H2Tx.js";import"./Link-YzWgcoa0.js";import"./Collapse-DXtiwbuY.js";import"./_baseUniq-d9dUqTFO.js";import"./_Uint8Array-BwRsIvdr.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-3QLBOayV.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DrMv2q-5.js";import"./isEqual-MO8O5CIC.js";import"./merge-CPwsaWlS.js";import"./_initCloneObject-DRS-e6dQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BZMDodWD.js";import"./inputBaseClasses-DGNggaF4.js";import"./calculateFriendlyFileSize-CT4UXWlw.js";import"./CheckCircleTwoTone-BJFSGkoY.js";import"./InfoTwoTone-C-EnLn6a.js";import"./useMutation-DZs3LBGN.js";import"./dayjs.min-BRrhIEIv.js";import"./chunk-AYJ5UCUI-C8bXuSzp.js";import"./cloneDeep-C4z9jnuA.js";import"./Skeleton-xTAD3frA.js";import"./SqlFunctions-CqOxgBqv.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BfiG0_Gw.js";import"./Backdrop-BRgERwgO.js";import"./LinearProgress-BzS2ruNS.js";import"./uniq-CwmGEsGi.js";import"./Plot-CXOeHP7O.js";import"./index-Chjiymov.js";import"./_createAggregator-AbV3-r_f.js";import"./_baseEach-Br5TVzBs.js";import"./_baseIteratee-PBSKu1FW.js";import"./_baseGet-DWphembt.js";import"./isSymbol-kN_Qz5I_.js";import"./toString-B1ziVYQD.js";import"./hasIn-B6bWx1M7.js";import"./_baseOrderBy-dzFMdddK.js";import"./_baseMap-D5Uy779U.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
