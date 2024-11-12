import{T as p}from"./ThemesPlot-BuPuEWMS.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./ElementWithTooltip-uI_yu2ne.js";import"./SynapseTableConstants-2qH3fDlQ.js";import"./IconSvg-DtudR477.js";import"./createSvgIcon-WkAWHJz7.js";import"./createTheme-BJ_1npSs.js";import"./index-GEGPABih.js";import"./styled-D9q5EqxT.js";import"./Tooltip-DkphrB3H.js";import"./index-BBhqBz5p.js";import"./utils-Dbx_liB_.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useForkRef-Bm_QQ74L.js";import"./index-BlO3JfGB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DXf4-ciu.js";import"./mergeSlotProps-CPIGGwa7.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./LayersTwoTone-BhMk6WF3.js";import"./ErrorOutlined-pfr0v5ro.js";import"./GetAppTwoTone-BNLhvj0K.js";import"./InfoOutlined-oEfvb45W.js";import"./CheckCircleTwoTone-4o0y_0yc.js";import"./RegularExpressions-B4RNwTAQ.js";import"./index-BNbykmw2.js";import"./Icon-DGUDkTcd.js";import"./SynapseConstants-xMHIvvjg.js";import"./OrientationBanner-CRHvrKf4.js";import"./FullWidthAlert-D_YBTMJr.js";import"./Alert-B_MCCiJI.js";import"./Paper-B-RKd0p3.js";import"./IconButton-CLlNv19f.js";import"./ButtonBase-BH4d2aSg.js";import"./Stack-ERnuki-b.js";import"./Box-BXEUN41W.js";import"./AlertTitle-BMewjDNd.js";import"./Typography-BmBIKDjf.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./Button-BfexmcsD.js";import"./SortDown-BcrMxdhq.js";import"./ShowMore-D9tD7OdY.js";import"./Dropdown-DulLVQnB.js";import"./ThemeProvider-BS-PCUTx.js";import"./index-SDyqs4cU.js";import"./hasClass-D5ZjVvBY.js";import"./createWithBsPrefix-lxuwAjQM.js";import"./useFiles-CnQyvaNP.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-UBO-Myga.js";import"./Skeleton-Bkch6hEL.js";import"./inputBaseClasses-i-NnmgRC.js";import"./Fade-DsJosqMx.js";import"./Link-D8sP8KOh.js";import"./cloneDeep-B67xjGGL.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-lZs4Nsmk.js";import"./dayjs.min-D1RcYm3-.js";import"./tiny-invariant-CopsF_GD.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C8Jmet2C.js";import"./factory-DQ_FQLjW.js";import"./sortBy-DoSRQPF_.js";import"./_baseFlatten-zvW_r82W.js";import"./isSymbol-BzKS7Qf1.js";import"./toString-CYyvKWOl.js";import"./_baseIteratee-DjnMPDoG.js";import"./hasIn-2s0xP0pG.js";import"./omit-CkLE1zJ-.js";import"./_baseSlice-F8doVSIJ.js";import"./noop-DX6rZLP_.js";import"./without-C1qOo0_V.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./omitBy-B2k03UkL.js";import"./toInteger-czOlq-ma.js";import"./pick-CC2jrzod.js";import"./times-Bw9geEsI.js";import"./uniqueId-CSw6ftlJ.js";import"./isNumber-BM-UBS4N.js";import"./uniq-BeLPldAP.js";import"./LoadingScreen-C7dbrVc-.js";import"./Backdrop-Cy71n5DS.js";import"./LinearProgress-hMFQ5X94.js";const Mo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Qo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Qo as __namedExportsOrder,Mo as default};
