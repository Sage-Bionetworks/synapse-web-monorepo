import{g as i}from"./entityHandlers-DPwtsJEV.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CabKz2BX.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-BwGQ3hhy.js";import{g as m}from"./userProfileHandlers-DDrH-m62.js";import{P as L}from"./ProjectDataAvailability-KMGpwWlq.js";import"./index-QZtVbBq2.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-gsuMHqEa.js";import"./mockTeam-DftLthD0.js";import"./SynapseConstants-s7AVu6sL.js";import"./OrientationBanner-BK2mf2Th.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-XnoiuBUV.js";import"./index-Bclfwf2c.js";import"./iframe-BwmT6DnA.js";import"./spreadSx-CwcO6WA9.js";import"./react-D0WT0Cnf.js";import"./FullWidthAlert-Cg_Edw0M.js";import"./Alert-DsoayRUU.js";import"./createTheme-CzZhU4mT.js";import"./DefaultPropsProvider-Cw6x8ixs.js";import"./useSlot--qVLG9rV.js";import"./useForkRef-DrhSOHJn.js";import"./createSimplePaletteValueFilter-CHJUaE6s.js";import"./createSvgIcon-Bbg0YSe_.js";import"./Close-CTF-FaFj.js";import"./IconButton-C2yfwCnc.js";import"./useTimeout-DQRToeqs.js";import"./ButtonBase-BanSt4k6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-eGIE85BV.js";import"./Paper-C-MxAE3X.js";import"./useTheme-DBez2_uP.js";import"./useTheme-B2qwNNbc.js";import"./Stack-B8lUTm_5.js";import"./useThemeProps-BkMB52f-.js";import"./getThemeProps-BgWx5ja4.js";import"./extendSxProp-Cy_w0M7c.js";import"./Box-Dif21-Ta.js";import"./AlertTitle-Xjxp6dYf.js";import"./Typography-CR9HyBtT.js";import"./index-_J9zFtLw.js";import"./ClickAwayListener-BQ-icjcb.js";import"./getReactElementRef-rMJwrBoh.js";import"./index-Wtgxe081.js";import"./index-DfrTKupj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-AhBpZALS.js";import"./Tooltip-BcHs3bh9.js";import"./index-CFBjFAlj.js";import"./useControlled-sVn0qm5_.js";import"./Popper-CqTlDTef.js";import"./Button-CMsK5jkJ.js";import"./uniqueId-Cej-QUp6.js";import"./toString-DqKwb9Lr.js";import"./isArray-Bjvy55fd.js";import"./isSymbol-D-ezxYA9.js";import"./times-ByfnELeL.js";import"./_Uint8Array-C8WR35dk.js";import"./identity-DKeuBCMA.js";import"./toInteger-MMr5JLvD.js";import"./mockTableEntity-BOYNDLDc.js";import"./mockFileEntityACLVariants-CazJHley.js";import"./fakerUtils-DEYum8r-.js";import"./mockFileEntity-D4QN8aGs.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Zb5hnnZc.js";import"./mockSchema-6r3zfO7X.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-B9rRePvy.js";import"./QueryClientProvider-Dc7Y7gmt.js";import"./Link-DpQKU4aY.js";import"./Collapse-CvW24kl2.js";import"./_baseUniq-X4u6lSY4.js";import"./_getTag-DMyVPIGy.js";import"./isEqual-CBygoy8c.js";import"./noop-DX6rZLP_.js";import"./merge-D_9vdqan.js";import"./_initCloneObject-DFlTj-VM.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2NLaioE.js";import"./inputBaseClasses-CS9kB3iA.js";import"./calculateFriendlyFileSize-Cz7skY0R.js";import"./CheckCircleTwoTone-Dsau-jpM.js";import"./InfoTwoTone-B7Emrovp.js";import"./useMutation-DmB6IlS-.js";import"./dayjs.min-BYIiwRKv.js";import"./chunk-AYJ5UCUI-DdNkrdCt.js";import"./cloneDeep-Cr5aOjXu.js";import"./Skeleton-CsmpLdqI.js";import"./HelpPopover-DopKxDzr.js";import"./MarkdownPopover-vjC1emIT.js";import"./LightTooltip-DPWHQMDd.js";import"./MarkdownSynapse-2yyEWXk7.js";import"./SkeletonButton-ChLWta4G.js";import"./SkeletonInlineBlock-Bj_nSxoS.js";import"./SkeletonTable-BFB2PN0p.js";import"./SkeletonParagraph-DWuTwbia.js";import"./HelpOutlineTwoTone-CrY3i7rm.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
