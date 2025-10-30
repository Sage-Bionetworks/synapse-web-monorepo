import{g as i}from"./entityHandlers-MWV6hTxu.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DoM6saS5.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-C4jmo3AY.js";import{g as m}from"./userProfileHandlers-BDYNFZos.js";import{P as L}from"./ProjectDataAvailability-gI1SRuCZ.js";import"./index-zWFMHLSD.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-C0PAH7Un.js";import"./mockTeam-CJ_lnlCp.js";import"./SynapseConstants-fjcaPar4.js";import"./OrientationBanner-DXHS9Ok7.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Cc1jVt2S.js";import"./index-C0wX4_D5.js";import"./iframe-Dg1OjomY.js";import"./spreadSx-CwcO6WA9.js";import"./react-DljyRFug.js";import"./FullWidthAlert-12ZGik4M.js";import"./Alert-SAf-HTP7.js";import"./createTheme-XmTP9ztr.js";import"./DefaultPropsProvider-C8agOKNV.js";import"./useSlot-CMw1Guot.js";import"./useForkRef-DHDj_EBp.js";import"./createSimplePaletteValueFilter-CMeensCQ.js";import"./createSvgIcon-C1R5uYZR.js";import"./Close-DlaaWvLY.js";import"./IconButton-DNzDJyyG.js";import"./useTimeout-VgJ8KSEC.js";import"./ButtonBase-BZaAYyhz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-izn7xOSO.js";import"./Paper-nmCYqCUg.js";import"./useTheme-xbf2ZGeF.js";import"./useTheme-Ct2y6sLT.js";import"./Stack-DUv6l47M.js";import"./useThemeProps-B1LQGkAl.js";import"./getThemeProps-kFzncbx6.js";import"./extendSxProp-B4wy7T2i.js";import"./Box-BD_ma7_J.js";import"./AlertTitle-COng_SQR.js";import"./Typography-z9eLrlT0.js";import"./index-BCjqeLgG.js";import"./ClickAwayListener-Csamat5p.js";import"./getReactElementRef-DKvxwlSs.js";import"./index-BrkuAfGd.js";import"./index-Bhfa3jqe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BY41iU1Z.js";import"./Tooltip-C6Zypvy1.js";import"./index-B2R4X1D8.js";import"./useControlled-DeciPQCg.js";import"./Popper-BbH1NV83.js";import"./Button-DYN6lvaS.js";import"./uniqueId-I7cM3fLo.js";import"./toString-DMDXMjr2.js";import"./isArray-kTGNcp_W.js";import"./isSymbol-C4Dq_EPu.js";import"./times-BvGMvnLM.js";import"./_Uint8Array-BgOJGnAV.js";import"./identity-DKeuBCMA.js";import"./toInteger-D8nVZSHb.js";import"./mockTableEntity-Cz0_MOWU.js";import"./mockFileEntityACLVariants-B4mTupCa.js";import"./fakerUtils-B4fahwPq.js";import"./mockFileEntity-DLapV2j9.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CQ76o2N2.js";import"./mockSchema-BhMOIc74.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-kiquRXJF.js";import"./QueryClientProvider-DDbKIYHh.js";import"./Link-C-HxI53b.js";import"./Collapse-B2sQsY1M.js";import"./_baseUniq-LxXjfER7.js";import"./_getTag-D8v9FRbF.js";import"./isEqual-B2qkdwNi.js";import"./noop-DX6rZLP_.js";import"./merge-CowR9ykA.js";import"./_initCloneObject-DMyAcL1x.js";import"./tinycolor-Begke6kS.js";import"./Fade-Be6GbFNo.js";import"./inputBaseClasses-BFpUsf8s.js";import"./calculateFriendlyFileSize-hiMIYe5W.js";import"./CheckCircleTwoTone-CCgVT7vA.js";import"./InfoTwoTone-Cz_RDhGO.js";import"./useMutation-CdgWCH4U.js";import"./dayjs.min-D8ND5VJ0.js";import"./chunk-AYJ5UCUI-DxxQLvEU.js";import"./cloneDeep-B1SVQaTP.js";import"./Skeleton-BUe1EjHW.js";import"./HelpPopover-lO1h1DA9.js";import"./MarkdownPopover-IMvWljiJ.js";import"./LightTooltip-D_jhOZ5r.js";import"./MarkdownSynapse-Dmk4Ckus.js";import"./SkeletonButton-DlnglF6i.js";import"./SkeletonInlineBlock-5CAqqmxD.js";import"./SkeletonTable-welLau-Y.js";import"./SkeletonParagraph-C7V-74O4.js";import"./HelpOutlineTwoTone-C3vrtjCs.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
