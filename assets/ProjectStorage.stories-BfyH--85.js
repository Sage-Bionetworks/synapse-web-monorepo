import{g as i}from"./entityHandlers-BzA6XD1O.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DGDTxZYQ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-8br9TYM-.js";import{g as m}from"./userProfileHandlers-DsE7mDiL.js";import{P as L}from"./ProjectDataAvailability-DGZ_3euf.js";import"./index-BXoH5oIa.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CHnCWHJ5.js";import"./mockTeam-DraC2JF4.js";import"./SynapseConstants-B1E3c0aq.js";import"./OrientationBanner-D7k3-QFh.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CmXUi2FL.js";import"./index-Bx7qxNz6.js";import"./iframe-oxiAqt3n.js";import"./spreadSx-CwcO6WA9.js";import"./react-DdL6hUDw.js";import"./FullWidthAlert-DNYkg2ty.js";import"./Alert-CrPo9ras.js";import"./createTheme-CIw9KUZV.js";import"./DefaultPropsProvider-Bm9EWdCB.js";import"./useSlot-Do7Q0LkH.js";import"./useForkRef-C--zO68W.js";import"./createSimplePaletteValueFilter-C7kcEEIl.js";import"./createSvgIcon-D4V7E9uK.js";import"./Close-oipHD91r.js";import"./IconButton-Dm-Kouzk.js";import"./useTimeout-DnSoaJbv.js";import"./ButtonBase-BuLMg0uO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CfiXH_Rk.js";import"./Paper-DkuZylpL.js";import"./useTheme-DtItw25X.js";import"./useTheme-S-XYqDcy.js";import"./Stack-BYBjgcjC.js";import"./extendSxProp-DIhkEDJC.js";import"./getThemeProps-DEWIJyCD.js";import"./Box-DZHSTnWO.js";import"./AlertTitle-jBrq7hxW.js";import"./Typography-7uTmWE9G.js";import"./index-DZIDIo0P.js";import"./ClickAwayListener-5G5OKMq_.js";import"./getReactElementRef-pzoxrQJz.js";import"./index-DBYClo48.js";import"./index-xoTw1gRu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BWERmVKf.js";import"./Tooltip-D1wdw83J.js";import"./index-ka5kuvCs.js";import"./useControlled-CBZmQst1.js";import"./Popper-CHWsK8nH.js";import"./Button-DC0Z6N20.js";import"./uniqueId-D5oCbJE9.js";import"./toString-BSE71CYf.js";import"./isArray-qqpWvSAV.js";import"./isSymbol-CNws_ZIg.js";import"./times-C1PArz_4.js";import"./_Uint8Array-BLZKSuky.js";import"./identity-DKeuBCMA.js";import"./toInteger-Cp3hQ31E.js";import"./mockTableEntity-Jpyd7bI1.js";import"./mockFileEntityACLVariants-C4H2paZm.js";import"./fakerUtils-Cklehayq.js";import"./mockFileEntity-r53Ok2op.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Aetur9U9.js";import"./mockSchema-Bm_b7OTN.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-C6S4eixI.js";import"./QueryClientProvider-C1R7g-OG.js";import"./Link-CLP81lMM.js";import"./Collapse-CAb26MWD.js";import"./_baseUniq-BdQbLaOf.js";import"./_getTag-un9JyNDF.js";import"./isEqual-BdjFDA1t.js";import"./merge-CxrTOCc8.js";import"./_initCloneObject-BaOl87LU.js";import"./tinycolor-Begke6kS.js";import"./Fade-lUhhxWxn.js";import"./inputBaseClasses-BX8uqVyC.js";import"./calculateFriendlyFileSize-Bn7tHELT.js";import"./CheckCircleTwoTone-Bzxp8M2J.js";import"./InfoTwoTone-CBQ80vHJ.js";import"./useMutation-CK6zHCSY.js";import"./dayjs.min-CnWJMgNC.js";import"./chunk-AYJ5UCUI-X-KGLRdk.js";import"./cloneDeep-C0UUJMWd.js";import"./Skeleton-IyX7bYK-.js";import"./HelpPopover-Baba-U91.js";import"./MarkdownPopover-DhDww8uI.js";import"./LightTooltip-34ojUy7b.js";import"./MarkdownSynapse-DVnd68Dv.js";import"./SkeletonButton-Bym4su5K.js";import"./SkeletonInlineBlock-BBVXXZdM.js";import"./SkeletonTable-C14xsmpV.js";import"./SkeletonParagraph-DjkR0pZx.js";import"./HelpOutlineTwoTone-Bgd-SJj9.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
