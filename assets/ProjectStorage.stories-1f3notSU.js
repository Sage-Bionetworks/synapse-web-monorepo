import{g as i}from"./entityHandlers-CEmAkmN5.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DPmKtaqp.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DhxQI7UM.js";import{g as m}from"./userProfileHandlers-CiN2vLTS.js";import{P as L}from"./ProjectDataAvailability-B1SRPNRd.js";import"./index-i88kFjgn.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Dc6FQp91.js";import"./mockTeam-BGXh1aqZ.js";import"./SynapseConstants-BbI0AJBI.js";import"./OrientationBanner-lZgnnZcG.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Be2xkMBW.js";import"./index-C4bFWea_.js";import"./iframe-DR_wcsJ3.js";import"./spreadSx-CwcO6WA9.js";import"./react-Diy3wJ2J.js";import"./FullWidthAlert-Bm8mD_nI.js";import"./Alert-Gm8LkqSS.js";import"./createTheme-BKtT3vHL.js";import"./DefaultPropsProvider-CsIOc2_l.js";import"./useSlot-ChH1W-cP.js";import"./useForkRef-CReL5Qun.js";import"./createSimplePaletteValueFilter-foGX4r19.js";import"./createSvgIcon-NOjMq3CR.js";import"./Close-MzmSqWNs.js";import"./IconButton-D1l0t7O6.js";import"./useTimeout-Ch_01VeS.js";import"./ButtonBase-DIEaJI0n.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D37HSALL.js";import"./Paper-C6vQplp2.js";import"./useTheme-C3LmMcRI.js";import"./useTheme-BXNQ9Oj4.js";import"./Stack-wvYbR1wo.js";import"./extendSxProp-T8cT23Rr.js";import"./getThemeProps-DrmqKevn.js";import"./Box-BV9qkT5w.js";import"./AlertTitle-CN8BhV3h.js";import"./Typography-8oN0kMzT.js";import"./index-BgV9qtHJ.js";import"./ClickAwayListener-DGKw14OH.js";import"./getReactElementRef-C5BUXneH.js";import"./index-BqTtgb23.js";import"./index-D8zxXPsW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BSXzewNv.js";import"./Tooltip-Dnd3ZbUN.js";import"./index-BgIpVkb_.js";import"./useControlled-ibM83Vh5.js";import"./Popper-Bg-xoKDy.js";import"./Button-DlngBMCX.js";import"./uniqueId-vxyFupZU.js";import"./toString-D29nv_O4.js";import"./isArray-DZRaET66.js";import"./isSymbol-oe11Mw4O.js";import"./times-D1l0oIKD.js";import"./_Uint8Array-BTv2MYuK.js";import"./identity-DKeuBCMA.js";import"./toInteger-7BbEDMrt.js";import"./mockTableEntity-CvCh1uQa.js";import"./mockFileEntityACLVariants-uip464Ri.js";import"./fakerUtils-DQHMrmOi.js";import"./mockFileEntity-D0R8dfMf.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CzzaPXhC.js";import"./mockSchema-BrAANYtE.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-eVv6WEkZ.js";import"./QueryClientProvider-Bhgh6MhR.js";import"./Link-CzopMOzZ.js";import"./Collapse-C2O0PVYE.js";import"./_baseUniq-o-vnUTJB.js";import"./_getTag-D8MmAh0k.js";import"./isEqual-BaO30kUk.js";import"./merge-ykGFvrTe.js";import"./_initCloneObject-RtGkh5Y0.js";import"./tinycolor-Begke6kS.js";import"./Fade-DiIvNAK2.js";import"./inputBaseClasses-B6_bqzpm.js";import"./calculateFriendlyFileSize-D4ChoND8.js";import"./CheckCircleTwoTone-BO-FnXe-.js";import"./InfoTwoTone-CYADDrkm.js";import"./useMutation-CmFUdHTM.js";import"./dayjs.min-ClxLSL3W.js";import"./chunk-AYJ5UCUI-BOl_xBJE.js";import"./cloneDeep-B1_bHtD-.js";import"./Skeleton-DplS7Xu7.js";import"./HelpPopover-DuGu2-2V.js";import"./MarkdownPopover-IUTFvcJe.js";import"./LightTooltip-BI9pnLwu.js";import"./MarkdownSynapse-BMPmhWyK.js";import"./SkeletonButton-BB1wHKKn.js";import"./SkeletonInlineBlock-BXWq-2P2.js";import"./SkeletonTable-BnM8LOBk.js";import"./SkeletonParagraph-Bj3mpYEA.js";import"./HelpOutlineTwoTone-C93qBrbh.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
