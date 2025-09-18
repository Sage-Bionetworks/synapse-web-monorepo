import{g as i}from"./entityHandlers-dvNDzouK.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-mTKuC2yr.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-CxHWGgYo.js";import{g as m}from"./userProfileHandlers-D7jnN3qZ.js";import{P as L}from"./ProjectDataAvailability-CznDvm7o.js";import"./index-mlhrpMbx.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bnr3IoZh.js";import"./mockTeam-C-ObkZ3_.js";import"./SynapseConstants-C6sTWsVv.js";import"./OrientationBanner-BYHu2Ktw.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BWLoVAyd.js";import"./index-CeDLyl9l.js";import"./iframe-BSZkMUXl.js";import"./spreadSx-CwcO6WA9.js";import"./react-BqDpjQ7r.js";import"./FullWidthAlert-DOe5UBN4.js";import"./Alert-CrJqm9aK.js";import"./createTheme-D5ho8bLN.js";import"./DefaultPropsProvider-9tco0o_j.js";import"./useSlot-DECbMb1e.js";import"./useForkRef-CyRsSJmZ.js";import"./createSimplePaletteValueFilter-C8A1b3wP.js";import"./createSvgIcon-DA82QREK.js";import"./Close-D60m63-8.js";import"./IconButton-Bq_AHk6p.js";import"./useTimeout-B7GR-Evu.js";import"./ButtonBase-C059MY5T.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-J2HwhF.js";import"./Paper-CWTb8To6.js";import"./useTheme-BlbhpKS0.js";import"./useTheme-TiDWFKS5.js";import"./Stack-BRnrbFjh.js";import"./extendSxProp-DbbvJvSv.js";import"./getThemeProps-Cdr16aLU.js";import"./Box-VTcCPpeM.js";import"./AlertTitle-CIx9ogsl.js";import"./Typography-CxzrTbGc.js";import"./index-CmTl4AKZ.js";import"./ClickAwayListener-DaStbp1P.js";import"./getReactElementRef-BZmorcFu.js";import"./index-BDH-fVtR.js";import"./index-C4x1OYBd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-pFpWI2g5.js";import"./Tooltip-RDwYirt5.js";import"./index-CdMMjrZE.js";import"./useControlled-OMQDlMeu.js";import"./Popper-CsrHmFop.js";import"./Button-mm7yYrVg.js";import"./uniqueId-BW-c01IJ.js";import"./toString-Beymlb6Y.js";import"./isArray-Bc1EE5Zd.js";import"./isSymbol-CmvVe0i_.js";import"./times-B6QDxiS3.js";import"./_Uint8Array-BZa94JeL.js";import"./identity-DKeuBCMA.js";import"./toInteger-CzHUzRYK.js";import"./mockTableEntity-mV7sULD5.js";import"./mockFileEntityACLVariants-DMRzGIUe.js";import"./fakerUtils-BaaOV-IH.js";import"./mockFileEntity-BnukO2_y.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Cr3fXNjV.js";import"./mockSchema-BqenJebc.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DvhLvv6Z.js";import"./QueryClientProvider-OOeHWQdN.js";import"./Link-BRbfQpGl.js";import"./Collapse-BBuA1S7b.js";import"./_baseUniq-CfQXy7y5.js";import"./_getTag-DXOE1H10.js";import"./isEqual-Gu5h_3XJ.js";import"./merge-BraDPTtN.js";import"./_initCloneObject-C6fm1qu1.js";import"./tinycolor-Begke6kS.js";import"./Fade-DyqfKaPo.js";import"./inputBaseClasses-DRF5GQ6i.js";import"./calculateFriendlyFileSize-CZ7NYNbR.js";import"./CheckCircleTwoTone-DA2k4Zpo.js";import"./InfoTwoTone-DAjJJCar.js";import"./useMutation-DnMoiO85.js";import"./dayjs.min-DooOLoqQ.js";import"./chunk-AYJ5UCUI-CpC21ICV.js";import"./cloneDeep-DqrAPpyN.js";import"./Skeleton-CFce4gLg.js";import"./HelpPopover-Dy43Q8Fw.js";import"./MarkdownPopover-49iXjUew.js";import"./LightTooltip-DupzonQw.js";import"./MarkdownSynapse-qFXz9IPW.js";import"./SkeletonButton-DSr-NEYn.js";import"./SkeletonInlineBlock-DK-aGnf-.js";import"./SkeletonTable-CQi5ZCrI.js";import"./SkeletonParagraph-C_p6Jv4y.js";import"./HelpOutlineTwoTone-Db0ZMKo1.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
