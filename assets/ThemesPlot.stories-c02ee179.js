import{T as p}from"./ThemesPlot-08539030.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-15e13de2.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-dc856593.js";import"./IconSvg-43fd9b71.js";import"./createSvgIcon-c69fbb93.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-17e9e47b.js";import"./Tooltip-9098414d.js";import"./useTheme-e16afdbe.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-0db08d4d.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-02ec0d60.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-3dd860d7.js";import"./GetAppTwoTone-355d174d.js";import"./InfoOutlined-61b6cf08.js";import"./CheckCircleTwoTone-8c636771.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-36cc471d.js";import"./SynapseConstants-9336a6ec.js";import"./OrientationBanner-a62887aa.js";import"./FullWidthAlert-d33def51.js";import"./AlertTitle-aed9db43.js";import"./Paper-2a5a67d3.js";import"./IconButton-5cd80e83.js";import"./ButtonBase-4975ddb0.js";import"./emotion-react.browser.esm-39b3de80.js";import"./assertThisInitialized-081f9914.js";import"./Typography-d5f8f357.js";import"./extendSxProp-1c03cb1b.js";import"./Stack-685b29ad.js";import"./Box-fd1c0045.js";import"./ClickAwayListener-e5c35437.js";import"./Button-24da439b.js";import"./Dropdown-e31bc54f.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-3f26db1d.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-425fbe83.js";import"./Link-a60839ec.js";import"./_getTag-40b07ccb.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./tiny-invariant-dd7d57d2.js";import"./inputBaseClasses-42f125b6.js";import"./Fade-4732825d.js";import"./SqlFunctions-9cdead1d.js";import"./factory-275e83af.js";import"./_baseClone-1ac4a65f.js";import"./_Uint8Array-b1e297cd.js";import"./_baseTimes-8715be3e.js";import"./sortBy-30e2e31f.js";import"./hasIn-0d386c99.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_getMatchData-d83467b7.js";import"./_baseIsEqual-87eb2da3.js";import"./_cacheHas-55e2e70f.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-03545ee2.js";import"./_overRest-3519ba7c.js";import"./_isIterateeCall-fa5ca898.js";import"./pick-534cade1.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-e879285f.js";import"./uniq-24dfdf35.js";import"./times-f4c88e12.js";import"./without-a38b5c08.js";import"./isArrayLikeObject-b0c1df5c.js";import"./merge-d5e6ea23.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-8d88a06c.js";import"./isEqual-ac67b0a5.js";import"./isNil-4daaf6fd.js";import"./LoadingScreen-a6a4aa4a.js";import"./Backdrop-e2cb474f.js";import"./LinearProgress-4645bffd.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ThemesPlot.stories-c02ee179.js.map
