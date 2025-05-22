import{g as s}from"./entityHandlers-DpYr7r1c.js";import{x as C,g as L,b6 as d,B as k,M as r}from"./useFiles-B_YGx59Q.js";import"./VerificationSubmission-DsgC4t7y.js";import"./StringUtils-tNCAfVhp.js";import{l as O}from"./index-DV6n9MQE.js";import{g as a}from"./userProfileHandlers-BDf4ILsR.js";import{P as N}from"./ProjectDataAvailability-CpKqcgXd.js";import"./index-DbM7CNfA.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-yNI4ErHN.js";import"./mockTeam-BsrQh51W.js";import"./SynapseConstants-CgNOmtbB.js";import"./OrientationBanner-tFttoDJP.js";import"./jsx-runtime-DfABaRRm.js";import"./index-DYlxwmQf.js";import"./iframe-N_SCbRud.js";import"./index-B6ZDsx2K.js";import"./spreadSx-CwcO6WA9.js";import"./react-fTEcXI9d.js";import"./FullWidthAlert-BkSSmOGu.js";import"./Alert-DZ4FxOIp.js";import"./createTheme-B7j6gmB9.js";import"./resolveComponentProps-Dk7HmJ2Q.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-pxSTpRRe.js";import"./createSvgIcon-C1r-9WuP.js";import"./DefaultPropsProvider-zBbok_Rg.js";import"./Close-DTAljvJz.js";import"./IconButton-CtrWpawg.js";import"./ButtonBase-BvEMQRg-.js";import"./useTimeout-DZ-OqC0g.js";import"./TransitionGroupContext-Dyr4l5YQ.js";import"./useIsFocusVisible-BStVjJ1N.js";import"./useEventCallback-Hfhvhsjq.js";import"./Paper-LaDS8bEp.js";import"./Stack-BuqrQrvy.js";import"./getThemeProps-qtNr_xPF.js";import"./useTheme-Dtm1qci2.js";import"./Box-BqS2LAmE.js";import"./AlertTitle-BWu0j2xR.js";import"./Typography-CeIa-fZn.js";import"./useTheme-Jk5FIvWn.js";import"./Grow-BehhM4N7.js";import"./index-CeyVdOhP.js";import"./utils-BKSSoB6B.js";import"./ClickAwayListener-B9uGoLeK.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DdV7RVVG.js";import"./index-Dj_6vp2Q.js";import"./useControlled-YFKV2F2n.js";import"./useId-ebMPsm6_.js";import"./Popper-Crl-0kzB.js";import"./Button-CYmbjpql.js";import"./uniqueId-BO_i-R7g.js";import"./toString-Bhze4qLh.js";import"./isObjectLike-IRS_VwDX.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-B0Bx6SJu.js";import"./times-Ceor9oVU.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-4FVoJAF9.js";import"./mockTableEntity-BsOYXqX7.js";import"./mockFileEntityACLVariants-B3kRtWcj.js";import"./fakerUtils-BmN3z4X_.js";import"./mockFileEntity-CWMCMh9K.js";import"./mock_file_handle-DS_yjaGE.js";import"./mockEntity-D3cWRU-V.js";import"./mockSchema-B0t6KeHh.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-RqcQXr6l.js";import"./utils-7vG6A43c.js";import"./Link-C4XBdo-g.js";import"./Collapse-hevKOALZ.js";import"./isNil-BgiRU2Us.js";import"./_Uint8Array-Capyws4v.js";import"./_baseIsEqual-DxRvwVdk.js";import"./_getTag-DYVojOvt.js";import"./tinycolor-Begke6kS.js";import"./Fade-CCfhYHs2.js";import"./Skeleton-DeHRU0rh.js";import"./inputBaseClasses-DuedhsRY.js";import"./calculateFriendlyFileSize-Wtc8EXbC.js";import"./CheckCircleTwoTone-Bo9T9_TT.js";import"./InfoTwoTone-BEe_0-jU.js";import"./mutation-BY_OAeuj.js";import"./dayjs.min-Cm4ygt_D.js";import"./chunk-AYJ5UCUI-CmQNpgxF.js";import"./cloneDeep-IiHMspIc.js";import"./_initCloneObject-DuN2pDEt.js";import"./isEqual-D6ItS3N1.js";import"./merge-0Cc2NZpY.js";import"./util-oBpSghil.js";import"./HelpPopover-HmqB7_fn.js";import"./MarkdownPopover-Cn6d-VV_.js";import"./LightTooltip-DTMGXHQE.js";import"./MarkdownSynapse-5mtGjM53.js";import"./useMutation-QxWOl32L.js";import"./SkeletonButton-BEKl1r2o.js";import"./SkeletonInlineBlock-DrElrzsD.js";import"./SkeletonTable-BCs-xQQb.js";import"./SkeletonParagraph-CZKCQyEv.js";import"./HelpOutlineTwoTone-BNxe-Y5_.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
