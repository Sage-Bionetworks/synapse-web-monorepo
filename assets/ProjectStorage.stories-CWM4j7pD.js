import{g as s}from"./entityHandlers-DPbErSBy.js";import{x as C,g as L,b6 as d,B as k,M as r}from"./useFiles-D1zDsRtE.js";import"./VerificationSubmission-DsgC4t7y.js";import"./StringUtils-tNCAfVhp.js";import{l as O}from"./index-CjhV4d9_.js";import{g as a}from"./userProfileHandlers-Br5_5Iw4.js";import{P as N}from"./ProjectDataAvailability-xBAlQFy9.js";import"./index-CM9ZvG3K.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-oIDjQAIi.js";import"./mockTeam-BLTbjfLY.js";import"./SynapseConstants-Ch0rC1P2.js";import"./OrientationBanner-DFyDzGuH.js";import"./jsx-runtime-Mut6b6ZN.js";import"./index-vS9mnyWj.js";import"./iframe-1zaoe6gF.js";import"./index-BGE9F3qY.js";import"./spreadSx-CwcO6WA9.js";import"./react-DHhj6IBI.js";import"./FullWidthAlert-Dmbyyznq.js";import"./Alert-CaW4HrEE.js";import"./createTheme-DpNzE4d4.js";import"./resolveComponentProps-DPiFg_7Y.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B963EUWM.js";import"./createSvgIcon-B9xlizw1.js";import"./DefaultPropsProvider-2M3YnDDd.js";import"./Close-l5PLK5SY.js";import"./IconButton-DWP4WfZS.js";import"./ButtonBase-CFptddls.js";import"./useTimeout-MfSepqIs.js";import"./TransitionGroupContext-DwVNEQzN.js";import"./useIsFocusVisible-BSo-X-iu.js";import"./useEventCallback-7NNh7VNL.js";import"./Paper-pEQNvCle.js";import"./Stack-C83qUTSK.js";import"./getThemeProps-Cc8P44uD.js";import"./useTheme-CJ_GeJUx.js";import"./Box-VEfKzwzZ.js";import"./AlertTitle-DYy2gM_I.js";import"./Typography-C735P2Wu.js";import"./useTheme-CfGNks2Q.js";import"./Grow-Dq35ME0n.js";import"./index-ChtUdljt.js";import"./utils-CMYcSCNM.js";import"./ClickAwayListener-CCYfSXt6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-C4YQYU6J.js";import"./index-BxOngdo6.js";import"./useControlled-Dm40RTb9.js";import"./useId-CTXoB2V5.js";import"./Popper-KpOZuT_B.js";import"./Button-CwJlsjun.js";import"./uniqueId-VRPMji1p.js";import"./toString-C_k0SCF_.js";import"./isObjectLike-Dt3Q8mbv.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-QwRfeqwJ.js";import"./times-Fzmk8-lD.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-C_V5uoft.js";import"./mockTableEntity-DPDjGU54.js";import"./mockFileEntityACLVariants-SGUzSBMi.js";import"./fakerUtils-DHrCKuD_.js";import"./mockFileEntity-BB6N_f2T.js";import"./mock_file_handle-DS_yjaGE.js";import"./mockEntity-yb7QIEVf.js";import"./mockSchema-DeM_tQ5U.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CCyZLsCb.js";import"./utils-CkpiaAWG.js";import"./Link-UtnI4NMQ.js";import"./Collapse-CJSUDuZs.js";import"./isNil-S5XSv3sm.js";import"./_Uint8Array-jbfd-DZF.js";import"./_baseIsEqual-Ci23lrYU.js";import"./_getTag-Puwgzc-K.js";import"./tinycolor-Begke6kS.js";import"./Fade-CYw9ikGp.js";import"./Skeleton-Cq9f4rV_.js";import"./inputBaseClasses-CmBA2hPH.js";import"./calculateFriendlyFileSize-Dgr-X9ZX.js";import"./CheckCircleTwoTone-DHHVQUzF.js";import"./InfoTwoTone-pCgBZYpo.js";import"./mutation-nnr-ZiFk.js";import"./dayjs.min-BzPAf8fo.js";import"./chunk-AYJ5UCUI-cKaE7QDH.js";import"./cloneDeep-C-sRBbU_.js";import"./_initCloneObject-9iu-MeYW.js";import"./isEqual-CuIwC5PF.js";import"./merge-sRA-gjlr.js";import"./util-Re2IkVJ4.js";import"./HelpPopover-B3RT8ZBT.js";import"./MarkdownPopover-DKQzRyKN.js";import"./LightTooltip-B9lL3u_O.js";import"./MarkdownSynapse-72NTH1Ou.js";import"./useMutation-BjQNG8bx.js";import"./SkeletonButton-3krPt36-.js";import"./SkeletonInlineBlock-BMTN9F7v.js";import"./SkeletonTable-DaO5p_8Z.js";import"./SkeletonParagraph-BLNI0khD.js";import"./HelpOutlineTwoTone-DNf4-4jH.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
