import{g as s}from"./entityHandlers-DOGtsplw.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-qUB1aosH.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-BgqGZAA_.js";import{g as a}from"./userProfileHandlers-B00yVNGu.js";import{P as N}from"./ProjectDataAvailability-Ca_yrLFl.js";import"./index-DgPvFeGd.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-BeElD8dP.js";import"./mockTeam-D0j8atbL.js";import"./SynapseConstants-0_JCnPTx.js";import"./OrientationBanner-AqWNQ2cQ.js";import"./jsx-runtime-CTFcVP1P.js";import"./index-DUHgmkzF.js";import"./iframe-D88NDgS-.js";import"./index-BTiUUTPa.js";import"./spreadSx-CwcO6WA9.js";import"./react-TPPcq5Zx.js";import"./FullWidthAlert-CJMDbx2q.js";import"./Alert-CrkNhfWZ.js";import"./createTheme-Bdh3JIYj.js";import"./resolveComponentProps-o_QiupMa.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DMC24a-E.js";import"./createSvgIcon-Dus-DnDq.js";import"./DefaultPropsProvider-idcb1ntx.js";import"./Close-DWmoeP58.js";import"./IconButton-CTUXzWkr.js";import"./ButtonBase-BNY22oX6.js";import"./useTimeout-B69MFxFS.js";import"./TransitionGroupContext-DHifbCKs.js";import"./useIsFocusVisible-DucQbIj6.js";import"./useEventCallback--EQ_6um4.js";import"./Paper-DvU1IbZk.js";import"./Stack-B6me4bCA.js";import"./getThemeProps-mddUnrqc.js";import"./useTheme-BhAWdgJj.js";import"./Box-DNw-4nBu.js";import"./AlertTitle-h8DRy4XN.js";import"./Typography-Q68JxFqv.js";import"./useTheme-DHihFqnY.js";import"./Grow-BhT6xGE8.js";import"./index-iHxUZM4O.js";import"./utils-BzYwzlkb.js";import"./ClickAwayListener-CwluvrFu.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-mDgrFK3A.js";import"./index-BOXVFOUz.js";import"./useControlled-B9n_Eohm.js";import"./useId-BMOO1Dfn.js";import"./Popper-CldeZf4a.js";import"./Button-CGHrnfkZ.js";import"./uniqueId-DVB0i654.js";import"./toString-GPGkMqLS.js";import"./isObjectLike-DqkFcfeQ.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-CP_pROhj.js";import"./times-Ysd5qLFi.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-gp162DtB.js";import"./mockTableEntity-DczSyXAT.js";import"./mockFileEntityACLVariants-DRcVnms2.js";import"./fakerUtils-DZU6we2B.js";import"./mockFileEntity-CeozCgs2.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-MPgIO47q.js";import"./mockSchema-DYVGtsTz.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-cylXlfny.js";import"./utils-q5k7caco.js";import"./Link-BDWzO4Vf.js";import"./Collapse-DeDDevjs.js";import"./isNil-BhKOR87a.js";import"./_Uint8Array--rSyjlV8.js";import"./_baseIsEqual-D916oHJq.js";import"./_getTag-BQeWtWW7.js";import"./tinycolor-Begke6kS.js";import"./Fade-CptzKgX_.js";import"./Skeleton-WYPrVBD7.js";import"./inputBaseClasses-DiG8IQq1.js";import"./calculateFriendlyFileSize-C7gYpacp.js";import"./CheckCircleTwoTone-D_2jRsql.js";import"./InfoTwoTone-C0zLsr-G.js";import"./mutation-DRMJLiUA.js";import"./dayjs.min-BHrDvJsX.js";import"./chunk-AYJ5UCUI-BWP3PEQF.js";import"./cloneDeep-Bydrfo_1.js";import"./_initCloneObject-B0ccDjP9.js";import"./isEqual-B8v4tGSU.js";import"./merge-BRZVeKvn.js";import"./util-BbFZRtfK.js";import"./HelpPopover-DgUX4EQl.js";import"./MarkdownPopover-C5SahIOb.js";import"./LightTooltip-B0aR6iX-.js";import"./MarkdownSynapse-B6cs1pqe.js";import"./useMutation-CZ3xWt1S.js";import"./SkeletonButton-BFtrwqG4.js";import"./SkeletonInlineBlock-Ci22Kb7G.js";import"./SkeletonTable-C5ymghLm.js";import"./SkeletonParagraph-BPhpQzZy.js";import"./HelpOutlineTwoTone-DgMd8qlM.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
