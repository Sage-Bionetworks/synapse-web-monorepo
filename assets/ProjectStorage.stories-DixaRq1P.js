import{g as i}from"./entityHandlers-DASEMMVN.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BRC0e057.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-B5A8T8Bk.js";import{g as m}from"./userProfileHandlers-DqZDZ8Gc.js";import{P as L}from"./ProjectDataAvailability-CeUaS7Py.js";import"./index-DVZqdekN.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bze-epPZ.js";import"./mockTeam-CJJSzMu4.js";import"./SynapseConstants-CfvgkpB4.js";import"./OrientationBanner-BWVrubWR.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D_cRBOD6.js";import"./index-D48SXRoA.js";import"./iframe-CGMSSV3a.js";import"./spreadSx-CwcO6WA9.js";import"./react-D986rM5G.js";import"./FullWidthAlert-B5UKJIYG.js";import"./Alert-bz4bj5M3.js";import"./createTheme-CwyfHowY.js";import"./DefaultPropsProvider-DPRhv_AP.js";import"./useSlot-C8xh2t7a.js";import"./useForkRef-ISS65Dbm.js";import"./createSimplePaletteValueFilter-D-ylNyMT.js";import"./createSvgIcon-BdhbaoYx.js";import"./Close-BDxJ-CL7.js";import"./IconButton-CNghFUuS.js";import"./useTimeout-DCletuKH.js";import"./ButtonBase-BBTsQTx6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CBtKmTpr.js";import"./Paper-zc-lrNFo.js";import"./useTheme-BGjL3p3E.js";import"./useTheme-CYR3sgEx.js";import"./Stack-BMkmBXpw.js";import"./extendSxProp-B8hz4pXV.js";import"./getThemeProps-DdHk9pvF.js";import"./Box-BPM5q58Y.js";import"./AlertTitle-BCr-iYO8.js";import"./Typography-CWBVLAyW.js";import"./index-MSg-8E6y.js";import"./ClickAwayListener-Bp9Ns1it.js";import"./getReactElementRef-WUekJjzf.js";import"./index-zG4oEPGU.js";import"./index-BJiYowkb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bt4rr9VO.js";import"./Tooltip-CFQP7Dzi.js";import"./index-DfdAMDFO.js";import"./useControlled-DWNCs13l.js";import"./Popper-Do8nfD9j.js";import"./Button-DixPWBu_.js";import"./uniqueId-6OFsmHMl.js";import"./toString-CyzfARIG.js";import"./isArray-CQWoh040.js";import"./isSymbol-DHrtueJL.js";import"./times-TpSMvO50.js";import"./_Uint8Array-DKRij8Pm.js";import"./identity-DKeuBCMA.js";import"./toInteger-CAEUe5q1.js";import"./mockTableEntity-vOlnWkY5.js";import"./mockFileEntityACLVariants-DH0icWQ2.js";import"./fakerUtils-BrzMgSpV.js";import"./mockFileEntity-CZmATl7v.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DHPHzXAI.js";import"./mockSchema-GL_IsMJ6.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BFYapwyn.js";import"./QueryClientProvider-B024YWxc.js";import"./Link-DB1ue7Mo.js";import"./Collapse-DtLKmRWa.js";import"./_baseUniq-NLHVw4Us.js";import"./_getTag-B_fA-_8S.js";import"./isEqual-DYS1ityr.js";import"./merge-BAPM3reP.js";import"./_initCloneObject-DlkwyIPz.js";import"./tinycolor-Begke6kS.js";import"./Fade-DAchz5lR.js";import"./inputBaseClasses-De2T74iN.js";import"./calculateFriendlyFileSize-CZVs-iSb.js";import"./CheckCircleTwoTone-CmaQzaow.js";import"./InfoTwoTone-BJLTUP-0.js";import"./useMutation-B3cc0E9Q.js";import"./dayjs.min-DhyUtXUb.js";import"./chunk-AYJ5UCUI-B-7RGnHT.js";import"./cloneDeep-BixVh9mJ.js";import"./Skeleton-BgVXRcxp.js";import"./HelpPopover-hWcy9haS.js";import"./MarkdownPopover-weArzVo9.js";import"./LightTooltip-CcxY2aI9.js";import"./MarkdownSynapse-BaD52Rjr.js";import"./SkeletonButton-CB9lIvZ0.js";import"./SkeletonInlineBlock-C46L86dm.js";import"./SkeletonTable-CPL8E6uA.js";import"./SkeletonParagraph-CMz_T7vJ.js";import"./HelpOutlineTwoTone-DKCTr-6F.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
