import{T as p}from"./ThemesPlot-CvWmjbbF.js";import"./jsx-runtime-12fxGrjy.js";import"./index-eWb6yZq4.js";import"./iframe-DODfCr77.js";import"./useFiles-DzQRyXfk.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-C01AROpC.js";import"./OrientationBanner-CswyJYID.js";import"./index-CMNPibww.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bk-AWK8u.js";import"./FullWidthAlert-Blq3bBEi.js";import"./Alert-DWxtKETL.js";import"./createTheme-DRhRClLk.js";import"./DefaultPropsProvider-Ci8sbTV8.js";import"./useSlot-BOoc1-Wr.js";import"./useForkRef-B4NxTtZx.js";import"./createSimplePaletteValueFilter-CMraNz6N.js";import"./createSvgIcon-D4n9PHew.js";import"./Close-DkJIaBp5.js";import"./IconButton-CJduSAtX.js";import"./useTimeout-CUTjfTtv.js";import"./ButtonBase-CLm9sSu-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CdPHbqUK.js";import"./Paper-Ci3Yueie.js";import"./useTheme-Do_MDklG.js";import"./useTheme-z8lzzdCb.js";import"./Stack-BS_Kn9Ff.js";import"./extendSxProp-DI5yyw6H.js";import"./getThemeProps-SQagHrVW.js";import"./Box-0inLKyKa.js";import"./AlertTitle-Ck-1gEhW.js";import"./Typography-CJHr4OCJ.js";import"./index-BwS5CNFE.js";import"./ClickAwayListener-DO69o72C.js";import"./getReactElementRef-DFFPg7hK.js";import"./index-CxQ-mLV2.js";import"./index-DlwQbzBX.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BKGYiqhi.js";import"./Tooltip-CxkZFGgd.js";import"./index-COCW-O7-.js";import"./useControlled-C7HItnBl.js";import"./Popper-CmdmamXe.js";import"./Button-CDoCRKn7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DrZ8vTnH.js";import"./utils-j4SBhjSC.js";import"./Link-DTOk0JUk.js";import"./Collapse-CErYxnBs.js";import"./isNil-DLNdS6CO.js";import"./_Uint8Array-MTHtMqKk.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DitNMTVV.js";import"./isArray-Dxzbedgu.js";import"./isEqual-bHqmOGPc.js";import"./_getTag-C-k0-mgg.js";import"./tinycolor-Begke6kS.js";import"./Fade-B3HIOSOQ.js";import"./inputBaseClasses-iQvrcFLc.js";import"./calculateFriendlyFileSize-DKkGrI5V.js";import"./CheckCircleTwoTone-CIQNt3ux.js";import"./InfoTwoTone-BKwLIjWH.js";import"./useMutation-BJDaPx8l.js";import"./dayjs.min-CmKjBYsK.js";import"./chunk-AYJ5UCUI-C563RCUQ.js";import"./cloneDeep-C54KQJJc.js";import"./_initCloneObject-C69klfYQ.js";import"./Skeleton-DP5N4NIj.js";import"./merge-C4MUQ4-m.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-Di5h1pDz.js";import"./Backdrop-D6PBFd4w.js";import"./LinearProgress-CE3Dpwb7.js";import"./uniq-7yOUS-Uj.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-DvDmiPuZ.js";import"./index-Chjiymov.js";import"./_createAggregator-D3ySAJbp.js";import"./_baseEach-cu5EDOud.js";import"./_baseIteratee-Cy7bhYwJ.js";import"./_baseGet-B-JdDjq0.js";import"./isSymbol-B7kXK_Sf.js";import"./toString-DYVPJQOI.js";import"./hasIn-CyK6Yb87.js";import"./_baseOrderBy-GARhiJxl.js";import"./_baseMap-mwWock2o.js";import"./head-aneRfQQJ.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
