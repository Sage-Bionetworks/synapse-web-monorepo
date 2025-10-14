import{g as i}from"./entityHandlers-CkVS4GXZ.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-D3DLEnco.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-BPa6VMf4.js";import{g as m}from"./userProfileHandlers-ziTJeBoc.js";import{P as L}from"./ProjectDataAvailability-VAgLlq2h.js";import"./index-CvJtqju9.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CKCJMSNi.js";import"./mockTeam-k8JjFU1s.js";import"./SynapseConstants-CdVOt2dc.js";import"./OrientationBanner-DY4cNwXq.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-xJTQyrwQ.js";import"./index-ijsm3mBy.js";import"./iframe-2dG-YY9-.js";import"./spreadSx-CwcO6WA9.js";import"./react-BpjFLlG7.js";import"./FullWidthAlert-B3BBpfmE.js";import"./Alert-CksGxhHq.js";import"./createTheme-BxansSaP.js";import"./DefaultPropsProvider-C0BG17d4.js";import"./useSlot-DwNJrAe8.js";import"./useForkRef-BUPBxQCC.js";import"./createSimplePaletteValueFilter-DF0-Q_sR.js";import"./createSvgIcon-Tjl1dYM0.js";import"./Close-BEpv9aVr.js";import"./IconButton-BSE-Wm4J.js";import"./useTimeout-BHJGkgoe.js";import"./ButtonBase-COXFE6tZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DuN8C9YO.js";import"./Paper-Cra7tOWX.js";import"./useTheme-BlIhEXZO.js";import"./useTheme-BguFC_Yf.js";import"./Stack-DkqLNuQk.js";import"./useThemeProps-Dfd8LZYq.js";import"./getThemeProps-D6jrdoYB.js";import"./extendSxProp-D6bOc2yu.js";import"./Box-D11bBFwR.js";import"./AlertTitle-CUnCZtfx.js";import"./Typography-DKWA_FkP.js";import"./index-BYBjn3Mm.js";import"./ClickAwayListener-CeIKyymb.js";import"./getReactElementRef-BqqLpY_U.js";import"./index-BwEXD9Sp.js";import"./index-CLoZ34tt.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ddu7BFI0.js";import"./Tooltip-D4GNWK6u.js";import"./index-DD_DY1ge.js";import"./useControlled-fSPDUO3C.js";import"./Popper-CQCjOtHT.js";import"./Button-sd4ooRmS.js";import"./uniqueId-CtYkggLs.js";import"./toString-CcMvb1PY.js";import"./isArray-CTByjuZm.js";import"./isSymbol-Ce6KKZ8W.js";import"./times-DWVvU70H.js";import"./_Uint8Array-wJdmpIr7.js";import"./identity-DKeuBCMA.js";import"./toInteger-8xUgGmXe.js";import"./mockTableEntity-DvMSDXf6.js";import"./mockFileEntityACLVariants-DnI47Dg9.js";import"./fakerUtils-Cbdzglx3.js";import"./mockFileEntity-twR9uYy5.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CXZLFDXY.js";import"./mockSchema-CfQbDB6U.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DJmCx-dC.js";import"./QueryClientProvider-BMd9N-KC.js";import"./Link-DTbmoeb_.js";import"./Collapse-J-Fir_Qt.js";import"./_baseUniq-xOxQiqA9.js";import"./_getTag-CccqWhF2.js";import"./isEqual-CL_VQgn2.js";import"./noop-DX6rZLP_.js";import"./merge-CJQkSP_u.js";import"./_initCloneObject-COJXPyDD.js";import"./tinycolor-Begke6kS.js";import"./Fade-DPwN_GcI.js";import"./inputBaseClasses-8L5uwA3P.js";import"./calculateFriendlyFileSize-D3lSxj6e.js";import"./CheckCircleTwoTone-DVKZgV-7.js";import"./InfoTwoTone-CAJyCA_f.js";import"./useMutation-BTNFEee6.js";import"./dayjs.min-BMe_1oX1.js";import"./chunk-AYJ5UCUI-BXNkd_hA.js";import"./cloneDeep-Cbc43DTf.js";import"./Skeleton-CxQUKy7B.js";import"./HelpPopover-Co0O_t5G.js";import"./MarkdownPopover-zWeUQx-u.js";import"./LightTooltip-CM94uFgN.js";import"./MarkdownSynapse-DYzXP4SZ.js";import"./SkeletonButton-OG_8qymJ.js";import"./SkeletonInlineBlock-eCtKwkUk.js";import"./SkeletonTable-CidKEXe3.js";import"./SkeletonParagraph-Ciy1WJIp.js";import"./HelpOutlineTwoTone-DYQSKIv2.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
