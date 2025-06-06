import{T as p}from"./ThemesPlot-Chc_5ULb.js";import"./jsx-runtime-C5ysBaSF.js";import"./index-nsQxvz3s.js";import"./iframe-Janl4OHm.js";import"./useFiles-Dhq64LD3.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-nC0cy9NR.js";import"./OrientationBanner-BaOJTw1c.js";import"./index-Euv0kKX6.js";import"./spreadSx-CwcO6WA9.js";import"./react--bFTsUCT.js";import"./FullWidthAlert-DlFKq-DC.js";import"./Alert-RC7B8x0K.js";import"./createTheme-ByXOpdJz.js";import"./resolveComponentProps-CfpND56K.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Ceiq6s0j.js";import"./createSvgIcon-DeXJlgu_.js";import"./DefaultPropsProvider-AOp6TNyl.js";import"./Close-CT9yiP13.js";import"./IconButton-BtJv4fcx.js";import"./ButtonBase-D09UPZOY.js";import"./useTimeout-iGOOtj66.js";import"./TransitionGroupContext-BRGEgvEM.js";import"./useIsFocusVisible-B_yrjrHI.js";import"./useEventCallback-BxOaVHWE.js";import"./Paper-BkFXPQ0I.js";import"./Stack-Bu6KB5fc.js";import"./getThemeProps-BR7frNLW.js";import"./useTheme-dh9DXsym.js";import"./Box-Dh_kMIqf.js";import"./AlertTitle-CTWcSjN8.js";import"./Typography-2ZaHckIm.js";import"./useTheme-faklcodD.js";import"./Grow-DQCtPGN8.js";import"./index-BNgdfWIu.js";import"./utils-CCZi6kcq.js";import"./ClickAwayListener-DyUGUeMv.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-rXWE94cF.js";import"./index-BEcPdF-J.js";import"./useControlled-B8KPlW55.js";import"./useId-C4BxQuWA.js";import"./Popper-i9E87YUZ.js";import"./Button-2ZkIkkeV.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B-QxEfwh.js";import"./utils-NjyKKwdB.js";import"./Link-DTRRVZ6z.js";import"./Collapse-haV8wGjw.js";import"./isNil-DWkoTF96.js";import"./_Uint8Array-CJ-px7Q4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DIW4b2lw.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CkMKoezu.js";import"./_getTag-BK3frtm6.js";import"./tinycolor-Begke6kS.js";import"./Fade-zN03jnnY.js";import"./Skeleton-CCW5pzar.js";import"./inputBaseClasses-DEtapqOK.js";import"./calculateFriendlyFileSize-C134mPnt.js";import"./CheckCircleTwoTone-DdehzE-y.js";import"./InfoTwoTone-DyKFxUVE.js";import"./useMutation-KCq28Paw.js";import"./isEqual-tsjY0vzA.js";import"./dayjs.min-CO0gnhwg.js";import"./chunk-AYJ5UCUI-DnzAy6h8.js";import"./cloneDeep-CKZCjTCX.js";import"./_initCloneObject-Bx7Kkndt.js";import"./merge-DPAljtzM.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CsSkjlck.js";import"./Backdrop-BjEKCNaq.js";import"./LinearProgress-B7mtc77U.js";import"./noop-DX6rZLP_.js";import"./uniq-Bkonf_-T.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-DJnL9Zm9.js";import"./index-C3lbV0-q.js";import"./_createAggregator-XZSGJm8s.js";import"./_baseEach-TunUcvp5.js";import"./_baseIteratee-2RWhzO0Q.js";import"./_baseGet-BYRbJBG6.js";import"./isSymbol-CpHMAUht.js";import"./toString-CGhGPn4R.js";import"./hasIn-CygaFDRi.js";import"./_baseOrderBy-DW-yoeSz.js";import"./_baseMap-wPddRXd_.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
