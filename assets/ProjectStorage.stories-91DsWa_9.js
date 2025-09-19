import{g as i}from"./entityHandlers-DW73Kdy9.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BHvy6J25.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DlU-xJEk.js";import{g as m}from"./userProfileHandlers-BWSrnqVN.js";import{P as L}from"./ProjectDataAvailability-CvsHE71F.js";import"./index-CZfplaSd.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CpiT4zmy.js";import"./mockTeam-DHdLn1NF.js";import"./SynapseConstants-DhtbM-hg.js";import"./OrientationBanner-BMOzWmyx.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-uswm353_.js";import"./index-WFGZkfGQ.js";import"./iframe-DE8stXB9.js";import"./spreadSx-CwcO6WA9.js";import"./react-ChMSZi63.js";import"./FullWidthAlert-Cw7ejPgA.js";import"./Alert-DCRiEVnW.js";import"./createTheme-5O93HVJl.js";import"./DefaultPropsProvider-CWWNlooN.js";import"./useSlot-DU_7KX09.js";import"./useForkRef-CyYB5Kx6.js";import"./createSimplePaletteValueFilter-OVNBhgRo.js";import"./createSvgIcon-C7Y92pv9.js";import"./Close-CNpDafw2.js";import"./IconButton-CS3CoVBF.js";import"./useTimeout-DUcSAsaz.js";import"./ButtonBase-iE-VM-jO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dvg-ZYdT.js";import"./Paper-Q2IEgrqh.js";import"./useTheme-DTvwicwG.js";import"./useTheme-CrHUFg5h.js";import"./Stack-D-2jqZf5.js";import"./extendSxProp-BIfBmP65.js";import"./getThemeProps-B78isNmh.js";import"./Box-GHDzk8iC.js";import"./AlertTitle-C-svQxOb.js";import"./Typography-CbhbYSPG.js";import"./index-CNoXD2e7.js";import"./ClickAwayListener-FMjLV4qb.js";import"./getReactElementRef-oicLdd8e.js";import"./index-B1vVZwXe.js";import"./index-DLljrjFI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CNV_tGPV.js";import"./Tooltip-D6w5RXxh.js";import"./index-CkHOP_FM.js";import"./useControlled-Bf8XxeTv.js";import"./Popper-CXSQlPF7.js";import"./Button-XWZFAulY.js";import"./uniqueId-T-ppXWxX.js";import"./toString-Sf6ezrgQ.js";import"./isArray-CRez7Py_.js";import"./isSymbol-CKen0w62.js";import"./times-CBelmJGF.js";import"./_Uint8Array-CbNzLaeU.js";import"./identity-DKeuBCMA.js";import"./toInteger-ByBoX7aE.js";import"./mockTableEntity-Bf0ZG56i.js";import"./mockFileEntityACLVariants-DnJu-Ao7.js";import"./fakerUtils-CgZaB6KO.js";import"./mockFileEntity-BdU9C4UR.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CeU32uQd.js";import"./mockSchema-BmeVR5Kb.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CC_Fs9a3.js";import"./QueryClientProvider-5Pkappvb.js";import"./Link-DULQ-qik.js";import"./Collapse-DBF0QCN7.js";import"./_baseUniq-DXCYBlUE.js";import"./_getTag-Bx5kgCoR.js";import"./isEqual-BCKPWyF7.js";import"./merge-BlVKkzie.js";import"./_initCloneObject-Cjggmh7c.js";import"./tinycolor-Begke6kS.js";import"./Fade-KSG4UTe1.js";import"./inputBaseClasses-D4jRMdEi.js";import"./calculateFriendlyFileSize-CX9y1s78.js";import"./CheckCircleTwoTone-BuWLjQ0I.js";import"./InfoTwoTone-Cayf5KPj.js";import"./useMutation-CFvMxEo-.js";import"./dayjs.min-Cht117Nf.js";import"./chunk-AYJ5UCUI-DKsCyvUv.js";import"./cloneDeep-DHY4QwXX.js";import"./Skeleton-Cu9UBnpu.js";import"./HelpPopover-mUn9GeRC.js";import"./MarkdownPopover-DXUWA5nZ.js";import"./LightTooltip-CN0Eh9SC.js";import"./MarkdownSynapse-CWhYYCmk.js";import"./SkeletonButton-BCDfTIrY.js";import"./SkeletonInlineBlock-ChnNTDgr.js";import"./SkeletonTable-03HoaYMG.js";import"./SkeletonParagraph-CBnhp1R-.js";import"./HelpOutlineTwoTone-DVh_9bFU.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
