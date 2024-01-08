import{T as p}from"./ThemesPlot-433542db.js";import"./jsx-runtime-095bf462.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./ElementWithTooltip-fd4ad9da.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-0bf55f22.js";import"./IconSvg-445da52b.js";import"./createSvgIcon-90be9181.js";import"./styled-a48939ef.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./Tooltip-294ff439.js";import"./useTheme-60e5792f.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-cb3cd8aa.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-4f6567de.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./ErrorOutlined-8c6aeddb.js";import"./GetAppTwoTone-c8ac74d5.js";import"./InfoOutlined-82ee9e80.js";import"./CheckCircleTwoTone-71d1bb57.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-c03db5b0.js";import"./SynapseConstants-935f39ee.js";import"./OrientationBanner-cdfc64df.js";import"./FullWidthAlert-1b1b4f63.js";import"./AlertTitle-36b934fa.js";import"./Paper-169126a7.js";import"./IconButton-76e05815.js";import"./ButtonBase-895fb1ab.js";import"./emotion-react.browser.esm-69ef451a.js";import"./assertThisInitialized-081f9914.js";import"./Typography-039a8d28.js";import"./extendSxProp-fc750aff.js";import"./Stack-3b05645e.js";import"./Box-f53d00dc.js";import"./ClickAwayListener-e5c35437.js";import"./Button-3631c64e.js";import"./ShowMore-7427d245.js";import"./Dropdown-d0ecc6b2.js";import"./ThemeProvider-c7f6a893.js";import"./index-58d3fd43.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-0ade9409.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-b4c2fe2f.js";import"./Link-9ced689e.js";import"./_getTag-f412bed9.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-47c8dffe.js";import"./tiny-invariant-dd7d57d2.js";import"./InfoTwoTone-7af4ed61.js";import"./inputBaseClasses-2b9678c1.js";import"./Fade-06c2e3dd.js";import"./SqlFunctions-fb895c54.js";import"./factory-275e83af.js";import"./_baseClone-c5bd2052.js";import"./_Uint8Array-a7acd3cb.js";import"./_baseTimes-8715be3e.js";import"./sortBy-3d8aa380.js";import"./hasIn-211aacb1.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./_getMatchData-de88ee12.js";import"./_baseIsEqual-bbaf3bf4.js";import"./_cacheHas-073865f9.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-c7612f8b.js";import"./_overRest-81c49661.js";import"./_isIterateeCall-c4bfe61b.js";import"./pick-b57db910.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-e33ee42d.js";import"./uniq-9dce2829.js";import"./times-f08ae4bc.js";import"./without-7a11e72d.js";import"./isArrayLikeObject-8b853d40.js";import"./merge-b67ec92b.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-3c2e6346.js";import"./isEqual-71569712.js";import"./isNil-ed40fb12.js";import"./LoadingScreen-f965d068.js";import"./Backdrop-af74067f.js";import"./LinearProgress-b95e62ea.js";const Mo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Qo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Qo as __namedExportsOrder,Mo as default};
//# sourceMappingURL=ThemesPlot.stories-a5a66a4b.js.map
