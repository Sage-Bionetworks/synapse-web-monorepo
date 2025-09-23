import{g as i}from"./entityHandlers-33NuAaY-.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CSpN989q.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DoQ81o4Z.js";import{g as m}from"./userProfileHandlers-BbMp7TKS.js";import{P as L}from"./ProjectDataAvailability-tQRik0y-.js";import"./index-CuqBS_2U.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Uidz4hOE.js";import"./mockTeam-CWkhXoT2.js";import"./SynapseConstants-BYmnDa2q.js";import"./OrientationBanner-VaVGF65z.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-ho4g8501.js";import"./index-DTiucX1-.js";import"./iframe-BPdeJRIc.js";import"./spreadSx-CwcO6WA9.js";import"./react-F5ucaG-H.js";import"./FullWidthAlert-Ba9F-jmT.js";import"./Alert-B41bfpeU.js";import"./createTheme-CdBGe3A9.js";import"./DefaultPropsProvider-GHBqEJT2.js";import"./useSlot-I8FLieFo.js";import"./useForkRef-DLJbdNV-.js";import"./createSimplePaletteValueFilter-DxGY06TG.js";import"./createSvgIcon-BTFgaDhp.js";import"./Close-lSmauOAH.js";import"./IconButton-DYtoyTee.js";import"./useTimeout-C3q3_1GQ.js";import"./ButtonBase-CODV-5ol.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DgaFUJOs.js";import"./Paper-wVWwCaVf.js";import"./useTheme-BI99mBpH.js";import"./useTheme-DjT_8-R5.js";import"./Stack-08nnDyO9.js";import"./extendSxProp-lrmHIORZ.js";import"./getThemeProps-DD6PYkmp.js";import"./Box-m6d38t7d.js";import"./AlertTitle-D4RtFlat.js";import"./Typography-SEe_jd4g.js";import"./index-Bcg5C1w6.js";import"./ClickAwayListener-BqkOztd0.js";import"./getReactElementRef-D4EdHFTt.js";import"./index-EXgdFXVC.js";import"./index-DHZ9XFHD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bxaf_lLg.js";import"./Tooltip-lkEFrFtR.js";import"./index-DeTyZKLb.js";import"./useControlled-ChiK7g5q.js";import"./Popper-3uMhxsXW.js";import"./Button-RFo2xAOi.js";import"./uniqueId-Y_JtGaxs.js";import"./toString-BC7U3RQ1.js";import"./isArray-4pmS_fD6.js";import"./isSymbol-DuyNHKdV.js";import"./times-D0TetY3b.js";import"./_Uint8Array-BPSdPbUW.js";import"./identity-DKeuBCMA.js";import"./toInteger-DCqYpy_N.js";import"./mockTableEntity-Ek1hq9cc.js";import"./mockFileEntityACLVariants-DTwq5g38.js";import"./fakerUtils-CMjO6Guj.js";import"./mockFileEntity-BOC7AZBl.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CZRM8ajA.js";import"./mockSchema-C2hPfwqd.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DySft6ts.js";import"./QueryClientProvider-Br6Pa3c6.js";import"./Link-DkqxuGR5.js";import"./Collapse-B0SFoJWz.js";import"./_baseUniq-kecnPfBf.js";import"./_getTag-Bq4R2FwC.js";import"./isEqual-BojHzzbq.js";import"./merge-Xk0KA-e4.js";import"./_initCloneObject-QfqTw_-S.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bh3JWz5y.js";import"./inputBaseClasses-DHVG9zCC.js";import"./calculateFriendlyFileSize-CBs-QxsO.js";import"./CheckCircleTwoTone-vWDfNogy.js";import"./InfoTwoTone-DNofee99.js";import"./useMutation-QRG3uNAG.js";import"./dayjs.min-Brm1XBLT.js";import"./chunk-AYJ5UCUI-DnCbA0Sb.js";import"./cloneDeep-CYQ_RdzJ.js";import"./Skeleton-B-x23h3k.js";import"./HelpPopover-CiWbXQM1.js";import"./MarkdownPopover-CVJ4rv1f.js";import"./LightTooltip-DCJOHSjF.js";import"./MarkdownSynapse-igGz_Ur-.js";import"./SkeletonButton-CYC1L5mG.js";import"./SkeletonInlineBlock-C1-ytsmf.js";import"./SkeletonTable-ClTmUJZQ.js";import"./SkeletonParagraph-DKH1Tv8K.js";import"./HelpOutlineTwoTone-DC-kvghm.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
