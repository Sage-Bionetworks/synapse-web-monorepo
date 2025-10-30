import{g as i}from"./entityHandlers-z_gJFDpk.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-zOESdhzI.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-ByrXn3AG.js";import{g as m}from"./userProfileHandlers-BxNfC0OM.js";import{P as L}from"./ProjectDataAvailability-B0NEzqJE.js";import"./index-BJflWQJK.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CYtQjVCg.js";import"./mockTeam-XU1c-y4N.js";import"./SynapseConstants-hreeKAiu.js";import"./OrientationBanner-CYdEM79E.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DznES9q-.js";import"./index-Z_niMZcI.js";import"./iframe-9d_xT48Y.js";import"./spreadSx-CwcO6WA9.js";import"./react-CYczaA45.js";import"./FullWidthAlert-CAXTHdyF.js";import"./Alert-fhf9ZcTF.js";import"./createTheme-Ckpp2aJZ.js";import"./DefaultPropsProvider-DNj85cPU.js";import"./useSlot-CGhf7FeQ.js";import"./useForkRef-RZxkIAYG.js";import"./createSimplePaletteValueFilter-DgrzAZvi.js";import"./createSvgIcon-CyMI1MCl.js";import"./Close-DKqsZ7f0.js";import"./IconButton-D8dvWPnB.js";import"./useTimeout-Lo-a2r10.js";import"./ButtonBase-D3TfkVgz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bk44l8uz.js";import"./Paper-DB8P-rkI.js";import"./useTheme-De4w3W1h.js";import"./useTheme-BTCL84tt.js";import"./Stack-D6h9mjEk.js";import"./useThemeProps-DwadHsRm.js";import"./getThemeProps-C_wawT9I.js";import"./extendSxProp-D-Q_-68W.js";import"./Box-B0N2xX3m.js";import"./AlertTitle-DRXY24RG.js";import"./Typography-CO7fscfq.js";import"./index-BmRs8eVL.js";import"./ClickAwayListener-CuOvNdFo.js";import"./getReactElementRef-DjY0RuEK.js";import"./index-qAeAYKDl.js";import"./index-pthXlbu6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B5ZRnJdx.js";import"./Tooltip-DkoGxs3D.js";import"./index-4CrF3sPv.js";import"./useControlled-BO3AYCap.js";import"./Popper-D7dI-vcX.js";import"./Button-CE2q8GZa.js";import"./uniqueId-BvvkfpDr.js";import"./toString-CHOvSEI8.js";import"./isArray-DEVg6Y6f.js";import"./isSymbol-Ctb34mAm.js";import"./times-7k16maVn.js";import"./_Uint8Array-CxEDNqDG.js";import"./identity-DKeuBCMA.js";import"./toInteger-MqhnAcu0.js";import"./mockTableEntity-PsBAgRJl.js";import"./mockFileEntityACLVariants-ZuSWcfbk.js";import"./fakerUtils-_hRDw10H.js";import"./mockFileEntity-BO4J191k.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DglsP9BZ.js";import"./mockSchema-B8UHmnKS.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-D7eNVn05.js";import"./QueryClientProvider-wm4deiul.js";import"./Link-CkNjpNVk.js";import"./Collapse-B3lfXU47.js";import"./_baseUniq-BfPE21S4.js";import"./_getTag-CyB7UJq2.js";import"./isEqual-CjQ0xsUP.js";import"./noop-DX6rZLP_.js";import"./merge-w5SVnV7S.js";import"./_initCloneObject-BXD3EUEW.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTsGKFOx.js";import"./inputBaseClasses-BquiKfq4.js";import"./calculateFriendlyFileSize-CV2UvVgj.js";import"./CheckCircleTwoTone-DsSnAxaE.js";import"./InfoTwoTone-OsnIp2rF.js";import"./useMutation-CwPhuXlo.js";import"./dayjs.min-BstykqR9.js";import"./chunk-AYJ5UCUI-CpTQ0xdT.js";import"./cloneDeep-Ba0G_3Y-.js";import"./Skeleton-DaUiC_M2.js";import"./HelpPopover-TmxdpWpJ.js";import"./MarkdownPopover-Dw8XB6X0.js";import"./LightTooltip-DKYRJn6K.js";import"./MarkdownSynapse-CW0fmQ3Q.js";import"./SkeletonButton-Ds2Q6XmI.js";import"./SkeletonInlineBlock-CnqdYumQ.js";import"./SkeletonTable-7rz2uNeX.js";import"./SkeletonParagraph--rzBUvwb.js";import"./HelpOutlineTwoTone-BqBs93R7.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
