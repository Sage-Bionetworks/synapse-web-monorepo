import{g as i}from"./entityHandlers-Beb3pz84.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-C8pQ42sC.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./StringUtils-DP1EOPFU.js";import{h as d,H as l}from"./index-Ce3dFBkz.js";import{g as m}from"./userProfileHandlers-DpDlwVp9.js";import{P as L}from"./ProjectDataAvailability-Bc1Lw1rv.js";import"./index-DGS0kxNa.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-5Rp1Ji1f.js";import"./mockTeam-DXVAsjas.js";import"./SynapseConstants-BWEIGnwu.js";import"./OrientationBanner-CCfEbiwH.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CpmJTZ4x.js";import"./index-d3rqgMCN.js";import"./iframe-ClNwV9PY.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bg_7O6IH.js";import"./FullWidthAlert-DnoeA5M1.js";import"./Alert-BzUj_4eQ.js";import"./createTheme-DvxOXisY.js";import"./DefaultPropsProvider-DbzGYC6R.js";import"./useSlot-B3TfMazm.js";import"./useForkRef-D3CdTM63.js";import"./createSimplePaletteValueFilter-BGU1NRjf.js";import"./createSvgIcon-877S8SfZ.js";import"./Close-DCJBwk8x.js";import"./IconButton-Cyq5--N7.js";import"./useTimeout-Ba8UwYs3.js";import"./ButtonBase-DY__CRx9.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BIWxjXOd.js";import"./Paper-CSLfVwPp.js";import"./useTheme-qO_LFzDa.js";import"./useTheme-CIBZr94v.js";import"./Stack-D_7wB_A8.js";import"./extendSxProp-FnuzVdsZ.js";import"./getThemeProps-CIY2LghJ.js";import"./Box-DpHzd5pI.js";import"./AlertTitle-C9nDlQ1G.js";import"./Typography-CCVx77H_.js";import"./index-g0GcxGYP.js";import"./ClickAwayListener-DuB1ADIA.js";import"./getReactElementRef-CEbG-EIy.js";import"./index-BhU5E2yG.js";import"./index--vTnsLgE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DIVOJwgj.js";import"./Tooltip-CPb4seuM.js";import"./index-SecRffPd.js";import"./useControlled-LqlwTi-d.js";import"./Popper-RXngH7Nw.js";import"./Button-CrXDoJqf.js";import"./uniqueId-1L9sLKnz.js";import"./toString-CpgPQIWO.js";import"./isArray-yr-f1zea.js";import"./isSymbol-n1cEv3Ae.js";import"./times-uhXOCnO2.js";import"./_Uint8Array-1H9Im2BA.js";import"./identity-DKeuBCMA.js";import"./toInteger-D9Fg3WJG.js";import"./mockTableEntity-Cx1l_J8z.js";import"./mockFileEntityACLVariants-DIueuyNT.js";import"./fakerUtils-DHPXUdrS.js";import"./mockFileEntity-Cro8pF4R.js";import"./mock_file_handle-BIJh-7D7.js";import"./mockEntity-tsknmT_g.js";import"./mockSchema-yCNhEyc-.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DYyOnCTL.js";import"./QueryClientProvider-BFF2BFJZ.js";import"./Link-DEQR3Bj0.js";import"./Collapse-IVJU_aLj.js";import"./_baseUniq-DbqMLa1W.js";import"./_getTag-CJ6sfUGW.js";import"./isEqual-BafHoWgl.js";import"./merge-DGYilYtD.js";import"./_initCloneObject-DxuZsF47.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4LvABf9.js";import"./inputBaseClasses-CUQGo_ih.js";import"./calculateFriendlyFileSize-BwWE2ebF.js";import"./CheckCircleTwoTone-CHuMDpy1.js";import"./InfoTwoTone-BINpw3Ae.js";import"./useMutation-DZbu7UUC.js";import"./dayjs.min-DjKPkMPs.js";import"./chunk-AYJ5UCUI-2UEh2evp.js";import"./cloneDeep-C2sTo4gJ.js";import"./Skeleton-D1wacr3-.js";import"./HelpPopover-CMDFYvAD.js";import"./MarkdownPopover-CAw0-oJ5.js";import"./LightTooltip-DAMyzSkr.js";import"./MarkdownSynapse-C1NYhXcB.js";import"./SkeletonButton-D2IHMibg.js";import"./SkeletonInlineBlock-B11ddKWv.js";import"./SkeletonTable-DZt1isCd.js";import"./SkeletonParagraph-BSF6tPot.js";import"./HelpOutlineTwoTone-BS_Gnu0k.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
