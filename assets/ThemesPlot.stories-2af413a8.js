import{T as p}from"./ThemesPlot-a66b285b.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-accc0474.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-25ed65e0.js";import"./IconSvg-ac5706a1.js";import"./createSvgIcon-ad67928b.js";import"./styled-708eb06f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./Tooltip-b7fc1fa3.js";import"./useTheme-8e3749c8.js";import"./Grow-2ef26a27.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-4b9b9c32.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-ca5df95b.js";import"./GetAppTwoTone-d6d215ac.js";import"./InfoOutlined-f9189c3f.js";import"./CheckCircleTwoTone-9226ff35.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-9b052172.js";import"./SynapseConstants-4f7926d8.js";import"./OrientationBanner-53051860.js";import"./FullWidthAlert-d85f4a4e.js";import"./AlertTitle-b21ffb10.js";import"./Paper-7e3a1b51.js";import"./IconButton-c6432c64.js";import"./ButtonBase-e5aaf94c.js";import"./emotion-react.browser.esm-df0ef9f3.js";import"./assertThisInitialized-081f9914.js";import"./Typography-661a732d.js";import"./extendSxProp-df3a54f3.js";import"./Stack-54f6c305.js";import"./Box-9f4bb844.js";import"./ClickAwayListener-36b79525.js";import"./Button-8994ccb5.js";import"./Dropdown-5dc5a7ec.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-90b90fab.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-4e381e42.js";import"./Link-f7a9268e.js";import"./_getTag-376e1527.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./tiny-invariant-dd7d57d2.js";import"./inputBaseClasses-5ec058ed.js";import"./Fade-7b562d23.js";import"./SqlFunctions-cf2e3b29.js";import"./factory-275e83af.js";import"./_baseClone-6c8475ae.js";import"./_Uint8Array-7452eb2c.js";import"./_baseTimes-8715be3e.js";import"./sortBy-46f64980.js";import"./hasIn-f6dcb7c2.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_getMatchData-d6ee72ad.js";import"./_baseIsEqual-40da9222.js";import"./_cacheHas-be9101cd.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-93480809.js";import"./_overRest-d604b584.js";import"./_isIterateeCall-db26cb66.js";import"./pick-3f1e07b9.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-37d87cd2.js";import"./uniq-58323293.js";import"./times-ac139058.js";import"./without-81e8db1a.js";import"./isArrayLikeObject-3672b360.js";import"./merge-ef9cbdc0.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-ccda587a.js";import"./isEqual-e30f3433.js";import"./isNil-ea20c8c3.js";import"./LoadingScreen-7b803862.js";import"./Backdrop-e3dff1d0.js";import"./LinearProgress-9ffd4557.js";const Jo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ThemesPlot.stories-2af413a8.js.map
