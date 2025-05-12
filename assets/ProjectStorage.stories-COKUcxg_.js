import{g as s}from"./entityHandlers-CS21DSwj.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-DYAnKXqx.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-BjAXK14T.js";import{g as a}from"./userProfileHandlers-2kRfakXb.js";import{P as N}from"./ProjectDataAvailability-CPAOS7a_.js";import"./index-_wwYlad9.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-Bnv5oPAT.js";import"./mockTeam-D6CxLND7.js";import"./SynapseConstants-gkdcnAma.js";import"./OrientationBanner-Cxt7qCaJ.js";import"./jsx-runtime-BhYgtz2a.js";import"./index-TnDTBzFf.js";import"./iframe-CuKEFSiv.js";import"./index-CiypzW3i.js";import"./spreadSx-CwcO6WA9.js";import"./react-BPX5T-jr.js";import"./FullWidthAlert-DOInkpIF.js";import"./Alert-D33iOhM3.js";import"./createTheme-CiTCtaPq.js";import"./resolveComponentProps-CX2YNoCK.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-YmPuCFu8.js";import"./createSvgIcon-PYlHuLfO.js";import"./DefaultPropsProvider-Dj24Y2Xr.js";import"./Close-BTgdsF2d.js";import"./IconButton-Btlm9KUL.js";import"./ButtonBase-Ck0XLcvU.js";import"./useTimeout-Do5JDutj.js";import"./TransitionGroupContext-D1ipvWwM.js";import"./useIsFocusVisible-CZe6Gkhu.js";import"./useEventCallback-DApRzhme.js";import"./Paper-CYE3NXP2.js";import"./Stack-BZm-4vsJ.js";import"./getThemeProps-BNyY6QJd.js";import"./useTheme-K5JEE0Rs.js";import"./Box-CjckbGK_.js";import"./AlertTitle-0i1SwaRE.js";import"./Typography-BHacpJuX.js";import"./useTheme-DOFgFuwm.js";import"./Grow-CP00JTgt.js";import"./index-OQkrhSPO.js";import"./utils-DBPX0-1k.js";import"./ClickAwayListener-B7QLYZZn.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DRjJPI8u.js";import"./index-DRLnAiW7.js";import"./useControlled-C3ftmNlQ.js";import"./useId-CBzLqrSr.js";import"./Popper-BDQKAv4l.js";import"./Button-BfAXo1Lk.js";import"./uniqueId-s-ZdSPNf.js";import"./toString-SlzxmsmN.js";import"./isObjectLike-Cgap4Gvx.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-SUyKWxT2.js";import"./times-Cu64ZQfK.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CvHZi1em.js";import"./mockTableEntity-CfsjwQov.js";import"./mockFileEntityACLVariants-CEEw30JT.js";import"./fakerUtils-BML5cHZZ.js";import"./mockFileEntity-Ck-DJ_Vg.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-DCIP3JPG.js";import"./mockSchema-CRkiEFT7.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BViQs6v7.js";import"./utils-BprPXMtG.js";import"./Link-C3TGAzuv.js";import"./Collapse-BQyvnYTI.js";import"./isNil-B6T7CFbI.js";import"./_Uint8Array-C6rSnNnZ.js";import"./_baseIsEqual-C_QgXv57.js";import"./_getTag-DjjFc0nJ.js";import"./tinycolor-Begke6kS.js";import"./Fade-BvJPDuul.js";import"./Skeleton-BGy2m945.js";import"./inputBaseClasses-MLdP7SJy.js";import"./calculateFriendlyFileSize-KWbP0lKx.js";import"./CheckCircleTwoTone-DCcgpwt_.js";import"./InfoTwoTone-Cj98hI2s.js";import"./mutation-CE1ugUAr.js";import"./dayjs.min-B38EMs9S.js";import"./chunk-AYJ5UCUI-DNdPl_oj.js";import"./cloneDeep-Gs3EDVNV.js";import"./_initCloneObject-Bo4fS92M.js";import"./isEqual-BBsO-C2U.js";import"./merge-Dj9R6MmV.js";import"./util-BCx4wCVd.js";import"./HelpPopover-CNDNsivB.js";import"./MarkdownPopover-DzSM4rCy.js";import"./LightTooltip-DHf9Y88C.js";import"./MarkdownSynapse-45gJTMPQ.js";import"./SkeletonButton-DUGp1FfO.js";import"./SkeletonInlineBlock-CSUAkSmM.js";import"./SkeletonTable-CMgcD7Dg.js";import"./SkeletonParagraph-DSaeA_Nm.js";import"./HelpOutlineTwoTone-C7EL3P3d.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
