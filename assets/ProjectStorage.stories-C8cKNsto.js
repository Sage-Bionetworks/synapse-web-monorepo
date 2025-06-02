import{g as s}from"./entityHandlers-CJnwhgHo.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-DQNFO6M3.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-YLMfSsH2.js";import{g as a}from"./userProfileHandlers-DYyfccbO.js";import{P as N}from"./ProjectDataAvailability-C8QWTwst.js";import"./index-4Nj_OOrg.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-YEZ7yd3i.js";import"./mockTeam-B1EaYZmg.js";import"./SynapseConstants-CKvgSoDH.js";import"./OrientationBanner-B0OoLswb.js";import"./jsx-runtime-ZqC83-wP.js";import"./index-D3UU9lQW.js";import"./iframe-itIUiwxo.js";import"./index-D11wmJq-.js";import"./spreadSx-CwcO6WA9.js";import"./react-O6I3oTFU.js";import"./FullWidthAlert-DAax8okC.js";import"./Alert-CU_Obpy3.js";import"./createTheme-C_IqejkE.js";import"./resolveComponentProps-Dmj9A9RV.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-hDXtKHAF.js";import"./createSvgIcon-DHcmv218.js";import"./DefaultPropsProvider-YK680Z1R.js";import"./Close-BJ4PCaUp.js";import"./IconButton-ChC2FTBM.js";import"./ButtonBase-75CAl-fr.js";import"./useTimeout-BV5S8NXn.js";import"./TransitionGroupContext-B6Qra7Rj.js";import"./useIsFocusVisible-DHBCoWw5.js";import"./useEventCallback-CA3yg066.js";import"./Paper-B36p1j3K.js";import"./Stack-DlqPlAbi.js";import"./getThemeProps-wZq0Zah2.js";import"./useTheme-B_XHKhDB.js";import"./Box-CmLfYmAL.js";import"./AlertTitle-BLeEkfUJ.js";import"./Typography-DQbfKnED.js";import"./useTheme-DfwXarV_.js";import"./Grow-CryHvXlm.js";import"./index-C3D0ccmq.js";import"./utils-Bd-b7f2h.js";import"./ClickAwayListener-zCiIq-sA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BPpCrc9w.js";import"./index-Ccj1bX3p.js";import"./useControlled-C9HNAFVZ.js";import"./useId-CG4UsncK.js";import"./Popper-C1SIfDvh.js";import"./Button-CMT8k8PB.js";import"./uniqueId-DWor3tOo.js";import"./toString-J2AGyw_t.js";import"./isObjectLike-m8g4xdIh.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-GDvudLqi.js";import"./times-CTOlteI3.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DLNl_Use.js";import"./mockTableEntity-Byw0awuP.js";import"./mockFileEntityACLVariants-TztYVOIu.js";import"./fakerUtils-h0REOU5W.js";import"./mockFileEntity-Dj1In6JR.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-CNIiblew.js";import"./mockSchema-CL9JzafG.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BqZh5555.js";import"./utils-DJNKw99O.js";import"./Link-DZafluH_.js";import"./Collapse-CyQNCh1z.js";import"./isNil-DGBBC_gM.js";import"./_Uint8Array-CyAVpPKh.js";import"./_baseIsEqual-BPztA6qE.js";import"./_getTag-BQtK23u5.js";import"./tinycolor-Begke6kS.js";import"./Fade-CojYmX76.js";import"./Skeleton-DQuvMvZk.js";import"./inputBaseClasses-CShjFgOh.js";import"./calculateFriendlyFileSize-CQTrwrnu.js";import"./CheckCircleTwoTone-C8wF6a0h.js";import"./InfoTwoTone-BK1P1y4D.js";import"./useMutation-BrGCzCug.js";import"./isEqual-BPjkdIBC.js";import"./dayjs.min-DYPT4JpK.js";import"./chunk-AYJ5UCUI-BhbJP7T3.js";import"./cloneDeep-BUB8jjRG.js";import"./_initCloneObject-D6hrjEDP.js";import"./merge-BOQKqbFD.js";import"./util-CAELRsFV.js";import"./HelpPopover-DraBIVxW.js";import"./MarkdownPopover-D-JP_CWP.js";import"./LightTooltip-dvpBcjf4.js";import"./MarkdownSynapse-CxTMvGiC.js";import"./SkeletonButton-tDncVxcy.js";import"./SkeletonInlineBlock-DehefHav.js";import"./SkeletonTable-Dv7ttQzh.js";import"./SkeletonParagraph-CraFKDU0.js";import"./HelpOutlineTwoTone-Bj_mhdtg.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
