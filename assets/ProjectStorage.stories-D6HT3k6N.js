import{g as s}from"./entityHandlers-D15TJHAh.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-Bj1qDzht.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-VLOqtSvy.js";import{g as a}from"./userProfileHandlers-Mm3cDo6N.js";import{P as N}from"./ProjectDataAvailability-BDuq3k7J.js";import"./index-RU4LwN33.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-D_88GNvN.js";import"./mockTeam-f3wSrr3a.js";import"./SynapseConstants-C4_BSfJX.js";import"./OrientationBanner-BfQKEM6f.js";import"./jsx-runtime-CgBRLEa-.js";import"./index-Cm3VAqvi.js";import"./iframe-D-z5eryP.js";import"./index-CQbK4M81.js";import"./spreadSx-CwcO6WA9.js";import"./react-BszH1LB1.js";import"./FullWidthAlert-DhrO65_m.js";import"./Alert-4kvTLzfn.js";import"./createTheme-D3A4yulZ.js";import"./resolveComponentProps-BYCi2bu3.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-JdeycaeZ.js";import"./createSvgIcon-kNdxJAy9.js";import"./DefaultPropsProvider-CoJm6rCv.js";import"./Close-agg9DekZ.js";import"./IconButton-eVrh23VG.js";import"./ButtonBase-C0HDqlf7.js";import"./useTimeout-CtGwrGZE.js";import"./TransitionGroupContext-B4SgA8fZ.js";import"./useIsFocusVisible-CdG0Xk-w.js";import"./useEventCallback-D4tUhhl4.js";import"./Paper-C1f04ktM.js";import"./Stack-BC_fHXlJ.js";import"./getThemeProps-BIMvOQzE.js";import"./useTheme-B4dGVzj9.js";import"./Box-wR1-okkc.js";import"./AlertTitle-CiwBKXMY.js";import"./Typography-ByTWsZ15.js";import"./useTheme-BI2S4QNb.js";import"./Grow-RHuPc6fz.js";import"./index-DW4Ai1wC.js";import"./utils-D287OKWf.js";import"./ClickAwayListener-Bk44fSg7.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BerKoCs9.js";import"./index-6MOF0f3P.js";import"./useControlled-BPLd89bY.js";import"./useId-BzDDLVft.js";import"./Popper-DpEkWGMI.js";import"./Button-LaCGCM-J.js";import"./uniqueId-Cd-JRmz4.js";import"./toString-BXBassw-.js";import"./isObjectLike-C5sgg6cm.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DNGSiwFZ.js";import"./times-YvWrZUsp.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-BsWus-vZ.js";import"./mockTableEntity-VfadHGtR.js";import"./mockFileEntityACLVariants-C_ZaXH9n.js";import"./fakerUtils-COrySx-d.js";import"./mockFileEntity-BqOlUjvd.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-BH29BdvH.js";import"./mockSchema-DHHFzv_W.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-jCh7k4c8.js";import"./utils-C1QIpVL-.js";import"./Link-BcIkkE9V.js";import"./Collapse-DpmNiXw9.js";import"./isNil-Ant6sUSY.js";import"./_Uint8Array-Bx9A3vk2.js";import"./_baseIsEqual-BpqpksID.js";import"./_getTag-CItFztzL.js";import"./tinycolor-Begke6kS.js";import"./Fade-DgzFB8i7.js";import"./Skeleton-Ccnh0KXd.js";import"./inputBaseClasses-BegAz63u.js";import"./calculateFriendlyFileSize-BXtfvFHv.js";import"./CheckCircleTwoTone-DgUHfpw1.js";import"./InfoTwoTone-BpDpNORF.js";import"./mutation-Ds3RVbc1.js";import"./dayjs.min-BcfQFtj1.js";import"./chunk-AYJ5UCUI-DyvibXab.js";import"./cloneDeep-4cLsR06D.js";import"./_initCloneObject-DPNyC6eJ.js";import"./isEqual-CjzFxgA_.js";import"./merge-BmbNGbHm.js";import"./util-Bpsy8r7Z.js";import"./HelpPopover-EJvmLzTo.js";import"./MarkdownPopover-C5fst4lH.js";import"./LightTooltip-CMTeQU21.js";import"./MarkdownSynapse-QW4yDwzM.js";import"./SkeletonButton-ClLhiNKW.js";import"./SkeletonInlineBlock-CcnGrXa9.js";import"./SkeletonTable-ChhpYf35.js";import"./SkeletonParagraph-CdjKSc_q.js";import"./HelpOutlineTwoTone-BOQvUHal.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
