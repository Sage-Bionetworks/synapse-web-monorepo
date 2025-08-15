import{T as p}from"./ThemesPlot-Csx3s1t3.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-D7R6W0Po.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BF-cq9I-.js";import"./OrientationBanner-BPE7jN4H.js";import"./index-DRmLmgSG.js";import"./index-BUsvr3pR.js";import"./iframe-BOf6LPjK.js";import"./spreadSx-CwcO6WA9.js";import"./react-CqXSjSjN.js";import"./FullWidthAlert-CyxVaTo-.js";import"./Alert-Bk5JlffV.js";import"./createTheme-UonGQGw4.js";import"./DefaultPropsProvider-Df1PfarS.js";import"./useSlot-wrl7o3Ug.js";import"./useForkRef-CRv5njRE.js";import"./createSimplePaletteValueFilter-CJ-IbVpc.js";import"./createSvgIcon-DKQD7mOV.js";import"./Close-CeUTRSXW.js";import"./IconButton-BLusjQnA.js";import"./useTimeout-BMsv0ZJ3.js";import"./ButtonBase-On86KBDi.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BCAN28JR.js";import"./Paper-WLG-MfiP.js";import"./useTheme-B7irvlgN.js";import"./useTheme-Cf0y_-BP.js";import"./Stack-Be1fl8B2.js";import"./extendSxProp-6X8i3Ual.js";import"./getThemeProps-CiHhwHIs.js";import"./Box-CjXe8gIr.js";import"./AlertTitle-D0l0ox_T.js";import"./Typography-CBmUgXmK.js";import"./index-knRHlM1X.js";import"./ClickAwayListener-CenNq_25.js";import"./getReactElementRef-CRfSQGz0.js";import"./index-Bv-8_qSa.js";import"./index-BJ97qXsD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BCPuHGGV.js";import"./Tooltip-yDHB8MiT.js";import"./index-CjNVpIRd.js";import"./useControlled-DeIG_K28.js";import"./Popper-Dpckc59n.js";import"./Button-CkV_4l2j.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BzsoOeu3.js";import"./QueryClientProvider-B1Ol8Yry.js";import"./Link-Bfy-wYj9.js";import"./Collapse-B5BlCAjr.js";import"./_baseUniq-jQ8xeg2H.js";import"./_Uint8Array-XpvvWAw1.js";import"./isArray-7pzLm2zZ.js";import"./_getTag-C6gRbf3L.js";import"./isEqual-D7UROsmS.js";import"./merge-DK1gT9qk.js";import"./_initCloneObject-DK2bw49X.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-fuokgPOZ.js";import"./inputBaseClasses-C7UFnbtn.js";import"./calculateFriendlyFileSize-Do506Vrw.js";import"./CheckCircleTwoTone-CnMK8m3r.js";import"./InfoTwoTone-UlfRuzPu.js";import"./useMutation-CcZ13Imf.js";import"./dayjs.min-DIAzs0dw.js";import"./chunk-AYJ5UCUI-D_jbnITc.js";import"./cloneDeep-Czp6lS9T.js";import"./Skeleton-Bvxz5ehu.js";import"./SqlFunctions-C8HqQ3uk.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-xJOBv8J4.js";import"./Backdrop-5FmwRqGl.js";import"./LinearProgress-CvALm9xa.js";import"./uniq-DKnxgQ9k.js";import"./Plot-XW__36BC.js";import"./index-Chjiymov.js";import"./_createAggregator-CRvDLztG.js";import"./_baseEach-5o10LiCe.js";import"./_baseIteratee-Q3OyzMG9.js";import"./_baseGet-BMHlBsUf.js";import"./isSymbol-DfQVpcSz.js";import"./toString-DprhbMhn.js";import"./hasIn-BSaN9V6j.js";import"./_baseOrderBy-4euMLpdA.js";import"./_baseMap-FVHb3Mkz.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
