import{T as e}from"./ThemesPlot-5e0d539e.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-4fab7989.js";import"./SynapseTableConstants-942d2b0b.js";import"./IconSvg-a14145c9.js";import"./createSvgIcon-c04c1e3c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./styled-0d0c058b.js";import"./Tooltip-ada0ed7d.js";import"./useTheme-48a0a3fd.js";import"./Grow-abebdd1c.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-a7612588.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-81a5221b.js";import"./InfoOutlined-1e8e00a7.js";import"./CheckCircleTwoTone-a72e35ba.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-2dd44e59.js";import"./SynapseConstants-d7ecf847.js";import"./OrientationBanner-64c90f6a.js";import"./FullWidthAlert-ed39f490.js";import"./AlertTitle-1c4986af.js";import"./Paper-c5bb6f3a.js";import"./IconButton-055a3ecb.js";import"./ButtonBase-89336bd6.js";import"./emotion-react.browser.esm-a1e35fdb.js";import"./assertThisInitialized-081f9914.js";import"./Typography-bbc222e1.js";import"./extendSxProp-32377841.js";import"./Stack-b1aaecb6.js";import"./Box-079b1034.js";import"./ClickAwayListener-36b79525.js";import"./Button-6910d769.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-b82f3f4a.js";import"./unCamelCase-57a09170.js";import"./without-555bae1d.js";import"./_cacheHas-53339ad5.js";import"./_MapCache-d94d66ff.js";import"./SynapseClient-3126859e.js";import"./getEndpoint-ac94413e.js";import"./Link-c55ec6e2.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./inputBaseClasses-2d1e355f.js";import"./Fade-8ab202b4.js";import"./_baseTimes-8cccc40f.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseRest-cc0c16f2.js";import"./isArrayLikeObject-0061cbb2.js";import"./hasIn-16ee41b9.js";import"./_Uint8Array-05b8ef4b.js";import"./_isIndex-af14b756.js";import"./pick-c0b482d0.js";import"./_baseClone-952f47b8.js";import"./_baseSlice-cf92e063.js";import"./sortBy-abccc7e9.js";import"./_setToArray-3d6ec6fd.js";import"./_baseFor-d254fa1e.js";import"./_isIterateeCall-4cbff176.js";import"./uniq-60186681.js";import"./times-a6712564.js";import"./SqlFunctions-6b6cbd33.js";import"./factory-837f2467.js";import"./lodash.default-4ceef417.js";import"./omitBy-01ffdc35.js";import"./upperFirst-79e605a3.js";import"./merge-a53203d8.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-fa2877fc.js";import"./groupBy-1eae3423.js";import"./startCase-23eefba6.js";import"./toLower-271fcf43.js";import"./LoadingScreen-d59502c0.js";import"./LinearProgress-8f888fd4.js";import"./Backdrop-85605ced.js";const jo={title:"Home Page/ThemesPlot",component:e},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ThemesPlot.stories-8d229a26.js.map
