import{g as i}from"./entityHandlers-COZOJQnA.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Cg_eAUDA.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-8up6gZcc.js";import{g as m}from"./userProfileHandlers-h0Wz2A9o.js";import{P as L}from"./ProjectDataAvailability-BfPLOaOX.js";import"./index-DQ3dtKcp.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-l_xYqry-.js";import"./mockTeam-BCAZa1eZ.js";import"./SynapseConstants-BaFW-Hk1.js";import"./OrientationBanner-7A6I2Sts.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DrKws1ZS.js";import"./index-ByFgbSi1.js";import"./iframe-DQjbfcQ9.js";import"./spreadSx-CwcO6WA9.js";import"./react-4DRvf2RG.js";import"./FullWidthAlert-BmX-nqa8.js";import"./Alert-cq0Vou2L.js";import"./createTheme-i8RyPaYL.js";import"./DefaultPropsProvider-6pJ8FZcR.js";import"./useSlot-C0bdZSh0.js";import"./useForkRef-23rwbX6-.js";import"./createSimplePaletteValueFilter-Bc_Jnzdb.js";import"./createSvgIcon-Dx2LBnYP.js";import"./Close-D3BjbVZl.js";import"./IconButton-DxywuGM_.js";import"./useTimeout-CSjKXMwL.js";import"./ButtonBase-CTwLXAXZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DEGgbvx4.js";import"./Paper-QA66fCso.js";import"./useTheme-BSYxzT2u.js";import"./useTheme-d8TpmLbK.js";import"./Stack-DWAVfk6y.js";import"./extendSxProp-Dtt1Z7Rz.js";import"./getThemeProps-B9cF21qQ.js";import"./Box-CZ8nomX1.js";import"./AlertTitle-Dpusuo1a.js";import"./Typography-CY333YIv.js";import"./index-OanGvPr5.js";import"./ClickAwayListener-DiPtj9kP.js";import"./getReactElementRef-DnnqkrYN.js";import"./index-DXPb9-O7.js";import"./index-D164aDtB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B4czxb_I.js";import"./Tooltip-Z97fGrMz.js";import"./index-Dmk_WNz3.js";import"./useControlled-CEl4StEV.js";import"./Popper-Dj-99SyI.js";import"./Button-CYldgbV6.js";import"./uniqueId-BSuY5neH.js";import"./toString-z8vEG3W4.js";import"./isArray-slhQyjYX.js";import"./isSymbol-j4e5Mk_1.js";import"./times-DrYQZAZT.js";import"./_Uint8Array-CpLANe0M.js";import"./identity-DKeuBCMA.js";import"./toInteger-DC8bWbZD.js";import"./mockTableEntity-ARThwUTR.js";import"./mockFileEntityACLVariants-kQTqaK8N.js";import"./fakerUtils-CpJAK26F.js";import"./mockFileEntity-Bkf_R2mc.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-WpxUS7bt.js";import"./mockSchema-VeljeMKn.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DKynZEci.js";import"./QueryClientProvider--7WDvxPi.js";import"./Link-CtNtuiDF.js";import"./Collapse-CjU9t1fz.js";import"./_baseUniq-B5okjzLX.js";import"./_getTag-EGniEwS5.js";import"./isEqual-CZZqW4AH.js";import"./merge-UMFakapv.js";import"./_initCloneObject-wkm3rYXe.js";import"./tinycolor-Begke6kS.js";import"./Fade-55a661Ax.js";import"./inputBaseClasses-QMrXpAyg.js";import"./calculateFriendlyFileSize-CWPY0s9D.js";import"./CheckCircleTwoTone-UKzD70d6.js";import"./InfoTwoTone-D2qSN7nc.js";import"./useMutation-BXPMCqV1.js";import"./dayjs.min-BfZA8BkT.js";import"./chunk-AYJ5UCUI-OavDP728.js";import"./cloneDeep-QdVPM6qo.js";import"./Skeleton-DdQ3uvfq.js";import"./HelpPopover-ChS2xXol.js";import"./MarkdownPopover-DGUZqa7C.js";import"./LightTooltip-CO0sW636.js";import"./MarkdownSynapse-CeBhDznu.js";import"./SkeletonButton-vhmms5hD.js";import"./SkeletonInlineBlock-CwWUxANM.js";import"./SkeletonTable-B2O8d0ro.js";import"./SkeletonParagraph-Mm1FQiPz.js";import"./HelpOutlineTwoTone-B09gkyJr.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
