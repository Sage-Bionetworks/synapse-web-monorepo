import{g as s}from"./entityHandlers-DK2_Tb6E.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-C10gkL60.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-BcZ93NM_.js";import{g as a}from"./userProfileHandlers-peglSv6w.js";import{P as N}from"./ProjectDataAvailability-CUdk4yYR.js";import"./index-DuD9_SHA.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CoNOrhGs.js";import"./mockTeam-Bcwqsbjz.js";import"./SynapseConstants-DVJ44WEh.js";import"./OrientationBanner-CiSCQ_7F.js";import"./jsx-runtime-DxZczy0O.js";import"./index-S5J7S5hv.js";import"./iframe-D3F2GMA7.js";import"./index-DFiExYtk.js";import"./spreadSx-CwcO6WA9.js";import"./react-CeNnC5eF.js";import"./FullWidthAlert-so-_t30t.js";import"./Alert-CqpKQP2G.js";import"./createTheme-DxPmDsXe.js";import"./resolveComponentProps-CaeHLUnl.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3ujZQD1.js";import"./createSvgIcon-DQggPujc.js";import"./DefaultPropsProvider-CA0JTeAn.js";import"./Close-DxYTa1FQ.js";import"./IconButton-DR6tIRVX.js";import"./ButtonBase-CjjADlAH.js";import"./useTimeout-95Uu6vA_.js";import"./TransitionGroupContext-BEFHcCZ7.js";import"./useIsFocusVisible-ji6_XkFI.js";import"./useEventCallback-DPi-ZLqb.js";import"./Paper-BK4Bj4O7.js";import"./Stack-DWwTHUXD.js";import"./getThemeProps-V1ucmu3E.js";import"./useTheme-XnoFM_Wx.js";import"./Box-BVA_w1QW.js";import"./AlertTitle-45qqL5YG.js";import"./Typography-v0POtSOq.js";import"./useTheme-CJBEKZ9c.js";import"./Grow-DmDJqap6.js";import"./index-DUffBxe0.js";import"./utils-BOKoqyc0.js";import"./ClickAwayListener-BEJzrLjm.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CozM-hK3.js";import"./index-41pZ6gO6.js";import"./useControlled-1wnSshbR.js";import"./useId-BwAKmsvV.js";import"./Popper-CjgMXnFP.js";import"./Button-BVtDS0Z4.js";import"./uniqueId-tUOclRlG.js";import"./toString-Bzm3UT7Z.js";import"./isObjectLike-DxYlDsig.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DUuN9trd.js";import"./times-D-Aq82bZ.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CsACraHJ.js";import"./mockTableEntity-DNeZ2LLC.js";import"./mockFileEntityACLVariants-BK1J30G_.js";import"./fakerUtils-BglWUcok.js";import"./mockFileEntity-JpMe2M0I.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-BIKCeJfV.js";import"./mockSchema-DSeDB-Z1.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CAfiiP8Y.js";import"./utils-2N3F0i7m.js";import"./Link-1GOzsUPc.js";import"./Collapse-BlrqS6Dh.js";import"./isNil-CsjaTIlp.js";import"./_Uint8Array-B9EMhkHn.js";import"./_baseIsEqual-Br_DSe-0.js";import"./_getTag-165XvxeE.js";import"./tinycolor-Begke6kS.js";import"./Fade-DSiiFgFh.js";import"./Skeleton-Btxwmn1A.js";import"./inputBaseClasses-CdbVFe9I.js";import"./calculateFriendlyFileSize-CtJxsaxb.js";import"./CheckCircleTwoTone-BQIZghha.js";import"./InfoTwoTone-CYOxB8wk.js";import"./mutation-BPJK6jID.js";import"./dayjs.min-qDEsEwdo.js";import"./chunk-AYJ5UCUI-DO6vE-8k.js";import"./cloneDeep-B7okS4l1.js";import"./_initCloneObject-CvHG9Ysp.js";import"./isEqual-CUPX6WUC.js";import"./merge-CL0PpV51.js";import"./util-wE9um9Y9.js";import"./HelpPopover-DhDqNSPU.js";import"./MarkdownPopover-CMgtND4D.js";import"./LightTooltip-z4VGvyCS.js";import"./MarkdownSynapse-Dnej1XEu.js";import"./SkeletonButton-BR8bMIGW.js";import"./SkeletonInlineBlock-Dkq7-Bpc.js";import"./SkeletonTable-T7Ax6RbE.js";import"./SkeletonParagraph-CkquWa0V.js";import"./HelpOutlineTwoTone-F4QWVnmQ.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
