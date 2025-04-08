import{T as e}from"./ThemesPlot-CpaDWIc2.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-CqHcB9r4.js";import"./VerificationSubmission-CtqFoX_D.js";import"./SynapseConstants-CMdv2tqR.js";import"./OrientationBanner-N5yxtprX.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-CTZAZdOF.js";import"./Alert-NNHAfyKq.js";import"./createTheme-DCAEEeQ9.js";import"./index-GEGPABih.js";import"./styled-GqwmQbHR.js";import"./mergeSlotProps-D-cfru4O.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-IuIKk-AJ.js";import"./Paper-Dap2c6xL.js";import"./IconButton-BUqwv789.js";import"./ButtonBase-CWW9SwzN.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Stack-CMgji9n-.js";import"./Box-sTghsUmj.js";import"./AlertTitle-CogUI_yl.js";import"./Typography-u5-eOh5K.js";import"./useTheme-C2nLQS7p.js";import"./Grow-DdGCipi8.js";import"./index-BIzb42Jq.js";import"./utils-BUDe8ykH.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BN1O7Byi.js";import"./index-pKvUPVqT.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-JnyLG7Y6.js";import"./StringUtils-BUxkeJpG.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Cctz1ZmX.js";import"./CheckCircleTwoTone-CDfc8b31.js";import"./calculateFriendlyFileSize-BBeMI-i_.js";import"./Skeleton-h9JRD3HJ.js";import"./inputBaseClasses-CTPjn8Z_.js";import"./Fade-C_8BNI_I.js";import"./utils-Bx1BRerw.js";import"./useQuery-BiN9FESP.js";import"./_initCloneObject-BAcHLPB8.js";import"./_baseTimes-M2nZWodf.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./cloneDeep-CT__oUM4.js";import"./Link-kli9SxON.js";import"./Collapse-Cd9-krBm.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-6t4vjKrJ.js";import"./_isIterateeCall-FuixZKJ7.js";import"./SqlFunctions-BME-TI9h.js";import"./LoadingScreen-z8hUqGES.js";import"./Backdrop-BwhHnj0X.js";import"./LinearProgress-KBp2Y_fD.js";import"./Plot-DSBVXOLN.js";import"./index-BfyspvgH.js";import"./_baseEach-C4ntP5E4.js";import"./hasIn-BOlyOHTL.js";import"./isSymbol-VqtJwUUo.js";import"./toString-C-tSuG3i.js";import"./pick-BSFRNhG-.js";import"./_baseSlice-F8doVSIJ.js";import"./_baseIteratee-feaeHIOU.js";import"./noop-DX6rZLP_.js";import"./_baseDifference-Dah6V4bZ.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./unset-B5zxMs8F.js";import"./times-DslHYRns.js";import"./toInteger-2vkq8YOc.js";import"./uniq-jWUMtuG3.js";import"./omitBy-BrqSWPCK.js";import"./pickBy-V4nuzpsd.js";import"./uniqueId-CNPmaLAy.js";import"./isNumber-BR1aE1rr.js";import"./chunk-CcTTw58R.js";import"./sortBy-DvdWGg2_.js";import"./without-BoU-tkGY.js";const jo={title:"Home Page/ThemesPlot",component:e},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const qo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,qo as __namedExportsOrder,jo as default};
