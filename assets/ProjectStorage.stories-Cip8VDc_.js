import{g as i}from"./entityHandlers-Bu5x65EY.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DKBjGtH0.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-Dqe4zBr1.js";import{g as m}from"./userProfileHandlers-Cxt0Y-6h.js";import{P as L}from"./ProjectDataAvailability-DUcVCA-K.js";import"./index-DAMVlj2b.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DasDaXcU.js";import"./mockTeam-wIJG7Nnn.js";import"./SynapseConstants-BPxSYXRt.js";import"./OrientationBanner-BRUSGBks.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Dr7n8Bu6.js";import"./index-KGN7nUgE.js";import"./iframe-CMQeI9WK.js";import"./spreadSx-CwcO6WA9.js";import"./react-CMig-9PE.js";import"./FullWidthAlert-kwfi_d0a.js";import"./Alert-DJ8X3BSK.js";import"./createTheme-DO0GeJVN.js";import"./DefaultPropsProvider-TigZOw0c.js";import"./useSlot-BeLwitnn.js";import"./useForkRef--CXcjM6c.js";import"./createSimplePaletteValueFilter-DZ3Cd0ZY.js";import"./createSvgIcon-BwJ4Z0yb.js";import"./Close-B39SLtS7.js";import"./IconButton-DDxgpgKz.js";import"./useTimeout-CbCrOuyo.js";import"./ButtonBase-Dpm3dYIG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-tpeZfTSG.js";import"./Paper-OHiCXA0a.js";import"./useTheme-DqFjo4Vk.js";import"./useTheme-DNfJZ9a1.js";import"./Stack-SWup2UhN.js";import"./extendSxProp-BYQFtxYN.js";import"./getThemeProps-Bdh-DyuI.js";import"./Box-CvOrwV-N.js";import"./AlertTitle-DU-H4ICD.js";import"./Typography-Bx5U0C2d.js";import"./index-BKxVS2q8.js";import"./ClickAwayListener-BU9wvTpl.js";import"./getReactElementRef-CWKqg3UA.js";import"./index-DfI_pPk5.js";import"./index-CNJXOAct.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bj8lCSBe.js";import"./Tooltip-C0iVGWe9.js";import"./index-Ch-D0VSk.js";import"./useControlled-CYxMkq6A.js";import"./Popper-B69y1AqZ.js";import"./Button-3qFS6i5P.js";import"./uniqueId-D34pUzrI.js";import"./toString-DqSm65F6.js";import"./isArray-DjjF7-P3.js";import"./isSymbol-CslOALvZ.js";import"./times-D0_Iiw_N.js";import"./_Uint8Array-DL2TZi9X.js";import"./identity-DKeuBCMA.js";import"./toInteger-BqTtVtag.js";import"./mockTableEntity-C18Pbi90.js";import"./mockFileEntityACLVariants-DJW7kaag.js";import"./fakerUtils-D9rsJXgg.js";import"./mockFileEntity-BdLgpR-l.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CM8M5Xrl.js";import"./mockSchema-B-sIVCFo.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BiFVnL5m.js";import"./QueryClientProvider-BM1sWabn.js";import"./Link-ChVk8ADt.js";import"./Collapse-BffAQEYD.js";import"./_baseUniq-CODlLnhx.js";import"./_getTag-Cgl2tQw4.js";import"./isEqual-wQQmtEJR.js";import"./merge-CTQFuPxa.js";import"./_initCloneObject-Ctr9Y8Ai.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cv-DSv5P.js";import"./inputBaseClasses-4MqSuc0L.js";import"./calculateFriendlyFileSize-DcjtLEas.js";import"./CheckCircleTwoTone-D1Vqh63T.js";import"./InfoTwoTone-BXDH4Dcy.js";import"./useMutation-Dn2nWpvI.js";import"./dayjs.min-DKhR2V7G.js";import"./chunk-AYJ5UCUI-o4WQ5ozd.js";import"./cloneDeep-ChJ6elbg.js";import"./Skeleton-C3ppgLNp.js";import"./HelpPopover-Dr_hhH0P.js";import"./MarkdownPopover-ew3FQ6yA.js";import"./LightTooltip-CS6AhLwZ.js";import"./MarkdownSynapse-Db88TmWw.js";import"./SkeletonButton-DGvCkdYz.js";import"./SkeletonInlineBlock-o7SDr7bI.js";import"./SkeletonTable-D-StE-y9.js";import"./SkeletonParagraph-K2Iq3sh3.js";import"./HelpOutlineTwoTone-D-5jHWCX.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
