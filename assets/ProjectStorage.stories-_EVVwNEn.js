import{g as i}from"./entityHandlers-BvzytK6U.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-EKpzv8MZ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CYg-VDE5.js";import{g as m}from"./userProfileHandlers-zB_dnqMy.js";import{P as L}from"./ProjectDataAvailability-CGj0BijP.js";import"./index-CkevL0RG.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Cdxg-tXQ.js";import"./mockTeam-CeJ539a3.js";import"./SynapseConstants-1HUBjtKm.js";import"./OrientationBanner-aZewHq-Z.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CGSHOwNi.js";import"./index-Md1bMW-z.js";import"./iframe-uIIVzD3j.js";import"./spreadSx-CwcO6WA9.js";import"./react-uSK3dJOn.js";import"./FullWidthAlert-Br1koMJ-.js";import"./Alert-DkgMFLOm.js";import"./createTheme-DNQ2GBGi.js";import"./DefaultPropsProvider-BNOxOf-A.js";import"./useSlot-BTY_Z-d6.js";import"./useForkRef-CoDOX8AE.js";import"./createSimplePaletteValueFilter-Db9IlTh7.js";import"./createSvgIcon-92C3hb6t.js";import"./Close-DwqeNffU.js";import"./IconButton-sjmF_FEp.js";import"./useTimeout-DQ_-VO3O.js";import"./ButtonBase-IDXW5Yf8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cv2umIHD.js";import"./Paper-C677K5L-.js";import"./useTheme-CslAt-wv.js";import"./useTheme-Cs2NNiMd.js";import"./Stack-B53g7fb1.js";import"./useThemeProps-C_b8E7rx.js";import"./getThemeProps-CHgiU3_j.js";import"./extendSxProp-D1VhlKw4.js";import"./Box-DohH8KGO.js";import"./AlertTitle-BlMhOmTu.js";import"./Typography-C96gU1wS.js";import"./index-DmeWQ-dO.js";import"./ClickAwayListener-B9bXJXQC.js";import"./getReactElementRef-HCWorscC.js";import"./index-CUeFsCSP.js";import"./index-BiIHeQLd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BzcQ-t9T.js";import"./Tooltip-2BuyJCJR.js";import"./index-DRTQrCcL.js";import"./useControlled-CxsZIN1F.js";import"./Popper-XHxJx-dX.js";import"./Button-C-zk0YkP.js";import"./uniqueId-fci-KsTT.js";import"./toString-jjrxUMdV.js";import"./isArray-B5klMKWj.js";import"./isSymbol-D_pidj9A.js";import"./times-NSTTO268.js";import"./_Uint8Array-Cby2pCoj.js";import"./identity-DKeuBCMA.js";import"./toInteger-DAJmCa2P.js";import"./mockTableEntity-BKdB9Tov.js";import"./mockFileEntityACLVariants-C5HevCER.js";import"./fakerUtils-7OfRd_Cb.js";import"./mockFileEntity-lx-Y5LgH.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-D3XPt5UX.js";import"./mockSchema-DnbrY5nf.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DVTeBwEW.js";import"./QueryClientProvider-BMNXHCEe.js";import"./Link-CqWD6rvZ.js";import"./Collapse-stLmF6Jw.js";import"./_baseUniq-DCP_CDE1.js";import"./_getTag-DsElD8uv.js";import"./isEqual-BiFEM_GF.js";import"./noop-DX6rZLP_.js";import"./merge-Ds5Z6Gqt.js";import"./_initCloneObject--FlbFimB.js";import"./tinycolor-Begke6kS.js";import"./Fade-CSvEcrCc.js";import"./inputBaseClasses-CX7_9eBB.js";import"./calculateFriendlyFileSize-B2Y-Pd9F.js";import"./CheckCircleTwoTone-Cl1bOByO.js";import"./InfoTwoTone-BbyWd5yG.js";import"./useMutation-Di0sy3w_.js";import"./dayjs.min-BorLJNP_.js";import"./chunk-AYJ5UCUI-B4Oc2lbg.js";import"./cloneDeep-CGc5yc60.js";import"./Skeleton-BoefnFuB.js";import"./HelpPopover-DSXshwIV.js";import"./MarkdownPopover-C-uuBLcc.js";import"./LightTooltip-DMqWkJt2.js";import"./MarkdownSynapse-CbmonUCX.js";import"./SkeletonButton-Vq-dGTLm.js";import"./SkeletonInlineBlock-CAbWHhkf.js";import"./SkeletonTable-BB7_2QqC.js";import"./SkeletonParagraph-C9FD_all.js";import"./HelpOutlineTwoTone-DJEk67Tj.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const yr=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,yr as __namedExportsOrder,jr as default};
