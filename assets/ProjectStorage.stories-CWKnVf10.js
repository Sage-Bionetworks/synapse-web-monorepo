import{g as i}from"./entityHandlers-DFi-zz0a.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DdzLlC9U.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DQ6EL37z.js";import{g as m}from"./userProfileHandlers-C_OO1v2v.js";import{P as L}from"./ProjectDataAvailability-TEKTeXIk.js";import"./index-Cbyl-ll0.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BnV_NTnb.js";import"./mockTeam-AqPnTIBi.js";import"./SynapseConstants-DQ1ikS1O.js";import"./OrientationBanner-BN07fH5k.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-IZ5_zrdr.js";import"./index-B1uhWlq_.js";import"./iframe-VtWkBZYO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbQ15yAK.js";import"./FullWidthAlert-5zc-3E-b.js";import"./Alert-BEvdQcEL.js";import"./createTheme-TOjNz6fB.js";import"./DefaultPropsProvider-CBD8PJSe.js";import"./useSlot-DTgu3gQR.js";import"./useForkRef-CTUlL3cJ.js";import"./createSimplePaletteValueFilter-DH3QwEOz.js";import"./createSvgIcon--x6u5jRF.js";import"./Close-QsKxVASE.js";import"./IconButton-iBwdBh2s.js";import"./useTimeout-Cq7I2zGO.js";import"./ButtonBase-DiuPscxo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-J852iPP_.js";import"./Paper-B_nq9U7K.js";import"./useTheme-CC-fCbti.js";import"./useTheme-DBSqUBnf.js";import"./Stack-RIyXZZPo.js";import"./useThemeProps-Bltw_p2W.js";import"./getThemeProps-Doj4gqGt.js";import"./extendSxProp-CX7cLBRq.js";import"./Box-BOKOlDky.js";import"./AlertTitle-Bm305o05.js";import"./Typography-DG3oGzan.js";import"./index-CAtNbYm6.js";import"./ClickAwayListener-DQtezAF7.js";import"./getReactElementRef-BqKh0nRS.js";import"./index-CGCoPhrt.js";import"./index-BJGbXTcu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-fV3jiCXF.js";import"./Tooltip-Dd4SE6TD.js";import"./index-DW0mVMzq.js";import"./useControlled-Nrfb0-dw.js";import"./Popper-D_KZqDAp.js";import"./Button-br2rykF0.js";import"./uniqueId-TLikt6xJ.js";import"./toString-jrftSDAf.js";import"./isArray-z0RNZAmn.js";import"./isSymbol-C6Ds9g64.js";import"./times-C5x8yjU-.js";import"./_Uint8Array-Bbw8m_zR.js";import"./identity-DKeuBCMA.js";import"./toInteger-5aALg26Z.js";import"./mockTableEntity-CGyB2ooP.js";import"./mockFileEntityACLVariants-DYHNYUfj.js";import"./fakerUtils-C0tXc_if.js";import"./mockFileEntity-NMZ3bcFC.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DhzUfPVz.js";import"./mockSchema-BafbFQAa.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BIw3Jdz_.js";import"./QueryClientProvider-BVns6KNT.js";import"./Link-CDPFvNbB.js";import"./Collapse-Dvs5y-JN.js";import"./_baseUniq-G4kodMhE.js";import"./_getTag-zEg92QQd.js";import"./isEqual-Dx5MNSQ5.js";import"./noop-DX6rZLP_.js";import"./merge-DsuvQUlG.js";import"./_initCloneObject-DgFdk6lj.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5eJ5m-a.js";import"./inputBaseClasses-CgsGgCf9.js";import"./calculateFriendlyFileSize-Dnl93bHk.js";import"./CheckCircleTwoTone-Y1ulybgg.js";import"./InfoTwoTone-D9uaXFDU.js";import"./useMutation-BXPzwztc.js";import"./dayjs.min-BZOatc1q.js";import"./chunk-AYJ5UCUI-CPmmeiVV.js";import"./cloneDeep-DaBFDYMX.js";import"./Skeleton-CMYh7EwU.js";import"./HelpPopover-DQjgXESe.js";import"./MarkdownPopover-CrLsOdhC.js";import"./LightTooltip-CZ9HGl9G.js";import"./MarkdownSynapse-BhJbw5i3.js";import"./SkeletonButton-DyITtScr.js";import"./SkeletonInlineBlock-S9rMohad.js";import"./SkeletonTable-CTnvpoLb.js";import"./SkeletonParagraph-COR9_K_1.js";import"./HelpOutlineTwoTone-C3T9DNeY.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
