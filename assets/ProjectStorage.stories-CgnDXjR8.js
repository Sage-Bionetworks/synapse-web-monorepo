import{g as i}from"./entityHandlers-DrfBMlMo.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-nz_G27ZD.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DjADdAyU.js";import{g as m}from"./userProfileHandlers--rVVctoh.js";import{P as L}from"./ProjectDataAvailability-CID6bk_o.js";import"./index-AiR_ckau.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-gZnzi-Kz.js";import"./mockTeam-Dd9xWFzl.js";import"./SynapseConstants-QIqdlNPs.js";import"./OrientationBanner-CPj0PuP9.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BMYyeuyr.js";import"./index-B3YonXtA.js";import"./iframe-BZuF5Rk5.js";import"./spreadSx-CwcO6WA9.js";import"./react-BuDUhSyG.js";import"./FullWidthAlert-BAt_LGWT.js";import"./Alert-DxUMyYvX.js";import"./createTheme-BJKfy1iC.js";import"./DefaultPropsProvider-DuSIaWNU.js";import"./useSlot-BXLighSu.js";import"./useForkRef-BtqTZArO.js";import"./createSimplePaletteValueFilter-CxzoQfv0.js";import"./createSvgIcon-Bs0uwjDd.js";import"./Close-Cpf8yWN0.js";import"./IconButton-DnWxZwUa.js";import"./useTimeout-N1XqQ7Tv.js";import"./ButtonBase-B7_bMh0J.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce4Ta4eA.js";import"./Paper-DqrrvOAH.js";import"./useTheme-Bb3tF0fY.js";import"./useTheme-BqUAtbKs.js";import"./Stack-Cij852nX.js";import"./useThemeProps-CnowrksF.js";import"./getThemeProps-B0O8BOmA.js";import"./extendSxProp-D1NEKyNb.js";import"./Box-PoNijjGW.js";import"./AlertTitle-rtt8k-JU.js";import"./Typography-BlpiGXay.js";import"./index-SV-CQluw.js";import"./ClickAwayListener-CPlRAx9Y.js";import"./getReactElementRef-uQKecpNl.js";import"./index-B7I8xQtn.js";import"./index-Dmzd7xWV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGI5WGEZ.js";import"./Tooltip-BStWPht6.js";import"./index-BvINnhAG.js";import"./useControlled-C_6BPMUf.js";import"./Popper-BfvQl467.js";import"./Button-Ch1wz1oD.js";import"./uniqueId-DmupjK_F.js";import"./toString-DgG0SSWT.js";import"./isArray-D7cLY-Ue.js";import"./isSymbol-CpU8lUWz.js";import"./times-Bjyl5IyC.js";import"./_Uint8Array-szfHHksL.js";import"./identity-DKeuBCMA.js";import"./toInteger-DRY3A2Wi.js";import"./mockTableEntity-Dq7xS58U.js";import"./mockFileEntityACLVariants-Bz0cb2qi.js";import"./fakerUtils-DOKPzdZ-.js";import"./mockFileEntity-D15ZEflG.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BCJhWnUv.js";import"./mockSchema-Di_htVt3.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BsSbosha.js";import"./QueryClientProvider-BRz6sphI.js";import"./Link-Bpl0ygdi.js";import"./Collapse-COA2sox0.js";import"./_baseUniq-BuOmYGlr.js";import"./_getTag-BZgbHbgT.js";import"./isEqual-BQl5jUFq.js";import"./noop-DX6rZLP_.js";import"./merge-BLtkJLx6.js";import"./_initCloneObject-IL6c6Kxn.js";import"./tinycolor-Begke6kS.js";import"./Fade-hXWdH60e.js";import"./inputBaseClasses-CTMFoWXf.js";import"./calculateFriendlyFileSize-D7pBFWpU.js";import"./CheckCircleTwoTone-DGwA4b8a.js";import"./InfoTwoTone-LXUWHOi0.js";import"./useMutation-DYD3J3xj.js";import"./dayjs.min-CGFBeRSw.js";import"./chunk-AYJ5UCUI-BiQJU0O1.js";import"./cloneDeep-BGmY4GVF.js";import"./Skeleton-ClHaAhyN.js";import"./HelpPopover-B9ISk2As.js";import"./MarkdownPopover-DKTRXW49.js";import"./LightTooltip-DL5JsW9k.js";import"./MarkdownSynapse-BF7WHtTr.js";import"./SkeletonButton-CMtka5Ag.js";import"./SkeletonInlineBlock-CzXc2U9L.js";import"./SkeletonTable-C68Wlp19.js";import"./SkeletonParagraph-BSkKGl-r.js";import"./HelpOutlineTwoTone-DwNIvFIH.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
