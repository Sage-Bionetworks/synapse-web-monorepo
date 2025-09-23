import{g as i}from"./entityHandlers-CwbL5AJ-.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-4auXP0HE.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-Lkcy0sN2.js";import{g as m}from"./userProfileHandlers-Blmx3D09.js";import{P as L}from"./ProjectDataAvailability-qXvHaYd2.js";import"./index-dWx60SXB.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DsB2vImf.js";import"./mockTeam-BwsUfede.js";import"./SynapseConstants-DgvD2GSf.js";import"./OrientationBanner-CdA_N81g.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Btojeglz.js";import"./index-DY9mdyPi.js";import"./iframe-foaHJy_d.js";import"./spreadSx-CwcO6WA9.js";import"./react-D8btsb_W.js";import"./FullWidthAlert-BNsug2BQ.js";import"./Alert-BSA3wL1o.js";import"./createTheme-805fwRnW.js";import"./DefaultPropsProvider-CossAyJe.js";import"./useSlot-DRgbk0MI.js";import"./useForkRef-BM8yPrHv.js";import"./createSimplePaletteValueFilter-DyvNuA5n.js";import"./createSvgIcon-BPzUoahr.js";import"./Close-CFREto0o.js";import"./IconButton-CyOD0ivW.js";import"./useTimeout-C44WAk2R.js";import"./ButtonBase-DTXci-DT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Chhkm6cO.js";import"./Paper-5zmbLrbd.js";import"./useTheme-CemLkdiZ.js";import"./useTheme-BMnvZPWl.js";import"./Stack-Ds9V3v2E.js";import"./extendSxProp-BNcg_9Kx.js";import"./getThemeProps-CE04HLlV.js";import"./Box-U43iDY-R.js";import"./AlertTitle-Cjpu7TC-.js";import"./Typography-D46yYVKI.js";import"./index-C7uFXVHy.js";import"./ClickAwayListener-DsaPV5nr.js";import"./getReactElementRef-BDAa_hCW.js";import"./index-CPZzWBSL.js";import"./index-Cwn0dq2o.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CSjIhoje.js";import"./Tooltip-Cqj1ZLU8.js";import"./index-Bkr87tKu.js";import"./useControlled-DsLo-4-V.js";import"./Popper-DudO-GPp.js";import"./Button-3mgletA9.js";import"./uniqueId-NmC5tK-S.js";import"./toString-BC-XjRaP.js";import"./isArray-D4kTfiKp.js";import"./isSymbol-Dkp3y99P.js";import"./times-DDCNXsvp.js";import"./_Uint8Array-DjQqamw2.js";import"./identity-DKeuBCMA.js";import"./toInteger-K0ImKn82.js";import"./mockTableEntity-DaGod211.js";import"./mockFileEntityACLVariants-BAFKJbq8.js";import"./fakerUtils-CxSe2zQF.js";import"./mockFileEntity-DKgINdhO.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Bq8DwsgU.js";import"./mockSchema-DQgJMYNj.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-8y-s5Pjc.js";import"./QueryClientProvider-DyDsuevu.js";import"./Link-CBhfnUs8.js";import"./Collapse-DwI0-2AC.js";import"./_baseUniq-CWzK8lQ2.js";import"./_getTag-CwqD0vF9.js";import"./isEqual-Cu31opz6.js";import"./merge-H_UyJaym.js";import"./_initCloneObject-BUPoaIeA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B9TGkY69.js";import"./inputBaseClasses-DjFPwRJg.js";import"./calculateFriendlyFileSize-dPQB9gIu.js";import"./CheckCircleTwoTone-B0uaPTts.js";import"./InfoTwoTone-7OESuLhA.js";import"./useMutation-Dm55FjBv.js";import"./dayjs.min-Dv1AES53.js";import"./chunk-AYJ5UCUI-DDyJQ7LG.js";import"./cloneDeep-UlK_jgh2.js";import"./Skeleton-BFMyuLob.js";import"./HelpPopover-DHeWKoAK.js";import"./MarkdownPopover-DQQFc39B.js";import"./LightTooltip-CjSmKA94.js";import"./MarkdownSynapse-GKzUe7wB.js";import"./SkeletonButton-pL3g9Npy.js";import"./SkeletonInlineBlock-BusVNSX9.js";import"./SkeletonTable-CvCNZNii.js";import"./SkeletonParagraph-BIQmiFdD.js";import"./HelpOutlineTwoTone-oTVnBUC_.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
