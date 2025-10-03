import{T as p}from"./ThemesPlot-CgxLubaG.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-I_Ljsvpl.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DXlbb83s.js";import"./OrientationBanner-DIMiS6-X.js";import"./index-ChlY0ty7.js";import"./index-DEXVlyEC.js";import"./iframe-CTaKRDzK.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4Ag4Khl.js";import"./FullWidthAlert-BQi4k6sm.js";import"./Alert-oJFeNTPf.js";import"./createTheme-DSMh9aMK.js";import"./DefaultPropsProvider-tscWNgRV.js";import"./useSlot-5fSGsjd4.js";import"./useForkRef-Bpi5glj8.js";import"./createSimplePaletteValueFilter-z7ViS40H.js";import"./createSvgIcon-IuSm3jpw.js";import"./Close-BYMa4NgR.js";import"./IconButton-B7n5ygWB.js";import"./useTimeout-Bcmt8HaF.js";import"./ButtonBase-CtgJMkFI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BXvEMjjW.js";import"./Paper-BJO20Q9K.js";import"./useTheme-nF84TQI6.js";import"./useTheme-pMmDZBIO.js";import"./Stack-EBx-64RF.js";import"./useThemeProps-CwzyAdAY.js";import"./getThemeProps-BLGqyFKd.js";import"./extendSxProp-DysauLlL.js";import"./Box-B7xLSVbU.js";import"./AlertTitle-DohnoRzz.js";import"./Typography-BV8NZaJG.js";import"./index-C2jv3Yen.js";import"./ClickAwayListener-DUKbMkLR.js";import"./getReactElementRef-C_fwGmzx.js";import"./index-CwKkrkMc.js";import"./index-Dv8O9azN.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dvv4NuhG.js";import"./Tooltip-CivR37xg.js";import"./index-C1fK7QTW.js";import"./useControlled-Cy9MDY45.js";import"./Popper-DCuGWZxy.js";import"./Button-DWmqEVyK.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-lmzAG6mX.js";import"./QueryClientProvider-5d7cgiKu.js";import"./Link-Bcp540VX.js";import"./Collapse-DbB5zYpu.js";import"./_baseUniq-D6itCMNh.js";import"./_Uint8Array-CFylZ-gm.js";import"./isArray-gvpvXSFg.js";import"./_getTag-H4oDIWkK.js";import"./isEqual-hwpo_E0H.js";import"./noop-DX6rZLP_.js";import"./merge-Ckv_4s3g.js";import"./_initCloneObject-oqJaqUxv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CgqBXsZL.js";import"./inputBaseClasses-R5GcZRQ_.js";import"./calculateFriendlyFileSize-4KlCbfW-.js";import"./CheckCircleTwoTone-BPpE4vcS.js";import"./InfoTwoTone-C2z4ZzAx.js";import"./useMutation-DVVhu_SN.js";import"./dayjs.min-d6L6EHLF.js";import"./chunk-AYJ5UCUI-UVlhN5ws.js";import"./cloneDeep-Co63vGR4.js";import"./Skeleton-B3iwvpLy.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CisaBWXR.js";import"./Backdrop-dBbh7sfo.js";import"./LinearProgress-DX_5dvVv.js";import"./uniq-BQ2kjZ35.js";import"./Plot-DYFNGns-.js";import"./index-Chjiymov.js";import"./_createAggregator-CBs5n1o7.js";import"./_baseEach-BBrn4AyW.js";import"./_baseIteratee-BTyYuFMj.js";import"./_baseGet-BCeCzEEy.js";import"./isSymbol-3W0mAepu.js";import"./toString-D2E_Ez-s.js";import"./hasIn-Cni5gN02.js";import"./_baseOrderBy-BJFXdInR.js";import"./_baseMap-ZhU8JOyL.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
