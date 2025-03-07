import{T as m}from"./ThemesPlot-BbovSbm_.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-Bjv2CEi6.js";import"./useQuery-6SsvXKRa.js";import"./utils-Bx1BRerw.js";import"./OrientationBanner-D9CLn5zV.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-C4tN5ngN.js";import"./Alert-CduaGk2B.js";import"./createTheme-C4MKIpuQ.js";import"./index-GEGPABih.js";import"./styled-BwKg_4wT.js";import"./mergeSlotProps-BB45Ai_O.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-CLD93Ce9.js";import"./Paper-BrACm7G9.js";import"./IconButton-BIc9jQ57.js";import"./ButtonBase-6jsyScMO.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Stack-DTWuWz9s.js";import"./Box-CaFleW7-.js";import"./AlertTitle-G3es5_Tb.js";import"./Typography-DrqHmlDD.js";import"./utils-DDqOmLXv.js";import"./index-BIzb42Jq.js";import"./Grow-30Ov46SB.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-D8c5U2qR.js";import"./index-CarQ_cRE.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-DtfaTZY_.js";import"./VerificationSubmission-BmZsZ0JS.js";import"./SynapseConstants-B1OhJYgL.js";import"./StringUtils-DFpF2_59.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-D-FIW5gs.js";import"./CheckCircleTwoTone-DTl0gYtq.js";import"./calculateFriendlyFileSize-B85TBsSb.js";import"./Skeleton-CW6YXi1_.js";import"./inputBaseClasses-u7jm9M-e.js";import"./Fade-BRP5-t6h.js";import"./Link-DxNs_73S.js";import"./cloneDeep-D5EWMeSp.js";import"./_initCloneObject-BtS9Lr92.js";import"./isArrayLike-DBJ5VOVB.js";import"./isObjectLike-Cu7zvyZq.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-Dxzbedgu.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-CvkBQyYg.js";import"./identity-DKeuBCMA.js";import"./_isIterateeCall-DxE_HXvA.js";import"./SqlFunctions-C2xMGs4N.js";import"./LoadingScreen-BDJMIc_E.js";import"./Backdrop-794lhd40.js";import"./LinearProgress-IGALd_S1.js";import"./Plot-DSBVXOLN.js";import"./index-BfyspvgH.js";import"./sortBy-Du1DPGmA.js";import"./hasIn-CX_JPOZd.js";import"./isSymbol-VqtJwUUo.js";import"./toString-C-tSuG3i.js";import"./_baseIteratee-BHYH6gFF.js";import"./pick-ClS9Ew2v.js";import"./_baseSlice-F8doVSIJ.js";import"./noop-DX6rZLP_.js";import"./without-C2fKQ3pV.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./omitBy-CXFQOflH.js";import"./toInteger-hwymBMnv.js";import"./times-BBjFlw2U.js";import"./uniqueId-CNPmaLAy.js";import"./isNumber-BR1aE1rr.js";import"./chunk-BsTAULZ2.js";import"./uniq-B4j8SWCz.js";const vo={title:"Home Page/ThemesPlot",component:m},o={args:{onPointClick:e=>{console.log(e.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const zo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,zo as __namedExportsOrder,vo as default};
