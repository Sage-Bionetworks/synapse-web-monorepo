import{g as i}from"./entityHandlers-C_BsmYfA.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BxcP6yly.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-Bc1Iij4t.js";import{g as m}from"./userProfileHandlers-IEDgaX90.js";import{P as L}from"./ProjectDataAvailability-D3A7Wx7v.js";import"./index-B2C8RNsJ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-9HqE2CKn.js";import"./mockTeam-Cxps73U-.js";import"./SynapseConstants-CxL0y1Ph.js";import"./OrientationBanner-B2D9V7kc.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CN27a-T8.js";import"./index-C5xsNgZG.js";import"./iframe-DjJstJjx.js";import"./spreadSx-CwcO6WA9.js";import"./react-C02iEKn1.js";import"./FullWidthAlert-B1NkCeua.js";import"./Alert-CNdyFczj.js";import"./createTheme-x4ryc2Ug.js";import"./DefaultPropsProvider-CwkbiRMZ.js";import"./useSlot-B8IHFzfX.js";import"./useForkRef-DWIqmgSu.js";import"./createSimplePaletteValueFilter-CL52-X8Y.js";import"./createSvgIcon-BrnNN5qG.js";import"./Close-DqDyvys5.js";import"./IconButton-B4vCrkNM.js";import"./useTimeout-D-uIEIeC.js";import"./ButtonBase-DSSoqZCh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BvSla5A0.js";import"./Paper-CRrJPGQt.js";import"./useTheme-lhY-n5X2.js";import"./useTheme-D3c8EOn8.js";import"./Stack-C2WogMgh.js";import"./useThemeProps-DBr2DVzl.js";import"./getThemeProps-BzelbPlK.js";import"./extendSxProp-Cxj75GXg.js";import"./Box-DfWINr92.js";import"./AlertTitle-BdC4ZB4j.js";import"./Typography-Bj14LD1K.js";import"./index-Dcy6S4kN.js";import"./ClickAwayListener-DAgIiq7F.js";import"./getReactElementRef-C7DXzbxC.js";import"./index-7vxEK90g.js";import"./index-CwtGRN4N.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BJc1AeJd.js";import"./Tooltip-y1vasDyH.js";import"./index-k1TfjJ7z.js";import"./useControlled-DAzrAxdX.js";import"./Popper-DMgncvK7.js";import"./Button-D0nWNt-2.js";import"./uniqueId-BY0eJLSL.js";import"./toString-4l1vmfQU.js";import"./isArray-DZzh4s_m.js";import"./isSymbol-uuR4lmiZ.js";import"./times-CmKNeOwy.js";import"./_Uint8Array-C_rOqdQT.js";import"./identity-DKeuBCMA.js";import"./toInteger-DHDQRcmg.js";import"./mockTableEntity-DfLJW7Zl.js";import"./mockFileEntityACLVariants-BWgIbgDU.js";import"./fakerUtils-GnuPbB8x.js";import"./mockFileEntity-C1Sy3dKy.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CvI4aCeM.js";import"./mockSchema-cEKZv79Z.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-Do_i6ApH.js";import"./QueryClientProvider-DUPNZ32L.js";import"./Link-w9o19gyK.js";import"./Collapse-De5mdlYK.js";import"./_baseUniq-Bd92tBU-.js";import"./_getTag-BB_bRlg1.js";import"./isEqual-AuJseeVw.js";import"./noop-DX6rZLP_.js";import"./merge-BqztFXmQ.js";import"./_initCloneObject-CklytaJV.js";import"./tinycolor-Begke6kS.js";import"./Fade-8jyKvWbc.js";import"./inputBaseClasses-BIs4bNY7.js";import"./calculateFriendlyFileSize-BYGBdEDj.js";import"./CheckCircleTwoTone-DGTSwBS2.js";import"./InfoTwoTone-DT8fPbHv.js";import"./useMutation-YpbZurJl.js";import"./dayjs.min-637-zvhS.js";import"./chunk-AYJ5UCUI-ZRV38xHs.js";import"./cloneDeep-nnktIvKW.js";import"./Skeleton-viu--MBo.js";import"./HelpPopover-DclMScbu.js";import"./MarkdownPopover-BJKdkm3G.js";import"./LightTooltip-7BCcD7eB.js";import"./MarkdownSynapse-2fzaZ2E8.js";import"./SkeletonButton-D0A1Sui2.js";import"./SkeletonInlineBlock-KDsfqRAz.js";import"./SkeletonTable-C1Iv3g9O.js";import"./SkeletonParagraph-B5XR2TR6.js";import"./HelpOutlineTwoTone-Bhz2esCG.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
