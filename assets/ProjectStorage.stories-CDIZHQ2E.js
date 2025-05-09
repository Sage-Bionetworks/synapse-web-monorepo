import{g as s}from"./entityHandlers-DRZ7stns.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-UkzU0789.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-DOOIuumC.js";import{g as a}from"./userProfileHandlers-DSZ10Wtp.js";import{P as N}from"./ProjectDataAvailability-CvVoCpIS.js";import"./index-DDNgyBGG.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DWgRdJYg.js";import"./mockTeam-COdpMsRJ.js";import"./SynapseConstants-DiureF8E.js";import"./OrientationBanner-CIZJytWy.js";import"./jsx-runtime-DhlGJ7sc.js";import"./index-CY44XRQW.js";import"./iframe-DNkluCoN.js";import"./index-Bs5qYh7P.js";import"./spreadSx-CwcO6WA9.js";import"./react-CTzCTnsG.js";import"./FullWidthAlert-BX9C0HBZ.js";import"./Alert-V7dKC7Nt.js";import"./createTheme-m5mgIdCN.js";import"./resolveComponentProps-Vs1q-1Id.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BdXv4TBM.js";import"./createSvgIcon-BA5lmNTr.js";import"./DefaultPropsProvider-KGD77BW7.js";import"./Close-BVh9jbMJ.js";import"./IconButton-C8ZXady0.js";import"./ButtonBase-B4CcYDJP.js";import"./useTimeout-CpA1WuhJ.js";import"./TransitionGroupContext-BrZDDC3s.js";import"./useIsFocusVisible-DqkGnRDC.js";import"./useEventCallback-CmGL17y5.js";import"./Paper-BRFBKtNy.js";import"./Stack-DJs_SaLV.js";import"./getThemeProps-BczNjUdE.js";import"./useTheme-D1aHyYy6.js";import"./Box-EVNXnt5A.js";import"./AlertTitle-BJe3pS1L.js";import"./Typography-Qj9qnpdp.js";import"./useTheme-W23PmfEg.js";import"./Grow-CG2jdriR.js";import"./index-Co8xAmzj.js";import"./utils-1wkIb8xE.js";import"./ClickAwayListener-Bup8plU3.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-W9BRZUCf.js";import"./index-BYHM7TqL.js";import"./useControlled-BsWScnXl.js";import"./useId-Ba0U3ySd.js";import"./Popper-C1811B1Z.js";import"./Button-CO54amw_.js";import"./uniqueId-CMLqSG1e.js";import"./toString-BBzsCTE6.js";import"./isObjectLike-BLBiTK-1.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-D7PjBgt8.js";import"./times-G3g49VTC.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-fqtAfUrx.js";import"./mockTableEntity-CGPIaOuV.js";import"./mockFileEntityACLVariants-0k6h0X-b.js";import"./fakerUtils-D1ArDqLk.js";import"./mockFileEntity-u1iMeACE.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-DdltKqdS.js";import"./mockSchema-DJgkCx99.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DhL_nMLP.js";import"./utils-Bj8hR2-k.js";import"./Link-Czf_4hER.js";import"./Collapse-on-WM-XP.js";import"./isNil-SuaWjo4O.js";import"./_Uint8Array-CRsdo2D-.js";import"./_baseIsEqual-mt5wqwRw.js";import"./_getTag-hjWRNB5_.js";import"./tinycolor-Begke6kS.js";import"./Fade-DNHPHyMS.js";import"./Skeleton-Dbx4L9CQ.js";import"./inputBaseClasses-DezGaEjz.js";import"./calculateFriendlyFileSize-53AEO24l.js";import"./CheckCircleTwoTone-BaCBSo7_.js";import"./InfoTwoTone-BNe2WjE8.js";import"./mutation-BnSfJ6J7.js";import"./dayjs.min-D7dgKJuw.js";import"./chunk-AYJ5UCUI-CVcY5UZQ.js";import"./cloneDeep-DVCo1U1i.js";import"./_initCloneObject-EeO3VmfB.js";import"./isEqual-DTloIcwI.js";import"./merge-fkSZy5Yz.js";import"./util-Dl4J1kvw.js";import"./HelpPopover-XkEIPFnk.js";import"./MarkdownPopover-CBNF51Xp.js";import"./LightTooltip-rKGp1Qxv.js";import"./MarkdownSynapse-BWI94Hem.js";import"./SkeletonButton-C0B4iTqr.js";import"./SkeletonInlineBlock-BnO7Syfa.js";import"./SkeletonTable-DhSeXdSo.js";import"./SkeletonParagraph-oLikAP9E.js";import"./HelpOutlineTwoTone-FkTpAtSG.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
