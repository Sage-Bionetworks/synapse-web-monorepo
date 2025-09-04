import{T as p}from"./ThemesPlot-Dw-h7_WP.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-CzKjjYtp.js";import"./VerificationSubmission-D0sL2gwz.js";import"./SynapseConstants-DhETcuUG.js";import"./OrientationBanner-BO2Urp1Z.js";import"./index-DmNLJKNh.js";import"./index-D4HCKe9w.js";import"./iframe-DmVsNHze.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cf5Ec-mS.js";import"./FullWidthAlert-DTnEraAC.js";import"./Alert-DZeS4a6d.js";import"./createTheme-DDjBIDwT.js";import"./DefaultPropsProvider-ZG31g4it.js";import"./useSlot-B6tvNwBv.js";import"./useForkRef-CtbIu23o.js";import"./createSimplePaletteValueFilter-BfnPoD90.js";import"./createSvgIcon-KWX4yQl-.js";import"./Close-BXYzJc-1.js";import"./IconButton-C_01hWEL.js";import"./useTimeout-B3vqbFY1.js";import"./ButtonBase-5xAiWb9k.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClcLOpgT.js";import"./Paper-D9hajRDM.js";import"./useTheme-CMCRSdXO.js";import"./useTheme-B-XUUHR4.js";import"./Stack-pvEbUifr.js";import"./extendSxProp-BRR-amD5.js";import"./getThemeProps-vcNQnBjM.js";import"./Box-CnC4K3Hl.js";import"./AlertTitle-B8t1dWfY.js";import"./Typography-COIcc1hS.js";import"./index-Dv8t99-T.js";import"./ClickAwayListener-DTjm8Qvd.js";import"./getReactElementRef-Cq2rgrLM.js";import"./index-CDdDji97.js";import"./index-ij53IW3H.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAl4bw2D.js";import"./Tooltip-BiehG5fl.js";import"./index-Cr6df_e3.js";import"./useControlled-CG4yijLR.js";import"./Popper-D6_eAqlt.js";import"./Button-B4c76i7l.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-c65xEHlU.js";import"./QueryClientProvider-C2sJR7rF.js";import"./Link-D-8puque.js";import"./Collapse-TlU8ywi5.js";import"./_baseUniq-BWQ-3uky.js";import"./_Uint8Array-v1dD2eCV.js";import"./isArray-DGXFKXW_.js";import"./_getTag-nqsjAOYQ.js";import"./isEqual-CR012Pz3.js";import"./merge-h4l3whDn.js";import"./_initCloneObject-DBdarpnq.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CQjdMO4r.js";import"./inputBaseClasses-ByCdm5ps.js";import"./calculateFriendlyFileSize-DXggbpxX.js";import"./CheckCircleTwoTone-BcVs8xEZ.js";import"./InfoTwoTone-QwWHAuS5.js";import"./useMutation-Ddf_PzNC.js";import"./dayjs.min-CwuDG8BM.js";import"./chunk-AYJ5UCUI-CwOFpPmP.js";import"./cloneDeep-ChqpFpcu.js";import"./Skeleton-BWhOU1Pc.js";import"./SqlFunctions-D9jcfCB0.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Ca8yOGnX.js";import"./Backdrop-tURbt0Eh.js";import"./LinearProgress-CASe0_Fr.js";import"./uniq-BxWoIp7K.js";import"./Plot-C6OdfDlp.js";import"./index-Chjiymov.js";import"./_createAggregator-B_dakBZu.js";import"./_baseEach-BZz0Ocrf.js";import"./_baseIteratee-B8atVDD0.js";import"./_baseGet-CkUVRVIz.js";import"./isSymbol-C0RTHsY7.js";import"./toString-D5g_QE-Z.js";import"./hasIn-B7XKmHtg.js";import"./_baseOrderBy-ttENU6vU.js";import"./_baseMap-BVCkmfj3.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
