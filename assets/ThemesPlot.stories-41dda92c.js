import{T as p}from"./ThemesPlot-c6ae124a.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-634d64d3.js";import"./SynapseTableConstants-942d2b0b.js";import"./IconSvg-a908ea30.js";import"./createSvgIcon-102248e7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-96220216.js";import"./Tooltip-e6a8fad5.js";import"./useTheme-a5fe342b.js";import"./Grow-15d1c4f6.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-60a28f01.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-b4a8c67a.js";import"./GetAppTwoTone-9a0869d1.js";import"./InfoOutlined-1265fd90.js";import"./CheckCircleTwoTone-cd25e954.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-19f900e3.js";import"./SynapseConstants-a9291e4f.js";import"./OrientationBanner-3e5e2da7.js";import"./FullWidthAlert-7a6f936f.js";import"./AlertTitle-d92dfb78.js";import"./Paper-8ac7942c.js";import"./IconButton-1e0dd4f6.js";import"./ButtonBase-0195d275.js";import"./emotion-react.browser.esm-8516f11f.js";import"./assertThisInitialized-081f9914.js";import"./Typography-c5b8eeae.js";import"./extendSxProp-d749f662.js";import"./Stack-f7ee2fdc.js";import"./Box-891dc3c7.js";import"./ClickAwayListener-36b79525.js";import"./Button-d3d5b3a8.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-3758f106.js";import"./unCamelCase-b2275aec.js";import"./_baseSlice-cf92e063.js";import"./toString-cc90cb98.js";import"./isArray-5e3f9107.js";import"./isSymbol-7c514724.js";import"./without-e5269ed7.js";import"./_cacheHas-29b16406.js";import"./_MapCache-ac280010.js";import"./SynapseClient-0de7e8d0.js";import"./getEndpoint-ac94413e.js";import"./Link-9ad54ce1.js";import"./dayjs.min-59ef0ea6.js";import"./inputBaseClasses-f1eaf41c.js";import"./Fade-5a6f6506.js";import"./_baseTimes-8cccc40f.js";import"./_baseRest-bc18f531.js";import"./isArrayLikeObject-7a2debd3.js";import"./hasIn-907405ea.js";import"./_Uint8Array-dba3ef72.js";import"./_isIndex-af14b756.js";import"./pick-faae58b0.js";import"./_baseClone-edf8902e.js";import"./sortBy-8d9d6747.js";import"./_baseIsEqual-f1fec3bf.js";import"./_setToArray-3d6ec6fd.js";import"./_baseFor-d254fa1e.js";import"./_isIterateeCall-29bd9ba5.js";import"./uniq-d099aeab.js";import"./times-428897c8.js";import"./SqlFunctions-a83716a4.js";import"./factory-275e83af.js";import"./lodash.default-f32fc042.js";import"./omitBy-32ee69a3.js";import"./merge-201ae452.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-cdf92f80.js";import"./isNil-c9f80b36.js";import"./groupBy-6bc5dde3.js";import"./startCase-dc3c3bda.js";import"./toLower-271fcf43.js";import"./LoadingScreen-2548bf16.js";import"./LinearProgress-ddf61131.js";import"./Backdrop-1b2a4bbc.js";const Ao={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Go=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Go as __namedExportsOrder,Ao as default};
//# sourceMappingURL=ThemesPlot.stories-41dda92c.js.map
