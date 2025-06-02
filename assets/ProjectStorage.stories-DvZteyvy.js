import{g as s}from"./entityHandlers-CpOyAohs.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-EY5yUS1a.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-h0tgZjO9.js";import{g as a}from"./userProfileHandlers-CbsKMXSg.js";import{P as N}from"./ProjectDataAvailability-BaSTvvYG.js";import"./index-D6GcWBB9.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-BcGlb8Eb.js";import"./mockTeam-BOg2jNJO.js";import"./SynapseConstants-C9G9oc3F.js";import"./OrientationBanner-D5pstQt3.js";import"./jsx-runtime-CJcMkd2a.js";import"./index-D8IQqatP.js";import"./iframe-B3klFfb3.js";import"./index-BlfPjPPL.js";import"./spreadSx-CwcO6WA9.js";import"./react--3FdDKFe.js";import"./FullWidthAlert-D4yctO1D.js";import"./Alert-HwfZasOY.js";import"./createTheme-BgkRoyWx.js";import"./resolveComponentProps-sTax8ldv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BtMPwt5U.js";import"./createSvgIcon-itcnBQV6.js";import"./DefaultPropsProvider-BdAH66gj.js";import"./Close-DHWtdwuS.js";import"./IconButton-DgeU6NWZ.js";import"./ButtonBase-BMm9ZI01.js";import"./useTimeout-CGDmoPwO.js";import"./TransitionGroupContext-BuH8XwDI.js";import"./useIsFocusVisible-CEgQdcXj.js";import"./useEventCallback-CeSGo_7v.js";import"./Paper-CFO5aWKw.js";import"./Stack-CAfo5E6f.js";import"./getThemeProps-_ttmqSlx.js";import"./useTheme-SfVjWsDY.js";import"./Box-DHTTRiCn.js";import"./AlertTitle-D4AVQS7x.js";import"./Typography-B8--A30q.js";import"./useTheme-Bub1kAfA.js";import"./Grow-wiKAnCjf.js";import"./index-zd_GrE0U.js";import"./utils-iLe1jc-J.js";import"./ClickAwayListener-DkoVjmkZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BA0zzAb6.js";import"./index-CrmRNCUB.js";import"./useControlled-BWj-QM7C.js";import"./useId-BxUPaSO-.js";import"./Popper-TpTiHex5.js";import"./Button-DPUTJjYo.js";import"./uniqueId-B775uaMO.js";import"./toString-ldV5xIUu.js";import"./isObjectLike-CeKfXdYG.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DGkBwnAD.js";import"./times-D9cDbckz.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CcmwZD6r.js";import"./mockTableEntity-CchhhOXN.js";import"./mockFileEntityACLVariants-Dtw8E29w.js";import"./fakerUtils-kYjamRoD.js";import"./mockFileEntity-BmJnS1uY.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-D5SbSHat.js";import"./mockSchema-nS7RGC95.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-nEN4f5Ah.js";import"./utils-hetqLS4L.js";import"./Link-D3E1V0rp.js";import"./Collapse-B8HvoXuG.js";import"./isNil-BbTWaJUC.js";import"./_Uint8Array-G2XBJ7Fr.js";import"./_baseIsEqual-Dkugu-u4.js";import"./_getTag-C38afX1X.js";import"./tinycolor-Begke6kS.js";import"./Fade-B8FJIUU6.js";import"./Skeleton-DMCJU624.js";import"./inputBaseClasses-CYv3VH4x.js";import"./calculateFriendlyFileSize-DwzdMftx.js";import"./CheckCircleTwoTone-D2i9AJR2.js";import"./InfoTwoTone-Cpiy0ZTW.js";import"./useMutation-D7CwHq8T.js";import"./isEqual-BaplPoEC.js";import"./dayjs.min-DuG5OfHn.js";import"./chunk-AYJ5UCUI-D343kYd5.js";import"./cloneDeep-CZ2oFFmE.js";import"./_initCloneObject-Dgntrhkh.js";import"./merge-D1YZpMkh.js";import"./util-CWgC4i5O.js";import"./HelpPopover-BzGxejSk.js";import"./MarkdownPopover-CZrzRy-K.js";import"./LightTooltip-D3U2Ncti.js";import"./MarkdownSynapse-Eyi6NUs5.js";import"./SkeletonButton-Byf0sJyH.js";import"./SkeletonInlineBlock-ClDau2mo.js";import"./SkeletonTable-DGdP_zVW.js";import"./SkeletonParagraph-CCXrrD9o.js";import"./HelpOutlineTwoTone-DSNwZzn8.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
