import{g as i}from"./entityHandlers-wsV0kJkv.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-DuViLq23.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-BuCj7N-e.js";import{g as m}from"./userProfileHandlers-toeFwk2d.js";import{P as L}from"./ProjectDataAvailability-BeW07tRS.js";import"./index-CxN5_hJN.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CCRzB_5Z.js";import"./mockTeam-BFyJybbi.js";import"./SynapseConstants-DY1vPOSt.js";import"./OrientationBanner-DEjvhhkO.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-k8EbPwIf.js";import"./index-Ch_aZLn_.js";import"./iframe-CI5-WtwK.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dle4gBSE.js";import"./FullWidthAlert-DklTb4C2.js";import"./Alert-BXqk_EFs.js";import"./createTheme-DWKcqxZO.js";import"./DefaultPropsProvider-BOR8cixV.js";import"./useSlot-v3S8d4Me.js";import"./useForkRef-DD0BRKwM.js";import"./createSimplePaletteValueFilter-BRtROzR7.js";import"./createSvgIcon-cgSLMIRF.js";import"./Close-sWM4NlLX.js";import"./IconButton-D_JizBUn.js";import"./useTimeout-C3ViWOZE.js";import"./ButtonBase-y5cp9N5N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-iGeWZHKy.js";import"./Paper-DMgTMQqE.js";import"./useTheme-BgBU0W92.js";import"./useTheme-DraLcqT-.js";import"./Stack-DRHl7oE0.js";import"./extendSxProp-BZsQLNzI.js";import"./getThemeProps-Cbe8FKqW.js";import"./Box-r19TyWLG.js";import"./AlertTitle-YoFO0mon.js";import"./Typography-v4sz5jpM.js";import"./index-CFx7Mj6k.js";import"./ClickAwayListener-DIcSIyaF.js";import"./getReactElementRef-8cD_D0A_.js";import"./index-CQOFabK9.js";import"./index-BwE16z8y.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-nN5WW0Nv.js";import"./Tooltip-BfL26sZT.js";import"./index-BIWc0o4N.js";import"./useControlled-CtiBNzN3.js";import"./Popper-D39nZAe3.js";import"./Button-LwXCcibx.js";import"./uniqueId-_sv1IR-x.js";import"./toString-BwNyYB84.js";import"./isArray-DIc-j-dU.js";import"./isSymbol-BFWFicjn.js";import"./times-CvH4XWRv.js";import"./_Uint8Array-Bt1VOqAT.js";import"./identity-DKeuBCMA.js";import"./toInteger-BxsiMvzs.js";import"./mockTableEntity-DIPWXjz7.js";import"./mockFileEntityACLVariants-De9SnFke.js";import"./fakerUtils-CIG1l0vL.js";import"./mockFileEntity-Dr7UnBAS.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-C1_i4Rj1.js";import"./mockSchema-CJSTJo5y.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BlY2-kTk.js";import"./QueryClientProvider-CSJxH1Zj.js";import"./Link-B7Ndy3lm.js";import"./Collapse-a_QEZvvt.js";import"./_baseUniq-BOtOiC6R.js";import"./_getTag-DW3AeXlF.js";import"./isEqual-D-HOqnX0.js";import"./merge-I161Dzxp.js";import"./_initCloneObject-PeUHaPAg.js";import"./tinycolor-Begke6kS.js";import"./Fade-COAO7VK-.js";import"./inputBaseClasses-DXlh6jL0.js";import"./calculateFriendlyFileSize-DtUFCIlM.js";import"./CheckCircleTwoTone-CVULLzOo.js";import"./InfoTwoTone-DJUUXs8t.js";import"./useMutation-DlzCxcO4.js";import"./dayjs.min-DePkvkHB.js";import"./chunk-AYJ5UCUI-VJcsE_sA.js";import"./cloneDeep-DMhImPhU.js";import"./Skeleton-CZxlvoNC.js";import"./HelpPopover-CWe06rWw.js";import"./MarkdownPopover-CVOKukuD.js";import"./LightTooltip-GfIcYbmP.js";import"./MarkdownSynapse-C-g5REht.js";import"./SkeletonButton-D1ylmPHp.js";import"./SkeletonInlineBlock-BymLLxu8.js";import"./SkeletonTable-DowEfYfG.js";import"./SkeletonParagraph-Dit5e4mp.js";import"./HelpOutlineTwoTone-spSdS1xD.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
