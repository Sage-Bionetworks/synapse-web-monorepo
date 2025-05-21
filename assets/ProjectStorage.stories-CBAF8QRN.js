import{g as s}from"./entityHandlers-BL_qFLEt.js";import{x as C,g as L,ba as d,B as k,M as r}from"./useFiles-DUNIhSV7.js";import"./VerificationSubmission-B0kBNeMy.js";import"./StringUtils-CzgJJW-6.js";import{l as O}from"./index-BGCwCqF6.js";import{g as a}from"./userProfileHandlers-BHbAmruu.js";import{P as N}from"./ProjectDataAvailability-DIe9ORTK.js";import"./index-CRc_z1w1.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CMr_TI_H.js";import"./mockTeam-CbXCF2wr.js";import"./SynapseConstants-DQ1zBBb6.js";import"./OrientationBanner-Bji4jA3k.js";import"./jsx-runtime-B8F9yCu2.js";import"./index-DQ1pwsUN.js";import"./iframe-Ber0uhpE.js";import"./index-D-sqPWvT.js";import"./spreadSx-CwcO6WA9.js";import"./react-DbIxCYhJ.js";import"./FullWidthAlert-BrTMKYXm.js";import"./Alert-PZkf-jPQ.js";import"./createTheme-CvWzDpdo.js";import"./resolveComponentProps-XsoZTRWC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BaidT4sD.js";import"./createSvgIcon-DXdrzfQq.js";import"./DefaultPropsProvider-DTNalRio.js";import"./Close-CKQJvfvd.js";import"./IconButton-jrtzc4fH.js";import"./ButtonBase-BQJxoogz.js";import"./useTimeout-LLr9iMPv.js";import"./TransitionGroupContext-BrtiFLkN.js";import"./useIsFocusVisible-kYimsF7D.js";import"./useEventCallback-cNUA3zHB.js";import"./Paper-DolJMAHJ.js";import"./Stack-DNk4NVtx.js";import"./getThemeProps-Bmb8xS95.js";import"./useTheme-DC6cp_DY.js";import"./Box-CHcO_qIh.js";import"./AlertTitle-BZV0Rp7k.js";import"./Typography-Cr5v_ihi.js";import"./useTheme-BMkoP2Dd.js";import"./Grow-DIdr3kKL.js";import"./index-CzXE8kXs.js";import"./utils-crfQibeg.js";import"./ClickAwayListener-BdTMHeZW.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CRXO9dAn.js";import"./index-Cj0i8O2P.js";import"./useControlled-CuR_U5EM.js";import"./useId-DXwVjo-q.js";import"./Popper-8HZykaUC.js";import"./Button-CYW7tum7.js";import"./uniqueId-BKWm8MfJ.js";import"./toString-Cv3UMp2j.js";import"./isObjectLike-6xxBu9nc.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-B19r0Yln.js";import"./times-DwUpU9ZF.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-1bRyGB6Y.js";import"./mockTableEntity-3mCHcFX_.js";import"./mockFileEntityACLVariants-BWmZbqVp.js";import"./fakerUtils-CR7rMQaQ.js";import"./mockFileEntity-DJarW4jA.js";import"./mock_file_handle-Ct1MSfYs.js";import"./mockEntity-BJXs1W_X.js";import"./mockSchema-CyIwO54D.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-v9fHbYhn.js";import"./utils-C14kvl81.js";import"./Link-D--XjCYV.js";import"./Collapse-BFO6utOk.js";import"./isNil-DuX8kKMU.js";import"./_Uint8Array-trlUSQMK.js";import"./_baseIsEqual-Bq4Nylta.js";import"./_getTag-0tTDydmm.js";import"./tinycolor-Begke6kS.js";import"./Fade-CBo9pmeT.js";import"./Skeleton-BodMJu2e.js";import"./inputBaseClasses-HXrsNBjw.js";import"./calculateFriendlyFileSize-gcXWr6JQ.js";import"./CheckCircleTwoTone-D3yXCAfy.js";import"./InfoTwoTone-GaZs2gOk.js";import"./mutation-Dxj-2szy.js";import"./dayjs.min-CtWKk_St.js";import"./chunk-AYJ5UCUI-CtF4x_xB.js";import"./cloneDeep-ZEcnoJdE.js";import"./_initCloneObject-DmeBfQFl.js";import"./isEqual-CmS8f6Z7.js";import"./merge-R-dqjrns.js";import"./util-D_dj-gIg.js";import"./HelpPopover-CwdJnADK.js";import"./MarkdownPopover-C7F4v8v2.js";import"./LightTooltip-NWZ_R3F2.js";import"./MarkdownSynapse-Bvp5Yn_3.js";import"./SkeletonButton-DtA7ta7U.js";import"./SkeletonInlineBlock-BmxTw9Xy.js";import"./SkeletonTable-DQK8oMZu.js";import"./SkeletonParagraph-YpL83hB1.js";import"./HelpOutlineTwoTone-DNygck5C.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
