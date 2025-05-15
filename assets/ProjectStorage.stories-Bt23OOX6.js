import{g as s}from"./entityHandlers-DNEu0xTE.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-S3rZyFqo.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-DOXqajDR.js";import{g as a}from"./userProfileHandlers-74HF_D41.js";import{P as N}from"./ProjectDataAvailability-DO0aBl7S.js";import"./index-CUnIrWwg.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-Ci9MrL7j.js";import"./mockTeam-7zeTiFbM.js";import"./SynapseConstants-DOl4aYU7.js";import"./OrientationBanner-Cgb7NpTp.js";import"./jsx-runtime-BKf5RQqp.js";import"./index-B9M1VMdY.js";import"./iframe-DrxrBbCN.js";import"./index-CvaCOTZN.js";import"./spreadSx-CwcO6WA9.js";import"./react-DH013oxs.js";import"./FullWidthAlert-Dd_na1Es.js";import"./Alert-Cgxhkh7G.js";import"./createTheme-DvTVIqjb.js";import"./resolveComponentProps-DPQntKSC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DIg_dHQL.js";import"./createSvgIcon-hbT_i5o6.js";import"./DefaultPropsProvider-n162cE-R.js";import"./Close-BfHkgXih.js";import"./IconButton-CUjwcRMT.js";import"./ButtonBase-CBwCYDGT.js";import"./useTimeout-zL07Ezm-.js";import"./TransitionGroupContext-DyKzf55a.js";import"./useIsFocusVisible-CRgE5DAe.js";import"./useEventCallback-Ct97vZo3.js";import"./Paper-DiRfE40y.js";import"./Stack-D2Q57en8.js";import"./getThemeProps-CnIOYt9Y.js";import"./useTheme-Bekjdflv.js";import"./Box-D7zKVt5d.js";import"./AlertTitle-1sffTsZH.js";import"./Typography-DzBHpQw1.js";import"./useTheme-CEZhMqZD.js";import"./Grow-BaIE4F4U.js";import"./index-5WQ-QQb9.js";import"./utils-Bc1CwYEB.js";import"./ClickAwayListener-CxOU0Mam.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BEF1_Vht.js";import"./index-P0g_OErs.js";import"./useControlled-Cy6R5uHn.js";import"./useId-DqRnOE6C.js";import"./Popper-BbC7HGmV.js";import"./Button-Cb0Y6AbC.js";import"./uniqueId-Di_31gHS.js";import"./toString-DzAm8fGd.js";import"./isObjectLike-loWZaajr.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-C3DlElTY.js";import"./times-Bc8Rg50M.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-jwb4_ePs.js";import"./mockTableEntity-B57Pwohq.js";import"./mockFileEntityACLVariants-Dsm3gWrQ.js";import"./fakerUtils-DnCT_wR_.js";import"./mockFileEntity-BMJScpil.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-CTJ_XSce.js";import"./mockSchema-DSKh8nGw.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Cxycb3jH.js";import"./utils-DtsR_yTk.js";import"./Link-Cu43YTgh.js";import"./Collapse-DVsMgavj.js";import"./isNil-ByvPwQOL.js";import"./_Uint8Array-C3OS79Gb.js";import"./_baseIsEqual-gfmG73DD.js";import"./_getTag-Bc2H9Xcc.js";import"./tinycolor-Begke6kS.js";import"./Fade-BJV6ivWB.js";import"./Skeleton-DpQMO-g4.js";import"./inputBaseClasses-D3AwDbQD.js";import"./calculateFriendlyFileSize-C7irlqqb.js";import"./CheckCircleTwoTone-BX_oHHcp.js";import"./InfoTwoTone-DlYvTuQN.js";import"./mutation-CTQh6bQy.js";import"./dayjs.min-CodsgMmV.js";import"./chunk-AYJ5UCUI-BC-6-RBu.js";import"./cloneDeep-DLtL0oYk.js";import"./_initCloneObject-BGcQbDnl.js";import"./isEqual-p7X2E0s9.js";import"./merge-BNCYZUK1.js";import"./util-Dkcn2-bQ.js";import"./HelpPopover-J2W2awQD.js";import"./MarkdownPopover-Bc7YwyN5.js";import"./LightTooltip-DCtTi8jL.js";import"./MarkdownSynapse-DuJwHiEQ.js";import"./SkeletonButton-Skkackae.js";import"./SkeletonInlineBlock-CqG192xZ.js";import"./SkeletonTable-C7kWa3wE.js";import"./SkeletonParagraph-NmU2KbK8.js";import"./HelpOutlineTwoTone-BEhnizFV.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
