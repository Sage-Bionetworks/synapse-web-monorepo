import{T as p}from"./ThemesPlot-CYM-sgL0.js";import"./jsx-runtime-Mut6b6ZN.js";import"./index-vS9mnyWj.js";import"./iframe-1zaoe6gF.js";import"./useFiles-D1zDsRtE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-Ch0rC1P2.js";import"./OrientationBanner-DFyDzGuH.js";import"./index-BGE9F3qY.js";import"./spreadSx-CwcO6WA9.js";import"./react-DHhj6IBI.js";import"./FullWidthAlert-Dmbyyznq.js";import"./Alert-CaW4HrEE.js";import"./createTheme-DpNzE4d4.js";import"./resolveComponentProps-DPiFg_7Y.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B963EUWM.js";import"./createSvgIcon-B9xlizw1.js";import"./DefaultPropsProvider-2M3YnDDd.js";import"./Close-l5PLK5SY.js";import"./IconButton-DWP4WfZS.js";import"./ButtonBase-CFptddls.js";import"./useTimeout-MfSepqIs.js";import"./TransitionGroupContext-DwVNEQzN.js";import"./useIsFocusVisible-BSo-X-iu.js";import"./useEventCallback-7NNh7VNL.js";import"./Paper-pEQNvCle.js";import"./Stack-C83qUTSK.js";import"./getThemeProps-Cc8P44uD.js";import"./useTheme-CJ_GeJUx.js";import"./Box-VEfKzwzZ.js";import"./AlertTitle-DYy2gM_I.js";import"./Typography-C735P2Wu.js";import"./useTheme-CfGNks2Q.js";import"./Grow-Dq35ME0n.js";import"./index-ChtUdljt.js";import"./utils-CMYcSCNM.js";import"./ClickAwayListener-CCYfSXt6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-C4YQYU6J.js";import"./index-BxOngdo6.js";import"./useControlled-Dm40RTb9.js";import"./useId-CTXoB2V5.js";import"./Popper-KpOZuT_B.js";import"./Button-CwJlsjun.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-CCyZLsCb.js";import"./utils-CkpiaAWG.js";import"./Link-UtnI4NMQ.js";import"./Collapse-CJSUDuZs.js";import"./isNil-S5XSv3sm.js";import"./_Uint8Array-jbfd-DZF.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dt3Q8mbv.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Ci23lrYU.js";import"./_getTag-Puwgzc-K.js";import"./tinycolor-Begke6kS.js";import"./Fade-CYw9ikGp.js";import"./Skeleton-Cq9f4rV_.js";import"./inputBaseClasses-CmBA2hPH.js";import"./calculateFriendlyFileSize-Dgr-X9ZX.js";import"./CheckCircleTwoTone-DHHVQUzF.js";import"./InfoTwoTone-pCgBZYpo.js";import"./mutation-nnr-ZiFk.js";import"./dayjs.min-BzPAf8fo.js";import"./chunk-AYJ5UCUI-cKaE7QDH.js";import"./cloneDeep-C-sRBbU_.js";import"./_initCloneObject-9iu-MeYW.js";import"./isEqual-CuIwC5PF.js";import"./merge-sRA-gjlr.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-B01_sqVA.js";import"./Backdrop-BydHRRW8.js";import"./LinearProgress-DIb7BC-P.js";import"./noop-DX6rZLP_.js";import"./uniq-Aby3NQ7t.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-C-NSv8ZO.js";import"./index-DQJpsOQS.js";import"./_createAggregator-DEdZsmjD.js";import"./_baseEach-C-MX8ejd.js";import"./_baseIteratee-Bx1kFnH4.js";import"./_baseGet-DBYe3qO9.js";import"./isSymbol-QwRfeqwJ.js";import"./toString-C_k0SCF_.js";import"./hasIn-CCIRvjVd.js";import"./_baseOrderBy-Dw2jtKPw.js";import"./_baseMap-BRiZanA-.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
