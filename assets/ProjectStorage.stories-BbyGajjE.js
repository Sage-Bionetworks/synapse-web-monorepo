import{g as i}from"./entityHandlers-CEt_kURf.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CiWZBkKO.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DTu1g-MR.js";import{g as m}from"./userProfileHandlers-CvZnxQv_.js";import{P as L}from"./ProjectDataAvailability-CJocNSuT.js";import"./index-BcD7MGFv.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bozt1BcV.js";import"./mockTeam-zMD-skXM.js";import"./SynapseConstants-BF0xI1nm.js";import"./OrientationBanner-CMi5J3Xm.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DxhPwj9j.js";import"./index-DVXuPh3J.js";import"./iframe-CcdBVske.js";import"./spreadSx-CwcO6WA9.js";import"./react-BxKwmmbS.js";import"./FullWidthAlert-D8GNbXzy.js";import"./Alert-Dhfyg0x0.js";import"./createTheme-DhCIHWzU.js";import"./DefaultPropsProvider-P-wA5QFY.js";import"./useSlot-sJj7T_V9.js";import"./useForkRef-DINnoC6x.js";import"./createSimplePaletteValueFilter-t7pPNWrv.js";import"./createSvgIcon-BupLM2YH.js";import"./Close-Xv7jIJH3.js";import"./IconButton-C5Mr8mVs.js";import"./useTimeout-lMzTsu5c.js";import"./ButtonBase-C7m_tL04.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-xe4givlB.js";import"./Paper-SRl-J5j-.js";import"./useTheme-Bw8q8KD5.js";import"./useTheme-C0vPMqs4.js";import"./Stack-8QssDc1d.js";import"./extendSxProp-CTnaCTz_.js";import"./getThemeProps-CWmg3UDs.js";import"./Box-DHdI_VIg.js";import"./AlertTitle-DWvpSUlS.js";import"./Typography-B5kl18Sk.js";import"./index-Ebch7RO5.js";import"./ClickAwayListener-9C0d15Hg.js";import"./getReactElementRef-CbfwcKB1.js";import"./index-C9FXgNRy.js";import"./index-CJUR3CjR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-J7OzO2bk.js";import"./Tooltip-CdyQ0dq6.js";import"./index-DxiwdZ50.js";import"./useControlled-BfSlMi9Y.js";import"./Popper-DsgILYQG.js";import"./Button-CTAUiiqM.js";import"./uniqueId-TyUCqP8Y.js";import"./toString-u7Ie6P0T.js";import"./isArray-Cl2ALenN.js";import"./isSymbol-U5ztrPps.js";import"./times-B5Zk2SNp.js";import"./_Uint8Array-B_QpfvPN.js";import"./identity-DKeuBCMA.js";import"./toInteger-DwVRmScC.js";import"./mockTableEntity-_Cw7lNoJ.js";import"./mockFileEntityACLVariants-4kAlQM5L.js";import"./fakerUtils-C7JZwyum.js";import"./mockFileEntity-NOBuL_mY.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-D5ilIHre.js";import"./mockSchema-DksuVZ5A.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DB03csRo.js";import"./QueryClientProvider-BDV_sZ5X.js";import"./Link-DjvlLkni.js";import"./Collapse-tnSpEh-M.js";import"./_baseUniq-BZvbcYpQ.js";import"./_getTag-D4hgnD7J.js";import"./isEqual-B7q4kpMQ.js";import"./merge-lG9uDrSF.js";import"./_initCloneObject-LbJB5-xz.js";import"./tinycolor-Begke6kS.js";import"./Fade-BQVsj24k.js";import"./inputBaseClasses-4PWin2zj.js";import"./calculateFriendlyFileSize-Ci7_l22M.js";import"./CheckCircleTwoTone-C_TFawf0.js";import"./InfoTwoTone-wfilD4hN.js";import"./useMutation-BE_nYNq6.js";import"./dayjs.min-BjRyZKBT.js";import"./chunk-AYJ5UCUI-CRi1VNEj.js";import"./cloneDeep-Cgj8pCn6.js";import"./Skeleton-Ced94OUm.js";import"./HelpPopover-BYfL3T2E.js";import"./MarkdownPopover-C-2IM9DT.js";import"./LightTooltip-BRQJHazD.js";import"./MarkdownSynapse-BChfeZ3l.js";import"./SkeletonButton-BT1TjPSL.js";import"./SkeletonInlineBlock-CCuugtxf.js";import"./SkeletonTable-CFK-Ww2S.js";import"./SkeletonParagraph-D1vBYK5a.js";import"./HelpOutlineTwoTone-C7V89pG_.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
