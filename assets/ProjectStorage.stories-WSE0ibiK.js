import{g as i}from"./entityHandlers-O9bMRDuj.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BZV17LRY.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CtQM2pY5.js";import{g as m}from"./userProfileHandlers-CXqsytAw.js";import{P as L}from"./ProjectDataAvailability-BSsymadE.js";import"./index-C07JzMi4.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BNbhSb0x.js";import"./mockTeam-DT09WizX.js";import"./SynapseConstants-VIskHFE7.js";import"./OrientationBanner-mYD1KLJ5.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-C6oCx5Q4.js";import"./index-CREGy4JU.js";import"./iframe-DFtThXn_.js";import"./spreadSx-CwcO6WA9.js";import"./react-B2udbvLI.js";import"./FullWidthAlert-ZCTjro34.js";import"./Alert-AqaPj6PE.js";import"./createTheme-CE1nmSdD.js";import"./DefaultPropsProvider-BHzoV1Dn.js";import"./useSlot-DMKKbB6i.js";import"./useForkRef-CyS_o1Iz.js";import"./createSimplePaletteValueFilter-C9Flh5mR.js";import"./createSvgIcon-CkgBCV8y.js";import"./Close-DQp0oEqq.js";import"./IconButton-BUM-FX0_.js";import"./useTimeout-BE5W8YJ8.js";import"./ButtonBase-DaZ_7lRI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DfEpdioV.js";import"./Paper-DBVwlpo2.js";import"./useTheme-CwYhMF_O.js";import"./useTheme-JvF5LZla.js";import"./Stack-CPIUTT_1.js";import"./useThemeProps-zgF3fqlo.js";import"./getThemeProps-CRUQo9sp.js";import"./extendSxProp-BOce1nm_.js";import"./Box-DZiaVZnl.js";import"./AlertTitle-ChsCM4TP.js";import"./Typography-ANEGaihN.js";import"./index-B74xXF-A.js";import"./ClickAwayListener-YW0z3svG.js";import"./getReactElementRef-DO_5aoCT.js";import"./index-DD8x44wX.js";import"./index-C1cgcAs1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DpBJrWe9.js";import"./Tooltip-Dr1XL-Zz.js";import"./index-ClwLs2xL.js";import"./useControlled-D4h4kRjW.js";import"./Popper-C1co2brQ.js";import"./Button-Mc4n0qjd.js";import"./uniqueId-CPUPXJdX.js";import"./toString-BOGGYPmT.js";import"./isArray-CV7tcOmy.js";import"./isSymbol-BhCFEInU.js";import"./times-Bv1KFJrp.js";import"./_Uint8Array-B6jpFBB6.js";import"./identity-DKeuBCMA.js";import"./toInteger-BtKyyIvD.js";import"./mockTableEntity-CYULxNad.js";import"./mockFileEntityACLVariants-DpuUHBcs.js";import"./fakerUtils-TtYoim52.js";import"./mockFileEntity-C1dQWdGo.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DrcOyavt.js";import"./mockSchema-BruEX4hN.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DI2Ey6nc.js";import"./QueryClientProvider-BA1QpnVt.js";import"./Link-D3QslX_P.js";import"./Collapse-DD7JCiwU.js";import"./_baseUniq-7YcikviV.js";import"./_getTag-HkVF-QgG.js";import"./isEqual-KtQk5CnN.js";import"./noop-DX6rZLP_.js";import"./merge-PkoklwUB.js";import"./_initCloneObject-Bh5HWbpD.js";import"./tinycolor-Begke6kS.js";import"./Fade-CbrDphCM.js";import"./inputBaseClasses-BMTzFsPJ.js";import"./calculateFriendlyFileSize-B4sPoU2L.js";import"./CheckCircleTwoTone-Ty_us4is.js";import"./InfoTwoTone-rbOzY5QT.js";import"./useMutation-DaNzmEzQ.js";import"./dayjs.min-CbGnbLpw.js";import"./chunk-AYJ5UCUI-DCSckdQY.js";import"./cloneDeep-CvkUHlHg.js";import"./Skeleton-CvrJKXGx.js";import"./HelpPopover-DzvHF1rH.js";import"./MarkdownPopover-Ds1zGK2C.js";import"./LightTooltip-OiRSrVQX.js";import"./MarkdownSynapse-CChBjwIr.js";import"./SkeletonButton-P6oJpSSt.js";import"./SkeletonInlineBlock-DftsGBov.js";import"./SkeletonTable-peC_qq9f.js";import"./SkeletonParagraph-OPHV_-1G.js";import"./HelpOutlineTwoTone-pYQMpugu.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
