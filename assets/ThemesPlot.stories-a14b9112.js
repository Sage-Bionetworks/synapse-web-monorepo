import{T as p}from"./ThemesPlot-dda51e49.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-1ae0383c.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-4e276c82.js";import"./IconSvg-6a8129fe.js";import"./createSvgIcon-7fa7efea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-22375f15.js";import"./Tooltip-8bd5513a.js";import"./useTheme-cde0f631.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-a0d5bea7.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-0cc1eea7.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-a472eded.js";import"./GetAppTwoTone-468257c3.js";import"./InfoOutlined-8a900a32.js";import"./CheckCircleTwoTone-b25a5ea9.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-3b4ec3a7.js";import"./SynapseConstants-8475b854.js";import"./OrientationBanner-e18cce1c.js";import"./FullWidthAlert-9e00f859.js";import"./AlertTitle-6e236fcd.js";import"./Paper-9598301d.js";import"./IconButton-005300d9.js";import"./ButtonBase-e9d7809c.js";import"./emotion-react.browser.esm-0e04c803.js";import"./assertThisInitialized-081f9914.js";import"./Typography-43164bc2.js";import"./extendSxProp-8e3bfbb0.js";import"./Stack-4fa57222.js";import"./Box-50261c1d.js";import"./ClickAwayListener-e5c35437.js";import"./Button-d1306030.js";import"./ShowMore-7427d245.js";import"./Dropdown-78eb623f.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-14bcec9b.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-d7646a6f.js";import"./Link-7bf366a7.js";import"./_getTag-71ef705c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./tiny-invariant-dd7d57d2.js";import"./inputBaseClasses-993f1e72.js";import"./Fade-952926d2.js";import"./SqlFunctions-5fc20630.js";import"./factory-275e83af.js";import"./_baseClone-a21dc8a6.js";import"./_Uint8Array-a12b4c8b.js";import"./_baseTimes-8715be3e.js";import"./sortBy-02e67701.js";import"./hasIn-7fd12042.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_getMatchData-f427aa15.js";import"./_baseIsEqual-8e6c960b.js";import"./_cacheHas-45cb4b4f.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-7abfbb6a.js";import"./_overRest-f4c3ba05.js";import"./_isIterateeCall-400069c0.js";import"./pick-8fc40a5a.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-4d2b3751.js";import"./uniq-757f45bf.js";import"./times-2df160ae.js";import"./without-4952e3af.js";import"./isArrayLikeObject-9a2d3845.js";import"./merge-d860428d.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-49734a95.js";import"./isEqual-8d6bd5e7.js";import"./isNil-26b06057.js";import"./LoadingScreen-7bfb58dd.js";import"./Backdrop-ca75827d.js";import"./LinearProgress-e0089ad8.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ThemesPlot.stories-a14b9112.js.map
