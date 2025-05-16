import{g as s}from"./entityHandlers-BmczUHiA.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-DkRsMa6G.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-lVPrPf8r.js";import{g as a}from"./userProfileHandlers-BcMoW4mu.js";import{P as N}from"./ProjectDataAvailability-DLbopT1X.js";import"./index-BN_Di7rS.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CvQO50up.js";import"./mockTeam-Bvbadeqp.js";import"./SynapseConstants-Bfg1qQ66.js";import"./OrientationBanner-BN7sc-yW.js";import"./jsx-runtime-CoXzOFQn.js";import"./index-Bv-s9W2u.js";import"./iframe-Cbn6Wioa.js";import"./index-BTAejVQp.js";import"./spreadSx-CwcO6WA9.js";import"./react-DOQBJuAS.js";import"./FullWidthAlert-Vqv0OtJl.js";import"./Alert-3vS49jrx.js";import"./createTheme-B2jVum5G.js";import"./resolveComponentProps-Da3g-n6Q.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CYGkZ_5i.js";import"./createSvgIcon-zGAR842g.js";import"./DefaultPropsProvider-CV1WaMnn.js";import"./Close-BLBNR7A4.js";import"./IconButton-EuepfCvL.js";import"./ButtonBase-DsKebiHo.js";import"./useTimeout-CxKGPiOF.js";import"./TransitionGroupContext-CntLVBsw.js";import"./useIsFocusVisible-CNLfUmJ0.js";import"./useEventCallback-BzaKhurB.js";import"./Paper-DTlkPfUp.js";import"./Stack-cKH5qMzO.js";import"./getThemeProps-BpylFmtp.js";import"./useTheme-BjBg_HQE.js";import"./Box-BCl-T6Nm.js";import"./AlertTitle-BN8ssDQ0.js";import"./Typography-mifgVkJr.js";import"./useTheme-BFXFTIwP.js";import"./Grow-DEaHBlcM.js";import"./index-CDrKje1t.js";import"./utils-Bov2-oov.js";import"./ClickAwayListener-CQQ6DDI4.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DfqKSysC.js";import"./index-ByVQsoFM.js";import"./useControlled-CDkZ20IG.js";import"./useId-BXknn2vZ.js";import"./Popper-BA5jVx5O.js";import"./Button-CQ-PKmTk.js";import"./uniqueId-CEGstLjV.js";import"./toString-C3HlysTi.js";import"./isObjectLike-D46PIp9S.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DLlUdl0I.js";import"./times-CBusaBCX.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-7HU0D_N7.js";import"./mockTableEntity-ByHerU-4.js";import"./mockFileEntityACLVariants-dsIBSi8m.js";import"./fakerUtils-BO2scaQZ.js";import"./mockFileEntity-e1ifJPqb.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-DnN-TtY5.js";import"./mockSchema-BWbMUeG3.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BRqwTfcM.js";import"./utils-Dml2HCW2.js";import"./Link-8rZT6qId.js";import"./Collapse-DUScFzSi.js";import"./isNil-IKS6J4hT.js";import"./_Uint8Array-CAE93Lp8.js";import"./_baseIsEqual-Cv659kD2.js";import"./_getTag-CYQCzpsu.js";import"./tinycolor-Begke6kS.js";import"./Fade-DfUGStCB.js";import"./Skeleton-C6cw4nQZ.js";import"./inputBaseClasses-CRfo2RbF.js";import"./calculateFriendlyFileSize-BVB5UzoH.js";import"./CheckCircleTwoTone-DLeaCtrD.js";import"./InfoTwoTone-ZwE3NCw_.js";import"./mutation-B83MkDYj.js";import"./dayjs.min-B7F5G4Hx.js";import"./chunk-AYJ5UCUI-DxylnMeD.js";import"./cloneDeep-Szv4Lrja.js";import"./_initCloneObject-DTpM-W_c.js";import"./isEqual-mmtDgPnd.js";import"./merge-Dt1OjAEO.js";import"./util-iKHneq1j.js";import"./HelpPopover-CvXxnpWa.js";import"./MarkdownPopover-BSouLdBd.js";import"./LightTooltip-D_qO6EC5.js";import"./MarkdownSynapse-GECupzRz.js";import"./SkeletonButton-DR0N7GYk.js";import"./SkeletonInlineBlock-BFqLSwwy.js";import"./SkeletonTable-Ck6SYnBv.js";import"./SkeletonParagraph-Du53LuXu.js";import"./HelpOutlineTwoTone-CBmI5w2E.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
