import{g as s}from"./entityHandlers-D5Ri-NGx.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-CljrymEZ.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-D88kfWru.js";import{g as a}from"./userProfileHandlers-DdggqzXt.js";import{P as N}from"./ProjectDataAvailability-DhpQUaCm.js";import"./index-DktpjRql.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BfzMa8NZ.js";import"./mockTeam-DH4kiTRF.js";import"./SynapseConstants-Dph5rBQn.js";import"./OrientationBanner-CjgChWnG.js";import"./jsx-runtime-waCBpRoR.js";import"./index-h_UnLfo6.js";import"./iframe-680MXZqt.js";import"./index-BMF_L9R3.js";import"./spreadSx-CwcO6WA9.js";import"./react-DU91D3nF.js";import"./FullWidthAlert-Cw5CPwRv.js";import"./Alert-B6mldulx.js";import"./createTheme-5D4Rqrxe.js";import"./resolveComponentProps-BKsis4FC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-jxbZ-E30.js";import"./createSvgIcon-CIPClKme.js";import"./DefaultPropsProvider-DQ5Mk1U-.js";import"./Close-CKkBBbGC.js";import"./IconButton-DJmlOxBU.js";import"./ButtonBase-6YJIww5y.js";import"./useTimeout-J1ckvgE6.js";import"./TransitionGroupContext-De44v-j0.js";import"./useIsFocusVisible-B6_ekAN2.js";import"./useEventCallback-BKViiGwn.js";import"./Paper-CYKweuiV.js";import"./Stack-Dn8ZLNgz.js";import"./getThemeProps-LgoUfpsB.js";import"./useTheme-DyhUS_Ki.js";import"./Box-CT_1nrVQ.js";import"./AlertTitle-Bcq6TdWa.js";import"./Typography-CZ9ALj71.js";import"./useTheme-ClgfWb4r.js";import"./Grow-5pvfAIWM.js";import"./index-B6LkEjhj.js";import"./utils-PWlZfzHj.js";import"./ClickAwayListener-CXap0MMj.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DDSuOHr6.js";import"./index-CJ_vAaO1.js";import"./useControlled-C_NVhIqR.js";import"./useId-C-rjosBi.js";import"./Popper-DCTk9ede.js";import"./Button-5JJ-GHl5.js";import"./uniqueId-DbMziyOn.js";import"./toString-CGj-Smq8.js";import"./isObjectLike-BOvvXJEh.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DbZKyWlb.js";import"./times-pUo71Ydm.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DvpKJ1NE.js";import"./mockTableEntity-B8OlVn50.js";import"./mockFileEntityACLVariants-BbErmbUc.js";import"./fakerUtils-DsJvyGfT.js";import"./mockFileEntity-Dhwl5Czw.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-DJl3ibgN.js";import"./mockSchema-DnBFIhmo.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Dh1LhL3I.js";import"./utils-Y4zdJIeZ.js";import"./Link-BiQG15cz.js";import"./Collapse-D3hOgT8-.js";import"./isNil-fMBoSKa1.js";import"./_Uint8Array-Cpy_aadF.js";import"./_baseIsEqual-XAMHD0zM.js";import"./_getTag-hz2soytL.js";import"./tinycolor-Begke6kS.js";import"./Fade-CCgcWxTC.js";import"./Skeleton-C0ymAZsd.js";import"./inputBaseClasses-DkacoV0o.js";import"./calculateFriendlyFileSize-eQ_8oMwZ.js";import"./CheckCircleTwoTone-DYQ4blk1.js";import"./InfoTwoTone-DuJaAHyI.js";import"./useMutation-BS5_YSRi.js";import"./isEqual-CHZ16x6I.js";import"./dayjs.min-DQJjIQJ-.js";import"./chunk-AYJ5UCUI-C9ZxOBGw.js";import"./cloneDeep-D36itDQt.js";import"./_initCloneObject-DmY_Sjqn.js";import"./merge-psQUmM5Q.js";import"./util-B3gLSLDI.js";import"./HelpPopover-IvDJzxl5.js";import"./MarkdownPopover-DqRdZ0xp.js";import"./LightTooltip-C_YSXTl3.js";import"./MarkdownSynapse-BSQKTB-z.js";import"./SkeletonButton-FeirKhlZ.js";import"./SkeletonInlineBlock-DI4_IQHD.js";import"./SkeletonTable-Ba322s94.js";import"./SkeletonParagraph-5sb__CHL.js";import"./HelpOutlineTwoTone-BFtwQ4DQ.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
