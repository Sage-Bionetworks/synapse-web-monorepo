import{T as e}from"./ThemesPlot-0ed5dcfa.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-0e6d77c4.js";import"./SynapseTableConstants-942d2b0b.js";import"./IconSvg-5d52c249.js";import"./createSvgIcon-cc5dda5a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./styled-29603136.js";import"./Tooltip-f9c1481b.js";import"./useTheme-81f60015.js";import"./Grow-e114a38b.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-1b9aecd1.js";import"./index-8ce4a492.js";import"./utils-6fd1852e.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-979937b1.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-44a893d4.js";import"./InfoOutlined-43adcfd5.js";import"./CheckCircleTwoTone-0531502d.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-3ebed90d.js";import"./SynapseConstants-351603e3.js";import"./OrientationBanner-646a27ec.js";import"./FullWidthAlert-4144e1c5.js";import"./AlertTitle-2a627105.js";import"./Paper-e7d00d51.js";import"./IconButton-5d241967.js";import"./ButtonBase-2d6e1c83.js";import"./emotion-react.browser.esm-f80eee79.js";import"./assertThisInitialized-081f9914.js";import"./Typography-387311b4.js";import"./extendSxProp-51f2db60.js";import"./Stack-16937500.js";import"./Box-653de305.js";import"./ClickAwayListener-ce43512b.js";import"./Button-5c815620.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-b23c829e.js";import"./unCamelCase-16efb97c.js";import"./without-a640ab3f.js";import"./_cacheHas-cc896dc2.js";import"./_MapCache-31fd85eb.js";import"./SynapseClient-a57981a2.js";import"./getEndpoint-ac94413e.js";import"./Link-c02845c3.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./inputBaseClasses-dd60d6ee.js";import"./Fade-59e1463e.js";import"./_baseTimes-8cccc40f.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseRest-dc4e4b33.js";import"./isArrayLikeObject-62d8341a.js";import"./hasIn-f3277cc0.js";import"./_Uint8Array-4f995914.js";import"./_isIndex-af14b756.js";import"./pick-2397acfc.js";import"./_baseClone-a72e7d91.js";import"./_baseSlice-cf92e063.js";import"./sortBy-d5f22d2f.js";import"./_setToArray-3d6ec6fd.js";import"./_baseFor-d254fa1e.js";import"./_isIterateeCall-2963c416.js";import"./uniq-52460d17.js";import"./times-5a4c1d15.js";import"./SqlFunctions-e9b055be.js";import"./factory-837f2467.js";import"./lodash.default-7805d6b3.js";import"./omitBy-9b096985.js";import"./upperFirst-79e605a3.js";import"./merge-7d2955f1.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-2b196a89.js";import"./groupBy-f8d66ec1.js";import"./startCase-a4470715.js";import"./toLower-271fcf43.js";import"./LoadingScreen-7013a393.js";import"./LinearProgress-b19ca625.js";import"./Backdrop-678bb8a2.js";const jo={title:"Home Page/ThemesPlot",component:e},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ThemesPlot.stories-cb4cadcd.js.map
