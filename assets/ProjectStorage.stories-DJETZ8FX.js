import{g as s}from"./entityHandlers-uFLjhjm8.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-BUTSDjpp.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-V2O7xGsW.js";import{g as a}from"./userProfileHandlers-DHuMUHA9.js";import{P as N}from"./ProjectDataAvailability-D87Nz2Y2.js";import"./index-DLeiXjj2.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-B6LxgSWM.js";import"./mockTeam-CkJ9wGsi.js";import"./SynapseConstants-BKYSFUA4.js";import"./OrientationBanner-hPZ43e6I.js";import"./jsx-runtime-3KUIpe_B.js";import"./index-DKQmXyTg.js";import"./iframe-yVMHiQlN.js";import"./index-C-TJzvvw.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dtsa6pJa.js";import"./FullWidthAlert-C4lmFUoi.js";import"./Alert-Aziq9jrC.js";import"./createTheme-D71xLB5y.js";import"./resolveComponentProps-BGzDORmu.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-WbU4IK3w.js";import"./createSvgIcon-50Cdg5i5.js";import"./DefaultPropsProvider-BLKPmz24.js";import"./Close-CSP2Jd51.js";import"./IconButton-pbjeZzOL.js";import"./ButtonBase-CkYDoZ72.js";import"./useTimeout-D1oI4iH6.js";import"./TransitionGroupContext-B_1k5y15.js";import"./useIsFocusVisible-YFynukRh.js";import"./useEventCallback-DPuUUDpa.js";import"./Paper-CpI3p7vt.js";import"./Stack-CpeVWMZC.js";import"./getThemeProps-CQbQMCh0.js";import"./useTheme-BdTZ9glP.js";import"./Box-DHQrsK7r.js";import"./AlertTitle-BpB3V9XK.js";import"./Typography-SSCOYWVs.js";import"./useTheme-HpprIIPg.js";import"./Grow-DBVaKRUq.js";import"./index--OvIPCqu.js";import"./utils-DJQOJB4m.js";import"./ClickAwayListener-Dt1qC4MI.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BBYtGIG7.js";import"./index-Cle-c0aH.js";import"./useControlled-CtW-cS0b.js";import"./useId-CF9Yu02v.js";import"./Popper-CGUN53ew.js";import"./Button-fGoJWvNB.js";import"./uniqueId-U7_dp_es.js";import"./toString-CTt2u-FA.js";import"./isObjectLike-CpRgRSSG.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DtDHKaGD.js";import"./times-DW3mmMLQ.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DodBKe_l.js";import"./mockTableEntity-DrbMx0pH.js";import"./mockFileEntityACLVariants-Bg7-anU3.js";import"./fakerUtils-k7gWt5w_.js";import"./mockFileEntity-DeA_sN5h.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-B-oV8WLf.js";import"./mockSchema-Dw-Ooqz5.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-B7kP4S9m.js";import"./utils-D5WnLCld.js";import"./Link-Bpjhw2CS.js";import"./Collapse-DgDuu3nh.js";import"./isNil-BwVJPUb-.js";import"./_Uint8Array-Hpg7Ovco.js";import"./_baseIsEqual-Be5X7RjA.js";import"./_getTag-gn94A73Q.js";import"./tinycolor-Begke6kS.js";import"./Fade-CMDFt0Nj.js";import"./Skeleton-C670lw8b.js";import"./inputBaseClasses-DaTlLvG_.js";import"./calculateFriendlyFileSize-Dn_xi8Ur.js";import"./CheckCircleTwoTone-BsG1c10B.js";import"./InfoTwoTone-Brz641sQ.js";import"./mutation-CJXf9Cy9.js";import"./dayjs.min-D019G3yF.js";import"./chunk-AYJ5UCUI-DkAV2hPV.js";import"./cloneDeep-rpODRfQ8.js";import"./_initCloneObject-BIxNbgCW.js";import"./isEqual-CblXoSZj.js";import"./merge-CfMdqnSR.js";import"./util-Byfh3F0t.js";import"./HelpPopover-BMtlHCIC.js";import"./MarkdownPopover-0M4ZiTNB.js";import"./LightTooltip-DeSzLM2f.js";import"./MarkdownSynapse-KTkAyBLZ.js";import"./SkeletonButton-B2sMgepy.js";import"./SkeletonInlineBlock-BZh5d28p.js";import"./SkeletonTable-Bebb2aGz.js";import"./SkeletonParagraph-B3rjYtee.js";import"./HelpOutlineTwoTone-ZzQ9gHk5.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
