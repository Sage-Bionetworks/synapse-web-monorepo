import{T as p}from"./ThemesPlot-Btvx7ZL4.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-CTnFA4bu.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CvwR6iLA.js";import"./OrientationBanner-DV5DjAg7.js";import"./index-JKjjlUJ_.js";import"./index-C8bD_8RJ.js";import"./iframe-6NIrtisn.js";import"./spreadSx-CwcO6WA9.js";import"./react-L-tuU4f9.js";import"./FullWidthAlert-BYAzIMj3.js";import"./Alert-W7Fn9LAQ.js";import"./createTheme-rdXb4Z3n.js";import"./DefaultPropsProvider-BSJaRsTl.js";import"./useSlot-xRCA8-yW.js";import"./useForkRef-iNjtCg2u.js";import"./createSimplePaletteValueFilter-CnJEMf1_.js";import"./createSvgIcon-o81qpFfO.js";import"./Close-DkoDsS75.js";import"./IconButton-mB-mk9DV.js";import"./useTimeout-tSu105ec.js";import"./ButtonBase-s_N_k51K.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CJgqf_3y.js";import"./Paper-BY_NDt3Z.js";import"./useTheme-BMLVXfjV.js";import"./useTheme-B2ck8NEL.js";import"./Stack-NnGJ5qne.js";import"./extendSxProp-CjG0KNf_.js";import"./getThemeProps-aTPmA6S6.js";import"./Box-Cm0v7wfp.js";import"./AlertTitle-uJo3K6bg.js";import"./Typography-MIMEr5ls.js";import"./index-Co4awF9m.js";import"./ClickAwayListener-j1E8ceys.js";import"./getReactElementRef-BXbGSLa4.js";import"./index-DNI5SuWC.js";import"./index-B01S0N5E.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqSfdBtc.js";import"./Tooltip-X3XBQeaA.js";import"./index-D3moNsfw.js";import"./useControlled-C2I-Fb0l.js";import"./Popper-BJsw6KEJ.js";import"./Button-BAI1H06J.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-c3aTz-1u.js";import"./QueryClientProvider-B0vgEJwN.js";import"./Link-DT1xrAE-.js";import"./Collapse-CkW4wqJc.js";import"./_baseUniq-Bh5IYYWn.js";import"./_Uint8Array-DvFvmNGE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C0Gz5PSj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D9xtNUPh.js";import"./isEqual-CRqgLt-Z.js";import"./merge-E1ABMEbN.js";import"./_initCloneObject-DPoQn5Vc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DteZvXvx.js";import"./inputBaseClasses-Ck21ZDTq.js";import"./calculateFriendlyFileSize-BhDEBuU0.js";import"./CheckCircleTwoTone-BX5nbuHN.js";import"./InfoTwoTone-DLogZ7mx.js";import"./useMutation-BvDubB4-.js";import"./dayjs.min-8GkHU6E7.js";import"./chunk-AYJ5UCUI-BLLTkN9d.js";import"./cloneDeep-Pu5ABENM.js";import"./Skeleton-0mTOQZYg.js";import"./SqlFunctions-CqOxgBqv.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Bp21MGwm.js";import"./Backdrop-DBO5i-QH.js";import"./LinearProgress-9IifhZsu.js";import"./uniq-DAfmbEil.js";import"./Plot-8QRYRIgu.js";import"./index-Chjiymov.js";import"./_createAggregator-BKvbLhzg.js";import"./_baseEach-EJMU4Cro.js";import"./_baseIteratee-CXoWF26m.js";import"./_baseGet-BOg-O_Rw.js";import"./isSymbol-Bn_IRhge.js";import"./toString-RkF0fKjm.js";import"./hasIn-4wxUXXrr.js";import"./_baseOrderBy-CV0O1Kwo.js";import"./_baseMap-Cn_6UV1P.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Mo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Mo as __namedExportsOrder,Ko as default};
