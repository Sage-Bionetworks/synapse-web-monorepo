import{g as s}from"./entityHandlers-BlYJxuD8.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-Bka2L5ox.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-Cf9XCdl0.js";import{g as a}from"./userProfileHandlers-Bazwwr9e.js";import{P as N}from"./ProjectDataAvailability-DnptmyQy.js";import"./index-DNrg_xZz.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CWyBqviQ.js";import"./mockTeam-DRy7EJgZ.js";import"./SynapseConstants-Bwu0qB46.js";import"./OrientationBanner-DXkttNGr.js";import"./jsx-runtime-DyzG1hwI.js";import"./index-CrSrYSTF.js";import"./iframe-CMGcwyU8.js";import"./index-qI3IIQ-p.js";import"./spreadSx-CwcO6WA9.js";import"./react-O48Z7vaA.js";import"./FullWidthAlert-rjMyFGK6.js";import"./Alert-Cm8kQflu.js";import"./createTheme-Is747m2y.js";import"./resolveComponentProps-DyjLIVKx.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C8M4wLUf.js";import"./createSvgIcon-CUNVkehu.js";import"./DefaultPropsProvider-DWF5CBcq.js";import"./Close-B9m6eLPP.js";import"./IconButton-DHpv-rlf.js";import"./ButtonBase-Btia2eQe.js";import"./useTimeout-CaiJjEK4.js";import"./TransitionGroupContext-DxZXjnHx.js";import"./useIsFocusVisible-BTCzTTr7.js";import"./useEventCallback-DHPME8kn.js";import"./Paper-BwPqQmBI.js";import"./Stack-DknzwWm6.js";import"./getThemeProps-B56GMEUH.js";import"./useTheme-C0i1PFNN.js";import"./Box-1gY1bGlg.js";import"./AlertTitle-1VF7a4z7.js";import"./Typography-DzUle5GT.js";import"./useTheme-DhD4Q8NU.js";import"./Grow-BUmN-gNH.js";import"./index-CAg7QE2R.js";import"./utils-D7M9m_8l.js";import"./ClickAwayListener-DxQfJRP3.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BwMDWNOg.js";import"./index-HDNDhk7k.js";import"./useControlled-DgCtf78D.js";import"./useId-DuezacBB.js";import"./Popper-BnveApbh.js";import"./Button-DtaNQqCu.js";import"./uniqueId-BGbHZD-g.js";import"./toString-BvSjqnIG.js";import"./isObjectLike-iezpm4wN.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BPQrIT02.js";import"./times-QSmVszMZ.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-c-0CKB6e.js";import"./mockTableEntity-BCMXncdx.js";import"./mockFileEntityACLVariants-CHFzQL5H.js";import"./fakerUtils-BGvL880c.js";import"./mockFileEntity-CYgtoAWT.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-DIZO1Gf0.js";import"./mockSchema-B6GDQ8Nb.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DJ0M6IWq.js";import"./utils-BPMC0IQI.js";import"./Link-B-mm3T7u.js";import"./Collapse-BFoXWlCs.js";import"./isNil-BrU7Yzj-.js";import"./_Uint8Array-CdKCkqyI.js";import"./_baseIsEqual-fkYr_Tyw.js";import"./_getTag-2sIXRL8V.js";import"./tinycolor-Begke6kS.js";import"./Fade-DRISSy7_.js";import"./Skeleton-BhyIo3kT.js";import"./inputBaseClasses-DGjAuvih.js";import"./calculateFriendlyFileSize-yzj5Sy8t.js";import"./CheckCircleTwoTone-DJHnZOGu.js";import"./InfoTwoTone-BB__BbP8.js";import"./mutation-BUMzrZ3W.js";import"./dayjs.min-BrH-GAW7.js";import"./chunk-AYJ5UCUI-CjNLu336.js";import"./cloneDeep-Bp1YEk0j.js";import"./_initCloneObject-CzqCuNIq.js";import"./isEqual-B8DTjVuz.js";import"./merge-C1qPWmGd.js";import"./util-u-LhfiCP.js";import"./HelpPopover-D3hJxMJ_.js";import"./MarkdownPopover-Ce571gRc.js";import"./LightTooltip-Bb7eivSU.js";import"./MarkdownSynapse-uan3urzu.js";import"./useMutation-9Vn__7fC.js";import"./SkeletonButton-BFJRsTcI.js";import"./SkeletonInlineBlock-BmYtQ43f.js";import"./SkeletonTable-DpNGjRYw.js";import"./SkeletonParagraph-CAK_YI3L.js";import"./HelpOutlineTwoTone-Dg9OFX28.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
