import{g as i}from"./entityHandlers-BgAGz0Cw.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-DTIYA5rx.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-Bc7_yWEg.js";import{g as m}from"./userProfileHandlers-B-dFbbdV.js";import{P as L}from"./ProjectDataAvailability-CKtuuqKZ.js";import"./index-BFtjtVzl.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-D_T6felT.js";import"./mockTeam-BTdmGNRp.js";import"./SynapseConstants-Badmnctn.js";import"./OrientationBanner-W-oxA1oW.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-SKRyRm18.js";import"./index-DG11J9On.js";import"./iframe-CFx4SmlQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-DjUZwrS0.js";import"./FullWidthAlert-dAH4WwYR.js";import"./Alert-Bwo9jVk2.js";import"./createTheme-C3ZlBHOR.js";import"./DefaultPropsProvider-BngAxNfg.js";import"./useSlot-DTL4s5Fo.js";import"./useForkRef-DqKQMU6v.js";import"./createSimplePaletteValueFilter-DLcVTaCv.js";import"./createSvgIcon-CaT9xKql.js";import"./Close-XhtxoZ4V.js";import"./IconButton-BGgUVhRP.js";import"./useTimeout-BVRtd2bj.js";import"./ButtonBase-Byp5VrHb.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BwCph7sa.js";import"./Paper-CQ-ti9pd.js";import"./useTheme-CGOBdzwx.js";import"./useTheme-Dlh4q2q2.js";import"./Stack-DVpO78Of.js";import"./extendSxProp-De9UySGh.js";import"./getThemeProps-BqQ-LewE.js";import"./Box-DSEnYR08.js";import"./AlertTitle-TTBh0xNw.js";import"./Typography-Bg3Brpmd.js";import"./index-q0p95m-D.js";import"./ClickAwayListener-B4yhA0Px.js";import"./getReactElementRef-DrXrtI8G.js";import"./index-CJuEcaaD.js";import"./index-DBl0twju.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DP_AFsYT.js";import"./Tooltip-CdI8BHtE.js";import"./index-CKkvvCY2.js";import"./useControlled-ByefJ87W.js";import"./Popper-BFgdKwjW.js";import"./Button-C53OkhyL.js";import"./uniqueId-dzhwEmsN.js";import"./toString-D-4cTbJV.js";import"./isArray-ol0mTvVW.js";import"./isSymbol-CcsJyso8.js";import"./times-CbxHQHRI.js";import"./_Uint8Array-DQTcvvta.js";import"./identity-DKeuBCMA.js";import"./toInteger-Cz62hbO-.js";import"./mockTableEntity-BXZUKGFA.js";import"./mockFileEntityACLVariants-BJz95OAf.js";import"./fakerUtils-B7wt27ji.js";import"./mockFileEntity-CyVbhpWu.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-nT2QYoSB.js";import"./mockSchema-iGAh0kuX.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BXO0nReV.js";import"./QueryClientProvider-BCm9WdUt.js";import"./Link-vyBZc_X6.js";import"./Collapse-0lsId-M4.js";import"./_baseUniq-nvsczMT_.js";import"./_getTag-Cty8vqd7.js";import"./isEqual-DXatWGPi.js";import"./merge-CeYIG25n.js";import"./_initCloneObject-BBpqQKrX.js";import"./tinycolor-Begke6kS.js";import"./Fade-7kRVzn_c.js";import"./inputBaseClasses-sMEcRXLK.js";import"./calculateFriendlyFileSize-CYRBhA6n.js";import"./CheckCircleTwoTone-C1_4w8s1.js";import"./InfoTwoTone-B9OihmVW.js";import"./useMutation-CmMiPDVM.js";import"./dayjs.min-CLD5-AUH.js";import"./chunk-AYJ5UCUI-56tzNCw-.js";import"./cloneDeep-SdJSSkEq.js";import"./Skeleton-BejAbq-W.js";import"./HelpPopover-DkazgtBj.js";import"./MarkdownPopover-UpjplZW5.js";import"./LightTooltip-CS6jz4qc.js";import"./MarkdownSynapse-BFZJ3Ygk.js";import"./SkeletonButton-4qIF_GQV.js";import"./SkeletonInlineBlock-CTbLMq_D.js";import"./SkeletonTable-BbZNHtsQ.js";import"./SkeletonParagraph-BXfHQnCb.js";import"./HelpOutlineTwoTone-jB-p_P8d.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
