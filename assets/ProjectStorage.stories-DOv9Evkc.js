import{g as s}from"./entityHandlers-DTuIZ4UN.js";import{x as C,g as L,b6 as d,B as k,M as r}from"./useFiles-BHzIddvO.js";import"./VerificationSubmission-DsgC4t7y.js";import"./StringUtils-tNCAfVhp.js";import{l as O}from"./index-CCIBj4ML.js";import{g as a}from"./userProfileHandlers-DrXd2tBG.js";import{P as N}from"./ProjectDataAvailability-DpT2FRa3.js";import"./index-C5Xc_yBN.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-Ck2N2lV2.js";import"./mockTeam-1hVKoywY.js";import"./SynapseConstants-DQnuBn7R.js";import"./OrientationBanner-Di6wDKmu.js";import"./jsx-runtime-Cpzuo2ay.js";import"./index-qzbKbFlq.js";import"./iframe-B7UWlENb.js";import"./index-D_POy7Ue.js";import"./spreadSx-CwcO6WA9.js";import"./react-DhQQnVH8.js";import"./FullWidthAlert-CYLONltS.js";import"./Alert-BoJtOfcQ.js";import"./createTheme-BSeZw0jO.js";import"./resolveComponentProps-CxH78Z7f.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Dl0HqeWq.js";import"./createSvgIcon-ClunDJ6D.js";import"./DefaultPropsProvider-Bptl8wGp.js";import"./Close-C7ppEedf.js";import"./IconButton-DdxKVWSD.js";import"./ButtonBase-Cd6E67ue.js";import"./useTimeout-QDIkgYlw.js";import"./TransitionGroupContext-C6XQh8Dh.js";import"./useIsFocusVisible-yY6MxYkr.js";import"./useEventCallback-DFF1Wb54.js";import"./Paper-C_MNeKnS.js";import"./Stack-NeCVAsSl.js";import"./getThemeProps-v3E6r25K.js";import"./useTheme-CanYvo4O.js";import"./Box-DWG1pAIJ.js";import"./AlertTitle-CXuF7YB4.js";import"./Typography-UpxeVSC9.js";import"./useTheme-BXUKSYiP.js";import"./Grow---qI4Xyl.js";import"./index-V6m7UmXo.js";import"./utils-UQqgZKk5.js";import"./ClickAwayListener-BsZYeWwC.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-x8bHq8cu.js";import"./index-DhW7zJ1I.js";import"./useControlled-0Y9QxmiD.js";import"./useId-BZdi58KL.js";import"./Popper-DJNlKWGH.js";import"./Button-CJoc-lWM.js";import"./uniqueId-DVEz_6te.js";import"./toString-Bk6nik-V.js";import"./isObjectLike-sZnKwddx.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BjZPbA0U.js";import"./times-D-Y5GPLw.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DPyE9_s_.js";import"./mockTableEntity-CYBlHaR4.js";import"./mockFileEntityACLVariants-Chi9uWig.js";import"./fakerUtils-Bl1w0b_W.js";import"./mockFileEntity-mLFEC5ui.js";import"./mock_file_handle-DS_yjaGE.js";import"./mockEntity-Bhw5VHY4.js";import"./mockSchema-1gvdGV33.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-B_mXUuWt.js";import"./utils-BsHt5Ez6.js";import"./Link-bG66493O.js";import"./Collapse-JpDvYyye.js";import"./isNil-BFbe1Fm3.js";import"./_Uint8Array-BeS2nPDv.js";import"./_baseIsEqual-i7PtvCG3.js";import"./_getTag-BvHcUwIL.js";import"./tinycolor-Begke6kS.js";import"./Fade-BXyi4DiG.js";import"./Skeleton-Lg9a-sk4.js";import"./inputBaseClasses-BcoPWVf4.js";import"./calculateFriendlyFileSize-LFzydKri.js";import"./CheckCircleTwoTone-JlmlKZJ4.js";import"./InfoTwoTone-CWclAxfb.js";import"./mutation-Hk4gcjTH.js";import"./dayjs.min-C7AzIqXS.js";import"./chunk-AYJ5UCUI-C6fnNANP.js";import"./cloneDeep-Bk965Mg-.js";import"./_initCloneObject-o-TgjwA3.js";import"./isEqual-DJSPEdYQ.js";import"./merge-DYg2YPZj.js";import"./util-B3rfSkUt.js";import"./HelpPopover-DQujau3e.js";import"./MarkdownPopover-ToVD7Er2.js";import"./LightTooltip-h8Q8NX_O.js";import"./MarkdownSynapse-Bi9a_AZc.js";import"./useMutation-DIiovDAa.js";import"./SkeletonButton-C5_lomWq.js";import"./SkeletonInlineBlock-yqDUUNs0.js";import"./SkeletonTable-5zaLHpm6.js";import"./SkeletonParagraph-BspSCshB.js";import"./HelpOutlineTwoTone-CLq2ztTl.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const kt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,kt as __namedExportsOrder,Lt as default};
