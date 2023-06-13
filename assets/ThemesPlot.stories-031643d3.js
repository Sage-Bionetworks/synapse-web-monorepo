import{T as e}from"./ThemesPlot-e7e9c02a.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-6270ff5a.js";import"./SynapseTableConstants-942d2b0b.js";import"./IconSvg-42c8b30f.js";import"./createSvgIcon-cc5dda5a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./styled-29603136.js";import"./Tooltip-f9c1481b.js";import"./useTheme-81f60015.js";import"./Grow-e114a38b.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-1b9aecd1.js";import"./index-8ce4a492.js";import"./utils-6fd1852e.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-979937b1.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-44a893d4.js";import"./InfoOutlined-43adcfd5.js";import"./CheckCircleTwoTone-0531502d.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-7b02558f.js";import"./SynapseConstants-351603e3.js";import"./OrientationBanner-646a27ec.js";import"./FullWidthAlert-4144e1c5.js";import"./AlertTitle-2a627105.js";import"./Paper-e7d00d51.js";import"./IconButton-5d241967.js";import"./ButtonBase-2d6e1c83.js";import"./emotion-react.browser.esm-f80eee79.js";import"./assertThisInitialized-081f9914.js";import"./Typography-387311b4.js";import"./extendSxProp-51f2db60.js";import"./Stack-16937500.js";import"./Box-653de305.js";import"./ClickAwayListener-ce43512b.js";import"./Button-5c815620.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-b23c829e.js";import"./unCamelCase-16699814.js";import"./without-0813b70e.js";import"./_cacheHas-dc66c573.js";import"./_MapCache-ec523b9c.js";import"./SynapseClient-1184419f.js";import"./getEndpoint-ac94413e.js";import"./Link-c02845c3.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./inputBaseClasses-dd60d6ee.js";import"./Fade-59e1463e.js";import"./_baseTimes-8cccc40f.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseRest-7ac8e2ff.js";import"./isArrayLikeObject-c3b19699.js";import"./hasIn-ec032a02.js";import"./_Uint8Array-21cfa392.js";import"./_isIndex-af14b756.js";import"./pick-024e14e1.js";import"./_baseClone-5afe92d8.js";import"./_baseSlice-cf92e063.js";import"./sortBy-e91e51db.js";import"./_setToArray-3d6ec6fd.js";import"./_baseFor-d254fa1e.js";import"./_isIterateeCall-d785f0e7.js";import"./uniq-0fe924ef.js";import"./times-d8c1921e.js";import"./SqlFunctions-2e28d187.js";import"./factory-837f2467.js";import"./lodash.default-0b88e8ac.js";import"./omitBy-e1f69dd2.js";import"./upperFirst-79e605a3.js";import"./merge-e007bbaa.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-b9c24201.js";import"./groupBy-d35ba521.js";import"./startCase-a375db73.js";import"./toLower-271fcf43.js";import"./LoadingScreen-7013a393.js";import"./LinearProgress-b19ca625.js";import"./Backdrop-678bb8a2.js";const jo={title:"Home Page/ThemesPlot",component:e},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ThemesPlot.stories-031643d3.js.map
