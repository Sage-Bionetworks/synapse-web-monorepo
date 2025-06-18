import{T as p}from"./ThemesPlot-CoDoNBpm.js";import"./jsx-runtime-DPiG3R0R.js";import"./index-DRlER7nw.js";import"./iframe-gi3XisdE.js";import"./useFiles-DU3bXuAE.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-DsCgHoOU.js";import"./OrientationBanner-DJ4alAZp.js";import"./index-BI1mSjG2.js";import"./spreadSx-CwcO6WA9.js";import"./react-BnG7FJAV.js";import"./FullWidthAlert-R6EVtHKx.js";import"./Alert-BYxbQIxM.js";import"./createTheme-DQIvOmBk.js";import"./DefaultPropsProvider-UlX5bXx-.js";import"./useSlot-D8yvO1xQ.js";import"./useForkRef-ChqFpJWE.js";import"./createSimplePaletteValueFilter-DVwuXgvt.js";import"./createSvgIcon-CtDRwr3p.js";import"./Close-BBiabR_k.js";import"./IconButton-CNH7gO9P.js";import"./useTimeout-B2bPIzMS.js";import"./ButtonBase-D3zgPrFN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-O-qj_I90.js";import"./Paper-Df0ViG5C.js";import"./useTheme-DNUoLfsv.js";import"./useTheme-B_Xprks4.js";import"./Stack-pM5AE4OC.js";import"./extendSxProp-1Gj-CtJT.js";import"./getThemeProps-DP5W_O2x.js";import"./Box-Y1nj0ApN.js";import"./AlertTitle-Bk5UvP8h.js";import"./Typography-BCGqRzgO.js";import"./index-CFzJowKf.js";import"./ClickAwayListener-YB_ofQ_g.js";import"./getReactElementRef-Dw4MON7M.js";import"./index-B4fFtDTl.js";import"./index-DdFze2Ln.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BONjhKmI.js";import"./Tooltip-CtRWM5bs.js";import"./index-DanVeDdQ.js";import"./useControlled-C8ZsNrtG.js";import"./Popper-yosZaOGL.js";import"./Button-AJnSQ6Ut.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-BFkXHN1n.js";import"./utils-FQaTZWKo.js";import"./Link-Y_M4S6oM.js";import"./Collapse-BwMzmQIR.js";import"./isNil-BPAgBugS.js";import"./_Uint8Array-BS3jSnnJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DT1F5_Ix.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BHCCo4qE.js";import"./_getTag-BqzSQALn.js";import"./tinycolor-Begke6kS.js";import"./Fade-DT4Zl6lr.js";import"./inputBaseClasses-DXtOTEzM.js";import"./calculateFriendlyFileSize-CB-owWsp.js";import"./CheckCircleTwoTone-BDWuetOC.js";import"./InfoTwoTone-Ms5lPGxf.js";import"./useMutation-96DTmNIV.js";import"./dayjs.min-hNWLMaQU.js";import"./chunk-AYJ5UCUI-DL7t06aT.js";import"./cloneDeep-C3r-Yrwt.js";import"./_initCloneObject-BLTkGPGB.js";import"./Skeleton-CZHFA_u-.js";import"./merge-CBSVjRxV.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-o6NDlEEX.js";import"./Backdrop--OtiCitv.js";import"./LinearProgress-D5W31BuD.js";import"./uniq-C_vX2UOr.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-RXFJydNg.js";import"./index-Chjiymov.js";import"./_createAggregator-BDiovge0.js";import"./_baseEach-BN9ga7hA.js";import"./_baseIteratee-DvE8Ik7c.js";import"./_baseGet-DKjxS-yc.js";import"./isSymbol-CjqP9xKe.js";import"./toString-D1XFNLEL.js";import"./hasIn-Bu7hD2Q0.js";import"./_baseOrderBy-DC_YHF2G.js";import"./_baseMap-C7H3Ku58.js";import"./head-aneRfQQJ.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
