import{g as s}from"./entityHandlers-enlgHYmA.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-D_KC07Yn.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-CTOevsR-.js";import{g as a}from"./userProfileHandlers-BzsV9jC2.js";import{P as N}from"./ProjectDataAvailability-D6io4Ff8.js";import"./index-CZUp8uNp.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-Bjh-3P1q.js";import"./mockTeam-D1Opiixd.js";import"./SynapseConstants-fzgxL-Wk.js";import"./OrientationBanner-D4K1PXbS.js";import"./jsx-runtime-CsNpV52b.js";import"./index-mFk7i4GH.js";import"./iframe-DEOEZpa7.js";import"./index-BuZNpAEX.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAmm9IRN.js";import"./FullWidthAlert-DBUNX5Z0.js";import"./Alert-BxOYpbq5.js";import"./createTheme-C3barXkp.js";import"./resolveComponentProps-fT-xUJV6.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-5vJwFTIC.js";import"./createSvgIcon-DxSwOgMO.js";import"./DefaultPropsProvider-Bb4a2h8s.js";import"./Close-DHLyXVKW.js";import"./IconButton-CQuDWsyU.js";import"./ButtonBase-CRJlWVnj.js";import"./useTimeout-D6spdY7I.js";import"./TransitionGroupContext-Dt8W7umX.js";import"./useIsFocusVisible-BD-HS5zK.js";import"./useEventCallback-PvtZRVx5.js";import"./Paper-BzD9Caoq.js";import"./Stack-CFcOoEe3.js";import"./getThemeProps-Dtctgm80.js";import"./useTheme-N8XaFENF.js";import"./Box-D1r6O6zj.js";import"./AlertTitle-BjYPAFw4.js";import"./Typography-BaVgdRVq.js";import"./useTheme-0AVLLlD6.js";import"./Grow-BBkh1Ns9.js";import"./index-C3e2HYL3.js";import"./utils-Bd5lfNuN.js";import"./ClickAwayListener-DCBWfrxW.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-JlwuiT4k.js";import"./index-Dyubesn9.js";import"./useControlled-DdQGOSQo.js";import"./useId-B7w4jRC1.js";import"./Popper-Dj3tlAHp.js";import"./Button-D1O-XNc3.js";import"./uniqueId-BHP-G4Q6.js";import"./toString-C_9Aa7ya.js";import"./isObjectLike-ysIE1Q2w.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BD4zGCJ0.js";import"./times-DBoDqrm8.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DXGJpQee.js";import"./mockTableEntity-CKl7QVdL.js";import"./mockFileEntityACLVariants-BmdHC9JH.js";import"./fakerUtils-CmvKSEIA.js";import"./mockFileEntity-CHjiDt6Z.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-A43lSoos.js";import"./mockSchema-3lxjVF9D.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Tl1FAVUS.js";import"./utils-Dft4bglm.js";import"./Link-DVKciDBj.js";import"./Collapse-Dxre2Wpg.js";import"./isNil-BBBzVpoC.js";import"./_Uint8Array-gbqBABgH.js";import"./_baseIsEqual-Bwmz0e7V.js";import"./_getTag-d-X6q6ru.js";import"./tinycolor-Begke6kS.js";import"./Fade-Co4SyzRo.js";import"./Skeleton-BZAwj2-9.js";import"./inputBaseClasses-CQNINzSQ.js";import"./calculateFriendlyFileSize-Dk0vHyM_.js";import"./CheckCircleTwoTone-CNETuQEN.js";import"./InfoTwoTone-Cv4uWze4.js";import"./mutation-CVFNbaq8.js";import"./dayjs.min-C2vS6YTT.js";import"./chunk-AYJ5UCUI-c6JhkQ8h.js";import"./cloneDeep-Ds3WadWA.js";import"./_initCloneObject-BEqGcqh-.js";import"./isEqual-Bj0Ibk1q.js";import"./merge-oP5qKHGM.js";import"./util-x2Av4eUw.js";import"./HelpPopover-C861hDv8.js";import"./MarkdownPopover-KdVCxlvC.js";import"./LightTooltip-Be90ijMQ.js";import"./MarkdownSynapse-BmbYr6l5.js";import"./SkeletonButton-CfRPp5en.js";import"./SkeletonInlineBlock-DPJPf2BH.js";import"./SkeletonTable-DMGCE8A1.js";import"./SkeletonParagraph-DqecZcP5.js";import"./HelpOutlineTwoTone-BxiQk_qX.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
