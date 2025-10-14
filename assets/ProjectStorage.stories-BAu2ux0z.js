import{g as i}from"./entityHandlers-BgRmVfTq.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-6Eopo0xs.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-D3avfXNk.js";import{g as m}from"./userProfileHandlers-DtTDsZKn.js";import{P as L}from"./ProjectDataAvailability-DZO4Wof9.js";import"./index-DqcnlC_-.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bqlc9FqC.js";import"./mockTeam-C9KeOZNO.js";import"./SynapseConstants-Bd5uMFWd.js";import"./OrientationBanner-BSDlOhEl.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BgcdhoxH.js";import"./index-Hq9GMvWN.js";import"./iframe-Cz0yRYSQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNQEch4T.js";import"./FullWidthAlert-BRRQ8k9I.js";import"./Alert-Q-zP0WQf.js";import"./createTheme-BYmso0tz.js";import"./DefaultPropsProvider-0orHMIEF.js";import"./useSlot-DsnxFfh1.js";import"./useForkRef-Ba32e_nF.js";import"./createSimplePaletteValueFilter-W2Zo5aou.js";import"./createSvgIcon-AN35XKd_.js";import"./Close-DfokZKzC.js";import"./IconButton-DyX-TFkE.js";import"./useTimeout-h73ObAmM.js";import"./ButtonBase-EgupweKT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B04Cl_da.js";import"./Paper-DyztGkog.js";import"./useTheme-D93wozFQ.js";import"./useTheme-D3m_In28.js";import"./Stack-BWD33RJX.js";import"./useThemeProps-xhGgonhN.js";import"./getThemeProps-D-XMYL24.js";import"./extendSxProp-CaJIvMa_.js";import"./Box-Coa0Hm63.js";import"./AlertTitle-CAGvnUl-.js";import"./Typography-Bn1QEpSJ.js";import"./index-vkeMoorD.js";import"./ClickAwayListener-Tz4LQtH4.js";import"./getReactElementRef-ZSL1cRU-.js";import"./index-Dz78O9fy.js";import"./index-BsWHRc5B.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Mg9gNMCu.js";import"./Tooltip-PLHpmtuF.js";import"./index-bI8fuLwa.js";import"./useControlled-DjqDKOV6.js";import"./Popper-BdXdlnhi.js";import"./Button-BTB592up.js";import"./uniqueId-D_0v6F0y.js";import"./toString-IG9H0QgB.js";import"./isArray-DqrD0I4d.js";import"./isSymbol-6x7f5015.js";import"./times-BR3Bm9UJ.js";import"./_Uint8Array-Nn_bOMDG.js";import"./identity-DKeuBCMA.js";import"./toInteger-BWDKPG0A.js";import"./mockTableEntity-Bc07Kx45.js";import"./mockFileEntityACLVariants-C4dLtiI5.js";import"./fakerUtils-CdF0RRun.js";import"./mockFileEntity-CxoQ38CX.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CzDWXwdj.js";import"./mockSchema-gdG9XqLi.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-C632Gpdg.js";import"./QueryClientProvider-BNaKABDx.js";import"./Link-D4cnvwEL.js";import"./Collapse-C7CbTo5y.js";import"./_baseUniq-y6CeNGmm.js";import"./_getTag-CCxMSq7g.js";import"./isEqual-CdAtuOnJ.js";import"./noop-DX6rZLP_.js";import"./merge-Ds3aECQA.js";import"./_initCloneObject-B9n5P3J6.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bb6hCor6.js";import"./inputBaseClasses-CYg77Bp9.js";import"./calculateFriendlyFileSize-DAK12mf4.js";import"./CheckCircleTwoTone-Dt6znZiS.js";import"./InfoTwoTone-B7HNLyVQ.js";import"./useMutation-DkUvZSje.js";import"./dayjs.min-BvJHBx7G.js";import"./chunk-AYJ5UCUI-BVFhXq1p.js";import"./cloneDeep-B0KeqOcz.js";import"./Skeleton-Bp3OxjtJ.js";import"./HelpPopover-Dx32skrX.js";import"./MarkdownPopover-BnO-5zR7.js";import"./LightTooltip-BPBAEFTj.js";import"./MarkdownSynapse--LedYpEO.js";import"./SkeletonButton-C1JSj4Cg.js";import"./SkeletonInlineBlock-DJB2EYD9.js";import"./SkeletonTable-D0VrWirv.js";import"./SkeletonParagraph-BG0c53x3.js";import"./HelpOutlineTwoTone-rY6F4JHM.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
