import{g as i}from"./entityHandlers-CL-AMOHb.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Dd0vPh_H.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CecFIQAU.js";import{g as m}from"./userProfileHandlers-D3jHDMt7.js";import{P as L}from"./ProjectDataAvailability-DINjhyka.js";import"./index-Bod4ChtJ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BD8tHBMq.js";import"./mockTeam-DhB1Nzf_.js";import"./SynapseConstants-DRPzlq-o.js";import"./OrientationBanner-CSetEjqk.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-B0gefgMG.js";import"./index-CvyYqbbB.js";import"./iframe-B3xGRWau.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJmaa9HB.js";import"./FullWidthAlert-LRva0ICM.js";import"./Alert-UhYp6qY9.js";import"./createTheme-yhJZirTq.js";import"./DefaultPropsProvider-Dyop95cE.js";import"./useSlot-CWCXsuM6.js";import"./useForkRef-2hkVe3-e.js";import"./createSimplePaletteValueFilter-BkO8Qsnx.js";import"./createSvgIcon-B7YpWqx3.js";import"./Close-Cz4GiEbp.js";import"./IconButton-BfvyGdE-.js";import"./useTimeout-BifyLnyQ.js";import"./ButtonBase-Bd0MhjFr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BjSx0fst.js";import"./Paper-S1fvqJVW.js";import"./useTheme-EtZCDR2R.js";import"./useTheme-Ctrn4LCN.js";import"./Stack-KXRQ2qoN.js";import"./useThemeProps-CXcPGtyI.js";import"./getThemeProps-DFwGNQQM.js";import"./extendSxProp-CKP_yBEI.js";import"./Box-CDJoVLM4.js";import"./AlertTitle-CY1i-AXt.js";import"./Typography-D_4H52WI.js";import"./index-B-Pvp7yD.js";import"./ClickAwayListener-9LiC0SA2.js";import"./getReactElementRef-CNb7xhSU.js";import"./index-Br3fcRxK.js";import"./index-DDLERCEI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CS2Zqaue.js";import"./Tooltip-bjvNYtJ9.js";import"./index-iomPLjn7.js";import"./useControlled-bz51c3bn.js";import"./Popper-C8sKl6Af.js";import"./Button-BqoZyXTP.js";import"./uniqueId-CSADMLuU.js";import"./toString-BfO6AUjw.js";import"./isArray-DbXmnvJN.js";import"./isSymbol-Ba5_wEMY.js";import"./times-Cn4Ngxl9.js";import"./_Uint8Array-BTKm1ZQB.js";import"./identity-DKeuBCMA.js";import"./toInteger-k1Hbt4td.js";import"./mockTableEntity-B-SIClN0.js";import"./mockFileEntityACLVariants-C1efnZVC.js";import"./fakerUtils-9XkBR0sH.js";import"./mockFileEntity-DLg49wDt.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Cdx2SREv.js";import"./mockSchema-CQIQ8Fy1.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BPHiJ7LM.js";import"./QueryClientProvider-BcAhPAdQ.js";import"./Link-CzE4P4qz.js";import"./Collapse-DTdOrPcE.js";import"./_baseUniq-DbA25ysr.js";import"./_getTag-DrnZ3UrD.js";import"./isEqual-DUeH-zW5.js";import"./noop-DX6rZLP_.js";import"./merge-DXAGUrVQ.js";import"./_initCloneObject-Dj57jkPY.js";import"./tinycolor-Begke6kS.js";import"./Fade-P4NxGNb5.js";import"./inputBaseClasses-CVaOacQt.js";import"./calculateFriendlyFileSize-BnFD44D5.js";import"./CheckCircleTwoTone-Cro7lWgF.js";import"./InfoTwoTone-DYvYDf7n.js";import"./useMutation-P9l519zQ.js";import"./dayjs.min-BXio50PZ.js";import"./chunk-AYJ5UCUI-DgTRugk4.js";import"./cloneDeep-LWRqqlyp.js";import"./Skeleton-209IQpVd.js";import"./HelpPopover-DIpzwzh7.js";import"./MarkdownPopover-B--7YhZv.js";import"./LightTooltip-BUpSbW9u.js";import"./MarkdownSynapse-BaInImvb.js";import"./SkeletonButton-CRK17zKv.js";import"./SkeletonInlineBlock-DjLqp715.js";import"./SkeletonTable-CaAUfgFk.js";import"./SkeletonParagraph-DgVlIY8v.js";import"./HelpOutlineTwoTone-DfH3GKtS.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
