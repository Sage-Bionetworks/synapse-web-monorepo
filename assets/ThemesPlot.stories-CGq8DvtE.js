import{T as e}from"./ThemesPlot-DbkAe4tc.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-D8tq0kin.js";import"./VerificationSubmission-CtqFoX_D.js";import"./SynapseConstants-dY7DQPl6.js";import"./OrientationBanner-FCMHzA9o.js";import"./index-C1_KPTmG.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-CcMr282B.js";import"./Alert-Dcz6JZ5x.js";import"./createTheme-BAeQEIuu.js";import"./index-GEGPABih.js";import"./styled-CVek1lbE.js";import"./mergeSlotProps-D1doMhlu.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-DGYn73cf.js";import"./Paper-BMFCclTH.js";import"./IconButton-B2vXFIju.js";import"./ButtonBase-CJOJSfnP.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Stack-Cg5HdmvL.js";import"./Box-DN73Q90z.js";import"./AlertTitle-D21D8EIu.js";import"./Typography-Cqa7rFgc.js";import"./useTheme-DGffmoS1.js";import"./Grow-DPWvTaVu.js";import"./index-BIzb42Jq.js";import"./utils-Cn9x6_1Z.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B_hdhCmy.js";import"./index-OQIcOgx6.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-jaxqGIs_.js";import"./StringUtils-CCZoPpVk.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-WscWG_aD.js";import"./CheckCircleTwoTone-ChmDaZaB.js";import"./calculateFriendlyFileSize-6vvdb7nH.js";import"./Skeleton-DmAZtRms.js";import"./inputBaseClasses-BQMLzgta.js";import"./Fade-BK4f5_SW.js";import"./utils-Bx1BRerw.js";import"./useQuery-6SsvXKRa.js";import"./Link-CFsiiapl.js";import"./cloneDeep-CU8tiSOH.js";import"./_initCloneObject-BtS9Lr92.js";import"./isArrayLike-DBJ5VOVB.js";import"./isObjectLike-Cu7zvyZq.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-Dxzbedgu.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-CvkBQyYg.js";import"./identity-DKeuBCMA.js";import"./_isIterateeCall-DxE_HXvA.js";import"./SqlFunctions-DeVdCW8u.js";import"./LoadingScreen-Cpeaoznz.js";import"./Backdrop-CB6sMj4E.js";import"./LinearProgress-Db_UF_B3.js";import"./Plot-DSBVXOLN.js";import"./index-BfyspvgH.js";import"./sortBy-CXn5puAy.js";import"./hasIn-2iMljArE.js";import"./isSymbol-VqtJwUUo.js";import"./toString-C-tSuG3i.js";import"./_baseIteratee-BOtHiy86.js";import"./pick-CPeec0rI.js";import"./_baseSlice-F8doVSIJ.js";import"./noop-DX6rZLP_.js";import"./without-Cz9_YmS1.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./omitBy-EAqyg34H.js";import"./toInteger-hwymBMnv.js";import"./times-BBjFlw2U.js";import"./uniqueId-CNPmaLAy.js";import"./isNumber-BR1aE1rr.js";import"./chunk-BsTAULZ2.js";import"./uniq-Bvv-SxCH.js";const Uo={title:"Home Page/ThemesPlot",component:e},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const _o=["ThemesPlotDemo"];export{o as ThemesPlotDemo,_o as __namedExportsOrder,Uo as default};
