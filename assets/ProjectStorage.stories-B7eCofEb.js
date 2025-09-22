import{g as i}from"./entityHandlers-vpLMyPzA.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-dWGrqz_D.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-rqSDEHoa.js";import{g as m}from"./userProfileHandlers-D4t0WQ6C.js";import{P as L}from"./ProjectDataAvailability-Ddps8p4h.js";import"./index-M5MGiyK_.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-_rNaU95L.js";import"./mockTeam-DgK0fSsD.js";import"./SynapseConstants-CTIB33D3.js";import"./OrientationBanner-CQFR5l9R.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BMgqcLmn.js";import"./index-DWtRjqxE.js";import"./iframe-dC7zyD38.js";import"./spreadSx-CwcO6WA9.js";import"./react-DSUFze6-.js";import"./FullWidthAlert-mM8bmdFl.js";import"./Alert-CO4LRSIc.js";import"./createTheme-B8tVnoKa.js";import"./DefaultPropsProvider-BOBWKWsP.js";import"./useSlot-Bbu2_Uh5.js";import"./useForkRef-BsHVNaER.js";import"./createSimplePaletteValueFilter-CI1PPbZz.js";import"./createSvgIcon-BgawE0cA.js";import"./Close-ZUvqdUvf.js";import"./IconButton-BYWzvY5r.js";import"./useTimeout-C10Fy58h.js";import"./ButtonBase-eKGtCu5K.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bepf3adF.js";import"./Paper-BN7kDLUZ.js";import"./useTheme-Bqfldhhz.js";import"./useTheme-44ZyrYIV.js";import"./Stack-B_1G5Dgc.js";import"./extendSxProp-B1uoARpz.js";import"./getThemeProps-DtfQR3gl.js";import"./Box-CJwkuUVc.js";import"./AlertTitle-Dny0ic5F.js";import"./Typography-8YdQWFwx.js";import"./index-6HQiBBz4.js";import"./ClickAwayListener-cCk8f9_L.js";import"./getReactElementRef-DFZw1bWU.js";import"./index-DWZIDMAz.js";import"./index-DHmZPXnJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-egikrnTN.js";import"./Tooltip-ChGVg_eO.js";import"./index-Bh9Mm5w5.js";import"./useControlled-jIUY62E0.js";import"./Popper-8zb1kIwC.js";import"./Button-BsTgAid7.js";import"./uniqueId-BleNd0Z5.js";import"./toString-D4usIpsO.js";import"./isArray-Dvp0SrYH.js";import"./isSymbol-BcjZZVhs.js";import"./times-DB0yTzi6.js";import"./_Uint8Array-CgwNuqWK.js";import"./identity-DKeuBCMA.js";import"./toInteger-BH2RyoWC.js";import"./mockTableEntity-BhUmbsz7.js";import"./mockFileEntityACLVariants-Bi23QpRI.js";import"./fakerUtils-BUuy6fri.js";import"./mockFileEntity-B2e9R_dm.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-395dxwHV.js";import"./mockSchema-B_taGFbj.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BJdHVLrD.js";import"./QueryClientProvider-CUCt5UMY.js";import"./Link-9MVZDgxR.js";import"./Collapse-DcRUmTWs.js";import"./_baseUniq-DexRrmkQ.js";import"./_getTag-yEmMQGSX.js";import"./isEqual-BrJ8BCp_.js";import"./merge-BVgGw762.js";import"./_initCloneObject-BO9WrdaY.js";import"./tinycolor-Begke6kS.js";import"./Fade-6tQ1BYQE.js";import"./inputBaseClasses-BBU_2lni.js";import"./calculateFriendlyFileSize-BqN9629y.js";import"./CheckCircleTwoTone-puf-7GIZ.js";import"./InfoTwoTone-Cw0LVZ8W.js";import"./useMutation-BRVUSdsV.js";import"./dayjs.min-P2dLUj27.js";import"./chunk-AYJ5UCUI-DaTh8-5G.js";import"./cloneDeep-C2Thqa1j.js";import"./Skeleton-DbEDjigm.js";import"./HelpPopover-PZpdc9FE.js";import"./MarkdownPopover-C-AE92WV.js";import"./LightTooltip-DrWZrcVW.js";import"./MarkdownSynapse-Dzi0Q_bJ.js";import"./SkeletonButton-DEMLMPcl.js";import"./SkeletonInlineBlock-Dx_yKudb.js";import"./SkeletonTable-D-HjqQXv.js";import"./SkeletonParagraph-CI8MkDyS.js";import"./HelpOutlineTwoTone-Bvm_CqdB.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
