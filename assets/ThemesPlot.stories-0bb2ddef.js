import{T as p}from"./ThemesPlot-c45d8bd1.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-053d24d7.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-11f39476.js";import"./IconSvg-4a986b10.js";import"./createSvgIcon-fd8a55dc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./styled-9c91c4fe.js";import"./Tooltip-39e0afa2.js";import"./useTheme-68d5aa8d.js";import"./Grow-adae5ed8.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-87fd7144.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-dd0fb706.js";import"./GetAppTwoTone-325427e5.js";import"./InfoOutlined-3b5cb253.js";import"./CheckCircleTwoTone-784a445a.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-762f387a.js";import"./SynapseConstants-8e42f36e.js";import"./OrientationBanner-a86d831b.js";import"./FullWidthAlert-c9c51c59.js";import"./AlertTitle-af39c120.js";import"./Paper-88da9df3.js";import"./IconButton-152addcf.js";import"./ButtonBase-7c3b1b89.js";import"./emotion-react.browser.esm-8f02f344.js";import"./assertThisInitialized-081f9914.js";import"./Typography-d16533eb.js";import"./extendSxProp-e5d44a75.js";import"./Stack-c9edc483.js";import"./Box-49321e59.js";import"./ClickAwayListener-36b79525.js";import"./Button-c45f00b4.js";import"./Dropdown-7674e440.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-d02901e3.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-736f4fd6.js";import"./Link-fc5d7a73.js";import"./_getTag-39555acc.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./tiny-invariant-dd7d57d2.js";import"./inputBaseClasses-f05f2ac2.js";import"./Fade-26b5aaed.js";import"./SqlFunctions-eaebc307.js";import"./factory-275e83af.js";import"./_baseClone-daafcb33.js";import"./_Uint8Array-81ff25c8.js";import"./_baseTimes-8715be3e.js";import"./sortBy-66c7c630.js";import"./hasIn-d5ffa125.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_getMatchData-c26eb7a1.js";import"./_cacheHas-432cce39.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-2c0b1ec4.js";import"./_overRest-6b5900af.js";import"./_isIterateeCall-44d71915.js";import"./pick-e68090dd.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-b0225e48.js";import"./uniq-a197bf03.js";import"./times-9cad1363.js";import"./without-7e76d1c1.js";import"./isArrayLikeObject-a31b0675.js";import"./merge-2642e70f.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-2774ded5.js";import"./isNil-53e0d334.js";import"./LoadingScreen-a23a06c8.js";import"./Backdrop-7ef683b4.js";import"./LinearProgress-f638b645.js";const Ao={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ThemesPlot.stories-0bb2ddef.js.map
