import{T as p}from"./ThemesPlot-BPcO-Htw.js";import"./jsx-runtime-pz7QQOmo.js";import"./index-BkKaf4Ho.js";import"./iframe-N1NjX4sZ.js";import"./useFiles-BWuLPj2y.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-DqbwpJte.js";import"./OrientationBanner-DLGwKdIZ.js";import"./index-3beyqzOm.js";import"./spreadSx-CwcO6WA9.js";import"./react-C3MJ79ut.js";import"./FullWidthAlert-FMrKqPy0.js";import"./Alert-DZ1-YJ5J.js";import"./createTheme-DuUL91l1.js";import"./DefaultPropsProvider-C6A-qVkx.js";import"./useSlot-CseuYiCV.js";import"./useForkRef-eaA_P2jt.js";import"./createSimplePaletteValueFilter-CkIxcuNr.js";import"./createSvgIcon-CKu4rHpW.js";import"./Close-DeVmZdlb.js";import"./IconButton-jzK83RDC.js";import"./useTimeout-BnD3DM9b.js";import"./ButtonBase-DWWY2pSR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D_SqX67-.js";import"./Paper-LNXwjcQq.js";import"./useTheme-BDljqhle.js";import"./useTheme-imrqGidV.js";import"./Stack-BBjhye3J.js";import"./extendSxProp-CHVZ7BAY.js";import"./getThemeProps-Co--yioZ.js";import"./Box-6XLjaT8E.js";import"./AlertTitle-DFP-OzT0.js";import"./Typography-BpEg9lnQ.js";import"./index-Dq4jw88k.js";import"./ClickAwayListener-B1qmSzfh.js";import"./getReactElementRef-D4-PQAOY.js";import"./index-BgycnQqH.js";import"./index-BP3TMka1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D5vDP2u6.js";import"./Tooltip-WBrotzIj.js";import"./index-ClAHp6dc.js";import"./useControlled-DTMPcRAW.js";import"./Popper-CkYnXUnB.js";import"./Button-Qd13FJKn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-RMpGeomP.js";import"./utils-BWibdo-S.js";import"./Link-xhuw0OcQ.js";import"./Collapse-B1KAEHuI.js";import"./_baseUniq-BLvPIbux.js";import"./_Uint8Array-7x4Mh3s-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BuDkcWZ-.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DxNqHPDO.js";import"./isEqual-G1MPuDt_.js";import"./merge-CQYn9gHb.js";import"./_initCloneObject-y7vXpgAY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-wXtwH8d6.js";import"./inputBaseClasses-BeK6_XdW.js";import"./calculateFriendlyFileSize-BXRB4AoI.js";import"./CheckCircleTwoTone-C1MTqsoH.js";import"./InfoTwoTone-HVwsLyYe.js";import"./useMutation-D2BXtkSL.js";import"./dayjs.min-Z4mswLOl.js";import"./chunk-AYJ5UCUI-DhqXvRZD.js";import"./cloneDeep-DFx8R1y8.js";import"./Skeleton-BYFliYg3.js";import"./SqlFunctions-DPgti-mT.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CRCzuAqQ.js";import"./Backdrop-DPNhB6De.js";import"./LinearProgress-BJ_yftNy.js";import"./uniq-BxGUvhAJ.js";import"./Plot-tpJvPZV1.js";import"./index-Chjiymov.js";import"./_createAggregator-BkzYfbpe.js";import"./_baseEach-B56njgcQ.js";import"./_baseIteratee-CFstaHHa.js";import"./_baseGet-DVy17Hl8.js";import"./isSymbol-C7byGtnP.js";import"./toString-BSAfEQtx.js";import"./hasIn-D7zJYzMR.js";import"./_baseOrderBy-BxRYNIUw.js";import"./_baseMap-Cs9RBMsz.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
