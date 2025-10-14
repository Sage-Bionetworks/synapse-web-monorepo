import{g as i}from"./entityHandlers-B2qKEJYz.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Cgzy-UOs.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CswbWAOR.js";import{g as m}from"./userProfileHandlers-CugFcubE.js";import{P as L}from"./ProjectDataAvailability-CBPtAhN4.js";import"./index-rMGT91Ox.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BewMrTzX.js";import"./mockTeam-CTO8JwfZ.js";import"./SynapseConstants-BDAc_b3v.js";import"./OrientationBanner-B-ePgMgA.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-gmBK_iDy.js";import"./index-DYU4zQP4.js";import"./iframe-Dzw5MRYT.js";import"./spreadSx-CwcO6WA9.js";import"./react-vlrGuRz8.js";import"./FullWidthAlert-DHE2a9_E.js";import"./Alert-DCImWyvQ.js";import"./createTheme-D6vtmGls.js";import"./DefaultPropsProvider-D79KYO17.js";import"./useSlot-BgeUbv5P.js";import"./useForkRef-B_b-SuM8.js";import"./createSimplePaletteValueFilter-DiVtTFlb.js";import"./createSvgIcon-CJq3GPug.js";import"./Close-ENGBsyeS.js";import"./IconButton-Do5oKPlN.js";import"./useTimeout-DSZInHOh.js";import"./ButtonBase-Cu3m8cFt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-N97qRnH8.js";import"./Paper-BzOGyJwo.js";import"./useTheme-B6btaWkK.js";import"./useTheme-jKwAIb8E.js";import"./Stack-DTY49AsT.js";import"./useThemeProps-BwYz91DR.js";import"./getThemeProps-DTKeK2V7.js";import"./extendSxProp-jOxRgKts.js";import"./Box-39RMP0Tq.js";import"./AlertTitle-wUZCnToq.js";import"./Typography-D_DaiChI.js";import"./index-Dar7vQJe.js";import"./ClickAwayListener-BnxSEmfx.js";import"./getReactElementRef-ae5BIBIv.js";import"./index-DLMJWAwA.js";import"./index-Q7xPuOjn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DMQBUM0r.js";import"./Tooltip-B8bILZi4.js";import"./index-B6fN69mf.js";import"./useControlled-DdNq8r6Y.js";import"./Popper-tgLzwkuw.js";import"./Button-BzugqlFq.js";import"./uniqueId-CDyS7OYF.js";import"./toString-ZvTL8d5u.js";import"./isArray-C9PAhTKa.js";import"./isSymbol-DAxmQ6M7.js";import"./times-BlUVaLCq.js";import"./_Uint8Array-TncfCM6A.js";import"./identity-DKeuBCMA.js";import"./toInteger-CkXpGADb.js";import"./mockTableEntity--hjG7ZMO.js";import"./mockFileEntityACLVariants-tstnA97h.js";import"./fakerUtils-1ySystuX.js";import"./mockFileEntity-C0QiX8u5.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-K5ogNu6Q.js";import"./mockSchema-_BdyEFeM.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-E5rXX0Vh.js";import"./QueryClientProvider-CSdz-HYV.js";import"./Link-DK5p9S4e.js";import"./Collapse-Db_2nbsu.js";import"./_baseUniq-CBD_yH4a.js";import"./_getTag-bNxNCrK-.js";import"./isEqual-DDB_N-aI.js";import"./noop-DX6rZLP_.js";import"./merge-DNRE-STY.js";import"./_initCloneObject-c2L5_zs5.js";import"./tinycolor-Begke6kS.js";import"./Fade-Sl0_f7QX.js";import"./inputBaseClasses-snNCF3aG.js";import"./calculateFriendlyFileSize-DlLZ7LPJ.js";import"./CheckCircleTwoTone-OWQRjOdu.js";import"./InfoTwoTone-8gb8-LI8.js";import"./useMutation-LE6k3MXY.js";import"./dayjs.min-cfMBjx7E.js";import"./chunk-AYJ5UCUI-CRYqNbdW.js";import"./cloneDeep-BLVmDque.js";import"./Skeleton-yhG155b8.js";import"./HelpPopover-C70u3YH4.js";import"./MarkdownPopover-xxEQTG_R.js";import"./LightTooltip-BGwJqP50.js";import"./MarkdownSynapse-BBQbYZuJ.js";import"./SkeletonButton-DzASuh9y.js";import"./SkeletonInlineBlock-EXbRV5UE.js";import"./SkeletonTable-DSGln7MI.js";import"./SkeletonParagraph-BxAZyWWp.js";import"./HelpOutlineTwoTone--8XyHs19.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
