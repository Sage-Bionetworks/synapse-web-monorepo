import{g as s}from"./entityHandlers-C67YyxIn.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-D8uG9HU0.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-D83JbCyo.js";import{g as a}from"./userProfileHandlers-DjVbJlPl.js";import{P as N}from"./ProjectDataAvailability-bXBerFww.js";import"./index-BqigE-zQ.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-BQpL3_ez.js";import"./mockTeam-CIQwm3Wy.js";import"./SynapseConstants-B1FWRhdk.js";import"./OrientationBanner-w1VcnD_5.js";import"./jsx-runtime-DzZnOzqg.js";import"./index-C60fwWGm.js";import"./iframe-BCxQYagR.js";import"./index-BCKAJkgQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-BhSIdDPr.js";import"./FullWidthAlert-cAgO7bVX.js";import"./Alert-CbCSI8ns.js";import"./createTheme-CYWnjTil.js";import"./resolveComponentProps-B2e4_KER.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C3QGtmSj.js";import"./createSvgIcon-m9fHyGyS.js";import"./DefaultPropsProvider-BuN52GuK.js";import"./Close-CzUlLz04.js";import"./IconButton-BNmjBrUK.js";import"./ButtonBase-CdwHWq9j.js";import"./useTimeout-BPh3bJVB.js";import"./TransitionGroupContext-B9UPuYLo.js";import"./useIsFocusVisible-Bukda0BQ.js";import"./useEventCallback-BHMz769w.js";import"./Paper-CA8X2nmN.js";import"./Stack-BisZ62cv.js";import"./getThemeProps-BYxHHPXx.js";import"./useTheme-D6IuG_uC.js";import"./Box-FDIqTSOb.js";import"./AlertTitle-B4fbjN8A.js";import"./Typography-BmZ7G-Jn.js";import"./useTheme-CypcUUjZ.js";import"./Grow-DhFF0lAh.js";import"./index-CSh4ftr3.js";import"./utils-CRAVGkRr.js";import"./ClickAwayListener-BAN580I8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-xln8x51v.js";import"./index-Cz5g-qWT.js";import"./useControlled-BMCukgAB.js";import"./useId-DjK6D95n.js";import"./Popper-DTiq_qV1.js";import"./Button-DpKUeDej.js";import"./uniqueId-ZztKZTyN.js";import"./toString-CXtXUg6z.js";import"./isObjectLike-Dxq-98_C.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BQx_Ubgc.js";import"./times-DpsyR5Du.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-mOPhbX-G.js";import"./mockTableEntity-BcEdNUSF.js";import"./mockFileEntityACLVariants-DymlO0rS.js";import"./fakerUtils-C3SExdhN.js";import"./mockFileEntity-Bb0Dh_WI.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-2ACmEVgC.js";import"./mockSchema-CdTGIP3Q.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DlRymLBd.js";import"./utils-C1A9897Y.js";import"./Link-Cbuy5Khz.js";import"./Collapse-sufiHMck.js";import"./isNil-5_7q3K66.js";import"./_Uint8Array-BVEqVThY.js";import"./_baseIsEqual-BlXHlzVN.js";import"./_getTag-BiZXTrrh.js";import"./tinycolor-Begke6kS.js";import"./Fade-CqoyTvjP.js";import"./Skeleton-FYvl9i-x.js";import"./inputBaseClasses-Qjg2uSnc.js";import"./calculateFriendlyFileSize-CpEXOQcO.js";import"./CheckCircleTwoTone-Bmp6VC1Z.js";import"./InfoTwoTone-DsLs3GaH.js";import"./mutation-DUOv2tBk.js";import"./dayjs.min-CA1ARrMC.js";import"./chunk-AYJ5UCUI-CCXOOs5x.js";import"./cloneDeep-CbpOHm8w.js";import"./_initCloneObject-C8Pds_s0.js";import"./isEqual-SADtRp1R.js";import"./merge-QkVvsKfT.js";import"./util-CPu5_fr3.js";import"./HelpPopover-CEVcn0-h.js";import"./MarkdownPopover-Cce85mt2.js";import"./LightTooltip-DVfdqfYy.js";import"./MarkdownSynapse-XJ9iU0cq.js";import"./SkeletonButton-BoQHW4ur.js";import"./SkeletonInlineBlock-ifZrLBwB.js";import"./SkeletonTable-Cjt6cUEE.js";import"./SkeletonParagraph-9petVL4x.js";import"./HelpOutlineTwoTone-DPW3q9aG.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
