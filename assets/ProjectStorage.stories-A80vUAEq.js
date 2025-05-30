import{g as s}from"./entityHandlers-BSJPilZV.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-CUgp-bJ5.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-Bh1yARfc.js";import{g as a}from"./userProfileHandlers-BwRI_Ftr.js";import{P as N}from"./ProjectDataAvailability-DbAOJ8tU.js";import"./index-KJbKbgLS.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-gnx7I4oi.js";import"./mockTeam-BXsmjD1o.js";import"./SynapseConstants-BEbm2BNF.js";import"./OrientationBanner-CwmgbjT1.js";import"./jsx-runtime-BGAr_H6J.js";import"./index-CBNOfi9b.js";import"./iframe-Bz49s2ek.js";import"./index-DACJwC5s.js";import"./spreadSx-CwcO6WA9.js";import"./react-BlXBSA_S.js";import"./FullWidthAlert-CZGhZILF.js";import"./Alert-BCPuGqa7.js";import"./createTheme-BS2Hxz2C.js";import"./resolveComponentProps-CIYnEhb-.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-iaYYc9cH.js";import"./createSvgIcon-BH1qGqe_.js";import"./DefaultPropsProvider-C6M_N1al.js";import"./Close-8S-yuGkV.js";import"./IconButton-BHS8NsAP.js";import"./ButtonBase-MOgQUm9a.js";import"./useTimeout-DSVaU9sB.js";import"./TransitionGroupContext-8dlZc-k1.js";import"./useIsFocusVisible-5-ZlgN9V.js";import"./useEventCallback-viMIHUvK.js";import"./Paper-WIHJYIv3.js";import"./Stack-C_q3MTiC.js";import"./getThemeProps-pJg6N0Fu.js";import"./useTheme-DV8_YPZg.js";import"./Box-Ci6k8vkL.js";import"./AlertTitle-C5rWDhGv.js";import"./Typography-DukInDzv.js";import"./useTheme-CRJ8F4UU.js";import"./Grow-BQyhnjKi.js";import"./index-842qkzaE.js";import"./utils-DswcbYna.js";import"./ClickAwayListener-DtNMOS5b.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-8CUwFe3k.js";import"./index-CfXlikfe.js";import"./useControlled-Dm9u6Igu.js";import"./useId-CtRXL8u3.js";import"./Popper-BqzUuKEl.js";import"./Button-CD9r6Dww.js";import"./uniqueId-B5Xx2N1K.js";import"./toString-B18YgA5k.js";import"./isObjectLike-CM6iWqWY.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-D-UeOBse.js";import"./times-BFf5JBXq.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CbgnmVti.js";import"./mockTableEntity-BvFd6IU2.js";import"./mockFileEntityACLVariants-DckfVtvn.js";import"./fakerUtils-CjR6I31a.js";import"./mockFileEntity-D1E_Hb1_.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-BauFjhdG.js";import"./mockSchema-2Lz7aZHu.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-T8y6ai37.js";import"./utils-DNqFuDFi.js";import"./Link-DtnlThUQ.js";import"./Collapse-BgbjfOQO.js";import"./isNil-DtAF69a6.js";import"./_Uint8Array-BMQd7pdf.js";import"./_baseIsEqual-UKYRkdWd.js";import"./_getTag-CICsfDiG.js";import"./tinycolor-Begke6kS.js";import"./Fade-C7Q7hfy9.js";import"./Skeleton-6KImEvG6.js";import"./inputBaseClasses-C-bNqgbr.js";import"./calculateFriendlyFileSize-Cdyr_EDz.js";import"./CheckCircleTwoTone-1HEsco6v.js";import"./InfoTwoTone-Dm-TNOU9.js";import"./mutation-CVy7um_a.js";import"./dayjs.min-CfPuZ0Gd.js";import"./chunk-AYJ5UCUI-BqUDfuKM.js";import"./cloneDeep-CpnMvqCH.js";import"./_initCloneObject-D_6r56Q0.js";import"./isEqual-Dsql6eRH.js";import"./merge-BMUIzKJf.js";import"./util-1MpYx0kR.js";import"./HelpPopover-uBh0bAyd.js";import"./MarkdownPopover-BoF22pP1.js";import"./LightTooltip-BRWP6_2R.js";import"./MarkdownSynapse-B1me5itT.js";import"./useMutation-B13Z37nL.js";import"./SkeletonButton-DxJ8_eb7.js";import"./SkeletonInlineBlock-CKtNsQDI.js";import"./SkeletonTable-ES3cTZms.js";import"./SkeletonParagraph-D9XjKQKC.js";import"./HelpOutlineTwoTone-CF5v5_Fc.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
