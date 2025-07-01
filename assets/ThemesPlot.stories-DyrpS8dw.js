import{T as p}from"./ThemesPlot-kHUoMnYK.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BZkk-Nb_.js";import"./VerificationSubmission-CMrrYimb.js";import"./SynapseConstants-CFDmXB66.js";import"./OrientationBanner-Dzbaa3iB.js";import"./index-k5Hu8eSZ.js";import"./index-CNOD_coP.js";import"./iframe-B7beX9fc.js";import"./spreadSx-CwcO6WA9.js";import"./react-D45Oek5q.js";import"./FullWidthAlert-C-KYctTm.js";import"./Alert-BdaEog2i.js";import"./createTheme-Dr8QaAop.js";import"./DefaultPropsProvider-0BNkwUkh.js";import"./useSlot-Cmo4uO1e.js";import"./useForkRef-Dh8WXGOQ.js";import"./createSimplePaletteValueFilter-Bi8T94Z2.js";import"./createSvgIcon-DoUBNCW0.js";import"./Close-Cf8-Cnex.js";import"./IconButton-XG9vKa8a.js";import"./useTimeout-C3wGn6Ja.js";import"./ButtonBase-BYXCgz1G.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CgzCiAbs.js";import"./Paper-DGfiId5j.js";import"./useTheme-DTovFKgt.js";import"./useTheme-DZEQxr-3.js";import"./Stack-BaCFBVeB.js";import"./extendSxProp-Bc2u4vrI.js";import"./getThemeProps-BTbN-bVN.js";import"./Box-j1U5tBug.js";import"./AlertTitle-YXpZ_rlQ.js";import"./Typography-Cfe7s5kX.js";import"./index-Bed1RkRa.js";import"./ClickAwayListener-CYoYah1s.js";import"./getReactElementRef-FzNjKFPL.js";import"./index-ts2EtFAQ.js";import"./index-DmQ8Zlzm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-xMuuKoQQ.js";import"./Tooltip-BVpBX0Tl.js";import"./index-BDcq4vhx.js";import"./useControlled-Clk3odGP.js";import"./Popper-HBom_ZGM.js";import"./Button-D3Wh7UHU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Kd0L9zxX.js";import"./QueryClientProvider-BU9Nf1bS.js";import"./Link-DNz2LEpH.js";import"./Collapse-C0PAI9k5.js";import"./_baseUniq-3tq4cnpB.js";import"./_Uint8Array-BBklPthB.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C1Vf3me3.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BPgWCeD8.js";import"./isEqual-CImg_hBM.js";import"./merge-DCXe3tr_.js";import"./_initCloneObject-D0Zyj4v_.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CCyFKjzK.js";import"./inputBaseClasses-D28FMvSG.js";import"./calculateFriendlyFileSize-c_1sgylr.js";import"./CheckCircleTwoTone-BDMbfUlA.js";import"./InfoTwoTone-5ZSjfGa_.js";import"./useMutation-B17cM71k.js";import"./dayjs.min-tNmmlBRn.js";import"./chunk-AYJ5UCUI-DrYvtS15.js";import"./cloneDeep-B0cW39CL.js";import"./Skeleton-DlQYAId0.js";import"./SqlFunctions-c3WXx9n7.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-689GkORW.js";import"./Backdrop-D8CPeR1m.js";import"./LinearProgress-CpruFA9W.js";import"./uniq-CcLx_k9p.js";import"./Plot-wbCO1EIl.js";import"./index-Chjiymov.js";import"./_createAggregator-pLw4Vl7V.js";import"./_baseEach-qyct7wH1.js";import"./_baseIteratee-CNK9Dnad.js";import"./_baseGet-Drnlvkak.js";import"./isSymbol-B9wmL-k8.js";import"./toString-4b_4fNxv.js";import"./hasIn-Ckht4fVp.js";import"./_baseOrderBy-BVFATmuQ.js";import"./_baseMap-CcxsJFKN.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
