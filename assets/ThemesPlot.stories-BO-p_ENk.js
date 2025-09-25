import{T as p}from"./ThemesPlot-B9IdSGGh.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-MN-D_6YK.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Dpo-4-F5.js";import"./OrientationBanner-e9CrJnDC.js";import"./index-7ZdLlOWA.js";import"./index-BgSjUAuI.js";import"./iframe-B2LJi_cW.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1t48EgC.js";import"./FullWidthAlert-h7Wmupj2.js";import"./Alert-BZ2_6v5t.js";import"./createTheme-B99gvztp.js";import"./DefaultPropsProvider-BwisLJoN.js";import"./useSlot-BoOzURrI.js";import"./useForkRef-BWEHjpp5.js";import"./createSimplePaletteValueFilter-BqHZnY8j.js";import"./createSvgIcon-C3_cIczA.js";import"./Close-CYHpGdnA.js";import"./IconButton-BzXaqEAH.js";import"./useTimeout-B9vSmm-b.js";import"./ButtonBase-C9ld3sfo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CETpK90r.js";import"./Paper-d1YgxWUg.js";import"./useTheme-Crep25JH.js";import"./useTheme-B6PPiyBh.js";import"./Stack-D3AUxOwk.js";import"./extendSxProp-BG_8YU1P.js";import"./getThemeProps-tRf3h7Hu.js";import"./Box-DFEf2Lca.js";import"./AlertTitle-DMPrYQyA.js";import"./Typography-f_AbgqFl.js";import"./index-y7GTiB0o.js";import"./ClickAwayListener-p7Foeo8l.js";import"./getReactElementRef-TAJJAPvj.js";import"./index-3jGRQJto.js";import"./index-DJx0aOeo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BMIyt8WB.js";import"./Tooltip-BHlbKeDB.js";import"./index-0KhxVFZN.js";import"./useControlled-CCREmJrl.js";import"./Popper-C-cVjFlV.js";import"./Button-i6WpB6BV.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-wFNB3FP4.js";import"./QueryClientProvider-Ck7orVaD.js";import"./Link-vTlZ9-pl.js";import"./Collapse-nircCAWM.js";import"./_baseUniq-DYuCTHDT.js";import"./_Uint8Array-JB1OFgus.js";import"./isArray-CaLyojua.js";import"./_getTag-B3_puU6c.js";import"./isEqual-CnJzKHIU.js";import"./merge-D8QSzr4_.js";import"./_initCloneObject-J-koMtFl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BQGvqggR.js";import"./inputBaseClasses-CW6CuO6Z.js";import"./calculateFriendlyFileSize-Blvrn06H.js";import"./CheckCircleTwoTone-qAglj5RI.js";import"./InfoTwoTone-CCdFqQd_.js";import"./useMutation-DlDOzlwr.js";import"./dayjs.min-fnKViZjk.js";import"./chunk-AYJ5UCUI-BIXu2e9s.js";import"./cloneDeep-BVaUE9Dw.js";import"./Skeleton-C9fzDANc.js";import"./SqlFunctions-B6aZ8mL4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CB_N-6Ri.js";import"./Backdrop-DW_hG3yE.js";import"./LinearProgress-DN8MeI3i.js";import"./uniq-B2YJetsc.js";import"./Plot-CAPme4gW.js";import"./index-Chjiymov.js";import"./_createAggregator-DeCktTNH.js";import"./_baseEach-BgiaiRli.js";import"./_baseIteratee-CR9OvwOx.js";import"./_baseGet-CcZ7SlZA.js";import"./isSymbol-BWjS2f0j.js";import"./toString-BpcfFMdu.js";import"./hasIn-Dd0GCQgn.js";import"./_baseOrderBy-BHiMG_Zq.js";import"./_baseMap-Bld0JFIm.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
