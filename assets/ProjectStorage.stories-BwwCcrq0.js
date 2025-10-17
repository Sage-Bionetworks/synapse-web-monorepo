import{g as i}from"./entityHandlers-B4-EkNv2.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-ChJXuE_G.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DRze-Qf3.js";import{g as m}from"./userProfileHandlers-BYSaAzCQ.js";import{P as L}from"./ProjectDataAvailability-Ckf9jrEp.js";import"./index-DcoWkwnZ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DuADk4Xq.js";import"./mockTeam-BgImtUE7.js";import"./SynapseConstants-BgVWTBvG.js";import"./OrientationBanner-CgO-jgpe.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BVMLTliA.js";import"./index-BjYqh8CN.js";import"./iframe-GZmPJQmw.js";import"./spreadSx-CwcO6WA9.js";import"./react-DYf9vH9v.js";import"./FullWidthAlert-CrgL78dl.js";import"./Alert-B8BaFiwn.js";import"./createTheme-Ci6bVZs8.js";import"./DefaultPropsProvider-p-VvPMcS.js";import"./useSlot-DjiMerLm.js";import"./useForkRef-DjK00V5X.js";import"./createSimplePaletteValueFilter-CRAp9ozw.js";import"./createSvgIcon-Cg3F_JaT.js";import"./Close-DQp4Ab7t.js";import"./IconButton-BDNvR3N2.js";import"./useTimeout-oOEcrwX8.js";import"./ButtonBase-CdN_s3us.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwcuRZZH.js";import"./Paper-C9Te-8_v.js";import"./useTheme-Chrl7Xny.js";import"./useTheme-B9Eo60Il.js";import"./Stack-wnfKJykl.js";import"./useThemeProps-DqWLfYoN.js";import"./getThemeProps-DBSpe4l4.js";import"./extendSxProp-D59BLFsM.js";import"./Box-Ci2u2n8R.js";import"./AlertTitle-DXxtItD6.js";import"./Typography-C4bCrnhF.js";import"./index-BVOHcrQX.js";import"./ClickAwayListener-BZ6LIgVx.js";import"./getReactElementRef-DMDF8VWZ.js";import"./index-CRKwKLDy.js";import"./index-De9pklvj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DV3m8xn_.js";import"./Tooltip-DS2_bocJ.js";import"./index-CqDcjKYL.js";import"./useControlled-D7Hv9h3B.js";import"./Popper-BD3sWAZF.js";import"./Button-RzPtlbLb.js";import"./uniqueId-By_Da33P.js";import"./toString-8iyE_E-g.js";import"./isArray-CVqdkdHi.js";import"./isSymbol-1MtzzuJn.js";import"./times-8p9rqNhW.js";import"./_Uint8Array-CkNwlXWO.js";import"./identity-DKeuBCMA.js";import"./toInteger-QKHrRNAA.js";import"./mockTableEntity-B3I69SoG.js";import"./mockFileEntityACLVariants-D-Vfmcqn.js";import"./fakerUtils-CJKlp6pe.js";import"./mockFileEntity-CLMyGGCU.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-OGUpyvSp.js";import"./mockSchema-DJUtZjCq.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-Dnr6EabU.js";import"./QueryClientProvider-BT5rH4_G.js";import"./Link-BXPkqIaF.js";import"./Collapse-DXsRlhM4.js";import"./_baseUniq-DxBf4Di9.js";import"./_getTag-k5zGXYGR.js";import"./isEqual-CM_V142D.js";import"./noop-DX6rZLP_.js";import"./merge-CjHAQmH1.js";import"./_initCloneObject-luMxzLHE.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cbte7BvX.js";import"./inputBaseClasses-BD4tWqAD.js";import"./calculateFriendlyFileSize-B18g-3Th.js";import"./CheckCircleTwoTone-BchYLEzy.js";import"./InfoTwoTone-BazwzvUl.js";import"./useMutation-DF0qP4Yb.js";import"./dayjs.min-DxdUSqs4.js";import"./chunk-AYJ5UCUI-Y88dghcf.js";import"./cloneDeep-DALKoszi.js";import"./Skeleton-BgJRY0_p.js";import"./HelpPopover-BUy2O_la.js";import"./MarkdownPopover-CLgxXJ7d.js";import"./LightTooltip-CYDn3m5A.js";import"./MarkdownSynapse-CyMrYUHX.js";import"./SkeletonButton-Duvdn4_H.js";import"./SkeletonInlineBlock-BRclsig0.js";import"./SkeletonTable-Cv1qau9B.js";import"./SkeletonParagraph-BWgrjW1A.js";import"./HelpOutlineTwoTone-CQcLmo9a.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
