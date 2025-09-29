import{g as i}from"./entityHandlers-BM-0HbPZ.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DkJCHeA3.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-p2gxLfTe.js";import{g as m}from"./userProfileHandlers-BTs10-xw.js";import{P as L}from"./ProjectDataAvailability-DzhZAkQu.js";import"./index-AlB_RZdw.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-nNOtsmHZ.js";import"./mockTeam-Ck-PBlX9.js";import"./SynapseConstants-DAiqgyg1.js";import"./OrientationBanner-D4wTKRw8.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DRNEewT0.js";import"./index-BiZonhDH.js";import"./iframe-KhA6412S.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bf6tZNz9.js";import"./FullWidthAlert-CEBDcxDb.js";import"./Alert-Si5Sm7uX.js";import"./createTheme-1jm5ezYP.js";import"./DefaultPropsProvider-CWzj9DzQ.js";import"./useSlot-xBg9ATiI.js";import"./useForkRef-BESM7ku1.js";import"./createSimplePaletteValueFilter-Cihnsp1l.js";import"./createSvgIcon-CrhVCK6n.js";import"./Close-C2_S8l8h.js";import"./IconButton-CzceikyK.js";import"./useTimeout-DJBvZtwQ.js";import"./ButtonBase-DbSCIXDh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CWj0IvOC.js";import"./Paper-ABqWba6I.js";import"./useTheme-B6M16tYP.js";import"./useTheme-BMWmfRcC.js";import"./Stack-DWSzmDyR.js";import"./extendSxProp-A_0H_slr.js";import"./getThemeProps-Db880qGR.js";import"./Box-BUnumDhd.js";import"./AlertTitle-BszRCW5W.js";import"./Typography-BETUzylk.js";import"./index-B3yBNt-L.js";import"./ClickAwayListener-DxBKDWMy.js";import"./getReactElementRef-d88flgGN.js";import"./index-Y07cJu9Y.js";import"./index-Xo5PhUpn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DyIUulWJ.js";import"./Tooltip-Bo4_h0TM.js";import"./index-Bs9Rydsp.js";import"./useControlled-DxMP8c3u.js";import"./Popper-I1BUdcss.js";import"./Button-BryWV2Kx.js";import"./uniqueId-lLF_zJ3l.js";import"./toString-DimUG_hT.js";import"./isArray-CDuRcB0M.js";import"./isSymbol-BhkmuJt6.js";import"./times-BMqDTTIB.js";import"./_Uint8Array-BuKzuZ_U.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bduhqu2B.js";import"./mockTableEntity-lKcMNos0.js";import"./mockFileEntityACLVariants-CXta3JOz.js";import"./fakerUtils-CBObp5ZO.js";import"./mockFileEntity-CJ0_kQXR.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BflDuc7c.js";import"./mockSchema-GXoRJ1q6.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DtcY72pw.js";import"./QueryClientProvider-CnMpTV32.js";import"./Link-DyfbRNUw.js";import"./Collapse-A2nC22g8.js";import"./_baseUniq-B6yOCfKH.js";import"./_getTag-Bf7qzLHR.js";import"./isEqual-Bin5dEGo.js";import"./merge-CHIVU8Rn.js";import"./_initCloneObject-CMoDBQQ6.js";import"./tinycolor-Begke6kS.js";import"./Fade-BtLpzY4K.js";import"./inputBaseClasses-CplbFm5w.js";import"./calculateFriendlyFileSize-CxNXhpME.js";import"./CheckCircleTwoTone-CJ92NpYr.js";import"./InfoTwoTone-39J4YKRz.js";import"./useMutation-CHMb5Grd.js";import"./dayjs.min-7SCA9Rrv.js";import"./chunk-AYJ5UCUI-C95cDugv.js";import"./cloneDeep-CR3aRAiR.js";import"./Skeleton-xaP9f2sv.js";import"./HelpPopover-CT8eWsbp.js";import"./MarkdownPopover-B2YwxW1s.js";import"./LightTooltip-Djc_wZIi.js";import"./MarkdownSynapse-CtAwuiri.js";import"./SkeletonButton-DJcFYvzr.js";import"./SkeletonInlineBlock-Dh6VUFge.js";import"./SkeletonTable-DGdS0HXy.js";import"./SkeletonParagraph-DpugCB1g.js";import"./HelpOutlineTwoTone-CoVOdbGJ.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
