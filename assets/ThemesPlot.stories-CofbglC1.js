import{T as p}from"./ThemesPlot-CT-DSMR-.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DqXWRdLP.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BcS6pAr3.js";import"./OrientationBanner-CG03QXVu.js";import"./index-BDHVF7zq.js";import"./index-CyaC6C9M.js";import"./iframe-DVO2sOA7.js";import"./spreadSx-CwcO6WA9.js";import"./react-JIiKIcnf.js";import"./FullWidthAlert-Dm9wjr4x.js";import"./Alert-CX_6dWjM.js";import"./createTheme-H1Dsx0f2.js";import"./DefaultPropsProvider-igusQ6nr.js";import"./useSlot-DtqzQqwD.js";import"./useForkRef-BdoLN6De.js";import"./createSimplePaletteValueFilter-DXhg1chW.js";import"./createSvgIcon-D26Ik47l.js";import"./Close-36WCucuH.js";import"./IconButton-B4lJlp-J.js";import"./useTimeout-DnzmxlwV.js";import"./ButtonBase-DeKe3_Pq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-HR6r5QDp.js";import"./Paper-C1zodLdI.js";import"./useTheme-Dzwgi_yn.js";import"./useTheme-2WTqdYsP.js";import"./Stack-DuNoS5UG.js";import"./extendSxProp-aFKfhcg8.js";import"./getThemeProps-DUb0x1pd.js";import"./Box-TtuRu3g-.js";import"./AlertTitle-LRTkPzvh.js";import"./Typography-st_y82mL.js";import"./index-CV5xniWo.js";import"./ClickAwayListener-DJZi5PU9.js";import"./getReactElementRef-C9kSLM4V.js";import"./index-Oc3CgUQO.js";import"./index-DxB4MPXu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-UQ58OAOl.js";import"./Tooltip-6R1JgVQo.js";import"./index-CXR7n0Cv.js";import"./useControlled-j4hQ7Q1o.js";import"./Popper-ROR_DG8Z.js";import"./Button-DY4-erp3.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CHsUcFhx.js";import"./QueryClientProvider-B3zHAd0y.js";import"./Link-BW12XdVC.js";import"./Collapse-BynCIxJe.js";import"./_baseUniq-D4p32fKM.js";import"./_Uint8Array-Cy6t9XcF.js";import"./isArray-Cc0W7s7X.js";import"./_getTag-BAhJrBE8.js";import"./isEqual-BykgLa6_.js";import"./merge-7a-O-WLR.js";import"./_initCloneObject-CGLRXhCQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-YGgjrwuC.js";import"./inputBaseClasses-aQr5mJnX.js";import"./calculateFriendlyFileSize-JYrc0r5a.js";import"./CheckCircleTwoTone-BH5aKRhu.js";import"./InfoTwoTone-CoaCnS3M.js";import"./useMutation-BAQZYviv.js";import"./dayjs.min-BArBwRfF.js";import"./chunk-AYJ5UCUI-B1YFZTwg.js";import"./cloneDeep-BLJr3MDv.js";import"./Skeleton-BHuZd6hg.js";import"./SqlFunctions-B6aZ8mL4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BDHD6GuR.js";import"./Backdrop-DO9nPZPx.js";import"./LinearProgress-DDC0rDA-.js";import"./uniq-zixdzSbc.js";import"./Plot-BIKhCaW2.js";import"./index-Chjiymov.js";import"./_createAggregator-DloFDruP.js";import"./_baseEach-YaKJwgjb.js";import"./_baseIteratee-CU9U4lno.js";import"./_baseGet-BBD5Vcti.js";import"./isSymbol-DmZ26p2l.js";import"./toString-CnzATqzj.js";import"./hasIn-DmjEd4f3.js";import"./_baseOrderBy-BEjC7Ajw.js";import"./_baseMap-Dh2WD6R_.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Jo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Jo as __namedExportsOrder,Go as default};
