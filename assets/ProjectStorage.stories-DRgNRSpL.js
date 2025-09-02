import{g as i}from"./entityHandlers-h95YCw2v.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-DpBz1drY.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-_BY2npJD.js";import{h as d,H as l}from"./index-DIhlUArv.js";import{g as m}from"./userProfileHandlers-6m7Tv5K6.js";import{P as L}from"./ProjectDataAvailability-BvfEx2Y3.js";import"./index-BMDQU8UO.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-C9O2xWL4.js";import"./mockTeam-XKmpKyrs.js";import"./SynapseConstants-vnB_HOZG.js";import"./OrientationBanner-sCFG9l64.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CCWJyL-a.js";import"./index-BO2jx3fA.js";import"./iframe-CMsX0Oka.js";import"./spreadSx-CwcO6WA9.js";import"./react-u2dYu96Q.js";import"./FullWidthAlert-B611txsw.js";import"./Alert-CvfxxPZQ.js";import"./createTheme-ZS9J3-x4.js";import"./DefaultPropsProvider-C0MHQuNJ.js";import"./useSlot-CE8vY1FE.js";import"./useForkRef-C9RBuidL.js";import"./createSimplePaletteValueFilter-CHeJzd4k.js";import"./createSvgIcon-VZpkVwoM.js";import"./Close-Bf_4vcco.js";import"./IconButton-DEarKBZE.js";import"./useTimeout--pwFdnEc.js";import"./ButtonBase-C5kwased.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-N9LIirTi.js";import"./Paper-BMRqfWZY.js";import"./useTheme-DntSS-nU.js";import"./useTheme-CiXWVsbt.js";import"./Stack-BYRbdvAb.js";import"./extendSxProp-DuJfRwpZ.js";import"./getThemeProps-DTRjvb2Z.js";import"./Box-BezVuSzo.js";import"./AlertTitle-BfTTJ_di.js";import"./Typography-Y67zn1Pq.js";import"./index-D4Z-obyz.js";import"./ClickAwayListener-CRR3Owmd.js";import"./getReactElementRef-6FS4DLqJ.js";import"./index-hadyzqeZ.js";import"./index-B3VrTmIJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CB6hmzG5.js";import"./Tooltip-B5x4vZvl.js";import"./index-BjbFLSec.js";import"./useControlled-BYef6mrc.js";import"./Popper-DCGmpkTH.js";import"./Button-DAcq9_ut.js";import"./uniqueId-CTW364Je.js";import"./toString-UaoHtER3.js";import"./isArray-Dy8AbNFY.js";import"./isSymbol-DJL41Hm8.js";import"./times-DDGS7ZaW.js";import"./_Uint8Array-CtWZVNIN.js";import"./identity-DKeuBCMA.js";import"./toInteger-BNoAMWsW.js";import"./mockTableEntity-tkAGHuW7.js";import"./mockFileEntityACLVariants-DDa2RXs_.js";import"./fakerUtils-ski7rsMs.js";import"./mockFileEntity-8rcfrk7-.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-C4DtgtMy.js";import"./mockSchema-x4OVrWJ-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CWngti3E.js";import"./QueryClientProvider-I7KmusgC.js";import"./Link-BXGMA5HG.js";import"./Collapse-CuIUJv_4.js";import"./_baseUniq-CP0o8ne-.js";import"./_getTag-DuJ7DDp8.js";import"./isEqual-CAyciZWq.js";import"./merge-BM5nIJiA.js";import"./_initCloneObject-DiIfsv6A.js";import"./tinycolor-Begke6kS.js";import"./Fade-NrLV8S1Z.js";import"./inputBaseClasses-CJlZY6KW.js";import"./calculateFriendlyFileSize-jiJD9GoL.js";import"./CheckCircleTwoTone-DQFwaHUN.js";import"./InfoTwoTone-zfNNXw23.js";import"./useMutation-ncIAEF0o.js";import"./dayjs.min-CuWcNf58.js";import"./chunk-AYJ5UCUI-0Rlz8zG8.js";import"./cloneDeep-CxL4ZTRa.js";import"./Skeleton-CH7Sx92t.js";import"./HelpPopover-D1HiPCwu.js";import"./MarkdownPopover-CYnvow1y.js";import"./LightTooltip-CJklWOjj.js";import"./MarkdownSynapse-BjlVU4HM.js";import"./SkeletonButton-Cev5E2ib.js";import"./SkeletonInlineBlock-BgBFGkaA.js";import"./SkeletonTable-CnOcADy6.js";import"./SkeletonParagraph-DYW1Ev-j.js";import"./HelpOutlineTwoTone-BBNXUYwB.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
