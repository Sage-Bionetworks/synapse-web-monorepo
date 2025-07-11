import{T as p}from"./ThemesPlot-CDzQz_xg.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-CvNgPb5D.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-DfAkYHSx.js";import"./OrientationBanner-Kqq2yAK3.js";import"./index-fDndQCcb.js";import"./index-DFgyNqO_.js";import"./iframe-BONHnHmX.js";import"./spreadSx-CwcO6WA9.js";import"./react-CETkiXl_.js";import"./FullWidthAlert-Bv9Y6CJh.js";import"./Alert-BfRhTEiC.js";import"./createTheme-CvmSuuTN.js";import"./DefaultPropsProvider-DV2k0EKp.js";import"./useSlot-Bz1lPbgH.js";import"./useForkRef-BwM2dkCX.js";import"./createSimplePaletteValueFilter-BBua6APr.js";import"./createSvgIcon-CTTmQEG6.js";import"./Close-CDFYNJn2.js";import"./IconButton-DMY6WtAo.js";import"./useTimeout-uM0I4FHt.js";import"./ButtonBase-D1BWc8jn.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jpdvXlMB.js";import"./Paper-Dl4NcsZy.js";import"./useTheme-nOGRm3h9.js";import"./useTheme-CFl9zPOj.js";import"./Stack-8Gefz3Vx.js";import"./extendSxProp-OrWKMBCc.js";import"./getThemeProps-c6QJIRQ5.js";import"./Box-C57trPRa.js";import"./AlertTitle-bpsm5pdH.js";import"./Typography-CBiSjxZP.js";import"./index-B6lxu1Ug.js";import"./ClickAwayListener-DL9jmuNC.js";import"./getReactElementRef-BbilxyS1.js";import"./index-DTJcoq-b.js";import"./index-DIQf0lMW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cz7TIQwA.js";import"./Tooltip-DH1bm0aC.js";import"./index-DNhJT1xw.js";import"./useControlled-fDSPq9S-.js";import"./Popper-CF7HvnG1.js";import"./Button-BWqBW9qC.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BXrbdaCG.js";import"./QueryClientProvider-lP_DA3-U.js";import"./Link-DNdJsVbA.js";import"./Collapse-CZ-O6OTr.js";import"./_baseUniq-CsZ-FMDI.js";import"./_Uint8Array-DTR5gFx4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CEFHIlgJ.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BYmYX1Uu.js";import"./isEqual-Cappb9XP.js";import"./merge-C0TbiV95.js";import"./_initCloneObject-CZ01hRpU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-TtUSla3U.js";import"./inputBaseClasses-lm6KIU9A.js";import"./calculateFriendlyFileSize-BxI9cL49.js";import"./CheckCircleTwoTone-CRhIUAFO.js";import"./InfoTwoTone-DLAb1_sk.js";import"./useMutation-C4Mu_GWO.js";import"./dayjs.min-CjxvSurQ.js";import"./chunk-AYJ5UCUI-CyebcBVS.js";import"./cloneDeep-DB2QEjaU.js";import"./Skeleton-Cz687Kkk.js";import"./SqlFunctions-CqOxgBqv.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-XcpGziqk.js";import"./Backdrop-kgLfglio.js";import"./LinearProgress-yFSVFEf1.js";import"./uniq-CVn6uXLb.js";import"./Plot-C4M54hNr.js";import"./index-Chjiymov.js";import"./_createAggregator-DViLHE7b.js";import"./_baseEach-CIS25HAQ.js";import"./_baseIteratee-D3pRkdm_.js";import"./_baseGet-DEd5hfu5.js";import"./isSymbol-BjGDAt6H.js";import"./toString-B9OpfTPH.js";import"./hasIn-Dt7YhW7o.js";import"./_baseOrderBy-CbmM1M4R.js";import"./_baseMap-BVgHNK4D.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
