import{T as p}from"./ThemesPlot-BbD3ESe4.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-Ct8_vfg_.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-D02poIxn.js";import"./OrientationBanner-8dxpFSGF.js";import"./index-BMcX8guG.js";import"./index-B_MBuESX.js";import"./iframe-DTzVO3E0.js";import"./spreadSx-CwcO6WA9.js";import"./react-CVVq801I.js";import"./FullWidthAlert-DZnHLtXj.js";import"./Alert-D8RmKWMH.js";import"./createTheme-cPwV87XV.js";import"./DefaultPropsProvider-Le_Qtgl5.js";import"./useSlot-BFhp29pE.js";import"./useForkRef-DmVCh7BX.js";import"./createSimplePaletteValueFilter-DKCtxExo.js";import"./createSvgIcon-gtrcrQsr.js";import"./Close-DzAUUUKb.js";import"./IconButton-BTvxuh8j.js";import"./useTimeout-B9lAiuJj.js";import"./ButtonBase-BOfe2YeE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-TnmE2Gjl.js";import"./Paper-DdmZXCKA.js";import"./useTheme-C15ihBa6.js";import"./useTheme-D3k6CfVy.js";import"./Stack-CC6q0G0O.js";import"./extendSxProp-Bqx6A1Vk.js";import"./getThemeProps-akle9_rg.js";import"./Box-wHNIJtBr.js";import"./AlertTitle-DHKPTzag.js";import"./Typography-D7li2wjp.js";import"./index-38b-zSqt.js";import"./ClickAwayListener-BhdzrT8s.js";import"./getReactElementRef-BZxyEit6.js";import"./index-B3f7xuDx.js";import"./index-DarjTX3K.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DS2ARWWQ.js";import"./Tooltip-CsOwgxhh.js";import"./index-BSvLcxsL.js";import"./useControlled-CKz5Eg6L.js";import"./Popper-B8JnDrpX.js";import"./Button-CQNncsmG.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-D6JGZGwF.js";import"./QueryClientProvider-B3Pa2a4T.js";import"./Link-CjowCLw6.js";import"./Collapse-BO8S6Cg-.js";import"./_baseUniq-Cjyl1iP4.js";import"./_Uint8Array-BJ1AoE8R.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Bt4UmfJk.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CjB7XFbx.js";import"./isEqual-BNk9uLic.js";import"./merge-DsvdXHA5.js";import"./_initCloneObject-C56K81oH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DFC2hxCS.js";import"./inputBaseClasses-BOsEEz2q.js";import"./calculateFriendlyFileSize-eWc8C6fj.js";import"./CheckCircleTwoTone-mBvHCTxv.js";import"./InfoTwoTone-BOIM7qS5.js";import"./useMutation-CwPeYIxF.js";import"./dayjs.min-C6R6WyUS.js";import"./chunk-AYJ5UCUI-B_FJVpwI.js";import"./cloneDeep-D_RINFFR.js";import"./Skeleton-D-EvYe3s.js";import"./SqlFunctions-c3WXx9n7.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-g35PZTj8.js";import"./Backdrop-DrPnrKR_.js";import"./LinearProgress-BEQlvGyr.js";import"./uniq-D2cKtu_L.js";import"./Plot-9rNog-wg.js";import"./index-Chjiymov.js";import"./_createAggregator-7tAC2jeV.js";import"./_baseEach-B0Lj7ut5.js";import"./_baseIteratee-B_UWRm4M.js";import"./_baseGet-CFxRTi4z.js";import"./isSymbol-B6wS_46q.js";import"./toString-BvK1jAKF.js";import"./hasIn-DbelYhMM.js";import"./_baseOrderBy-De2fyV_w.js";import"./_baseMap-DVgj3uwa.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
