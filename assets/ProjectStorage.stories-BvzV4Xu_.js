import{g as i}from"./entityHandlers-BoyGELLN.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-MN-D_6YK.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-CoX8L5m7.js";import{g as m}from"./userProfileHandlers-CX4PftYj.js";import{P as L}from"./ProjectDataAvailability-DFecpx62.js";import"./index-BJ8atj7o.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BCKtUjnz.js";import"./mockTeam-BGuUZkQs.js";import"./SynapseConstants-Dpo-4-F5.js";import"./OrientationBanner-e9CrJnDC.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-7ZdLlOWA.js";import"./index-BgSjUAuI.js";import"./iframe-B2LJi_cW.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1t48EgC.js";import"./FullWidthAlert-h7Wmupj2.js";import"./Alert-BZ2_6v5t.js";import"./createTheme-B99gvztp.js";import"./DefaultPropsProvider-BwisLJoN.js";import"./useSlot-BoOzURrI.js";import"./useForkRef-BWEHjpp5.js";import"./createSimplePaletteValueFilter-BqHZnY8j.js";import"./createSvgIcon-C3_cIczA.js";import"./Close-CYHpGdnA.js";import"./IconButton-BzXaqEAH.js";import"./useTimeout-B9vSmm-b.js";import"./ButtonBase-C9ld3sfo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CETpK90r.js";import"./Paper-d1YgxWUg.js";import"./useTheme-Crep25JH.js";import"./useTheme-B6PPiyBh.js";import"./Stack-D3AUxOwk.js";import"./extendSxProp-BG_8YU1P.js";import"./getThemeProps-tRf3h7Hu.js";import"./Box-DFEf2Lca.js";import"./AlertTitle-DMPrYQyA.js";import"./Typography-f_AbgqFl.js";import"./index-y7GTiB0o.js";import"./ClickAwayListener-p7Foeo8l.js";import"./getReactElementRef-TAJJAPvj.js";import"./index-3jGRQJto.js";import"./index-DJx0aOeo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BMIyt8WB.js";import"./Tooltip-BHlbKeDB.js";import"./index-0KhxVFZN.js";import"./useControlled-CCREmJrl.js";import"./Popper-C-cVjFlV.js";import"./Button-i6WpB6BV.js";import"./uniqueId--R7Av8wA.js";import"./toString-BpcfFMdu.js";import"./isArray-CaLyojua.js";import"./isSymbol-BWjS2f0j.js";import"./times-DR5UoTQG.js";import"./_Uint8Array-JB1OFgus.js";import"./identity-DKeuBCMA.js";import"./toInteger-BHTcfcZB.js";import"./mockTableEntity-C4BekDgq.js";import"./mockFileEntityACLVariants-B3mgd0gD.js";import"./fakerUtils-C9cAQB2g.js";import"./mockFileEntity-CFzKq4gU.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BuPpjJca.js";import"./mockSchema-BMuPAheJ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-wFNB3FP4.js";import"./QueryClientProvider-Ck7orVaD.js";import"./Link-vTlZ9-pl.js";import"./Collapse-nircCAWM.js";import"./_baseUniq-DYuCTHDT.js";import"./_getTag-B3_puU6c.js";import"./isEqual-CnJzKHIU.js";import"./merge-D8QSzr4_.js";import"./_initCloneObject-J-koMtFl.js";import"./tinycolor-Begke6kS.js";import"./Fade-BQGvqggR.js";import"./inputBaseClasses-CW6CuO6Z.js";import"./calculateFriendlyFileSize-Blvrn06H.js";import"./CheckCircleTwoTone-qAglj5RI.js";import"./InfoTwoTone-CCdFqQd_.js";import"./useMutation-DlDOzlwr.js";import"./dayjs.min-fnKViZjk.js";import"./chunk-AYJ5UCUI-BIXu2e9s.js";import"./cloneDeep-BVaUE9Dw.js";import"./Skeleton-C9fzDANc.js";import"./HelpPopover-DPIxuZGA.js";import"./MarkdownPopover-DVoiHZMb.js";import"./LightTooltip-blH35Yxt.js";import"./MarkdownSynapse-Da4j8K_j.js";import"./SkeletonButton-BzRDYJ2Y.js";import"./SkeletonInlineBlock-DGkFismK.js";import"./SkeletonTable-D9tNVUKR.js";import"./SkeletonParagraph-BqHjIyk3.js";import"./HelpOutlineTwoTone-BXZfRkDC.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
