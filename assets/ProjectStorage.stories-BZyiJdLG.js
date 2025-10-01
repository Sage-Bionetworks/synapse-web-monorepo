import{g as i}from"./entityHandlers-DG_A3Vtv.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-G66KxfZQ.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-BYv96D5b.js";import{g as m}from"./userProfileHandlers-C1ujs4h2.js";import{P as L}from"./ProjectDataAvailability-4xem6F1l.js";import"./index-DlIti23g.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-D5uBI-9p.js";import"./mockTeam-CpXjFoRD.js";import"./SynapseConstants-CHsDh7RO.js";import"./OrientationBanner-DGQnFCDH.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-cEXOR-s0.js";import"./index-DiXMM0wQ.js";import"./iframe-Cz30SbtZ.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_LjTTx-.js";import"./FullWidthAlert-CTeztU2Z.js";import"./Alert-qGFNccp3.js";import"./createTheme-C6Taoo5g.js";import"./DefaultPropsProvider-Bui4IzwN.js";import"./useSlot-Ds0Mc0Ou.js";import"./useForkRef-Cc3SVOJt.js";import"./createSimplePaletteValueFilter-BaC-FLVO.js";import"./createSvgIcon-DYM86rZv.js";import"./Close-Clq7eSLy.js";import"./IconButton-COwuqtT4.js";import"./useTimeout-CYUA101b.js";import"./ButtonBase-Bo73fpiC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DyDjhxBI.js";import"./Paper-B1zZt7O7.js";import"./useTheme-EuFAtu8l.js";import"./useTheme-DFVbi8Ay.js";import"./Stack-DmcIcguA.js";import"./extendSxProp-C7hIpNK4.js";import"./getThemeProps-D5cDfXzu.js";import"./Box-k_g3WZ6l.js";import"./AlertTitle-BWUKECEn.js";import"./Typography-CT4xLIUA.js";import"./index-BFBmiiq7.js";import"./ClickAwayListener-tl_dLV2J.js";import"./getReactElementRef-D01GUzN3.js";import"./index-C-D1k6wC.js";import"./index-DJgSRtY2.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C0nCZHMB.js";import"./Tooltip-Cs1bMaIY.js";import"./index-CWcOH_w-.js";import"./useControlled-BEO5kqGQ.js";import"./Popper-CH3jVZGd.js";import"./Button-DDb1CEug.js";import"./uniqueId-Dak7DqKW.js";import"./toString-Coc8hyOq.js";import"./isArray-abBARDY4.js";import"./isSymbol-D2zsJq7i.js";import"./times-BGBaWeBv.js";import"./_Uint8Array-DoEymzPe.js";import"./identity-DKeuBCMA.js";import"./toInteger-NIEYp5Wi.js";import"./mockTableEntity-Dh3MLAo5.js";import"./mockFileEntityACLVariants-DBV17tGE.js";import"./fakerUtils-CcvJQyAH.js";import"./mockFileEntity-DwqtNWLC.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CujPMe3e.js";import"./mockSchema-D5YZkL98.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-XvHzqDjO.js";import"./QueryClientProvider-DW6QrWAK.js";import"./Link-WN2Ht7C2.js";import"./Collapse-DH6lKLpe.js";import"./_baseUniq-kvNiw2RP.js";import"./_getTag-CGMrV_Eo.js";import"./isEqual-Dl6e1zWB.js";import"./merge-Csthr0QZ.js";import"./_initCloneObject-BVPOTz7a.js";import"./tinycolor-Begke6kS.js";import"./Fade-BRRG5DzI.js";import"./inputBaseClasses-DlDltUjN.js";import"./calculateFriendlyFileSize-BrqlOu-4.js";import"./CheckCircleTwoTone-sKhpjZEv.js";import"./InfoTwoTone-CMUbsSvw.js";import"./useMutation-CS9idiqR.js";import"./dayjs.min-C0Wpa3r2.js";import"./chunk-AYJ5UCUI-CIeRibBH.js";import"./cloneDeep-CHykcOUR.js";import"./Skeleton-qy9X9A7k.js";import"./HelpPopover-DmuJVWXi.js";import"./MarkdownPopover-8QYn52X3.js";import"./LightTooltip-BCNpLVt6.js";import"./MarkdownSynapse-BPdviUOi.js";import"./SkeletonButton-C043_GVS.js";import"./SkeletonInlineBlock-C-zeqZWl.js";import"./SkeletonTable-DQdkgwPh.js";import"./SkeletonParagraph-CQ-ra46k.js";import"./HelpOutlineTwoTone-BWTPjMHv.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
