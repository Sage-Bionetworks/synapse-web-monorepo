import{T as p}from"./ThemesPlot-465d8251.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-4e93a791.js";import"./SynapseTableConstants-5f56c39f.js";import"./IconSvg-fff0cc14.js";import"./createSvgIcon-102248e7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-96220216.js";import"./Tooltip-e6a8fad5.js";import"./useTheme-a5fe342b.js";import"./Grow-15d1c4f6.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-60a28f01.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-b4a8c67a.js";import"./GetAppTwoTone-9a0869d1.js";import"./InfoOutlined-1265fd90.js";import"./CheckCircleTwoTone-cd25e954.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-62b76387.js";import"./SynapseConstants-cca80e29.js";import"./OrientationBanner-3e5e2da7.js";import"./FullWidthAlert-7a6f936f.js";import"./AlertTitle-d92dfb78.js";import"./Paper-8ac7942c.js";import"./IconButton-1e0dd4f6.js";import"./ButtonBase-0195d275.js";import"./emotion-react.browser.esm-8516f11f.js";import"./assertThisInitialized-081f9914.js";import"./Typography-c5b8eeae.js";import"./extendSxProp-d749f662.js";import"./Stack-f7ee2fdc.js";import"./Box-891dc3c7.js";import"./ClickAwayListener-36b79525.js";import"./Button-d3d5b3a8.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-3758f106.js";import"./unCamelCase-feb0961e.js";import"./_baseSlice-cf92e063.js";import"./toString-cc90cb98.js";import"./isArray-5e3f9107.js";import"./isSymbol-7c514724.js";import"./without-3f8bd252.js";import"./_cacheHas-0c0e266d.js";import"./_Uint8Array-636b256e.js";import"./SynapseClient-2836e719.js";import"./getEndpoint-ac94413e.js";import"./Link-9ad54ce1.js";import"./StringUtils-4b400d2c.js";import"./dayjs.min-59ef0ea6.js";import"./tiny-invariant-dd7d57d2.js";import"./inputBaseClasses-f1eaf41c.js";import"./Fade-5a6f6506.js";import"./_baseTimes-8cccc40f.js";import"./_baseRest-a2c9a9e9.js";import"./_overRest-2304bdcd.js";import"./isArrayLikeObject-ebc0eb9f.js";import"./hasIn-89b5916c.js";import"./pick-cbe4a2ab.js";import"./_baseClone-bc3f2237.js";import"./isPlainObject-2b532179.js";import"./sortBy-32b8353d.js";import"./_baseIsEqual-ef5d52fb.js";import"./_setToArray-3d6ec6fd.js";import"./_baseFor-d254fa1e.js";import"./_isIterateeCall-4efbc8da.js";import"./uniq-3974040d.js";import"./times-42949f6a.js";import"./SqlFunctions-14188daf.js";import"./factory-275e83af.js";import"./lodash.default-b50c950b.js";import"./omitBy-e3d7ce12.js";import"./merge-da1e4aad.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-f4c05fe8.js";import"./isNil-93b1d0a6.js";import"./groupBy-1d313670.js";import"./startCase-5c4a4c7f.js";import"./toLower-271fcf43.js";import"./LoadingScreen-5786dec8.js";import"./Backdrop-1b2a4bbc.js";import"./LinearProgress-ddf61131.js";const Jo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Ko=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Ko as __namedExportsOrder,Jo as default};
//# sourceMappingURL=ThemesPlot.stories-9d2c8b13.js.map
