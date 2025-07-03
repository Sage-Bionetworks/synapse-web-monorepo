import{T as p}from"./ThemesPlot-CX4cwWTl.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BZn2zwij.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CZppcqKY.js";import"./OrientationBanner-2w8GnB88.js";import"./index-BFLTeMN7.js";import"./index-RrA2ZeU8.js";import"./iframe-Cl7yHxey.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dnp_5-VT.js";import"./FullWidthAlert-D-7kzovJ.js";import"./Alert-HXCm2ukD.js";import"./createTheme-BL3Erky_.js";import"./DefaultPropsProvider-COwJEhlj.js";import"./useSlot-DPCj5w37.js";import"./useForkRef-7FksC7Wk.js";import"./createSimplePaletteValueFilter-BTUUkyHX.js";import"./createSvgIcon-bnX5AEip.js";import"./Close-DM2leFU3.js";import"./IconButton-S1pQl1Qb.js";import"./useTimeout-DGdq9XXh.js";import"./ButtonBase-DZeD6OmU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-JqIc0wtk.js";import"./Paper-DiNvo0OR.js";import"./useTheme-Ct7FFNBK.js";import"./useTheme-99fH-d8E.js";import"./Stack-r6VQu8BX.js";import"./extendSxProp-C9QzDRlU.js";import"./getThemeProps-BILLkI9C.js";import"./Box-C4n8VpXx.js";import"./AlertTitle-DX3Er_xV.js";import"./Typography-C3KVIo5J.js";import"./index-CeXYih2O.js";import"./ClickAwayListener-0-8j9UKu.js";import"./getReactElementRef-C_WWxu9h.js";import"./index-Bsynu-fh.js";import"./index--rNMgt8r.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BjkRkIh9.js";import"./Tooltip-QNoITWuX.js";import"./index-u7SOeJ0n.js";import"./useControlled-D-DOyfjM.js";import"./Popper-D2G1xZsN.js";import"./Button-BEEyN1i5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-vKaTDWF8.js";import"./QueryClientProvider-DKALCs-s.js";import"./Link-DWy4Krdn.js";import"./Collapse-Dn5clTlB.js";import"./_baseUniq-DHWoN2oF.js";import"./_Uint8Array-Bhyyg1TJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-UDjeZMJA.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Cpn6i2oH.js";import"./isEqual-D_YUXdZO.js";import"./merge-D_xgEugG.js";import"./_initCloneObject-VZ4ZIpDG.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DvuAdk7a.js";import"./inputBaseClasses-9iEejl7P.js";import"./calculateFriendlyFileSize-Bj-tb9VL.js";import"./CheckCircleTwoTone-C2zsmKmG.js";import"./InfoTwoTone-Dj4324tE.js";import"./useMutation-Zc9HGuUS.js";import"./dayjs.min-y9IVFdO2.js";import"./chunk-AYJ5UCUI-CsQTRQBd.js";import"./cloneDeep-ClT3OHhm.js";import"./Skeleton-CAuWZ4Jn.js";import"./SqlFunctions-c3WXx9n7.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BAgt_JiS.js";import"./Backdrop-DZGa36zi.js";import"./LinearProgress-DqEEFlzY.js";import"./uniq-DO6Fz_KV.js";import"./Plot--zIc9eTn.js";import"./index-Chjiymov.js";import"./_createAggregator-Dq2tvGlH.js";import"./_baseEach-lwbTZjZm.js";import"./_baseIteratee-COvraWB3.js";import"./_baseGet-Dy9MzlZE.js";import"./isSymbol-YTM7rOnd.js";import"./toString-CqfWIDWC.js";import"./hasIn-Db6ckuxf.js";import"./_baseOrderBy-C3zkqeD8.js";import"./_baseMap-CryJk5hJ.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
