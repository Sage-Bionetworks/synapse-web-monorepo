import{g as i}from"./entityHandlers-DaCZTM82.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DCByO87-.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-Bp6hNXo8.js";import{g as m}from"./userProfileHandlers-C_01WK6-.js";import{P as L}from"./ProjectDataAvailability-BqJFIn05.js";import"./index-6sh3FyDG.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-D_bdeIcl.js";import"./mockTeam-DrCcwcrB.js";import"./SynapseConstants-BMAUm8Mh.js";import"./OrientationBanner-BXT5kcDN.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DkgkjynE.js";import"./index-BGpI4ylO.js";import"./iframe-Ddr3cYxD.js";import"./spreadSx-CwcO6WA9.js";import"./react-CSPHiA2s.js";import"./FullWidthAlert-C6vfUEXZ.js";import"./Alert-B_HF-aRK.js";import"./createTheme-Cfmpslfc.js";import"./DefaultPropsProvider-CpQclCMM.js";import"./useSlot-BI50lNKR.js";import"./useForkRef-CNgEgA6-.js";import"./createSimplePaletteValueFilter-DCuN9org.js";import"./createSvgIcon-CPrM-54a.js";import"./Close-Bn8t9Ia6.js";import"./IconButton-B3zUX2nV.js";import"./useTimeout-BI73T8Sr.js";import"./ButtonBase-DZmSN1ru.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BaHbzjEU.js";import"./Paper-BoW1ah1V.js";import"./useTheme-yHTffsOD.js";import"./useTheme-CAQCYY1k.js";import"./Stack-Jwztnp5F.js";import"./extendSxProp-DNeen8Fm.js";import"./getThemeProps-NK2C-o0r.js";import"./Box-BWGLMhAv.js";import"./AlertTitle-6WsPcZ1k.js";import"./Typography-Ce-gAV9s.js";import"./index-DmZzpHOF.js";import"./ClickAwayListener-BZC0T7Te.js";import"./getReactElementRef-BlXlUd-1.js";import"./index-DjO-WukJ.js";import"./index-DItYd_fI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bla6bBez.js";import"./Tooltip-D91tp4r9.js";import"./index-NoWNPlPw.js";import"./useControlled-BwO0sUuT.js";import"./Popper-BUj90CCi.js";import"./Button-BLxSkXO5.js";import"./uniqueId-BSuG6xRH.js";import"./toString-Qp1mwJWo.js";import"./isArray-BX1r13Kz.js";import"./isSymbol-NLed_lmQ.js";import"./times-BhyY-iQT.js";import"./_Uint8Array-Dr6FQkiD.js";import"./identity-DKeuBCMA.js";import"./toInteger-DLjPf7IJ.js";import"./mockTableEntity-BeqbaJh2.js";import"./mockFileEntityACLVariants-mOHcZVTP.js";import"./fakerUtils-Cky03SU4.js";import"./mockFileEntity-VTP2n-RX.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DjM8Wlsu.js";import"./mockSchema-DWOojEvU.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-4Ouewk96.js";import"./QueryClientProvider-BqXXMi1s.js";import"./Link-DROnStHn.js";import"./Collapse-DZEzd_3A.js";import"./_baseUniq-_37OgCWp.js";import"./_getTag-D_zj2wG3.js";import"./isEqual-DC322x5j.js";import"./merge-BqF55WgL.js";import"./_initCloneObject-DOXCAfP2.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2tIRQk5.js";import"./inputBaseClasses-DchpwRjT.js";import"./calculateFriendlyFileSize-xNaGc40C.js";import"./CheckCircleTwoTone-Dx02CEuE.js";import"./InfoTwoTone-D5epEgOk.js";import"./useMutation-ElpfEnJt.js";import"./dayjs.min-CEA64Lyb.js";import"./chunk-AYJ5UCUI-CbtXcOGv.js";import"./cloneDeep-CHRFS3Ni.js";import"./Skeleton-ChdKJR_r.js";import"./HelpPopover-D1irp_1w.js";import"./MarkdownPopover-ChL5jLYe.js";import"./LightTooltip-D1IChHzc.js";import"./MarkdownSynapse-oY78ic_Y.js";import"./SkeletonButton-C7f1_62b.js";import"./SkeletonInlineBlock-B5R4f0KI.js";import"./SkeletonTable-C-BoLTiG.js";import"./SkeletonParagraph-CuqH1Dyb.js";import"./HelpOutlineTwoTone-CPDKfQMd.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
