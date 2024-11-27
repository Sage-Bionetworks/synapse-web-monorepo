import{T as p}from"./ThemesPlot-Br1xh4C0.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./ElementWithTooltip-DA1_UJMP.js";import"./SynapseTableConstants-2qH3fDlQ.js";import"./IconSvg-Cuunsa97.js";import"./createSvgIcon-L3-Z4vl2.js";import"./createTheme-BDTvfUpa.js";import"./index-GEGPABih.js";import"./extends-CF3RwP-h.js";import"./styled-DuixqW8V.js";import"./Tooltip-Cao-5103.js";import"./index-Ch2PWkM5.js";import"./utils-BfTmAAcW.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useForkRef-Bm_QQ74L.js";import"./index-zcEXKDIA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BlYLCNLi.js";import"./mergeSlotProps-BRYxW-OX.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./LayersTwoTone-DcC_cGFi.js";import"./ErrorOutlined-BfQ2lM07.js";import"./GetAppTwoTone-C5EnYAUi.js";import"./InfoOutlined-DRISvVgA.js";import"./DeleteTwoTone-BeGb_UBN.js";import"./CheckCircleTwoTone-Ctfh99h-.js";import"./RegularExpressions-kZf2njeX.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./Icon-BpqSzolu.js";import"./SynapseConstants-03FNPEMB.js";import"./OrientationBanner-CW2K3-RQ.js";import"./FullWidthAlert-L3bJILOo.js";import"./Alert-DOXScrWE.js";import"./Paper-GgpZwKOl.js";import"./IconButton-G5owOEKj.js";import"./ButtonBase-CIP26XmV.js";import"./Stack-BRvuPf6D.js";import"./Box-Bma8Ps0t.js";import"./AlertTitle--w70ZYZx.js";import"./Typography-Jzf0ov00.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./Button-DCzP6lNj.js";import"./ShowMore-D9tD7OdY.js";import"./Dropdown-D-ayP8Cc.js";import"./ThemeProvider-BS-PCUTx.js";import"./index-SDyqs4cU.js";import"./hasClass-D5ZjVvBY.js";import"./createWithBsPrefix-_LWiOtF-.js";import"./useFiles-DEblaM3k.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-C3QaTlDw.js";import"./calculateFriendlyFileSize-BNaAOc5m.js";import"./Skeleton-DaHZPytj.js";import"./inputBaseClasses-3kXRnYVz.js";import"./Fade-YgxkoC1K.js";import"./Link-CNcyCMpI.js";import"./cloneDeep-BifXcKf5.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-DKnRzacY.js";import"./dayjs.min-D1RcYm3-.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-GsjBPiB-.js";import"./factory-DQ_FQLjW.js";import"./sortBy-BP5CKgsC.js";import"./_baseFlatten-M9gQ2w4T.js";import"./isSymbol-BzKS7Qf1.js";import"./toString-CYyvKWOl.js";import"./_baseIteratee-D4MEycmk.js";import"./hasIn-CRCTY10Z.js";import"./omit-BFoACZg8.js";import"./_baseSlice-F8doVSIJ.js";import"./noop-DX6rZLP_.js";import"./without-BuiC_8SI.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./omitBy-CDyswa5i.js";import"./toInteger-czOlq-ma.js";import"./pick-CPw_ucF6.js";import"./times-Bw9geEsI.js";import"./uniqueId-CSw6ftlJ.js";import"./isNumber-BM-UBS4N.js";import"./uniq-Cds9rX6P.js";import"./LoadingScreen-DHkC6j6Z.js";import"./Backdrop-Dc0v9wgL.js";import"./LinearProgress-DvMiOAtm.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
