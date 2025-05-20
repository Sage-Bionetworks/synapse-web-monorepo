import{g as s}from"./entityHandlers-CgnaO6gM.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-BPngUtdk.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-_taROHF2.js";import{g as a}from"./userProfileHandlers-DgLj_D7w.js";import{P as N}from"./ProjectDataAvailability-BgbvmUTX.js";import"./index-DAiF2tQd.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-B51KjBVf.js";import"./mockTeam-DVcerojg.js";import"./SynapseConstants-BY3JuDZs.js";import"./OrientationBanner-BYm0UpyJ.js";import"./jsx-runtime-BUTz-_1d.js";import"./index-BqTi-gbl.js";import"./iframe-wZhmiXCk.js";import"./index-CaguALO7.js";import"./spreadSx-CwcO6WA9.js";import"./react-C4PVEyLu.js";import"./FullWidthAlert-DAqcg72v.js";import"./Alert-CYG0eisg.js";import"./createTheme-soJfsoye.js";import"./resolveComponentProps-CfcJcXFP.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-ByBK5LxV.js";import"./createSvgIcon-Cl2wkW3w.js";import"./DefaultPropsProvider-BOHgnvI3.js";import"./Close-CX3B_Dfj.js";import"./IconButton-CakZjNno.js";import"./ButtonBase-CKX0S0z7.js";import"./useTimeout-CnqrO3bW.js";import"./TransitionGroupContext-BJpxVonh.js";import"./useIsFocusVisible-CaJhUmpq.js";import"./useEventCallback-BfU_6Zjf.js";import"./Paper-C5QIbe3w.js";import"./Stack-DjPKGgcW.js";import"./getThemeProps-B2E-r3vi.js";import"./useTheme-CFktQkaS.js";import"./Box-CfIT6twS.js";import"./AlertTitle-9SyC8FhY.js";import"./Typography-CxdHD8cJ.js";import"./useTheme-BBJ1ppa1.js";import"./Grow-CMwxiNI1.js";import"./index-EIZBVaa_.js";import"./utils-BEz3L9Oz.js";import"./ClickAwayListener-F5HYeZZ-.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DqRz8FoT.js";import"./index-BvDuf_JS.js";import"./useControlled-UDQD-7tg.js";import"./useId-BxSkkWRt.js";import"./Popper-B7nviUGz.js";import"./Button-CtX8_Saj.js";import"./uniqueId-5D_DZpGh.js";import"./toString-DZsMg4uL.js";import"./isObjectLike-Dlji57C8.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-CiYK-QWp.js";import"./times-Ctp9zjt1.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DgtEZE10.js";import"./mockTableEntity-BoWu67x6.js";import"./mockFileEntityACLVariants-CvDU9-3p.js";import"./fakerUtils-D0DozACb.js";import"./mockFileEntity-DjDNZz4U.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-DBVk56_M.js";import"./mockSchema-B_IqmU5S.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BGrXjv6K.js";import"./utils-CWAFC6_Q.js";import"./Link-DQqq1f1o.js";import"./Collapse-dyoyaW4g.js";import"./isNil-CgSz4o_M.js";import"./_Uint8Array-BwHQqEhE.js";import"./_baseIsEqual-CRDDryoJ.js";import"./_getTag-BCC_5J7n.js";import"./tinycolor-Begke6kS.js";import"./Fade-C93QLRyh.js";import"./Skeleton-CDIZWh-g.js";import"./inputBaseClasses-1Xhc3FA6.js";import"./calculateFriendlyFileSize-BmfNa6-Y.js";import"./CheckCircleTwoTone-ChTCFVAD.js";import"./InfoTwoTone-CeZrC0ph.js";import"./mutation-Chly-9yq.js";import"./dayjs.min-BEEQVVA0.js";import"./chunk-AYJ5UCUI-C-jqZwGp.js";import"./cloneDeep-Bwr1RsLr.js";import"./_initCloneObject-CCl-eqZ2.js";import"./isEqual-B5BjI5-L.js";import"./merge-DHlcnBRc.js";import"./util-DWrSfA2A.js";import"./HelpPopover-8a0w7aEk.js";import"./MarkdownPopover-Kq2OSCRZ.js";import"./LightTooltip-CFuxMehx.js";import"./MarkdownSynapse-DR3kwQqY.js";import"./SkeletonButton-DJ6IKgLw.js";import"./SkeletonInlineBlock-BCkEUTU4.js";import"./SkeletonTable-Szi6PSPJ.js";import"./SkeletonParagraph-DV6BPiR4.js";import"./HelpOutlineTwoTone-CIM5vvP_.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
