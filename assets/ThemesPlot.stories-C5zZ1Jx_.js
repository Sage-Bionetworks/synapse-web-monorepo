import{T as p}from"./ThemesPlot-nhevlPLS.js";import"./jsx-runtime-CZmUC0kc.js";import"./index-D48dKAGK.js";import"./iframe-DXxs8wzV.js";import"./useFiles-QsHV2q1R.js";import"./VerificationSubmission-DHPhgAH7.js";import"./SynapseConstants-BtQ24Nut.js";import"./OrientationBanner-Bqf4PnT9.js";import"./index-Bqph6avf.js";import"./spreadSx-CwcO6WA9.js";import"./react-DnH3PGz_.js";import"./FullWidthAlert-WrZ35eIA.js";import"./Alert-CrX7ZBHc.js";import"./createTheme-DdUHwKDu.js";import"./resolveComponentProps-DBk_bQ3w.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B4VymO4y.js";import"./createSvgIcon-CGfU68f8.js";import"./DefaultPropsProvider-DnsYkYhu.js";import"./Close-B2Put2a1.js";import"./IconButton-MNk6eaK_.js";import"./ButtonBase-DijL8LGZ.js";import"./useTimeout-CfJSgBAN.js";import"./TransitionGroupContext-xk93-I-l.js";import"./useIsFocusVisible-pZRnHMmE.js";import"./useEventCallback-CfXeTH2v.js";import"./Paper-BWc9QIn7.js";import"./Stack-s10dd2v_.js";import"./getThemeProps-DpFYsVdH.js";import"./useTheme-Cdkd9-zl.js";import"./Box-EZ-Kz8mO.js";import"./AlertTitle-qABI-vcz.js";import"./Typography-CDDEj6bd.js";import"./useTheme-CDkkRwMy.js";import"./Grow-DPoxz4OE.js";import"./index-CTlj-uEa.js";import"./utils-BgEZDT5t.js";import"./ClickAwayListener-CyT30qp6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B0EkgW6k.js";import"./index-7Uf9BQgU.js";import"./useControlled-DZ97s39z.js";import"./useId-Buvf4Xiv.js";import"./Popper-DgH4d2MR.js";import"./Button-CYaahIbs.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-DWbROD4e.js";import"./utils-DnrSKvOR.js";import"./Link-Cbjql7oX.js";import"./Collapse-DQpZ3-gN.js";import"./isNil-BEj-5XkN.js";import"./_Uint8Array-K-J4cL1T.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DKyqGUYf.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DH-XEyfw.js";import"./_getTag-CYk1drFw.js";import"./tinycolor-Begke6kS.js";import"./Fade-B1FcSJEt.js";import"./Skeleton-DJgc57tZ.js";import"./inputBaseClasses-DcQwlFr_.js";import"./calculateFriendlyFileSize-9m6yHg2A.js";import"./CheckCircleTwoTone-BY4FzlSL.js";import"./InfoTwoTone-DL9tebAy.js";import"./useMutation-hkATgPdp.js";import"./isEqual-b23C5zIw.js";import"./dayjs.min-DlNJuh2r.js";import"./chunk-AYJ5UCUI-S23a5Wq1.js";import"./cloneDeep-hNZImc-4.js";import"./_initCloneObject-02v0DsxF.js";import"./merge-Dd1BqavR.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DhoAZ_qc.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-D87YH2JH.js";import"./Backdrop-Bmsj-0DB.js";import"./LinearProgress-Cfy2pows.js";import"./noop-DX6rZLP_.js";import"./uniq-qmWNv7WH.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-DpHe7iaZ.js";import"./index-ChZDYUBs.js";import"./_createAggregator-5Yixxnn7.js";import"./_baseEach-BNUoJI3G.js";import"./_baseIteratee-du2e_AO0.js";import"./_baseGet-B_EdYx8s.js";import"./isSymbol-Db5oJ-yg.js";import"./toString-BtL3po-k.js";import"./hasIn-9BSiWDqX.js";import"./_baseOrderBy-DSY4HB-j.js";import"./_baseMap-DgD_ZIty.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
