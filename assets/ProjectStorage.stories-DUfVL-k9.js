import{g as s}from"./entityHandlers-Bj1-26Hw.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-Cxf8eV4n.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-Dsi3Wje2.js";import{g as a}from"./userProfileHandlers-rS2aivhu.js";import{P as N}from"./ProjectDataAvailability-Dh6aNy4r.js";import"./index-CwbgsrqX.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CIC3T_B5.js";import"./mockTeam-D9DE-S2T.js";import"./SynapseConstants-Dr3_l-La.js";import"./OrientationBanner-CJcNE3jz.js";import"./jsx-runtime-CRy6x3sP.js";import"./index-CE2Ac4IV.js";import"./iframe-BdAv9r7b.js";import"./index-33x153AN.js";import"./spreadSx-CwcO6WA9.js";import"./react-BGcvK65e.js";import"./FullWidthAlert-DcvBOpAA.js";import"./Alert-B2s1bC-M.js";import"./createTheme-Chr0Mdmk.js";import"./resolveComponentProps-CP6vIIt2.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C6Z4Jw8F.js";import"./createSvgIcon-CiHFREdi.js";import"./DefaultPropsProvider-_g6l0FJe.js";import"./Close-BIDKcCyq.js";import"./IconButton-Df9li5yN.js";import"./ButtonBase-D1lRUUMa.js";import"./useTimeout-CBH_whYp.js";import"./TransitionGroupContext-CxN-DzGm.js";import"./useIsFocusVisible-dvxC9prE.js";import"./useEventCallback-B2yVaD7P.js";import"./Paper-BO3sHqW8.js";import"./Stack-N50kn1Mv.js";import"./getThemeProps-BS_qL9ir.js";import"./useTheme-XiVtr3LS.js";import"./Box-etwwWi4O.js";import"./AlertTitle-DpdAxaYw.js";import"./Typography-cABtXJa_.js";import"./useTheme-DiZnRNE7.js";import"./Grow-DjIVuFVR.js";import"./index-e1WoLxJ7.js";import"./utils-BbQ6ehAh.js";import"./ClickAwayListener-Cku9OPRg.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CSpbyYgv.js";import"./index-D1UKly7L.js";import"./useControlled-DkdtTMBP.js";import"./useId-BRVnYYpi.js";import"./Popper-BLUMdNSt.js";import"./Button-DG4g__Z5.js";import"./uniqueId-CIVu4QNe.js";import"./toString-D9TzDClD.js";import"./isObjectLike-BPkWATOE.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-ByhCwmes.js";import"./times-DT3UiAAp.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-DMbp0I6o.js";import"./mockTableEntity-Dgs0cWkk.js";import"./mockFileEntityACLVariants-C5zUPPwT.js";import"./fakerUtils-DT2kNVGX.js";import"./mockFileEntity-LEcnwyIv.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-DGaEJuo9.js";import"./mockSchema-BdJrDYt0.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CHFprEsD.js";import"./utils-DzX4tJbb.js";import"./Link-CbuyVXAA.js";import"./Collapse-DQAQjUwZ.js";import"./isNil-shTrIGGc.js";import"./_Uint8Array-B9mZlz1W.js";import"./_baseIsEqual-CRCrmKl4.js";import"./_getTag-DPXvVhQY.js";import"./tinycolor-Begke6kS.js";import"./Fade-BePaFpCm.js";import"./Skeleton-D2sKrEc4.js";import"./inputBaseClasses-CzYtpewL.js";import"./calculateFriendlyFileSize-6zAl83cW.js";import"./CheckCircleTwoTone-t841N9sD.js";import"./InfoTwoTone-ClHbIujv.js";import"./useMutation-Cdlk9RaF.js";import"./isEqual-_ddOeoH0.js";import"./dayjs.min-KU4kcmn5.js";import"./chunk-AYJ5UCUI-Bsd4FnUA.js";import"./cloneDeep-C8UhJl5n.js";import"./_initCloneObject-BYZKyK7O.js";import"./merge-Be5BfqC_.js";import"./util-Fzy3GwE1.js";import"./HelpPopover-BIpsNaQq.js";import"./MarkdownPopover-DpsG7j4h.js";import"./LightTooltip-BKz0-sPK.js";import"./MarkdownSynapse-BLXi6IUg.js";import"./SkeletonButton-2nxgRoEB.js";import"./SkeletonInlineBlock-CVbi4qCR.js";import"./SkeletonTable-BFVKwZ3B.js";import"./SkeletonParagraph-DfuEJlc5.js";import"./HelpOutlineTwoTone-Ck9BzNoC.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
