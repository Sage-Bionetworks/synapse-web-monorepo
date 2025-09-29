import{T as p}from"./ThemesPlot-CU_27g5M.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DM8ODnE1.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BhK8041S.js";import"./OrientationBanner-CZLIqqQW.js";import"./index-CXGD1nhD.js";import"./index-BloLEAy1.js";import"./iframe-CKfgUuPM.js";import"./spreadSx-CwcO6WA9.js";import"./react-BruRYVnC.js";import"./FullWidthAlert-PH21VpMl.js";import"./Alert-CVuydjvy.js";import"./createTheme-CZav1_Gb.js";import"./DefaultPropsProvider-Cc2WXfIy.js";import"./useSlot-7ZCLd36S.js";import"./useForkRef-Cb6JBq-d.js";import"./createSimplePaletteValueFilter-eby9pYbG.js";import"./createSvgIcon-pEoAHn1W.js";import"./Close-vzj9hjx-.js";import"./IconButton-DcP9VhRe.js";import"./useTimeout-sp5LbUOC.js";import"./ButtonBase-i9yFzP5m.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BDbmFF2h.js";import"./Paper-CIe6YCK_.js";import"./useTheme-BB7mkDQM.js";import"./useTheme-sze_bRIR.js";import"./Stack-S_1S8qQR.js";import"./extendSxProp-C1UJW0LD.js";import"./getThemeProps-y8DddFS4.js";import"./Box-B2NAFohM.js";import"./AlertTitle-J1r0sIO1.js";import"./Typography-DAbfgqiK.js";import"./index-BU6WjtVn.js";import"./ClickAwayListener-xpLIiVXr.js";import"./getReactElementRef-91ouRfnc.js";import"./index-CVk8f9Z0.js";import"./index-KlmJpNBV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Btkl0dwb.js";import"./Tooltip-LLJF2Sui.js";import"./index-CaphlovL.js";import"./useControlled-eGHYQS1z.js";import"./Popper-CCeV26oI.js";import"./Button-CMHi5O9T.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-A2nSLqYV.js";import"./QueryClientProvider-B-jv1tS7.js";import"./Link-t6I2sdQ7.js";import"./Collapse-DN8doD0U.js";import"./_baseUniq-BVIKsDod.js";import"./_Uint8Array-DaYXT6X2.js";import"./isArray-C0axBQbV.js";import"./_getTag-BL3im_fO.js";import"./isEqual-BS3sRW2T.js";import"./merge-B5cZnhNH.js";import"./_initCloneObject-IUGla6cP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BOoRDzga.js";import"./inputBaseClasses-XK2vZhF1.js";import"./calculateFriendlyFileSize-Cm0JtIBR.js";import"./CheckCircleTwoTone-DrxZDCjx.js";import"./InfoTwoTone-DirFePmA.js";import"./useMutation-imcDv-vJ.js";import"./dayjs.min-BQ6mRLia.js";import"./chunk-AYJ5UCUI-CjQA8okQ.js";import"./cloneDeep-CaO4d-Vx.js";import"./Skeleton-DJX65kDG.js";import"./SqlFunctions-B6aZ8mL4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DhhR39Bw.js";import"./Backdrop-HeEcc-yi.js";import"./LinearProgress-BHY4yjRF.js";import"./uniq-ZYScFyhI.js";import"./Plot-DzbV_cvi.js";import"./index-Chjiymov.js";import"./_createAggregator-BBeotYcm.js";import"./_baseEach-r8Hd60L8.js";import"./_baseIteratee-CqUxvTDB.js";import"./_baseGet-BUhRBk1V.js";import"./isSymbol-CLxX1gXb.js";import"./toString-DVQmHkRT.js";import"./hasIn-DiF7Iu9i.js";import"./_baseOrderBy-Bne3ChXn.js";import"./_baseMap-CnzJksMx.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
