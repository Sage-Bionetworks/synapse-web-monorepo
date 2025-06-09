import{g as s}from"./entityHandlers-bkpvQ5Uy.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-BKoaRBy7.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-D3_4O8X-.js";import{g as a}from"./userProfileHandlers-7vETOKGe.js";import{P as N}from"./ProjectDataAvailability-CgbojliR.js";import"./index-BQag8sCG.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Do411xag.js";import"./mockTeam-CELSMvNb.js";import"./SynapseConstants-BAkIMR8-.js";import"./OrientationBanner-C4LioKg8.js";import"./jsx-runtime-JMjDAiku.js";import"./index-CZYh0tRp.js";import"./iframe-CCE2QgdW.js";import"./index-CbpQBUYj.js";import"./spreadSx-CwcO6WA9.js";import"./react-mnnoerZo.js";import"./FullWidthAlert-_xWROjSF.js";import"./Alert-DhU8zZuo.js";import"./createTheme-BsMgtWZT.js";import"./resolveComponentProps-CNbOM-P8.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DQdHfMmH.js";import"./createSvgIcon-BIs1E3cK.js";import"./DefaultPropsProvider-omTkMwKz.js";import"./Close-CXRj7muF.js";import"./IconButton-CB2yg_JS.js";import"./ButtonBase-B2wgZIDS.js";import"./useTimeout-BJT5itvQ.js";import"./TransitionGroupContext-l1GBX2CH.js";import"./useIsFocusVisible-CJXqI5Ok.js";import"./useEventCallback-CMwoN8rY.js";import"./Paper-CfNAfVct.js";import"./Stack-B6FqdQE3.js";import"./getThemeProps-DNrBl4wZ.js";import"./useTheme-knQsgu-L.js";import"./Box-CZfJ9FNL.js";import"./AlertTitle-CaGh6uKR.js";import"./Typography-CsnhBgcI.js";import"./useTheme-N2s54T76.js";import"./Grow-C4EvBoga.js";import"./index-C283ZE_A.js";import"./utils-D_mGwy7L.js";import"./ClickAwayListener-DChUe8a7.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DLYYTJAc.js";import"./index-CXLskV8c.js";import"./useControlled-BOEsG-Ke.js";import"./useId-sjHSV8uf.js";import"./Popper-CgUdf8Yp.js";import"./Button-Cbd-R7S0.js";import"./uniqueId-D4MtxxHB.js";import"./toString-UPy0TL2W.js";import"./isObjectLike-DXDyFbLA.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-D8Zw-095.js";import"./times-Creqe7cA.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Bm4GM7e8.js";import"./mockTableEntity-D52oCdlr.js";import"./mockFileEntityACLVariants-CkSrsaZj.js";import"./fakerUtils-DgWJQ8F3.js";import"./mockFileEntity-Be486MFX.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-DPp6HbWO.js";import"./mockSchema-BFZ1qvCn.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-B2W7WvCN.js";import"./utils-BTDD21Gu.js";import"./Link-BK0CPbSA.js";import"./Collapse-D7BpYLKk.js";import"./isNil-jJiu7qUq.js";import"./_Uint8Array-CRK6RbyJ.js";import"./_baseIsEqual-CCn7fuDD.js";import"./_getTag-CzbInwKL.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dsc-ng1t.js";import"./Skeleton-BD-shLg_.js";import"./inputBaseClasses-CzPMbH9V.js";import"./calculateFriendlyFileSize-Cls87z73.js";import"./CheckCircleTwoTone-BDkgaxM-.js";import"./InfoTwoTone-Dd48EZp1.js";import"./useMutation-Dl-XAcpb.js";import"./isEqual-BeXmNxMu.js";import"./dayjs.min-CPUkpIN-.js";import"./chunk-AYJ5UCUI-DhzNmnWU.js";import"./cloneDeep-D1htCpIz.js";import"./_initCloneObject-Bn1ipTO5.js";import"./merge-cNoXgvrO.js";import"./util-CPO4bASY.js";import"./HelpPopover-BWFkksrx.js";import"./MarkdownPopover-BRi2cBwb.js";import"./LightTooltip-Ca_meIUK.js";import"./MarkdownSynapse-DPVlc_dN.js";import"./SkeletonButton-KiqloEa3.js";import"./SkeletonInlineBlock-7xCamVgv.js";import"./SkeletonTable-Cf4FmdAM.js";import"./SkeletonParagraph-le08uM64.js";import"./HelpOutlineTwoTone-C5-4nG3I.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
