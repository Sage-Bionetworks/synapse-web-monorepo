import{g as i}from"./entityHandlers-pAx184pI.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BCul-Kto.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DQ-sb1xE.js";import{g as m}from"./userProfileHandlers-DFOcsWnl.js";import{P as L}from"./ProjectDataAvailability-Dvcrlw_m.js";import"./index-Bx63Gt-a.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BlmBG96c.js";import"./mockTeam-Dz-f75Zr.js";import"./SynapseConstants-BhTPdqIw.js";import"./OrientationBanner-CpM7feV-.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Dde0MMRw.js";import"./index-I47wiYIl.js";import"./iframe-BIRVXKtz.js";import"./spreadSx-CwcO6WA9.js";import"./react-57OIsDQs.js";import"./FullWidthAlert-BdZiiicp.js";import"./Alert-LFuot4nI.js";import"./createTheme-pm8LRWbk.js";import"./DefaultPropsProvider-Co2U1lMc.js";import"./useSlot-DuiEseUx.js";import"./useForkRef-F5lBvnNp.js";import"./createSimplePaletteValueFilter-COdju6vm.js";import"./createSvgIcon-DyrDxnX7.js";import"./Close-J--QK8Cg.js";import"./IconButton-RK8r0xoX.js";import"./useTimeout-15wWwOfh.js";import"./ButtonBase-DFqyxasY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DlzCVn2P.js";import"./Paper-C8Tlt3sf.js";import"./useTheme-Bjk-I74T.js";import"./useTheme-BOR1hqnI.js";import"./Stack-BN2JubgB.js";import"./useThemeProps-C7_WbH6p.js";import"./getThemeProps-C5epIPj9.js";import"./extendSxProp-B3jQw9QO.js";import"./Box-eSr-YAL7.js";import"./AlertTitle-CG27oB8x.js";import"./Typography-CZHcTN_R.js";import"./index-CXcybxh3.js";import"./ClickAwayListener-CXjYouvN.js";import"./getReactElementRef-yWR0RLTL.js";import"./index-nu_gismG.js";import"./index-DSWuzwrE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAInw1zM.js";import"./Tooltip-CxD1G1sD.js";import"./index-B93jVWeB.js";import"./useControlled-d8tFX0ZU.js";import"./Popper-CtTY4Mia.js";import"./Button-BI3Kszfw.js";import"./uniqueId-Cje7sxZB.js";import"./toString-98Z2_ExE.js";import"./isArray-Ctrc6fnc.js";import"./isSymbol-Bh97b_Nu.js";import"./times-BW9WjH4U.js";import"./_Uint8Array-DS-5GFdR.js";import"./identity-DKeuBCMA.js";import"./toInteger-Sos9jOwB.js";import"./mockTableEntity-DJm1ydZa.js";import"./mockFileEntityACLVariants-OON4xjRr.js";import"./fakerUtils-DoNJ2KAJ.js";import"./mockFileEntity-B783vpDG.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CJ7wJVhX.js";import"./mockSchema-hMJx-ugF.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-D4xRRBQP.js";import"./QueryClientProvider-dbCAoZAQ.js";import"./Link-DKOI-_XW.js";import"./Collapse-CHjz_AqJ.js";import"./_baseUniq-1B8GuVm1.js";import"./_getTag-CleDswLE.js";import"./isEqual-CXvU_izF.js";import"./noop-DX6rZLP_.js";import"./merge-CQisCZUP.js";import"./_initCloneObject-CR2LMhD8.js";import"./tinycolor-Begke6kS.js";import"./Fade-BNmhwNHo.js";import"./inputBaseClasses-ejL_XemP.js";import"./calculateFriendlyFileSize-tXFygyJT.js";import"./CheckCircleTwoTone-BrqBPp1W.js";import"./InfoTwoTone-CFBOiOe6.js";import"./useMutation-ChkO_Gzl.js";import"./dayjs.min-BvbWT1W4.js";import"./chunk-AYJ5UCUI-COIl7r1G.js";import"./cloneDeep-CC58hguY.js";import"./Skeleton-CgDjgcaK.js";import"./HelpPopover-CQzxf5LM.js";import"./MarkdownPopover-CZS82M88.js";import"./LightTooltip-D7D1faCW.js";import"./MarkdownSynapse-BI5Y3gcr.js";import"./SkeletonButton-DDP6gYj6.js";import"./SkeletonInlineBlock-DYNPLLaK.js";import"./SkeletonTable-C1x9u-pO.js";import"./SkeletonParagraph-DjzEQ1Ih.js";import"./HelpOutlineTwoTone-VBEuoDzr.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
