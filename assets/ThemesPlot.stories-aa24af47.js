import{T as p}from"./ThemesPlot-cbb66d82.js";import"./jsx-runtime-9dc53467.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./ElementWithTooltip-d5658e05.js";import"./SynapseTableConstants-5f56c39f.js";import"./index-77ef1bd4.js";import"./IconSvg-f8ded0ba.js";import"./createSvgIcon-8a3e2935.js";import"./styled-2fcfc37a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./Tooltip-72ca093b.js";import"./useTheme-76051239.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-241280c4.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-bed83364.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useIsFocusVisible-e5f6c995.js";import"./ErrorOutlined-c656d1cd.js";import"./GetAppTwoTone-89480507.js";import"./InfoOutlined-64e960b4.js";import"./CheckCircleTwoTone-b021ad72.js";import"./RegularExpressions-bc0adf55.js";import"./Icon-8c39245b.js";import"./SynapseConstants-8157454e.js";import"./OrientationBanner-1bd00e8c.js";import"./FullWidthAlert-a8fd2235.js";import"./Alert-a2690b50.js";import"./Paper-699baef2.js";import"./IconButton-64077c25.js";import"./ButtonBase-f4a900e8.js";import"./emotion-react.browser.esm-b6cea713.js";import"./assertThisInitialized-081f9914.js";import"./Stack-69986211.js";import"./extendSxProp-c283072b.js";import"./Box-2044d34a.js";import"./AlertTitle-a34c5fe9.js";import"./Typography-b1f79b20.js";import"./ClickAwayListener-3907f9d7.js";import"./Button-8ea9f590.js";import"./ShowMore-0d3229ca.js";import"./Dropdown-0c45e6cf.js";import"./ThemeProvider-ab8de9d2.js";import"./index-9d475cdf.js";import"./hasClass-ec9efd32.js";import"./createWithBsPrefix-73743689.js";import"./getEndpoint-ac94413e.js";import"./SynapseClient-d7905674.js";import"./InfoTwoTone-c9bbd609.js";import"./inputBaseClasses-7a80a621.js";import"./Fade-1b8e1369.js";import"./Link-66bc2a10.js";import"./_getTag-6966e563.js";import"./_Map-02912bad.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-bd88158d.js";import"./dayjs.min-f79c4412.js";import"./tiny-invariant-dd7d57d2.js";import"./SqlFunctions-6179e7b0.js";import"./factory-33ef2009.js";import"./_initCloneObject-b3d76b79.js";import"./_Uint8Array-595ed3dd.js";import"./_baseTimes-8715be3e.js";import"./_baseClone-c3e37260.js";import"./_getAllKeys-a7c6e1ea.js";import"./sortBy-9432484f.js";import"./_baseIteratee-f4897559.js";import"./_getMatchData-23cf8316.js";import"./_cacheHas-cc8fa475.js";import"./_setToArray-3d6ec6fd.js";import"./isSymbol-7c514724.js";import"./toString-cc90cb98.js";import"./identity-46f208ab.js";import"./_baseFor-d254fa1e.js";import"./_baseRest-a17404df.js";import"./_overRest-54674ae8.js";import"./_isIterateeCall-984cc862.js";import"./pick-f7c80597.js";import"./_baseIndexOf-c808ca38.js";import"./toInteger-8c467ff1.js";import"./_baseSlice-cf92e063.js";import"./isPlainObject-9a905694.js";import"./uniq-91fc4097.js";import"./without-9cea2dc4.js";import"./isArrayLikeObject-333fcb04.js";import"./times-c23b3cf2.js";import"./merge-6d426093.js";import"./uniqueId-4d05949d.js";import"./cloneDeep-cb98969d.js";import"./isNil-be4011bf.js";import"./isEqualWith-2aee5e03.js";import"./LoadingScreen-6da72a1d.js";import"./Backdrop-a166067b.js";import"./LinearProgress-ed3be834.js";const Yo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
//# sourceMappingURL=ThemesPlot.stories-aa24af47.js.map
