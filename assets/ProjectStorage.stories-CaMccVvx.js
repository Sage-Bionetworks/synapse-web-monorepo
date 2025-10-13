import{g as i}from"./entityHandlers-BVzWnQIP.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-w6-CIEB7.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-Dr4Q1ArP.js";import{g as m}from"./userProfileHandlers-mhQaho8i.js";import{P as L}from"./ProjectDataAvailability-Bb8DXisw.js";import"./index-CiWNuy5O.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DFgjpbzt.js";import"./mockTeam-CG8UbINk.js";import"./SynapseConstants-BvlkkbYT.js";import"./OrientationBanner-DQJGhgFu.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CWABsZZt.js";import"./index-50V2EGz2.js";import"./iframe-CnNyPxR5.js";import"./spreadSx-CwcO6WA9.js";import"./react-otK05ZBX.js";import"./FullWidthAlert-BQO2ZM0K.js";import"./Alert-B_-c_7mx.js";import"./createTheme-DSq-Mol7.js";import"./DefaultPropsProvider-C9wjepK5.js";import"./useSlot-DsxpMVrm.js";import"./useForkRef-BAPdpbNW.js";import"./createSimplePaletteValueFilter-CldMCLtR.js";import"./createSvgIcon-DGQsVitk.js";import"./Close-CVOLFbw1.js";import"./IconButton-BVSRfYlJ.js";import"./useTimeout-BhJq4kG5.js";import"./ButtonBase-BX83Z0VB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BGTymdZp.js";import"./Paper-BCS61ZLh.js";import"./useTheme-CjTtqgxL.js";import"./useTheme-CZTnF3AF.js";import"./Stack-BQvEapyr.js";import"./useThemeProps-CmnHZ3En.js";import"./getThemeProps-DlbFbBX7.js";import"./extendSxProp-Et1BOirn.js";import"./Box-BDTYEpGC.js";import"./AlertTitle-D8cxvMZv.js";import"./Typography-fBjhrNMo.js";import"./index-CLkWSig2.js";import"./ClickAwayListener-DDweZR_J.js";import"./getReactElementRef-DBAVQkW_.js";import"./index-D3DJx0X2.js";import"./index-CC6HTFNl.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BtgJxlwW.js";import"./Tooltip-C_M9hetJ.js";import"./index-Etco1RFO.js";import"./useControlled-DtifG75u.js";import"./Popper-C9tLJj2J.js";import"./Button-Cf0eu55O.js";import"./uniqueId-DV-L56RM.js";import"./toString-DgvCpfGu.js";import"./isArray-KvXH-Jx4.js";import"./isSymbol-prInbR1u.js";import"./times-5PU58L5-.js";import"./_Uint8Array-CzRmNIxi.js";import"./identity-DKeuBCMA.js";import"./toInteger-B2v-gFfh.js";import"./mockTableEntity-BusjLdih.js";import"./mockFileEntityACLVariants-d2TIoR7d.js";import"./fakerUtils-DRWKq2H8.js";import"./mockFileEntity-CuPCoKaN.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CAydS-j5.js";import"./mockSchema-D1dXYCCl.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CH0n5MNt.js";import"./QueryClientProvider-Py7SAasE.js";import"./Link-DFtCODF5.js";import"./Collapse-BeiaCXPV.js";import"./_baseUniq-Cu_OF4Xp.js";import"./_getTag-B8WXN5Nr.js";import"./isEqual-CzDcfwhI.js";import"./noop-DX6rZLP_.js";import"./merge-jd3NSUkd.js";import"./_initCloneObject-XmSwrlPI.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByV7WbF5.js";import"./inputBaseClasses-CtqzjeT7.js";import"./calculateFriendlyFileSize-uiD7W4tT.js";import"./CheckCircleTwoTone-DAKkXTN_.js";import"./InfoTwoTone-C_fE8DJq.js";import"./useMutation-0FRbsOeu.js";import"./dayjs.min-C2eBLBEm.js";import"./chunk-AYJ5UCUI-DBs_SlKK.js";import"./cloneDeep-7VEFdNK3.js";import"./Skeleton-Cb30zSej.js";import"./HelpPopover-CIxIsRgw.js";import"./MarkdownPopover-5H746bwN.js";import"./LightTooltip-CWUv6PR9.js";import"./MarkdownSynapse-B5gAKz_O.js";import"./SkeletonButton-DYD3Ov2g.js";import"./SkeletonInlineBlock-m2Hdis6_.js";import"./SkeletonTable-Btk5G1lW.js";import"./SkeletonParagraph-DRD-GFd_.js";import"./HelpOutlineTwoTone-DiwaNnD4.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
