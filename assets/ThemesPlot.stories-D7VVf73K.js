import{T as p}from"./ThemesPlot-1sagrVi5.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-Dd0vPh_H.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DRPzlq-o.js";import"./OrientationBanner-CSetEjqk.js";import"./index-B0gefgMG.js";import"./index-CvyYqbbB.js";import"./iframe-B3xGRWau.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJmaa9HB.js";import"./FullWidthAlert-LRva0ICM.js";import"./Alert-UhYp6qY9.js";import"./createTheme-yhJZirTq.js";import"./DefaultPropsProvider-Dyop95cE.js";import"./useSlot-CWCXsuM6.js";import"./useForkRef-2hkVe3-e.js";import"./createSimplePaletteValueFilter-BkO8Qsnx.js";import"./createSvgIcon-B7YpWqx3.js";import"./Close-Cz4GiEbp.js";import"./IconButton-BfvyGdE-.js";import"./useTimeout-BifyLnyQ.js";import"./ButtonBase-Bd0MhjFr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BjSx0fst.js";import"./Paper-S1fvqJVW.js";import"./useTheme-EtZCDR2R.js";import"./useTheme-Ctrn4LCN.js";import"./Stack-KXRQ2qoN.js";import"./useThemeProps-CXcPGtyI.js";import"./getThemeProps-DFwGNQQM.js";import"./extendSxProp-CKP_yBEI.js";import"./Box-CDJoVLM4.js";import"./AlertTitle-CY1i-AXt.js";import"./Typography-D_4H52WI.js";import"./index-B-Pvp7yD.js";import"./ClickAwayListener-9LiC0SA2.js";import"./getReactElementRef-CNb7xhSU.js";import"./index-Br3fcRxK.js";import"./index-DDLERCEI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CS2Zqaue.js";import"./Tooltip-bjvNYtJ9.js";import"./index-iomPLjn7.js";import"./useControlled-bz51c3bn.js";import"./Popper-C8sKl6Af.js";import"./Button-BqoZyXTP.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BPHiJ7LM.js";import"./QueryClientProvider-BcAhPAdQ.js";import"./Link-CzE4P4qz.js";import"./Collapse-DTdOrPcE.js";import"./_baseUniq-DbA25ysr.js";import"./_Uint8Array-BTKm1ZQB.js";import"./isArray-DbXmnvJN.js";import"./_getTag-DrnZ3UrD.js";import"./isEqual-DUeH-zW5.js";import"./noop-DX6rZLP_.js";import"./merge-DXAGUrVQ.js";import"./_initCloneObject-Dj57jkPY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-P4NxGNb5.js";import"./inputBaseClasses-CVaOacQt.js";import"./calculateFriendlyFileSize-BnFD44D5.js";import"./CheckCircleTwoTone-Cro7lWgF.js";import"./InfoTwoTone-DYvYDf7n.js";import"./useMutation-P9l519zQ.js";import"./dayjs.min-BXio50PZ.js";import"./chunk-AYJ5UCUI-DgTRugk4.js";import"./cloneDeep-LWRqqlyp.js";import"./Skeleton-209IQpVd.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-AhSGB9PC.js";import"./Backdrop-BO7fw9rQ.js";import"./LinearProgress-DeLlPqAa.js";import"./uniq-Uey97aZM.js";import"./Plot-BZjsbuDB.js";import"./index-Chjiymov.js";import"./_createAggregator-CkSHrqDY.js";import"./_baseEach-D3VP8I-A.js";import"./_baseIteratee-CzPqP8XY.js";import"./_baseGet-BK3nM3M2.js";import"./isSymbol-Ba5_wEMY.js";import"./toString-BfO6AUjw.js";import"./hasIn-DYLgOpel.js";import"./_baseOrderBy-ogU9yTxA.js";import"./_baseMap-DpDkO45z.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
