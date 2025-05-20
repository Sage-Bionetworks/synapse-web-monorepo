import{g as s}from"./entityHandlers-BwmKXdCk.js";import{x as C,g as L,ba as d,B as k,M as r}from"./useFiles-DxEFRl-N.js";import"./VerificationSubmission-B0kBNeMy.js";import"./StringUtils-CzgJJW-6.js";import{l as O}from"./index-Bjvko-XC.js";import{g as a}from"./userProfileHandlers-OECk5OjL.js";import{P as N}from"./ProjectDataAvailability-DL1s4-L3.js";import"./index-BcXxcpF6.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CtkMX8E8.js";import"./mockTeam-BZngCltQ.js";import"./SynapseConstants-x7wBmLwm.js";import"./OrientationBanner-lGnlzz1n.js";import"./jsx-runtime-DNP5ZHPF.js";import"./index-C9LqO53Z.js";import"./iframe-DzZkUbt0.js";import"./index-DNCRZXKi.js";import"./spreadSx-CwcO6WA9.js";import"./react-LeG2f8XJ.js";import"./FullWidthAlert-XMCCRjsq.js";import"./Alert-DBftbUxX.js";import"./createTheme-BG9REND8.js";import"./resolveComponentProps-DJsKa-oF.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D7H_VIUT.js";import"./createSvgIcon-BtT08fNl.js";import"./DefaultPropsProvider-CBoC3p-_.js";import"./Close-BrzxmRIz.js";import"./IconButton-HsPug_ob.js";import"./ButtonBase-C0iYjrZq.js";import"./useTimeout-9s3akjMN.js";import"./TransitionGroupContext-CdwE7o-d.js";import"./useIsFocusVisible-C4iYqwwm.js";import"./useEventCallback-CFsLaU7U.js";import"./Paper-BZJIjrog.js";import"./Stack-C3Yli3Do.js";import"./getThemeProps-CmxBhP06.js";import"./useTheme-Dqg7276U.js";import"./Box-DhP9mjg7.js";import"./AlertTitle-CFko3bX9.js";import"./Typography-BdVBJyiw.js";import"./useTheme-DaIKVKIj.js";import"./Grow-BEsXXeLg.js";import"./index-B7SGfn2n.js";import"./utils-Bn3sr0WI.js";import"./ClickAwayListener-CiZf8GXf.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip--gcNUJrW.js";import"./index-DfJVQJTe.js";import"./useControlled-C6FPOIeJ.js";import"./useId-Bp9otoFB.js";import"./Popper-wFK3a8ms.js";import"./Button-C1D6jijN.js";import"./uniqueId-CTU4ZW8o.js";import"./toString-Drlpq-aN.js";import"./isObjectLike-BAT6WrGj.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-CR6CJbsv.js";import"./times-ChNYGLHd.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-NHA3mITb.js";import"./mockTableEntity-DOIjzTTt.js";import"./mockFileEntityACLVariants-D2qcGLCO.js";import"./fakerUtils-CSpFUtg1.js";import"./mockFileEntity-DuzIyfbJ.js";import"./mock_file_handle-Ct1MSfYs.js";import"./mockEntity-nC9b67GB.js";import"./mockSchema-BKN4s8C7.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Drm9MnN6.js";import"./utils-Dge9E0v5.js";import"./Link-BP8bljuP.js";import"./Collapse-DAEF_CSM.js";import"./isNil-C_6EL5i8.js";import"./_Uint8Array-CYf3IgYh.js";import"./_baseIsEqual-DUOouxQQ.js";import"./_getTag-DKMcyan0.js";import"./tinycolor-Begke6kS.js";import"./Fade-BS8huG_s.js";import"./Skeleton-X6vAixA1.js";import"./inputBaseClasses-Cvq7yWxw.js";import"./calculateFriendlyFileSize-FpJgzzI_.js";import"./CheckCircleTwoTone-DooSA5RY.js";import"./InfoTwoTone-BUvN6rod.js";import"./mutation-DZbFfGts.js";import"./dayjs.min-DYHBVdyC.js";import"./chunk-AYJ5UCUI-BAVTTsGw.js";import"./cloneDeep-DGtsa-PL.js";import"./_initCloneObject-BZtj6YT_.js";import"./isEqual-CyOrkakg.js";import"./merge-CAVgou7m.js";import"./util-D0jHV5TN.js";import"./HelpPopover-CuENmKTA.js";import"./MarkdownPopover-BYIzAOpc.js";import"./LightTooltip-CmYRAIyM.js";import"./MarkdownSynapse-BeO0RyoA.js";import"./SkeletonButton-BK7YgQCa.js";import"./SkeletonInlineBlock-D4jApRcZ.js";import"./SkeletonTable-Bik19zmH.js";import"./SkeletonParagraph-DK8LxRG0.js";import"./HelpOutlineTwoTone-Bz7TfZfC.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
