import{g as i}from"./entityHandlers-Cq_MbMSG.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DN5jeuBs.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-tOcmjAZH.js";import{g as m}from"./userProfileHandlers-BSi1lz7h.js";import{P as L}from"./ProjectDataAvailability-fVPICCB0.js";import"./index-QdI4XqCm.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Dm5P_H5p.js";import"./mockTeam-BLmnXhLo.js";import"./SynapseConstants-Dk9mSEK3.js";import"./OrientationBanner-C5rRxLOd.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DJ2Mj2aK.js";import"./index-DGv34HBD.js";import"./iframe-DfhwYfkN.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dqq1nFIk.js";import"./FullWidthAlert-7hlJBHTN.js";import"./Alert-DAG9Aucx.js";import"./createTheme-DGEGp_SD.js";import"./DefaultPropsProvider-DoDLwSqP.js";import"./useSlot-h-XFZ_xK.js";import"./useForkRef-DorXlh5L.js";import"./createSimplePaletteValueFilter-CEiraeEP.js";import"./createSvgIcon-BwKRHuRw.js";import"./Close-BoYD-Ye6.js";import"./IconButton-ByahMUeh.js";import"./useTimeout-D9n6b9ga.js";import"./ButtonBase-BwS93VGp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CxFD3KzI.js";import"./Paper-CH1kNGpI.js";import"./useTheme-DBhTySsI.js";import"./useTheme-D6P-YjrR.js";import"./Stack-Dr6m2zrE.js";import"./useThemeProps-ahUk6xR1.js";import"./getThemeProps-DeX8Xk5f.js";import"./extendSxProp-CXOYizRA.js";import"./Box-6ErQd4eQ.js";import"./AlertTitle-C391Qgh2.js";import"./Typography-DFWCAegs.js";import"./index-D2dQp3lw.js";import"./ClickAwayListener-a0xZHR2I.js";import"./getReactElementRef-DFiSuhzk.js";import"./index-DDkg0FwF.js";import"./index-B11uVym8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CyTlzzNv.js";import"./Tooltip-CuLP43i6.js";import"./index-BSM79-Da.js";import"./useControlled-DeakbIaX.js";import"./Popper-CuO8c7be.js";import"./Button-CxRuB6Io.js";import"./uniqueId-Cigrvl8-.js";import"./toString-W-CywYbt.js";import"./isArray-RjWnP_xj.js";import"./isSymbol-DJa5TpaM.js";import"./times-hHBCvPy2.js";import"./_Uint8Array-BAfJSe8d.js";import"./identity-DKeuBCMA.js";import"./toInteger-BTHsAWLh.js";import"./mockTableEntity-B0SfcBTa.js";import"./mockFileEntityACLVariants-b_ahBpGu.js";import"./fakerUtils-DUBHUXXX.js";import"./mockFileEntity-0j4eJ-rW.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CTGY-mtd.js";import"./mockSchema-DKSEO3bT.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-B5XD2W2D.js";import"./QueryClientProvider-DgRSjt1E.js";import"./Link-aPqunS_C.js";import"./Collapse-DFPiA3AQ.js";import"./_baseUniq-fLehImUc.js";import"./_getTag-UgO0rBGX.js";import"./isEqual-DucS0a4x.js";import"./noop-DX6rZLP_.js";import"./merge-DNvf83vX.js";import"./_initCloneObject-g_hm0NT-.js";import"./tinycolor-Begke6kS.js";import"./Fade-DrTUWBA-.js";import"./inputBaseClasses-CHlIYh-9.js";import"./calculateFriendlyFileSize-FKoHcqwG.js";import"./CheckCircleTwoTone-B7GhCg84.js";import"./InfoTwoTone-DrINNaoG.js";import"./useMutation-C7G01Xnf.js";import"./dayjs.min-DwRsZaK6.js";import"./chunk-AYJ5UCUI-CVKajfNP.js";import"./cloneDeep-CV4bwBv0.js";import"./Skeleton-M7Xx-4bt.js";import"./HelpPopover-D38Nembz.js";import"./MarkdownPopover-B5cZkhVZ.js";import"./LightTooltip-DJuHXQOV.js";import"./MarkdownSynapse-CmuTndSI.js";import"./SkeletonButton-BI5QuA9Z.js";import"./SkeletonInlineBlock-B0ifap68.js";import"./SkeletonTable-C4JZiTbv.js";import"./SkeletonParagraph-DGZWIttL.js";import"./HelpOutlineTwoTone-I4F-Povp.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
