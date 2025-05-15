import{T as p}from"./ThemesPlot-BPW-hd47.js";import"./jsx-runtime-BKf5RQqp.js";import"./index-B9M1VMdY.js";import"./iframe-DrxrBbCN.js";import"./useFiles-S3rZyFqo.js";import"./VerificationSubmission-dxY1kvC5.js";import"./SynapseConstants-DOl4aYU7.js";import"./OrientationBanner-Cgb7NpTp.js";import"./index-CvaCOTZN.js";import"./spreadSx-CwcO6WA9.js";import"./react-DH013oxs.js";import"./FullWidthAlert-Dd_na1Es.js";import"./Alert-Cgxhkh7G.js";import"./createTheme-DvTVIqjb.js";import"./resolveComponentProps-DPQntKSC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DIg_dHQL.js";import"./createSvgIcon-hbT_i5o6.js";import"./DefaultPropsProvider-n162cE-R.js";import"./Close-BfHkgXih.js";import"./IconButton-CUjwcRMT.js";import"./ButtonBase-CBwCYDGT.js";import"./useTimeout-zL07Ezm-.js";import"./TransitionGroupContext-DyKzf55a.js";import"./useIsFocusVisible-CRgE5DAe.js";import"./useEventCallback-Ct97vZo3.js";import"./Paper-DiRfE40y.js";import"./Stack-D2Q57en8.js";import"./getThemeProps-CnIOYt9Y.js";import"./useTheme-Bekjdflv.js";import"./Box-D7zKVt5d.js";import"./AlertTitle-1sffTsZH.js";import"./Typography-DzBHpQw1.js";import"./useTheme-CEZhMqZD.js";import"./Grow-BaIE4F4U.js";import"./index-5WQ-QQb9.js";import"./utils-Bc1CwYEB.js";import"./ClickAwayListener-CxOU0Mam.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BEF1_Vht.js";import"./index-P0g_OErs.js";import"./useControlled-Cy6R5uHn.js";import"./useId-DqRnOE6C.js";import"./Popper-BbC7HGmV.js";import"./Button-Cb0Y6AbC.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-Cxycb3jH.js";import"./utils-DtsR_yTk.js";import"./Link-Cu43YTgh.js";import"./Collapse-DVsMgavj.js";import"./isNil-ByvPwQOL.js";import"./_Uint8Array-C3OS79Gb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-loWZaajr.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-gfmG73DD.js";import"./_getTag-Bc2H9Xcc.js";import"./tinycolor-Begke6kS.js";import"./Fade-BJV6ivWB.js";import"./Skeleton-DpQMO-g4.js";import"./inputBaseClasses-D3AwDbQD.js";import"./calculateFriendlyFileSize-C7irlqqb.js";import"./CheckCircleTwoTone-BX_oHHcp.js";import"./InfoTwoTone-DlYvTuQN.js";import"./mutation-CTQh6bQy.js";import"./dayjs.min-CodsgMmV.js";import"./chunk-AYJ5UCUI-BC-6-RBu.js";import"./cloneDeep-DLtL0oYk.js";import"./_initCloneObject-BGcQbDnl.js";import"./isEqual-p7X2E0s9.js";import"./merge-BNCYZUK1.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-BxcEiHsR.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CTk1WslI.js";import"./Backdrop-CXPR0K03.js";import"./LinearProgress-Cd5UkKse.js";import"./noop-DX6rZLP_.js";import"./uniq-BN2uj30e.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-hbGQR-eO.js";import"./index-BkoAkQdg.js";import"./_createAggregator-7ahmVc-9.js";import"./_baseEach-Dm5sns5G.js";import"./_baseIteratee-f2seXA4s.js";import"./_baseGet-Ce3QHtAa.js";import"./isSymbol-C3DlElTY.js";import"./toString-DzAm8fGd.js";import"./hasIn-CXnPieNN.js";import"./_baseOrderBy-o8xzP4VG.js";import"./_baseMap-pCWTT1Ph.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
