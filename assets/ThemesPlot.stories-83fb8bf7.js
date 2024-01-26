import{T as p}from"./ThemesPlot-f9d80330.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./ElementWithTooltip-245d1c2d.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-7172c875.js";import"./IconSvg-3c89f0af.js";import"./createSvgIcon-af041161.js";import"./styled-01bfb76d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./Tooltip-3e2f7ab3.js";import"./useTheme-541c21f5.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-5b2ac6ed.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-7ba61cee.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useIsFocusVisible-e5f6c995.js";import"./ErrorOutlined-6b31cdea.js";import"./GetAppTwoTone-8acfb280.js";import"./InfoOutlined-1c91e984.js";import"./CheckCircleTwoTone-5c97bb6f.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-946b3719.js";import"./SynapseConstants-567f6998.js";import"./OrientationBanner-1c6f5b11.js";import"./FullWidthAlert-88a09c3d.js";import"./Alert-34cc4490.js";import"./Paper-b990f44f.js";import"./IconButton-e4815158.js";import"./ButtonBase-f3be4fb1.js";import"./emotion-react.browser.esm-04dee135.js";import"./assertThisInitialized-081f9914.js";import"./Stack-b0292d83.js";import"./extendSxProp-e91f91cb.js";import"./Box-ddce9904.js";import"./AlertTitle-1d33b140.js";import"./Typography-10432b83.js";import"./ClickAwayListener-3907f9d7.js";import"./Button-6cf38875.js";import"./ShowMore-0d3229ca.js";import"./Dropdown-eef3dde7.js";import"./ThemeProvider-ab8de9d2.js";import"./index-9d475cdf.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-6bc11d95.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-9f95ca1a.js";import"./InfoTwoTone-1a20b6d6.js";import"./inputBaseClasses-9710a733.js";import"./Fade-7e0b73d6.js";import"./Link-980677d0.js";import"./_getTag-0896febb.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-7db48dfb.js";import"./dayjs.min-f79c4412.js";import"./tiny-invariant-dd7d57d2.js";import"./SqlFunctions-2b88feb0.js";import"./factory-33ef2009.js";import"./_baseClone-1af98579.js";import"./_Uint8Array-d975c071.js";import"./_baseTimes-8715be3e.js";import"./sortBy-4171bc8e.js";import"./_baseIteratee-586c072b.js";import"./_getMatchData-e949e548.js";import"./_cacheHas-39d10511.js";import"./_setToArray-3d6ec6fd.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-7a583b78.js";import"./_overRest-02925c7b.js";import"./_isIterateeCall-d9e6e9ec.js";import"./pick-66a3459f.js";import"./_baseIndexOf-c808ca38.js";import"./toInteger-08085a83.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-dfc65155.js";import"./uniq-3e836a4d.js";import"./without-5762c292.js";import"./isArrayLikeObject-5b17e695.js";import"./times-88e07405.js";import"./merge-95afdfbe.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-17546a49.js";import"./isNil-229cde25.js";import"./isEqualWith-010efd83.js";import"./LoadingScreen-d62555af.js";import"./Backdrop-acbc2ec5.js";import"./LinearProgress-8d1ab3ac.js";const Vo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Wo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Wo as __namedExportsOrder,Vo as default};
//# sourceMappingURL=ThemesPlot.stories-83fb8bf7.js.map
