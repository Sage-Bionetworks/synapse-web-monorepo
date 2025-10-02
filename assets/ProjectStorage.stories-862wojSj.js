import{g as i}from"./entityHandlers-MX2mYH7V.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-C5GiG6iR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-Dp51JxO_.js";import{g as m}from"./userProfileHandlers-BIaSYm7w.js";import{P as L}from"./ProjectDataAvailability-NnapnNwI.js";import"./index-DBTbwqMH.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DaUdFazR.js";import"./mockTeam-GvvUqgnt.js";import"./SynapseConstants-DR3ZY5to.js";import"./OrientationBanner-DTwv04dt.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Cttw0ji8.js";import"./index-DhkrNZP9.js";import"./iframe-7mSOVxB4.js";import"./spreadSx-CwcO6WA9.js";import"./react-DNGujwIQ.js";import"./FullWidthAlert-DqSJWw0w.js";import"./Alert-Bcu7YUGe.js";import"./createTheme-BEG23Ggb.js";import"./DefaultPropsProvider-D8qfDHRM.js";import"./useSlot-Cgv1l8f6.js";import"./useForkRef-DUgLIqtH.js";import"./createSimplePaletteValueFilter-DZHcTxQ7.js";import"./createSvgIcon-qNmQe6T_.js";import"./Close-BDpIkTE7.js";import"./IconButton-DUJ3IKSK.js";import"./useTimeout-Dsks5eoH.js";import"./ButtonBase-ChUbS1mW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BSbUa5om.js";import"./Paper-BytkjR6o.js";import"./useTheme-DCbcQagQ.js";import"./useTheme-CJKuA382.js";import"./Stack-ChEyF6Lm.js";import"./extendSxProp-k92RHa9w.js";import"./getThemeProps-Bvz_Yv-K.js";import"./Box-GerujGRq.js";import"./AlertTitle-C1GLrwYc.js";import"./Typography-N2x2sTVo.js";import"./index-mhILb2ra.js";import"./ClickAwayListener-tdz5sGJK.js";import"./getReactElementRef-DX99WyYx.js";import"./index-lsxcFOrl.js";import"./index-DLyeVumG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-j8gNrfr7.js";import"./Tooltip-DytzHFyA.js";import"./index-DCR3wo31.js";import"./useControlled-qZ-DKamJ.js";import"./Popper-DajLVUbX.js";import"./Button-Dze9PDvM.js";import"./uniqueId-BK5vgBGN.js";import"./toString-Dstvm05g.js";import"./isArray-DyXgv0Dp.js";import"./isSymbol-DkZtFhjU.js";import"./times-iyTCHHDT.js";import"./_Uint8Array-CYqUimyu.js";import"./identity-DKeuBCMA.js";import"./toInteger-2PGZO6RB.js";import"./mockTableEntity-DP23SPV2.js";import"./mockFileEntityACLVariants-4qySd-8H.js";import"./fakerUtils-2XeZY-uz.js";import"./mockFileEntity-DZlaFxEu.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Dvwd4BMs.js";import"./mockSchema-C03Yyl6J.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-IRTxbv8J.js";import"./QueryClientProvider-BvgHDx5W.js";import"./Link-C0xIS8o2.js";import"./Collapse-CMsDtAkp.js";import"./_baseUniq-BNFfhkx0.js";import"./_getTag-B054JqLn.js";import"./isEqual-CZijml2n.js";import"./merge-DLdcbeqX.js";import"./_initCloneObject-D3LEGgk4.js";import"./tinycolor-Begke6kS.js";import"./Fade-DivBPYoP.js";import"./inputBaseClasses-DS1hE1Od.js";import"./calculateFriendlyFileSize-CRiqTUTG.js";import"./CheckCircleTwoTone-h7KWLQ_B.js";import"./InfoTwoTone-DiY69-1L.js";import"./useMutation-Bd72eRV1.js";import"./dayjs.min-DzXHqPwj.js";import"./chunk-AYJ5UCUI-rnSQre8c.js";import"./cloneDeep-qVXU3mzn.js";import"./Skeleton-BELkBN0u.js";import"./HelpPopover-DeFT83oF.js";import"./MarkdownPopover-BdeaiAEz.js";import"./LightTooltip-Br25-K__.js";import"./MarkdownSynapse-g90MzaAQ.js";import"./SkeletonButton-DhAxEJNt.js";import"./SkeletonInlineBlock-pqAvYpmW.js";import"./SkeletonTable-Bz4BZ-L2.js";import"./SkeletonParagraph-C7MtYQwW.js";import"./HelpOutlineTwoTone-BbANbNFP.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
