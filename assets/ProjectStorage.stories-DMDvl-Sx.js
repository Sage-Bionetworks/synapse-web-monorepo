import{g as s}from"./entityHandlers-D-Zc6li6.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-D6D6aavL.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-C2vI-jm7.js";import{g as a}from"./userProfileHandlers-csWfzCpB.js";import{P as N}from"./ProjectDataAvailability-B98xLdai.js";import"./index-Cu_Bmw18.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-C6nUVHBC.js";import"./mockTeam-BCKzsLaO.js";import"./SynapseConstants-CIJTL8Hh.js";import"./OrientationBanner-CiRzQfQO.js";import"./jsx-runtime-CnC__bFg.js";import"./index-BsJQi6Dk.js";import"./iframe-CLOMuBS1.js";import"./index-IjppgAFK.js";import"./spreadSx-CwcO6WA9.js";import"./react-Wpnlki_N.js";import"./FullWidthAlert-BgsUTCUD.js";import"./Alert-lc64fEld.js";import"./createTheme-DVbiGJ67.js";import"./resolveComponentProps-Bv7pQW1z.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BJRw6fTR.js";import"./createSvgIcon-DTKv9Rlb.js";import"./DefaultPropsProvider-yqsgBtMO.js";import"./Close-DCccWvSR.js";import"./IconButton-qFeqvS30.js";import"./ButtonBase-DlZPLEXy.js";import"./useTimeout-BtTY_1Hi.js";import"./TransitionGroupContext-yGFzkBTt.js";import"./useIsFocusVisible-D3oCvNA0.js";import"./useEventCallback-Bh5fpomL.js";import"./Paper-CZ6IEQ09.js";import"./Stack-DW2g_KTM.js";import"./getThemeProps-CQ-evv0A.js";import"./useTheme-SwEfz4tC.js";import"./Box-Jd0TGo98.js";import"./AlertTitle-DXQWSGGX.js";import"./Typography-BcmFSKlE.js";import"./useTheme-D0sMZgaF.js";import"./Grow-BADnlCPX.js";import"./index-CL9pY3NP.js";import"./utils-5GDObXQ_.js";import"./ClickAwayListener-Cd-S1Q1u.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DaXBtCB8.js";import"./index-cvImvpDl.js";import"./useControlled-CCxoHuWH.js";import"./useId-CFCmZZFw.js";import"./Popper-CD-JqEPm.js";import"./Button-CKoHvT6d.js";import"./uniqueId-BFvx1CNb.js";import"./toString-DFORIYL8.js";import"./isObjectLike-DmdZbYeo.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BlFNIlma.js";import"./times-a9NTxe3E.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bdm7bKOc.js";import"./mockTableEntity-DGITVa5H.js";import"./mockFileEntityACLVariants-DaQWcFf9.js";import"./fakerUtils-B8MonDTH.js";import"./mockFileEntity-Bns16Lkd.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-CY6VwAvP.js";import"./mockSchema-BRoLxgsi.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CF-CfnG8.js";import"./utils-Bq0_XUyv.js";import"./Link-_TBTXcDx.js";import"./Collapse-B7cdoG5y.js";import"./isNil-CTodBd8q.js";import"./_Uint8Array-BSaYQZWv.js";import"./_baseIsEqual-CsLca8bb.js";import"./_getTag-m1EiPaOw.js";import"./tinycolor-Begke6kS.js";import"./Fade-DcXqhDgy.js";import"./Skeleton-BNofG0Ec.js";import"./inputBaseClasses-CFue45jM.js";import"./calculateFriendlyFileSize-Bt8qXmv0.js";import"./CheckCircleTwoTone-jeuH2qq1.js";import"./InfoTwoTone-CeQqu_rR.js";import"./useMutation-3NTG8Lcv.js";import"./isEqual-C1O3GEEt.js";import"./dayjs.min-CnuSBCzJ.js";import"./chunk-AYJ5UCUI-pNtXMNcj.js";import"./cloneDeep-C2q4fZxO.js";import"./_initCloneObject-Csqg8Vlr.js";import"./merge-LpyMrc_U.js";import"./util-5m9QK5Gt.js";import"./HelpPopover-qM59PdY3.js";import"./MarkdownPopover-bQ_rbdLw.js";import"./LightTooltip-DDDOKS1k.js";import"./MarkdownSynapse-BAznWAlp.js";import"./SkeletonButton-C-eCYWGB.js";import"./SkeletonInlineBlock-08qroX_M.js";import"./SkeletonTable-DOJaXP3-.js";import"./SkeletonParagraph-Dv9lb0yO.js";import"./HelpOutlineTwoTone-B9wfPIJN.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
