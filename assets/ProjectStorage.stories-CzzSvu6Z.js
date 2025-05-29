import{g as s}from"./entityHandlers-Bs96JZJF.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-DsFYUvgk.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-Df-lSvwk.js";import{g as a}from"./userProfileHandlers-C6BS-IAG.js";import{P as N}from"./ProjectDataAvailability-BsF5WB2x.js";import"./index-8JuYQ9-j.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CuKyy7IA.js";import"./mockTeam-B5qyUQtt.js";import"./SynapseConstants-WdyYb7Om.js";import"./OrientationBanner-Db5b4wt6.js";import"./jsx-runtime-DkbpurNs.js";import"./index-BWTz5das.js";import"./iframe-CIwcPPSS.js";import"./index-WdIyC9zy.js";import"./spreadSx-CwcO6WA9.js";import"./react-B92lp8oH.js";import"./FullWidthAlert-CV5VqY0G.js";import"./Alert-oO57gt13.js";import"./createTheme-A3wdy6CE.js";import"./resolveComponentProps-D-CanUzl.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D76_CRuH.js";import"./createSvgIcon-D1wrlE5j.js";import"./DefaultPropsProvider-ByOVQs-n.js";import"./Close-B0Wd8leo.js";import"./IconButton-4eAf36A2.js";import"./ButtonBase-BhLDaX_S.js";import"./useTimeout-vSjzk-Un.js";import"./TransitionGroupContext-C__s9c2O.js";import"./useIsFocusVisible-FsgV9KWa.js";import"./useEventCallback-Bwqph7YH.js";import"./Paper-C9rqLEV4.js";import"./Stack-bl7kY2rD.js";import"./getThemeProps-DZ0VtK3w.js";import"./useTheme--XQLJcej.js";import"./Box-oS9X8DmL.js";import"./AlertTitle-DXMw9tkm.js";import"./Typography-C9RmHiWH.js";import"./useTheme-BWFniEYL.js";import"./Grow-CF1islW1.js";import"./index-CWlTKyso.js";import"./utils-CnscWP4i.js";import"./ClickAwayListener-KlaQc122.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-AOG27yeN.js";import"./index-BF7XAVzO.js";import"./useControlled-BZcNW5Fh.js";import"./useId-CWMqiBBO.js";import"./Popper-mjGHPHZJ.js";import"./Button-iLozBQyn.js";import"./uniqueId-B5ecwVFo.js";import"./toString-2F-XAeAH.js";import"./isObjectLike-BtYs4CQI.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-z04EB1x3.js";import"./times-D-oxzHKh.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-B5iDNIpg.js";import"./mockTableEntity-DY_VRM5H.js";import"./mockFileEntityACLVariants-DoSybJjU.js";import"./fakerUtils-jQ0Bf5Kb.js";import"./mockFileEntity-B2xRGeo7.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-DjaH2BgM.js";import"./mockSchema-XdPWUaJP.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DcrUW3Ia.js";import"./utils-D0Sn12cL.js";import"./Link-DpF5ZODC.js";import"./Collapse-C3IE9BnM.js";import"./isNil-SLuPmgyU.js";import"./_Uint8Array-dFMtMdky.js";import"./_baseIsEqual-CSEyos6D.js";import"./_getTag-9L9wrwHR.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cf5YgOGZ.js";import"./Skeleton-CjiSKKcr.js";import"./inputBaseClasses-B_tp1BOw.js";import"./calculateFriendlyFileSize-DFfVqf0N.js";import"./CheckCircleTwoTone-CXzQKqsF.js";import"./InfoTwoTone-B5Z1IoZb.js";import"./mutation-DVozW0ZS.js";import"./dayjs.min-BwO3N9YX.js";import"./chunk-AYJ5UCUI-Dw2DX1gQ.js";import"./cloneDeep-Bc5O_UuE.js";import"./_initCloneObject-B99hApBY.js";import"./isEqual-BTEFoVlQ.js";import"./merge-BKuaLmoA.js";import"./util-B9HYC58D.js";import"./HelpPopover-eyILxfOc.js";import"./MarkdownPopover-BRVzVo64.js";import"./LightTooltip-CxqzCIMg.js";import"./MarkdownSynapse-Cors3dqY.js";import"./useMutation-C6BvrXXS.js";import"./SkeletonButton-DIk8ysAH.js";import"./SkeletonInlineBlock-D41IW_XW.js";import"./SkeletonTable-BO641YUo.js";import"./SkeletonParagraph-uvExlbzX.js";import"./HelpOutlineTwoTone-DkRxxb5B.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
