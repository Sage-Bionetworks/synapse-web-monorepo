import{T as p}from"./ThemesPlot-Cvrs19XP.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-Da5SPf30.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./SynapseConstants-BgpCwDFe.js";import"./OrientationBanner-BwAbfTIw.js";import"./index-Bi4am7_a.js";import"./index-CfbPO5Pk.js";import"./iframe-B73v8h_Y.js";import"./spreadSx-CwcO6WA9.js";import"./react-Czvs3lpM.js";import"./FullWidthAlert-BxCHPgi_.js";import"./Alert-Cy2iyRT_.js";import"./createTheme-B8QSyZvJ.js";import"./DefaultPropsProvider-E91GGLqj.js";import"./useSlot-DbF0H-M6.js";import"./useForkRef-CNGHG2sd.js";import"./createSimplePaletteValueFilter-DMZZiVpQ.js";import"./createSvgIcon-B4oujve6.js";import"./Close-DnuW4VP0.js";import"./IconButton-CNjLAA-N.js";import"./useTimeout-CngDlYNI.js";import"./ButtonBase-EQYK4HG0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dwx-LJEp.js";import"./Paper-DWy9BGA0.js";import"./useTheme-5tq7elWw.js";import"./useTheme-kqh4Ll_I.js";import"./Stack-IvFAcYq_.js";import"./extendSxProp-BASXjWDU.js";import"./getThemeProps-CxBOemI1.js";import"./Box-C_8woQ6t.js";import"./AlertTitle-C2IYM2mb.js";import"./Typography-C496KcFS.js";import"./index-D_tds8oQ.js";import"./ClickAwayListener-bWEbtpgx.js";import"./getReactElementRef-DqYwo8-I.js";import"./index-C1mw4Gna.js";import"./index-9kSQh7S9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-1A1uLTzL.js";import"./Tooltip-Buh_A6A3.js";import"./index-B8TmctUz.js";import"./useControlled-BTQkJmVV.js";import"./Popper-B67Zc9vL.js";import"./Button-CaVEglZt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-CT4vRpQZ.js";import"./QueryClientProvider-CSQ7Q6Lo.js";import"./Link-Dv4MSEKL.js";import"./Collapse-CL5HS0jI.js";import"./_baseUniq-C6brxGBX.js";import"./_Uint8Array-Q8PrWGYm.js";import"./isArray-B0jnOaQA.js";import"./_getTag-DMlxnM4P.js";import"./isEqual-B1KvTqBz.js";import"./merge-BUbT27GX.js";import"./_initCloneObject-BKnpaPkf.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BbU8Qxyz.js";import"./inputBaseClasses-Cb6yvEHg.js";import"./calculateFriendlyFileSize-CqNpoUvN.js";import"./CheckCircleTwoTone-BjY5vWtN.js";import"./InfoTwoTone-zu4DaVNs.js";import"./useMutation--SOUpC1Y.js";import"./dayjs.min-1XIHbNiY.js";import"./chunk-AYJ5UCUI-DgOYknd8.js";import"./cloneDeep-CfavtHgN.js";import"./Skeleton-DfHSJENk.js";import"./SqlFunctions-DQ27hT8m.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Ds0Ndjy1.js";import"./Backdrop-v_o-1lmK.js";import"./LinearProgress-BmflieLR.js";import"./uniq-BUOJkksa.js";import"./Plot-CqOvBxX9.js";import"./index-Chjiymov.js";import"./_createAggregator-xXJ7wFum.js";import"./_baseEach-BjELJqaV.js";import"./_baseIteratee-Df1j6mta.js";import"./_baseGet-BW4WbHOY.js";import"./isSymbol-6eJ_mC2Q.js";import"./toString-DgO0u6lv.js";import"./hasIn-rzWYDzpV.js";import"./_baseOrderBy-ilFj8iMi.js";import"./_baseMap-WILWiJed.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
