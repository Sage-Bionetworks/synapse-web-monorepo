import{g as i}from"./entityHandlers-KBNe6rR-.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DpJBj2AL.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-BJzgZ63T.js";import{g as m}from"./userProfileHandlers-DzXORzjo.js";import{P as L}from"./ProjectDataAvailability-DL2wx2h3.js";import"./index-gjiEN89c.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CPzZ02Yw.js";import"./mockTeam-CSlZqNLo.js";import"./SynapseConstants-CqTJLipI.js";import"./OrientationBanner-C9wDwZSC.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CnsReYf-.js";import"./index-BbTPqiCn.js";import"./iframe-BDeBTOK4.js";import"./spreadSx-CwcO6WA9.js";import"./react-BknCWz1L.js";import"./FullWidthAlert-BXBdUtvq.js";import"./Alert--2zsbDLV.js";import"./createTheme-C8aN_5H7.js";import"./DefaultPropsProvider-DfeCRuM2.js";import"./useSlot-DH9rqZvE.js";import"./useForkRef-BDlNsu6F.js";import"./createSimplePaletteValueFilter-CkWiCtpD.js";import"./createSvgIcon-DB8vrG54.js";import"./Close-FgBi9k_n.js";import"./IconButton-bBx42FY4.js";import"./useTimeout-D3iui2zG.js";import"./ButtonBase-B6SxUwFg.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Di39B066.js";import"./Paper-CW_EMfLy.js";import"./useTheme-D1Mz9iKf.js";import"./useTheme-CiV8_rAf.js";import"./Stack-Dkx_EbsU.js";import"./useThemeProps-BGnqLams.js";import"./getThemeProps-BkdBMERG.js";import"./extendSxProp-C7UKrf5K.js";import"./Box-DVYF36LU.js";import"./AlertTitle-Do0KjEmZ.js";import"./Typography-CyqgmQqf.js";import"./index-RffKHa2K.js";import"./ClickAwayListener-CgxM2Y3N.js";import"./getReactElementRef-BnzINgQV.js";import"./index-BEGoUC_S.js";import"./index-QvRUPdA0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DBmkL7Nf.js";import"./Tooltip-DIv0rXnM.js";import"./index-CKApejzQ.js";import"./useControlled-Cezacta0.js";import"./Popper-DA9vNxNk.js";import"./Button-DO_YtF-L.js";import"./uniqueId-BzfRbjRH.js";import"./toString-CaaFPOKx.js";import"./isArray-DP3AaeZx.js";import"./isSymbol-BRKELcfc.js";import"./times-D2v-CNuV.js";import"./_Uint8Array-DLQNtMzN.js";import"./identity-DKeuBCMA.js";import"./toInteger-CZcw0g2Z.js";import"./mockTableEntity-DRAbwjf0.js";import"./mockFileEntityACLVariants-BOsNGQgV.js";import"./fakerUtils-CDOEJ-uc.js";import"./mockFileEntity-ArrZKIIw.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BKBMn9dn.js";import"./mockSchema-jl5469iv.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BazSUp96.js";import"./QueryClientProvider-DROpbOor.js";import"./Link-t4uxn4d5.js";import"./Collapse-BvEvwhh1.js";import"./_baseUniq-D2vZ8VQ3.js";import"./_getTag-8zR4n8vk.js";import"./isEqual-BDrI-DAW.js";import"./noop-DX6rZLP_.js";import"./merge-V-4g9wfx.js";import"./_initCloneObject-DzFlCXpP.js";import"./tinycolor-Begke6kS.js";import"./Fade-DblKOQCF.js";import"./inputBaseClasses-CzCcMIdu.js";import"./calculateFriendlyFileSize-C9qxO0pM.js";import"./CheckCircleTwoTone-JwoKdBR7.js";import"./InfoTwoTone-DPKU0Q1t.js";import"./useMutation-B8qQRwG6.js";import"./dayjs.min-B-Cmgun6.js";import"./chunk-AYJ5UCUI-CooKSxTU.js";import"./cloneDeep-CmGcLtYN.js";import"./Skeleton-Dc4-dhYQ.js";import"./HelpPopover-CMUOmpv6.js";import"./MarkdownPopover-NSIwxvZ-.js";import"./LightTooltip-Dz8S05nD.js";import"./MarkdownSynapse-vn63ZeAJ.js";import"./SkeletonButton-B2AVZY2b.js";import"./SkeletonInlineBlock-i-hfby9F.js";import"./SkeletonTable-BGgT4bkS.js";import"./SkeletonParagraph-BABPpW_q.js";import"./HelpOutlineTwoTone-CUc0C_FR.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
