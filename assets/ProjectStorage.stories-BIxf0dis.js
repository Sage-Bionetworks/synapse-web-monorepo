import{g as i}from"./entityHandlers-DsBPUmgl.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-BaHBnPCT.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-RdIn85H9.js";import{g as m}from"./userProfileHandlers-yL_HPa9L.js";import{P as L}from"./ProjectDataAvailability-CcIwD8Ag.js";import"./index-CDlXj7kf.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CPVIRAW7.js";import"./mockTeam-CnHYlifl.js";import"./SynapseConstants-BqMZZ0Uj.js";import"./OrientationBanner-D3mCNTls.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D9zPyMPU.js";import"./index-DG5WaW8A.js";import"./iframe-DnJ5JHSL.js";import"./spreadSx-CwcO6WA9.js";import"./react-DpPAoAus.js";import"./FullWidthAlert-C15S_5lN.js";import"./Alert-CqLArlEA.js";import"./createTheme-B8qtGaPA.js";import"./DefaultPropsProvider-WJKOyJT-.js";import"./useSlot-JvNPDeI7.js";import"./useForkRef-CW6ZjnOu.js";import"./createSimplePaletteValueFilter-DKnUICEw.js";import"./createSvgIcon-COjOD54i.js";import"./Close-COST_jYw.js";import"./IconButton-D4tlpKJ0.js";import"./useTimeout-C2yROX5q.js";import"./ButtonBase-HT1BmJkV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-szAnAP88.js";import"./Paper-DP7YNfiE.js";import"./useTheme-a817PGTf.js";import"./useTheme-DoRa5GNx.js";import"./Stack-mJ9nGhMq.js";import"./extendSxProp-C3WEdxaP.js";import"./getThemeProps-nH5b3nzk.js";import"./Box-Dwzdnkyq.js";import"./AlertTitle-D_6eYjWf.js";import"./Typography-DJYJum-Z.js";import"./index-C0MKoZk1.js";import"./ClickAwayListener-BuTrm4_l.js";import"./getReactElementRef-Cn7e0r_1.js";import"./index-De9PzaEN.js";import"./index-BsQ9BBfm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DIlAcZ3T.js";import"./Tooltip-D9bXZBwE.js";import"./index-DepU4Aic.js";import"./useControlled-CEU-8lDi.js";import"./Popper-CRSbOcEy.js";import"./Button-DfdvB59M.js";import"./uniqueId-Zmb2_QCn.js";import"./toString-CZBLh3Dy.js";import"./isArray-BNx9SFw4.js";import"./isSymbol-hYURkEXL.js";import"./times-Biwrgnwl.js";import"./_Uint8Array-93iIsemI.js";import"./identity-DKeuBCMA.js";import"./toInteger-C4MvgP0M.js";import"./mockTableEntity-DYhtxPiD.js";import"./mockFileEntityACLVariants-hBZyvjSL.js";import"./fakerUtils-D1OtPjvC.js";import"./mockFileEntity-DhJlJ4vI.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-B-sCeALb.js";import"./mockSchema-CDEJYxkV.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-Ba3IRlbK.js";import"./QueryClientProvider-CRM5FpDi.js";import"./Link-Don1gO5O.js";import"./Collapse-BifcPkpD.js";import"./_baseUniq-B4bOwasf.js";import"./_getTag-CC1IQGmn.js";import"./isEqual-DhexJtMb.js";import"./merge-COeUm6ZQ.js";import"./_initCloneObject-U8B2jDKi.js";import"./tinycolor-Begke6kS.js";import"./Fade-CvRe1w3X.js";import"./inputBaseClasses-Bj2LEIDd.js";import"./calculateFriendlyFileSize-Ddu106po.js";import"./CheckCircleTwoTone-C1fKEsD6.js";import"./InfoTwoTone-Cz9XMzuy.js";import"./useMutation-nRNz6yUF.js";import"./dayjs.min-DpTEiHjS.js";import"./chunk-AYJ5UCUI-DUTlC2ep.js";import"./cloneDeep-Bl5O9E0A.js";import"./Skeleton-Z_xAmh5P.js";import"./HelpPopover-D-5l89TZ.js";import"./MarkdownPopover-DwP0Gx0y.js";import"./LightTooltip-BSCiQ-aU.js";import"./MarkdownSynapse-BL6Ta7Bh.js";import"./SkeletonButton-Dm6ZtGA6.js";import"./SkeletonInlineBlock-Ca8dv9Uu.js";import"./SkeletonTable-C3EaZc_V.js";import"./SkeletonParagraph-CODGbLfY.js";import"./HelpOutlineTwoTone-7MNaDPYf.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
