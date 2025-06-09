import{g as s}from"./entityHandlers-FJ0JvyIK.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-DPLNIGPK.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-DL9olAIl.js";import{g as a}from"./userProfileHandlers-2rK65ygg.js";import{P as N}from"./ProjectDataAvailability-D402xpkL.js";import"./index-Da-w_yiB.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-efmESD5I.js";import"./mockTeam-CLU7kcDM.js";import"./SynapseConstants-DIGbeuIK.js";import"./OrientationBanner-CdVTuGgb.js";import"./jsx-runtime-BgCq8gwN.js";import"./index-C_gnWP_t.js";import"./iframe-CbIreDb2.js";import"./index-DsPoo2Ro.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4nFN3Ah.js";import"./FullWidthAlert-BWkqCL07.js";import"./Alert-zI21t_ct.js";import"./createTheme-OkraJ5eJ.js";import"./resolveComponentProps-CePEpoP1.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-dNLbFQVo.js";import"./createSvgIcon-BHiZORw5.js";import"./DefaultPropsProvider-BseDZ5eB.js";import"./Close-CDYC--wl.js";import"./IconButton-DAaKFUzV.js";import"./ButtonBase-IB6_m_jw.js";import"./useTimeout-Cye8bwlJ.js";import"./TransitionGroupContext-CS2phJ3S.js";import"./useIsFocusVisible-pfxCMmj4.js";import"./useEventCallback-Bck77aoL.js";import"./Paper-CRf9WCXu.js";import"./Stack-CtKa76FJ.js";import"./getThemeProps-CZUDRWGj.js";import"./useTheme-D5uDEtFj.js";import"./Box-SbfP01m2.js";import"./AlertTitle-YuhibS0Q.js";import"./Typography-ooch0MpL.js";import"./useTheme-BxZhO2mg.js";import"./Grow-BRU2ZIec.js";import"./index-BLcRfihU.js";import"./utils-BOrTgFDN.js";import"./ClickAwayListener-0jLBZ_NF.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CnSmt6JP.js";import"./index-C8hSn997.js";import"./useControlled-B5xsJp7-.js";import"./useId-B3qv0Fqa.js";import"./Popper-BJu7XYtc.js";import"./Button-BoTYrHNG.js";import"./uniqueId-DiyADoIH.js";import"./toString-Biz4hhkS.js";import"./isObjectLike-ArQpH04e.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-CxiAXWXi.js";import"./times-CrsZLMtN.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-BZb7mfZx.js";import"./mockTableEntity-lE0a4iEr.js";import"./mockFileEntityACLVariants-DLz9jCg-.js";import"./fakerUtils-V1ld65Mt.js";import"./mockFileEntity-DfZSNhuM.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-BcMboOPq.js";import"./mockSchema-ClTv9gFF.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-D2x4aW1T.js";import"./utils-BhHY6IUZ.js";import"./Link-CUHo7LkR.js";import"./Collapse-CcAZYdGa.js";import"./isNil-KHj6LWxN.js";import"./_Uint8Array-BfzcZJqI.js";import"./_baseIsEqual-BsH3YbMu.js";import"./_getTag-RwKhRrOD.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHaVGwVo.js";import"./Skeleton-aBWFkCqk.js";import"./inputBaseClasses-CUxDQaHH.js";import"./calculateFriendlyFileSize-D8IbqDIv.js";import"./CheckCircleTwoTone-WEcEfruf.js";import"./InfoTwoTone-CVKap42G.js";import"./useMutation-Bc_DK1q5.js";import"./isEqual-Cs40Ekkd.js";import"./dayjs.min-DrfyowjI.js";import"./chunk-AYJ5UCUI-CbqUZpCT.js";import"./cloneDeep-w86UdGPr.js";import"./_initCloneObject-C1jMuqUN.js";import"./merge-CGttcKyQ.js";import"./util-BoMHqXhP.js";import"./HelpPopover-B0JipalD.js";import"./MarkdownPopover-K71dM2xQ.js";import"./LightTooltip-C8VLf5gk.js";import"./MarkdownSynapse-BOx_HMyj.js";import"./SkeletonButton-ZBJNvmzv.js";import"./SkeletonInlineBlock-D8bpaet_.js";import"./SkeletonTable-BGizizmn.js";import"./SkeletonParagraph-C12HqlQq.js";import"./HelpOutlineTwoTone-DDf0-Rdu.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
