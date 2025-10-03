import{T as p}from"./ThemesPlot-RLAinNN1.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-CeB0xe6L.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-CEjEDq8u.js";import"./OrientationBanner-CGeLU5Gh.js";import"./index-nnySlh3_.js";import"./index-gzV-alW2.js";import"./iframe-CIVWQ33K.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bm_BhgKX.js";import"./FullWidthAlert-XP7ocI2x.js";import"./Alert-C3HI3P9G.js";import"./createTheme-BA32YtVb.js";import"./DefaultPropsProvider-7LTu_nV0.js";import"./useSlot-Fmis5Wjd.js";import"./useForkRef-CiJASnht.js";import"./createSimplePaletteValueFilter-0d-v7Hop.js";import"./createSvgIcon-D1QNFdjc.js";import"./Close-62PudIRj.js";import"./IconButton-D8S1CJpy.js";import"./useTimeout-CxPr5NUX.js";import"./ButtonBase-BCM_qFb6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-WbW725xQ.js";import"./Paper-C7lyUKCR.js";import"./useTheme-BZAXixA8.js";import"./useTheme-Da2-NH-T.js";import"./Stack-C6tV91ai.js";import"./useThemeProps-BIHnaG_n.js";import"./getThemeProps-ChgRYrqu.js";import"./extendSxProp-YxuWZy5-.js";import"./Box-BPtaDF2R.js";import"./AlertTitle-CpWyWMb4.js";import"./Typography-CZJl8X-1.js";import"./index-Du0AoN3s.js";import"./ClickAwayListener-CBaHIHRJ.js";import"./getReactElementRef-y_Sl7aoG.js";import"./index-C0-mTje_.js";import"./index-B91qemJH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D-7O8-XK.js";import"./Tooltip-zgLZWkWd.js";import"./index-B4U5oXLw.js";import"./useControlled-D-YZcAca.js";import"./Popper-KFskyvW_.js";import"./Button-qzsh14nT.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-RFtqpdqG.js";import"./QueryClientProvider-C8qXa91E.js";import"./Link-DogJ1V6b.js";import"./Collapse-CnT0kb48.js";import"./_baseUniq-DGNmZFTe.js";import"./_Uint8Array-DQwJx2XB.js";import"./isArray-DVD3pNqz.js";import"./_getTag-DdIxGYJG.js";import"./isEqual-BSGvFaHM.js";import"./noop-DX6rZLP_.js";import"./merge-CmCs04-I.js";import"./_initCloneObject-BHRy_7Wm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DND1I4Lo.js";import"./inputBaseClasses-BLHktJev.js";import"./calculateFriendlyFileSize-zUPO000Z.js";import"./CheckCircleTwoTone-DCcbywJT.js";import"./InfoTwoTone-DV-D_RT7.js";import"./useMutation-BzDbphy2.js";import"./dayjs.min-LJjFF34K.js";import"./chunk-AYJ5UCUI-C5BA4_2k.js";import"./cloneDeep-DU8IJ5IE.js";import"./Skeleton-DVIPn0Lj.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BG_4fNIC.js";import"./Backdrop-CmYaljhw.js";import"./LinearProgress-u-jlTzmb.js";import"./uniq-DKDJFufu.js";import"./Plot-CErlRTRt.js";import"./index-Chjiymov.js";import"./_createAggregator-BVsKcCPY.js";import"./_baseEach-CdpYsnEG.js";import"./_baseIteratee-g6gL6fhy.js";import"./_baseGet-q4r-0u4O.js";import"./isSymbol-Bm-mgUZ-.js";import"./toString-CYbhFFbq.js";import"./hasIn-CGuyK8_r.js";import"./_baseOrderBy-CbN0x1Q2.js";import"./_baseMap-B_-SDYgm.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
