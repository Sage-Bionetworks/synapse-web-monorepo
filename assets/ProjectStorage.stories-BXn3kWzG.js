import{g as i}from"./entityHandlers-PNKZ11ZQ.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CBpHv58P.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-ChfRFONg.js";import{g as m}from"./userProfileHandlers-DnB58Rub.js";import{P as L}from"./ProjectDataAvailability-DpULe7ZV.js";import"./index-BAXJIZd3.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BOU7IRg0.js";import"./mockTeam-B7jMHZE2.js";import"./SynapseConstants-BB8wbkbM.js";import"./OrientationBanner-Du3f-tR9.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Fm8jQeAM.js";import"./index-BtWix9sQ.js";import"./iframe-Cv08yFa4.js";import"./spreadSx-CwcO6WA9.js";import"./react-BlbjaeUH.js";import"./FullWidthAlert-BnEnBl4x.js";import"./Alert-DVtdStBt.js";import"./createTheme-ktoUkPej.js";import"./DefaultPropsProvider-BXNHIkBI.js";import"./useSlot-DKWeBjnc.js";import"./useForkRef-BuSSinlC.js";import"./createSimplePaletteValueFilter-CnmFT5tX.js";import"./createSvgIcon-HzOZLsjw.js";import"./Close-BVcsR9b3.js";import"./IconButton-CZsUpVAN.js";import"./useTimeout--jObxLEa.js";import"./ButtonBase-CgmUOH-l.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-E03wEDwK.js";import"./Paper-Cw0PaRlC.js";import"./useTheme-D-5USdIe.js";import"./useTheme-CuAibK35.js";import"./Stack-BeDeiKwc.js";import"./extendSxProp-UwSZzXSO.js";import"./getThemeProps-BWNd5nOj.js";import"./Box-DuA_Yce2.js";import"./AlertTitle-Dv_TOEDI.js";import"./Typography-B226LmTj.js";import"./index-DEPF9eb4.js";import"./ClickAwayListener-BNCBCfT8.js";import"./getReactElementRef-Da_aLcHY.js";import"./index-B2f0J6Vc.js";import"./index-CzUAW5xC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CYCPiNwF.js";import"./Tooltip-DmIpRQZQ.js";import"./index-cY0kajKP.js";import"./useControlled-Ce6JMIHi.js";import"./Popper-0EWmF52X.js";import"./Button-CQOwTSmt.js";import"./uniqueId-DJ0Hwc_g.js";import"./toString-BoO405QA.js";import"./isArray-B3BvSCZr.js";import"./isSymbol-tqL8RBQO.js";import"./times-cSS90Xer.js";import"./_Uint8Array-DlN12aa0.js";import"./identity-DKeuBCMA.js";import"./toInteger-D-O9-r00.js";import"./mockTableEntity-Dqi23-Hb.js";import"./mockFileEntityACLVariants-CXQG7pAC.js";import"./fakerUtils-ZfnDbuv1.js";import"./mockFileEntity-kTMsnbXa.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DUWgi0j1.js";import"./mockSchema-BtvI0AS2.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-D-yII9Pz.js";import"./QueryClientProvider-DDjkFc3A.js";import"./Link-CzF4559g.js";import"./Collapse-Bz60PVFd.js";import"./_baseUniq-j_CNo3xg.js";import"./_getTag-BkVkr5Zs.js";import"./isEqual-B2VBGXuO.js";import"./merge-Cvx1cDVZ.js";import"./_initCloneObject-M-LN7Wl9.js";import"./tinycolor-Begke6kS.js";import"./Fade-gDQRZwXb.js";import"./inputBaseClasses-CJII4L4B.js";import"./calculateFriendlyFileSize-Auh6VuaX.js";import"./CheckCircleTwoTone-juGziiOy.js";import"./InfoTwoTone-CHYqAfpV.js";import"./useMutation-onc65qmw.js";import"./dayjs.min-DmHnQHi3.js";import"./chunk-AYJ5UCUI-d_EWPP8k.js";import"./cloneDeep-mpSPLoHa.js";import"./Skeleton-BB8Tg6m6.js";import"./HelpPopover-DSnck3xG.js";import"./MarkdownPopover-DKXGokVo.js";import"./LightTooltip-DgipfUyR.js";import"./MarkdownSynapse-Bs_NhmPW.js";import"./SkeletonButton-DHHySF3U.js";import"./SkeletonInlineBlock-BQZvMyJy.js";import"./SkeletonTable-BDeiFL3I.js";import"./SkeletonParagraph-CnajRI0l.js";import"./HelpOutlineTwoTone-CnxbLyIJ.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
