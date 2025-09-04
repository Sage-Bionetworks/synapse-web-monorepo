import{g as i}from"./entityHandlers-CiUlnkMU.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-CzKjjYtp.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-DMkgKICF.js";import{g as m}from"./userProfileHandlers-B74EKMBS.js";import{P as L}from"./ProjectDataAvailability-D1aqV1nr.js";import"./index-G2k9LsG8.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BzbSfANa.js";import"./mockTeam-BpF9eYkR.js";import"./SynapseConstants-DhETcuUG.js";import"./OrientationBanner-BO2Urp1Z.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DmNLJKNh.js";import"./index-D4HCKe9w.js";import"./iframe-DmVsNHze.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cf5Ec-mS.js";import"./FullWidthAlert-DTnEraAC.js";import"./Alert-DZeS4a6d.js";import"./createTheme-DDjBIDwT.js";import"./DefaultPropsProvider-ZG31g4it.js";import"./useSlot-B6tvNwBv.js";import"./useForkRef-CtbIu23o.js";import"./createSimplePaletteValueFilter-BfnPoD90.js";import"./createSvgIcon-KWX4yQl-.js";import"./Close-BXYzJc-1.js";import"./IconButton-C_01hWEL.js";import"./useTimeout-B3vqbFY1.js";import"./ButtonBase-5xAiWb9k.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClcLOpgT.js";import"./Paper-D9hajRDM.js";import"./useTheme-CMCRSdXO.js";import"./useTheme-B-XUUHR4.js";import"./Stack-pvEbUifr.js";import"./extendSxProp-BRR-amD5.js";import"./getThemeProps-vcNQnBjM.js";import"./Box-CnC4K3Hl.js";import"./AlertTitle-B8t1dWfY.js";import"./Typography-COIcc1hS.js";import"./index-Dv8t99-T.js";import"./ClickAwayListener-DTjm8Qvd.js";import"./getReactElementRef-Cq2rgrLM.js";import"./index-CDdDji97.js";import"./index-ij53IW3H.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAl4bw2D.js";import"./Tooltip-BiehG5fl.js";import"./index-Cr6df_e3.js";import"./useControlled-CG4yijLR.js";import"./Popper-D6_eAqlt.js";import"./Button-B4c76i7l.js";import"./uniqueId-DySWb7yp.js";import"./toString-D5g_QE-Z.js";import"./isArray-DGXFKXW_.js";import"./isSymbol-C0RTHsY7.js";import"./times-CqWp89Mi.js";import"./_Uint8Array-v1dD2eCV.js";import"./identity-DKeuBCMA.js";import"./toInteger-DyvaWaYA.js";import"./mockTableEntity-DgvLJ8-9.js";import"./mockFileEntityACLVariants-CsPcnx9w.js";import"./fakerUtils-B5Ftbhwv.js";import"./mockFileEntity-Euu6aO5l.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-Cnsr83i_.js";import"./mockSchema-BcIs6BUT.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-c65xEHlU.js";import"./QueryClientProvider-C2sJR7rF.js";import"./Link-D-8puque.js";import"./Collapse-TlU8ywi5.js";import"./_baseUniq-BWQ-3uky.js";import"./_getTag-nqsjAOYQ.js";import"./isEqual-CR012Pz3.js";import"./merge-h4l3whDn.js";import"./_initCloneObject-DBdarpnq.js";import"./tinycolor-Begke6kS.js";import"./Fade-CQjdMO4r.js";import"./inputBaseClasses-ByCdm5ps.js";import"./calculateFriendlyFileSize-DXggbpxX.js";import"./CheckCircleTwoTone-BcVs8xEZ.js";import"./InfoTwoTone-QwWHAuS5.js";import"./useMutation-Ddf_PzNC.js";import"./dayjs.min-CwuDG8BM.js";import"./chunk-AYJ5UCUI-CwOFpPmP.js";import"./cloneDeep-ChqpFpcu.js";import"./Skeleton-BWhOU1Pc.js";import"./HelpPopover-MguKU2y2.js";import"./MarkdownPopover-DqUcB6FQ.js";import"./LightTooltip-DzntLZDS.js";import"./MarkdownSynapse-sCcxACVe.js";import"./SkeletonButton-D8F-osuW.js";import"./SkeletonInlineBlock-C8_IBTRt.js";import"./SkeletonTable-Q-mqnuga.js";import"./SkeletonParagraph-C9JmycIn.js";import"./HelpOutlineTwoTone-FctHalbx.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
