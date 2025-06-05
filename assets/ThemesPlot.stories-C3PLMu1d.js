import{T as p}from"./ThemesPlot-DhDd_ldJ.js";import"./jsx-runtime-DMre8F17.js";import"./index-BAuVHV2z.js";import"./iframe-OI0nEnmn.js";import"./useFiles-CAS_QhlS.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-oxozjXiE.js";import"./OrientationBanner-D5pw8BSu.js";import"./index-D6eIipcS.js";import"./spreadSx-CwcO6WA9.js";import"./react-B8rHlrBa.js";import"./FullWidthAlert-yVU6QIpW.js";import"./Alert-Bmvy0Okm.js";import"./createTheme-BB1S4NEt.js";import"./resolveComponentProps-DF96h0Eq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-u21J4taN.js";import"./createSvgIcon-D0kdEjIj.js";import"./DefaultPropsProvider-Cq1pa9G2.js";import"./Close-CcZGAq3X.js";import"./IconButton-8W9a9RnF.js";import"./ButtonBase-BaQs7_Pa.js";import"./useTimeout-pAtqERQv.js";import"./TransitionGroupContext-BNPxgiLu.js";import"./useIsFocusVisible-DfUxaCJB.js";import"./useEventCallback-DAxHKips.js";import"./Paper-2bbvmWyl.js";import"./Stack-CTUsYAii.js";import"./getThemeProps-B1TL05kh.js";import"./useTheme-B1Sv5EJG.js";import"./Box-DIA65-hd.js";import"./AlertTitle-D9nMGlyg.js";import"./Typography-CTMq_pdk.js";import"./useTheme-B8P1yjh0.js";import"./Grow-CPqua1HP.js";import"./index-DSD_JLMH.js";import"./utils-DOe16nNH.js";import"./ClickAwayListener-1SXS2RHr.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DuZFgwly.js";import"./index-CR-BbFJG.js";import"./useControlled-BGfTKx8L.js";import"./useId-BaHTv3Ol.js";import"./Popper-BATOstVY.js";import"./Button-9_gAD86Z.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B2-wbKIs.js";import"./utils-CILTy0he.js";import"./Link-C-2XG2Lr.js";import"./Collapse-DTOGVf0W.js";import"./isNil-BTdFIcRc.js";import"./_Uint8Array-d9oc9a-e.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DS50Q_-r.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DAhZrM2m.js";import"./_getTag-TV9QcuB2.js";import"./tinycolor-Begke6kS.js";import"./Fade-1XXXk4ux.js";import"./Skeleton-DFEpqHx_.js";import"./inputBaseClasses-C7D8GWl7.js";import"./calculateFriendlyFileSize-Dz_VodOE.js";import"./CheckCircleTwoTone-D0Rd8YBH.js";import"./InfoTwoTone-D4EKW_HA.js";import"./useMutation-CENJvQo9.js";import"./isEqual-DpbblXQH.js";import"./dayjs.min-cdOwOoLt.js";import"./chunk-AYJ5UCUI-BkWiTWCP.js";import"./cloneDeep-nAHUzRQX.js";import"./_initCloneObject-BLowrZgy.js";import"./merge-Bij2bwXJ.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-22LxNHNz.js";import"./Backdrop-DC0yWDpb.js";import"./LinearProgress-GUzECLK8.js";import"./noop-DX6rZLP_.js";import"./uniq-bEOt2H6H.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-0cMw3suo.js";import"./index-Cr6WBVMO.js";import"./_createAggregator-YbT9c_F_.js";import"./_baseEach-FEYPsYGZ.js";import"./_baseIteratee-DDDM0t50.js";import"./_baseGet-CpMFbe8J.js";import"./isSymbol-DOjDjtCt.js";import"./toString-BZECR69S.js";import"./hasIn-BPrMVFOm.js";import"./_baseOrderBy-DfnfD5rd.js";import"./_baseMap-Cubw4lSi.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
