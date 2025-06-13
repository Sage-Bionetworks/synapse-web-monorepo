import{T as p}from"./ThemesPlot-Che4JQzy.js";import"./jsx-runtime-Bv8YEaBH.js";import"./index-C8JkJuAu.js";import"./iframe-NLwWwRdc.js";import"./useFiles-Su2vP-Vi.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-EeVSIOhY.js";import"./OrientationBanner-BQ3EEnjD.js";import"./index-CGWSjN6U.js";import"./spreadSx-CwcO6WA9.js";import"./react-CiUdbne5.js";import"./FullWidthAlert-BrvXLUsb.js";import"./Alert-CjEJ3HP5.js";import"./createTheme-D9NJJ6z3.js";import"./resolveComponentProps-BGoVLP8f.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-l-SmT4Uz.js";import"./createSvgIcon-L4WadSk7.js";import"./DefaultPropsProvider-BiXlOQ7j.js";import"./Close-BiBfC96O.js";import"./IconButton-CXhXXsh6.js";import"./ButtonBase-dmtwr57K.js";import"./useTimeout-BuK_Exfq.js";import"./TransitionGroupContext-DJx4bXsB.js";import"./useIsFocusVisible-BO1F7lvs.js";import"./useEventCallback-CFYRt3cH.js";import"./Paper-CRVTgSKq.js";import"./Stack-rdeC-v74.js";import"./getThemeProps-4Dr_ZDpi.js";import"./useTheme-Co61GOlc.js";import"./Box-BMPqYR7p.js";import"./AlertTitle-CSIAt-Ha.js";import"./Typography-BsmL1IV9.js";import"./useTheme-BVEmyHZs.js";import"./Grow-D2l0_4Q_.js";import"./index-CMTDsqyy.js";import"./index-BJ_H4sHa.js";import"./utils-C3tDjUst.js";import"./ClickAwayListener-_6zWxFJV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CDHYnPb_.js";import"./index-D3UuUsLK.js";import"./useControlled-Cspd-g1r.js";import"./useId-DIAsmSPW.js";import"./Popper-DKOnFzcu.js";import"./Button-DEBpA164.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-BUFsJCGJ.js";import"./utils-Cj0m-Ji3.js";import"./Link-g1X2wDqx.js";import"./Collapse-BSLCQkny.js";import"./isNil-DKDhlnid.js";import"./_Uint8Array-DwE4ItUc.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DoTP4dqX.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-BoFbjx5O.js";import"./_getTag-BvRivN-a.js";import"./tinycolor-Begke6kS.js";import"./Fade-CZPfr4vM.js";import"./Skeleton-CBrnuwpI.js";import"./inputBaseClasses-DHml8rkl.js";import"./calculateFriendlyFileSize-DiFQmRiA.js";import"./CheckCircleTwoTone-C51j_Tht.js";import"./InfoTwoTone-BAas1LbT.js";import"./useMutation-_5A6YDAS.js";import"./isEqual-BG-Ffdhv.js";import"./dayjs.min-DJseQ_FH.js";import"./chunk-AYJ5UCUI-UunCorCM.js";import"./cloneDeep-CZwPFwpf.js";import"./_initCloneObject-Hb09R64Y.js";import"./merge-Dbgsmfty.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-DMQpCQSh.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CwFPGnbd.js";import"./Backdrop-JdYly_gr.js";import"./LinearProgress-CDCQJhyi.js";import"./uniq-9_aO1m-A.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-BVdyY-9e.js";import"./index-Chjiymov.js";import"./_createAggregator-CoGT7fjB.js";import"./_baseEach-DriQisQ4.js";import"./_baseIteratee-c6QRjVgG.js";import"./_baseGet-Id7DakhK.js";import"./isSymbol-fc3aM2-k.js";import"./toString-DkLHvPj7.js";import"./hasIn-C2fZe4mv.js";import"./_baseOrderBy-CaVld_4i.js";import"./_baseMap-s_GV1KIm.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
