import{T as p}from"./ThemesPlot-VojkVAob.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-XlYi__ia.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-CevsBxut.js";import"./OrientationBanner-XjXkQFGf.js";import"./index-CUMi74ji.js";import"./index-kWfO1b8W.js";import"./iframe-By96TQWQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-DSBbWTc0.js";import"./FullWidthAlert-D7C_0Stn.js";import"./Alert-D-pb2H1j.js";import"./createTheme-B91DJHrN.js";import"./DefaultPropsProvider-BTOUfGRS.js";import"./useSlot-ujAwTHqc.js";import"./useForkRef-DBAE2GrT.js";import"./createSimplePaletteValueFilter-KaRNHIe0.js";import"./createSvgIcon-Cp1oITzz.js";import"./Close-BdGznF6u.js";import"./IconButton-vAFrChUr.js";import"./useTimeout-BdUQTmjn.js";import"./ButtonBase-DIX3Cycn.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-cSDlTyUq.js";import"./Paper-ekV4xe_V.js";import"./useTheme-BMoMpada.js";import"./useTheme-DEV96GkA.js";import"./Stack-BhLVBw8q.js";import"./extendSxProp-DNcow1wX.js";import"./getThemeProps-DjcGU8Oi.js";import"./Box-slc6oXgZ.js";import"./AlertTitle-CxOeK-BY.js";import"./Typography-BV-cLTY-.js";import"./index-CriQJ39W.js";import"./ClickAwayListener-CUvB1OJE.js";import"./getReactElementRef-DKCtVBG6.js";import"./index-BwgFhjOU.js";import"./index-DC25QyMN.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CJrCLzG9.js";import"./Tooltip-Bzrfh0ED.js";import"./index-BAEc8w3z.js";import"./useControlled-C7AUTfoO.js";import"./Popper-C9I_P9mN.js";import"./Button-CzXiqLg_.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BSWJfU5w.js";import"./QueryClientProvider-BS4uGJ-4.js";import"./Link-Dd_Wytey.js";import"./Collapse-C1Jn_lEP.js";import"./_baseUniq-CiNswBH0.js";import"./_Uint8Array-DG-m6Jkd.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BXZkekwU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B21mZ_aF.js";import"./isEqual-qlM1PUl9.js";import"./merge-Ddn0WFBi.js";import"./_initCloneObject-C20PbAIW.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cjqb-NKo.js";import"./inputBaseClasses-deewK7ko.js";import"./calculateFriendlyFileSize-CPTEi5e1.js";import"./CheckCircleTwoTone-Bt1CO-SL.js";import"./InfoTwoTone-BrocV6h_.js";import"./useMutation-C8ZiN1JX.js";import"./dayjs.min-B-dEJ4xI.js";import"./chunk-AYJ5UCUI-BzXwQl6l.js";import"./cloneDeep-B66VrETt.js";import"./Skeleton-C-fjOIbM.js";import"./SqlFunctions-CqOxgBqv.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-UwwbVBdL.js";import"./Backdrop-BrmJ7lND.js";import"./LinearProgress-COYmlzsp.js";import"./uniq-C5iQWMmr.js";import"./Plot-ByMZGwxX.js";import"./index-Chjiymov.js";import"./_createAggregator-CvMWGDQG.js";import"./_baseEach-CzdBqjGZ.js";import"./_baseIteratee-Vk2rG5WT.js";import"./_baseGet-D1usQgLG.js";import"./isSymbol-D6_o7dmX.js";import"./toString-ChayfwFT.js";import"./hasIn-Df-eK5Sj.js";import"./_baseOrderBy-DTUJeXa0.js";import"./_baseMap-Dhrbsm-G.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
