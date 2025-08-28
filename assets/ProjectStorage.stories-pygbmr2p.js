import{g as i}from"./entityHandlers-DvI95Lvx.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-D02evhEe.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-BL10aT2k.js";import{g as m}from"./userProfileHandlers-DMJIMs2G.js";import{P as L}from"./ProjectDataAvailability-DJZ_-Ytr.js";import"./index-DCRDH_cs.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-I16STyZY.js";import"./mockTeam-BkQVzAaz.js";import"./SynapseConstants-DYII5bnk.js";import"./OrientationBanner-m5y_RC38.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DC_9J_1p.js";import"./index-DF7lk3Yl.js";import"./iframe-C_AUxWZn.js";import"./spreadSx-CwcO6WA9.js";import"./react-DvrjyBqV.js";import"./FullWidthAlert-DriynDve.js";import"./Alert-BRf044np.js";import"./createTheme-BCP9qvjK.js";import"./DefaultPropsProvider-CxJAbJPQ.js";import"./useSlot-CMxSN5Bn.js";import"./useForkRef-1mKUaoDZ.js";import"./createSimplePaletteValueFilter-CnNLxdoE.js";import"./createSvgIcon-CrJstOSp.js";import"./Close-BONs9ZBx.js";import"./IconButton-B2Nn3-Mn.js";import"./useTimeout-B0lT4z1u.js";import"./ButtonBase-Bw4PF_aW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CX1nzmWd.js";import"./Paper-CO4yL9sw.js";import"./useTheme-ChuUKpJp.js";import"./useTheme-DO7hrzbR.js";import"./Stack-Dd0taEvK.js";import"./extendSxProp-SS-hjWkf.js";import"./getThemeProps-CTDhhYmo.js";import"./Box-CkXfPhrv.js";import"./AlertTitle-nSydvO7Q.js";import"./Typography-CyAicYx7.js";import"./index-Co94yF7T.js";import"./ClickAwayListener-CbbHW0hy.js";import"./getReactElementRef-DLB_inmL.js";import"./index-C3mlNnCy.js";import"./index-BtpDFBPo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-oRqweoyj.js";import"./Tooltip-D1DqUxpw.js";import"./index-DViHecYa.js";import"./useControlled-CsHT0ykU.js";import"./Popper-DigATxW6.js";import"./Button-BwtQDMEd.js";import"./uniqueId-Cyko6_em.js";import"./toString-CyLpKSL1.js";import"./isArray-DN8gbOlb.js";import"./isSymbol-DCkmBRwj.js";import"./times-DLG8imqf.js";import"./_Uint8Array-4qu2iXy-.js";import"./identity-DKeuBCMA.js";import"./toInteger-9tbkPCBK.js";import"./mockTableEntity-BCmgZFla.js";import"./mockFileEntityACLVariants-CXnkUNOg.js";import"./fakerUtils-C_znxKB-.js";import"./mockFileEntity-1GE-GbNF.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-Bg3XQrl_.js";import"./mockSchema-rGH9kmk8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DGY7BQDS.js";import"./QueryClientProvider-C10E43BM.js";import"./Link-DGDizL6J.js";import"./Collapse-BKJvd63-.js";import"./_baseUniq-BBUqvk3x.js";import"./_getTag-N-Fkp5RY.js";import"./isEqual-DLzrhfAb.js";import"./merge-Btpvv75M.js";import"./_initCloneObject-CAVenSk4.js";import"./tinycolor-Begke6kS.js";import"./Fade-COicTICi.js";import"./inputBaseClasses-C3sSt4lC.js";import"./calculateFriendlyFileSize-BXAHpDS2.js";import"./CheckCircleTwoTone-DXold5XT.js";import"./InfoTwoTone-B1NTw75b.js";import"./useMutation-DY8-ifgv.js";import"./dayjs.min-Buta2DO-.js";import"./chunk-AYJ5UCUI-CS7CcU8n.js";import"./cloneDeep-8ISftUsd.js";import"./Skeleton-DhQvFQgP.js";import"./HelpPopover-DKkyjmz0.js";import"./MarkdownPopover-CzJ7-agO.js";import"./LightTooltip-D5Zh-dzX.js";import"./MarkdownSynapse-L9Lxom-_.js";import"./SkeletonButton-BuSMHheE.js";import"./SkeletonInlineBlock-qajRCt6J.js";import"./SkeletonTable-DDTvAZBm.js";import"./SkeletonParagraph-BFWMvjFH.js";import"./HelpOutlineTwoTone-DP1-pNzN.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
