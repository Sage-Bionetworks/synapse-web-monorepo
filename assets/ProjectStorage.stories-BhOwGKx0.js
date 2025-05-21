import{g as s}from"./entityHandlers-DFEMR9V8.js";import{x as C,g as L,ba as d,B as k,M as r}from"./useFiles-DQomEVun.js";import"./VerificationSubmission-B0kBNeMy.js";import"./StringUtils-CzgJJW-6.js";import{l as O}from"./index-CiL54TVM.js";import{g as a}from"./userProfileHandlers-Dr2SsjC4.js";import{P as N}from"./ProjectDataAvailability-Bya2znWT.js";import"./index-09iZtkze.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-BKPpN2NR.js";import"./mockTeam-BTa_Z9Ss.js";import"./SynapseConstants-CXcV-nUb.js";import"./OrientationBanner-C_iS06Ns.js";import"./jsx-runtime-vh0p6n0c.js";import"./index-DeX7QLnK.js";import"./iframe-Dz9QNSIS.js";import"./index-B5Paye-i.js";import"./spreadSx-CwcO6WA9.js";import"./react-zapmL7RU.js";import"./FullWidthAlert-BGfrn--X.js";import"./Alert-hlGtq58G.js";import"./createTheme-D_Nq0pYz.js";import"./resolveComponentProps-C3DQMbGC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D_vAhRI1.js";import"./createSvgIcon-BLNG6c_9.js";import"./DefaultPropsProvider-tfjonuSR.js";import"./Close-2nHrK--Y.js";import"./IconButton-BE7RjaP6.js";import"./ButtonBase-C0uTtWXh.js";import"./useTimeout-CnvRux1B.js";import"./TransitionGroupContext-Bk5PxsO_.js";import"./useIsFocusVisible-D78Je22A.js";import"./useEventCallback-BvK-inDl.js";import"./Paper-CrvSRQHk.js";import"./Stack-BXqHkzqU.js";import"./getThemeProps-CmqkWx3T.js";import"./useTheme-CU31NEYo.js";import"./Box-FOgVp8fD.js";import"./AlertTitle-Cto3bigq.js";import"./Typography-DnatgZXD.js";import"./useTheme-Bt3ZmCgz.js";import"./Grow-YfXnsoA7.js";import"./index-CoE_GtHh.js";import"./utils-B9T-diIo.js";import"./ClickAwayListener-CqBPamoh.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B6hgiwNh.js";import"./index-C-slG4EV.js";import"./useControlled-DXoD7LBp.js";import"./useId-VNLmTyT9.js";import"./Popper-DxQPaj6k.js";import"./Button-CgAeDyY5.js";import"./uniqueId-aH3pAQSh.js";import"./toString-CW6JUJh5.js";import"./isObjectLike-DkxRSzUr.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DiSEgX0Q.js";import"./times-CXVCkMin.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-C0wH07DI.js";import"./mockTableEntity-CO1dZNiD.js";import"./mockFileEntityACLVariants-DuyIJEAC.js";import"./fakerUtils-LXXpeTpE.js";import"./mockFileEntity-DazHL2yh.js";import"./mock_file_handle-Ct1MSfYs.js";import"./mockEntity-BCBR28R7.js";import"./mockSchema-BYiFsN0w.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-C6R-wX43.js";import"./utils-E3uMvwn6.js";import"./Link-CxU-Z6uq.js";import"./Collapse-DVKT910h.js";import"./isNil-DRpjLwQd.js";import"./_Uint8Array-DO9JwxIS.js";import"./_baseIsEqual-BocUTVTM.js";import"./_getTag-Ctolf7Nh.js";import"./tinycolor-Begke6kS.js";import"./Fade-DrP2MKDE.js";import"./Skeleton-BUTy_UuT.js";import"./inputBaseClasses-DiqPll0m.js";import"./calculateFriendlyFileSize-8ac87dam.js";import"./CheckCircleTwoTone-uvYbkrv9.js";import"./InfoTwoTone-BUHLQ4H9.js";import"./mutation-BlIrrZqO.js";import"./dayjs.min-3iMEg4-E.js";import"./chunk-AYJ5UCUI-B8oIr-Ax.js";import"./cloneDeep-BN-Uvubu.js";import"./_initCloneObject-bSDXZj5t.js";import"./isEqual-DX-ARlL8.js";import"./merge-lJvdJtPI.js";import"./util-CdHYbc7z.js";import"./HelpPopover-C68yharR.js";import"./MarkdownPopover-BTAnvB4r.js";import"./LightTooltip-DDx26Bqe.js";import"./MarkdownSynapse-BadScrZ2.js";import"./SkeletonButton-QodrV1k1.js";import"./SkeletonInlineBlock-BzoqpDRQ.js";import"./SkeletonTable-DzWxUjn_.js";import"./SkeletonParagraph-OP5oZFIh.js";import"./HelpOutlineTwoTone-CwKYGIkE.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
