import{T as p}from"./ThemesPlot-DQS0gbdo.js";import"./jsx-runtime-DZ2rmb3d.js";import"./index-BYKoeVFg.js";import"./iframe-CWhMQ2Vn.js";import"./useFiles-BqOHDcj-.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-FNselSPB.js";import"./OrientationBanner-_8SDrY-C.js";import"./index-BhXS2p0q.js";import"./spreadSx-CwcO6WA9.js";import"./react-ByWiYQt3.js";import"./FullWidthAlert-B851SKqI.js";import"./Alert-DV47A-h3.js";import"./createTheme-C4Y7Q1zD.js";import"./DefaultPropsProvider-qIaUDKvM.js";import"./useSlot-EpJ7FVs5.js";import"./useForkRef-DimatEEv.js";import"./createSimplePaletteValueFilter-B7Tg97IJ.js";import"./createSvgIcon-BB6CXqP0.js";import"./Close-CjU0Vxis.js";import"./IconButton-Cns99SL2.js";import"./useTimeout-CMQCF7A4.js";import"./ButtonBase-CBeCMKH-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-boL6t39h.js";import"./Paper-c3J7dilK.js";import"./useTheme-CB-K-L-k.js";import"./useTheme-CxztgSal.js";import"./Stack-DAlhJga5.js";import"./extendSxProp-Bok_DwHS.js";import"./getThemeProps-Bg6pJizB.js";import"./Box-TBi4R_tx.js";import"./AlertTitle-C-sKRdd0.js";import"./Typography-DGHoOL1s.js";import"./index-DZM-DBuH.js";import"./ClickAwayListener-RCtasomh.js";import"./getReactElementRef-CVtmtTR2.js";import"./index-C7rTPzP4.js";import"./index-DHwhTsG4.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAbDrD10.js";import"./Tooltip-ig667hYQ.js";import"./index-C6UxR57v.js";import"./useControlled-Cdgce0Fm.js";import"./Popper-CJxo7fWf.js";import"./Button-BeYUk6gb.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-B8P-H-CQ.js";import"./utils-ey8UtHD-.js";import"./Link-PEoapBOy.js";import"./Collapse-DNI6sBty.js";import"./isNil-ULxei-8y.js";import"./_Uint8Array-DPmZGDJx.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-xzhu7Y4X.js";import"./isArray-Dxzbedgu.js";import"./isEqual-CApB2fJy.js";import"./_getTag-Dt-GVugN.js";import"./tinycolor-Begke6kS.js";import"./Fade-Das0aMdZ.js";import"./inputBaseClasses-C_dxTE63.js";import"./calculateFriendlyFileSize-1jV16l2L.js";import"./CheckCircleTwoTone-CtWY67l1.js";import"./InfoTwoTone-D56-uGzp.js";import"./useMutation-DWWbLcgX.js";import"./dayjs.min-B3bp7WM9.js";import"./chunk-AYJ5UCUI-MFOh-52S.js";import"./cloneDeep-BMtsrdwr.js";import"./_initCloneObject-DPJUVdV7.js";import"./Skeleton-DA9Z_fDE.js";import"./merge-Browa7qW.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-FkxF08bF.js";import"./Backdrop-AlXbr9ha.js";import"./LinearProgress-DcZXwago.js";import"./uniq-dGfHutBd.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-BGX3o1Vp.js";import"./index-Chjiymov.js";import"./_createAggregator-DGDH2tQT.js";import"./_baseEach-DxTO84pO.js";import"./_baseIteratee-cI4LUY3W.js";import"./_baseGet-B2NqCK9b.js";import"./isSymbol-DKOvSa_O.js";import"./toString-IF5HzHVc.js";import"./hasIn-Cpw3BNqH.js";import"./_baseOrderBy-DuxpxnU-.js";import"./_baseMap-CLss97Vb.js";import"./head-aneRfQQJ.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Ro=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Ro as __namedExportsOrder,Qo as default};
