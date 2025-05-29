import{T as p}from"./ThemesPlot-thPXtbgL.js";import"./jsx-runtime-DkbpurNs.js";import"./index-BWTz5das.js";import"./iframe-CIwcPPSS.js";import"./useFiles-DsFYUvgk.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-WdyYb7Om.js";import"./OrientationBanner-Db5b4wt6.js";import"./index-WdIyC9zy.js";import"./spreadSx-CwcO6WA9.js";import"./react-B92lp8oH.js";import"./FullWidthAlert-CV5VqY0G.js";import"./Alert-oO57gt13.js";import"./createTheme-A3wdy6CE.js";import"./resolveComponentProps-D-CanUzl.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D76_CRuH.js";import"./createSvgIcon-D1wrlE5j.js";import"./DefaultPropsProvider-ByOVQs-n.js";import"./Close-B0Wd8leo.js";import"./IconButton-4eAf36A2.js";import"./ButtonBase-BhLDaX_S.js";import"./useTimeout-vSjzk-Un.js";import"./TransitionGroupContext-C__s9c2O.js";import"./useIsFocusVisible-FsgV9KWa.js";import"./useEventCallback-Bwqph7YH.js";import"./Paper-C9rqLEV4.js";import"./Stack-bl7kY2rD.js";import"./getThemeProps-DZ0VtK3w.js";import"./useTheme--XQLJcej.js";import"./Box-oS9X8DmL.js";import"./AlertTitle-DXMw9tkm.js";import"./Typography-C9RmHiWH.js";import"./useTheme-BWFniEYL.js";import"./Grow-CF1islW1.js";import"./index-CWlTKyso.js";import"./utils-CnscWP4i.js";import"./ClickAwayListener-KlaQc122.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-AOG27yeN.js";import"./index-BF7XAVzO.js";import"./useControlled-BZcNW5Fh.js";import"./useId-CWMqiBBO.js";import"./Popper-mjGHPHZJ.js";import"./Button-iLozBQyn.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-DcrUW3Ia.js";import"./utils-D0Sn12cL.js";import"./Link-DpF5ZODC.js";import"./Collapse-C3IE9BnM.js";import"./isNil-SLuPmgyU.js";import"./_Uint8Array-dFMtMdky.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BtYs4CQI.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CSEyos6D.js";import"./_getTag-9L9wrwHR.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cf5YgOGZ.js";import"./Skeleton-CjiSKKcr.js";import"./inputBaseClasses-B_tp1BOw.js";import"./calculateFriendlyFileSize-DFfVqf0N.js";import"./CheckCircleTwoTone-CXzQKqsF.js";import"./InfoTwoTone-B5Z1IoZb.js";import"./mutation-DVozW0ZS.js";import"./dayjs.min-BwO3N9YX.js";import"./chunk-AYJ5UCUI-Dw2DX1gQ.js";import"./cloneDeep-Bc5O_UuE.js";import"./_initCloneObject-B99hApBY.js";import"./isEqual-BTEFoVlQ.js";import"./merge-BKuaLmoA.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DsdKomU-.js";import"./Backdrop-MmdoHhD6.js";import"./LinearProgress-qaySfJFS.js";import"./noop-DX6rZLP_.js";import"./uniq-Cg_nyvMg.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-DkQyjmz3.js";import"./index-B-3v4QXt.js";import"./_createAggregator-CFNCq5_t.js";import"./_baseEach-DhYY4hT-.js";import"./_baseIteratee-DxOlYuBh.js";import"./_baseGet-DkW9Oo_3.js";import"./isSymbol-z04EB1x3.js";import"./toString-2F-XAeAH.js";import"./hasIn-1KOP7LTd.js";import"./_baseOrderBy-Qgg5QwLy.js";import"./_baseMap-D114nytf.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Vo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Vo as __namedExportsOrder,Ro as default};
