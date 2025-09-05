import{g as i}from"./entityHandlers-C3mvxf1t.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-CQZM7AjY.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-Barfb89O.js";import{g as m}from"./userProfileHandlers-2IIHVM57.js";import{P as L}from"./ProjectDataAvailability-GgWoMkui.js";import"./index-BB_yQ-aX.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Dy_CYnPh.js";import"./mockTeam-BeCcWgr_.js";import"./SynapseConstants-D1Rd9Fix.js";import"./OrientationBanner-CQSEzNQc.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CmJRSThR.js";import"./index-kApR6eUD.js";import"./iframe-C1nR21KR.js";import"./spreadSx-CwcO6WA9.js";import"./react-DHAib5XX.js";import"./FullWidthAlert-_-vUMgq2.js";import"./Alert-B2tMfc0Q.js";import"./createTheme-CSYFy0tJ.js";import"./DefaultPropsProvider-BQKHGYt3.js";import"./useSlot-BJdZFJin.js";import"./useForkRef-ClT4czLv.js";import"./createSimplePaletteValueFilter-BXSts7e0.js";import"./createSvgIcon-CaNkmE0v.js";import"./Close-C_G8zN6d.js";import"./IconButton-CajfBzdr.js";import"./useTimeout-qFNtREIo.js";import"./ButtonBase-Ul-e6mur.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BdT7iClJ.js";import"./Paper-Jv25uXd0.js";import"./useTheme-CB1lVSGz.js";import"./useTheme-Cm7toniF.js";import"./Stack-YS6NY2uD.js";import"./extendSxProp-CXwrbAFG.js";import"./getThemeProps-D9JdBzab.js";import"./Box-CTd7KeGu.js";import"./AlertTitle-TjF0o3BZ.js";import"./Typography-CKnFtURh.js";import"./index-CeYZXjHS.js";import"./ClickAwayListener-DhMDdb_T.js";import"./getReactElementRef-DnTIc2Hk.js";import"./index-BpvY6iLc.js";import"./index-DmsJ0_Ye.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D--k5b0i.js";import"./Tooltip-BSA_yst_.js";import"./index-DVkUNgxp.js";import"./useControlled-6B2E2-2f.js";import"./Popper-DCKxGQ65.js";import"./Button-vFqvsZ_S.js";import"./uniqueId-BkTLsJ7l.js";import"./toString-aMdDXBic.js";import"./isArray-iHViX0It.js";import"./isSymbol-D_icVQ5J.js";import"./times-B3un19ue.js";import"./_Uint8Array-BepIjRsc.js";import"./identity-DKeuBCMA.js";import"./toInteger-ngdKq_TG.js";import"./mockTableEntity-D3aBGZ7A.js";import"./mockFileEntityACLVariants-DNvVzgV8.js";import"./fakerUtils-Bs2ocKCX.js";import"./mockFileEntity-CD3sJ1k8.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-DwOSmtPC.js";import"./mockSchema-BXYxly-h.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-EF-nh5FZ.js";import"./QueryClientProvider-D7uLIhi_.js";import"./Link-BfpLPVbK.js";import"./Collapse-DcHWYaIp.js";import"./_baseUniq-Dl2e6RlB.js";import"./_getTag-CTo9qp6D.js";import"./isEqual-BiownIIs.js";import"./merge-Cg28nVdS.js";import"./_initCloneObject-BPrGxJGL.js";import"./tinycolor-Begke6kS.js";import"./Fade-DqWfp0OJ.js";import"./inputBaseClasses-B7QkOVaL.js";import"./calculateFriendlyFileSize-BFr0UfNA.js";import"./CheckCircleTwoTone-BYpjdEsB.js";import"./InfoTwoTone-mxiRZzIp.js";import"./useMutation-DihXsUK8.js";import"./dayjs.min-BBH-MskI.js";import"./chunk-AYJ5UCUI-CvWcFBw0.js";import"./cloneDeep-8BIV-kZZ.js";import"./Skeleton-Dkoro0nH.js";import"./HelpPopover-BmekG0Az.js";import"./MarkdownPopover-C7Gij1W1.js";import"./LightTooltip-BBeta5Zq.js";import"./MarkdownSynapse-HtYtnbK9.js";import"./SkeletonButton-DDoPuzII.js";import"./SkeletonInlineBlock-_yKfbSF6.js";import"./SkeletonTable-Dk8YTaLF.js";import"./SkeletonParagraph-CbK6rOVM.js";import"./HelpOutlineTwoTone-DHlekmjc.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
