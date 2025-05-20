import{g as s}from"./entityHandlers-DichPZhc.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-B5k0fHaK.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-D-8smY63.js";import{g as a}from"./userProfileHandlers-BC85XhiK.js";import{P as N}from"./ProjectDataAvailability-Cdo-gI7Z.js";import"./index-Bx4Y2Gcl.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DdCf1wsM.js";import"./mockTeam-DfrIOVzt.js";import"./SynapseConstants-BV0-4_QF.js";import"./OrientationBanner-DjGZBNPH.js";import"./jsx-runtime-7YCwI36c.js";import"./index-C9M_il_J.js";import"./iframe-M2uNqdbL.js";import"./index-DZTeTwJ3.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cqi5Udnm.js";import"./FullWidthAlert-CPVIz4Wz.js";import"./Alert-DHZvlRwT.js";import"./createTheme-SdSk3wwD.js";import"./resolveComponentProps-C_boa-fy.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-_q_7mTIm.js";import"./createSvgIcon-BkJZknfb.js";import"./DefaultPropsProvider-CJvfCKAu.js";import"./Close-BiyTYcOV.js";import"./IconButton-PbRpfjbr.js";import"./ButtonBase-CtFMKvXy.js";import"./useTimeout-B8yFsaAv.js";import"./TransitionGroupContext-DOB4L6KT.js";import"./useIsFocusVisible-CqlXx1mp.js";import"./useEventCallback-C8kim-Rr.js";import"./Paper-DxH-uwW9.js";import"./Stack-d5e5w4Ye.js";import"./getThemeProps-DOjU9IFn.js";import"./useTheme-B-J_FYJg.js";import"./Box-CVywjUOl.js";import"./AlertTitle-qqPjl8D9.js";import"./Typography-tuEHvF3F.js";import"./useTheme-CL4VxzvZ.js";import"./Grow-CGZtvPFd.js";import"./index-BUMelamN.js";import"./utils-Ecsgz-ex.js";import"./ClickAwayListener-CulQoVsa.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-5lCyVYpl.js";import"./index-cAvLThiO.js";import"./useControlled-Dl6X9RP0.js";import"./useId-CnHJMbo3.js";import"./Popper-iF4jELXw.js";import"./Button-DAfmUnv3.js";import"./uniqueId-Dvw_UZkQ.js";import"./toString-CgvljhA6.js";import"./isObjectLike-B9wu438U.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DfKo8OMF.js";import"./times-DmQE_leI.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CxwQ7579.js";import"./mockTableEntity-B79f1l4T.js";import"./mockFileEntityACLVariants-CRiQxqNA.js";import"./fakerUtils-tXneBTmP.js";import"./mockFileEntity-BYvmOyBN.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-CC6ZprMx.js";import"./mockSchema-BvMMHmLB.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Bw2Txi7_.js";import"./utils-DvoQ-FO4.js";import"./Link-YOi7hgdm.js";import"./Collapse-VY5dXbQp.js";import"./isNil-C1cHp62C.js";import"./_Uint8Array-CRKTzfcx.js";import"./_baseIsEqual-BD0mzzJ-.js";import"./_getTag-DZdP02yz.js";import"./tinycolor-Begke6kS.js";import"./Fade-CWwsiTWC.js";import"./Skeleton-CLO42135.js";import"./inputBaseClasses-CDZZCPli.js";import"./calculateFriendlyFileSize-s4H5ytOs.js";import"./CheckCircleTwoTone-QFBnsBZD.js";import"./InfoTwoTone-COYXC-bl.js";import"./mutation-Dso9fTIz.js";import"./dayjs.min-CxuSaHVW.js";import"./chunk-AYJ5UCUI-CPoEp2kj.js";import"./cloneDeep-CD-IgKhG.js";import"./_initCloneObject-STI8wTbS.js";import"./isEqual-C0SwGJ7g.js";import"./merge-DAUGgmio.js";import"./util-DAMfoFVr.js";import"./HelpPopover-L1Gbplmv.js";import"./MarkdownPopover-Dm7u_XH3.js";import"./LightTooltip-CJynzBq8.js";import"./MarkdownSynapse-0AMtaR7N.js";import"./SkeletonButton-BeloOnh2.js";import"./SkeletonInlineBlock-CRLerYnI.js";import"./SkeletonTable-BfrBNQWe.js";import"./SkeletonParagraph-CzsmpWQX.js";import"./HelpOutlineTwoTone-BphNQpuK.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
