import{g as i}from"./entityHandlers-BVBbKoHw.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-GseVYpjW.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-CRwZzm2I.js";import{g as m}from"./userProfileHandlers-BZUBMJoo.js";import{P as L}from"./ProjectDataAvailability-CES-7sBF.js";import"./index-B0AjtaJT.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B15f1wx-.js";import"./mockTeam-bNrcFpbe.js";import"./SynapseConstants-BecqIzhK.js";import"./OrientationBanner-CMmM2nyC.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-qKI0Fo62.js";import"./index-DUnR2wGU.js";import"./iframe-DxIMUiis.js";import"./spreadSx-CwcO6WA9.js";import"./react-BtLSKeTf.js";import"./FullWidthAlert-CgwAdh3k.js";import"./Alert-OcKEIYp6.js";import"./createTheme-BeLomVuw.js";import"./DefaultPropsProvider-Ch4-9Ppr.js";import"./useSlot-QI6ENMq9.js";import"./useForkRef-12BzkMWI.js";import"./createSimplePaletteValueFilter-DXXCLVZW.js";import"./createSvgIcon-BP5oj4Nx.js";import"./Close-CNp0-j0C.js";import"./IconButton-CxtjwAaM.js";import"./useTimeout-NW5ssq_A.js";import"./ButtonBase-cWAJQrxa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B4vna3RV.js";import"./Paper-D5jfsf_T.js";import"./useTheme-DqJVsaV_.js";import"./useTheme-Bz9krQHR.js";import"./Stack-DiJhusha.js";import"./extendSxProp-CrNYGNvh.js";import"./getThemeProps-DmCS3g9S.js";import"./Box-DdkmxDon.js";import"./AlertTitle-D82A8tMJ.js";import"./Typography-D4ivI4uJ.js";import"./index-DSC2q4_Y.js";import"./ClickAwayListener-XLfp0UFq.js";import"./getReactElementRef-CFI6Vxtr.js";import"./index-C70ee6RX.js";import"./index-BcO9ILEt.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqG2xl5N.js";import"./Tooltip-D3bJvEAc.js";import"./index-CNaEswH4.js";import"./useControlled-BEh-GGuG.js";import"./Popper-CZN6YGZz.js";import"./Button-B3GtIfhR.js";import"./uniqueId-BUfkwSOZ.js";import"./toString-BKMzG6Be.js";import"./isArray-CHk-r7uL.js";import"./isSymbol-Ba5uo1Dt.js";import"./times-CyZ6BRW1.js";import"./_Uint8Array-DhmTz7H2.js";import"./identity-DKeuBCMA.js";import"./toInteger-rN0-b999.js";import"./mockTableEntity-X_VM_eJd.js";import"./mockFileEntityACLVariants-BN0Y-3iY.js";import"./fakerUtils-D6E8lmZZ.js";import"./mockFileEntity-ByJogReF.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-DFchf-Yb.js";import"./mockSchema-D31t68V7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BoJvFqc3.js";import"./QueryClientProvider-CmpDJ9Jl.js";import"./Link-BLcNJuX4.js";import"./Collapse-DOavcrSg.js";import"./_baseUniq-BhG86eyQ.js";import"./_getTag-C-hzITuP.js";import"./isEqual-CRTjFSJk.js";import"./merge-DwBHZN9j.js";import"./_initCloneObject-Uix_53RU.js";import"./tinycolor-Begke6kS.js";import"./Fade-BiglsW2E.js";import"./inputBaseClasses-C0Gy_uNc.js";import"./calculateFriendlyFileSize-DgnhvtUi.js";import"./CheckCircleTwoTone-BuvGG69W.js";import"./InfoTwoTone-DXv8Re3u.js";import"./useMutation-4FuFtcke.js";import"./dayjs.min-DjHfNNqw.js";import"./chunk-AYJ5UCUI-C211ZVfw.js";import"./cloneDeep-NhLAab3Z.js";import"./Skeleton-BpQQLQwA.js";import"./HelpPopover-MDUDfhmv.js";import"./MarkdownPopover-Dxy9p0RS.js";import"./LightTooltip-DcsONE1_.js";import"./MarkdownSynapse-CH79z1jT.js";import"./SkeletonButton-qO6NDYYY.js";import"./SkeletonInlineBlock-BSEr0iih.js";import"./SkeletonTable-C84jxVAM.js";import"./SkeletonParagraph-C3kdU6O9.js";import"./HelpOutlineTwoTone-XteO15oZ.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
