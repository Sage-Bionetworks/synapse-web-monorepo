import{g as s}from"./entityHandlers-CoXFDJW7.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-Dhq64LD3.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-BIKS1RtD.js";import{g as a}from"./userProfileHandlers-CP0TTQlT.js";import{P as N}from"./ProjectDataAvailability-D0nVgeZn.js";import"./index-DC_7GfCR.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CPLGgEGE.js";import"./mockTeam-2Sl2r74K.js";import"./SynapseConstants-nC0cy9NR.js";import"./OrientationBanner-BaOJTw1c.js";import"./jsx-runtime-C5ysBaSF.js";import"./index-nsQxvz3s.js";import"./iframe-Janl4OHm.js";import"./index-Euv0kKX6.js";import"./spreadSx-CwcO6WA9.js";import"./react--bFTsUCT.js";import"./FullWidthAlert-DlFKq-DC.js";import"./Alert-RC7B8x0K.js";import"./createTheme-ByXOpdJz.js";import"./resolveComponentProps-CfpND56K.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Ceiq6s0j.js";import"./createSvgIcon-DeXJlgu_.js";import"./DefaultPropsProvider-AOp6TNyl.js";import"./Close-CT9yiP13.js";import"./IconButton-BtJv4fcx.js";import"./ButtonBase-D09UPZOY.js";import"./useTimeout-iGOOtj66.js";import"./TransitionGroupContext-BRGEgvEM.js";import"./useIsFocusVisible-B_yrjrHI.js";import"./useEventCallback-BxOaVHWE.js";import"./Paper-BkFXPQ0I.js";import"./Stack-Bu6KB5fc.js";import"./getThemeProps-BR7frNLW.js";import"./useTheme-dh9DXsym.js";import"./Box-Dh_kMIqf.js";import"./AlertTitle-CTWcSjN8.js";import"./Typography-2ZaHckIm.js";import"./useTheme-faklcodD.js";import"./Grow-DQCtPGN8.js";import"./index-BNgdfWIu.js";import"./utils-CCZi6kcq.js";import"./ClickAwayListener-DyUGUeMv.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-rXWE94cF.js";import"./index-BEcPdF-J.js";import"./useControlled-B8KPlW55.js";import"./useId-C4BxQuWA.js";import"./Popper-i9E87YUZ.js";import"./Button-2ZkIkkeV.js";import"./uniqueId-CgNFNXXh.js";import"./toString-CGhGPn4R.js";import"./isObjectLike-DIW4b2lw.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-CpHMAUht.js";import"./times-CAapsJ-A.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-nZ6sOvfN.js";import"./mockTableEntity-CVGuWs6v.js";import"./mockFileEntityACLVariants-DVicNJjL.js";import"./fakerUtils-Di7OTgLi.js";import"./mockFileEntity-BW1Qwomg.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-Blz6eRWv.js";import"./mockSchema-CDMNX8WH.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-B-QxEfwh.js";import"./utils-NjyKKwdB.js";import"./Link-DTRRVZ6z.js";import"./Collapse-haV8wGjw.js";import"./isNil-DWkoTF96.js";import"./_Uint8Array-CJ-px7Q4.js";import"./_baseIsEqual-CkMKoezu.js";import"./_getTag-BK3frtm6.js";import"./tinycolor-Begke6kS.js";import"./Fade-zN03jnnY.js";import"./Skeleton-CCW5pzar.js";import"./inputBaseClasses-DEtapqOK.js";import"./calculateFriendlyFileSize-C134mPnt.js";import"./CheckCircleTwoTone-DdehzE-y.js";import"./InfoTwoTone-DyKFxUVE.js";import"./useMutation-KCq28Paw.js";import"./isEqual-tsjY0vzA.js";import"./dayjs.min-CO0gnhwg.js";import"./chunk-AYJ5UCUI-DnzAy6h8.js";import"./cloneDeep-CKZCjTCX.js";import"./_initCloneObject-Bx7Kkndt.js";import"./merge-DPAljtzM.js";import"./util-I2jZNDwQ.js";import"./HelpPopover-DHB_j72B.js";import"./MarkdownPopover-COAzFP-b.js";import"./LightTooltip-BT5VeAu5.js";import"./MarkdownSynapse-YGfrF3Yf.js";import"./SkeletonButton-CLJ0wCC8.js";import"./SkeletonInlineBlock-B54Jvxn9.js";import"./SkeletonTable-DU9_F4fF.js";import"./SkeletonParagraph-BQEg-f88.js";import"./HelpOutlineTwoTone-CkufXJ2j.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
