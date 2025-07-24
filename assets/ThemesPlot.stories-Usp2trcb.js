import{T as p}from"./ThemesPlot-BI4C-gc6.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BPLeY_T0.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BDTIQPW-.js";import"./OrientationBanner-D6TfClQZ.js";import"./index-CFBRiZ1w.js";import"./index-D74nAv4K.js";import"./iframe-Ccor4afl.js";import"./spreadSx-CwcO6WA9.js";import"./react-D-QmtcUJ.js";import"./FullWidthAlert-D1IF5V4Z.js";import"./Alert-Cp1wuOAE.js";import"./createTheme-DgzdyVUD.js";import"./DefaultPropsProvider-BaSYOPs_.js";import"./useSlot-DG2qCDn3.js";import"./useForkRef-BMxq_MIC.js";import"./createSimplePaletteValueFilter-BtXRE-wI.js";import"./createSvgIcon-Ksakvuew.js";import"./Close-qu3HWGgD.js";import"./IconButton-IqySOcq2.js";import"./useTimeout--jiegund.js";import"./ButtonBase-DzpekvZp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bp9rJEqc.js";import"./Paper-CazC8z3H.js";import"./useTheme-B2s4EB7u.js";import"./useTheme-Ca_XsRek.js";import"./Stack-nACsOQMl.js";import"./extendSxProp-BzmqKLI1.js";import"./getThemeProps-DZdSY8L1.js";import"./Box-lXBqa0w4.js";import"./AlertTitle-VLBSHrk2.js";import"./Typography-4g68DreH.js";import"./index-svIImqrz.js";import"./ClickAwayListener-Bz-ReVU0.js";import"./getReactElementRef-Box9zENy.js";import"./index-Cg-NYdTp.js";import"./index-B23RCk9E.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CjNaCVG-.js";import"./Tooltip-C8ZStvVN.js";import"./index-Ct9Rf63b.js";import"./useControlled-D3eLpMPG.js";import"./Popper-DdPF3MkX.js";import"./Button-Ci0K1sFb.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-aHTHwXyx.js";import"./QueryClientProvider-BRldLZ-m.js";import"./Link-BnLqsAr0.js";import"./Collapse-CYQyUAKl.js";import"./_baseUniq-BI6FpUhd.js";import"./_Uint8Array-CgpluCFv.js";import"./isArray-DcG_fQmu.js";import"./_getTag-Y03KTm9l.js";import"./isEqual-B4Y5Mthl.js";import"./merge-DTTjlo60.js";import"./_initCloneObject-BkHORoGk.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-8AEzUVpA.js";import"./inputBaseClasses-_-Z8ymSP.js";import"./calculateFriendlyFileSize-DVdgBpm5.js";import"./CheckCircleTwoTone-DNy4X0lL.js";import"./InfoTwoTone-DljfHxNq.js";import"./useMutation-Cb2l52Mt.js";import"./dayjs.min-CkZTX9Mn.js";import"./chunk-AYJ5UCUI-Bm-JoqAt.js";import"./cloneDeep-DhV9vMAr.js";import"./Skeleton-DyqvYy1n.js";import"./SqlFunctions-Dcy2rA-G.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DDNzTic9.js";import"./Backdrop-CvXZ4Xev.js";import"./LinearProgress-DxDiFvbg.js";import"./uniq-DPmCqdmP.js";import"./Plot-Cclh8QeJ.js";import"./index-Chjiymov.js";import"./_createAggregator-HKdtvTDa.js";import"./_baseEach-BGaxw7Q9.js";import"./_baseIteratee-CRlgIQLJ.js";import"./_baseGet-BfCYZAz6.js";import"./isSymbol-Dd_nArVn.js";import"./toString-BUfGd_wO.js";import"./hasIn-DwgYqOwa.js";import"./_baseOrderBy-CYmodyhU.js";import"./_baseMap-CYbWkZCC.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
