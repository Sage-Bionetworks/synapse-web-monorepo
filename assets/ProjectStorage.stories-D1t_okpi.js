import{g as s}from"./entityHandlers-BmCqnCfa.js";import{x as C,g as L,ba as d,B as k,M as r}from"./useFiles-BCC9o9bm.js";import"./VerificationSubmission-B0kBNeMy.js";import"./StringUtils-CzgJJW-6.js";import{l as O}from"./index-B4f-a6UF.js";import{g as a}from"./userProfileHandlers-DnxCnQer.js";import{P as N}from"./ProjectDataAvailability--_WIwoDd.js";import"./index-CPHimq5L.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-CoORu-Fc.js";import"./mockTeam-CucSp3ej.js";import"./SynapseConstants-D6yJoWPV.js";import"./OrientationBanner-D1D6xyRZ.js";import"./jsx-runtime-DBMcmXCa.js";import"./index-DBlnVwD8.js";import"./iframe-D_N6e9gY.js";import"./index-C2tCeSSv.js";import"./spreadSx-CwcO6WA9.js";import"./react-qszGcZP5.js";import"./FullWidthAlert-C1aLdWsG.js";import"./Alert-Dn4rajYU.js";import"./createTheme-BZ2zgW4D.js";import"./resolveComponentProps-Dtpa_tS3.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Dc8viUTi.js";import"./createSvgIcon-CSOVfYb_.js";import"./DefaultPropsProvider-DuMbHCRm.js";import"./Close-DWBR5p3C.js";import"./IconButton-C200dxKl.js";import"./ButtonBase-nKx8H8dx.js";import"./useTimeout-6iW9qGJp.js";import"./TransitionGroupContext-C0reZBPa.js";import"./useIsFocusVisible-CMn0OAnJ.js";import"./useEventCallback-D9ysatRx.js";import"./Paper-DaOo4yHe.js";import"./Stack-SvfrxjIC.js";import"./getThemeProps-BtMaQYIh.js";import"./useTheme-COxG8dpy.js";import"./Box-Chsd4vbP.js";import"./AlertTitle-DIxvf3iw.js";import"./Typography-DqN6Bou9.js";import"./useTheme-ZMiCMtR3.js";import"./Grow-BjLbQ-fL.js";import"./index-ByQiLxoL.js";import"./utils-BYTqi8xE.js";import"./ClickAwayListener-3VJLVNkD.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DtNzDJHf.js";import"./index-CpVUrsoO.js";import"./useControlled-BLmwoSKe.js";import"./useId-D_MF-2iJ.js";import"./Popper-BfKDlvYQ.js";import"./Button-CNqVIcaA.js";import"./uniqueId-zRrDOiE-.js";import"./toString-B0637kMA.js";import"./isObjectLike-OwuH3sZ9.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-C47FQwZW.js";import"./times-I6vxwNRK.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-BS7VKHeM.js";import"./mockTableEntity-BeuQ7xHA.js";import"./mockFileEntityACLVariants-Bg1yyxO7.js";import"./fakerUtils-CFWpQV58.js";import"./mockFileEntity-d0p58uHm.js";import"./mock_file_handle-Ct1MSfYs.js";import"./mockEntity-TdKbMuJ1.js";import"./mockSchema-C_gHvKyf.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Bk6g_8Gf.js";import"./utils-NbB0Ut0Y.js";import"./Link-DmbSphAj.js";import"./Collapse-c4oLUGBD.js";import"./isNil-CM9qot0x.js";import"./_Uint8Array-Bido-coT.js";import"./_baseIsEqual-CXDd7ZQG.js";import"./_getTag-Dg9gL6QT.js";import"./tinycolor-Begke6kS.js";import"./Fade-BfUz1XMr.js";import"./Skeleton-Ci_PYPE4.js";import"./inputBaseClasses-BQ5llsZJ.js";import"./calculateFriendlyFileSize-z3744QQS.js";import"./CheckCircleTwoTone-Bg8tee4I.js";import"./InfoTwoTone-BJxK8Eo6.js";import"./mutation-QlbpiYUc.js";import"./dayjs.min-Dkt-OZPU.js";import"./chunk-AYJ5UCUI-D8Kh-TfU.js";import"./cloneDeep-DmxrBXJm.js";import"./_initCloneObject-DxaU8L-P.js";import"./isEqual-BzHeONx3.js";import"./merge-OM56T8yk.js";import"./util-Dhun9d96.js";import"./HelpPopover-CCa_kXJE.js";import"./MarkdownPopover-CX2rjZ2O.js";import"./LightTooltip-Bh0LtSvU.js";import"./MarkdownSynapse-ff_yF9wH.js";import"./SkeletonButton-CJePCJ_2.js";import"./SkeletonInlineBlock-L2OJ_ShH.js";import"./SkeletonTable-BL02aR4j.js";import"./SkeletonParagraph-Cz6fv_U3.js";import"./HelpOutlineTwoTone-8cqgY82p.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
