import{g as i}from"./entityHandlers-BS3cmiy6.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CKcUsXxo.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-g3VecKVC.js";import{g as m}from"./userProfileHandlers-CBZMpjif.js";import{P as L}from"./ProjectDataAvailability-BfhQBzKB.js";import"./index-BNVUK_qe.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BKenycwC.js";import"./mockTeam-iEJobfRQ.js";import"./SynapseConstants-f1HHzz_j.js";import"./OrientationBanner-m-cOM088.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Dr34NRIV.js";import"./index-Dvc8DXNj.js";import"./iframe-BwvIV_wz.js";import"./spreadSx-CwcO6WA9.js";import"./react-PzVUkSXC.js";import"./FullWidthAlert-CUjAN9qZ.js";import"./Alert-BpXwWVSg.js";import"./createTheme-D21a6jVE.js";import"./DefaultPropsProvider-DUqZ9kBw.js";import"./useSlot-DJuYx4Uy.js";import"./useForkRef-Dhz7ykZQ.js";import"./createSimplePaletteValueFilter-slgZ3hH6.js";import"./createSvgIcon-DW48BYr9.js";import"./Close-DwkY6Qiq.js";import"./IconButton-BPZiwUaT.js";import"./useTimeout-n8UuqgZm.js";import"./ButtonBase-DLjfdFYs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BTmW-fZF.js";import"./Paper-ttVskSGJ.js";import"./useTheme-Dmw3ER-A.js";import"./useTheme-Dc8HS8-T.js";import"./Stack-DrKhoQrj.js";import"./extendSxProp-B4WGgZTT.js";import"./getThemeProps-B50kq3gk.js";import"./Box-CTY3I0FB.js";import"./AlertTitle-gzg991Kd.js";import"./Typography-BhPtSSz2.js";import"./index-BLJFs8HZ.js";import"./ClickAwayListener-BucHVlrs.js";import"./getReactElementRef-IfbnFzgG.js";import"./index-CqCBL84x.js";import"./index--qtQ6bhr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CDAsFndF.js";import"./Tooltip-snkrOiqJ.js";import"./index-DxUDSVJR.js";import"./useControlled-IlM_E7l9.js";import"./Popper-C8rE9mDK.js";import"./Button-CuRvemX1.js";import"./uniqueId-BIZmBIpK.js";import"./toString-FiUiE8JL.js";import"./isArray-9GOQtFcp.js";import"./isSymbol-BxQi0hMS.js";import"./times-CJm66HwN.js";import"./_Uint8Array-DayFYAX9.js";import"./identity-DKeuBCMA.js";import"./toInteger-DMvinDWJ.js";import"./mockTableEntity-LCcGMuV3.js";import"./mockFileEntityACLVariants-BgLduBoS.js";import"./fakerUtils-BaU6WTp5.js";import"./mockFileEntity-WBt7sCsU.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-Bw9yx71L.js";import"./mockSchema-LlmEmg_5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-Bup0EY49.js";import"./QueryClientProvider-ChpI_0EU.js";import"./Link-CLvRSdAZ.js";import"./Collapse-MKzszx7X.js";import"./_baseUniq-WnlZjegG.js";import"./_getTag-BkCGiN6B.js";import"./isEqual-Dks0Mg8j.js";import"./merge-Dy633DfB.js";import"./_initCloneObject-Dqf9gVZ1.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bok-lFku.js";import"./inputBaseClasses-AHLU7mnu.js";import"./calculateFriendlyFileSize-tudez9ms.js";import"./CheckCircleTwoTone-B4GsZuMD.js";import"./InfoTwoTone-cRma8_X6.js";import"./useMutation-CnqeAjOr.js";import"./dayjs.min-DtZNiT87.js";import"./chunk-AYJ5UCUI-C5dJESas.js";import"./cloneDeep-DozhuijG.js";import"./Skeleton-B2H4n811.js";import"./HelpPopover-D5sznNAi.js";import"./MarkdownPopover-DJcQhkmM.js";import"./LightTooltip-Bt6aqifN.js";import"./MarkdownSynapse-BZ3bfxga.js";import"./SkeletonButton-DX_35qgn.js";import"./SkeletonInlineBlock-CJElzRNk.js";import"./SkeletonTable-Bi6Qng0B.js";import"./SkeletonParagraph-BuL4Zb7n.js";import"./HelpOutlineTwoTone-PWWeq9Oj.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
