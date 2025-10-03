import{g as i}from"./entityHandlers-BbhWalFS.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-I_Ljsvpl.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-3qXkwng6.js";import{g as m}from"./userProfileHandlers-B6JaXiRz.js";import{P as L}from"./ProjectDataAvailability-B_QUEYyR.js";import"./index-COOJs5_4.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DSOQu7en.js";import"./mockTeam-CetWL1GD.js";import"./SynapseConstants-DXlbb83s.js";import"./OrientationBanner-DIMiS6-X.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-ChlY0ty7.js";import"./index-DEXVlyEC.js";import"./iframe-CTaKRDzK.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4Ag4Khl.js";import"./FullWidthAlert-BQi4k6sm.js";import"./Alert-oJFeNTPf.js";import"./createTheme-DSMh9aMK.js";import"./DefaultPropsProvider-tscWNgRV.js";import"./useSlot-5fSGsjd4.js";import"./useForkRef-Bpi5glj8.js";import"./createSimplePaletteValueFilter-z7ViS40H.js";import"./createSvgIcon-IuSm3jpw.js";import"./Close-BYMa4NgR.js";import"./IconButton-B7n5ygWB.js";import"./useTimeout-Bcmt8HaF.js";import"./ButtonBase-CtgJMkFI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BXvEMjjW.js";import"./Paper-BJO20Q9K.js";import"./useTheme-nF84TQI6.js";import"./useTheme-pMmDZBIO.js";import"./Stack-EBx-64RF.js";import"./useThemeProps-CwzyAdAY.js";import"./getThemeProps-BLGqyFKd.js";import"./extendSxProp-DysauLlL.js";import"./Box-B7xLSVbU.js";import"./AlertTitle-DohnoRzz.js";import"./Typography-BV8NZaJG.js";import"./index-C2jv3Yen.js";import"./ClickAwayListener-DUKbMkLR.js";import"./getReactElementRef-C_fwGmzx.js";import"./index-CwKkrkMc.js";import"./index-Dv8O9azN.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dvv4NuhG.js";import"./Tooltip-CivR37xg.js";import"./index-C1fK7QTW.js";import"./useControlled-Cy9MDY45.js";import"./Popper-DCuGWZxy.js";import"./Button-DWmqEVyK.js";import"./uniqueId-CLvuKtOO.js";import"./toString-D2E_Ez-s.js";import"./isArray-gvpvXSFg.js";import"./isSymbol-3W0mAepu.js";import"./times-DdMuS02x.js";import"./_Uint8Array-CFylZ-gm.js";import"./identity-DKeuBCMA.js";import"./toInteger-5JZx54ve.js";import"./mockTableEntity-OdtKfcl2.js";import"./mockFileEntityACLVariants-CjN5EEa3.js";import"./fakerUtils-DazYSbut.js";import"./mockFileEntity-DWekCfXo.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-yHInk2ks.js";import"./mockSchema-plj62COy.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-lmzAG6mX.js";import"./QueryClientProvider-5d7cgiKu.js";import"./Link-Bcp540VX.js";import"./Collapse-DbB5zYpu.js";import"./_baseUniq-D6itCMNh.js";import"./_getTag-H4oDIWkK.js";import"./isEqual-hwpo_E0H.js";import"./noop-DX6rZLP_.js";import"./merge-Ckv_4s3g.js";import"./_initCloneObject-oqJaqUxv.js";import"./tinycolor-Begke6kS.js";import"./Fade-CgqBXsZL.js";import"./inputBaseClasses-R5GcZRQ_.js";import"./calculateFriendlyFileSize-4KlCbfW-.js";import"./CheckCircleTwoTone-BPpE4vcS.js";import"./InfoTwoTone-C2z4ZzAx.js";import"./useMutation-DVVhu_SN.js";import"./dayjs.min-d6L6EHLF.js";import"./chunk-AYJ5UCUI-UVlhN5ws.js";import"./cloneDeep-Co63vGR4.js";import"./Skeleton-B3iwvpLy.js";import"./HelpPopover-DhSz4jHa.js";import"./MarkdownPopover-BSZr7RsS.js";import"./LightTooltip-CbgH1JDJ.js";import"./MarkdownSynapse-isEOdrNF.js";import"./SkeletonButton-BWRM0Dij.js";import"./SkeletonInlineBlock-lUnoaja9.js";import"./SkeletonTable-CK152fT3.js";import"./SkeletonParagraph-Dr1sPB-1.js";import"./HelpOutlineTwoTone-JrMRtBbC.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
