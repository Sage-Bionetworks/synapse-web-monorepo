import{g as i}from"./entityHandlers-CGIJKkQV.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-Db54t-tY.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./StringUtils-DP1EOPFU.js";import{h as d,H as l}from"./index-BGyWZ6JM.js";import{g as m}from"./userProfileHandlers-LhquZXOH.js";import{P as L}from"./ProjectDataAvailability-rie4mNRr.js";import"./index-BNX4WOAq.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B_1x7Uas.js";import"./mockTeam-DDt4QvSP.js";import"./SynapseConstants-DaRxMVmF.js";import"./OrientationBanner-B1qNwquP.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DGL3HO56.js";import"./index-BuJDQnUk.js";import"./iframe-Cr6ezPsl.js";import"./spreadSx-CwcO6WA9.js";import"./react-AlFvuvNv.js";import"./FullWidthAlert-mRZoSYPq.js";import"./Alert-Be0A-LgM.js";import"./createTheme-BK6UElHJ.js";import"./DefaultPropsProvider-Dvr-tTK6.js";import"./useSlot-DalP7ee8.js";import"./useForkRef-CF7zyPlu.js";import"./createSimplePaletteValueFilter-Cpx97Rr9.js";import"./createSvgIcon-D2yClPAP.js";import"./Close-UkcISrWM.js";import"./IconButton-Ck0nC-my.js";import"./useTimeout-DM9L0rxB.js";import"./ButtonBase-D82xi4uS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcfM6f79.js";import"./Paper-BPJSyr-F.js";import"./useTheme-B7yNuM8W.js";import"./useTheme-C-Nrlkd0.js";import"./Stack-B7Qpj5Ki.js";import"./extendSxProp-DLwRLLo9.js";import"./getThemeProps-sKYYbfmA.js";import"./Box-D7QdnBU4.js";import"./AlertTitle-C-dr4K0A.js";import"./Typography-BHnBpTHA.js";import"./index-BKX1-w9C.js";import"./ClickAwayListener-CmfTuM2N.js";import"./getReactElementRef-BRpsy5_3.js";import"./index-DLfqkzAN.js";import"./index-YcRuu0bH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D254RFQI.js";import"./Tooltip-2iC1TBx7.js";import"./index-Ci5oPOxK.js";import"./useControlled-DgIckgW6.js";import"./Popper-CucXU77N.js";import"./Button-DDnrRDpv.js";import"./uniqueId-NfKwKjxg.js";import"./toString-DKSUWCSU.js";import"./isArray-CQL2Omy9.js";import"./isSymbol-CoBgEu09.js";import"./times-CowncrEP.js";import"./_Uint8Array-okef9fpr.js";import"./identity-DKeuBCMA.js";import"./toInteger-XmTA-Ygd.js";import"./mockTableEntity-DxHCT_TZ.js";import"./mockFileEntityACLVariants-Ck_9xqcO.js";import"./fakerUtils-BGKFhtkb.js";import"./mockFileEntity-CJzyS553.js";import"./mock_file_handle-BIJh-7D7.js";import"./mockEntity-_Mg8pQw0.js";import"./mockSchema-PgeoX7Y9.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DYvqTKcd.js";import"./QueryClientProvider-D35J8jSd.js";import"./Link-B4y9rQD-.js";import"./Collapse-Bd3x3sfg.js";import"./_baseUniq-BL-JTcV7.js";import"./_getTag-oDqqQs_x.js";import"./isEqual-D3NjyQZR.js";import"./merge-d6zHDzVE.js";import"./_initCloneObject-zeb2rLvj.js";import"./tinycolor-Begke6kS.js";import"./Fade-B3b9dqgH.js";import"./inputBaseClasses-BKILOaiU.js";import"./calculateFriendlyFileSize-D-5lh9-e.js";import"./CheckCircleTwoTone-BWGId32i.js";import"./InfoTwoTone-BSHHymaY.js";import"./useMutation-d2WF_4zr.js";import"./dayjs.min-D3lvmW2A.js";import"./chunk-AYJ5UCUI-qjDTf1To.js";import"./cloneDeep-Ct9R0eu9.js";import"./Skeleton-B7QVWXYf.js";import"./HelpPopover-B1hXwAfI.js";import"./MarkdownPopover-Bmsqk3iB.js";import"./LightTooltip-ZNmQZaEq.js";import"./MarkdownSynapse-DE5wmMdD.js";import"./SkeletonButton-AU737DlS.js";import"./SkeletonInlineBlock-CFBBV12t.js";import"./SkeletonTable-BcYRfnrM.js";import"./SkeletonParagraph-DYb909WB.js";import"./HelpOutlineTwoTone-Cm4dEege.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
