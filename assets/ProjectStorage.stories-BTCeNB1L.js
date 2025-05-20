import{g as s}from"./entityHandlers-DtqSoCdB.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-B7wbSLKA.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-wIIOyg3-.js";import{g as a}from"./userProfileHandlers-Dkve9PXX.js";import{P as N}from"./ProjectDataAvailability-Ckl6aPio.js";import"./index-BAcHXPSe.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DyRpwx8S.js";import"./mockTeam-B6epm6Gi.js";import"./SynapseConstants-6diw_2V4.js";import"./OrientationBanner-CALynnLL.js";import"./jsx-runtime-soP0eJw3.js";import"./index-hpfWuA9c.js";import"./iframe-BHoKq1w1.js";import"./index-COJsKla7.js";import"./spreadSx-CwcO6WA9.js";import"./react-l0lHratm.js";import"./FullWidthAlert-Boq7L3Qf.js";import"./Alert-Dvpc-zfR.js";import"./createTheme-Dpipd2B4.js";import"./resolveComponentProps-C2Zw4Y40.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D4rX5W63.js";import"./createSvgIcon-DBYVCs44.js";import"./DefaultPropsProvider-PXZSU-pD.js";import"./Close-D3yIz2Os.js";import"./IconButton-BWQMO1ah.js";import"./ButtonBase-Df7HWHxL.js";import"./useTimeout-CZFMIsWC.js";import"./TransitionGroupContext-D0hM1Q67.js";import"./useIsFocusVisible-DiKKqeBi.js";import"./useEventCallback-B8sxSnWX.js";import"./Paper-C_pRCP3n.js";import"./Stack-DlM6dtWc.js";import"./getThemeProps-BDNwUju8.js";import"./useTheme-BvuKB97Z.js";import"./Box-B-UIBw2g.js";import"./AlertTitle-BqaE6HNK.js";import"./Typography-Bmj31eeD.js";import"./useTheme-Dxbanuns.js";import"./Grow-CQfJefys.js";import"./index-Cu-xJgCv.js";import"./utils-BJRE2IYR.js";import"./ClickAwayListener-DeeVJesb.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BIvonp8D.js";import"./index-DdAibAWs.js";import"./useControlled-YZ_o9Ute.js";import"./useId-CpvJc5ah.js";import"./Popper-C8BiWNkC.js";import"./Button-G66wYlJC.js";import"./uniqueId-BjzMKLwO.js";import"./toString-B_o-A1No.js";import"./isObjectLike-Bbw-pWo9.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-10cJLTdp.js";import"./times-C5D6YhQw.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-NnnZ41vA.js";import"./mockTableEntity-C1d51wsD.js";import"./mockFileEntityACLVariants-BKWM88X2.js";import"./fakerUtils-DQ6Lhpxi.js";import"./mockFileEntity-BYobeBnx.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-CihM9n8Z.js";import"./mockSchema-DJatfRFc.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BrR264Iv.js";import"./utils-DQrTSbe2.js";import"./Link-BDjhksuj.js";import"./Collapse-CwH3Wopy.js";import"./isNil-CvysbORv.js";import"./_Uint8Array-DTt4064I.js";import"./_baseIsEqual-CZFbHhrG.js";import"./_getTag-D37krsF-.js";import"./tinycolor-Begke6kS.js";import"./Fade-CXUBWJhZ.js";import"./Skeleton-DvLjtclJ.js";import"./inputBaseClasses-CAkrk-fM.js";import"./calculateFriendlyFileSize-DnMRx2GO.js";import"./CheckCircleTwoTone-6jKvRjuJ.js";import"./InfoTwoTone-l-H02dCE.js";import"./mutation-DZlyKlKR.js";import"./dayjs.min-BIqhQsmA.js";import"./chunk-AYJ5UCUI-0avzdJN8.js";import"./cloneDeep-CVJPWTAF.js";import"./_initCloneObject-BJtqxeAa.js";import"./isEqual-Ci70EvoW.js";import"./merge-D-nboOHF.js";import"./util-BTti4Cqd.js";import"./HelpPopover-BZRNsyG5.js";import"./MarkdownPopover-Bkuto_5o.js";import"./LightTooltip-mowxWPn-.js";import"./MarkdownSynapse-HoWzFI9W.js";import"./SkeletonButton-B5KMuDKN.js";import"./SkeletonInlineBlock-B-MiQC1W.js";import"./SkeletonTable-BiGHpBn5.js";import"./SkeletonParagraph-Dmn15oRr.js";import"./HelpOutlineTwoTone-CFaYYLX0.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
