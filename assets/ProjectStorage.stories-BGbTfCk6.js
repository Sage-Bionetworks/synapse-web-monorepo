import{g as i}from"./entityHandlers-C_gzHhno.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-CGW-jd1f.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-DCo3NwXK.js";import{g as m}from"./userProfileHandlers-DSb0Z0t0.js";import{P as L}from"./ProjectDataAvailability-C3f33l0y.js";import"./index-CmEm02SI.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BmA6yhwI.js";import"./mockTeam-CVFmTHFE.js";import"./SynapseConstants-BGT0B1ls.js";import"./OrientationBanner-BD5rKond.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CbaPxVoO.js";import"./index-De1Zq6J_.js";import"./iframe-E8oGcv1j.js";import"./spreadSx-CwcO6WA9.js";import"./react-u_1KPmwS.js";import"./FullWidthAlert-B3XOziTT.js";import"./Alert-aEGKfIxj.js";import"./createTheme-D7EPNL7b.js";import"./DefaultPropsProvider-CcfTARJV.js";import"./useSlot-3tuE-c2M.js";import"./useForkRef-C6KDMbou.js";import"./createSimplePaletteValueFilter-BqHZsxiX.js";import"./createSvgIcon-BFK5bQ8n.js";import"./Close-FdA3HKi-.js";import"./IconButton-BZ-jzTu8.js";import"./useTimeout-Dv9ZmSsd.js";import"./ButtonBase-DX38kEaJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B6nvT1pK.js";import"./Paper-DtY-LtaX.js";import"./useTheme-xNbW70z-.js";import"./useTheme-BR8tto29.js";import"./Stack-BDxqZFkj.js";import"./extendSxProp-CRDkfaxY.js";import"./getThemeProps-CTXbjC0Y.js";import"./Box-CR3xkiF7.js";import"./AlertTitle-BUhA3yvl.js";import"./Typography-Dqy4KUKl.js";import"./index-vnh1qUaf.js";import"./ClickAwayListener-BFmT95cs.js";import"./getReactElementRef-z7kCRJG8.js";import"./index-DYa4EW63.js";import"./index-C8LquKll.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-eiV7889k.js";import"./Tooltip-DU9LrmZk.js";import"./index-E7O__Phm.js";import"./useControlled-DMRUVe0w.js";import"./Popper-CcioxHhD.js";import"./Button-D-bx5MZt.js";import"./uniqueId-C5MfKxqV.js";import"./toString-CktccFA4.js";import"./isArray-DKCXyRjL.js";import"./isSymbol-CrdGgY1-.js";import"./times-B1u6bRp2.js";import"./_Uint8Array-Bpe28QCt.js";import"./identity-DKeuBCMA.js";import"./toInteger-TRAVrRY7.js";import"./mockTableEntity-D1tLGZXK.js";import"./mockFileEntityACLVariants-DQ3YqkMj.js";import"./fakerUtils-bLPFvm1k.js";import"./mockFileEntity-HJCQpgKu.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-DnfWEHkq.js";import"./mockSchema-D56FHxSG.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DALRboo3.js";import"./QueryClientProvider-FUbP8408.js";import"./Link-DvLvJsbQ.js";import"./Collapse-CcwUCllw.js";import"./_baseUniq-CXI3CQZE.js";import"./_getTag-DSOAbaVw.js";import"./isEqual-Dg8dgpub.js";import"./merge-DckDRy64.js";import"./_initCloneObject-oQqNGLLJ.js";import"./tinycolor-Begke6kS.js";import"./Fade-DY8MnK-W.js";import"./inputBaseClasses-BoUH4D83.js";import"./calculateFriendlyFileSize-DQKz6tFX.js";import"./CheckCircleTwoTone-D_cE2H8y.js";import"./InfoTwoTone-DH56TLJq.js";import"./useMutation-BX9VoBnj.js";import"./dayjs.min-D6shjXWv.js";import"./chunk-AYJ5UCUI-Qk_pfhhj.js";import"./cloneDeep-DuWLqYh-.js";import"./Skeleton-BAzE4-tl.js";import"./HelpPopover-DtjPxbdu.js";import"./MarkdownPopover-D1cbfPpq.js";import"./LightTooltip-o_gW4svU.js";import"./MarkdownSynapse-DWWFUrcd.js";import"./SkeletonButton-CdPlqbtL.js";import"./SkeletonInlineBlock-Gww6vO0T.js";import"./SkeletonTable-HXIXFq7J.js";import"./SkeletonParagraph-SLAYWWnh.js";import"./HelpOutlineTwoTone-Dj5qBrEg.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
