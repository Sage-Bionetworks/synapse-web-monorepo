import{T as p}from"./ThemesPlot-DMLqQuRv.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DP9dLTbC.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-Cs7kIee5.js";import"./OrientationBanner-DNKWbF4H.js";import"./index-DeEnkZTg.js";import"./index-D7PBaRdl.js";import"./iframe-BMKYlU_t.js";import"./spreadSx-CwcO6WA9.js";import"./react-DtBDPJ6z.js";import"./FullWidthAlert-C3S58vYB.js";import"./Alert-BDMRwB6G.js";import"./createTheme-D01eg2ZR.js";import"./DefaultPropsProvider-CyA_mLEZ.js";import"./useSlot-Bf1xc4IK.js";import"./useForkRef-B7cAnUkU.js";import"./createSimplePaletteValueFilter-RxOFhxsU.js";import"./createSvgIcon-CXNGspcB.js";import"./Close-BkAE9Dlk.js";import"./IconButton-CVUHAMRf.js";import"./useTimeout-DNCswdg1.js";import"./ButtonBase-BYlrH_BG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CFDRIou5.js";import"./Paper-BuMxbUlT.js";import"./useTheme-D7vyOj74.js";import"./useTheme-Crp6xkqA.js";import"./Stack-Cmz1Aqci.js";import"./extendSxProp-CHQ4xt1P.js";import"./getThemeProps-iIqqzIfW.js";import"./Box-DJHHlrYT.js";import"./AlertTitle-DygMeu_O.js";import"./Typography-CrfNLDTB.js";import"./index-Ck5RF-vh.js";import"./ClickAwayListener-C3qWP59K.js";import"./getReactElementRef-sEjvg3Zz.js";import"./index-C5LFuBYW.js";import"./index-MaejsBJ1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BHJ1L0ra.js";import"./Tooltip-Dr56EzbH.js";import"./index-CQ4lrqCV.js";import"./useControlled-CnOewArD.js";import"./Popper-CjNr2Bcb.js";import"./Button-DRHCs_dP.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DobhWTp-.js";import"./QueryClientProvider-CMkDsy49.js";import"./Link-psqro1J4.js";import"./Collapse-BIwUXTLr.js";import"./_baseUniq-pl7LP8Kf.js";import"./_Uint8Array-DN8s_PQG.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CBGZ-2E2.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BNvN_keD.js";import"./isEqual-D3Tg9h2Q.js";import"./merge-cjL6PIqo.js";import"./_initCloneObject-BZWksmAU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BUFeIqQL.js";import"./inputBaseClasses-BTRyhxsc.js";import"./calculateFriendlyFileSize-1dWTby-6.js";import"./CheckCircleTwoTone-FMR-aIpc.js";import"./InfoTwoTone-BmhX0P_F.js";import"./useMutation-BOGcq4zV.js";import"./dayjs.min-CWkIm1vk.js";import"./chunk-AYJ5UCUI-Cn4KvQIf.js";import"./cloneDeep-DFbYzaiX.js";import"./Skeleton-7oiMZ30H.js";import"./SqlFunctions-c3WXx9n7.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Bqn1hn3N.js";import"./Backdrop-DeWEzbN9.js";import"./LinearProgress-Cj0ewHC-.js";import"./uniq-BTxxm9gf.js";import"./Plot-BNxWljkA.js";import"./index-Chjiymov.js";import"./_createAggregator-LQR_7xTk.js";import"./_baseEach-BRJNjDG1.js";import"./_baseIteratee-Cf4op5-S.js";import"./_baseGet-CcOIGkbF.js";import"./isSymbol-B8AihsWQ.js";import"./toString-BpXtAKIk.js";import"./hasIn-l9SNFLdE.js";import"./_baseOrderBy-Cm3QWlXQ.js";import"./_baseMap-Ivqr80Pc.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
