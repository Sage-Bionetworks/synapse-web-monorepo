import{g as s}from"./entityHandlers-szpW7CcS.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-BPoIposu.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-B4PPGz__.js";import{g as a}from"./userProfileHandlers-XNaE_NB6.js";import{P as N}from"./ProjectDataAvailability-CbiQ0S7H.js";import"./index-BJbEl-Lc.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-B_B9RkMH.js";import"./mockTeam-CZf_dOeS.js";import"./SynapseConstants-Co29NLrI.js";import"./OrientationBanner-DRQjh_MY.js";import"./jsx-runtime-LNM4Hejx.js";import"./index-DI_-ITWc.js";import"./iframe-ErXbxx3w.js";import"./index-CD5x-CbF.js";import"./spreadSx-CwcO6WA9.js";import"./react-BLqU1nHD.js";import"./FullWidthAlert-BlqPbpC2.js";import"./Alert-o68bsglQ.js";import"./createTheme-sB52mbFJ.js";import"./resolveComponentProps-DlsEIkau.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D0dHJyLT.js";import"./createSvgIcon-BabHNiX3.js";import"./DefaultPropsProvider-ChxiI4tD.js";import"./Close-D04djKOd.js";import"./IconButton-DkBpEf1n.js";import"./ButtonBase-D9zLenAD.js";import"./useTimeout-6YIBQPj9.js";import"./TransitionGroupContext-BGgxAqlU.js";import"./useIsFocusVisible-CWvvQ-6-.js";import"./useEventCallback-NTkNzc19.js";import"./Paper-CzKkmbxx.js";import"./Stack-D9O3g525.js";import"./getThemeProps-DY7O4lpQ.js";import"./useTheme-3YwHPNMg.js";import"./Box-Cg8lPZ83.js";import"./AlertTitle-e5BQ4RFh.js";import"./Typography-DUwsUFQN.js";import"./useTheme-BozbJXxT.js";import"./Grow-D0VNHdtZ.js";import"./index-DsE0iHI0.js";import"./utils-BVDP6cr7.js";import"./ClickAwayListener-CUt7s9Wn.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BZf81u0W.js";import"./index-JLvMmP38.js";import"./useControlled-McMF_b3B.js";import"./useId-DiOQhoCr.js";import"./Popper-D3ZELG7b.js";import"./Button-uqPkG0PN.js";import"./uniqueId-FvNdEXAY.js";import"./toString-BhYAZCcC.js";import"./isObjectLike-CP11Nt3b.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-cxeMPdPI.js";import"./times-CGYgpp14.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-B090yKnE.js";import"./mockTableEntity-SDEJXCQV.js";import"./mockFileEntityACLVariants-DpGxmubD.js";import"./fakerUtils-CB7x6vWB.js";import"./mockFileEntity-BUMfXN_c.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-BQCAUAP-.js";import"./mockSchema--9p5M9AI.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DdP-4ZWu.js";import"./utils-7cibFwkE.js";import"./Link-CxuEV2Yw.js";import"./Collapse-N8WMS6vY.js";import"./isNil-BEf8rUeE.js";import"./_Uint8Array-HMlgB7ZY.js";import"./_baseIsEqual-DJtys-Lc.js";import"./_getTag-ptAFXIl0.js";import"./tinycolor-Begke6kS.js";import"./Fade-DlIjUiqW.js";import"./Skeleton-BOEt5rPK.js";import"./inputBaseClasses-VMJC09Vq.js";import"./calculateFriendlyFileSize-OXtYuuA2.js";import"./CheckCircleTwoTone-CQvsTgIk.js";import"./InfoTwoTone-d5FlF0um.js";import"./mutation-C-nVhw6S.js";import"./dayjs.min-C7AVYoqE.js";import"./chunk-AYJ5UCUI-B0w41TpG.js";import"./cloneDeep-DrP4XaFY.js";import"./_initCloneObject-DNtUqdhE.js";import"./isEqual-VzErT_1H.js";import"./merge-BbKHlK4b.js";import"./util-r1NPpGU4.js";import"./HelpPopover-BOSrcnXb.js";import"./MarkdownPopover-Y70GtfQA.js";import"./LightTooltip-DyKWEasL.js";import"./MarkdownSynapse-DqKnf0-j.js";import"./SkeletonButton-BN5OP7nr.js";import"./SkeletonInlineBlock-CwjAAzLY.js";import"./SkeletonTable-D2rGOraL.js";import"./SkeletonParagraph-BJ2IbWRb.js";import"./HelpOutlineTwoTone-iAJGy8n_.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
