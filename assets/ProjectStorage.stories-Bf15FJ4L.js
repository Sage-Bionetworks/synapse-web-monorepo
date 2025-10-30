import{g as i}from"./entityHandlers-9kP0PQ7g.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BD4KcggH.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-UBrnlL6I.js";import{g as m}from"./userProfileHandlers-CeLb4RBa.js";import{P as L}from"./ProjectDataAvailability-DBJ48Cjk.js";import"./index-ZFVPRjrs.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B5PFczfM.js";import"./mockTeam-DV2_6CZ6.js";import"./SynapseConstants-C5fJ6W9x.js";import"./OrientationBanner-B1U-JKpH.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CApIUj-F.js";import"./index-CTBfKjC4.js";import"./iframe-gTIDAZQg.js";import"./spreadSx-CwcO6WA9.js";import"./react-CubyAX3H.js";import"./FullWidthAlert-DhFPV9iX.js";import"./Alert-WGmoL_4K.js";import"./createTheme-BeM14ukj.js";import"./DefaultPropsProvider-CodfpIlO.js";import"./useSlot-BQo3_OIz.js";import"./useForkRef-BbhCp5rg.js";import"./createSimplePaletteValueFilter-CPaswB4Q.js";import"./createSvgIcon-D58Sw3_z.js";import"./Close-BKdI9nH5.js";import"./IconButton-CqHRM4EF.js";import"./useTimeout-BvDOFDRr.js";import"./ButtonBase-mbVOgLji.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BpCYYZDo.js";import"./Paper-B8lFXjj-.js";import"./useTheme-BDDIZjtd.js";import"./useTheme-BA2R1Ps9.js";import"./Stack-DIijSgme.js";import"./useThemeProps-CMVD1ZMq.js";import"./getThemeProps-DqlpC9Mi.js";import"./extendSxProp-BZCmJIiL.js";import"./Box-Vn1G5ew2.js";import"./AlertTitle-CHQ1Ywle.js";import"./Typography-CE5_NmU_.js";import"./index-q0agkvi3.js";import"./ClickAwayListener-BDdlm6vq.js";import"./getReactElementRef-DoTKk2nz.js";import"./index-bPKcxg0x.js";import"./index-BXX3-DP5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D9O_1KqJ.js";import"./Tooltip-thvrSoEP.js";import"./index-CaRzBUHM.js";import"./useControlled-BprndzS8.js";import"./Popper-QoAfo2eP.js";import"./Button-DbuI_meR.js";import"./uniqueId-DGp_Euid.js";import"./toString-BDXAedva.js";import"./isArray-DNhEbc_x.js";import"./isSymbol-DHxFOI7d.js";import"./times-WaCuw9lB.js";import"./_Uint8Array-Dz3m3Swg.js";import"./identity-DKeuBCMA.js";import"./toInteger-CISJsxcP.js";import"./mockTableEntity-C7zwoA0h.js";import"./mockFileEntityACLVariants-p6eDW9nY.js";import"./fakerUtils-COG72Jsw.js";import"./mockFileEntity-Dg2HiTgO.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DH8-Mnul.js";import"./mockSchema-DCRMitzi.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery--gmCGzxD.js";import"./QueryClientProvider-DkLrC5l_.js";import"./Link-Ci8k81v0.js";import"./Collapse-DdwAzucD.js";import"./_baseUniq-CtYXr8Su.js";import"./_getTag-DhnUM1Y3.js";import"./isEqual-BdiSvygy.js";import"./noop-DX6rZLP_.js";import"./merge-BuKZby1l.js";import"./_initCloneObject-CHyCDwZf.js";import"./tinycolor-Begke6kS.js";import"./Fade-B6EkDVCd.js";import"./inputBaseClasses--3QcI5AK.js";import"./calculateFriendlyFileSize-B1f455kq.js";import"./CheckCircleTwoTone-a7_qh5-t.js";import"./InfoTwoTone-D7rp3nLr.js";import"./useMutation-D8cnzs-A.js";import"./dayjs.min-Cu_x3gTh.js";import"./chunk-AYJ5UCUI-H1s9FfhD.js";import"./cloneDeep-BZPNU5xO.js";import"./Skeleton-K5NPRluW.js";import"./HelpPopover-A4UduuZg.js";import"./MarkdownPopover-Dgi4fiXC.js";import"./LightTooltip-DA08tgU-.js";import"./MarkdownSynapse-DYiLMHl-.js";import"./SkeletonButton-8bELaU-d.js";import"./SkeletonInlineBlock-8Hw4SajA.js";import"./SkeletonTable-sf-P4F3m.js";import"./SkeletonParagraph-dGZe7Get.js";import"./HelpOutlineTwoTone-DYpBDULM.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const yr=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,yr as __namedExportsOrder,jr as default};
