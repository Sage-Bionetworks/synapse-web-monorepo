import{T as p}from"./ThemesPlot-D9FNOrUS.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DqOED7Vm.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BthOpQLB.js";import"./OrientationBanner-xWDnb_8x.js";import"./index-CiGjdKGK.js";import"./index-0FUO4iVK.js";import"./iframe-DM38aeMQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-C2d4DyXu.js";import"./FullWidthAlert-Cx03XuvY.js";import"./Alert-udWcAUQY.js";import"./createTheme-BHAg5tEe.js";import"./DefaultPropsProvider-DR7_-YAs.js";import"./useSlot-DZfTNSFS.js";import"./useForkRef-DxePPmVc.js";import"./createSimplePaletteValueFilter-DERnL5M9.js";import"./createSvgIcon-CfvJ11Oa.js";import"./Close-Cg62tY8L.js";import"./IconButton-_bwpt4ca.js";import"./useTimeout-ByWjq-eU.js";import"./ButtonBase-CcjRDjmt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ByfLseIu.js";import"./Paper-lAHe8OpX.js";import"./useTheme-NzQR0i01.js";import"./useTheme-Bnf3h8G0.js";import"./Stack-CsZGKSJy.js";import"./extendSxProp-DoeCfCx7.js";import"./getThemeProps-CmMpLADq.js";import"./Box-DPFXD5kJ.js";import"./AlertTitle-BBIZ10VR.js";import"./Typography-B8zdMFE9.js";import"./index-Ozhlb9U6.js";import"./ClickAwayListener-BXtl8q7p.js";import"./getReactElementRef-DH0foITJ.js";import"./index-qN2NPw-a.js";import"./index-CGaPGV5L.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CYZ1JjRs.js";import"./Tooltip-CJb_CvWe.js";import"./index-BNBf6lAj.js";import"./useControlled-B6dAQYhR.js";import"./Popper-DOrV1LRN.js";import"./Button-DwRl1m3f.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DEzStqmt.js";import"./QueryClientProvider-BV8zLBvL.js";import"./Link-NI2pPKYc.js";import"./Collapse-BbakI7R6.js";import"./_baseUniq-CwnmLVm2.js";import"./_Uint8Array-DEUqcpre.js";import"./isArray-DV5BwaHp.js";import"./_getTag-BlOI61fG.js";import"./isEqual-CoMwnfdJ.js";import"./merge-_TaKl8B5.js";import"./_initCloneObject-C2F5HBS3.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C9uEJt8L.js";import"./inputBaseClasses-B4Lv6z-u.js";import"./calculateFriendlyFileSize-t9JGByLX.js";import"./CheckCircleTwoTone-DD06cB11.js";import"./InfoTwoTone-Dew1zR_M.js";import"./useMutation-B_FbfBom.js";import"./dayjs.min-REswNT-I.js";import"./chunk-AYJ5UCUI-QqhSiyQh.js";import"./cloneDeep-Ba2vXAv3.js";import"./Skeleton-D1xnNsuB.js";import"./SqlFunctions-B6aZ8mL4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-FKPaVxAH.js";import"./Backdrop-CGE6dyG4.js";import"./LinearProgress-cLbmiIoY.js";import"./uniq-CuRJqKZi.js";import"./Plot-DNS6Zmi3.js";import"./index-Chjiymov.js";import"./_createAggregator-CEi5ElaP.js";import"./_baseEach-CyigMivT.js";import"./_baseIteratee-D0jwcekc.js";import"./_baseGet-BqfzKlp_.js";import"./isSymbol-Ct9O8yqX.js";import"./toString-DlFGItZY.js";import"./hasIn-JFRraRWP.js";import"./_baseOrderBy-BO6sxaLy.js";import"./_baseMap-U1ec2s5Z.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
