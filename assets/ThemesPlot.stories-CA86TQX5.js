import{T as p}from"./ThemesPlot-Ck3601hg.js";import"./jsx-runtime-ZqC83-wP.js";import"./index-D3UU9lQW.js";import"./iframe-itIUiwxo.js";import"./useFiles-DQNFO6M3.js";import"./VerificationSubmission-BI5WaB2N.js";import"./SynapseConstants-CKvgSoDH.js";import"./OrientationBanner-B0OoLswb.js";import"./index-D11wmJq-.js";import"./spreadSx-CwcO6WA9.js";import"./react-O6I3oTFU.js";import"./FullWidthAlert-DAax8okC.js";import"./Alert-CU_Obpy3.js";import"./createTheme-C_IqejkE.js";import"./resolveComponentProps-Dmj9A9RV.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-hDXtKHAF.js";import"./createSvgIcon-DHcmv218.js";import"./DefaultPropsProvider-YK680Z1R.js";import"./Close-BJ4PCaUp.js";import"./IconButton-ChC2FTBM.js";import"./ButtonBase-75CAl-fr.js";import"./useTimeout-BV5S8NXn.js";import"./TransitionGroupContext-B6Qra7Rj.js";import"./useIsFocusVisible-DHBCoWw5.js";import"./useEventCallback-CA3yg066.js";import"./Paper-B36p1j3K.js";import"./Stack-DlqPlAbi.js";import"./getThemeProps-wZq0Zah2.js";import"./useTheme-B_XHKhDB.js";import"./Box-CmLfYmAL.js";import"./AlertTitle-BLeEkfUJ.js";import"./Typography-DQbfKnED.js";import"./useTheme-DfwXarV_.js";import"./Grow-CryHvXlm.js";import"./index-C3D0ccmq.js";import"./utils-Bd-b7f2h.js";import"./ClickAwayListener-zCiIq-sA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BPpCrc9w.js";import"./index-Ccj1bX3p.js";import"./useControlled-C9HNAFVZ.js";import"./useId-CG4UsncK.js";import"./Popper-C1SIfDvh.js";import"./Button-CMT8k8PB.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DN6u4g4A.js";import"./useQuery-BqZh5555.js";import"./utils-DJNKw99O.js";import"./Link-DZafluH_.js";import"./Collapse-CyQNCh1z.js";import"./isNil-DGBBC_gM.js";import"./_Uint8Array-CyAVpPKh.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-m8g4xdIh.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BPztA6qE.js";import"./_getTag-BQtK23u5.js";import"./tinycolor-Begke6kS.js";import"./Fade-CojYmX76.js";import"./Skeleton-DQuvMvZk.js";import"./inputBaseClasses-CShjFgOh.js";import"./calculateFriendlyFileSize-CQTrwrnu.js";import"./CheckCircleTwoTone-C8wF6a0h.js";import"./InfoTwoTone-BK1P1y4D.js";import"./useMutation-BrGCzCug.js";import"./isEqual-BPjkdIBC.js";import"./dayjs.min-DYPT4JpK.js";import"./chunk-AYJ5UCUI-BhbJP7T3.js";import"./cloneDeep-BUB8jjRG.js";import"./_initCloneObject-D6hrjEDP.js";import"./merge-BOQKqbFD.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DJ9aEy1v.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-hbuA7HWn.js";import"./Backdrop-1DB62AU-.js";import"./LinearProgress-2YfNU4aL.js";import"./noop-DX6rZLP_.js";import"./uniq-BWdCChrO.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-Kc_IH0AC.js";import"./index-CgvhFkFn.js";import"./_createAggregator-CiXZ4BuX.js";import"./_baseEach-B7BDBxhN.js";import"./_baseIteratee-P5hoOmuB.js";import"./_baseGet-BFN9skPc.js";import"./isSymbol-GDvudLqi.js";import"./toString-J2AGyw_t.js";import"./hasIn-MJbfsLY2.js";import"./_baseOrderBy-DXghKU4W.js";import"./_baseMap-BQfoW8O7.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
