import{g as i}from"./entityHandlers-BOLo6_2o.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-Da5SPf30.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./StringUtils-DP1EOPFU.js";import{h as d,H as l}from"./index-BnQk36T0.js";import{g as m}from"./userProfileHandlers-DUnA2zzE.js";import{P as L}from"./ProjectDataAvailability-C7Al4Xo7.js";import"./index-DUYXZy2A.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BeGZgNVr.js";import"./mockTeam-PHkAt1Et.js";import"./SynapseConstants-BgpCwDFe.js";import"./OrientationBanner-BwAbfTIw.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Bi4am7_a.js";import"./index-CfbPO5Pk.js";import"./iframe-B73v8h_Y.js";import"./spreadSx-CwcO6WA9.js";import"./react-Czvs3lpM.js";import"./FullWidthAlert-BxCHPgi_.js";import"./Alert-Cy2iyRT_.js";import"./createTheme-B8QSyZvJ.js";import"./DefaultPropsProvider-E91GGLqj.js";import"./useSlot-DbF0H-M6.js";import"./useForkRef-CNGHG2sd.js";import"./createSimplePaletteValueFilter-DMZZiVpQ.js";import"./createSvgIcon-B4oujve6.js";import"./Close-DnuW4VP0.js";import"./IconButton-CNjLAA-N.js";import"./useTimeout-CngDlYNI.js";import"./ButtonBase-EQYK4HG0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dwx-LJEp.js";import"./Paper-DWy9BGA0.js";import"./useTheme-5tq7elWw.js";import"./useTheme-kqh4Ll_I.js";import"./Stack-IvFAcYq_.js";import"./extendSxProp-BASXjWDU.js";import"./getThemeProps-CxBOemI1.js";import"./Box-C_8woQ6t.js";import"./AlertTitle-C2IYM2mb.js";import"./Typography-C496KcFS.js";import"./index-D_tds8oQ.js";import"./ClickAwayListener-bWEbtpgx.js";import"./getReactElementRef-DqYwo8-I.js";import"./index-C1mw4Gna.js";import"./index-9kSQh7S9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-1A1uLTzL.js";import"./Tooltip-Buh_A6A3.js";import"./index-B8TmctUz.js";import"./useControlled-BTQkJmVV.js";import"./Popper-B67Zc9vL.js";import"./Button-CaVEglZt.js";import"./uniqueId-DDlkbdi_.js";import"./toString-DgO0u6lv.js";import"./isArray-B0jnOaQA.js";import"./isSymbol-6eJ_mC2Q.js";import"./times-Dd5ENhgM.js";import"./_Uint8Array-Q8PrWGYm.js";import"./identity-DKeuBCMA.js";import"./toInteger-YBT16SYZ.js";import"./mockTableEntity-C61MJ-UZ.js";import"./mockFileEntityACLVariants-CWYeTHcQ.js";import"./fakerUtils-DnvEAjH5.js";import"./mockFileEntity-Bayf7vxC.js";import"./mock_file_handle-BIJh-7D7.js";import"./mockEntity-CXO_Zd5_.js";import"./mockSchema-BbW4n316.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CT4vRpQZ.js";import"./QueryClientProvider-CSQ7Q6Lo.js";import"./Link-Dv4MSEKL.js";import"./Collapse-CL5HS0jI.js";import"./_baseUniq-C6brxGBX.js";import"./_getTag-DMlxnM4P.js";import"./isEqual-B1KvTqBz.js";import"./merge-BUbT27GX.js";import"./_initCloneObject-BKnpaPkf.js";import"./tinycolor-Begke6kS.js";import"./Fade-BbU8Qxyz.js";import"./inputBaseClasses-Cb6yvEHg.js";import"./calculateFriendlyFileSize-CqNpoUvN.js";import"./CheckCircleTwoTone-BjY5vWtN.js";import"./InfoTwoTone-zu4DaVNs.js";import"./useMutation--SOUpC1Y.js";import"./dayjs.min-1XIHbNiY.js";import"./chunk-AYJ5UCUI-DgOYknd8.js";import"./cloneDeep-CfavtHgN.js";import"./Skeleton-DfHSJENk.js";import"./HelpPopover-BFsHz_7k.js";import"./MarkdownPopover-Bmp9sr4S.js";import"./LightTooltip-CUEpVSZb.js";import"./MarkdownSynapse-D9EkkUup.js";import"./SkeletonButton-BIJr3ITb.js";import"./SkeletonInlineBlock-a8Brxge5.js";import"./SkeletonTable-Dl8AIzWW.js";import"./SkeletonParagraph-DHxPNJSL.js";import"./HelpOutlineTwoTone-DGwyBPym.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
