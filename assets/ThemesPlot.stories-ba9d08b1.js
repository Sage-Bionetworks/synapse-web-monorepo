import{T as p}from"./ThemesPlot-f3ab9a1f.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./ElementWithTooltip-ad5c1ae3.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-e8232f49.js";import"./IconSvg-dc6fa014.js";import"./createSvgIcon-b657d91b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createTheme-d609db80.js";import"./styled-bb145c31.js";import"./Tooltip-248f4fe4.js";import"./useTheme-a28bb397.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-2f9de6a4.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-19a63403.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useIsFocusVisible-18cd238e.js";import"./ErrorOutlined-5d3a6347.js";import"./GetAppTwoTone-6e3519f9.js";import"./InfoOutlined-aa78e498.js";import"./CheckCircleTwoTone-6570b572.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-602cfd3c.js";import"./SynapseConstants-0078d114.js";import"./OrientationBanner-450e6652.js";import"./FullWidthAlert-149d754f.js";import"./Alert-fd45ce28.js";import"./Paper-35c12a01.js";import"./IconButton-9b53499e.js";import"./ButtonBase-0719e676.js";import"./emotion-react.browser.esm-ca9fe929.js";import"./assertThisInitialized-081f9914.js";import"./Stack-9fb6382b.js";import"./extendSxProp-7fb4e09f.js";import"./Box-f6adec47.js";import"./AlertTitle-9139c2ff.js";import"./Typography-f217f607.js";import"./ClickAwayListener-3b20c94f.js";import"./Button-065a21d4.js";import"./ShowMore-0d3229ca.js";import"./Dropdown-38810c77.js";import"./ThemeProvider-ab8de9d2.js";import"./index-9d475cdf.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-cb6f0557.js";import"./getEndpoint-ac94413e.js";import"./ApplicationSessionManager-7024b1a7.js";import"./tinycolor-ea5bcbb6.js";import"./InfoTwoTone-aaf78040.js";import"./inputBaseClasses-8d4a6788.js";import"./Fade-05777e49.js";import"./Link-5cdd275a.js";import"./_getTag-b87d0382.js";import"./_Map-92f6da1c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-4a1b1a67.js";import"./dayjs.min-f79c4412.js";import"./tiny-invariant-dd7d57d2.js";import"./SqlFunctions-0e5057b4.js";import"./factory-33ef2009.js";import"./_initCloneObject-c3239c20.js";import"./_Uint8Array-df44b265.js";import"./_baseTimes-8715be3e.js";import"./_baseClone-d4db307e.js";import"./_getAllKeys-af1012ce.js";import"./sortBy-3287642e.js";import"./_baseFlatten-7b590484.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./_baseIteratee-3e70e377.js";import"./_getMatchData-2c772eab.js";import"./_cacheHas-c48b7592.js";import"./_setToArray-3d6ec6fd.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-c9d7baca.js";import"./_overRest-2155f832.js";import"./_isIterateeCall-9cddbe78.js";import"./_baseUnset-96ca7447.js";import"./_baseSlice-cf92e063.js";import"./noop-cb277961.js";import"./without-7499eb19.js";import"./_baseIndexOf-c808ca38.js";import"./isArrayLikeObject-8a0d3588.js";import"./pick-828da15c.js";import"./toInteger-5bb233f4.js";import"./isPlainObject-e233fb76.js";import"./times-8d386772.js";import"./merge-75f6c925.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-10deac57.js";import"./isNil-2a082f40.js";import"./isEqualWith-63226cfe.js";import"./isNumber-e963e862.js";import"./uniq-3970452c.js";import"./remove-6a5521d2.js";import"./LoadingScreen-7bb66db3.js";import"./Backdrop-3c9a13b0.js";import"./LinearProgress-9c1f12c3.js";const mt={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const pt=["ThemesPlotDemo"];export{o as ThemesPlotDemo,pt as __namedExportsOrder,mt as default};
