import{g as i}from"./entityHandlers-CH0_EpV5.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Do5IBH1c.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-Bkx214N4.js";import{g as m}from"./userProfileHandlers-eTakI-iq.js";import{P as L}from"./ProjectDataAvailability-D4a5xpyc.js";import"./index-DbtA1KcR.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CTqc_UJ8.js";import"./mockTeam-Cf-CjduE.js";import"./SynapseConstants-C_IwDCRv.js";import"./OrientationBanner-D7uInX_M.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D2v4tOag.js";import"./index-sd0YBnCi.js";import"./iframe-DVYlga3I.js";import"./spreadSx-CwcO6WA9.js";import"./react-BdgbTTL6.js";import"./FullWidthAlert-D-JIEHkV.js";import"./Alert-Lky9k3yL.js";import"./createTheme-DdIeWMhk.js";import"./DefaultPropsProvider-Yj25Mou0.js";import"./useSlot-B15kkZE-.js";import"./useForkRef-CHUct0W1.js";import"./createSimplePaletteValueFilter-zeUINUQY.js";import"./createSvgIcon-BB914k_q.js";import"./Close-B4WTN9qd.js";import"./IconButton-Drb2gRwi.js";import"./useTimeout-B_Tp_-WM.js";import"./ButtonBase-BTjmQqw3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CVVcdaCj.js";import"./Paper-DTwSBB6m.js";import"./useTheme-DT7PkjGc.js";import"./useTheme-BgNkO1EL.js";import"./Stack-ec17v0Gb.js";import"./extendSxProp-mslzv5DB.js";import"./getThemeProps-9mJ2iQYz.js";import"./Box-_qmyWplA.js";import"./AlertTitle-BiuU5EAB.js";import"./Typography-D5MbW9_J.js";import"./index-BmMoY9aL.js";import"./ClickAwayListener-lzupNfXx.js";import"./getReactElementRef-Cu_0CXbf.js";import"./index-DdccfWLe.js";import"./index-FmDvS8Q8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-EJ2qm4Dg.js";import"./Tooltip-DVqhwzdl.js";import"./index-Djpzpj5X.js";import"./useControlled-DYvBVNIT.js";import"./Popper-DATX_HyC.js";import"./Button-KNb4UeA6.js";import"./uniqueId-BVm9a9aF.js";import"./toString-B0yKhShP.js";import"./isArray-BQwmoBWm.js";import"./isSymbol-DWCTm7th.js";import"./times-42h93ky7.js";import"./_Uint8Array-CGDsgUvk.js";import"./identity-DKeuBCMA.js";import"./toInteger-C3uJvns3.js";import"./mockTableEntity-XdOQ0TzF.js";import"./mockFileEntityACLVariants-CBuKr5Y9.js";import"./fakerUtils-BiQNcRxd.js";import"./mockFileEntity-B5Es5apF.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BwFzCQwT.js";import"./mockSchema-irT4z6ZR.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-C6imdaHY.js";import"./QueryClientProvider-nJ0R6vFz.js";import"./Link-DXy5Fg4p.js";import"./Collapse-DWu1Ndrz.js";import"./_baseUniq-BPJPICvm.js";import"./_getTag-C2Lnsqb5.js";import"./isEqual-BnkqVwwC.js";import"./merge-BnaNBIC1.js";import"./_initCloneObject-DaiBktpY.js";import"./tinycolor-Begke6kS.js";import"./Fade-C1-s1xYp.js";import"./inputBaseClasses-BGVgyZbo.js";import"./calculateFriendlyFileSize-CCEZ1tKZ.js";import"./CheckCircleTwoTone-BJMpAPc2.js";import"./InfoTwoTone-D_B42BPL.js";import"./useMutation-DCePfSwN.js";import"./dayjs.min-CvA7XRhY.js";import"./chunk-AYJ5UCUI-BNxn_8R-.js";import"./cloneDeep-gKltjWRB.js";import"./Skeleton-DJOP7Jrw.js";import"./HelpPopover-DEAykH7K.js";import"./MarkdownPopover-BkktxsH_.js";import"./LightTooltip-2SQ0IzZu.js";import"./MarkdownSynapse-CwUoSZ-E.js";import"./SkeletonButton-B6JhjAw1.js";import"./SkeletonInlineBlock-CYmoFzMk.js";import"./SkeletonTable-C1xN2z18.js";import"./SkeletonParagraph-DKweg1XM.js";import"./HelpOutlineTwoTone-CQ8-fl2s.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
