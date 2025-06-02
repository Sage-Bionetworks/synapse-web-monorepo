import{g as s}from"./entityHandlers-C9UtkBWy.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-D2J0lDEf.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-DehM9o59.js";import{g as a}from"./userProfileHandlers-DbLQOKeq.js";import{P as N}from"./ProjectDataAvailability-CU2BDo-1.js";import"./index-CQV-G63v.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-qI8Kqza8.js";import"./mockTeam-lSMsjvUS.js";import"./SynapseConstants-CaV0FCaG.js";import"./OrientationBanner-LE5NNPEZ.js";import"./jsx-runtime-DS5StVVG.js";import"./index-cX-36PVo.js";import"./iframe-9EJDT6Vt.js";import"./index-BJZZKCw6.js";import"./spreadSx-CwcO6WA9.js";import"./react-BsOov9i0.js";import"./FullWidthAlert-C4RioFof.js";import"./Alert-DxLNdAsW.js";import"./createTheme-Bf7RaJZp.js";import"./resolveComponentProps-BckopApa.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C8gc3lry.js";import"./createSvgIcon-C97cKv-E.js";import"./DefaultPropsProvider-Dj-ET5XP.js";import"./Close-ClleilIz.js";import"./IconButton-Dnrmx_JM.js";import"./ButtonBase-De4KvzrO.js";import"./useTimeout-CtHEIWtS.js";import"./TransitionGroupContext-D0NEqPRG.js";import"./useIsFocusVisible-8oN7zW9b.js";import"./useEventCallback-Bf6o-zFC.js";import"./Paper-BnU681ZV.js";import"./Stack-mOfhED7S.js";import"./getThemeProps-B2jfOwXN.js";import"./useTheme-BagD9k6_.js";import"./Box-CilYK6-7.js";import"./AlertTitle-BG01MePs.js";import"./Typography-5l8xUtlm.js";import"./useTheme-Byb0Hnvw.js";import"./Grow-2xpSizAP.js";import"./index-q3SnWJ3I.js";import"./utils-COVIZagF.js";import"./ClickAwayListener-C4HP-2Tv.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-ZIrjiZox.js";import"./index-JhzEDNxb.js";import"./useControlled-CeFwsNUA.js";import"./useId-2Kxm9uM_.js";import"./Popper-CfQZLj9d.js";import"./Button-Cp5tKDML.js";import"./uniqueId-DCX6bmKm.js";import"./toString-CMJ3T8l9.js";import"./isObjectLike-D3taRsKZ.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BdJ4UU4t.js";import"./times-CDCLamh_.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Dd4xfpSi.js";import"./mockTableEntity-D3QYmtMH.js";import"./mockFileEntityACLVariants-CiL3rSUW.js";import"./fakerUtils-BdX-SQJE.js";import"./mockFileEntity-B1zGz3Yh.js";import"./mock_file_handle-DwnN5i7-.js";import"./mockEntity-CwWf97qJ.js";import"./mockSchema-BkCjRXER.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-7tsM9kOw.js";import"./utils-DxymWvTy.js";import"./Link-CXcIbBMo.js";import"./Collapse-D2dc9D9e.js";import"./isNil-t2bB1iUd.js";import"./_Uint8Array-YYzzYD9-.js";import"./_baseIsEqual-DcWszeYx.js";import"./_getTag-DbOHal0V.js";import"./tinycolor-Begke6kS.js";import"./Fade-CQyasUig.js";import"./Skeleton-B3HMeOtD.js";import"./inputBaseClasses-LXtxNwLa.js";import"./calculateFriendlyFileSize-C78IjuJR.js";import"./CheckCircleTwoTone-CqTc5vaA.js";import"./InfoTwoTone-DNtkufyt.js";import"./useMutation-DUd97SQY.js";import"./isEqual-Dt-4NKhD.js";import"./dayjs.min-CHLyGnUf.js";import"./chunk-AYJ5UCUI-Blpg1t-L.js";import"./cloneDeep-CZOyHOHD.js";import"./_initCloneObject-CiNG-Awp.js";import"./merge-klNNUCYg.js";import"./util-CmHzlDss.js";import"./HelpPopover-CEwxAoRb.js";import"./MarkdownPopover-BXjgZQqO.js";import"./LightTooltip-BgZe1i0e.js";import"./MarkdownSynapse-REMYywWy.js";import"./SkeletonButton-DR3Wscs0.js";import"./SkeletonInlineBlock-FTKT13Xy.js";import"./SkeletonTable-CHqtt29F.js";import"./SkeletonParagraph-y1PWjO4C.js";import"./HelpOutlineTwoTone-DiHPvoO-.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
