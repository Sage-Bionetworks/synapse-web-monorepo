import{g as s}from"./entityHandlers-Y9RExxeR.js";import{x as C,g as L,b6 as d,B as k,M as r}from"./useFiles-Dsa3u--j.js";import"./VerificationSubmission-DsgC4t7y.js";import"./StringUtils-tNCAfVhp.js";import{l as O}from"./index-Czsk-lzH.js";import{g as a}from"./userProfileHandlers-BJBnyTpC.js";import{P as N}from"./ProjectDataAvailability-tKLskpTb.js";import"./index-C9cHFmMJ.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-nNelj9J9.js";import"./mockTeam-D_yuGAOP.js";import"./SynapseConstants-BmRSEcUC.js";import"./OrientationBanner-B-arf4vv.js";import"./jsx-runtime-d_jSGfuW.js";import"./index-CsMIurHC.js";import"./iframe-BJUV8yd-.js";import"./index-C6EkIRZO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CLp1HUW8.js";import"./FullWidthAlert-g5VY_JP0.js";import"./Alert-BRIWNOtu.js";import"./createTheme-CXF9bY3g.js";import"./resolveComponentProps-BVjKbyvI.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Qy2WE2L8.js";import"./createSvgIcon-nJ4brtSX.js";import"./DefaultPropsProvider-BjdTxmMk.js";import"./Close-CcYrHUCv.js";import"./IconButton-Oayiszqv.js";import"./ButtonBase-BemfzaRk.js";import"./useTimeout-M7ILagoH.js";import"./TransitionGroupContext-BzjYJz1e.js";import"./useIsFocusVisible-CONob7Sg.js";import"./useEventCallback-BI5RiCjo.js";import"./Paper-BOIlBj0a.js";import"./Stack-B6pwuley.js";import"./getThemeProps-BkFfL3GX.js";import"./useTheme-Co028x8f.js";import"./Box-0w0QXb9q.js";import"./AlertTitle-BCj215so.js";import"./Typography-DI7kYxjv.js";import"./useTheme-DxaRAP13.js";import"./Grow-Cse7N1kt.js";import"./index-ZO1NugB6.js";import"./utils-CXikhHHF.js";import"./ClickAwayListener-BhXis3j3.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CuINGH26.js";import"./index-DioXFVDj.js";import"./useControlled-2RzUJcJv.js";import"./useId-BbVskIHx.js";import"./Popper-Dpp_HX4T.js";import"./Button-S6YMXMba.js";import"./uniqueId-DoD0QRy_.js";import"./toString-TA4EATTq.js";import"./isObjectLike-htAwhsM6.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-CTVE5bUB.js";import"./times-BmLsJreT.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CatpUP2F.js";import"./mockTableEntity-B_oxIbkJ.js";import"./mockFileEntityACLVariants-9atThEDH.js";import"./fakerUtils-DyiUOOFZ.js";import"./mockFileEntity-BzIuoyv1.js";import"./mock_file_handle-DS_yjaGE.js";import"./mockEntity-CE5yVtl0.js";import"./mockSchema-CeQHtDmO.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-D3ZPFprG.js";import"./utils-C7K2lhfB.js";import"./Link-6Al-Fqj4.js";import"./Collapse-BHgec6F8.js";import"./isNil-SZ1XCHa2.js";import"./_Uint8Array-Qz23elJ2.js";import"./_baseIsEqual-DpmEyEs-.js";import"./_getTag-CR_tant5.js";import"./tinycolor-Begke6kS.js";import"./Fade-BMnops2P.js";import"./Skeleton-wblQ7WdV.js";import"./inputBaseClasses-CsqekATJ.js";import"./calculateFriendlyFileSize-C5bVMG5e.js";import"./CheckCircleTwoTone-C73kqWtj.js";import"./InfoTwoTone-Ds0ttC-r.js";import"./mutation-CpK9fLVW.js";import"./dayjs.min-h1P3Bc9m.js";import"./chunk-AYJ5UCUI-CJN4kzPf.js";import"./cloneDeep-DjuOrVDN.js";import"./_initCloneObject-DutgCJVD.js";import"./isEqual-DjXGrVN1.js";import"./merge-DlMI-LlY.js";import"./util-Dw5g-8BS.js";import"./HelpPopover-DMWnnF-n.js";import"./MarkdownPopover-Du9avExH.js";import"./LightTooltip-B7bvdrNB.js";import"./MarkdownSynapse-Bplz6Xi1.js";import"./useMutation-DDvEyqjo.js";import"./SkeletonButton-BbgqHJzb.js";import"./SkeletonInlineBlock-Br8kD0JA.js";import"./SkeletonTable-8F8y6Hkc.js";import"./SkeletonParagraph-Cvq575Hf.js";import"./HelpOutlineTwoTone-CfkATvzo.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
