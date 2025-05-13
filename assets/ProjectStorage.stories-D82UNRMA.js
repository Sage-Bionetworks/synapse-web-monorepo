import{g as s}from"./entityHandlers-Bj3h8urK.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-YWmmbZpp.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-BQofMx1G.js";import{g as a}from"./userProfileHandlers-BA8P-jh0.js";import{P as N}from"./ProjectDataAvailability-BYwcZpRC.js";import"./index-ChzcnzHF.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DqodxaP9.js";import"./mockTeam-CO2ZLbtR.js";import"./SynapseConstants-CnrTnmux.js";import"./OrientationBanner-npM_DAfi.js";import"./jsx-runtime-BotgeFwT.js";import"./index-BmHOuB5_.js";import"./iframe-DmkXVs35.js";import"./index-BJgwkqhp.js";import"./spreadSx-CwcO6WA9.js";import"./react-aMpCzbk9.js";import"./FullWidthAlert-DjX9Mevx.js";import"./Alert-BLpP3v3-.js";import"./createTheme-Dc38ti7g.js";import"./resolveComponentProps-DrsR2GgO.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-88GE3SiY.js";import"./createSvgIcon-C_8Qv0R-.js";import"./DefaultPropsProvider-DEc5OxJn.js";import"./Close-6gD9trmr.js";import"./IconButton-kd3QgWK8.js";import"./ButtonBase-B52ubW7h.js";import"./useTimeout-BOP_xpZf.js";import"./TransitionGroupContext-BqBTwtnY.js";import"./useIsFocusVisible-TkDIjfto.js";import"./useEventCallback-CjAGHQTa.js";import"./Paper-B7_Z-2Tf.js";import"./Stack-BFmS--Ta.js";import"./getThemeProps-n6ESmhoJ.js";import"./useTheme-DExkflWm.js";import"./Box-XMBgXLk7.js";import"./AlertTitle-BPtjEeV0.js";import"./Typography-D37JOTkb.js";import"./useTheme-CbDAVqIb.js";import"./Grow-DtJN852e.js";import"./index-DhnVKWT6.js";import"./utils-CYEEhIBi.js";import"./ClickAwayListener-ERiY_cle.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DBTVbtNi.js";import"./index-BAuhL-tv.js";import"./useControlled-BNPn1a16.js";import"./useId-v77cI_FZ.js";import"./Popper-CdSbBsOI.js";import"./Button-VHXrIHUx.js";import"./uniqueId-C8M0zGKe.js";import"./toString-CADLfgD7.js";import"./isObjectLike-CWYzZSfP.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-B9gLo0gN.js";import"./times-Bc7_9mOU.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DjXm62Ax.js";import"./mockTableEntity-CuT3iBBJ.js";import"./mockFileEntityACLVariants-ftTQOlDF.js";import"./fakerUtils-DMj_lHrA.js";import"./mockFileEntity-XCHPplZ0.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-BwLQTfDT.js";import"./mockSchema-Bq_UG_qk.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Csyq51Xr.js";import"./utils-PqR9SzMK.js";import"./Link-DvEm6E_0.js";import"./Collapse-CMoxLgNk.js";import"./isNil-D9M1sZm8.js";import"./_Uint8Array-CGacEQoi.js";import"./_baseIsEqual-DFrETrYV.js";import"./_getTag-CopO-oHq.js";import"./tinycolor-Begke6kS.js";import"./Fade-QisYz2mh.js";import"./Skeleton-_Who98MO.js";import"./inputBaseClasses-DCAmaP-g.js";import"./calculateFriendlyFileSize-BJC9cAcp.js";import"./CheckCircleTwoTone-98ZzfJ5I.js";import"./InfoTwoTone-CB73o47l.js";import"./mutation-BijGxgKZ.js";import"./dayjs.min-Bb5G5LaH.js";import"./chunk-AYJ5UCUI-CmA7Kmoy.js";import"./cloneDeep-BTdt0L8H.js";import"./_initCloneObject-BV2YsZzp.js";import"./isEqual-CY8rJ0kx.js";import"./merge-selKAKi3.js";import"./util-D4XGW-8a.js";import"./HelpPopover-DDcISVnF.js";import"./MarkdownPopover-pvhnTLI2.js";import"./LightTooltip-DPyzVArV.js";import"./MarkdownSynapse-B3vtHfsh.js";import"./SkeletonButton-DHvCiuXj.js";import"./SkeletonInlineBlock-D2OeqMB6.js";import"./SkeletonTable-DSRBUUd4.js";import"./SkeletonParagraph-dO_VX218.js";import"./HelpOutlineTwoTone-DIHmcg9Y.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
