import{T as p}from"./ThemesPlot-D_T5qRZz.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./ElementWithTooltip-4Nmao-7C.js";import"./SynapseTableConstants-2qH3fDlQ.js";import"./IconSvg-Ba4yGxCp.js";import"./createSvgIcon-BhV3a4Zr.js";import"./createTheme-CWLQ-DuD.js";import"./index-GEGPABih.js";import"./styled-BNZh1-oq.js";import"./Tooltip-Bt6FmARF.js";import"./index-fnC48NPc.js";import"./utils-C9mnvDyn.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useForkRef-Bm_QQ74L.js";import"./index-BlO3JfGB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BHNGh791.js";import"./mergeSlotProps-CZobtCgD.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./LayersTwoTone-BdLgRYRO.js";import"./ErrorOutlined-T6sjfcxT.js";import"./GetAppTwoTone-mQ-VL1kM.js";import"./InfoOutlined-DlYufPXz.js";import"./DeleteTwoTone-Dev5FGll.js";import"./CheckCircleTwoTone-JZD1d26p.js";import"./RegularExpressions-B4RNwTAQ.js";import"./index-BNbykmw2.js";import"./Icon-eqwDCyes.js";import"./SynapseConstants-DrG3aQYy.js";import"./OrientationBanner-Dw8hNLuQ.js";import"./FullWidthAlert-D4QbP6vY.js";import"./Alert-D00uobdd.js";import"./Paper-CK0RlmZk.js";import"./IconButton-DDEa3AGu.js";import"./ButtonBase-CE85FUiZ.js";import"./Stack-Dwyinhto.js";import"./Box-D4TeY3X6.js";import"./AlertTitle-CVJKKi4h.js";import"./Typography-CaL9sKMg.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./Button-CnDFdqMc.js";import"./ShowMore-D9tD7OdY.js";import"./Dropdown-bnzd1VoU.js";import"./ThemeProvider-BS-PCUTx.js";import"./index-SDyqs4cU.js";import"./hasClass-D5ZjVvBY.js";import"./createWithBsPrefix-B-Bo-ltc.js";import"./useFiles-C_YzLjAf.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Dmc1pswj.js";import"./calculateFriendlyFileSize-bs8jrqL8.js";import"./Skeleton-D27KV3ni.js";import"./inputBaseClasses-u371dScS.js";import"./Fade-DjpTbL11.js";import"./Link-B86BngSw.js";import"./cloneDeep-DY69WO0s.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-lZs4Nsmk.js";import"./dayjs.min-D1RcYm3-.js";import"./tiny-invariant-CopsF_GD.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C8Jmet2C.js";import"./factory-DQ_FQLjW.js";import"./sortBy-Cp5liRSr.js";import"./_baseFlatten-C2dlnUVM.js";import"./isSymbol-BzKS7Qf1.js";import"./toString-CYyvKWOl.js";import"./_baseIteratee-CL_yTmh7.js";import"./hasIn-DgcXt0Sl.js";import"./omit-ql-K3sNW.js";import"./_baseSlice-F8doVSIJ.js";import"./noop-DX6rZLP_.js";import"./without-Drk8qmWV.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./omitBy-UzjbPRFp.js";import"./toInteger-czOlq-ma.js";import"./pick-BdB_cRa9.js";import"./times-Bw9geEsI.js";import"./uniqueId-CSw6ftlJ.js";import"./isNumber-BM-UBS4N.js";import"./uniq-BJ51s-2x.js";import"./LoadingScreen-ChQAEbd0.js";import"./Backdrop-D_3O0Mkt.js";import"./LinearProgress-3w3Lw59m.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
