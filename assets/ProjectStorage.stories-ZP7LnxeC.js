import{g as i}from"./entityHandlers-CJySu2V0.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DaAs4C7F.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-BSnXYJET.js";import{g as m}from"./userProfileHandlers-Dc2NVzoV.js";import{P as L}from"./ProjectDataAvailability-DYJHutzt.js";import"./index-BgWDXQVH.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BmxXp5_k.js";import"./mockTeam-Cq5e4d4F.js";import"./SynapseConstants-Z3CRsZYt.js";import"./OrientationBanner-CC_XtpV_.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Ff6_4CvW.js";import"./index-dl3BENNE.js";import"./iframe-YzSniT58.js";import"./spreadSx-CwcO6WA9.js";import"./react-rlO6wCGu.js";import"./FullWidthAlert-CecE_a1y.js";import"./Alert-DgISjGix.js";import"./createTheme-BgxtNNjv.js";import"./DefaultPropsProvider-BY_0FA5C.js";import"./useSlot-CHgzIXs0.js";import"./useForkRef-B_TXRjop.js";import"./createSimplePaletteValueFilter-DEkc7xSs.js";import"./createSvgIcon-6arnPa6T.js";import"./Close-B2mQaGHe.js";import"./IconButton-e0_pjJVh.js";import"./useTimeout-DEPt3vzo.js";import"./ButtonBase-Ch46_Px2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CFPitjFl.js";import"./Paper-irBPXwWY.js";import"./useTheme-gfAm54P6.js";import"./useTheme-9zFXKC6n.js";import"./Stack-CzsLlE0q.js";import"./useThemeProps-DY0zHm8Z.js";import"./getThemeProps-DFkkYRku.js";import"./extendSxProp-BdGy26Iu.js";import"./Box-CinyAz2a.js";import"./AlertTitle-DIoVMWOY.js";import"./Typography-7Hx3-lad.js";import"./index-DrWYxZ6u.js";import"./ClickAwayListener-BXFkIWGN.js";import"./getReactElementRef-OY13IImd.js";import"./index-2OM9t87W.js";import"./index-m5koAVBQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BetBJGpU.js";import"./Tooltip-CVuQHWBZ.js";import"./index-C8O0EzsL.js";import"./useControlled-CILy8dEh.js";import"./Popper-Bf2T5vzu.js";import"./Button-CaS34oa5.js";import"./uniqueId-3nNiaUVm.js";import"./toString-DpPFZSug.js";import"./isArray-CnbFH_tG.js";import"./isSymbol-DMzg5LrJ.js";import"./times-B_VVKwyp.js";import"./_Uint8Array-Bp2iOdm1.js";import"./identity-DKeuBCMA.js";import"./toInteger-B9w54glN.js";import"./mockTableEntity-BOILEX-v.js";import"./mockFileEntityACLVariants-BKl-i470.js";import"./fakerUtils-BFbukJgj.js";import"./mockFileEntity-DdI8dsyX.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BM799TPH.js";import"./mockSchema-CnJYgWZ6.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CB35_T_J.js";import"./QueryClientProvider-kY5BcVat.js";import"./Link-X6fiBXQM.js";import"./Collapse-3grCuIF0.js";import"./_baseUniq-XoRpnQmG.js";import"./_getTag-CXHbED9t.js";import"./isEqual-D0qOQWhk.js";import"./noop-DX6rZLP_.js";import"./merge-NKPcWwcN.js";import"./_initCloneObject-CmAZK0SY.js";import"./tinycolor-Begke6kS.js";import"./Fade-DasqS6yT.js";import"./inputBaseClasses-tyR2w6fO.js";import"./calculateFriendlyFileSize-DLwkHUF4.js";import"./CheckCircleTwoTone-B3hZpcoo.js";import"./InfoTwoTone-C0-NVkTV.js";import"./useMutation-C3rNwsvu.js";import"./dayjs.min-Bf5GrB6_.js";import"./chunk-AYJ5UCUI-DrWBj7YT.js";import"./cloneDeep-CMYyigHX.js";import"./Skeleton-CNwnEJ1Y.js";import"./HelpPopover-fPnSS5jU.js";import"./MarkdownPopover-DIvSejUS.js";import"./LightTooltip-D_7UarYM.js";import"./MarkdownSynapse-Di_SjFv0.js";import"./SkeletonButton-B-iHCEmp.js";import"./SkeletonInlineBlock-Cc3of4cA.js";import"./SkeletonTable-DDzbpDFR.js";import"./SkeletonParagraph-l_CdCVgh.js";import"./HelpOutlineTwoTone-DjV24VQT.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
