import{g as i}from"./entityHandlers-BXRSSnph.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-lb8uXJha.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-Dp-zOFqY.js";import{g as m}from"./userProfileHandlers-Dfb4OS-o.js";import{P as L}from"./ProjectDataAvailability-CesRBpnz.js";import"./index-C_rPHYgT.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CLHf9qhR.js";import"./mockTeam-ehpp9a4f.js";import"./SynapseConstants-CBaWUDFp.js";import"./OrientationBanner-C_cI8Wdu.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-HT8vm-KD.js";import"./index-CJTqbwg9.js";import"./iframe-CG85BzK6.js";import"./spreadSx-CwcO6WA9.js";import"./react-C5eOr4qq.js";import"./FullWidthAlert-BYzUdYmy.js";import"./Alert-CfqRHpto.js";import"./createTheme-gj4ta8JK.js";import"./DefaultPropsProvider-BIvMs3xX.js";import"./useSlot-C9QU161m.js";import"./useForkRef-CL-HmWE-.js";import"./createSimplePaletteValueFilter-Xz4nl1-g.js";import"./createSvgIcon-Ds67miPL.js";import"./Close-DUTvymq8.js";import"./IconButton-BVm2k0V8.js";import"./useTimeout-DDPxidDq.js";import"./ButtonBase-CmahN1yA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BBZlh3jv.js";import"./Paper-_TypEQXS.js";import"./useTheme-J3HQsDMf.js";import"./useTheme-DHaXmWDd.js";import"./Stack-B6Fv6rDP.js";import"./extendSxProp-LD-I1WVR.js";import"./getThemeProps-BkNvNRVH.js";import"./Box-DO5is7mO.js";import"./AlertTitle-DW1ksqT6.js";import"./Typography-BjJo8e6h.js";import"./index-ClhWbTH2.js";import"./ClickAwayListener-Bz0pJjhC.js";import"./getReactElementRef-DefmUWlD.js";import"./index-DhqT-wZf.js";import"./index-B30IKtuV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DT56OTPx.js";import"./Tooltip-_Br_YO6O.js";import"./index-BTTzR3FC.js";import"./useControlled-CGanW96O.js";import"./Popper-TkGtPLMk.js";import"./Button-D8a1OC-O.js";import"./uniqueId-BS6rIJoH.js";import"./toString-Sbl_gexy.js";import"./isArray-ECjS2Mk1.js";import"./isSymbol-Bc0E7QSo.js";import"./times-BU-w-Ma5.js";import"./_Uint8Array-Bge7RmPT.js";import"./identity-DKeuBCMA.js";import"./toInteger-BRHbTtsF.js";import"./mockTableEntity-Ckf0blSS.js";import"./mockFileEntityACLVariants-Cox2hLi2.js";import"./fakerUtils-DSxBiPns.js";import"./mockFileEntity-CSfJyLv0.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CFQctnoN.js";import"./mockSchema-DqskziLE.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DccECcxJ.js";import"./QueryClientProvider-BiW_y-Nb.js";import"./Link-w5BOvl6J.js";import"./Collapse-DPBKAoXV.js";import"./_baseUniq-Cm1Ujzdq.js";import"./_getTag-CLHhZoU-.js";import"./isEqual-l9qiUE8w.js";import"./merge-DOaqpN72.js";import"./_initCloneObject-BNcBeVfK.js";import"./tinycolor-Begke6kS.js";import"./Fade-BO0WQVeb.js";import"./inputBaseClasses-8RM-Z2Qw.js";import"./calculateFriendlyFileSize-BfxCmKAO.js";import"./CheckCircleTwoTone-DRnqgNMo.js";import"./InfoTwoTone-tVAIT2bF.js";import"./useMutation-DzECAvFo.js";import"./dayjs.min-DN9ltQUU.js";import"./chunk-AYJ5UCUI-J8G0ovJt.js";import"./cloneDeep-B7tqKnHv.js";import"./Skeleton-jH73I46F.js";import"./HelpPopover-Dz5azijv.js";import"./MarkdownPopover-BGd0DFa-.js";import"./LightTooltip-t7dWQhVM.js";import"./MarkdownSynapse-CkTwKD2h.js";import"./SkeletonButton-CCljSEP8.js";import"./SkeletonInlineBlock-GNyZlT8w.js";import"./SkeletonTable-DvuctY-5.js";import"./SkeletonParagraph-BDf2vA-h.js";import"./HelpOutlineTwoTone-D0liaSOs.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
