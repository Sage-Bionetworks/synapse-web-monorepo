import{T as p}from"./ThemesPlot-DTEseIWG.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-KkqJyoYZ.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BuxqniVA.js";import"./OrientationBanner-CQ4al9ts.js";import"./index-CqfvS4OY.js";import"./index-B_NH1tG1.js";import"./iframe-DHCImqeI.js";import"./spreadSx-CwcO6WA9.js";import"./react-D2T44UuD.js";import"./FullWidthAlert-Cnt4nJ8k.js";import"./Alert-XDLX-kgZ.js";import"./createTheme-CR4l9uHY.js";import"./DefaultPropsProvider-DObZu-x4.js";import"./useSlot-BgKGFXDJ.js";import"./useForkRef-LW0sx3G7.js";import"./createSimplePaletteValueFilter-B4F2o6yw.js";import"./createSvgIcon-DWa7O56I.js";import"./Close-Di3tbyvY.js";import"./IconButton-BJ3jKP03.js";import"./useTimeout-B2kCgEvL.js";import"./ButtonBase-Bkor91_R.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DoHiQExb.js";import"./Paper-B8iPITrA.js";import"./useTheme-D3T9ikY1.js";import"./useTheme-DIzPV2Gw.js";import"./Stack-CDLC3VVo.js";import"./extendSxProp-CPr-MONH.js";import"./getThemeProps-Ds3KKIqm.js";import"./Box-B3jqVByX.js";import"./AlertTitle-C2sBobMK.js";import"./Typography-i0V5tERP.js";import"./index-O1AecroA.js";import"./ClickAwayListener-Cp_ppUmU.js";import"./getReactElementRef-ByWD4INQ.js";import"./index-BtONyuYK.js";import"./index-BqR61apv.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-PH4sX_uL.js";import"./Tooltip-xaz2F5ki.js";import"./index-VdUxzL5Z.js";import"./useControlled-D93q3dyv.js";import"./Popper-FEJGxMLG.js";import"./Button-DoIvstwE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BuLOb3lc.js";import"./QueryClientProvider-WI38r6wY.js";import"./Link-Dp5s2AVD.js";import"./Collapse-D3fprLKJ.js";import"./_baseUniq-CD_mmW-P.js";import"./_Uint8Array-CyA3Nt41.js";import"./isArray-BOhUVnS7.js";import"./_getTag-C4-01JXd.js";import"./isEqual-DikMqJ7x.js";import"./merge-CCMRKMk9.js";import"./_initCloneObject-Cn82PUw-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTOeofJf.js";import"./inputBaseClasses-CNuRHAx7.js";import"./calculateFriendlyFileSize-DJiWUp2i.js";import"./CheckCircleTwoTone-GQrVTNRb.js";import"./InfoTwoTone-DiCCtnov.js";import"./useMutation-CHIXNxbT.js";import"./dayjs.min-Wk8Alc5x.js";import"./chunk-AYJ5UCUI-C1dCOLZ7.js";import"./cloneDeep-DFZ6TNqL.js";import"./Skeleton-sOiy-Fvd.js";import"./SqlFunctions-C8HqQ3uk.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BnI3JkMw.js";import"./Backdrop-DorHw4JW.js";import"./LinearProgress-CRQSyC1b.js";import"./uniq-CeNg6xsa.js";import"./Plot-QYA6sW3n.js";import"./index-Chjiymov.js";import"./_createAggregator-D7epvzJH.js";import"./_baseEach-B54x99DH.js";import"./_baseIteratee-DN6LajfS.js";import"./_baseGet-mq0-NIPl.js";import"./isSymbol-Dejodpo7.js";import"./toString-B1JWWrjh.js";import"./hasIn-Deq2CcAU.js";import"./_baseOrderBy-kkda6Ib9.js";import"./_baseMap-Hi3xQauK.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
