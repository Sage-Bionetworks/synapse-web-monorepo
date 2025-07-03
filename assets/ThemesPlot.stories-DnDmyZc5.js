import{T as p}from"./ThemesPlot-fwGfAFbz.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BgDpzSnZ.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-DGsf9P7A.js";import"./OrientationBanner-CTtXbnax.js";import"./index-9tLppOC1.js";import"./index-yCUnEpY5.js";import"./iframe-gNKfM8gk.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dul7Z0Mc.js";import"./FullWidthAlert-DNjDgXrI.js";import"./Alert-DpGXSR6i.js";import"./createTheme-B4aZ-Zb2.js";import"./DefaultPropsProvider-Cw4cD2Gs.js";import"./useSlot-aoyyrGdd.js";import"./useForkRef-M_noYJ9D.js";import"./createSimplePaletteValueFilter-51s7PY1W.js";import"./createSvgIcon-oOHEqfPt.js";import"./Close-CEW3NUG1.js";import"./IconButton-CY4FGYEd.js";import"./useTimeout-CuZ_JqjA.js";import"./ButtonBase-KeBM-9MT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cf6g4eFb.js";import"./Paper-Cl6BDWzj.js";import"./useTheme-BmTDZfhV.js";import"./useTheme-6GaGjVsK.js";import"./Stack-STyAyUlw.js";import"./extendSxProp-CIrdn-hR.js";import"./getThemeProps-D8PjLR4-.js";import"./Box-BpOhxbKA.js";import"./AlertTitle-CUoFin8k.js";import"./Typography-SZRRhZD9.js";import"./index-Dp2dJGDM.js";import"./ClickAwayListener-DfC_WHzv.js";import"./getReactElementRef-XvbMGsPx.js";import"./index-CeNEsVvN.js";import"./index-ADdtT980.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CgDG11Ji.js";import"./Tooltip-B0dyqfMl.js";import"./index-Ju-LDmZ1.js";import"./useControlled-B6_8KTCH.js";import"./Popper-DF-ZzgM2.js";import"./Button-BfDj8hwD.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CXRWCbXO.js";import"./QueryClientProvider-ciQTGKoG.js";import"./Link-DSFeBM2I.js";import"./Collapse-BBN76sqD.js";import"./_baseUniq-DrUqYJIw.js";import"./_Uint8Array-Bou5iouL.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BcAt8LvK.js";import"./isArray-Dxzbedgu.js";import"./_getTag-4mQ6siyT.js";import"./isEqual-RUS3s1a1.js";import"./merge-BQXjkqWm.js";import"./_initCloneObject-B3ZOc9-m.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-tqVDjiEK.js";import"./inputBaseClasses-BMS-bvkT.js";import"./calculateFriendlyFileSize-DRlc7BcI.js";import"./CheckCircleTwoTone-Db5nc3S1.js";import"./InfoTwoTone-Bo1e0FiV.js";import"./useMutation-Cyqe_83_.js";import"./dayjs.min-C35W30AG.js";import"./chunk-AYJ5UCUI-CQTlz4ZC.js";import"./cloneDeep-C-8X_Eyi.js";import"./Skeleton-BHgRHJw1.js";import"./SqlFunctions-c3WXx9n7.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-D6UOJqJ_.js";import"./Backdrop-DnS2_k8W.js";import"./LinearProgress-D0Gm_ybT.js";import"./uniq-6NkeWDYb.js";import"./Plot-Bl5HK6yv.js";import"./index-Chjiymov.js";import"./_createAggregator-DfRsOt1n.js";import"./_baseEach-CGgSoIqQ.js";import"./_baseIteratee-49rBfDOG.js";import"./_baseGet-GnWCDqeO.js";import"./isSymbol-DszXGz9c.js";import"./toString-BqURqHdh.js";import"./hasIn-CalGwcJ_.js";import"./_baseOrderBy-B-6TQ3u9.js";import"./_baseMap-CuP6Mztd.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
