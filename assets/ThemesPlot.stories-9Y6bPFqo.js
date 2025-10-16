import{T as p}from"./ThemesPlot-RRITgohT.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-CpIQf7bR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DCuj7v5A.js";import"./OrientationBanner-BhIo1itP.js";import"./index-D6sMuhjc.js";import"./index-BTX2eULV.js";import"./iframe-CVMtvJ31.js";import"./spreadSx-CwcO6WA9.js";import"./react-jWqjiESD.js";import"./FullWidthAlert-DBESnlHJ.js";import"./Alert-B_Lb3ke9.js";import"./createTheme-Bg0JnvG-.js";import"./DefaultPropsProvider-DkJRQOmc.js";import"./useSlot-DJ96S8JZ.js";import"./useForkRef-Bz6GVi3q.js";import"./createSimplePaletteValueFilter-B_zFUBoe.js";import"./createSvgIcon-kaLa9Vb4.js";import"./Close-CNSmPYq1.js";import"./IconButton-mOjBei70.js";import"./useTimeout-DyBAzNlF.js";import"./ButtonBase-DKKQqZi5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BZ-3rWL4.js";import"./Paper-BpMud_ox.js";import"./useTheme-D4cJ8PRi.js";import"./useTheme-C7YDFSZ_.js";import"./Stack-B07vM9bz.js";import"./useThemeProps-seSFSWsk.js";import"./getThemeProps-DkOrQpuL.js";import"./extendSxProp-DU89cOAM.js";import"./Box-ZnuoGFaU.js";import"./AlertTitle-CgDFnc1E.js";import"./Typography-DuRdq6Lg.js";import"./index-BIflH0jO.js";import"./ClickAwayListener-DegMn6iM.js";import"./getReactElementRef-CVLdZIi_.js";import"./index-DUzyVIzd.js";import"./index-B3i8jk0i.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqVF91XP.js";import"./Tooltip-B4Kq9yHi.js";import"./index-iQpWDSyN.js";import"./useControlled-Sbp9FKKD.js";import"./Popper-CX1lmSaJ.js";import"./Button-B7-P1hWd.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BS_xL6BT.js";import"./QueryClientProvider-CNvDTIKR.js";import"./Link-BKm2vjdi.js";import"./Collapse-ByANM13v.js";import"./_baseUniq-CqcjZw0e.js";import"./_Uint8Array-Bs5hmJ22.js";import"./isArray-CKHxsLMS.js";import"./_getTag-kUTcptDD.js";import"./isEqual-BQVT-dYG.js";import"./noop-DX6rZLP_.js";import"./merge-BnOw64jq.js";import"./_initCloneObject-CdUFhJ45.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-rzidtFwW.js";import"./inputBaseClasses-DNGH4K0e.js";import"./calculateFriendlyFileSize-AZUrqDHi.js";import"./CheckCircleTwoTone-BOy-Ivpu.js";import"./InfoTwoTone-DZGvo72n.js";import"./useMutation-CqYbiywW.js";import"./dayjs.min-CzGsWT9o.js";import"./chunk-AYJ5UCUI-BJiwWrYx.js";import"./cloneDeep-ztC9flu2.js";import"./Skeleton-Clpsi09M.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CkJbnKon.js";import"./Backdrop-B9d5xTyO.js";import"./LinearProgress-5dwmjWG_.js";import"./uniq-BPhVmbJY.js";import"./Plot-CXgH0971.js";import"./index-Chjiymov.js";import"./_createAggregator-CtZw8KjM.js";import"./_baseEach-Bq639rkq.js";import"./_baseIteratee-C3alzeDx.js";import"./_baseGet-D7zX72fG.js";import"./isSymbol-D6LPlgVh.js";import"./toString-1oDI86Nf.js";import"./hasIn-DpU-CKpd.js";import"./_baseOrderBy-DkPLO1wD.js";import"./_baseMap-Douay-jX.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
