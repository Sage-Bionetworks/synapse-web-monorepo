import{g as s}from"./entityHandlers-CAJ7Jo1O.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-CAS_QhlS.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-C-33pEH0.js";import{g as a}from"./userProfileHandlers-BwKkZ0x1.js";import{P as N}from"./ProjectDataAvailability-CFu876qo.js";import"./index-Dd5y23-_.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DqrHazyr.js";import"./mockTeam-tLzTWBiT.js";import"./SynapseConstants-oxozjXiE.js";import"./OrientationBanner-D5pw8BSu.js";import"./jsx-runtime-DMre8F17.js";import"./index-BAuVHV2z.js";import"./iframe-OI0nEnmn.js";import"./index-D6eIipcS.js";import"./spreadSx-CwcO6WA9.js";import"./react-B8rHlrBa.js";import"./FullWidthAlert-yVU6QIpW.js";import"./Alert-Bmvy0Okm.js";import"./createTheme-BB1S4NEt.js";import"./resolveComponentProps-DF96h0Eq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-u21J4taN.js";import"./createSvgIcon-D0kdEjIj.js";import"./DefaultPropsProvider-Cq1pa9G2.js";import"./Close-CcZGAq3X.js";import"./IconButton-8W9a9RnF.js";import"./ButtonBase-BaQs7_Pa.js";import"./useTimeout-pAtqERQv.js";import"./TransitionGroupContext-BNPxgiLu.js";import"./useIsFocusVisible-DfUxaCJB.js";import"./useEventCallback-DAxHKips.js";import"./Paper-2bbvmWyl.js";import"./Stack-CTUsYAii.js";import"./getThemeProps-B1TL05kh.js";import"./useTheme-B1Sv5EJG.js";import"./Box-DIA65-hd.js";import"./AlertTitle-D9nMGlyg.js";import"./Typography-CTMq_pdk.js";import"./useTheme-B8P1yjh0.js";import"./Grow-CPqua1HP.js";import"./index-DSD_JLMH.js";import"./utils-DOe16nNH.js";import"./ClickAwayListener-1SXS2RHr.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DuZFgwly.js";import"./index-CR-BbFJG.js";import"./useControlled-BGfTKx8L.js";import"./useId-BaHTv3Ol.js";import"./Popper-BATOstVY.js";import"./Button-9_gAD86Z.js";import"./uniqueId-C6G0gjvU.js";import"./toString-BZECR69S.js";import"./isObjectLike-DS50Q_-r.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DOjDjtCt.js";import"./times-C3mWkCiT.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bdwl_-HA.js";import"./mockTableEntity-B8KRaYA_.js";import"./mockFileEntityACLVariants-VnCF1x9O.js";import"./fakerUtils-DS2MjNnH.js";import"./mockFileEntity-BTtjC48n.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-B_DpBLMH.js";import"./mockSchema-DpG5h_FT.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-B2-wbKIs.js";import"./utils-CILTy0he.js";import"./Link-C-2XG2Lr.js";import"./Collapse-DTOGVf0W.js";import"./isNil-BTdFIcRc.js";import"./_Uint8Array-d9oc9a-e.js";import"./_baseIsEqual-DAhZrM2m.js";import"./_getTag-TV9QcuB2.js";import"./tinycolor-Begke6kS.js";import"./Fade-1XXXk4ux.js";import"./Skeleton-DFEpqHx_.js";import"./inputBaseClasses-C7D8GWl7.js";import"./calculateFriendlyFileSize-Dz_VodOE.js";import"./CheckCircleTwoTone-D0Rd8YBH.js";import"./InfoTwoTone-D4EKW_HA.js";import"./useMutation-CENJvQo9.js";import"./isEqual-DpbblXQH.js";import"./dayjs.min-cdOwOoLt.js";import"./chunk-AYJ5UCUI-BkWiTWCP.js";import"./cloneDeep-nAHUzRQX.js";import"./_initCloneObject-BLowrZgy.js";import"./merge-Bij2bwXJ.js";import"./util-ArqddniM.js";import"./HelpPopover-C-p5v_uG.js";import"./MarkdownPopover-CRng9pby.js";import"./LightTooltip-BSliv-OZ.js";import"./MarkdownSynapse-BfODVAvp.js";import"./SkeletonButton-cJmG53Bo.js";import"./SkeletonInlineBlock-CrkrprES.js";import"./SkeletonTable-B7DHBoY7.js";import"./SkeletonParagraph-BfSY4gRW.js";import"./HelpOutlineTwoTone-BTM55T4P.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
