import{g as s}from"./entityHandlers-DHOxt3gI.js";import{x as C,g as L,b6 as d,B as k,M as r}from"./useFiles-CEIeiagI.js";import"./VerificationSubmission-DsgC4t7y.js";import"./StringUtils-tNCAfVhp.js";import{l as O}from"./index-C9AWhNST.js";import{g as a}from"./userProfileHandlers-B75faFqt.js";import{P as N}from"./ProjectDataAvailability-CEH1kuHl.js";import"./index-CmU09LJz.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CS3cwNi-.js";import"./mockTeam-CMmoXApk.js";import"./SynapseConstants-zKFIzren.js";import"./OrientationBanner-Dd3gjuUa.js";import"./jsx-runtime-BK5U4Ogm.js";import"./index-Di6pL9sS.js";import"./iframe-BcMO-NRu.js";import"./index-B46zhNA6.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJTyKqpK.js";import"./FullWidthAlert-CErQ6Muc.js";import"./Alert-HUDZRYOW.js";import"./createTheme-Cp4i8P3j.js";import"./resolveComponentProps-BcPJL9MH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CDRx8QSv.js";import"./createSvgIcon-6f5z08nh.js";import"./DefaultPropsProvider-jCgqZX_L.js";import"./Close-D3QPaLjh.js";import"./IconButton-C0uO2agS.js";import"./ButtonBase-CBxmSsKP.js";import"./useTimeout-Bk2aBz7o.js";import"./TransitionGroupContext-D2Egnh2Q.js";import"./useIsFocusVisible-Dwuhnw_i.js";import"./useEventCallback-pwXQXOzV.js";import"./Paper-CE1mL2qJ.js";import"./Stack-BWSA6lgs.js";import"./getThemeProps-Dfs0VSTM.js";import"./useTheme-6ADmrWxD.js";import"./Box-CgFRiWSE.js";import"./AlertTitle-COi1QU0e.js";import"./Typography-DdVpYyJT.js";import"./useTheme-BJOxI8Pz.js";import"./Grow-BJi-xmc6.js";import"./index-BlWCVmXL.js";import"./utils-Bm34yggg.js";import"./ClickAwayListener-Bzi36C9_.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BGdElWBC.js";import"./index-UlGlXuF6.js";import"./useControlled-ctFy0C0l.js";import"./useId-Kr4560Rl.js";import"./Popper-C7mrmf4N.js";import"./Button-CS3Qxzkw.js";import"./uniqueId-DxyV27yy.js";import"./toString-DfeI3u70.js";import"./isObjectLike-uDeW5XEe.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-yfk4cHuf.js";import"./times-CNi-HedE.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Cl49Tuw_.js";import"./mockTableEntity-ISVr1kZm.js";import"./mockFileEntityACLVariants-BbNdQ1p-.js";import"./fakerUtils-BY6AqufB.js";import"./mockFileEntity-BR23M2U7.js";import"./mock_file_handle-DS_yjaGE.js";import"./mockEntity-B5hnl9MH.js";import"./mockSchema-DPA_m7Mw.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Bp4ICN7A.js";import"./utils-T3gzeC7B.js";import"./Link-DCsN9Cs6.js";import"./Collapse-S9FTNTmT.js";import"./isNil-BZDfliEp.js";import"./_Uint8Array-DGhKdq-D.js";import"./_baseIsEqual-4Tr9waQ7.js";import"./_getTag-BrZ1c84X.js";import"./tinycolor-Begke6kS.js";import"./Fade-CHZVGOkF.js";import"./Skeleton-GFVDgsi6.js";import"./inputBaseClasses-Dy6ALZto.js";import"./calculateFriendlyFileSize-rchZGA0L.js";import"./CheckCircleTwoTone-CoVF2IX7.js";import"./InfoTwoTone-Cv6-lHeT.js";import"./mutation-CGeFCzcu.js";import"./dayjs.min-C22uDXZr.js";import"./chunk-AYJ5UCUI-tVdleHmn.js";import"./cloneDeep-DvV4HJnE.js";import"./_initCloneObject-DVxuy2j7.js";import"./isEqual-D21U_Xmz.js";import"./merge-4Yp0APiD.js";import"./util-smBHTrN2.js";import"./HelpPopover-CkgQLrWw.js";import"./MarkdownPopover-D8rSWWut.js";import"./LightTooltip-CP18Pbi2.js";import"./MarkdownSynapse-CP01qzTk.js";import"./useMutation--wrYgfEN.js";import"./SkeletonButton-ETrZReht.js";import"./SkeletonInlineBlock-DzHFfK7H.js";import"./SkeletonTable-D2QpQITf.js";import"./SkeletonParagraph-DH0l2XC1.js";import"./HelpOutlineTwoTone-DMIYYtV5.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
