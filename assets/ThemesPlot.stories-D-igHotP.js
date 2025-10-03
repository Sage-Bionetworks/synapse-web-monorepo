import{T as p}from"./ThemesPlot-GP-R3pAr.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-Ah-QMMVe.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-XsXCMBgO.js";import"./OrientationBanner-DfVgOy4M.js";import"./index-BWJnohk0.js";import"./index-Rd2swjmm.js";import"./iframe-CXAxgruz.js";import"./spreadSx-CwcO6WA9.js";import"./react-BApqYDyB.js";import"./FullWidthAlert-BmqfxTfb.js";import"./Alert-CCZCxDnF.js";import"./createTheme-TuqmvCHd.js";import"./DefaultPropsProvider-BXgXJOYE.js";import"./useSlot-Dkzr42VA.js";import"./useForkRef-C6Hxgw1c.js";import"./createSimplePaletteValueFilter-I39MDwlM.js";import"./createSvgIcon-C9iQk-bv.js";import"./Close-DCDeVnbe.js";import"./IconButton-CyqRcr44.js";import"./useTimeout-B1Gaupyv.js";import"./ButtonBase-SlYjLBEH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DePpf9Xr.js";import"./Paper-BfdEPQLJ.js";import"./useTheme-COUAZuoX.js";import"./useTheme-D5J_Lubc.js";import"./Stack-BgMCCB8s.js";import"./useThemeProps-CsD4iJ62.js";import"./getThemeProps-C7aU0N0h.js";import"./extendSxProp-BEqNfaz4.js";import"./Box-C1rpSzmp.js";import"./AlertTitle-DigLp6pg.js";import"./Typography-BMdAKFRJ.js";import"./index-CNp3TF0s.js";import"./ClickAwayListener-BukZ-mWk.js";import"./getReactElementRef-C70_vEbO.js";import"./index-BnG4WIQw.js";import"./index-BdU_PVcS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-frQ6Hdr3.js";import"./Tooltip-Bodc1hDc.js";import"./index-eFiUvJZl.js";import"./useControlled-DV9JfbO_.js";import"./Popper-B_NbVk8A.js";import"./Button-BbbnNSgV.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-xEUhumnM.js";import"./QueryClientProvider-CKp6Cdu0.js";import"./Link-DJSxCMVl.js";import"./Collapse-Djxal_Co.js";import"./_baseUniq-DPC7unBD.js";import"./_Uint8Array-DiPMYHJc.js";import"./isArray-BKjPFGFw.js";import"./_getTag-B97qJZKn.js";import"./isEqual-CTDb6a_A.js";import"./noop-DX6rZLP_.js";import"./merge-Bi0YVhuS.js";import"./_initCloneObject-Du3oUuAw.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dr4GrnsL.js";import"./inputBaseClasses-BUA8z3Qv.js";import"./calculateFriendlyFileSize-DFvfx4N-.js";import"./CheckCircleTwoTone-C7oNrQEJ.js";import"./InfoTwoTone-BlOTsixa.js";import"./useMutation-CCZv9b7z.js";import"./dayjs.min-HpAO55uO.js";import"./chunk-AYJ5UCUI-CQrmzzWS.js";import"./cloneDeep--SZltrec.js";import"./Skeleton-BgzeM125.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-9P7SsoST.js";import"./Backdrop-CXVt1Wd7.js";import"./LinearProgress-DQJkWatN.js";import"./uniq-BO5n7njx.js";import"./Plot-B8HTH9Qq.js";import"./index-Chjiymov.js";import"./_createAggregator-CafVwY6C.js";import"./_baseEach-BlMNQXqb.js";import"./_baseIteratee-h20-UeBE.js";import"./_baseGet-BUMTTZoN.js";import"./isSymbol-Bqq76GQu.js";import"./toString-BBUCQoOW.js";import"./hasIn-CfRb4wUO.js";import"./_baseOrderBy-DUaOhIOh.js";import"./_baseMap-CBSvpzUr.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
