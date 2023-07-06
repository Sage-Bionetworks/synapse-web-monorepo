import{T as e}from"./ThemesPlot-55752468.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-15c9b30b.js";import"./SynapseTableConstants-942d2b0b.js";import"./IconSvg-5ccdd166.js";import"./createSvgIcon-e7cd5941.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./styled-6ec5f85d.js";import"./Tooltip-add08016.js";import"./useTheme-9d382341.js";import"./Grow-93737182.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-67eec175.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-ddaff4fd.js";import"./GetAppTwoTone-5ba04530.js";import"./InfoOutlined-eb1a3679.js";import"./CheckCircleTwoTone-108bcaf3.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-ca45346c.js";import"./SynapseConstants-50db8d9f.js";import"./OrientationBanner-892f3bb7.js";import"./FullWidthAlert-1b71408b.js";import"./AlertTitle-ed62ac3d.js";import"./Paper-586cb0df.js";import"./IconButton-2455b4de.js";import"./ButtonBase-43867210.js";import"./emotion-react.browser.esm-b991c11c.js";import"./assertThisInitialized-081f9914.js";import"./Typography-65c9d67d.js";import"./extendSxProp-fe165b74.js";import"./Stack-f176d42e.js";import"./Box-3a3e81db.js";import"./ClickAwayListener-36b79525.js";import"./Button-ff2bc4b7.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-ea1779c3.js";import"./unCamelCase-a502ed20.js";import"./without-79041243.js";import"./_cacheHas-d5db9ae5.js";import"./_MapCache-261cf8c1.js";import"./SynapseClient-3d6edbd0.js";import"./getEndpoint-ac94413e.js";import"./Link-a20b00c0.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./inputBaseClasses-bfe9dd78.js";import"./Fade-fdeca465.js";import"./_baseTimes-8cccc40f.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseRest-3db8f663.js";import"./isArrayLikeObject-59db3aed.js";import"./hasIn-da18fe20.js";import"./_Uint8Array-626dd872.js";import"./_isIndex-af14b756.js";import"./pick-019187a8.js";import"./_baseClone-d98a6e5e.js";import"./_baseSlice-cf92e063.js";import"./sortBy-d1364795.js";import"./_setToArray-3d6ec6fd.js";import"./_baseFor-d254fa1e.js";import"./_isIterateeCall-1ce1f3e6.js";import"./uniq-7177d653.js";import"./times-ec3b2f21.js";import"./SqlFunctions-cc29029a.js";import"./factory-837f2467.js";import"./lodash.default-4b6a55b9.js";import"./omitBy-9f92ea85.js";import"./upperFirst-79e605a3.js";import"./merge-8974eb7f.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-5c5e6b5c.js";import"./groupBy-19398432.js";import"./startCase-52d903fa.js";import"./toLower-271fcf43.js";import"./LoadingScreen-5bcaf251.js";import"./LinearProgress-1a0cec8f.js";import"./Backdrop-39ff4bad.js";const qo={title:"Home Page/ThemesPlot",component:e},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Ao=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Ao as __namedExportsOrder,qo as default};
//# sourceMappingURL=ThemesPlot.stories-0198cd9d.js.map
