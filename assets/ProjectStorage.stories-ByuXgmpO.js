import{g as i}from"./entityHandlers-DlhmzcyW.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DO1cPBl7.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-BTIzx0Wj.js";import{g as m}from"./userProfileHandlers-C3j9wBGO.js";import{P as L}from"./ProjectDataAvailability-DSkWrX40.js";import"./index-x6XICoLR.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DCOoBqmt.js";import"./mockTeam-BMNQe9Ir.js";import"./SynapseConstants-BliToi0e.js";import"./OrientationBanner-DGX7LYY4.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BRBsISmc.js";import"./index-CWpaGFK7.js";import"./iframe-CJwrIpof.js";import"./spreadSx-CwcO6WA9.js";import"./react-4i24zxDG.js";import"./FullWidthAlert-7dmevFvZ.js";import"./Alert-e1fdK64c.js";import"./createTheme-Qw6dCODO.js";import"./DefaultPropsProvider-B_1_wKWC.js";import"./useSlot-CS4KC0jU.js";import"./useForkRef-ByDnI1AI.js";import"./createSimplePaletteValueFilter-DNCeFqr7.js";import"./createSvgIcon-D1X3oUr7.js";import"./Close-Bw8m5Hef.js";import"./IconButton-Gs_sYVQS.js";import"./useTimeout-CzHT3KD_.js";import"./ButtonBase-Wr9y_zmM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C8YsOKf9.js";import"./Paper-BVPD3mQe.js";import"./useTheme-DHciqbbk.js";import"./useTheme-6nf7h3Tc.js";import"./Stack-Bf8FV3-F.js";import"./extendSxProp-BByHy23N.js";import"./getThemeProps-CCMOZlfl.js";import"./Box-C-eGKuIR.js";import"./AlertTitle-CG-a6DqA.js";import"./Typography-B79vr9v9.js";import"./index-CMKHL7or.js";import"./ClickAwayListener-46oNtdkb.js";import"./getReactElementRef-86s1n294.js";import"./index-D6cMwY1N.js";import"./index-D2WEh5JI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CIJVMZUl.js";import"./Tooltip-D6q9sssE.js";import"./index-uY5dmQq2.js";import"./useControlled-VdZXMxh4.js";import"./Popper-Fyhhd020.js";import"./Button-CA46tzHk.js";import"./uniqueId-w20EtIh7.js";import"./toString-DpF9Hd7T.js";import"./isArray-BrJsc936.js";import"./isSymbol-D36BvKFW.js";import"./times-DY7cTlCK.js";import"./_Uint8Array-B8CGF7rC.js";import"./identity-DKeuBCMA.js";import"./toInteger-BRHi2Sub.js";import"./mockTableEntity-DYu0gvGp.js";import"./mockFileEntityACLVariants-4SO1Qjlh.js";import"./fakerUtils-CAci-KZg.js";import"./mockFileEntity-CBfnWO42.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-Bc_omd3L.js";import"./mockSchema-OR31Akwa.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DrawGXCF.js";import"./QueryClientProvider-CFTn6vB9.js";import"./Link-yQq2R-UK.js";import"./Collapse-BOJ3O8As.js";import"./_baseUniq-DB7Cxeo-.js";import"./_getTag-BOtS_nWm.js";import"./isEqual-pCpS_l18.js";import"./merge-D9QsSWfJ.js";import"./_initCloneObject-Br1VFpBs.js";import"./tinycolor-Begke6kS.js";import"./Fade-BBSHnXK7.js";import"./inputBaseClasses-DbIpK7Kh.js";import"./calculateFriendlyFileSize-B39fPYuC.js";import"./CheckCircleTwoTone-CxSYaKRq.js";import"./InfoTwoTone-CnjItO4h.js";import"./useMutation-Dbv4F8QA.js";import"./dayjs.min-DiMZjeZL.js";import"./chunk-AYJ5UCUI-CERoDU_H.js";import"./cloneDeep-h3S60Dr-.js";import"./Skeleton-NVnaak77.js";import"./HelpPopover-BJhIqlze.js";import"./MarkdownPopover-DRQysXKm.js";import"./LightTooltip-xmgpzfyL.js";import"./MarkdownSynapse-TmKPcuUB.js";import"./SkeletonButton-D8AR7jvp.js";import"./SkeletonInlineBlock-D2h5bgPq.js";import"./SkeletonTable-C4D7A4_N.js";import"./SkeletonParagraph-B2SNRfpB.js";import"./HelpOutlineTwoTone-CWTGM46P.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
