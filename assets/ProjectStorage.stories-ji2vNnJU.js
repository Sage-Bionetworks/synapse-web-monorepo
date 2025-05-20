import{g as s}from"./entityHandlers-Be9SpV-v.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-Y12FH1bv.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-B6_TrWKd.js";import{g as a}from"./userProfileHandlers-CngZZkvW.js";import{P as N}from"./ProjectDataAvailability-q3TLfJ7M.js";import"./index-D3R6pPlc.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-Dk1hZtc5.js";import"./mockTeam-DSFgsq7c.js";import"./SynapseConstants-B3NxpShm.js";import"./OrientationBanner-BZu9QjtH.js";import"./jsx-runtime-BruYoQko.js";import"./index-B-uy-sdx.js";import"./iframe-EbtsSfNi.js";import"./index-DomK8mv2.js";import"./spreadSx-CwcO6WA9.js";import"./react-DQ_ckMew.js";import"./FullWidthAlert-Bj0hNDHq.js";import"./Alert-DBLm8Pok.js";import"./createTheme-srFiYvEO.js";import"./resolveComponentProps-B82OG9Zp.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ChVQG-lw.js";import"./createSvgIcon-2G3uB26y.js";import"./DefaultPropsProvider-DFjoNSbJ.js";import"./Close-Dy69P2Lg.js";import"./IconButton-Dwzx9qi2.js";import"./ButtonBase-DG0zMMeh.js";import"./useTimeout-Cv-QQYzw.js";import"./TransitionGroupContext-n7ftLhnx.js";import"./useIsFocusVisible-DiXQCVbx.js";import"./useEventCallback-C16K_eB4.js";import"./Paper-D4Tga6OS.js";import"./Stack-CZCOHPbK.js";import"./getThemeProps-DeCu2QiA.js";import"./useTheme-Cbn8UOjv.js";import"./Box-Cqz8jNcW.js";import"./AlertTitle-Dludu-yD.js";import"./Typography-oxIQOfGg.js";import"./useTheme-DHXa63_v.js";import"./Grow-CRBk-oNE.js";import"./index-DpIgPCaI.js";import"./utils-BP1xdL2F.js";import"./ClickAwayListener-5g4aG161.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DDQG6vte.js";import"./index-3w0ggcn7.js";import"./useControlled-Baesg9Fm.js";import"./useId-C6yrAKwc.js";import"./Popper-BVfSTFT0.js";import"./Button-BnBdmOxs.js";import"./uniqueId-BbAHD0e5.js";import"./toString-CBUiyRuQ.js";import"./isObjectLike-CB51Nx8C.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-HDLLyEDe.js";import"./times-ClaKe9pp.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-BDEI1AM-.js";import"./mockTableEntity-BbrIQtad.js";import"./mockFileEntityACLVariants-2XGQTQ3V.js";import"./fakerUtils-bfCNSLw6.js";import"./mockFileEntity-nxPbrBJ9.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-oZ8z-X9_.js";import"./mockSchema-DLy7g6e4.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CZIsftBW.js";import"./utils-D7XdtvjZ.js";import"./Link-CSVa4weM.js";import"./Collapse-BLl7ItWH.js";import"./isNil-1RPAbAz-.js";import"./_Uint8Array-CnGxCulp.js";import"./_baseIsEqual-CDbb4T68.js";import"./_getTag-CxzBhuc_.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4jjhn0e.js";import"./Skeleton-5aKuyqmQ.js";import"./inputBaseClasses-DSstwJAW.js";import"./calculateFriendlyFileSize-Bglr51Pk.js";import"./CheckCircleTwoTone-BXw1IUwh.js";import"./InfoTwoTone-CjzZE5sW.js";import"./mutation-Cl20WE66.js";import"./dayjs.min-Djvj_XYE.js";import"./chunk-AYJ5UCUI-1wUcRWZS.js";import"./cloneDeep-BWJvylmg.js";import"./_initCloneObject-CmQS0zFf.js";import"./isEqual-BQl57RAj.js";import"./merge-BPZ2_WTR.js";import"./util-DUs4LiAF.js";import"./HelpPopover-C0X4WLep.js";import"./MarkdownPopover-_xTcMfng.js";import"./LightTooltip-CUmNbwAf.js";import"./MarkdownSynapse-DvuTd3Rp.js";import"./SkeletonButton-Dw6WOzZd.js";import"./SkeletonInlineBlock-D6EloWLS.js";import"./SkeletonTable-BnBijUlJ.js";import"./SkeletonParagraph-kYwbggkc.js";import"./HelpOutlineTwoTone-jxOGgYPj.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,R;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Lt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,Lt as __namedExportsOrder,St as default};
