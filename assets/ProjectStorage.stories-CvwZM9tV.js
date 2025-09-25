import{g as i}from"./entityHandlers-2ndxuMxS.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CeqoVw1o.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-B-t7wBGQ.js";import{g as m}from"./userProfileHandlers-BEMW0Tiv.js";import{P as L}from"./ProjectDataAvailability-DLa3svyu.js";import"./index-D59FODsu.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-zdvgL39f.js";import"./mockTeam-CiSc0NFV.js";import"./SynapseConstants-CPCmN-gi.js";import"./OrientationBanner-CQIm-Ey1.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BcLN8RXQ.js";import"./index-B2AGccKG.js";import"./iframe-eFKYoG0j.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxcobhRw.js";import"./FullWidthAlert-BIez5okj.js";import"./Alert-BBi6u3qT.js";import"./createTheme-DPxGCk7e.js";import"./DefaultPropsProvider-BzWAken2.js";import"./useSlot-DbYJ23lg.js";import"./useForkRef-DmkJa-bD.js";import"./createSimplePaletteValueFilter-BZRticgE.js";import"./createSvgIcon-CrjzRFSh.js";import"./Close-CwrIQBfZ.js";import"./IconButton-ByH8Kolw.js";import"./useTimeout-CUZLOZF-.js";import"./ButtonBase-DIrjwtNY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFqmzg7D.js";import"./Paper-DASBMk3C.js";import"./useTheme-B4bAnXTN.js";import"./useTheme-BpFXk7Pw.js";import"./Stack-CbTviNUh.js";import"./extendSxProp-DPlEdwEe.js";import"./getThemeProps-BwGkw9Dq.js";import"./Box-DHqzE0KV.js";import"./AlertTitle-cUB69DsC.js";import"./Typography-Cm6ZNAW-.js";import"./index-BjkGhtTa.js";import"./ClickAwayListener-Dhz2ywRL.js";import"./getReactElementRef-BY9sPS19.js";import"./index-ZBSk-buD.js";import"./index-D5UfxxD5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BYbIhAFm.js";import"./Tooltip-D6WWxUQx.js";import"./index-Y3VDk8SE.js";import"./useControlled-BkANWM5f.js";import"./Popper-7a6yE7es.js";import"./Button-PQgF7jJQ.js";import"./uniqueId-PGzIZYPZ.js";import"./toString-Db-DxRjw.js";import"./isArray-Dpn4sx4n.js";import"./isSymbol-Cjo_G4mn.js";import"./times-VIorgX3n.js";import"./_Uint8Array-nwwAmTj4.js";import"./identity-DKeuBCMA.js";import"./toInteger-CC7N9fZB.js";import"./mockTableEntity-Buzr8W4E.js";import"./mockFileEntityACLVariants-BU174BK2.js";import"./fakerUtils-DXDwSivA.js";import"./mockFileEntity-DwSGtCdl.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-6b-jvVWY.js";import"./mockSchema-rnQaEWTj.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BWzyFAd_.js";import"./QueryClientProvider-CRKWWU78.js";import"./Link-c4vBsqYa.js";import"./Collapse-3gCBuOnS.js";import"./_baseUniq-B5SLkIvU.js";import"./_getTag-bITFctIo.js";import"./isEqual-Dxe0NAh8.js";import"./merge-D1CwwhmI.js";import"./_initCloneObject-D2f-QGXU.js";import"./tinycolor-Begke6kS.js";import"./Fade-D3Qy40VT.js";import"./inputBaseClasses-CY7MzjF7.js";import"./calculateFriendlyFileSize-XuDPvr9B.js";import"./CheckCircleTwoTone-B0-qzMIh.js";import"./InfoTwoTone-DSitWCJH.js";import"./useMutation-B17C9-3a.js";import"./dayjs.min-CjB-a8se.js";import"./chunk-AYJ5UCUI-DPDI74MQ.js";import"./cloneDeep-Dl2F-bJn.js";import"./Skeleton-DbvZ5cWo.js";import"./HelpPopover-DhFEmo4M.js";import"./MarkdownPopover-D_LWsAdO.js";import"./LightTooltip-B6b6ViZK.js";import"./MarkdownSynapse-CMEiPMsD.js";import"./SkeletonButton-BJ10trZP.js";import"./SkeletonInlineBlock-CreQRsUy.js";import"./SkeletonTable-Dpex71Pv.js";import"./SkeletonParagraph-DLjrTkgH.js";import"./HelpOutlineTwoTone-CJvdywB7.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
