import{g as s}from"./entityHandlers-Dak1mgWG.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-zmIgDHgj.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-IqOx8qf5.js";import{g as a}from"./userProfileHandlers-DGbhX-QS.js";import{P as N}from"./ProjectDataAvailability-DeG8wB1r.js";import"./index-B5KLe_Kq.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BiSUargM.js";import"./mockTeam-BbAf42s4.js";import"./SynapseConstants-B7Xg8pkB.js";import"./OrientationBanner-BM51AJT8.js";import"./jsx-runtime-CXqxCHrr.js";import"./index-chvr4nzo.js";import"./iframe-mEF7r3QC.js";import"./index-Cvd5NvQW.js";import"./spreadSx-CwcO6WA9.js";import"./react-BD6rhIxb.js";import"./FullWidthAlert-6C2VnmRK.js";import"./Alert-9xz83nqa.js";import"./createTheme-BPHeU5pH.js";import"./resolveComponentProps-CbO5b_W8.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CaxDp9Tt.js";import"./createSvgIcon-Dtr3C6X8.js";import"./DefaultPropsProvider-CQhminKs.js";import"./Close-BIQ5NLvL.js";import"./IconButton-CnvaAokU.js";import"./ButtonBase-BLchPz6_.js";import"./useTimeout-BWWIDppC.js";import"./TransitionGroupContext-DyGj_AR7.js";import"./useIsFocusVisible-B8jESHd6.js";import"./useEventCallback-DLF8tsWn.js";import"./Paper-CiYpDnEl.js";import"./Stack-Cqm_sIC4.js";import"./getThemeProps-svO4y_8_.js";import"./useTheme-CxHbQHwg.js";import"./Box-DhrCRVep.js";import"./AlertTitle-BiQA2OHP.js";import"./Typography-TPoZq6Wq.js";import"./useTheme-BltnVY5I.js";import"./Grow-DruuI62p.js";import"./index-B5S9-Spv.js";import"./utils-B6LfoJiy.js";import"./ClickAwayListener-BLAWwxqk.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-3yxV1myM.js";import"./index-HXVr3Mau.js";import"./useControlled-WEflZAwQ.js";import"./useId-B8wqeFko.js";import"./Popper-B5wcKjOJ.js";import"./Button-BpvCZV0i.js";import"./uniqueId-VnPzv2Vz.js";import"./toString-y7XO4Sie.js";import"./isObjectLike-IzodiS5Q.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BORYxnqm.js";import"./times-DWGtqSst.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CYxypN5Y.js";import"./mockTableEntity-a1Mx6Ebc.js";import"./mockFileEntityACLVariants-B5-D3Zwe.js";import"./fakerUtils-CVcuog6W.js";import"./mockFileEntity-CgMDx3a4.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-DmW9LaRU.js";import"./mockSchema-CcDGb-Ih.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Dy_B_T4H.js";import"./utils-Dl0-3C1y.js";import"./Link-7m1R2YkZ.js";import"./Collapse-BEP1-Zw5.js";import"./isNil-DDPeQmp8.js";import"./_Uint8Array-z-B_nzR7.js";import"./_baseIsEqual-dyv7qhgE.js";import"./_getTag-B5Qu8EDV.js";import"./tinycolor-Begke6kS.js";import"./Fade-sswq0Zcs.js";import"./Skeleton-BetMcy4d.js";import"./inputBaseClasses-B8luTHJ2.js";import"./calculateFriendlyFileSize-JSfKWotV.js";import"./CheckCircleTwoTone-kEK2dVkR.js";import"./InfoTwoTone-DHKS4jcI.js";import"./useMutation-VbtcAGxp.js";import"./isEqual-B86MZMBQ.js";import"./dayjs.min-BdvEa-tw.js";import"./chunk-AYJ5UCUI-BN6H7asg.js";import"./cloneDeep-BJ-BOCet.js";import"./_initCloneObject-CMW1C9rS.js";import"./merge-vKDFgieM.js";import"./util-SEVA7v08.js";import"./HelpPopover-BzbHfyTa.js";import"./MarkdownPopover-BVllK_vx.js";import"./LightTooltip-BM7WLSpd.js";import"./MarkdownSynapse-BbrCkaT4.js";import"./SkeletonButton-Cb2217s4.js";import"./SkeletonInlineBlock-B6IpNbJK.js";import"./SkeletonTable-BZB15oC3.js";import"./SkeletonParagraph-aLo-jbSt.js";import"./HelpOutlineTwoTone-Fz6r2Eh-.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
