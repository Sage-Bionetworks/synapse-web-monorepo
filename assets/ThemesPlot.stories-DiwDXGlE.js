import{T as p}from"./ThemesPlot-BVPSpmp2.js";import"./jsx-runtime-CguOVfHD.js";import"./index-BPLjgkvc.js";import"./iframe-HsP_CKag.js";import"./useFiles-Dg7eR79m.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-BxpxSwZg.js";import"./OrientationBanner-C0kyK34I.js";import"./index-9yjLkDDq.js";import"./spreadSx-CwcO6WA9.js";import"./react-tnRwdzGP.js";import"./FullWidthAlert-D6eLCa6A.js";import"./Alert-B5AVurxH.js";import"./createTheme-DSQpJzsh.js";import"./DefaultPropsProvider-BFT5Y31i.js";import"./useSlot-IIo6VvIg.js";import"./useForkRef-C8XUjv9b.js";import"./createSimplePaletteValueFilter-CQ41cGYC.js";import"./createSvgIcon-dnX2B-sC.js";import"./Close-SfuOdAFJ.js";import"./IconButton-BwxFgBKe.js";import"./useTimeout-Iw5I26ua.js";import"./ButtonBase-Dh8mOJ4H.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CiFyp6L0.js";import"./Paper-D6ksFxPp.js";import"./useTheme-D_FaDKRS.js";import"./useTheme-Bz8qIJiG.js";import"./Stack-CZLd3YjP.js";import"./extendSxProp-BMJn0HH0.js";import"./getThemeProps-Dfy_7JRT.js";import"./Box-ov5DWmLq.js";import"./AlertTitle-vhhceDVB.js";import"./Typography-B2Whpmc6.js";import"./index-CT6kAEcw.js";import"./ClickAwayListener-D9ee_HqF.js";import"./getReactElementRef-D-mRAnyG.js";import"./index-BLYj9l4G.js";import"./index-D4coSwQD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAMsuofr.js";import"./Tooltip-C_eS1gRK.js";import"./index-6eOWtwI5.js";import"./useControlled-CCxX1tZW.js";import"./Popper-n-GOgUYn.js";import"./Button-txH2CBk9.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-Cpcl1qQp.js";import"./utils-DLVmLcJd.js";import"./Link-p85Y9p0X.js";import"./Collapse-C-5hsue_.js";import"./isNil-DexuwFSn.js";import"./_Uint8Array-RSwHdnNb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BpJD8AE3.js";import"./isArray-Dxzbedgu.js";import"./isEqual-B_PFPNDj.js";import"./_getTag-BVfIJeFy.js";import"./tinycolor-Begke6kS.js";import"./Fade-C0pPIw3E.js";import"./inputBaseClasses-DajRJ63n.js";import"./calculateFriendlyFileSize-DHNphkMw.js";import"./CheckCircleTwoTone-CzmQ4BzX.js";import"./InfoTwoTone-DKYXWrg4.js";import"./useMutation-BZ9E3-1P.js";import"./dayjs.min-Dv3fukef.js";import"./chunk-AYJ5UCUI-DoXlqfXr.js";import"./cloneDeep-B6usTqsl.js";import"./_initCloneObject-D0FHna8U.js";import"./Skeleton-CB7phFqE.js";import"./merge-CGet5vcJ.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-C0P3x86-.js";import"./Backdrop-CR2So-tG.js";import"./LinearProgress-BUosRv5q.js";import"./uniq-ER1txWAp.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-Dw7eEmcZ.js";import"./index-Chjiymov.js";import"./_createAggregator-kOCE7nuo.js";import"./_baseEach-BHLKWsc1.js";import"./_baseIteratee-BZhX5QQP.js";import"./_baseGet-uanuLTaD.js";import"./isSymbol-BD4h7GP6.js";import"./toString-DwusrVHA.js";import"./hasIn-CdhBY7Kp.js";import"./_baseOrderBy--pRhrkyu.js";import"./_baseMap-tVE5GsIN.js";import"./head-aneRfQQJ.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Ro=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Ro as __namedExportsOrder,Qo as default};
