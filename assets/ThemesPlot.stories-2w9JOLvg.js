import{T as p}from"./ThemesPlot-BXcI9-p8.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-D8rghsAH.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BCna4l2c.js";import"./OrientationBanner-C9MUfTx5.js";import"./index-CVoQLnv9.js";import"./index-BuaY3YW0.js";import"./iframe-CB9RLm2k.js";import"./spreadSx-CwcO6WA9.js";import"./react-0syDy3V6.js";import"./FullWidthAlert-BZxmMm3l.js";import"./Alert-BuIno2nG.js";import"./createTheme-BwKauHHe.js";import"./DefaultPropsProvider-sdt8O3fx.js";import"./useSlot-2Lcx0oJc.js";import"./useForkRef-_jAcTXIz.js";import"./createSimplePaletteValueFilter-C2q_FQJj.js";import"./createSvgIcon-3wDtnJX3.js";import"./Close-P5_Ux7pg.js";import"./IconButton-D6lW0S_w.js";import"./useTimeout-BXDWjVyi.js";import"./ButtonBase-DkxGY9m0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D8RR-Hwe.js";import"./Paper-CY5FVEAG.js";import"./useTheme-C2n0rsfr.js";import"./useTheme-DPiytpU9.js";import"./Stack-D679agRe.js";import"./extendSxProp-CurqUalJ.js";import"./getThemeProps-DTYZfuZ8.js";import"./Box-B2-eTlSN.js";import"./AlertTitle-Dc-QdeUX.js";import"./Typography-CuSWghUP.js";import"./index-DASj5E_q.js";import"./ClickAwayListener-DXs6rXAY.js";import"./getReactElementRef-Dk7gEWKT.js";import"./index-D0Ht5zCB.js";import"./index-DcmrF_XG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C7nlyfN6.js";import"./Tooltip-Co-YvhFo.js";import"./index-VT5DBhWW.js";import"./useControlled-C93SLyQj.js";import"./Popper-CPhprIAB.js";import"./Button-C84MYn5A.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-B_0w80Fl.js";import"./QueryClientProvider-DbVmeRWK.js";import"./Link-CvYSWFWB.js";import"./Collapse-BjWhwNwG.js";import"./_baseUniq-D9jAkyOV.js";import"./_Uint8Array-CmXresUg.js";import"./isArray-C5D-ZESG.js";import"./_getTag-8Ax-wOhp.js";import"./isEqual-PLFD9L4o.js";import"./merge-B2EPh-KY.js";import"./_initCloneObject-Bq8KZ5MO.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-T6p8CTbb.js";import"./inputBaseClasses-x_KSJMkP.js";import"./calculateFriendlyFileSize-B8XXE6y4.js";import"./CheckCircleTwoTone-uAYBjvIl.js";import"./InfoTwoTone-C3VRMjQy.js";import"./useMutation-CK4U1fL0.js";import"./dayjs.min-CesC2iFM.js";import"./chunk-AYJ5UCUI-BKDt8PqE.js";import"./cloneDeep-DFPYlp5j.js";import"./Skeleton-gDxVQ58P.js";import"./SqlFunctions-C8HqQ3uk.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DxKKscFN.js";import"./Backdrop-ClV2QlSQ.js";import"./LinearProgress-CXDCFir4.js";import"./uniq-CYEmTDHA.js";import"./Plot-BjQZMxvR.js";import"./index-Chjiymov.js";import"./_createAggregator-BHWe3n-l.js";import"./_baseEach-B8CK1r5a.js";import"./_baseIteratee-DUc0r5-r.js";import"./_baseGet-DD5rLOPy.js";import"./isSymbol-D0BnZDSi.js";import"./toString-BuJU8AoY.js";import"./hasIn-C9bAzXbI.js";import"./_baseOrderBy-BofKWR2-.js";import"./_baseMap-BeV6IQW7.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Jo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Jo as __namedExportsOrder,Go as default};
