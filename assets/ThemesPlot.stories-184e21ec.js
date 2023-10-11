import{T as p}from"./ThemesPlot-55815204.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-5388cfc9.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-22c2370a.js";import"./IconSvg-e87e3e5e.js";import"./createSvgIcon-fd8a55dc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-9c91c4fe.js";import"./Tooltip-6a83a77a.js";import"./useTheme-68d5aa8d.js";import"./Grow-426921c3.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-6b5ba2e3.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-dd0fb706.js";import"./GetAppTwoTone-325427e5.js";import"./InfoOutlined-3b5cb253.js";import"./CheckCircleTwoTone-784a445a.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-4dab9b3e.js";import"./SynapseConstants-aa5872fb.js";import"./OrientationBanner-9d515953.js";import"./FullWidthAlert-b8575a86.js";import"./AlertTitle-af39c120.js";import"./Paper-88da9df3.js";import"./IconButton-152addcf.js";import"./ButtonBase-7c3b1b89.js";import"./emotion-react.browser.esm-8f02f344.js";import"./assertThisInitialized-081f9914.js";import"./Typography-d16533eb.js";import"./extendSxProp-e5d44a75.js";import"./Stack-c9edc483.js";import"./Box-49321e59.js";import"./ClickAwayListener-36b79525.js";import"./Button-c45f00b4.js";import"./Dropdown-0aa781b0.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-d02901e3.js";import"./unCamelCase-ea0ec928.js";import"./without-eb1011f3.js";import"./_cacheHas-4fa98ab9.js";import"./_Uint8Array-ab958ff7.js";import"./_getTag-861d442f.js";import"./isArray-5e3f9107.js";import"./_baseTimes-8715be3e.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseRest-db360697.js";import"./identity-46f208ab.js";import"./_overRest-e67bd922.js";import"./isArrayLikeObject-bab2971f.js";import"./hasIn-eb42bef1.js";import"./pick-9898b0e8.js";import"./_baseClone-46142ff2.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-bb3279fd.js";import"./sortBy-d3e0fe7c.js";import"./_getMatchData-e7922191.js";import"./_setToArray-3d6ec6fd.js";import"./_baseFor-d254fa1e.js";import"./_isIterateeCall-576d0dfd.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-ee7f0def.js";import"./Link-fc5d7a73.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./tiny-invariant-dd7d57d2.js";import"./inputBaseClasses-f05f2ac2.js";import"./Fade-a19bf181.js";import"./SqlFunctions-a4a70d60.js";import"./factory-275e83af.js";import"./lodash.default-210cbaa7.js";import"./uniq-4844de1a.js";import"./times-1c9e275d.js";import"./omitBy-9e1f719f.js";import"./merge-2158e6a3.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-63d67f0e.js";import"./isNil-f32149e1.js";import"./flatMap-6b95aa3e.js";import"./toLower-271fcf43.js";import"./LoadingScreen-9185dcf9.js";import"./Backdrop-c3498637.js";import"./LinearProgress-f638b645.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Ro=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Ro as __namedExportsOrder,Qo as default};
//# sourceMappingURL=ThemesPlot.stories-184e21ec.js.map
