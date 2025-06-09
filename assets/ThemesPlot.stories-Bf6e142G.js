import{T as p}from"./ThemesPlot-ZwrPrUp2.js";import"./jsx-runtime-JMjDAiku.js";import"./index-CZYh0tRp.js";import"./iframe-CCE2QgdW.js";import"./useFiles-BKoaRBy7.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-BAkIMR8-.js";import"./OrientationBanner-C4LioKg8.js";import"./index-CbpQBUYj.js";import"./spreadSx-CwcO6WA9.js";import"./react-mnnoerZo.js";import"./FullWidthAlert-_xWROjSF.js";import"./Alert-DhU8zZuo.js";import"./createTheme-BsMgtWZT.js";import"./resolveComponentProps-CNbOM-P8.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DQdHfMmH.js";import"./createSvgIcon-BIs1E3cK.js";import"./DefaultPropsProvider-omTkMwKz.js";import"./Close-CXRj7muF.js";import"./IconButton-CB2yg_JS.js";import"./ButtonBase-B2wgZIDS.js";import"./useTimeout-BJT5itvQ.js";import"./TransitionGroupContext-l1GBX2CH.js";import"./useIsFocusVisible-CJXqI5Ok.js";import"./useEventCallback-CMwoN8rY.js";import"./Paper-CfNAfVct.js";import"./Stack-B6FqdQE3.js";import"./getThemeProps-DNrBl4wZ.js";import"./useTheme-knQsgu-L.js";import"./Box-CZfJ9FNL.js";import"./AlertTitle-CaGh6uKR.js";import"./Typography-CsnhBgcI.js";import"./useTheme-N2s54T76.js";import"./Grow-C4EvBoga.js";import"./index-C283ZE_A.js";import"./utils-D_mGwy7L.js";import"./ClickAwayListener-DChUe8a7.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DLYYTJAc.js";import"./index-CXLskV8c.js";import"./useControlled-BOEsG-Ke.js";import"./useId-sjHSV8uf.js";import"./Popper-CgUdf8Yp.js";import"./Button-Cbd-R7S0.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B2W7WvCN.js";import"./utils-BTDD21Gu.js";import"./Link-BK0CPbSA.js";import"./Collapse-D7BpYLKk.js";import"./isNil-jJiu7qUq.js";import"./_Uint8Array-CRK6RbyJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DXDyFbLA.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CCn7fuDD.js";import"./_getTag-CzbInwKL.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dsc-ng1t.js";import"./Skeleton-BD-shLg_.js";import"./inputBaseClasses-CzPMbH9V.js";import"./calculateFriendlyFileSize-Cls87z73.js";import"./CheckCircleTwoTone-BDkgaxM-.js";import"./InfoTwoTone-Dd48EZp1.js";import"./useMutation-Dl-XAcpb.js";import"./isEqual-BeXmNxMu.js";import"./dayjs.min-CPUkpIN-.js";import"./chunk-AYJ5UCUI-DhzNmnWU.js";import"./cloneDeep-D1htCpIz.js";import"./_initCloneObject-Bn1ipTO5.js";import"./merge-cNoXgvrO.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-_dLY4ued.js";import"./Backdrop-wU2G6vto.js";import"./LinearProgress-uKGgdkgR.js";import"./noop-DX6rZLP_.js";import"./uniq-BHglekKB.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-CI_3i2-M.js";import"./index-DhZdlyWK.js";import"./_createAggregator-CclDkFkE.js";import"./_baseEach-NlBiJJAA.js";import"./_baseIteratee-BH9jxd4z.js";import"./_baseGet-racL40Xd.js";import"./isSymbol-D8Zw-095.js";import"./toString-UPy0TL2W.js";import"./hasIn-C5LnKrQ_.js";import"./_baseOrderBy-tx3RzYdc.js";import"./_baseMap-sY46CQib.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
