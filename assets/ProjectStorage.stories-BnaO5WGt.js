import{g as i}from"./entityHandlers-BFnQEU5z.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-B5LO1uxe.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-BFbYeQCk.js";import{g as m}from"./userProfileHandlers-CQLuHOXE.js";import{P as L}from"./ProjectDataAvailability-BDNkeePa.js";import"./index-B94k0GSW.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DNCyEvFM.js";import"./mockTeam-D6XW1WRU.js";import"./SynapseConstants-Olv1Zxsm.js";import"./OrientationBanner-BXuTAg1A.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DIfqU3_E.js";import"./index-eFl-S8ON.js";import"./iframe-Bwktd0AN.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAjnC65B.js";import"./FullWidthAlert-DJNHmQMq.js";import"./Alert-BDyGXl7E.js";import"./createTheme-CLYM1FUC.js";import"./DefaultPropsProvider-DA0U_kgt.js";import"./useSlot-DH6QMbEO.js";import"./useForkRef-jNhyWntA.js";import"./createSimplePaletteValueFilter-D1o4f4ux.js";import"./createSvgIcon-CnwVkhPD.js";import"./Close-DBIfCGXf.js";import"./IconButton-BfaoKVbM.js";import"./useTimeout-C_PuK_9Y.js";import"./ButtonBase-7gRlsKFg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-W9eU435C.js";import"./Paper-CxU6RlC_.js";import"./useTheme-BFWFuju5.js";import"./useTheme-CJmN68Ix.js";import"./Stack-CCfAF-IQ.js";import"./extendSxProp-_bdPkhlD.js";import"./getThemeProps-CFhiInyd.js";import"./Box-DohQnecE.js";import"./AlertTitle-DHUMM-no.js";import"./Typography-CP_QeUGL.js";import"./index-8yy629tL.js";import"./ClickAwayListener-DVltpB5j.js";import"./getReactElementRef-DAdCLlMf.js";import"./index-DJsR3SOo.js";import"./index-DjGKRKV1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BBlT1Etq.js";import"./Tooltip-ChkUZoxB.js";import"./index-CTdLJCZx.js";import"./useControlled-Bq2zjJFV.js";import"./Popper-BGtMDbHv.js";import"./Button-C4ZeJCRl.js";import"./uniqueId-BGOLeDwJ.js";import"./toString-BXxYD4qa.js";import"./isArray-C5VllVpE.js";import"./isSymbol-JKNDZO16.js";import"./times-CgPLg9gi.js";import"./_Uint8Array-l2RPaGmH.js";import"./identity-DKeuBCMA.js";import"./toInteger-DUbAFJhw.js";import"./mockTableEntity-CHN6j7MJ.js";import"./mockFileEntityACLVariants-CidWo3yq.js";import"./fakerUtils-CS_nFnMk.js";import"./mockFileEntity-CTCbR4d5.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-DbXo0O8x.js";import"./mockSchema-BtHhcujH.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-Dze-Gcid.js";import"./QueryClientProvider-JY8B-ej3.js";import"./Link-Da7z_I0z.js";import"./Collapse-BJSa4r00.js";import"./_baseUniq-CBn-njXz.js";import"./_getTag-Do2m6-7_.js";import"./isEqual-bbIu23Cq.js";import"./merge-OOrelz3k.js";import"./_initCloneObject-kc9We_Be.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dx5i-c0V.js";import"./inputBaseClasses-BTx6rMf0.js";import"./calculateFriendlyFileSize-Dq2slKjG.js";import"./CheckCircleTwoTone-C0G3ehLD.js";import"./InfoTwoTone-BfDmBmuP.js";import"./useMutation-D8DuA68J.js";import"./dayjs.min-DiFORWWY.js";import"./chunk-AYJ5UCUI-CuvoydLy.js";import"./cloneDeep-BJdQ3bik.js";import"./Skeleton-YXjxykSC.js";import"./HelpPopover-CKwG0m4R.js";import"./MarkdownPopover-DVzhH_Ry.js";import"./LightTooltip-D_NK1H6k.js";import"./MarkdownSynapse-D3u-QhZW.js";import"./SkeletonButton-DOu_-5Qd.js";import"./SkeletonInlineBlock-CPoFHrvU.js";import"./SkeletonTable-BfdZFVLE.js";import"./SkeletonParagraph-Bxft6q4T.js";import"./HelpOutlineTwoTone-CIuCWHZT.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
