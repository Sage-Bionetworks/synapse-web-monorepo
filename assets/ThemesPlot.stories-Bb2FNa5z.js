import{T as p}from"./ThemesPlot-DG6KCOWM.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-Be6tFy5F.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BEZwovbV.js";import"./OrientationBanner-CtoXztzg.js";import"./index-0unR9H4H.js";import"./index-BljgPFTo.js";import"./iframe-CyBU6Q7V.js";import"./spreadSx-CwcO6WA9.js";import"./react-CVn33jqE.js";import"./FullWidthAlert-BZgBYNyl.js";import"./Alert-DJPQ4QIM.js";import"./createTheme-CIrJTDOf.js";import"./DefaultPropsProvider-DbEdqidE.js";import"./useSlot-DVd3PzDD.js";import"./useForkRef-BPo1GnhT.js";import"./createSimplePaletteValueFilter-BwVtGIPT.js";import"./createSvgIcon-0kRQ-kbK.js";import"./Close-DaZgjw_6.js";import"./IconButton-BXR2LYXb.js";import"./useTimeout-Bpy0NDCv.js";import"./ButtonBase-Cd_tqh-g.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C5zAkQVG.js";import"./Paper-Cyv4dyLK.js";import"./useTheme-vHPl7Z18.js";import"./useTheme-C-hh5JcE.js";import"./Stack-Bsu_lXkI.js";import"./useThemeProps-CpST4J4d.js";import"./getThemeProps-gduYeenR.js";import"./extendSxProp-BUchhns_.js";import"./Box-B7np8nCS.js";import"./AlertTitle-DS7VlmPb.js";import"./Typography-CTlCFPS1.js";import"./index-DmDe8b2A.js";import"./ClickAwayListener-oKANEk0z.js";import"./getReactElementRef-BIbEb3Zr.js";import"./index-CLXOAuby.js";import"./index-CTWVO3q3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BnuhUscm.js";import"./Tooltip-Cr3zvRH6.js";import"./index-D921uLT9.js";import"./useControlled-B5_NtMt5.js";import"./Popper-CrTqWDfV.js";import"./Button-BZXN9KrI.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-B-0wee67.js";import"./QueryClientProvider-DNTbqL71.js";import"./Link-BkUBKMhX.js";import"./Collapse-BYc6Wv8_.js";import"./_baseUniq-BCgHUW7P.js";import"./_Uint8Array-6RqZOC7P.js";import"./isArray-DqQflkTV.js";import"./_getTag-OZNTQHEg.js";import"./isEqual-BKU_n09T.js";import"./noop-DX6rZLP_.js";import"./merge-Dru2-Hnn.js";import"./_initCloneObject-Bom0r3NW.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cj0EUrvW.js";import"./inputBaseClasses-DCwWV1lh.js";import"./calculateFriendlyFileSize-CzujXqM3.js";import"./CheckCircleTwoTone-FMrAv7pD.js";import"./InfoTwoTone-MGxkGzni.js";import"./useMutation-BdNABu1Z.js";import"./dayjs.min-CqZWhcNT.js";import"./chunk-AYJ5UCUI-D_3CYfsv.js";import"./cloneDeep-XPWNqf30.js";import"./Skeleton-Dw7_uGLe.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BWDRsjiw.js";import"./Backdrop-BNrZWVHK.js";import"./LinearProgress-DaTjsL41.js";import"./uniq-CwYhsCsg.js";import"./Plot-BsZccXJf.js";import"./index-Chjiymov.js";import"./_createAggregator-qGLHns1k.js";import"./_baseEach-COxmhqLr.js";import"./_baseIteratee-I0ZmEFIS.js";import"./_baseGet-GbGAn6EZ.js";import"./isSymbol-GyhxyoV-.js";import"./toString-Df23r9ia.js";import"./hasIn-DVi4XX9A.js";import"./_baseOrderBy-DgJR_MSk.js";import"./_baseMap-D1pUx84V.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
