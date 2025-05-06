import{g as s}from"./entityHandlers-BAlRMTYU.js";import{x as C,b9 as d,g as L,B as k,M as r}from"./useFiles-Cul21QaF.js";import"./VerificationSubmission-CX6Xq4We.js";import"./StringUtils-DrtZBNIY.js";import{l as O}from"./index-B-MCAtQC.js";import{g as a}from"./userProfileHandlers-rY2loRP3.js";import{P as N}from"./ProjectDataAvailability-DxxfVRYu.js";import"./index-D8DgSQvq.js";import"./mock_user_profile-CyZOyNQ0.js";import"./mockProject-COPVoL2B.js";import"./mockTeam-VxWq63Sg.js";import"./SynapseConstants-Ch8mxy-k.js";import"./OrientationBanner-6c7QOLx_.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./index-CZCSLsz_.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbO-K0JG.js";import"./FullWidthAlert-CgFm9dfg.js";import"./Alert-BoiUXBFA.js";import"./createTheme-BoQYKx5k.js";import"./index-GEGPABih.js";import"./styled-BMGIoXl7.js";import"./mergeSlotProps-D_dLvIWz.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BDoLG09A.js";import"./createSvgIcon-DrH8-ApS.js";import"./Close-N0BBw2gu.js";import"./Paper-B6Fumrsg.js";import"./IconButton-QXhlbi2Z.js";import"./ButtonBase-CTLL4EY5.js";import"./useTimeout-DgmtfV4_.js";import"./TransitionGroupContext-DetLSwnr.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useIsFocusVisible-Bf3pHwKN.js";import"./Stack-BcBUfnl7.js";import"./Box-T6r2Z_yt.js";import"./AlertTitle-DrSQ0G21.js";import"./Typography-D3xYwoES.js";import"./useTheme-B4ZZkoF-.js";import"./Grow-BcJKh-mH.js";import"./index-BIzb42Jq.js";import"./utils-D16j0ClI.js";import"./ClickAwayListener-DMjw0JVT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CIKCv17A.js";import"./index-DRltcjjn.js";import"./Popper-YUaVwGty.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-CgNBwHku.js";import"./uniqueId-CNPmaLAy.js";import"./toString-C-tSuG3i.js";import"./isObjectLike-Cu7zvyZq.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-VqtJwUUo.js";import"./times-DTv3Uv5U.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-kto__FmK.js";import"./mockTableEntity-D5xFIs-k.js";import"./mockFileEntityACLVariants-CHr67-7K.js";import"./fakerUtils-bF6LKVwK.js";import"./mockFileEntity-Bq2iL8nH.js";import"./mock_file_handle-ByHYXYit.js";import"./mockEntity-ens1ysxL.js";import"./mockSchema-CGSRn7UC.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DFbKL1Tm.js";import"./utils-DPkdG3Lw.js";import"./Link-C37sfSRl.js";import"./Collapse-BRq1pUbz.js";import"./isNil-CXnMBT_8.js";import"./_Uint8Array-BO3mj8J_.js";import"./_baseIsEqual-DEUJ7S9e.js";import"./_getTag-DiBG4-8j.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-Cn0cOZ_j.js";import"./CheckCircleTwoTone-BxJ-qX7O.js";import"./calculateFriendlyFileSize-C4KOtplu.js";import"./Skeleton-DwKQ5_E5.js";import"./inputBaseClasses-B4urITub.js";import"./Fade-TcPvrVoT.js";import"./mutation-SJTTtyND.js";import"./dayjs.min-d18Up55D.js";import"./chunk-AYJ5UCUI-Ck5uCIR5.js";import"./cloneDeep-BRq0JbUP.js";import"./_initCloneObject-CAXIH7ge.js";import"./isEqual-X7sPOZRU.js";import"./merge-DlorMX21.js";import"./util-BbuHFHEZ.js";import"./HelpPopover-Cxsfp5jp.js";import"./MarkdownPopover-mDyqAttb.js";import"./LightTooltip-CQ9uSiLf.js";import"./MarkdownSynapse-CRXtksDT.js";import"./SkeletonButton-BD-3AFCV.js";import"./SkeletonInlineBlock-Fq_ly8Br.js";import"./SkeletonTable-WeG9TOK2.js";import"./SkeletonParagraph-C2aM1X4t.js";import"./iframe-BlpuGD6i.js";import"../sb-preview/runtime.js";import"./HelpOutlineTwoTone-DAzxeOov.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
