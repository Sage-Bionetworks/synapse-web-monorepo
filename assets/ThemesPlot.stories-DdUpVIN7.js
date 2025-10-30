import{T as p}from"./ThemesPlot-Bh-tM85v.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DP5r_8h_.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-B374GTlB.js";import"./OrientationBanner-BU-7X07a.js";import"./index-DOh4s_-E.js";import"./index-BtGDcTvp.js";import"./iframe-CBNphiDP.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cn6UXufh.js";import"./FullWidthAlert-DNI0u40D.js";import"./Alert-C_0F6J7S.js";import"./createTheme-C4xHNGdh.js";import"./DefaultPropsProvider-BHwoOyH7.js";import"./useSlot-4Dt2bm7X.js";import"./useForkRef-BiijcE59.js";import"./createSimplePaletteValueFilter-C_Cdnk9R.js";import"./createSvgIcon-s4G4qou3.js";import"./Close-Cg5bmZHm.js";import"./IconButton-DwyAerDa.js";import"./useTimeout-Cmz87tz9.js";import"./ButtonBase-DBuVifEX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BMJ4Jv0_.js";import"./Paper-q9JuhaB3.js";import"./useTheme-Dx4TqPEY.js";import"./useTheme-DwROfidY.js";import"./Stack-DYtdGJnP.js";import"./useThemeProps-BpG_5eyZ.js";import"./getThemeProps-gvKTAKTt.js";import"./extendSxProp-B_iH4oL0.js";import"./Box-DcHUT-iR.js";import"./AlertTitle-Cc_aOr1q.js";import"./Typography-C87QV3YC.js";import"./index-DValAcPx.js";import"./ClickAwayListener-C8du9OzG.js";import"./getReactElementRef-Bvp3nBcK.js";import"./index-umcRd70c.js";import"./index-ChFLTI6y.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-7xCOvQFP.js";import"./Tooltip-BVGISXDf.js";import"./index-VuQkd2dy.js";import"./useControlled-ChZzA-b3.js";import"./Popper-1yvfHCmZ.js";import"./Button-X-aMYJSh.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DKU6Kxm0.js";import"./QueryClientProvider-Drv3DDYU.js";import"./Link-DNZklxO1.js";import"./Collapse-Bo6KiRDL.js";import"./_baseUniq-D9WPqwKE.js";import"./_Uint8Array-CtW1SfOY.js";import"./isArray-DJCEQSyb.js";import"./_getTag-C_b1pV5H.js";import"./isEqual-XYNdVziB.js";import"./noop-DX6rZLP_.js";import"./merge-BiadW8tB.js";import"./_initCloneObject-KGx9qkw7.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bp6vP_zE.js";import"./inputBaseClasses-ESUxP_6L.js";import"./calculateFriendlyFileSize-BGNYAu__.js";import"./CheckCircleTwoTone-B_j1OfQE.js";import"./InfoTwoTone-Fe5W6L4i.js";import"./useMutation-CR2RaXsm.js";import"./dayjs.min-BFapz5wS.js";import"./chunk-AYJ5UCUI-C5f8fAX_.js";import"./cloneDeep-BD-s7-9R.js";import"./Skeleton-DdZWbvza.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DFxQqN42.js";import"./Backdrop-Dlas9S1p.js";import"./LinearProgress-BA9iZH2r.js";import"./uniq-BIXm7-Gd.js";import"./Plot-Dsu2vc8V.js";import"./index-Chjiymov.js";import"./_createAggregator-Chea-py4.js";import"./_baseEach-eEaoZidx.js";import"./_baseIteratee-DWVIdYB-.js";import"./_baseGet-CZviPgIk.js";import"./isSymbol-jJgaIxLY.js";import"./toString-zDFlmQqe.js";import"./hasIn-YGLWWMQi.js";import"./_baseOrderBy-QZVzlDj0.js";import"./_baseMap-BSVxBLFH.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
