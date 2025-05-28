import{g as s}from"./entityHandlers-CcPigpGO.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-Csa7dt3u.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-CxhQRlem.js";import{g as a}from"./userProfileHandlers-DyT_OixS.js";import{P as N}from"./ProjectDataAvailability-DEakdE8i.js";import"./index-Cf6fksIL.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-C1w9Fh0m.js";import"./mockTeam-CoubK4gl.js";import"./SynapseConstants-BlBmq_8s.js";import"./OrientationBanner-CyUpBZqy.js";import"./jsx-runtime-G3kcun9p.js";import"./index-Yg--iZq-.js";import"./iframe-BCAWC2I3.js";import"./index-BmkGWmvH.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_-pcSi9.js";import"./FullWidthAlert-BHmvYLXZ.js";import"./Alert-DfvFtguU.js";import"./createTheme-N1-IWSxF.js";import"./resolveComponentProps-D4e1xWws.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CP5fgMc-.js";import"./createSvgIcon-cnhKmrGB.js";import"./DefaultPropsProvider-C_pLLkTF.js";import"./Close-DoMxHeVd.js";import"./IconButton-Di2GD9l2.js";import"./ButtonBase-CscigYjd.js";import"./useTimeout-DZZ8kkGX.js";import"./TransitionGroupContext-82H1ouW-.js";import"./useIsFocusVisible-DqibNYDO.js";import"./useEventCallback-B2bKWCyK.js";import"./Paper-nI3QrkK7.js";import"./Stack-B-60LY7Q.js";import"./getThemeProps-CnIQNgOP.js";import"./useTheme-D7OueLh-.js";import"./Box-D2jroMLZ.js";import"./AlertTitle-BH9q9-gu.js";import"./Typography-82RYpCCZ.js";import"./useTheme-BEHJ7b1Q.js";import"./Grow-D5UV9RB1.js";import"./index-C1xQEisA.js";import"./utils-whpWPMHJ.js";import"./ClickAwayListener-BO4uKgNA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-b-ocpEJh.js";import"./index-CxihIUxw.js";import"./useControlled-B7iGhHHh.js";import"./useId-BW8Wy0LR.js";import"./Popper-Bu2gOJgQ.js";import"./Button-C1jDFRQd.js";import"./uniqueId-DGOE_Eo6.js";import"./toString-BIm7eliI.js";import"./isObjectLike-CFnMZm62.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-B1Y8W1g8.js";import"./times-B9LSUJWV.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DtJYaMSH.js";import"./mockTableEntity-DW0pd2Ud.js";import"./mockFileEntityACLVariants-DefVXR89.js";import"./fakerUtils-Cn9Hc36r.js";import"./mockFileEntity-BPUdiTV2.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-ZuH7EvJT.js";import"./mockSchema-YXDAspbk.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-C-x_EuHm.js";import"./utils-Dw86f0ge.js";import"./Link-Cn2J7rSx.js";import"./Collapse-CUMtwh7G.js";import"./isNil-B6br_ZUr.js";import"./_Uint8Array-D2lqwLng.js";import"./_baseIsEqual-so24MjHt.js";import"./_getTag-VdZ1AeIP.js";import"./tinycolor-Begke6kS.js";import"./Fade-MvuZT9g3.js";import"./Skeleton-CtwgzPcw.js";import"./inputBaseClasses-bR0UpD5b.js";import"./calculateFriendlyFileSize-C234RjjD.js";import"./CheckCircleTwoTone-D907d1Fo.js";import"./InfoTwoTone-FuykDER9.js";import"./mutation-ClyIXRCV.js";import"./dayjs.min-B30jtBEV.js";import"./chunk-AYJ5UCUI-Do7oMhra.js";import"./cloneDeep-DyVOe_3L.js";import"./_initCloneObject-F6eDGnab.js";import"./isEqual-1qT8SkT_.js";import"./merge-B4L7tGLW.js";import"./util-DfjEQqpE.js";import"./HelpPopover-J-jdt4QG.js";import"./MarkdownPopover-DWNkmjVw.js";import"./LightTooltip-B-YU86PB.js";import"./MarkdownSynapse-CKtQmUVq.js";import"./useMutation-OxRW4evI.js";import"./SkeletonButton-DWszxauG.js";import"./SkeletonInlineBlock-3HpDN67J.js";import"./SkeletonTable-CfBcHAeE.js";import"./SkeletonParagraph-D_pzPeXO.js";import"./HelpOutlineTwoTone-wxJo8PkE.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const kt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,kt as __namedExportsOrder,Lt as default};
