import{g as i}from"./entityHandlers-B99EvbaJ.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DAUKQIuz.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-BjkmbXfs.js";import{g as m}from"./userProfileHandlers-BPPwfXNv.js";import{P as L}from"./ProjectDataAvailability-VV2NfclF.js";import"./index-Bezte6wl.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DEsGD6dK.js";import"./mockTeam-CcwQd5rh.js";import"./SynapseConstants-ptYewzyF.js";import"./OrientationBanner-_kC-PSdY.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DdSYxNDW.js";import"./index-F3OlDRPU.js";import"./iframe-DWrAiNuW.js";import"./spreadSx-CwcO6WA9.js";import"./react-CQiWL19i.js";import"./FullWidthAlert-C0tQO5dM.js";import"./Alert-CKgV8xSf.js";import"./createTheme-DAhIYT-q.js";import"./DefaultPropsProvider-Cd0Gz93F.js";import"./useSlot-BZid6he4.js";import"./useForkRef-BJo3Z_u-.js";import"./createSimplePaletteValueFilter-B4BYpzTy.js";import"./createSvgIcon-CifjPXpO.js";import"./Close-Bkkfhvag.js";import"./IconButton-BRQS4WU3.js";import"./useTimeout-BY1gF1wp.js";import"./ButtonBase-CE9Zydrz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DyPJ1xlt.js";import"./Paper-CzObAxXu.js";import"./useTheme-C8ob8KsR.js";import"./useTheme-GfoGaI95.js";import"./Stack-BnkLG2u3.js";import"./extendSxProp-CVuKJmNN.js";import"./getThemeProps-DopSKNma.js";import"./Box-BW-aRCkO.js";import"./AlertTitle-CLDWMYy3.js";import"./Typography-C3oNv7Lx.js";import"./index-BmZDKNdG.js";import"./ClickAwayListener-BK2szM5u.js";import"./getReactElementRef-D-JNnrD6.js";import"./index-B25muIup.js";import"./index-xIDK1h82.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-VoMSPk_y.js";import"./Tooltip-DpuXVHKS.js";import"./index-BuwriByj.js";import"./useControlled-BTMnxbhY.js";import"./Popper-DHPObmJG.js";import"./Button-dxqTEXs9.js";import"./uniqueId-CPofm9ap.js";import"./toString-D1GzTajV.js";import"./isArray-DzTtH0J2.js";import"./isSymbol-Cvebtdw6.js";import"./times-DbsTW-Jw.js";import"./_Uint8Array-AzO7VDN6.js";import"./identity-DKeuBCMA.js";import"./toInteger-E61NVZyE.js";import"./mockTableEntity-DC98ZJqt.js";import"./mockFileEntityACLVariants-q7nRwesa.js";import"./fakerUtils-V_06CiN4.js";import"./mockFileEntity-CBU2vEVw.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BD7DrdOt.js";import"./mockSchema-BlFVtoBa.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DdyJtvdB.js";import"./QueryClientProvider-3nZ8Vgn_.js";import"./Link-BLjn6yhp.js";import"./Collapse-yq6QQpA6.js";import"./_baseUniq-5rt_sj8d.js";import"./_getTag-DZd-TdrH.js";import"./isEqual-xC6FCH9I.js";import"./merge-DRz5Ifpb.js";import"./_initCloneObject-6FTFQYcl.js";import"./tinycolor-Begke6kS.js";import"./Fade-DoIPu-7y.js";import"./inputBaseClasses-YZuK0aY4.js";import"./calculateFriendlyFileSize-D8lL7o7B.js";import"./CheckCircleTwoTone-DwvVQvXI.js";import"./InfoTwoTone-DNgAn7mt.js";import"./useMutation-D94Q-XAu.js";import"./dayjs.min-Cha11me8.js";import"./chunk-AYJ5UCUI-Ca0YKpc9.js";import"./cloneDeep-jeYACF2d.js";import"./Skeleton-C-zuVtl_.js";import"./HelpPopover-DBGpZbck.js";import"./MarkdownPopover-D4mY8jxI.js";import"./LightTooltip-Iy0GY1Mn.js";import"./MarkdownSynapse-CpISO4Z-.js";import"./SkeletonButton-DRHDykKr.js";import"./SkeletonInlineBlock-DqGUZClc.js";import"./SkeletonTable-DPJTdzdr.js";import"./SkeletonParagraph-DAmTyDHL.js";import"./HelpOutlineTwoTone-HB4722mY.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
