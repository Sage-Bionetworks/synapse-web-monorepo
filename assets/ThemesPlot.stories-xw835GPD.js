import{T as m}from"./ThemesPlot-Dc-c2193.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-slSSO9fC.js";import"./useQuery-6SsvXKRa.js";import"./utils-Bx1BRerw.js";import"./OrientationBanner-BJ9gW8Zk.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-BK7MPzqu.js";import"./Alert-CeaOJcfo.js";import"./createTheme-CiCSa2mH.js";import"./index-GEGPABih.js";import"./styled-CGsSw8UJ.js";import"./mergeSlotProps-B0sAykN9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-CARPmhEq.js";import"./Paper-DfbYtKZb.js";import"./IconButton-BX1jAiHM.js";import"./ButtonBase-BtHCltnO.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Stack-DiY0npK2.js";import"./Box-D0Jm1lZU.js";import"./AlertTitle-D5vyrqh6.js";import"./Typography-NAJ1jGoo.js";import"./utils-D1_9yZbw.js";import"./index-BIzb42Jq.js";import"./Grow-8_BQPAWr.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DOWgCEwD.js";import"./index-CBeLH2jy.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-0w0n5xUv.js";import"./VerificationSubmission-CjmU3lv6.js";import"./SynapseConstants-CmafGRmS.js";import"./StringUtils-CkZesiyJ.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-D_Raqnaw.js";import"./CheckCircleTwoTone-BBYOrcPX.js";import"./calculateFriendlyFileSize-B5Pk7maD.js";import"./Skeleton-DyxL95vN.js";import"./inputBaseClasses-yPUgEGHH.js";import"./Fade-BvpYcI5h.js";import"./Link-BXmnhkxu.js";import"./cloneDeep-CrT5BP8N.js";import"./_initCloneObject-CKp18hZk.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-DLQdEICg.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-CeY5yzhw.js";import"./LoadingScreen-DbZ-TZgv.js";import"./Backdrop-CYlIBwDH.js";import"./LinearProgress-DFYryRfR.js";import"./Plot-DSBVXOLN.js";import"./index-BfyspvgH.js";import"./sortBy-4-n_0pEO.js";import"./hasIn-BL7-xVMW.js";import"./isSymbol-BzKS7Qf1.js";import"./toString-CYyvKWOl.js";import"./_baseIteratee-DeGI8ufR.js";import"./pick-D1Nx6zfq.js";import"./_baseSlice-F8doVSIJ.js";import"./noop-DX6rZLP_.js";import"./without-C0BBThDo.js";import"./_baseIndexOf-DlmoT9Yo.js";import"./omitBy-BCxDu7Cj.js";import"./toInteger-czOlq-ma.js";import"./times-Bw9geEsI.js";import"./uniqueId-CSw6ftlJ.js";import"./isNumber-BM-UBS4N.js";import"./uniq-Q8S-7o2O.js";const wo={title:"Home Page/ThemesPlot",component:m},o={args:{onPointClick:e=>{console.log(e.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Eo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Eo as __namedExportsOrder,wo as default};
