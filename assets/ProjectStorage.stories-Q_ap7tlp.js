import{g as s}from"./entityHandlers-COFhIVdI.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-D5p9mEeJ.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-C-oQXe45.js";import{g as a}from"./userProfileHandlers-BweCQG4p.js";import{P as N}from"./ProjectDataAvailability-D7WABnGK.js";import"./index-CDJYojuC.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-i28Z7vHk.js";import"./mockTeam-Ckn1YPsR.js";import"./SynapseConstants-ChwKCKUe.js";import"./OrientationBanner-oeQY9W6x.js";import"./jsx-runtime-DAw_QoWs.js";import"./index-B1D9r8pK.js";import"./iframe-BcOC2yHy.js";import"./index-CSHqL8lk.js";import"./spreadSx-CwcO6WA9.js";import"./react-CaHgI2xI.js";import"./FullWidthAlert-CqKKYlX-.js";import"./Alert-Bd4UixhE.js";import"./createTheme-C3x6mOsc.js";import"./resolveComponentProps-Bml2h3Vr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BvktJw4g.js";import"./createSvgIcon-DFCLsq46.js";import"./DefaultPropsProvider-BRQN9N2m.js";import"./Close-DQBgDOSz.js";import"./IconButton-CQEpaTId.js";import"./ButtonBase-CxNTjvXH.js";import"./useTimeout-DOooaOO7.js";import"./TransitionGroupContext-Bl3cUyHW.js";import"./useIsFocusVisible-B_nwMbU_.js";import"./useEventCallback-C_4PLi3H.js";import"./Paper-CLLam5eU.js";import"./Stack-MFmmhnKS.js";import"./getThemeProps-DX1gnVmC.js";import"./useTheme-ChDKy_2u.js";import"./Box-D-8YJusE.js";import"./AlertTitle-C83HUI2e.js";import"./Typography-VOjsn5Pz.js";import"./useTheme-bvUc0IYs.js";import"./Grow-BPCk84L6.js";import"./index-C88ldYJB.js";import"./utils-Bzb8CGjQ.js";import"./ClickAwayListener-BMStZymP.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Dp2Znnys.js";import"./index-CHIJk7Ky.js";import"./useControlled-BzTXu6R5.js";import"./useId-BgwkmMHa.js";import"./Popper-Cbo0s97p.js";import"./Button-LzYkJm9V.js";import"./uniqueId-BsecQqrz.js";import"./toString-CWaKz3gu.js";import"./isObjectLike-l2stp93q.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-EEZWc-Yf.js";import"./times-BFOjRvrC.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CceQtdBS.js";import"./mockTableEntity-z97RuG1R.js";import"./mockFileEntityACLVariants-DRRuRkrD.js";import"./fakerUtils-CIilamLt.js";import"./mockFileEntity-D2WnWPS6.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-Cm0ET6eO.js";import"./mockSchema-l6iOH9nU.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CWk1d_fS.js";import"./utils-D8g86RT1.js";import"./Link-C5RxPrJ3.js";import"./Collapse-DxRVa4rj.js";import"./isNil-trK1jsU5.js";import"./_Uint8Array-DpxWhSn9.js";import"./_baseIsEqual-D9NgJpr4.js";import"./_getTag-BmfB6MEh.js";import"./tinycolor-Begke6kS.js";import"./Fade-C5PK1kHy.js";import"./Skeleton-BAZzAkN6.js";import"./inputBaseClasses-DXZf_3PC.js";import"./calculateFriendlyFileSize-DmhL_8oc.js";import"./CheckCircleTwoTone-CNnVInjh.js";import"./InfoTwoTone-BmfNDtit.js";import"./mutation-CINg4fey.js";import"./dayjs.min-DQJgKjZd.js";import"./chunk-AYJ5UCUI-B9_CWiKA.js";import"./cloneDeep-cFlRRiur.js";import"./_initCloneObject-X1pr-NFE.js";import"./isEqual-BZl8ciHp.js";import"./merge-TeTmR9Lg.js";import"./util-4oadqp_4.js";import"./HelpPopover-qKEVljBK.js";import"./MarkdownPopover-CgQ5oaRP.js";import"./LightTooltip-Dz7vP1-V.js";import"./MarkdownSynapse-DuDhK4qX.js";import"./SkeletonButton-C1ocO452.js";import"./SkeletonInlineBlock-i7c7PImv.js";import"./SkeletonTable-B9yUjImF.js";import"./SkeletonParagraph-rclSDo9e.js";import"./HelpOutlineTwoTone-CxO7ysgK.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
