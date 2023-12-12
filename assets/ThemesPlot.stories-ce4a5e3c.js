import{T as p}from"./ThemesPlot-668956b9.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-031baa5d.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-dfa0c31d.js";import"./IconSvg-6f6e1e68.js";import"./createSvgIcon-efa5fd2e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-81e3612a.js";import"./Tooltip-f72372f7.js";import"./useTheme-533dafd0.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-080f23da.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-b7dab64f.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-3a36acde.js";import"./GetAppTwoTone-dc274b61.js";import"./InfoOutlined-f00f0485.js";import"./CheckCircleTwoTone-b7fa358f.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-957785de.js";import"./SynapseConstants-163777d5.js";import"./OrientationBanner-caa14b37.js";import"./FullWidthAlert-f28d1efb.js";import"./AlertTitle-ce329963.js";import"./Paper-057dfac2.js";import"./IconButton-2a435ef1.js";import"./ButtonBase-84be17da.js";import"./emotion-react.browser.esm-f993d2c2.js";import"./assertThisInitialized-081f9914.js";import"./Typography-214fd772.js";import"./extendSxProp-3a6755c2.js";import"./Stack-db426a61.js";import"./Box-f664662a.js";import"./ClickAwayListener-e5c35437.js";import"./Button-f56bbd3a.js";import"./ShowMore-7427d245.js";import"./Dropdown-9065070f.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-2f20c945.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-07cb66ce.js";import"./Link-bf67348e.js";import"./_getTag-ed9314eb.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./tiny-invariant-dd7d57d2.js";import"./inputBaseClasses-a1108cc7.js";import"./Fade-275e12f9.js";import"./SqlFunctions-fb386f73.js";import"./factory-275e83af.js";import"./_baseClone-085aef97.js";import"./_Uint8Array-e7bacca1.js";import"./_baseTimes-8715be3e.js";import"./sortBy-85b5591b.js";import"./hasIn-41dc455b.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_getMatchData-a65e887f.js";import"./_baseIsEqual-e9b27ebd.js";import"./_cacheHas-5e0daad4.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-de9add13.js";import"./_overRest-b2592a9d.js";import"./_isIterateeCall-b1fb139d.js";import"./pick-39707cbf.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-d90d8e80.js";import"./uniq-bf9c0936.js";import"./times-9fe7fdfe.js";import"./without-e3e43d4b.js";import"./isArrayLikeObject-0ce381ff.js";import"./merge-d08ebbe6.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-105239c7.js";import"./isEqual-8bc63716.js";import"./isNil-8cd2dcce.js";import"./LoadingScreen-cb516f2c.js";import"./Backdrop-da57ccbb.js";import"./LinearProgress-1c20d32b.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ThemesPlot.stories-ce4a5e3c.js.map
