import{T as p}from"./ThemesPlot-BI8k_LwT.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BQEO-69M.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-ByJ4SBiX.js";import"./OrientationBanner-BUQ62TYj.js";import"./index-BDqCLLtG.js";import"./index-CcrsiwgI.js";import"./iframe-DkAN1I_g.js";import"./spreadSx-CwcO6WA9.js";import"./react-BSbW4s-G.js";import"./FullWidthAlert-5Ne4J_9o.js";import"./Alert-xBWLXl1Y.js";import"./createTheme-D0pL0qQP.js";import"./DefaultPropsProvider-H9_8ZvTU.js";import"./useSlot-CDWcpGsY.js";import"./useForkRef-CWW1kaxd.js";import"./createSimplePaletteValueFilter-CdCRSs_B.js";import"./createSvgIcon-EFbRc6ub.js";import"./Close-mR81D45w.js";import"./IconButton-B-H21jSi.js";import"./useTimeout-KPLmy49i.js";import"./ButtonBase-CixOXMZC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D1i1Xybt.js";import"./Paper-C5Va8tEQ.js";import"./useTheme-Bv7DV3GC.js";import"./useTheme-C9aeDpm1.js";import"./Stack-DB53MkM8.js";import"./extendSxProp-BOrFJbhA.js";import"./getThemeProps-CqvZsTgu.js";import"./Box-5WPD-AqJ.js";import"./AlertTitle-BRV0cPHG.js";import"./Typography-Blcis-6R.js";import"./index-D79hvqRM.js";import"./ClickAwayListener-BOUF5eQl.js";import"./getReactElementRef-DODCH2Uv.js";import"./index-FmU7P8-W.js";import"./index-BQKvVLPL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGALCZc1.js";import"./Tooltip-DW8zSJ13.js";import"./index-EWxYWF3M.js";import"./useControlled-C9ig_TM1.js";import"./Popper-D-2uPAjO.js";import"./Button-xIVjleXs.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Ca66mrDJ.js";import"./QueryClientProvider-DhcOouJr.js";import"./Link-JpAHplQA.js";import"./Collapse-CoBc5Um2.js";import"./_baseUniq-DWDW-Ywk.js";import"./_Uint8Array-DP_PQern.js";import"./isArray-L2CpAKpI.js";import"./_getTag-DMmtDXrU.js";import"./isEqual-CxigYvVh.js";import"./merge-C9M7mJ3m.js";import"./_initCloneObject-16YS23Lt.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BlJ0L8LZ.js";import"./inputBaseClasses-DSbshDwR.js";import"./calculateFriendlyFileSize-D-Ld3tQe.js";import"./CheckCircleTwoTone-Co6ze5Ep.js";import"./InfoTwoTone-S22d2WfP.js";import"./useMutation-C2MhW39A.js";import"./dayjs.min-CYWw-vQ3.js";import"./chunk-AYJ5UCUI-HMrZDw_1.js";import"./cloneDeep-4lWfUU40.js";import"./Skeleton-CNNLcJzv.js";import"./SqlFunctions-C8HqQ3uk.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BI9YY1nz.js";import"./Backdrop-C_vqHE7p.js";import"./LinearProgress-BqNvkYz6.js";import"./uniq-CappvWum.js";import"./Plot-CFaqVjjQ.js";import"./index-Chjiymov.js";import"./_createAggregator-CDYitMzW.js";import"./_baseEach-BgjbITHy.js";import"./_baseIteratee-Q9hVps4s.js";import"./_baseGet-m9YEfWCb.js";import"./isSymbol-yAH-YvQ0.js";import"./toString-D107tVBm.js";import"./hasIn-BWOanqtf.js";import"./_baseOrderBy-C7_ZyTFp.js";import"./_baseMap-CzvEjhhf.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
