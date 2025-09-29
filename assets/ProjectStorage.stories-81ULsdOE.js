import{g as i}from"./entityHandlers-D4day4sS.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DM8ODnE1.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-_B9HbBpY.js";import{g as m}from"./userProfileHandlers-rH06HajU.js";import{P as L}from"./ProjectDataAvailability-DpNDOhXD.js";import"./index-D6zMJUUs.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B8eo9IvW.js";import"./mockTeam-B8mMkV5K.js";import"./SynapseConstants-BhK8041S.js";import"./OrientationBanner-CZLIqqQW.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CXGD1nhD.js";import"./index-BloLEAy1.js";import"./iframe-CKfgUuPM.js";import"./spreadSx-CwcO6WA9.js";import"./react-BruRYVnC.js";import"./FullWidthAlert-PH21VpMl.js";import"./Alert-CVuydjvy.js";import"./createTheme-CZav1_Gb.js";import"./DefaultPropsProvider-Cc2WXfIy.js";import"./useSlot-7ZCLd36S.js";import"./useForkRef-Cb6JBq-d.js";import"./createSimplePaletteValueFilter-eby9pYbG.js";import"./createSvgIcon-pEoAHn1W.js";import"./Close-vzj9hjx-.js";import"./IconButton-DcP9VhRe.js";import"./useTimeout-sp5LbUOC.js";import"./ButtonBase-i9yFzP5m.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BDbmFF2h.js";import"./Paper-CIe6YCK_.js";import"./useTheme-BB7mkDQM.js";import"./useTheme-sze_bRIR.js";import"./Stack-S_1S8qQR.js";import"./extendSxProp-C1UJW0LD.js";import"./getThemeProps-y8DddFS4.js";import"./Box-B2NAFohM.js";import"./AlertTitle-J1r0sIO1.js";import"./Typography-DAbfgqiK.js";import"./index-BU6WjtVn.js";import"./ClickAwayListener-xpLIiVXr.js";import"./getReactElementRef-91ouRfnc.js";import"./index-CVk8f9Z0.js";import"./index-KlmJpNBV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Btkl0dwb.js";import"./Tooltip-LLJF2Sui.js";import"./index-CaphlovL.js";import"./useControlled-eGHYQS1z.js";import"./Popper-CCeV26oI.js";import"./Button-CMHi5O9T.js";import"./uniqueId-fLo1fJUi.js";import"./toString-DVQmHkRT.js";import"./isArray-C0axBQbV.js";import"./isSymbol-CLxX1gXb.js";import"./times-DokJBrpe.js";import"./_Uint8Array-DaYXT6X2.js";import"./identity-DKeuBCMA.js";import"./toInteger-OQRcS22X.js";import"./mockTableEntity-DzGY3DAV.js";import"./mockFileEntityACLVariants-CYBmyz_W.js";import"./fakerUtils-CTTa8FxO.js";import"./mockFileEntity-KcoS96E_.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-ChaNteAl.js";import"./mockSchema-MZQLOG-d.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-A2nSLqYV.js";import"./QueryClientProvider-B-jv1tS7.js";import"./Link-t6I2sdQ7.js";import"./Collapse-DN8doD0U.js";import"./_baseUniq-BVIKsDod.js";import"./_getTag-BL3im_fO.js";import"./isEqual-BS3sRW2T.js";import"./merge-B5cZnhNH.js";import"./_initCloneObject-IUGla6cP.js";import"./tinycolor-Begke6kS.js";import"./Fade-BOoRDzga.js";import"./inputBaseClasses-XK2vZhF1.js";import"./calculateFriendlyFileSize-Cm0JtIBR.js";import"./CheckCircleTwoTone-DrxZDCjx.js";import"./InfoTwoTone-DirFePmA.js";import"./useMutation-imcDv-vJ.js";import"./dayjs.min-BQ6mRLia.js";import"./chunk-AYJ5UCUI-CjQA8okQ.js";import"./cloneDeep-CaO4d-Vx.js";import"./Skeleton-DJX65kDG.js";import"./HelpPopover-Bv3Cxx7v.js";import"./MarkdownPopover-n1CDp5Wz.js";import"./LightTooltip-3E2vqbri.js";import"./MarkdownSynapse-CwxIkFCl.js";import"./SkeletonButton-C4L_FMdR.js";import"./SkeletonInlineBlock-D2w-ccA5.js";import"./SkeletonTable-DPKa3L2H.js";import"./SkeletonParagraph-YYuPxs89.js";import"./HelpOutlineTwoTone-BEMbSgsV.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
