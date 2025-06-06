import{g as s}from"./entityHandlers-DUKsELAy.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-00zV7j3M.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-C8K9sEu5.js";import{g as a}from"./userProfileHandlers-Bzz_S5lZ.js";import{P as N}from"./ProjectDataAvailability-DyXSKEml.js";import"./index-De2pbzLE.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DbjFEgjZ.js";import"./mockTeam-iJfpgbxr.js";import"./SynapseConstants-DXxtZCNr.js";import"./OrientationBanner-CW_OwSoZ.js";import"./jsx-runtime-DqkftVdl.js";import"./index-DePaHtiF.js";import"./iframe-BROhmg6M.js";import"./index-s5f8zLZY.js";import"./spreadSx-CwcO6WA9.js";import"./react-ao0sqeqP.js";import"./FullWidthAlert-BxE7qCkE.js";import"./Alert-q_ZdLQQt.js";import"./createTheme-5Fe3luW2.js";import"./resolveComponentProps-B_dOnkEG.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DxGWz-nP.js";import"./createSvgIcon-BC6UvAwx.js";import"./DefaultPropsProvider-DjeLsGG1.js";import"./Close-ChuplZX6.js";import"./IconButton-BcbjXjc9.js";import"./ButtonBase-Do0JJz1c.js";import"./useTimeout-D5dvr_Gi.js";import"./TransitionGroupContext-DQEZvtFj.js";import"./useIsFocusVisible-DI2M56aP.js";import"./useEventCallback-BZ6D7d5A.js";import"./Paper-CB6CO99j.js";import"./Stack-HiEVvsaJ.js";import"./getThemeProps-f2sadzhq.js";import"./useTheme-U-7hfo9l.js";import"./Box-D9NrrPyX.js";import"./AlertTitle-ChAbcANF.js";import"./Typography-OD-ts1pz.js";import"./useTheme-CTLaU0Ir.js";import"./Grow-BU8iQ-gL.js";import"./index-CBZYBfor.js";import"./utils-CJvWoSDr.js";import"./ClickAwayListener-CUMsr3-e.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CuUlmnbr.js";import"./index-DXHrkCm3.js";import"./useControlled-BOD8q2oj.js";import"./useId-wERg8hog.js";import"./Popper-Cuj0UtxU.js";import"./Button-CvbUAx7X.js";import"./uniqueId-BG8ok7WD.js";import"./toString-BRV68jLP.js";import"./isObjectLike-BZYvinLn.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BnK3Mv-h.js";import"./times-0aa5VcsZ.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DnVIvjjA.js";import"./mockTableEntity-Dl-EQJYB.js";import"./mockFileEntityACLVariants-GUBdbNvs.js";import"./fakerUtils-CE3uWjIH.js";import"./mockFileEntity-BDUWm-eN.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-Ctzww8h5.js";import"./mockSchema-CpncPlrR.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Cm5Odpzo.js";import"./utils-BjkGJnUz.js";import"./Link-EHhEhz1_.js";import"./Collapse-B-I-lrDJ.js";import"./isNil-Dezvb9P5.js";import"./_Uint8Array-D-I36iIO.js";import"./_baseIsEqual-ByXVEM-G.js";import"./_getTag-BTItrKZg.js";import"./tinycolor-Begke6kS.js";import"./Fade-f--pyCs_.js";import"./Skeleton-B9nMYFge.js";import"./inputBaseClasses-CpJ0CZmE.js";import"./calculateFriendlyFileSize-BkKsHBWw.js";import"./CheckCircleTwoTone-_t8YNrIT.js";import"./InfoTwoTone-CcQ4P4q-.js";import"./useMutation-Du37KsLM.js";import"./isEqual-DMzBEPBa.js";import"./dayjs.min-DwUMv8zl.js";import"./chunk-AYJ5UCUI-CnSKK497.js";import"./cloneDeep-Be3a7qNY.js";import"./_initCloneObject-BDPs-veD.js";import"./merge-CMvw9-qj.js";import"./util-DaH-A7pK.js";import"./HelpPopover-BpNKGW7F.js";import"./MarkdownPopover-KjmWZSgE.js";import"./LightTooltip-C1nX7MIz.js";import"./MarkdownSynapse-Cs6g-S9w.js";import"./SkeletonButton-DYAGo3CI.js";import"./SkeletonInlineBlock-DrYX2Sn3.js";import"./SkeletonTable-DhrJmZ8y.js";import"./SkeletonParagraph-By1usgnb.js";import"./HelpOutlineTwoTone-BQw6pVym.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
