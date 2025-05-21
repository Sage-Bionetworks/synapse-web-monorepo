import{T as p}from"./ThemesPlot-j2FQjSt5.js";import"./jsx-runtime-tYB6KGdN.js";import"./index-Bkzzsk0B.js";import"./iframe-PLARaQxx.js";import"./useFiles-DvmSZ7jv.js";import"./VerificationSubmission-B0kBNeMy.js";import"./SynapseConstants-C6W0HfbC.js";import"./OrientationBanner-DtbTbOX1.js";import"./index-CoNRd3XO.js";import"./spreadSx-CwcO6WA9.js";import"./react-C-ewhzLl.js";import"./FullWidthAlert-DhQrdjoW.js";import"./Alert-B1CSW1mB.js";import"./createTheme-ow6PpJ59.js";import"./resolveComponentProps-DtrKlPN5.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-9Xc3crMX.js";import"./createSvgIcon-BMm4XUen.js";import"./DefaultPropsProvider-keNhgGSS.js";import"./Close-C7oos599.js";import"./IconButton-NVoucUGK.js";import"./ButtonBase-DUe-2sLH.js";import"./useTimeout-D_xDPDG6.js";import"./TransitionGroupContext-BI5ozUmQ.js";import"./useIsFocusVisible-BmX07aem.js";import"./useEventCallback-n4BBqXCp.js";import"./Paper-CUJNJhUR.js";import"./Stack-yhBWrz08.js";import"./getThemeProps-DKG83qIe.js";import"./useTheme-BjnpOWHg.js";import"./Box-BxR0r0Bu.js";import"./AlertTitle-CVG6At3E.js";import"./Typography-BZGJY9FA.js";import"./useTheme-DhFu0EUb.js";import"./Grow-CKdiTWKJ.js";import"./index-s6VlmbGT.js";import"./utils-B54jEU3b.js";import"./ClickAwayListener-ComLkdB-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-5RP58HIB.js";import"./index-C1cLcL-0.js";import"./useControlled-DJeY4ee5.js";import"./useId-b-gK5Z5A.js";import"./Popper-DiS3rm17.js";import"./Button-lu1VZGqc.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-CdcWoVBs.js";import"./utils-Chx9P0H6.js";import"./Link-DqPKtuF6.js";import"./Collapse-BvuOKxET.js";import"./isNil-DJG7UM9y.js";import"./_Uint8Array-BtQ75CAl.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BOpRD9h1.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DVVLfzkX.js";import"./_getTag-9nw34TEi.js";import"./tinycolor-Begke6kS.js";import"./Fade-DXThxLhw.js";import"./Skeleton-DDpLtQDR.js";import"./inputBaseClasses-HcbgCmhJ.js";import"./calculateFriendlyFileSize-DM-ZgnS1.js";import"./CheckCircleTwoTone-BvcCTkha.js";import"./InfoTwoTone-XqK14u6n.js";import"./mutation-DSCbETsB.js";import"./dayjs.min-B8Vi_I8g.js";import"./chunk-AYJ5UCUI-D3hJj5mX.js";import"./cloneDeep-DTYlG1uc.js";import"./_initCloneObject-BIJYbTMn.js";import"./isEqual-Cw7YgxfX.js";import"./merge-BufaBT0Y.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DnxC6kpb.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BZZkITwO.js";import"./Backdrop-DfAJYufp.js";import"./LinearProgress-0FFRjz5m.js";import"./noop-DX6rZLP_.js";import"./uniq-B4xNwxEN.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-CfPQYh_Y.js";import"./index-B5iRQa1Q.js";import"./_createAggregator-CEMjZFdT.js";import"./_baseEach-DY3dmahJ.js";import"./_baseIteratee-CVAtsiTJ.js";import"./_baseGet-BMsj7LUp.js";import"./isSymbol-DEfeboWZ.js";import"./toString-BGYj9T_z.js";import"./hasIn-a2QIQg1S.js";import"./_baseOrderBy-BKAtpV9Q.js";import"./_baseMap-Dk0kcFd_.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Vo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Vo as __namedExportsOrder,Ro as default};
