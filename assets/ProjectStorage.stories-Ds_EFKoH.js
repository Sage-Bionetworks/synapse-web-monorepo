import{g as s}from"./entityHandlers-BTRYvGDP.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-D6-60VlG.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-CQUlPutw.js";import{g as a}from"./userProfileHandlers-D5EHYnG6.js";import{P as N}from"./ProjectDataAvailability-4UuTDk0a.js";import"./index-CIWRHhIN.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CCwc49Q9.js";import"./mockTeam-NFVoV_OW.js";import"./SynapseConstants-D8_u4KCY.js";import"./OrientationBanner-Brj_6R5O.js";import"./jsx-runtime-Zazi817E.js";import"./index-D-a7w8th.js";import"./iframe-DqOO6GmJ.js";import"./index-B9uCcEa8.js";import"./spreadSx-CwcO6WA9.js";import"./react-Drm6sDLN.js";import"./FullWidthAlert-DKf9_wpb.js";import"./Alert-CMSBW_9_.js";import"./createTheme-BKO-I-SA.js";import"./resolveComponentProps-BCYM0ghF.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BoKjB57t.js";import"./createSvgIcon-5Cw73NIJ.js";import"./DefaultPropsProvider-CMeWClB2.js";import"./Close-CKICGMRN.js";import"./IconButton-D7fD1kT1.js";import"./ButtonBase-BlnkqX4m.js";import"./useTimeout-NcCkJi-r.js";import"./TransitionGroupContext-KaYi-H8Q.js";import"./useIsFocusVisible-BEvJgvyZ.js";import"./useEventCallback-CL3MT4n3.js";import"./Paper-DH45r-wy.js";import"./Stack-C28MH_Nj.js";import"./getThemeProps-RwE7Dgdk.js";import"./useTheme-BhctGpst.js";import"./Box-erjX2_Pn.js";import"./AlertTitle-DbbLAA4Q.js";import"./Typography-0amIDJ13.js";import"./useTheme-BRe1u070.js";import"./Grow-Cu1K5fdd.js";import"./index-D8Tj0NKP.js";import"./utils-CmeGA0Mj.js";import"./ClickAwayListener-susZPs9A.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BJj93p-l.js";import"./index-D-NA5Lgs.js";import"./useControlled-Cz3AFNPb.js";import"./useId-_0THTgRa.js";import"./Popper-Dwod_RPU.js";import"./Button-CxroDze3.js";import"./uniqueId-DC0bf74h.js";import"./toString-M4CFdBjl.js";import"./isObjectLike-tE4xW328.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-Am7Ne-JG.js";import"./times-CFGa3Lj9.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-FLMpp8CB.js";import"./mockTableEntity-D8wq8GNs.js";import"./mockFileEntityACLVariants-_iAnnYr2.js";import"./fakerUtils-DXhV4sYb.js";import"./mockFileEntity-CWapNEq8.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-DEJpMf96.js";import"./mockSchema-CZX0UpV1.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-B5EBPYQk.js";import"./utils-pBpmfRy2.js";import"./Link-C8A1juNu.js";import"./Collapse-B2ReICNn.js";import"./isNil-DNbb0ZTY.js";import"./_Uint8Array-CDIqxLcW.js";import"./_baseIsEqual-BwEpiinV.js";import"./_getTag-BVzBaU_M.js";import"./tinycolor-Begke6kS.js";import"./Fade-Do1oESZB.js";import"./Skeleton-QtVV7vBl.js";import"./inputBaseClasses-DvVPbDNa.js";import"./calculateFriendlyFileSize-DFT7G6pD.js";import"./CheckCircleTwoTone-CqmyG6lC.js";import"./InfoTwoTone-B-oZrgFl.js";import"./mutation-COF64AgK.js";import"./dayjs.min-DoL1Vt0J.js";import"./chunk-AYJ5UCUI-DFKlZx2o.js";import"./cloneDeep-BMoExRqW.js";import"./_initCloneObject-DXlJBdkp.js";import"./isEqual-B5SJeZHH.js";import"./merge-CAy_Mw7I.js";import"./util-CetcjDgn.js";import"./HelpPopover-DrvMu2fO.js";import"./MarkdownPopover-DnsKC0RT.js";import"./LightTooltip-CBUV6sAS.js";import"./MarkdownSynapse-Bnfmdi6a.js";import"./useMutation-DpxPDMS3.js";import"./SkeletonButton-jIdDjQ_c.js";import"./SkeletonInlineBlock-D-TogWgu.js";import"./SkeletonTable-CLuQFGKy.js";import"./SkeletonParagraph-Y3NkBtnG.js";import"./HelpOutlineTwoTone-DsyB9IBc.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
