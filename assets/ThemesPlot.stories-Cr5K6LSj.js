import{T as p}from"./ThemesPlot-BrgCWIbf.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DB0e0hPr.js";import"./VerificationSubmission-CeTJ0zsJ.js";import"./SynapseConstants-CkDDb4nX.js";import"./OrientationBanner-B9qwIkMf.js";import"./index-BqFegMld.js";import"./index-B9OyQX1A.js";import"./iframe-BP07wQTd.js";import"./spreadSx-CwcO6WA9.js";import"./react-sEPuFSBp.js";import"./FullWidthAlert-OAdAocG4.js";import"./Alert-CULkja03.js";import"./createTheme-CInhu1jk.js";import"./DefaultPropsProvider-CeF2hwve.js";import"./useSlot-BHxKxjwn.js";import"./useForkRef-pLKXAdEO.js";import"./createSimplePaletteValueFilter-DDD03rs-.js";import"./createSvgIcon-qvaYmqZl.js";import"./Close-tKgndRYU.js";import"./IconButton-CSnfzuaL.js";import"./useTimeout-o50hQisp.js";import"./ButtonBase-C_jXD34S.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-bun6EuGk.js";import"./Paper-M2B7o7bl.js";import"./useTheme-B2RdUQoD.js";import"./useTheme-CTj6XPaI.js";import"./Stack-h7MpaAG4.js";import"./extendSxProp-B-dbdkUC.js";import"./getThemeProps-Bf9O57Lq.js";import"./Box-Rvhx3he2.js";import"./AlertTitle-CM4Zufgn.js";import"./Typography-8PbpLowS.js";import"./index-PUfiHWKW.js";import"./ClickAwayListener-CKCTU7Hr.js";import"./getReactElementRef-CBjh8eNi.js";import"./index-HQ1M5axI.js";import"./index-BfGC-F9L.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B6mZ4tx-.js";import"./Tooltip-DML62oGu.js";import"./index-CIP6CSIB.js";import"./useControlled-CbbNDYpt.js";import"./Popper-B4buaPr2.js";import"./Button-CHa3icr7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Cb5gkxAY.js";import"./useQuery-CTnkseG7.js";import"./QueryClientProvider-ERQKxfhR.js";import"./Link-CEagi7As.js";import"./Collapse-DUIYxFRt.js";import"./_baseUniq-To6IgKKu.js";import"./_Uint8Array-CFpIIXDl.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CpneB495.js";import"./isArray-Dxzbedgu.js";import"./_getTag-K_H0Alg4.js";import"./isEqual-BtbKiwVM.js";import"./merge-CqU8LKYn.js";import"./_initCloneObject-r3Ku30rA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-R-BmApSw.js";import"./inputBaseClasses-B2yUi8zg.js";import"./calculateFriendlyFileSize-0sPzrG8j.js";import"./CheckCircleTwoTone-GSVLRlFB.js";import"./InfoTwoTone-DWDlvgmG.js";import"./useMutation-7S_5iV1F.js";import"./dayjs.min-CwPglUFt.js";import"./chunk-AYJ5UCUI-dLqhGQtZ.js";import"./cloneDeep-YzygmnfS.js";import"./Skeleton-BFGVvZk1.js";import"./SqlFunctions-CBeb21zR.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Czm1aS1o.js";import"./Backdrop-CqogE-J6.js";import"./LinearProgress-D8_kFsr-.js";import"./uniq-CrQWmm8s.js";import"./Plot-BwG48gz2.js";import"./index-Chjiymov.js";import"./_createAggregator-YBuLd7fS.js";import"./_baseEach-6DEcWlKt.js";import"./_baseIteratee-B-MaHveS.js";import"./_baseGet-BTI30qo5.js";import"./isSymbol-B9s30Dkt.js";import"./toString-bh2lwzql.js";import"./hasIn-CLiIIY_7.js";import"./_baseOrderBy-Dxjwdk-f.js";import"./_baseMap-DwQ0CzkF.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
