import{g as i}from"./entityHandlers-CHguZVY6.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-BClQzPd_.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-U2r2o2Dc.js";import{g as m}from"./userProfileHandlers-Br65ehvk.js";import{P as L}from"./ProjectDataAvailability-BiXOZqyw.js";import"./index-C_HWtJAu.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BskAq4Zn.js";import"./mockTeam-CIDjknd0.js";import"./SynapseConstants-Crbzn_Ry.js";import"./OrientationBanner-C_2KtTva.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-XveTqWY_.js";import"./index-DIPSma-8.js";import"./iframe-pWHG4-V3.js";import"./spreadSx-CwcO6WA9.js";import"./react-CjJLDf9z.js";import"./FullWidthAlert-DvmfQSAA.js";import"./Alert-BfqlhAYB.js";import"./createTheme-BCnyntTH.js";import"./DefaultPropsProvider-DRRP-kkU.js";import"./useSlot-BVhmAZ83.js";import"./useForkRef-Dv2QyeiQ.js";import"./createSimplePaletteValueFilter-CJ76haHv.js";import"./createSvgIcon-K8XbMlBz.js";import"./Close-BYbvh11N.js";import"./IconButton-hjV5rJrJ.js";import"./useTimeout-BUI4x_UF.js";import"./ButtonBase-8tnM0huU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DV9Z8mDC.js";import"./Paper-CWKIHkyO.js";import"./useTheme-DowF8vRz.js";import"./useTheme-Ca9VRux3.js";import"./Stack-Ct5i1zqe.js";import"./extendSxProp-BeCKLOzc.js";import"./getThemeProps-y-ympami.js";import"./Box-DSQr_iBE.js";import"./AlertTitle-CC_vgB7h.js";import"./Typography-CTgpIH-9.js";import"./index-CYzCfksS.js";import"./ClickAwayListener-Du3jAaWR.js";import"./getReactElementRef-CO4QYdXs.js";import"./index-v_FsnXN-.js";import"./index-BWgRnEhe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-KuP9oD.js";import"./Tooltip-Dsds8E7o.js";import"./index-tTnYKPjc.js";import"./useControlled-BgooqvV4.js";import"./Popper-DgwcAogc.js";import"./Button-C6SFKzVC.js";import"./uniqueId-cgH6QQh1.js";import"./toString-GlcMFLOV.js";import"./isArray-DqpAAoDI.js";import"./isSymbol-D0R0L29N.js";import"./times-C9TbONpW.js";import"./_Uint8Array-Vsu_wDeX.js";import"./identity-DKeuBCMA.js";import"./toInteger-Dl2JES5A.js";import"./mockTableEntity-9NgGfHNy.js";import"./mockFileEntityACLVariants-Xa1yOLkj.js";import"./fakerUtils-S7CpUeV6.js";import"./mockFileEntity-B8s2mlnx.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-mLLYl-ri.js";import"./mockSchema-EKQQnb6D.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CUKGBENZ.js";import"./QueryClientProvider-Bbt4pomw.js";import"./Link-Cwbmr7vy.js";import"./Collapse-BsNO_Q98.js";import"./_baseUniq-_xM4gfSS.js";import"./_getTag-Cg5v_2BY.js";import"./isEqual-DAP8G2kJ.js";import"./merge-zw24CFQr.js";import"./_initCloneObject-BWhrDYUc.js";import"./tinycolor-Begke6kS.js";import"./Fade-zTaIdEKH.js";import"./inputBaseClasses-CrrDRKY9.js";import"./calculateFriendlyFileSize-B9UWs5PM.js";import"./CheckCircleTwoTone-01_4eItM.js";import"./InfoTwoTone-j3edDpIk.js";import"./useMutation-BHgD24e-.js";import"./dayjs.min-BKB3tabp.js";import"./chunk-AYJ5UCUI-CR13MX7l.js";import"./cloneDeep-Edtnkvi7.js";import"./Skeleton-Cl33dgaN.js";import"./HelpPopover-CbAIxmBU.js";import"./MarkdownPopover-TxZYazpZ.js";import"./LightTooltip-Bs3z5_QW.js";import"./MarkdownSynapse-8bFlGhaT.js";import"./SkeletonButton-Tnux8QPX.js";import"./SkeletonInlineBlock-mjGdl3jK.js";import"./SkeletonTable-DOwj5Pmf.js";import"./SkeletonParagraph-V3yZ__T0.js";import"./HelpOutlineTwoTone-DgRnJeRq.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
