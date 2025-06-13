import{T as p}from"./ThemesPlot-bX46NN1J.js";import"./jsx-runtime-BiWA54l5.js";import"./index-DhiVPEXr.js";import"./iframe-DdfsIYam.js";import"./useFiles-DFuiG744.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-Bqeym1jK.js";import"./OrientationBanner-DtOwZzDw.js";import"./index-C12dOKGf.js";import"./spreadSx-CwcO6WA9.js";import"./react-DMypNxiR.js";import"./FullWidthAlert-zKKUZdhG.js";import"./Alert-XZzYdMFx.js";import"./createTheme-D7uPp7E_.js";import"./DefaultPropsProvider-BNGQCVUl.js";import"./useSlot-mlQ06HgV.js";import"./useForkRef-D6Ozyr_R.js";import"./createSimplePaletteValueFilter-37lQ19gZ.js";import"./createSvgIcon-BrbTVqGj.js";import"./Close-Ce0cvGVf.js";import"./IconButton-DiRXQYen.js";import"./useTimeout-DBCArjJg.js";import"./ButtonBase-BAw29sd5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-X0wyc6kr.js";import"./Paper-BdIQK_6J.js";import"./useTheme-Bgl42pYj.js";import"./useTheme-ClwTON04.js";import"./Stack-DAwVky2z.js";import"./extendSxProp-BFwTiWAX.js";import"./getThemeProps-C20Tg9I8.js";import"./Box-ChSwPMHV.js";import"./AlertTitle-BIF0pMej.js";import"./Typography-BQoiqdiw.js";import"./index-BP2NWRlB.js";import"./ClickAwayListener-nsW1tqeE.js";import"./getReactElementRef-Cx7-4IP1.js";import"./index-3znFL5fM.js";import"./index-CbQDV7ub.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BA9w5EK3.js";import"./Tooltip-BQ2Zx4cU.js";import"./index-CnleELMM.js";import"./useControlled-DL7QACQp.js";import"./Popper-CzJrasAD.js";import"./Button-BX-85nHl.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-C8aUx7Vd.js";import"./utils-BlMtL_IL.js";import"./Link-DWAOj1dQ.js";import"./Collapse-Cj9251w7.js";import"./isNil-Bp9Gpt_s.js";import"./_Uint8Array-IiFQ2nXs.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Sn8HKbSJ.js";import"./isArray-Dxzbedgu.js";import"./isEqual-CBR6zOeP.js";import"./_getTag-BJIbzf7A.js";import"./tinycolor-Begke6kS.js";import"./Fade-B_Kbt0VW.js";import"./inputBaseClasses-B5msBFiG.js";import"./calculateFriendlyFileSize-DFGrycOX.js";import"./CheckCircleTwoTone-C4eJ2xB1.js";import"./InfoTwoTone-D7rbUfcN.js";import"./useMutation-BAtKFIoo.js";import"./dayjs.min-iire0L97.js";import"./chunk-AYJ5UCUI-CHKzmd4h.js";import"./cloneDeep-CjyUMlLu.js";import"./_initCloneObject-B8SJcj1G.js";import"./Skeleton-wLFF7FAc.js";import"./merge-CMku2vk-.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-yLGO8bRy.js";import"./Backdrop-BaaJEU_D.js";import"./LinearProgress-BeQ92TWw.js";import"./uniq-CyIsg8cy.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-Dj2Oa_D5.js";import"./index-Chjiymov.js";import"./_createAggregator-BqGJicgz.js";import"./_baseEach-B3p52cZP.js";import"./_baseIteratee-Bg7yTP2h.js";import"./_baseGet-lodhdHrZ.js";import"./isSymbol-CyFOxqz5.js";import"./toString-DMks7KYB.js";import"./hasIn-mFRT4m5_.js";import"./_baseOrderBy-TcturxUV.js";import"./_baseMap-BrXrYH2-.js";import"./head-aneRfQQJ.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
