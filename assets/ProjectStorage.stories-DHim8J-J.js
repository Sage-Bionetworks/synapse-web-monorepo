import{g as i}from"./entityHandlers-DR-8U8ve.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-WZRtSsNc.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-h6u8APIF.js";import{g as m}from"./userProfileHandlers-hwlQQKXu.js";import{P as L}from"./ProjectDataAvailability-Cckxvwgk.js";import"./index-CnBPLClf.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-q38E28gF.js";import"./mockTeam-Cp7gnNA-.js";import"./SynapseConstants-BLM21pa-.js";import"./OrientationBanner-ElxnVDle.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-7bLOgSTC.js";import"./index-9TTcYVc_.js";import"./iframe-Czx5Dmi0.js";import"./spreadSx-CwcO6WA9.js";import"./react-DlmncmcU.js";import"./FullWidthAlert-CsPgeHuk.js";import"./Alert-mrkBi6in.js";import"./createTheme-DetxTjb2.js";import"./DefaultPropsProvider-CtKJNfPj.js";import"./useSlot-Tf7QcJnO.js";import"./useForkRef-C7pV92fh.js";import"./createSimplePaletteValueFilter-CXnjF6Zs.js";import"./createSvgIcon-C0ZSoRRV.js";import"./Close-NwpORwlT.js";import"./IconButton-BZkY5H-N.js";import"./useTimeout-DYRa_dr8.js";import"./ButtonBase-BWgIRray.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIiahqiB.js";import"./Paper-CbcZq6PP.js";import"./useTheme-DZOGkB3v.js";import"./useTheme-DM1dQSDI.js";import"./Stack-2ox-Ad0l.js";import"./extendSxProp-Dj0Tb7v9.js";import"./getThemeProps-CdZnDORy.js";import"./Box-Dy5ekAQq.js";import"./AlertTitle-B5c08fVM.js";import"./Typography-C1hk1xps.js";import"./index-BMbKnGiz.js";import"./ClickAwayListener-Cmw51NWg.js";import"./getReactElementRef-BVzUeeGA.js";import"./index-Bn2Fmzct.js";import"./index-ZL7ET78i.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-seWSR3vl.js";import"./Tooltip-5yyA0MtP.js";import"./index-DmTgUWkb.js";import"./useControlled-B5jxCiTd.js";import"./Popper-OxILuenQ.js";import"./Button-DkW-IEcU.js";import"./uniqueId-B4JR_DQ8.js";import"./toString-Cddfhdkd.js";import"./isArray-wv-qry3w.js";import"./isSymbol-Bpxm0Ru6.js";import"./times-TiP4IDIO.js";import"./_Uint8Array-CZXWf0wa.js";import"./identity-DKeuBCMA.js";import"./toInteger-sDJQXy2h.js";import"./mockTableEntity-BsGg8KYv.js";import"./mockFileEntityACLVariants-D-t6bDR0.js";import"./fakerUtils-bwweDibS.js";import"./mockFileEntity-D--JsO_k.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-CdqDcCk9.js";import"./mockSchema-B5HU5Ig3.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-GFI84f-6.js";import"./QueryClientProvider-CybjnCa8.js";import"./Link-5MArhe6M.js";import"./Collapse-_N5J_E3C.js";import"./_baseUniq-CzQc4vO5.js";import"./_getTag-B1_q1IMX.js";import"./isEqual-BeKpR506.js";import"./merge-BkX_m9ug.js";import"./_initCloneObject-BZbm0-zy.js";import"./tinycolor-Begke6kS.js";import"./Fade-DV6rNrzp.js";import"./inputBaseClasses-D2LWFDZ3.js";import"./calculateFriendlyFileSize-CA8SV0xk.js";import"./CheckCircleTwoTone-B4xc24bl.js";import"./InfoTwoTone-D7N4NCht.js";import"./useMutation-CtBwPbJh.js";import"./dayjs.min-D2apGn21.js";import"./chunk-AYJ5UCUI-CYDaopvs.js";import"./cloneDeep-CgZcCEDV.js";import"./Skeleton-KYXzY8Ax.js";import"./HelpPopover-D-U3O9JE.js";import"./MarkdownPopover-CHPdSPln.js";import"./LightTooltip-BN95cbI1.js";import"./MarkdownSynapse-BRCbGM2j.js";import"./SkeletonButton-CAJdjKiY.js";import"./SkeletonInlineBlock-DgBJezEl.js";import"./SkeletonTable-CWvlKbeN.js";import"./SkeletonParagraph-HWnNDh4k.js";import"./HelpOutlineTwoTone-CiEPI5M9.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
