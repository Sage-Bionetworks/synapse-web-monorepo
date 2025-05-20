import{g as s}from"./entityHandlers-CMto9nlK.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-CZsA5Qbe.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-Df7AZImX.js";import{l as O}from"./index-K2rA1iYw.js";import{g as a}from"./userProfileHandlers-DgXj1tpv.js";import{P as N}from"./ProjectDataAvailability-DC4LPWwA.js";import"./index-DuzDRq1K.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DLBal2yt.js";import"./mockTeam-DrIDrIRT.js";import"./SynapseConstants-vcY9rUFQ.js";import"./OrientationBanner-D5sJkCGc.js";import"./jsx-runtime-BSDkjlWP.js";import"./index-C5la8P61.js";import"./iframe-CpEO7aLV.js";import"./index-DPgOB9HS.js";import"./spreadSx-CwcO6WA9.js";import"./react-J0iAw686.js";import"./FullWidthAlert-B6cMQssk.js";import"./Alert-CNReWYbj.js";import"./createTheme-CcZqtVQC.js";import"./resolveComponentProps-WbVcNb2t.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C-qyZ7hs.js";import"./createSvgIcon-BuoEkjeb.js";import"./DefaultPropsProvider-CCFrHV6G.js";import"./Close-Dmq5Q2BI.js";import"./IconButton-CeBEfxKg.js";import"./ButtonBase-Dj24P196.js";import"./useTimeout-MHdoqxi2.js";import"./TransitionGroupContext-D5hN35Nq.js";import"./useIsFocusVisible-Brkq1bEu.js";import"./useEventCallback-By8RRSD5.js";import"./Paper-BL99ePLy.js";import"./Stack-BZKtOe4B.js";import"./getThemeProps-B-5KhnFs.js";import"./useTheme-DimN_8rV.js";import"./Box-CWVIrzZU.js";import"./AlertTitle-DTLuH1wp.js";import"./Typography-CSVNfWP2.js";import"./useTheme-CzNl4uro.js";import"./Grow-DYzRzPjY.js";import"./index-DFadZPdC.js";import"./utils-q2kOI160.js";import"./ClickAwayListener-Df_B1HkZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cc_s_Ea-.js";import"./index-CQTG83Ai.js";import"./useControlled-BL8CHqmI.js";import"./useId-CJHw81FJ.js";import"./Popper-Z-Tjlb1o.js";import"./Button-BQQptVZp.js";import"./uniqueId-DF_XNRmE.js";import"./toString-DdeBW9bk.js";import"./isObjectLike-k4kl7PfQ.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-D-4sADwM.js";import"./times-D810fRPe.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-C9wYIDOk.js";import"./mockTableEntity-CI9gjNw4.js";import"./mockFileEntityACLVariants-C3qWrWOJ.js";import"./fakerUtils-roEUqdnR.js";import"./mockFileEntity-lj_oIKci.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-Dh8eweOl.js";import"./mockSchema-DQB84jPa.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BLfnvJIe.js";import"./utils-Bl63LDw7.js";import"./Link-D383uXAh.js";import"./Collapse-DnVU92Yn.js";import"./isNil-BXln-Rw9.js";import"./_Uint8Array-E7WFpk-u.js";import"./_baseIsEqual-CPf1wA0P.js";import"./_getTag-D5ek6wSw.js";import"./tinycolor-Begke6kS.js";import"./Fade-VkwcT0iP.js";import"./Skeleton-BQySDk-s.js";import"./inputBaseClasses-BbfvtJGq.js";import"./calculateFriendlyFileSize-DpIr_Q57.js";import"./CheckCircleTwoTone-RvtZIOI1.js";import"./InfoTwoTone-DmSSeuxV.js";import"./mutation-BOccHYKf.js";import"./dayjs.min-D__DKXuu.js";import"./chunk-AYJ5UCUI-BR7iJ0im.js";import"./cloneDeep-jr1Kpy2S.js";import"./_initCloneObject-BFRTamF7.js";import"./isEqual-RCY8KJA0.js";import"./merge-kqURPiz6.js";import"./util-BCaQXI0O.js";import"./HelpPopover-B7MOD_Pb.js";import"./MarkdownPopover-Ct88UVtv.js";import"./LightTooltip-DafZKvbj.js";import"./MarkdownSynapse-CSD_n8au.js";import"./SkeletonButton-KxtiKdna.js";import"./SkeletonInlineBlock-BNPmfQp_.js";import"./SkeletonTable-rx4VV35m.js";import"./SkeletonParagraph-C8aKAP0Y.js";import"./HelpOutlineTwoTone-B-rR6HGl.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
