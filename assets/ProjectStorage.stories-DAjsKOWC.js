import{g as i}from"./entityHandlers-Bf0Aco2x.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-C5DfrOX2.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DsfJZigp.js";import{g as m}from"./userProfileHandlers-wr4GOMLl.js";import{P as L}from"./ProjectDataAvailability-BCCchS49.js";import"./index-DTE32XWi.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-k7ZzIrQH.js";import"./mockTeam-DaYz3e-v.js";import"./SynapseConstants-BtfgJM_H.js";import"./OrientationBanner-CESHpiba.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-p1fR2xqG.js";import"./index-Jc_eG4r1.js";import"./iframe-CTmacDku.js";import"./spreadSx-CwcO6WA9.js";import"./react-CIEhwhZI.js";import"./FullWidthAlert-Dm9STOpq.js";import"./Alert-EdsWXdCF.js";import"./createTheme-CxdfWgKh.js";import"./DefaultPropsProvider-_fK4D_BE.js";import"./useSlot-C5-wXulw.js";import"./useForkRef-B8PDOisR.js";import"./createSimplePaletteValueFilter-D4ybAlfP.js";import"./createSvgIcon-BID9TOzH.js";import"./Close-_Bg-NS2F.js";import"./IconButton-B0gM3RNI.js";import"./useTimeout-CYs9VsFc.js";import"./ButtonBase-VPtjm-X0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B_QldSXU.js";import"./Paper-BMdE1Mph.js";import"./useTheme-DsqwfTCV.js";import"./useTheme-CwxiJJWM.js";import"./Stack-Bsxn6uz-.js";import"./useThemeProps-DtLMzKZm.js";import"./getThemeProps-VmGcPAe8.js";import"./extendSxProp-CFAVQVV3.js";import"./Box-BopbBMQ6.js";import"./AlertTitle-CznnuSBX.js";import"./Typography-CRJ_ISqb.js";import"./index-kHHJ3bf5.js";import"./ClickAwayListener-DlNBvYZP.js";import"./getReactElementRef-Dz6-H50b.js";import"./index-LMTS2VXQ.js";import"./index-Dn-VaGZx.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CxvOX0jG.js";import"./Tooltip-COCcWJnq.js";import"./index-D_qELEFq.js";import"./useControlled-DRzjUrHA.js";import"./Popper-GeS_izA2.js";import"./Button-SLwSyWGH.js";import"./uniqueId-Bw4v3m0e.js";import"./toString-DKp363l0.js";import"./isArray-CIWQgFvO.js";import"./isSymbol-pbjDexES.js";import"./times-D3kaTYlr.js";import"./_Uint8Array-z9m6gYPX.js";import"./identity-DKeuBCMA.js";import"./toInteger-5QKGi6Dy.js";import"./mockTableEntity-ZFamveok.js";import"./mockFileEntityACLVariants-pRZTMiHU.js";import"./fakerUtils-Cg7eH1xw.js";import"./mockFileEntity-DW57Woen.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-hrL0LcU7.js";import"./mockSchema-Bz5AAe6V.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-D2bOA0bn.js";import"./QueryClientProvider-DOeXm9PL.js";import"./Link-91nnDMEk.js";import"./Collapse-BbC5ixbW.js";import"./_baseUniq-C00xECjX.js";import"./_getTag-B7gq1p6y.js";import"./isEqual-BRSPUeiL.js";import"./noop-DX6rZLP_.js";import"./merge-Cqa8GyUa.js";import"./_initCloneObject-CGVsVo7k.js";import"./tinycolor-Begke6kS.js";import"./Fade-DGoGkDAH.js";import"./inputBaseClasses-DDoXAkPR.js";import"./calculateFriendlyFileSize-CEfHY39V.js";import"./CheckCircleTwoTone-D9VSLiCt.js";import"./InfoTwoTone-C9wWK-2h.js";import"./useMutation-T2xtG7Fn.js";import"./dayjs.min-BjteLV8S.js";import"./chunk-AYJ5UCUI-Dqj8kGjG.js";import"./cloneDeep-HqG_US3S.js";import"./Skeleton-6dtuXFOP.js";import"./HelpPopover-Bh_NaPXt.js";import"./MarkdownPopover-BSeNx29h.js";import"./LightTooltip-BXfCRtXJ.js";import"./MarkdownSynapse-TAsbYiKO.js";import"./SkeletonButton-Co7k1K2j.js";import"./SkeletonInlineBlock-D9MAgRlT.js";import"./SkeletonTable-2cbq90Ft.js";import"./SkeletonParagraph-BuxrZSVd.js";import"./HelpOutlineTwoTone-BqI4tqNQ.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
