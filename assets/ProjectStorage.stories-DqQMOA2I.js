import{g as i}from"./entityHandlers-BKyoUbId.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-dk1thily.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-iLh_QuY-.js";import{g as m}from"./userProfileHandlers-JMbk8nb4.js";import{P as L}from"./ProjectDataAvailability-CpJnIMba.js";import"./index-DxqY4nnV.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CYX7STfT.js";import"./mockTeam-CtjkcPyK.js";import"./SynapseConstants-KeGsajGR.js";import"./OrientationBanner-D437S5nk.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DEdxnbu2.js";import"./index-DUdYTmGT.js";import"./iframe-BdB6XJHD.js";import"./spreadSx-CwcO6WA9.js";import"./react-GmtzOC26.js";import"./FullWidthAlert-B3oyLgJH.js";import"./Alert-moQJ5G_4.js";import"./createTheme-DWFPzI--.js";import"./DefaultPropsProvider-DyEeNxXZ.js";import"./useSlot-BkaT3gs9.js";import"./useForkRef-Ck-u4s--.js";import"./createSimplePaletteValueFilter-uLvstcBV.js";import"./createSvgIcon-CaC1UKxt.js";import"./Close-CfWvUmDT.js";import"./IconButton-BBKovbiE.js";import"./useTimeout-V3giDCFR.js";import"./ButtonBase-DcQPpRud.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D4Nuac2l.js";import"./Paper-CU61ixE5.js";import"./useTheme-B83Lx1Yt.js";import"./useTheme-C1Ce151G.js";import"./Stack-Bo4LyGjf.js";import"./extendSxProp-S57QbXtS.js";import"./getThemeProps-7dtkUy7e.js";import"./Box-nePxhetE.js";import"./AlertTitle-DJtNofrQ.js";import"./Typography-C2z_Zh6j.js";import"./index-D1afb3t5.js";import"./ClickAwayListener-DEf6_Xwi.js";import"./getReactElementRef-Cz-ckvWn.js";import"./index-DwSYObV4.js";import"./index-yS8BlOB_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B9hk4yxs.js";import"./Tooltip-bSFGcH92.js";import"./index-B4oHC8c-.js";import"./useControlled-DMxpFoel.js";import"./Popper-D12HzteZ.js";import"./Button-BR3jAR33.js";import"./uniqueId-DIGXZYbK.js";import"./toString-ELhlQwan.js";import"./isArray-HsSskGIt.js";import"./isSymbol-FSXbKjwY.js";import"./times-CebaOTze.js";import"./_Uint8Array-Cw0eJEb3.js";import"./identity-DKeuBCMA.js";import"./toInteger-CkXMamp4.js";import"./mockTableEntity-cMxswIv0.js";import"./mockFileEntityACLVariants-BuXGKxC9.js";import"./fakerUtils-ClD1GMml.js";import"./mockFileEntity-CXwmukjp.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-Di0umKm8.js";import"./mockSchema-HxXCTFIp.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-SO-6-VdB.js";import"./QueryClientProvider-3LpSImf3.js";import"./Link-DFKa6a8_.js";import"./Collapse-BMSdPa9t.js";import"./_baseUniq-sr8vBqLy.js";import"./_getTag-BuCIjrxV.js";import"./isEqual-1CR8dmm0.js";import"./merge-01PMaHOz.js";import"./_initCloneObject-ChW2f-gZ.js";import"./tinycolor-Begke6kS.js";import"./Fade-BrDAfqPP.js";import"./inputBaseClasses-BvzR5aac.js";import"./calculateFriendlyFileSize-CWTRee5o.js";import"./CheckCircleTwoTone-B0aYIoVs.js";import"./InfoTwoTone-BIM_DGH9.js";import"./useMutation-bbCrE7-i.js";import"./dayjs.min-BC_L2v2b.js";import"./chunk-AYJ5UCUI-B7YF2jCw.js";import"./cloneDeep-DtGhnbbh.js";import"./Skeleton-BvoupDet.js";import"./HelpPopover-DfWj1WFM.js";import"./MarkdownPopover-LUbJTNJF.js";import"./LightTooltip-Bhex8sM0.js";import"./MarkdownSynapse-B_5oOpFD.js";import"./SkeletonButton-4kJXBsWi.js";import"./SkeletonInlineBlock-fk7f2_hO.js";import"./SkeletonTable-B7LKy_GN.js";import"./SkeletonParagraph-BFV2fqCs.js";import"./HelpOutlineTwoTone-BEGZz0xe.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
