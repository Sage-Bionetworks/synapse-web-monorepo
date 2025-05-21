import{g as s}from"./entityHandlers-D4bnkzix.js";import{x as C,g as L,ba as d,B as k,M as r}from"./useFiles-Bmp6q2a5.js";import"./VerificationSubmission-B0kBNeMy.js";import"./StringUtils-CzgJJW-6.js";import{l as O}from"./index-D3ZXqs7N.js";import{g as a}from"./userProfileHandlers-BmeGBnSQ.js";import{P as N}from"./ProjectDataAvailability-UC-U-z30.js";import"./index-BGOyNvTE.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-BoKQQj6H.js";import"./mockTeam-BoeceiZX.js";import"./SynapseConstants-DJnXKVNq.js";import"./OrientationBanner-DLwSvgHC.js";import"./jsx-runtime-DmKnoNQ-.js";import"./index-BFCc_wv0.js";import"./iframe-DVK1wk6d.js";import"./index-7sMRgjqI.js";import"./spreadSx-CwcO6WA9.js";import"./react-B7JEe_9q.js";import"./FullWidthAlert-C2j0NeYe.js";import"./Alert-CKvIY_ZC.js";import"./createTheme-BXEwkt-l.js";import"./resolveComponentProps-DEEyNDFA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BjgbR4nl.js";import"./createSvgIcon-CexmQeMX.js";import"./DefaultPropsProvider-DUkpy3gp.js";import"./Close-BLLYpaxl.js";import"./IconButton-CtoYFknA.js";import"./ButtonBase-BvXHS7E8.js";import"./useTimeout-B89Jbts_.js";import"./TransitionGroupContext-U6akLiTY.js";import"./useIsFocusVisible-BNNkxGZE.js";import"./useEventCallback-BViUXQES.js";import"./Paper-Dn3hpbBt.js";import"./Stack-CilMpvcP.js";import"./getThemeProps-DEqWItKx.js";import"./useTheme-txGj-KA5.js";import"./Box-CnkquDgp.js";import"./AlertTitle-De-Y6WlG.js";import"./Typography-CoReq-7T.js";import"./useTheme-DbaDTwfd.js";import"./Grow-DRdE8lYO.js";import"./index-HtDB6D_8.js";import"./utils-CH6UHCvk.js";import"./ClickAwayListener-C935n3RT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BESuS2go.js";import"./index-zScYxpIZ.js";import"./useControlled-BCnvLdxA.js";import"./useId-B4FULkf-.js";import"./Popper-DjVyUDrD.js";import"./Button-DYb5I_h6.js";import"./uniqueId-BgIHj4wm.js";import"./toString-CCI0wryq.js";import"./isObjectLike-CzyhUoMh.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DHimvwb5.js";import"./times-DESQX_ub.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DgKbkhK0.js";import"./mockTableEntity-DCVQcU31.js";import"./mockFileEntityACLVariants-CyyHz26M.js";import"./fakerUtils-DWBxbZf6.js";import"./mockFileEntity-DGpO9v-L.js";import"./mock_file_handle-Ct1MSfYs.js";import"./mockEntity-B2tkdnHN.js";import"./mockSchema-Bs7yFQYA.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BBtTkatK.js";import"./utils-DGVs3mxC.js";import"./Link-iK3V06Y5.js";import"./Collapse-BHBLFnaj.js";import"./isNil-DF8LcSjB.js";import"./_Uint8Array-BGMUFk-X.js";import"./_baseIsEqual-HSUY0yvO.js";import"./_getTag-B7_rEu3Z.js";import"./tinycolor-Begke6kS.js";import"./Fade-9Bau5x4J.js";import"./Skeleton-DlWq6871.js";import"./inputBaseClasses-DWCx47eo.js";import"./calculateFriendlyFileSize-BHEbv2lr.js";import"./CheckCircleTwoTone-D4_hhNK2.js";import"./InfoTwoTone-E9_F69oy.js";import"./mutation-DUrdKa48.js";import"./dayjs.min-TSt401mi.js";import"./chunk-AYJ5UCUI-BAlWt6x4.js";import"./cloneDeep-BBUYS9nA.js";import"./_initCloneObject-CB_EWvAd.js";import"./isEqual-36wh2HjX.js";import"./merge-CAkvabO_.js";import"./util-CQYnOP2c.js";import"./HelpPopover-MZkTJiIu.js";import"./MarkdownPopover-BFObi_MN.js";import"./LightTooltip-DPh926hy.js";import"./MarkdownSynapse-CsjHmxuh.js";import"./SkeletonButton-DSz-c8Kr.js";import"./SkeletonInlineBlock-DUpeltxx.js";import"./SkeletonTable-DZ993BOC.js";import"./SkeletonParagraph-DL2I9A0y.js";import"./HelpOutlineTwoTone-BIp41xUe.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
