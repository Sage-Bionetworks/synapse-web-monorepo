import{g as s}from"./entityHandlers-DYeu_cdH.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-jPWlXuHc.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-1ZN_791K.js";import{g as a}from"./userProfileHandlers-C2G9oQJL.js";import{P as N}from"./ProjectDataAvailability-tFlMFpVZ.js";import"./index-CJ8L4aRP.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-Cr8hRLoo.js";import"./mockTeam-WwkXi9e8.js";import"./SynapseConstants-Ba1heHX4.js";import"./OrientationBanner-DmtTd2TQ.js";import"./jsx-runtime-tHJZYBcw.js";import"./index-Df9ki4m7.js";import"./iframe-gu9nKSuU.js";import"./index-DgcLTxff.js";import"./spreadSx-CwcO6WA9.js";import"./react-EBci5e-X.js";import"./FullWidthAlert-DPDY4mXa.js";import"./Alert-BCxFFk19.js";import"./createTheme-BINNrTrD.js";import"./resolveComponentProps-C_h7LpqL.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-By6tpA4H.js";import"./createSvgIcon-aeHwAv7r.js";import"./DefaultPropsProvider-BBINbyFF.js";import"./Close-Dg0Yyhdl.js";import"./IconButton-C4fHQ2mP.js";import"./ButtonBase-BJnbOYI0.js";import"./useTimeout-CkReBcKO.js";import"./TransitionGroupContext-Bx3VJPm0.js";import"./useIsFocusVisible-CFzyuqS3.js";import"./useEventCallback-FcdrOq4M.js";import"./Paper-DL6O15NN.js";import"./Stack-BcSaEj59.js";import"./getThemeProps-_buxTbuI.js";import"./useTheme-CrZO8DL0.js";import"./Box-C3CCkmvB.js";import"./AlertTitle-BgljIgUy.js";import"./Typography-CPW1w4ki.js";import"./useTheme-D7aU4zJW.js";import"./Grow-Bw7JNtNh.js";import"./index-Bs9oirMy.js";import"./utils-FhFw91KO.js";import"./ClickAwayListener-CvMIu_kV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip--cxr29Mn.js";import"./index-Cxy_adfL.js";import"./useControlled-D0Pe8713.js";import"./useId-BitcG2W_.js";import"./Popper-C7DDlbfw.js";import"./Button-otBf-fCg.js";import"./uniqueId-aXBBIKHb.js";import"./toString-4TSAtCHz.js";import"./isObjectLike-CnZoMM3i.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-Bi-T8Hl2.js";import"./times-BoEMLL0K.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DlOEUMT-.js";import"./mockTableEntity-Buv-SH29.js";import"./mockFileEntityACLVariants-BuYdhQ54.js";import"./fakerUtils-B0ECbVCN.js";import"./mockFileEntity-DNEUgd2F.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-CKVQLg_F.js";import"./mockSchema-D-V0v5lE.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DQWZeiYF.js";import"./utils-8n4YkW-3.js";import"./Link-CaTJJdl0.js";import"./Collapse-Cv_pKtFc.js";import"./isNil-dfygdcyY.js";import"./_Uint8Array-BY3nRIcz.js";import"./_baseIsEqual-Bsx2OylX.js";import"./_getTag-DaN_q5c6.js";import"./tinycolor-Begke6kS.js";import"./Fade-CNMLBLPt.js";import"./Skeleton-CgkAeMKL.js";import"./inputBaseClasses-Czd2LOTF.js";import"./calculateFriendlyFileSize-DvGvzjK0.js";import"./CheckCircleTwoTone-gIIBURBC.js";import"./InfoTwoTone-D0xmy2qt.js";import"./mutation-BRa-ekOT.js";import"./dayjs.min-MYorRcO6.js";import"./chunk-AYJ5UCUI-hydSzuez.js";import"./cloneDeep-CeJYBU74.js";import"./_initCloneObject-BmsGmtIF.js";import"./isEqual-DW03Q8_-.js";import"./merge-Byo7_oei.js";import"./util-eLaQlmvv.js";import"./HelpPopover-D25Mpr3H.js";import"./MarkdownPopover-DNVsh5w0.js";import"./LightTooltip-62AS7rvO.js";import"./MarkdownSynapse-CAMsGIQ_.js";import"./SkeletonButton-BJ8gNvUN.js";import"./SkeletonInlineBlock-Ba8buGB9.js";import"./SkeletonTable-CBmaqvB9.js";import"./SkeletonParagraph-DG99-NLx.js";import"./HelpOutlineTwoTone-kVx3xHfZ.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,R;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: {
      backgroundColor: '#375574'
    }
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Lt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,Lt as __namedExportsOrder,St as default};
