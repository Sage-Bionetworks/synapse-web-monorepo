import{g as s}from"./entityHandlers-D5LW7Ixk.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-Dzh-xGba.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-D_s-PUqw.js";import{g as a}from"./userProfileHandlers-BlgYCzDQ.js";import{P as N}from"./ProjectDataAvailability-DrP1cEHT.js";import"./index-DzAlerjc.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-ClB6iJQu.js";import"./mockTeam-BvGPFK8x.js";import"./SynapseConstants-DV83Gi-b.js";import"./OrientationBanner-DELzGaI_.js";import"./jsx-runtime-BZeBjSIS.js";import"./index-CjoTohT0.js";import"./iframe-CvhAkLtT.js";import"./index-CZ6nZZM5.js";import"./spreadSx-CwcO6WA9.js";import"./react-B_ep3ieK.js";import"./FullWidthAlert-BXqxc3wv.js";import"./Alert-7_PfCLqB.js";import"./createTheme-bwx9K6ts.js";import"./resolveComponentProps-a0-4iTOu.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D4KURWw8.js";import"./createSvgIcon-DbCE1SVw.js";import"./DefaultPropsProvider-DUfDTxF6.js";import"./Close-CimlcXQB.js";import"./IconButton-C6l0SFmN.js";import"./ButtonBase-BbwScQV5.js";import"./useTimeout-CVOpskps.js";import"./TransitionGroupContext-UobnCySz.js";import"./useIsFocusVisible-BO1LLD9d.js";import"./useEventCallback-Cf7PpRR2.js";import"./Paper-BYyNkBER.js";import"./Stack-B020NLmB.js";import"./getThemeProps-BKFu32XS.js";import"./useTheme-SJCcizRe.js";import"./Box-DHzWNABX.js";import"./AlertTitle-Dgp4KesF.js";import"./Typography-DUG2FEmz.js";import"./useTheme-uJlIsAiP.js";import"./Grow-x5lwJPlc.js";import"./index-DTVgpHag.js";import"./utils-CAcyHLoV.js";import"./ClickAwayListener-Dt9keXb4.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CLFxhQMN.js";import"./index-BH5wt59E.js";import"./useControlled-Cbsj5wQj.js";import"./useId-ByMtCpEj.js";import"./Popper-DsfBWyJe.js";import"./Button-DMakyqZH.js";import"./uniqueId-CXvGH3bE.js";import"./toString-z4n4XpTO.js";import"./isObjectLike-CrwNC6oF.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BRnPZc8c.js";import"./times-De0aD8Xw.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-D929D5Ls.js";import"./mockTableEntity-B80uhv-r.js";import"./mockFileEntityACLVariants-CyXTuHY4.js";import"./fakerUtils-BmyOexQY.js";import"./mockFileEntity-Cjmoa73E.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-BxvCziLe.js";import"./mockSchema-B4mBXiw5.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DnQsqcrx.js";import"./utils-DH5Oqlgj.js";import"./Link-Y75nS1QX.js";import"./Collapse-ffc1sN3U.js";import"./isNil-D3yHmM32.js";import"./_Uint8Array--_t6qXLg.js";import"./_baseIsEqual-DtJNdB66.js";import"./_getTag-CKpP1EoQ.js";import"./tinycolor-Begke6kS.js";import"./Fade-BuGhOS_y.js";import"./Skeleton-BcT1rE-U.js";import"./inputBaseClasses-DPMPLyNE.js";import"./calculateFriendlyFileSize-9wUeoNJq.js";import"./CheckCircleTwoTone-UctgIY4f.js";import"./InfoTwoTone-DIz8M3OP.js";import"./useMutation-C2yIdTsq.js";import"./isEqual-qdpfjJTj.js";import"./dayjs.min-D6B11bIY.js";import"./chunk-AYJ5UCUI-BI5gnHbm.js";import"./cloneDeep-DCOcf-ad.js";import"./_initCloneObject-Cq-aANJ9.js";import"./merge-D2stCHL9.js";import"./util-DJyy0RN6.js";import"./HelpPopover-CYRcYlol.js";import"./MarkdownPopover-BHaBsnFx.js";import"./LightTooltip-BhYVFK-1.js";import"./MarkdownSynapse-CvB7Heat.js";import"./SkeletonButton-BEnTmZDa.js";import"./SkeletonInlineBlock-eDPtkaaD.js";import"./SkeletonTable-C_uULwMl.js";import"./SkeletonParagraph-DkXoiRal.js";import"./HelpOutlineTwoTone-CLncRXxx.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
