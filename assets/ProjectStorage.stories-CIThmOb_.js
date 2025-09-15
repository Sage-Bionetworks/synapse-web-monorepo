import{g as i}from"./entityHandlers-Dmv4Vt4B.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-B0U4gzY5.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./StringUtils-DP1EOPFU.js";import{h as d,H as l}from"./index-D9NI1WBL.js";import{g as m}from"./userProfileHandlers-wTT2Qu63.js";import{P as L}from"./ProjectDataAvailability-CtGlwWgI.js";import"./index-Dss-pz6s.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BV_hCYJr.js";import"./mockTeam-Cj452QUC.js";import"./SynapseConstants-Dtw8JT9K.js";import"./OrientationBanner-BFfM4kQK.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-o3mbyDJ_.js";import"./index-C2PZBrLv.js";import"./iframe-CNTF6X_t.js";import"./spreadSx-CwcO6WA9.js";import"./react-C1E0WWj9.js";import"./FullWidthAlert-C_J5Noie.js";import"./Alert-DNb5zPwV.js";import"./createTheme-D-kospWj.js";import"./DefaultPropsProvider-CC2ZtPmq.js";import"./useSlot-BoukHlmH.js";import"./useForkRef-CUmErhp7.js";import"./createSimplePaletteValueFilter-D08C6jui.js";import"./createSvgIcon-CZi17tUa.js";import"./Close-raPQlKpe.js";import"./IconButton-DL9Auw19.js";import"./useTimeout-BUOTtkI_.js";import"./ButtonBase-ClEqCu4q.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce_-6k31.js";import"./Paper-DlQITwJL.js";import"./useTheme-CWrjHpSC.js";import"./useTheme-CnkkHqH9.js";import"./Stack-Dy4-WgM_.js";import"./extendSxProp-DCZvLCZ1.js";import"./getThemeProps-BghImWoL.js";import"./Box-YD4QvbDf.js";import"./AlertTitle-CJceuYZo.js";import"./Typography-5nQ2YQd7.js";import"./index-D39n2xwi.js";import"./ClickAwayListener-C_f-0IT0.js";import"./getReactElementRef-QZCM3h1T.js";import"./index-BkdGZOWW.js";import"./index-D7wXRBOq.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D045avyu.js";import"./Tooltip-BP3wuRWq.js";import"./index-DgnACGHd.js";import"./useControlled-Chb41gWY.js";import"./Popper-DFXRF7a3.js";import"./Button-c0UHW0MR.js";import"./uniqueId-C1XzCJDS.js";import"./toString-CIV4V4cB.js";import"./isArray-42N_5E-2.js";import"./isSymbol-BlIXNtev.js";import"./times-e_ekP7_6.js";import"./_Uint8Array-B4xmgUBf.js";import"./identity-DKeuBCMA.js";import"./toInteger-C3HrJcJD.js";import"./mockTableEntity-2ed8tEho.js";import"./mockFileEntityACLVariants-COnh0Fnp.js";import"./fakerUtils-AKsdVNVt.js";import"./mockFileEntity-Dn3VK7xB.js";import"./mock_file_handle-BIJh-7D7.js";import"./mockEntity-yz7duRl6.js";import"./mockSchema-B_0tIYT8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DZqyF7W4.js";import"./QueryClientProvider-CTUgZ56q.js";import"./Link-S3cKxk76.js";import"./Collapse-B3YoQXgf.js";import"./_baseUniq-BRoY8VEw.js";import"./_getTag-LSp1chIl.js";import"./isEqual-CMiPFqsp.js";import"./merge-FniWYtdi.js";import"./_initCloneObject-R9J6iBsV.js";import"./tinycolor-Begke6kS.js";import"./Fade-CUlhCYG9.js";import"./inputBaseClasses-DHiWbVro.js";import"./calculateFriendlyFileSize-B_omjKN-.js";import"./CheckCircleTwoTone-CiIEkiU2.js";import"./InfoTwoTone-60mfq9v0.js";import"./useMutation-CBu7Udma.js";import"./dayjs.min-CHEXfb8p.js";import"./chunk-AYJ5UCUI-Cxe4yrTd.js";import"./cloneDeep-DabqN8bB.js";import"./Skeleton-L-wdtKFv.js";import"./HelpPopover-DygNChNq.js";import"./MarkdownPopover-Bi-HR_4u.js";import"./LightTooltip-DvEOFUYP.js";import"./MarkdownSynapse-C-2zgFaM.js";import"./SkeletonButton-B9pJHKOb.js";import"./SkeletonInlineBlock-BV0-yJxG.js";import"./SkeletonTable-BYzdqBTE.js";import"./SkeletonParagraph-DngpqyaY.js";import"./HelpOutlineTwoTone-DKGLDv2E.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
