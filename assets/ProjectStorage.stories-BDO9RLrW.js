import{g as s}from"./entityHandlers-CBcucfNo.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-DzrQRRrm.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-Bxt7vX-r.js";import{g as a}from"./userProfileHandlers-BH7GqNB0.js";import{P as N}from"./ProjectDataAvailability-5cqQRo0-.js";import"./index-7RkkznFH.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-Dr2TVkiS.js";import"./mockTeam-CAsfD_U3.js";import"./SynapseConstants-DDq6k8Bk.js";import"./OrientationBanner-2eG-FyEA.js";import"./jsx-runtime-CqspjScI.js";import"./index-DwELiOEm.js";import"./iframe-CKpkvSud.js";import"./index-Ca1CNIs_.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1sJcC6U.js";import"./FullWidthAlert-BAOByKqU.js";import"./Alert-C8X3IXXe.js";import"./createTheme-C2yLSCAv.js";import"./resolveComponentProps-Bsjh6FAz.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-6nS14oXc.js";import"./createSvgIcon-Dw7Y1Pmy.js";import"./DefaultPropsProvider-BIi4x-Qk.js";import"./Close-_v6Lyygk.js";import"./IconButton-YhUBk163.js";import"./ButtonBase-DEUBlcAw.js";import"./useTimeout-uQTgiUpa.js";import"./TransitionGroupContext-_kMZOmjP.js";import"./useIsFocusVisible-DwoqQW0f.js";import"./useEventCallback-oeZLWsf5.js";import"./Paper-BYnSKEKu.js";import"./Stack-D-PASjtE.js";import"./getThemeProps-Bq6i_dzk.js";import"./useTheme-CLgGp1-V.js";import"./Box-DT2Sh8Hk.js";import"./AlertTitle-BNslf1IY.js";import"./Typography-c8mIpSFm.js";import"./useTheme-CDQpdfq0.js";import"./Grow-B9oahLxp.js";import"./index-QL2Y3aCJ.js";import"./utils-4etkwNtb.js";import"./ClickAwayListener-CigyFLxQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BHqwo6lq.js";import"./index-Cb4vUnA6.js";import"./useControlled-CLVGBDQk.js";import"./useId-OZGz37hj.js";import"./Popper-N_aUFGyv.js";import"./Button-DQWEjOY_.js";import"./uniqueId-Ciufq9ZU.js";import"./toString-D_WczTLv.js";import"./isObjectLike-DwKTkmxs.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-Cv-P4Rs9.js";import"./times-CTk1mNYV.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bil1tW-c.js";import"./mockTableEntity-DqW-JcT1.js";import"./mockFileEntityACLVariants-BZpF1r16.js";import"./fakerUtils-B_O9yZd2.js";import"./mockFileEntity-BuwZXMJI.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-BVWgOGrO.js";import"./mockSchema-VNnBeIwB.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DzQ5xZKl.js";import"./utils-Lg92kfS4.js";import"./Link-4I5wKCkj.js";import"./Collapse-CWZgeIDo.js";import"./isNil-Yh1UL_xP.js";import"./_Uint8Array-AY3rwX4N.js";import"./_baseIsEqual-blO9GVwM.js";import"./_getTag-C6cJi8CE.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5KpZEr-.js";import"./Skeleton-B4iZ4BQm.js";import"./inputBaseClasses-DGI8OHrn.js";import"./calculateFriendlyFileSize-Ddpg9m3m.js";import"./CheckCircleTwoTone-B8wv6GAX.js";import"./InfoTwoTone-DpwJN-va.js";import"./mutation-UeCho2I4.js";import"./dayjs.min-CrNzlzo_.js";import"./chunk-AYJ5UCUI-fioPvBwi.js";import"./cloneDeep-ti_eOLLH.js";import"./_initCloneObject-CTeuSNQJ.js";import"./isEqual-bSNg52dZ.js";import"./merge-BByWj7sc.js";import"./util-CIZzasdR.js";import"./HelpPopover-iHIepzA6.js";import"./MarkdownPopover-CPjvAQfI.js";import"./LightTooltip-BOYJeP2w.js";import"./MarkdownSynapse-DJasPMEC.js";import"./SkeletonButton-omDz6R2S.js";import"./SkeletonInlineBlock-Cggj5LnG.js";import"./SkeletonTable-D2Vi96eB.js";import"./SkeletonParagraph-CCzFx5ql.js";import"./HelpOutlineTwoTone-2EZqhBb3.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
