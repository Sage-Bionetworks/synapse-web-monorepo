import{T as p}from"./ThemesPlot-DAtHm69r.js";import"./jsx-runtime-3KUIpe_B.js";import"./index-DKQmXyTg.js";import"./iframe-yVMHiQlN.js";import"./useFiles-BUTSDjpp.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-BKYSFUA4.js";import"./OrientationBanner-hPZ43e6I.js";import"./index-C-TJzvvw.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dtsa6pJa.js";import"./FullWidthAlert-C4lmFUoi.js";import"./Alert-Aziq9jrC.js";import"./createTheme-D71xLB5y.js";import"./resolveComponentProps-BGzDORmu.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-WbU4IK3w.js";import"./createSvgIcon-50Cdg5i5.js";import"./DefaultPropsProvider-BLKPmz24.js";import"./Close-CSP2Jd51.js";import"./IconButton-pbjeZzOL.js";import"./ButtonBase-CkYDoZ72.js";import"./useTimeout-D1oI4iH6.js";import"./TransitionGroupContext-B_1k5y15.js";import"./useIsFocusVisible-YFynukRh.js";import"./useEventCallback-DPuUUDpa.js";import"./Paper-CpI3p7vt.js";import"./Stack-CpeVWMZC.js";import"./getThemeProps-CQbQMCh0.js";import"./useTheme-BdTZ9glP.js";import"./Box-DHQrsK7r.js";import"./AlertTitle-BpB3V9XK.js";import"./Typography-SSCOYWVs.js";import"./useTheme-HpprIIPg.js";import"./Grow-DBVaKRUq.js";import"./index--OvIPCqu.js";import"./utils-DJQOJB4m.js";import"./ClickAwayListener-Dt1qC4MI.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BBYtGIG7.js";import"./index-Cle-c0aH.js";import"./useControlled-CtW-cS0b.js";import"./useId-CF9Yu02v.js";import"./Popper-CGUN53ew.js";import"./Button-fGoJWvNB.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-B7kP4S9m.js";import"./utils-D5WnLCld.js";import"./Link-Bpjhw2CS.js";import"./Collapse-DgDuu3nh.js";import"./isNil-BwVJPUb-.js";import"./_Uint8Array-Hpg7Ovco.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CpRgRSSG.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Be5X7RjA.js";import"./_getTag-gn94A73Q.js";import"./tinycolor-Begke6kS.js";import"./Fade-CMDFt0Nj.js";import"./Skeleton-C670lw8b.js";import"./inputBaseClasses-DaTlLvG_.js";import"./calculateFriendlyFileSize-Dn_xi8Ur.js";import"./CheckCircleTwoTone-BsG1c10B.js";import"./InfoTwoTone-Brz641sQ.js";import"./mutation-CJXf9Cy9.js";import"./dayjs.min-D019G3yF.js";import"./chunk-AYJ5UCUI-DkAV2hPV.js";import"./cloneDeep-rpODRfQ8.js";import"./_initCloneObject-BIxNbgCW.js";import"./isEqual-CblXoSZj.js";import"./merge-CfMdqnSR.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BBMouywJ.js";import"./Backdrop-Co9O8Qob.js";import"./LinearProgress-BiWTHg34.js";import"./noop-DX6rZLP_.js";import"./uniq-DLfsGhQe.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-DrB6O414.js";import"./index-B2wavyoL.js";import"./_createAggregator-DIIikIjQ.js";import"./_baseEach-B3hpPrvh.js";import"./_baseIteratee-HiItCSZA.js";import"./_baseGet-BelO6GHW.js";import"./isSymbol-DtDHKaGD.js";import"./toString-CTt2u-FA.js";import"./hasIn-CBLYzHKs.js";import"./_baseOrderBy-CAwYlwiN.js";import"./_baseMap-BXXFW77D.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
