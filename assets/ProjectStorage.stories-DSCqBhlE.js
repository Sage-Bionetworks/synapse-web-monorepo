import{g as i}from"./entityHandlers-hZ7S3_8c.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DFd5b1XQ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-Cnfdntsn.js";import{g as m}from"./userProfileHandlers-3Xvfrxlm.js";import{P as L}from"./ProjectDataAvailability-BnawxFc2.js";import"./index-xIzYn037.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-I4bl5giG.js";import"./mockTeam-Di1qKtlu.js";import"./SynapseConstants-DnnDD9S4.js";import"./OrientationBanner-BKD3mXs2.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Bukyj4O5.js";import"./index-BETkQVTs.js";import"./iframe-DR00MtQa.js";import"./spreadSx-CwcO6WA9.js";import"./react-COIuWRyg.js";import"./FullWidthAlert-lZwpVcfv.js";import"./Alert-PoDNxqsT.js";import"./createTheme-BH_THfxa.js";import"./DefaultPropsProvider-DGSUwyrZ.js";import"./useSlot-DO3YmjNd.js";import"./useForkRef-C4r6o0mS.js";import"./createSimplePaletteValueFilter-BKXYzHpo.js";import"./createSvgIcon-Uprnm4UY.js";import"./Close-BN20Ndtb.js";import"./IconButton-BMqupDK0.js";import"./useTimeout-C_0QQQPC.js";import"./ButtonBase-C8k3v_8l.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C6LFjy3p.js";import"./Paper-DjjbmjWh.js";import"./useTheme-DFG--JId.js";import"./useTheme-m71gqaUa.js";import"./Stack-B_EGg9Xt.js";import"./useThemeProps-O0oaPQsO.js";import"./getThemeProps-4QQKnSwF.js";import"./extendSxProp-CpK08kBd.js";import"./Box-B9ThoOBq.js";import"./AlertTitle-CI7HLN44.js";import"./Typography-COE6duH8.js";import"./index-DBYQapkN.js";import"./ClickAwayListener-ImhnVk8c.js";import"./getReactElementRef-Bz4vM71q.js";import"./index-CmnwMZoC.js";import"./index-Cxyl9LGV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DXq3JD5F.js";import"./Tooltip-Cy35VhK6.js";import"./index-DJuPeuUq.js";import"./useControlled-CHLGFfK2.js";import"./Popper-MqYOJopP.js";import"./Button-CpvAnFlJ.js";import"./uniqueId-BEq31VMM.js";import"./toString-C5fj-T_0.js";import"./isArray-D-j8zubJ.js";import"./isSymbol-BCpXns4G.js";import"./times-C1ULb67C.js";import"./_Uint8Array-Bgnh0Mur.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bz4QGsEW.js";import"./mockTableEntity-kCfB8qGM.js";import"./mockFileEntityACLVariants-BTKDieVr.js";import"./fakerUtils-brgedKfS.js";import"./mockFileEntity-D626GYzV.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-NFMgylK7.js";import"./mockSchema-BWs1MyKb.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DS0RhEjV.js";import"./QueryClientProvider-CsYE3JnP.js";import"./Link-BvOhnWpV.js";import"./Collapse-jSswtkK8.js";import"./_baseUniq-DV1niuS7.js";import"./_getTag-K4XAuv8J.js";import"./isEqual-D2N_ZygK.js";import"./noop-DX6rZLP_.js";import"./merge-CdXNYD4z.js";import"./_initCloneObject-CiGbOdta.js";import"./tinycolor-Begke6kS.js";import"./Fade-CWljGQaI.js";import"./inputBaseClasses-7vLKzToA.js";import"./calculateFriendlyFileSize-BzDK5ry9.js";import"./CheckCircleTwoTone-DceYN4QX.js";import"./InfoTwoTone-DZlBy9ZW.js";import"./useMutation-B0TMRoqc.js";import"./dayjs.min-BoIqCcg2.js";import"./chunk-AYJ5UCUI-iVW4Bb0p.js";import"./cloneDeep-DyZAojRt.js";import"./Skeleton-BvWNufUl.js";import"./HelpPopover-DDBro93R.js";import"./MarkdownPopover-Du59RAOp.js";import"./LightTooltip-CUhYO_Gb.js";import"./MarkdownSynapse-CFfD1pQ6.js";import"./SkeletonButton-CUKSVA28.js";import"./SkeletonInlineBlock-D3NjzP2j.js";import"./SkeletonTable-4uOPdQdI.js";import"./SkeletonParagraph-DxxDU0Vv.js";import"./HelpOutlineTwoTone-BRrgbIUP.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
