import{g as i}from"./entityHandlers-DPPC4sQV.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CeB0xe6L.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-C3S31h4a.js";import{g as m}from"./userProfileHandlers-TOUWugKf.js";import{P as L}from"./ProjectDataAvailability-CXc2XtWe.js";import"./index-jQWsD48Y.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-C5pTXYLQ.js";import"./mockTeam-G7mJYEYD.js";import"./SynapseConstants-CEjEDq8u.js";import"./OrientationBanner-CGeLU5Gh.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-nnySlh3_.js";import"./index-gzV-alW2.js";import"./iframe-CIVWQ33K.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bm_BhgKX.js";import"./FullWidthAlert-XP7ocI2x.js";import"./Alert-C3HI3P9G.js";import"./createTheme-BA32YtVb.js";import"./DefaultPropsProvider-7LTu_nV0.js";import"./useSlot-Fmis5Wjd.js";import"./useForkRef-CiJASnht.js";import"./createSimplePaletteValueFilter-0d-v7Hop.js";import"./createSvgIcon-D1QNFdjc.js";import"./Close-62PudIRj.js";import"./IconButton-D8S1CJpy.js";import"./useTimeout-CxPr5NUX.js";import"./ButtonBase-BCM_qFb6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-WbW725xQ.js";import"./Paper-C7lyUKCR.js";import"./useTheme-BZAXixA8.js";import"./useTheme-Da2-NH-T.js";import"./Stack-C6tV91ai.js";import"./useThemeProps-BIHnaG_n.js";import"./getThemeProps-ChgRYrqu.js";import"./extendSxProp-YxuWZy5-.js";import"./Box-BPtaDF2R.js";import"./AlertTitle-CpWyWMb4.js";import"./Typography-CZJl8X-1.js";import"./index-Du0AoN3s.js";import"./ClickAwayListener-CBaHIHRJ.js";import"./getReactElementRef-y_Sl7aoG.js";import"./index-C0-mTje_.js";import"./index-B91qemJH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D-7O8-XK.js";import"./Tooltip-zgLZWkWd.js";import"./index-B4U5oXLw.js";import"./useControlled-D-YZcAca.js";import"./Popper-KFskyvW_.js";import"./Button-qzsh14nT.js";import"./uniqueId-BcgCMnS0.js";import"./toString-CYbhFFbq.js";import"./isArray-DVD3pNqz.js";import"./isSymbol-Bm-mgUZ-.js";import"./times-BOYSUsxP.js";import"./_Uint8Array-DQwJx2XB.js";import"./identity-DKeuBCMA.js";import"./toInteger-CWQgTT_t.js";import"./mockTableEntity-DAaflBHO.js";import"./mockFileEntityACLVariants-ByyfCD2y.js";import"./fakerUtils-BkUCvA3L.js";import"./mockFileEntity-CCNhGWRg.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CYf5nO-H.js";import"./mockSchema-CZt0Y5aX.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-RFtqpdqG.js";import"./QueryClientProvider-C8qXa91E.js";import"./Link-DogJ1V6b.js";import"./Collapse-CnT0kb48.js";import"./_baseUniq-DGNmZFTe.js";import"./_getTag-DdIxGYJG.js";import"./isEqual-BSGvFaHM.js";import"./noop-DX6rZLP_.js";import"./merge-CmCs04-I.js";import"./_initCloneObject-BHRy_7Wm.js";import"./tinycolor-Begke6kS.js";import"./Fade-DND1I4Lo.js";import"./inputBaseClasses-BLHktJev.js";import"./calculateFriendlyFileSize-zUPO000Z.js";import"./CheckCircleTwoTone-DCcbywJT.js";import"./InfoTwoTone-DV-D_RT7.js";import"./useMutation-BzDbphy2.js";import"./dayjs.min-LJjFF34K.js";import"./chunk-AYJ5UCUI-C5BA4_2k.js";import"./cloneDeep-DU8IJ5IE.js";import"./Skeleton-DVIPn0Lj.js";import"./HelpPopover-B0-TaxGC.js";import"./MarkdownPopover-Cs4SxHMF.js";import"./LightTooltip-C1QMfMpT.js";import"./MarkdownSynapse-EKNHdnCS.js";import"./SkeletonButton-BSUk_V27.js";import"./SkeletonInlineBlock-C8ZHcqgC.js";import"./SkeletonTable-gFeTiDeb.js";import"./SkeletonParagraph-xTgE95OV.js";import"./HelpOutlineTwoTone-BAPmfmiT.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
