import{g as i}from"./entityHandlers-C1okcVuF.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-C0wpA-d_.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DpOm6WjA.js";import{g as m}from"./userProfileHandlers-CQk6IG3R.js";import{P as L}from"./ProjectDataAvailability-BWAA0u62.js";import"./index-B8bvx9bt.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Dahyj0W2.js";import"./mockTeam-DOJD6G4H.js";import"./SynapseConstants-JBI0Es1I.js";import"./OrientationBanner-COPAbD7L.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CwE58A9m.js";import"./index-CjphnBVq.js";import"./iframe-lrU9LFdV.js";import"./spreadSx-CwcO6WA9.js";import"./react-DZcK9S5a.js";import"./FullWidthAlert-CbPGHvf_.js";import"./Alert-CIWmEJq-.js";import"./createTheme-BPIzYAQ4.js";import"./DefaultPropsProvider-8bXZbYL1.js";import"./useSlot-CXduKSdS.js";import"./useForkRef-BCxYFCZR.js";import"./createSimplePaletteValueFilter-DHFVVwmG.js";import"./createSvgIcon-DvMnD2YN.js";import"./Close-rUHC_DQp.js";import"./IconButton-Bs0ai_J-.js";import"./useTimeout-CpGExdCe.js";import"./ButtonBase-DopOzCsI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CIOMIAjp.js";import"./Paper-C_uMHdL9.js";import"./useTheme-JbJccATr.js";import"./useTheme-B9jQ-kBM.js";import"./Stack-WJUHS1r0.js";import"./extendSxProp-BIlFRqHM.js";import"./getThemeProps-uQ8hgx0D.js";import"./Box-CE79B8x9.js";import"./AlertTitle-BH1lsmU_.js";import"./Typography-7Pmswjzs.js";import"./index-DszYsPoe.js";import"./ClickAwayListener-CrAE0rE1.js";import"./getReactElementRef-CLp1aBoV.js";import"./index-CrHb8yv-.js";import"./index-VcmQi6lf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-61qwQvNa.js";import"./Tooltip-TpIeJkLt.js";import"./index-DK18_Xx-.js";import"./useControlled-etNhPZko.js";import"./Popper-DYxd-Od2.js";import"./Button-D4fZkcfM.js";import"./uniqueId-CHPK-Ai5.js";import"./toString-BRMj_vSx.js";import"./isArray-CDuSSvaA.js";import"./isSymbol-gFICiD8Q.js";import"./times-Cdq4Lr5g.js";import"./_Uint8Array-D2ZRe-Ez.js";import"./identity-DKeuBCMA.js";import"./toInteger-DZ8pGUKa.js";import"./mockTableEntity-DARFhZIx.js";import"./mockFileEntityACLVariants-BiP3IIcf.js";import"./fakerUtils-BhT9We-j.js";import"./mockFileEntity-Zxcm8nfW.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-D8Ma0VMo.js";import"./mockSchema-BgzSoz3J.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DkpmWgzX.js";import"./QueryClientProvider-AOo7dBFH.js";import"./Link-pWm405cE.js";import"./Collapse-BuHDYAZF.js";import"./_baseUniq-iWgxwqbF.js";import"./_getTag-CEAP-oYs.js";import"./isEqual--LWBi94p.js";import"./merge-CHhIB990.js";import"./_initCloneObject-DPVuJmCo.js";import"./tinycolor-Begke6kS.js";import"./Fade-Qi7ViT4V.js";import"./inputBaseClasses-C9WzNq0T.js";import"./calculateFriendlyFileSize-BEXL1JFB.js";import"./CheckCircleTwoTone-C_snamD8.js";import"./InfoTwoTone-C2eBdVRG.js";import"./useMutation-CsZj5iug.js";import"./dayjs.min-DJQA-fAv.js";import"./chunk-AYJ5UCUI-Cw3dHB7K.js";import"./cloneDeep-DmQugvYe.js";import"./Skeleton-BueRTKgW.js";import"./HelpPopover-C5ON344P.js";import"./MarkdownPopover-Z6iY3VXD.js";import"./LightTooltip-D8ROftb6.js";import"./MarkdownSynapse-DxNkxYgm.js";import"./SkeletonButton-zwSPCLKI.js";import"./SkeletonInlineBlock-u1h7-qEB.js";import"./SkeletonTable-CAyTR4rk.js";import"./SkeletonParagraph-KRIZiwDr.js";import"./HelpOutlineTwoTone-Bcuekl8E.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var _,P,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,u,j;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const ur=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,ur as __namedExportsOrder,Er as default};
