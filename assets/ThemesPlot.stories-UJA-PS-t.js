import{T as p}from"./ThemesPlot-DUNIH8jM.js";import"./jsx-runtime-DjELr09S.js";import"./index-CRC0gUGT.js";import"./iframe-tJqn4f01.js";import"./useFiles-BW-owtxo.js";import"./VerificationSubmission-DKyendrM.js";import"./SynapseConstants-DYVulwWj.js";import"./OrientationBanner-CkExct-K.js";import"./index-Cma5SVl3.js";import"./spreadSx-CwcO6WA9.js";import"./react-axdigFKh.js";import"./FullWidthAlert-DDbXXCv9.js";import"./Alert-CujLCNcc.js";import"./createTheme-DQgOOKGc.js";import"./DefaultPropsProvider-BD-C1P_v.js";import"./useSlot-BoDDrK5C.js";import"./useForkRef-CiEqLLys.js";import"./createSimplePaletteValueFilter-BGAHH8st.js";import"./createSvgIcon-ClTXAx25.js";import"./Close-v_Yqb0Ff.js";import"./IconButton-BMaEMUSh.js";import"./useTimeout-LJKXBrqp.js";import"./ButtonBase-BxvSQLqm.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-pin8Wm.js";import"./Paper-YzbxsTTQ.js";import"./useTheme-5c2fjMQ9.js";import"./useTheme-C1X5k2vU.js";import"./Stack-CkCmnvh9.js";import"./extendSxProp-BdaBbCaG.js";import"./getThemeProps-GT0SpVYm.js";import"./Box-B8SxUwYv.js";import"./AlertTitle-CKDD2-B2.js";import"./Typography-CjUaZcjg.js";import"./index-FRkwLtZ5.js";import"./ClickAwayListener-BmI1rJ_C.js";import"./getReactElementRef-Bn8XLpha.js";import"./index-DwsODiYZ.js";import"./index-86h2p3s9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CC-UToNg.js";import"./Tooltip-CA2ntON0.js";import"./index-0_SuK6xJ.js";import"./useControlled-CSFe08nh.js";import"./Popper-Dc8rhSID.js";import"./Button-94LdtlT8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DR-NIgIW.js";import"./utils-BHyCoYbL.js";import"./Link-BWzpb2I3.js";import"./Collapse-CeVTy5G8.js";import"./isNil-Dt1ur5ER.js";import"./_Uint8Array-DNmeFNwt.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DBdzEJhN.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BDSMxr4M.js";import"./_getTag-Dbs1MR1b.js";import"./tinycolor-Begke6kS.js";import"./Fade-DnU0MG16.js";import"./inputBaseClasses-Cxqzqvgy.js";import"./calculateFriendlyFileSize-NoS0jg63.js";import"./CheckCircleTwoTone-BW8ZNfsM.js";import"./InfoTwoTone-2sQfC__e.js";import"./useMutation-BApUlXSa.js";import"./dayjs.min-Cwlc6FFu.js";import"./chunk-AYJ5UCUI-DrMux6IH.js";import"./cloneDeep-DS1BAkOs.js";import"./_initCloneObject-CMrr9E2i.js";import"./Skeleton-BjJ3iFNk.js";import"./merge-rOUTElX2.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-D5GxPzI3.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-B3m7HCEo.js";import"./Backdrop-C4U60Dzf.js";import"./LinearProgress-hjovXbbK.js";import"./uniq-DDSKas0h.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-Bc_6BQP-.js";import"./index-Chjiymov.js";import"./_createAggregator-Bn_9nNZ3.js";import"./_baseEach-BoCNQS-n.js";import"./_baseIteratee-BH8vJ-vC.js";import"./_baseGet-32avFlBF.js";import"./isSymbol--8wkJcCN.js";import"./toString-DzleP1QC.js";import"./hasIn-BnPkYLqQ.js";import"./_baseOrderBy-RZ_ebEGI.js";import"./_baseMap-CK5c08-V.js";import"./head-aneRfQQJ.js";const Qo={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
