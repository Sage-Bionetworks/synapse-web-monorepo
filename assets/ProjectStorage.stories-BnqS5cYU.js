import{g as i}from"./entityHandlers-BbNjUA46.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BcOp3J9q.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DlxsU4wi.js";import{g as m}from"./userProfileHandlers-C2sW-7YE.js";import{P as L}from"./ProjectDataAvailability-C9avWoL8.js";import"./index-D0-a6aCk.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BeNodh-k.js";import"./mockTeam-CrxLVF-E.js";import"./SynapseConstants-Djz1eDCb.js";import"./OrientationBanner-0SatnoWN.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Cgp7Fr2y.js";import"./index-DVkvcA_X.js";import"./iframe-DXTuuIB8.js";import"./spreadSx-CwcO6WA9.js";import"./react-JO-gccfv.js";import"./FullWidthAlert-eBuHzIDT.js";import"./Alert-BY5VRYB8.js";import"./createTheme-CLaEDdPQ.js";import"./DefaultPropsProvider-CuIKnw1u.js";import"./useSlot-C_1XBrUD.js";import"./useForkRef-D52SqoyK.js";import"./createSimplePaletteValueFilter-aDgbEVGf.js";import"./createSvgIcon-C5j-w5qY.js";import"./Close-DfOEo3ot.js";import"./IconButton-DGIQFJcy.js";import"./useTimeout-DXFIOS9o.js";import"./ButtonBase-DDJ8Zik5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-WyX1suUl.js";import"./Paper-wIcb_i9m.js";import"./useTheme-B62f1yoy.js";import"./useTheme-C1P9mfNV.js";import"./Stack-DiF77Lkk.js";import"./extendSxProp-DSZ__TYT.js";import"./getThemeProps-OHGuBYlk.js";import"./Box-DEh918aS.js";import"./AlertTitle-D_ekppPW.js";import"./Typography-B1PObzbp.js";import"./index-B3S2GMAT.js";import"./ClickAwayListener--qQuedCY.js";import"./getReactElementRef-DTGtnvkV.js";import"./index-BzJMSVrG.js";import"./index-MAwSiZZZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BWoXoFY0.js";import"./Tooltip-DGMS6sKu.js";import"./index-2_-RNHTx.js";import"./useControlled-DMZfhKvt.js";import"./Popper-Bj4y9GNA.js";import"./Button-D1pRKzJ5.js";import"./uniqueId-_0XsBeQ8.js";import"./toString-eb1JqBSx.js";import"./isArray-DO6yf-4A.js";import"./isSymbol-0KRDkVlb.js";import"./times-o6xd_Wsx.js";import"./_Uint8Array-DYT8ocWE.js";import"./identity-DKeuBCMA.js";import"./toInteger-DdMUJFLp.js";import"./mockTableEntity-C0pFOEnU.js";import"./mockFileEntityACLVariants-BzNwu6hs.js";import"./fakerUtils-C29U1xby.js";import"./mockFileEntity-Dj6LYisb.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BE86yFQQ.js";import"./mockSchema-DeD_ccNn.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-2oV4dAcJ.js";import"./QueryClientProvider-NT-Ok-dU.js";import"./Link-HDokgQ6f.js";import"./Collapse-DMxkdKx1.js";import"./_baseUniq-B-3xrBnc.js";import"./_getTag-DUjOkMuI.js";import"./isEqual-CWB7x7bo.js";import"./merge-CJQInoiv.js";import"./_initCloneObject-dH7HCR6T.js";import"./tinycolor-Begke6kS.js";import"./Fade-DuYHphZs.js";import"./inputBaseClasses-DyQj29gk.js";import"./calculateFriendlyFileSize-CzSgR5ke.js";import"./CheckCircleTwoTone-B5xperQI.js";import"./InfoTwoTone-k2lsfCRJ.js";import"./useMutation-CRoKKj0V.js";import"./dayjs.min-DpfhmZH9.js";import"./chunk-AYJ5UCUI-BxVsfoL4.js";import"./cloneDeep-BIlo70rr.js";import"./Skeleton-BUuixYV7.js";import"./HelpPopover-oWvJQqxN.js";import"./MarkdownPopover-DVwOyg0B.js";import"./LightTooltip-DxbT4vDP.js";import"./MarkdownSynapse-CtIGluzr.js";import"./SkeletonButton-73IIYRvI.js";import"./SkeletonInlineBlock-uFg6tSx6.js";import"./SkeletonTable-CRr4I9pB.js";import"./SkeletonParagraph-BN7CAjVN.js";import"./HelpOutlineTwoTone-ClMUrgj1.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
