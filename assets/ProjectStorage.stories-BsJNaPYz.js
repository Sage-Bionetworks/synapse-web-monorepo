import{g as i}from"./entityHandlers-D3BPKo-H.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-FKGDO0i0.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-BdtaS5LO.js";import{g as m}from"./userProfileHandlers-sHt61dnx.js";import{P as L}from"./ProjectDataAvailability-03n6R7o4.js";import"./index-fXWv22Sv.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-m3hEPKa5.js";import"./mockTeam-CDLiq7V3.js";import"./SynapseConstants-1tup86se.js";import"./OrientationBanner-wFOLRJbA.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Dm9xm2_f.js";import"./index-BfVXz5Ag.js";import"./iframe-BPJnb6Jo.js";import"./spreadSx-CwcO6WA9.js";import"./react-DPdF_HDn.js";import"./FullWidthAlert-D7gQIHFu.js";import"./Alert-60dOS0Xa.js";import"./createTheme-DJo9Xwcd.js";import"./DefaultPropsProvider-D0yRXNne.js";import"./useSlot-C80kZXPi.js";import"./useForkRef-Bpzs6qo7.js";import"./createSimplePaletteValueFilter-r-PmHHmL.js";import"./createSvgIcon-Do0_SfU5.js";import"./Close-CPHWO9Va.js";import"./IconButton-DeQtcGLQ.js";import"./useTimeout-CsEW3D_k.js";import"./ButtonBase-Cv7odYKj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CIClC7Gy.js";import"./Paper-C20E8Cgc.js";import"./useTheme-C81SUhxs.js";import"./useTheme-B8fsbezS.js";import"./Stack-De9kMocI.js";import"./extendSxProp-CuFQzNrO.js";import"./getThemeProps-CtclWu-w.js";import"./Box-CS1Km4YM.js";import"./AlertTitle-CMg5aJHW.js";import"./Typography-D_5e3gyE.js";import"./index-DFR37g5z.js";import"./ClickAwayListener--cQ_J2-K.js";import"./getReactElementRef-B6TLCFd5.js";import"./index-Cea427Jc.js";import"./index-t2RIHcQ-.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C07EywNj.js";import"./Tooltip-D0rMrlze.js";import"./index-vHk_D0dD.js";import"./useControlled-CQJ1STOz.js";import"./Popper-Z30S9dVL.js";import"./Button-D2bAM9JV.js";import"./uniqueId-BhnyMBVF.js";import"./toString-BjDBuBmB.js";import"./isArray-BuXI0-0e.js";import"./isSymbol-hZJz7tyA.js";import"./times-uccdpEI3.js";import"./_Uint8Array-DrmeFWPX.js";import"./identity-DKeuBCMA.js";import"./toInteger-CC76gooO.js";import"./mockTableEntity-DxhZWvZJ.js";import"./mockFileEntityACLVariants-BCMmt0Be.js";import"./fakerUtils-CBB7tq07.js";import"./mockFileEntity-CwTfMj46.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-DZyr0zkM.js";import"./mockSchema-Dp9xBvfx.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DELzMMV2.js";import"./QueryClientProvider-qgsuxj5j.js";import"./Link-Ce1G5oI1.js";import"./Collapse-DPxPsRRj.js";import"./_baseUniq-h81h2T5v.js";import"./_getTag-r_4sb1yJ.js";import"./isEqual-BIi-LOer.js";import"./merge-BeGPZ09a.js";import"./_initCloneObject-CmBTonNO.js";import"./tinycolor-Begke6kS.js";import"./Fade-C4mFIZyt.js";import"./inputBaseClasses-Cr2M0koQ.js";import"./calculateFriendlyFileSize-Dm5rKT8Q.js";import"./CheckCircleTwoTone-Dwa6jGH6.js";import"./InfoTwoTone-BPDpi3Ad.js";import"./useMutation-BxjyqccJ.js";import"./dayjs.min-BFzgc83H.js";import"./chunk-AYJ5UCUI-B1XrWbGW.js";import"./cloneDeep-Mq5iqCKt.js";import"./Skeleton-nQxz36_4.js";import"./HelpPopover-CyEtATyK.js";import"./MarkdownPopover-BlF_tjMJ.js";import"./LightTooltip-CpVIy3A7.js";import"./MarkdownSynapse-D7VIxLcB.js";import"./SkeletonButton-BzXCbQ30.js";import"./SkeletonInlineBlock-Bl8WXAnb.js";import"./SkeletonTable-CaSRwDap.js";import"./SkeletonParagraph-CqIyv9bE.js";import"./HelpOutlineTwoTone-DnfC-qQi.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
