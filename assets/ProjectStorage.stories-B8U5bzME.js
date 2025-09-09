import{g as i}from"./entityHandlers-Don7Oxht.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-CDtyypvQ.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-BXG9wfja.js";import{g as m}from"./userProfileHandlers-C1K0VZS_.js";import{P as L}from"./ProjectDataAvailability-Dg4xerdR.js";import"./index-JFd91YRr.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CloRc6K8.js";import"./mockTeam-B8rdV6ux.js";import"./SynapseConstants-BoNlleXj.js";import"./OrientationBanner-DU08nB5M.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-COgomViE.js";import"./index-4rQWsg7w.js";import"./iframe-CcbFInBH.js";import"./spreadSx-CwcO6WA9.js";import"./react-DB3GvYML.js";import"./FullWidthAlert-Dg71CEZ0.js";import"./Alert-C2I_KYn3.js";import"./createTheme-Bm_LWWer.js";import"./DefaultPropsProvider-Cc0Pr5n3.js";import"./useSlot-DbLKugs_.js";import"./useForkRef-BwCYdf5Y.js";import"./createSimplePaletteValueFilter-DE9cDTR6.js";import"./createSvgIcon-CvtTfXSY.js";import"./Close-jijW1zMn.js";import"./IconButton-DOeY9i8P.js";import"./useTimeout-B7hTnc20.js";import"./ButtonBase-CL-S2AlO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B_bRZkNu.js";import"./Paper-BaJDg2gE.js";import"./useTheme-BKqn0RbP.js";import"./useTheme-BaHpITS4.js";import"./Stack-BjTTHAev.js";import"./extendSxProp-D4U4cllC.js";import"./getThemeProps-TCS4Lcys.js";import"./Box-B-z2Wn3T.js";import"./AlertTitle-C-_dyzvL.js";import"./Typography-zf9xiWio.js";import"./index-DL_3F7fc.js";import"./ClickAwayListener-BCkMOy2i.js";import"./getReactElementRef-BaFO5tC3.js";import"./index-BMgcitHH.js";import"./index-CzdvnrNd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CdIC-B9C.js";import"./Tooltip-BTFCh_bD.js";import"./index-Bg_aIjO4.js";import"./useControlled-DYO_k7w0.js";import"./Popper-DG6dlf9c.js";import"./Button-BjQB2kT9.js";import"./uniqueId-Ckzj7-HX.js";import"./toString-D2r9UWye.js";import"./isArray-DdpjBUqz.js";import"./isSymbol-CpZhK5YU.js";import"./times-DIDGctuV.js";import"./_Uint8Array-B7K-43nq.js";import"./identity-DKeuBCMA.js";import"./toInteger-Z2v_-jGf.js";import"./mockTableEntity-C-s-_I1b.js";import"./mockFileEntityACLVariants-BYIhnzVU.js";import"./fakerUtils-DFvsmAzn.js";import"./mockFileEntity-hYiZGyYZ.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-D-ah-wdR.js";import"./mockSchema-dpdyNyY1.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CAFEVghr.js";import"./QueryClientProvider-_RY6Yhiq.js";import"./Link-_nO4g-sD.js";import"./Collapse-C3OMEBr4.js";import"./_baseUniq-DWURcJHe.js";import"./_getTag-DT_WTpYG.js";import"./isEqual-C_Nd6Dpx.js";import"./merge-DGQo8ukK.js";import"./_initCloneObject-CtYURX9T.js";import"./tinycolor-Begke6kS.js";import"./Fade-I9obbtrd.js";import"./inputBaseClasses-ezG5ieVl.js";import"./calculateFriendlyFileSize-DsSMX6PZ.js";import"./CheckCircleTwoTone-CylHzlFL.js";import"./InfoTwoTone-DJFi4_MF.js";import"./useMutation-BbF47SYJ.js";import"./dayjs.min-DO5OZYrH.js";import"./chunk-AYJ5UCUI-CqqfLa0q.js";import"./cloneDeep-C8akjPpC.js";import"./Skeleton-DZpetao_.js";import"./HelpPopover-JXNGCew4.js";import"./MarkdownPopover-C3AzQwtW.js";import"./LightTooltip-BOSchs1O.js";import"./MarkdownSynapse-D_88BVAZ.js";import"./SkeletonButton-Do0tQB-Q.js";import"./SkeletonInlineBlock-BFP0WUgc.js";import"./SkeletonTable-Cxx_e7B6.js";import"./SkeletonParagraph-CDjNfcZT.js";import"./HelpOutlineTwoTone-B3H-KaQk.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
