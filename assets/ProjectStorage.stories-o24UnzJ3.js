import{g as s}from"./entityHandlers-BRYPDVsE.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-DB5RUn42.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-7FMrWnre.js";import{g as a}from"./userProfileHandlers-CRR6YSR6.js";import{P as N}from"./ProjectDataAvailability-qvi24rIR.js";import"./index-BZpYP5kl.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-BQaBfmN2.js";import"./mockTeam-D27Y7qlv.js";import"./SynapseConstants-CfJFMU44.js";import"./OrientationBanner-BxqvkYhO.js";import"./jsx-runtime-Aq5fbqHl.js";import"./index-JgWvyRd0.js";import"./iframe-CGz9Tkep.js";import"./index-DbjpxmLy.js";import"./spreadSx-CwcO6WA9.js";import"./react-DTfpc0Nm.js";import"./FullWidthAlert-pE7OHiYt.js";import"./Alert-DxvcGxLm.js";import"./createTheme-CabrvzGG.js";import"./resolveComponentProps-CbN17S1S.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CH1o28Sn.js";import"./createSvgIcon-D5iVBR5M.js";import"./DefaultPropsProvider-rm74DNR0.js";import"./Close-CtA38glB.js";import"./IconButton-DJ7CnQcI.js";import"./ButtonBase-DuHovILV.js";import"./useTimeout-CLPgbyPk.js";import"./TransitionGroupContext-Dv9DyMfN.js";import"./useIsFocusVisible-BGnBciWP.js";import"./useEventCallback-BAJp23lY.js";import"./Paper-DK1SI2Ul.js";import"./Stack-BfP3PSXZ.js";import"./getThemeProps-CiYEGSc1.js";import"./useTheme-C4qyPjnK.js";import"./Box-B2ycGbQs.js";import"./AlertTitle-CLAc8_kb.js";import"./Typography-C_Rd-vc3.js";import"./useTheme-CWq0CMFs.js";import"./Grow-96cTP3k-.js";import"./index-BAYNcIPW.js";import"./utils-BpsVJ7_L.js";import"./ClickAwayListener-CpgqDlAE.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DV1lHLML.js";import"./index-BXuttiqi.js";import"./useControlled-DKF3jkF4.js";import"./useId-te-eXufQ.js";import"./Popper-BpxIK3o5.js";import"./Button-Cj3fw4dL.js";import"./uniqueId-C3LnxDfg.js";import"./toString-C5rFS-5w.js";import"./isObjectLike-DOsXpd_Z.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-Ek_DRy9H.js";import"./times-YBF_Fis8.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-BCMs930d.js";import"./mockTableEntity-hPyHEEtD.js";import"./mockFileEntityACLVariants-K48Cepcw.js";import"./fakerUtils-N4rA7CzO.js";import"./mockFileEntity-Dn_RDYVz.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-CRrjzUZZ.js";import"./mockSchema-Dh3kpe7I.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CWCK9oHA.js";import"./utils-BTjLWw9V.js";import"./Link-B-GSk5ZJ.js";import"./Collapse-DRZCXyGt.js";import"./isNil-YEBrO959.js";import"./_Uint8Array-DsX8C4yt.js";import"./_baseIsEqual-B73VkKNe.js";import"./_getTag-DqJt2ioY.js";import"./tinycolor-Begke6kS.js";import"./Fade-D7vpEMyo.js";import"./Skeleton-sPP7_TZq.js";import"./inputBaseClasses-BAfHv4Bb.js";import"./calculateFriendlyFileSize-Vzb5BBgT.js";import"./CheckCircleTwoTone-DH4fkY38.js";import"./InfoTwoTone-BCIxruOU.js";import"./mutation-B9vk3ZUd.js";import"./dayjs.min-DMTb_QEv.js";import"./chunk-AYJ5UCUI-D9dVPbwt.js";import"./cloneDeep-D4yJ6Uqf.js";import"./_initCloneObject-CBlxkXZJ.js";import"./isEqual-Dlw3pN9M.js";import"./merge-CtnYmU5N.js";import"./util-CADoEE8R.js";import"./HelpPopover-DAWQhvMR.js";import"./MarkdownPopover-D0EzTcVa.js";import"./LightTooltip-DuUsgmiX.js";import"./MarkdownSynapse-CYo-0ZOf.js";import"./SkeletonButton-Bv3PLMpo.js";import"./SkeletonInlineBlock-C2D2gUdf.js";import"./SkeletonTable-uiFn16a6.js";import"./SkeletonParagraph-C21fkqN2.js";import"./HelpOutlineTwoTone-D_O_70Jn.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
