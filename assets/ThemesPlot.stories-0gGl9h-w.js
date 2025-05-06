import{T as p}from"./ThemesPlot-6uDZf74A.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-Cul21QaF.js";import"./VerificationSubmission-CX6Xq4We.js";import"./SynapseConstants-Ch8mxy-k.js";import"./OrientationBanner-6c7QOLx_.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbO-K0JG.js";import"./FullWidthAlert-CgFm9dfg.js";import"./Alert-BoiUXBFA.js";import"./createTheme-BoQYKx5k.js";import"./index-GEGPABih.js";import"./styled-BMGIoXl7.js";import"./mergeSlotProps-D_dLvIWz.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BDoLG09A.js";import"./createSvgIcon-DrH8-ApS.js";import"./Close-N0BBw2gu.js";import"./Paper-B6Fumrsg.js";import"./IconButton-QXhlbi2Z.js";import"./ButtonBase-CTLL4EY5.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./Stack-BcBUfnl7.js";import"./Box-T6r2Z_yt.js";import"./AlertTitle-DrSQ0G21.js";import"./Typography-D3xYwoES.js";import"./useTheme-B4ZZkoF-.js";import"./Grow-BcJKh-mH.js";import"./index-BIzb42Jq.js";import"./utils-D16j0ClI.js";import"./ClickAwayListener-DMjw0JVT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CIKCv17A.js";import"./index-DRltcjjn.js";import"./Popper-YUaVwGty.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-CgNBwHku.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-DrtZBNIY.js";import"./useQuery-DFbKL1Tm.js";import"./utils-DPkdG3Lw.js";import"./Link-C37sfSRl.js";import"./Collapse-BRq1pUbz.js";import"./isNil-CXnMBT_8.js";import"./_Uint8Array-BO3mj8J_.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DEUJ7S9e.js";import"./_getTag-DiBG4-8j.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Cn0cOZ_j.js";import"./CheckCircleTwoTone-BxJ-qX7O.js";import"./calculateFriendlyFileSize-C4KOtplu.js";import"./Skeleton-DwKQ5_E5.js";import"./inputBaseClasses-B4urITub.js";import"./Fade-TcPvrVoT.js";import"./mutation-SJTTtyND.js";import"./dayjs.min-d18Up55D.js";import"./chunk-AYJ5UCUI-Ck5uCIR5.js";import"./cloneDeep-BRq0JbUP.js";import"./_initCloneObject-CAXIH7ge.js";import"./isEqual-X7sPOZRU.js";import"./merge-DlorMX21.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BfgxHr4o.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DDFyM1wL.js";import"./Backdrop-hdxvmsxB.js";import"./LinearProgress-D0wd9w7m.js";import"./noop-DX6rZLP_.js";import"./uniq-CR8ETRlJ.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-DNxdh6B0.js";import"./iframe-BBMUucRn.js";import"../sb-preview/runtime.js";import"./index-BfyspvgH.js";import"./_createAggregator-CNBaDvrD.js";import"./_baseEach-Cmbj1qWx.js";import"./_baseIteratee-sKywos5T.js";import"./_baseGet-DXgeAM57.js";import"./isSymbol-VqtJwUUo.js";import"./toString-C-tSuG3i.js";import"./hasIn-hsPgZUEM.js";import"./_baseOrderBy-6DGfd_LX.js";import"./_baseMap-8xs5hCYL.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
