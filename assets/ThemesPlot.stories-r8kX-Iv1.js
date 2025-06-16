import{T as p}from"./ThemesPlot-zhMryION.js";import"./jsx-runtime-BlM1FRL-.js";import"./index-BhP06szg.js";import"./iframe-BS9W2Wvb.js";import"./useFiles-CBr5IUon.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-BX7tnvz1.js";import"./OrientationBanner-aQ8TNTQw.js";import"./index-BefUjdsq.js";import"./spreadSx-CwcO6WA9.js";import"./react-ZdlEz97l.js";import"./FullWidthAlert-ChnU0mY7.js";import"./Alert-BHIxQlih.js";import"./createTheme-D8pQAHfD.js";import"./DefaultPropsProvider-gaRRcztr.js";import"./useSlot-ClnjNJA7.js";import"./useForkRef-gIxop5VW.js";import"./createSimplePaletteValueFilter-gb3Prl0-.js";import"./createSvgIcon-DpXe8oC3.js";import"./Close-CpYvi_-W.js";import"./IconButton-CA4bGOWo.js";import"./useTimeout-_zJD3Z48.js";import"./ButtonBase-D7tG9DeA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CJzEjqd8.js";import"./Paper-BlhQV-oR.js";import"./useTheme-DDaTSMTi.js";import"./useTheme-AK3AFNkh.js";import"./Stack-DNhQ6903.js";import"./extendSxProp-BkAfocSO.js";import"./getThemeProps-5XoFBxB1.js";import"./Box-DNU2ZVbF.js";import"./AlertTitle-DK-br470.js";import"./Typography-d5nb-62C.js";import"./index-CLleM3ip.js";import"./ClickAwayListener-BmyARUuY.js";import"./getReactElementRef-C4sAiCDA.js";import"./index-BypZKsN-.js";import"./index-CwHgGaqN.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B_o6YR8Y.js";import"./Tooltip-DTvwQu62.js";import"./index-xGj7KpDx.js";import"./useControlled-RqfzBbBX.js";import"./Popper-BaY7U30F.js";import"./Button-IngFgvGz.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-r-Re3Rsi.js";import"./utils-BBLC3F9-.js";import"./Link-u9n50BXl.js";import"./Collapse-DIuNVBul.js";import"./isNil-DY9kn39-.js";import"./_Uint8Array-BJM1l806.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWvSJDLb.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BvywnoNX.js";import"./_getTag-BrTe4_9V.js";import"./tinycolor-Begke6kS.js";import"./Fade-DZwn-bFq.js";import"./inputBaseClasses-Bzako8_G.js";import"./calculateFriendlyFileSize-B8udOIoo.js";import"./CheckCircleTwoTone-DyeJWu1k.js";import"./InfoTwoTone-XL0at7dW.js";import"./useMutation-DeHyVrkY.js";import"./dayjs.min-acHY-hx9.js";import"./chunk-AYJ5UCUI-DwxRC3Bw.js";import"./cloneDeep-yBjRdL4k.js";import"./_initCloneObject-B9ahOE9F.js";import"./Skeleton-CkqDtb85.js";import"./merge-Bb3N9CEi.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DvluwVSj.js";import"./Backdrop-D26XsY6T.js";import"./LinearProgress-IutgoFW1.js";import"./uniq-B7SqH-GY.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-DYnOht6y.js";import"./index-Chjiymov.js";import"./_createAggregator-CLWso0Mb.js";import"./_baseEach-Dj2ryylg.js";import"./_baseIteratee-KBFWxuG2.js";import"./_baseGet-DewLf5f2.js";import"./isSymbol-SI4cpORi.js";import"./toString-XimJsdP5.js";import"./hasIn-C2ORN4AQ.js";import"./_baseOrderBy-yn76Ii-h.js";import"./_baseMap-DGMmO2my.js";import"./head-aneRfQQJ.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
