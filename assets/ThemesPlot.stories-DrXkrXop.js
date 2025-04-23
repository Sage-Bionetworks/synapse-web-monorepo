import{T as p}from"./ThemesPlot-DNW2mIZw.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-qqa1MI09.js";import"./VerificationSubmission-CWAFIXEx.js";import"./SynapseConstants-Dk0Mz-dJ.js";import"./OrientationBanner-BOCf4qOE.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-B_rXn9qX.js";import"./Alert-u0n1NA7e.js";import"./createTheme-BmUnpyjI.js";import"./index-GEGPABih.js";import"./styled-_IoEwjFQ.js";import"./mergeSlotProps-D1c34xqb.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BDoLG09A.js";import"./createSvgIcon-Cg71VSX1.js";import"./Close-DdzXEaRM.js";import"./Paper-sJzUMfPp.js";import"./IconButton-CxrGCLVD.js";import"./ButtonBase-QEdCuq5m.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./Stack-D4Hv4xSj.js";import"./Box-Tu95KWeq.js";import"./AlertTitle-CgrA6e5t.js";import"./Typography-DUswyeAh.js";import"./useTheme-CxBmLnxz.js";import"./Grow-BJQmYc4X.js";import"./index-BIzb42Jq.js";import"./utils-Kl3ltpPj.js";import"./ClickAwayListener-DMjw0JVT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CbFhYBpv.js";import"./index-BByOA_q1.js";import"./Popper-BYhjzrIk.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-BkKUhIiJ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DBSsSsIU.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-B7fmYX5S.js";import"./CheckCircleTwoTone-S1ZFwL3C.js";import"./calculateFriendlyFileSize-1hZ7TxWp.js";import"./Skeleton-DiWSb2YA.js";import"./inputBaseClasses-Bc0CX7u-.js";import"./Fade-DL1c9j4A.js";import"./utils-DPkdG3Lw.js";import"./mutation-SJTTtyND.js";import"./useQuery-DFbKL1Tm.js";import"./Link-D-YR7sBc.js";import"./Collapse-z9mI71qO.js";import"./isNil-CFgMzoGa.js";import"./_initCloneObject-BAcHLPB8.js";import"./_baseTimes-M2nZWodf.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./cloneDeep-CT__oUM4.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-C6FuPAdF.js";import"./merge-6t4vjKrJ.js";import"./_isIterateeCall-FuixZKJ7.js";import"./SqlFunctions-q4HiBnvv.js";import"./LoadingScreen-DXya-_sQ.js";import"./Backdrop-D4Q5evrC.js";import"./LinearProgress-CXkh74S9.js";import"./Plot-DSBVXOLN.js";import"./index-BfyspvgH.js";import"./_baseEach-C4ntP5E4.js";import"./hasIn-HUTO6xSM.js";import"./isSymbol-VqtJwUUo.js";import"./toString-C-tSuG3i.js";import"./pick-ypUMQMGM.js";import"./_baseSlice-F8doVSIJ.js";import"./_baseIteratee-CkJqhNdN.js";import"./noop-DX6rZLP_.js";import"./_baseDifference-B21X06om.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./unset-CbSFGmEQ.js";import"./times-DslHYRns.js";import"./toInteger-2vkq8YOc.js";import"./uniq-CNvu6qW8.js";import"./omitBy-Bm4RdlFi.js";import"./pickBy-D9DV79AL.js";import"./uniqueId-CNPmaLAy.js";import"./isNumber-BR1aE1rr.js";import"./chunk-CcTTw58R.js";import"./sortBy-Bn7GOGi2.js";import"./without-BoXSnSs5.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Ro=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Ro as __namedExportsOrder,Qo as default};
