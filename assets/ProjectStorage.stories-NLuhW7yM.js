import{g as i}from"./entityHandlers-8qzC63zS.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-6WrTqGM5.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-BPsY_NwF.js";import{g as m}from"./userProfileHandlers-PBAixkvV.js";import{P as L}from"./ProjectDataAvailability-BTLtJcVX.js";import"./index-BlAZhgix.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-kGER9abo.js";import"./mockTeam-Clz7z4UJ.js";import"./SynapseConstants-Cg_4Agmh.js";import"./OrientationBanner-D8ZR4pD2.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BxSlDoHW.js";import"./index-CsQ_dtFt.js";import"./iframe-BrZuctF3.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNQHEto8.js";import"./FullWidthAlert-BfiXHZxu.js";import"./Alert-Bw88P3_8.js";import"./createTheme-Cmip4D3k.js";import"./DefaultPropsProvider-DllTIwuT.js";import"./useSlot-DdaJYVUE.js";import"./useForkRef-ChoTOfXn.js";import"./createSimplePaletteValueFilter-tlZ8CI8S.js";import"./createSvgIcon-DJcBpyjP.js";import"./Close-BOsW5qMc.js";import"./IconButton-Ci8W1Yhy.js";import"./useTimeout-BfOIeXZu.js";import"./ButtonBase-DphK-mGP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DSIdQNfw.js";import"./Paper-BjTwNz8F.js";import"./useTheme-DzUDjm22.js";import"./useTheme-CBnc1aZ_.js";import"./Stack-B0kdWABf.js";import"./extendSxProp-B3wFOf4h.js";import"./getThemeProps-DpnPGkbN.js";import"./Box-sYcFPFE4.js";import"./AlertTitle-Dl0ipMyg.js";import"./Typography-DrYL7mon.js";import"./index-BLf4na4t.js";import"./ClickAwayListener-DlAC2NUk.js";import"./getReactElementRef-MCnNlpng.js";import"./index-B57y3sov.js";import"./index-CiyvAaLz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CuMuHmpZ.js";import"./Tooltip-wSUIYq70.js";import"./index-30FK6v6B.js";import"./useControlled-Oabr0Ps4.js";import"./Popper-TK99_ULZ.js";import"./Button-BC4TwfXN.js";import"./uniqueId-DD62n-Kh.js";import"./toString-Csx1xCop.js";import"./isArray-BBPx6tkp.js";import"./isSymbol-B4-_uRPL.js";import"./times-v6ageF6D.js";import"./_Uint8Array-BSammFXB.js";import"./identity-DKeuBCMA.js";import"./toInteger-r9Wtkp2I.js";import"./mockTableEntity-rvd7kjvF.js";import"./mockFileEntityACLVariants-Du65fWlc.js";import"./fakerUtils-BZUO8czt.js";import"./mockFileEntity-C3JRv4mk.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-B8B4llfG.js";import"./mockSchema-Bxdb72Rb.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CON6sbsO.js";import"./QueryClientProvider-DrnsKFO0.js";import"./Link-CHIwKtz4.js";import"./Collapse-B5yca7Jx.js";import"./_baseUniq-C3U75rlo.js";import"./_getTag-CdV3gicE.js";import"./isEqual-Bkbn_e1j.js";import"./merge-8_g12ylz.js";import"./_initCloneObject-CFCSuk4S.js";import"./tinycolor-Begke6kS.js";import"./Fade-CupicnC-.js";import"./inputBaseClasses-CXyb78Fj.js";import"./calculateFriendlyFileSize-BR0yD13t.js";import"./CheckCircleTwoTone-qt2LfLaU.js";import"./InfoTwoTone-fzLd9iyA.js";import"./useMutation-CmpFDWM1.js";import"./dayjs.min-crYlBkAO.js";import"./chunk-AYJ5UCUI-DjQcL2EA.js";import"./cloneDeep-s7ZyiLW1.js";import"./Skeleton-CMFgpc0r.js";import"./HelpPopover-D5W8fY3K.js";import"./MarkdownPopover-CF7pP-uk.js";import"./LightTooltip-Bqk_2y4B.js";import"./MarkdownSynapse-Cn291mYQ.js";import"./SkeletonButton-D-P9p8y_.js";import"./SkeletonInlineBlock-CK7WeUvs.js";import"./SkeletonTable-CpI33Rz4.js";import"./SkeletonParagraph-DEFBP7tl.js";import"./HelpOutlineTwoTone-ClzyjO0H.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
