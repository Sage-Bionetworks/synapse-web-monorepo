import{T as p}from"./ThemesPlot-752c0644.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./ElementWithTooltip-38ead293.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-11cab16a.js";import"./IconSvg-b2c8dc9b.js";import"./createSvgIcon-397996e3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-87b6157a.js";import"./Tooltip-e8bd1358.js";import"./useTheme-58bb7d64.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-08403985.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-830530e5.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useIsFocusVisible-e5f6c995.js";import"./ErrorOutlined-20d019ce.js";import"./GetAppTwoTone-ce03f56d.js";import"./InfoOutlined-e67f3aa8.js";import"./CheckCircleTwoTone-8a62494f.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-4134b372.js";import"./SynapseConstants-c93e8ee4.js";import"./OrientationBanner-c0eacdfc.js";import"./FullWidthAlert-77167a31.js";import"./Alert-f631f725.js";import"./Paper-625f2e68.js";import"./IconButton-30f6f351.js";import"./ButtonBase-651ec7a9.js";import"./emotion-react.browser.esm-6130a288.js";import"./assertThisInitialized-081f9914.js";import"./Stack-eb200119.js";import"./extendSxProp-c4113ea3.js";import"./Box-737945d6.js";import"./AlertTitle-38884730.js";import"./Typography-62cfc992.js";import"./ClickAwayListener-3907f9d7.js";import"./Button-a2b8b546.js";import"./ShowMore-0d3229ca.js";import"./Dropdown-69bcea53.js";import"./ThemeProvider-ab8de9d2.js";import"./index-9d475cdf.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-ce711ec4.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-7700f4cc.js";import"./InfoTwoTone-bbc735a3.js";import"./inputBaseClasses-888452c9.js";import"./Fade-3c4a970e.js";import"./Link-adab3de3.js";import"./_getTag-dcd38d76.js";import"./_Map-02912bad.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-3a31b023.js";import"./dayjs.min-f79c4412.js";import"./tiny-invariant-dd7d57d2.js";import"./SqlFunctions-f7206b75.js";import"./factory-33ef2009.js";import"./_initCloneObject-b3d76b79.js";import"./_Uint8Array-595ed3dd.js";import"./_baseTimes-8715be3e.js";import"./_baseClone-9db79a00.js";import"./_getAllKeys-fa8e70cf.js";import"./sortBy-b8b8cfbe.js";import"./_baseIteratee-19775889.js";import"./_getMatchData-2b75febc.js";import"./_cacheHas-cc8fa475.js";import"./_setToArray-3d6ec6fd.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-a17404df.js";import"./_overRest-54674ae8.js";import"./_isIterateeCall-984cc862.js";import"./pick-89ddd0c3.js";import"./_baseIndexOf-c808ca38.js";import"./toInteger-8c467ff1.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-9a905694.js";import"./uniq-f9854dd4.js";import"./without-9cea2dc4.js";import"./isArrayLikeObject-333fcb04.js";import"./times-c23b3cf2.js";import"./merge-6d426093.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-4246eae0.js";import"./isNil-938d8733.js";import"./isEqualWith-7a8dbfc5.js";import"./LoadingScreen-ed61dd72.js";import"./Backdrop-f4f4944d.js";import"./LinearProgress-5f66ed75.js";const Yo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Zo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Zo as __namedExportsOrder,Yo as default};
