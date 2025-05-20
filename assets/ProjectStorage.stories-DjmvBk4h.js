import{g as s}from"./entityHandlers-CmCFtJjC.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-C5Mq70RQ.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-GHUxk_Dy.js";import{g as a}from"./userProfileHandlers-YJd8xAs2.js";import{P as N}from"./ProjectDataAvailability-B5UKhv1E.js";import"./index-CiSAZVlG.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CurDbhI9.js";import"./mockTeam-hD4-SxxW.js";import"./SynapseConstants-C6dWug1_.js";import"./OrientationBanner-BWRgEzO9.js";import"./jsx-runtime-camNUIeC.js";import"./index-3qy05by_.js";import"./iframe-DcLzMnze.js";import"./index-BZbH1w8C.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbTk7auu.js";import"./FullWidthAlert-BQAeOLAY.js";import"./Alert-C56d-Dk2.js";import"./createTheme-BxrJgBSW.js";import"./resolveComponentProps-C4VxWT4p.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CLEivBCN.js";import"./createSvgIcon-CeAJU78Y.js";import"./DefaultPropsProvider-DLeeu6LA.js";import"./Close-C5t_KRqI.js";import"./IconButton-BHUvtcCe.js";import"./ButtonBase-BHtY9VZL.js";import"./useTimeout-ssszZLNk.js";import"./TransitionGroupContext-Pdv27smz.js";import"./useIsFocusVisible-C3N0_RYP.js";import"./useEventCallback-8ueBEeTE.js";import"./Paper-Ber0U2Dw.js";import"./Stack-Icu4aaDP.js";import"./getThemeProps-Z_xok4s4.js";import"./useTheme-B0RT_gxt.js";import"./Box-BdQJQTds.js";import"./AlertTitle-DvX8uaVr.js";import"./Typography-3xjKDb7N.js";import"./useTheme-BeRZYfS0.js";import"./Grow-DpiwUoQW.js";import"./index-DzjMEJyD.js";import"./utils-C1frHh93.js";import"./ClickAwayListener-B3Ml9YPS.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BWvdWZlE.js";import"./index-CEIkfSAW.js";import"./useControlled-CesbcXsm.js";import"./useId-BFCGIoCo.js";import"./Popper-8EezrjSi.js";import"./Button-EqcuO244.js";import"./uniqueId-B8A_DTuU.js";import"./toString-Dk-ReWd2.js";import"./isObjectLike-DJBklG-L.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-rbepKx_t.js";import"./times-D-t0OTsM.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Cou3KyGr.js";import"./mockTableEntity-BYcSasiW.js";import"./mockFileEntityACLVariants-CSA0E6fV.js";import"./fakerUtils-DURyVb4t.js";import"./mockFileEntity-BHGWpDr8.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-ChV19DFA.js";import"./mockSchema-rdVNOz_-.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BG0Ze_zN.js";import"./utils-DnzoUh7_.js";import"./Link-CiQ-OV23.js";import"./Collapse-Bo7xNqfl.js";import"./isNil-BR-_1Pzq.js";import"./_Uint8Array-Cq1aENa3.js";import"./_baseIsEqual-Dtkjh-d1.js";import"./_getTag-FobV6xDg.js";import"./tinycolor-Begke6kS.js";import"./Fade-DjOJc1x_.js";import"./Skeleton-BPkEygKI.js";import"./inputBaseClasses-DFhmw9MT.js";import"./calculateFriendlyFileSize-DeQhHFBq.js";import"./CheckCircleTwoTone-Bg2tqZXX.js";import"./InfoTwoTone-Bi0fUZGN.js";import"./mutation-BwbNpoFa.js";import"./dayjs.min-CEepuNfW.js";import"./chunk-AYJ5UCUI-CBYDAt04.js";import"./cloneDeep-DXQ6UOjN.js";import"./_initCloneObject-CARNlWyH.js";import"./isEqual-Bs8vOeuK.js";import"./merge-BFUthBpK.js";import"./util-D1gCIoEx.js";import"./HelpPopover-DVw90O37.js";import"./MarkdownPopover-CE5d_NVT.js";import"./LightTooltip-BS2yXlQT.js";import"./MarkdownSynapse-DELfemiv.js";import"./SkeletonButton-BgC5sIpZ.js";import"./SkeletonInlineBlock-CpSbukZt.js";import"./SkeletonTable-BmAPXfcx.js";import"./SkeletonParagraph-98k5VQr3.js";import"./HelpOutlineTwoTone-C74cNEnD.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
