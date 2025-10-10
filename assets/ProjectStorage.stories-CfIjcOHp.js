import{g as i}from"./entityHandlers-BP19ijfT.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-D9eBDzux.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DQHSwxex.js";import{g as m}from"./userProfileHandlers-Dk8Letwr.js";import{P as L}from"./ProjectDataAvailability-BwcdbNsf.js";import"./index-DOn8WttS.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BMu77dYr.js";import"./mockTeam-BdxrQ-pX.js";import"./SynapseConstants-BzHhhFhS.js";import"./OrientationBanner-D3KAsP4w.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Ceq_OOHv.js";import"./index-BAUB8VxZ.js";import"./iframe-CEgLHbLB.js";import"./spreadSx-CwcO6WA9.js";import"./react-YFCJrhYh.js";import"./FullWidthAlert-T2yM82RP.js";import"./Alert-CXVLc8vo.js";import"./createTheme-QOrAiC8v.js";import"./DefaultPropsProvider-BNmp3YDg.js";import"./useSlot-DvaOHrx3.js";import"./useForkRef-BOC0myPy.js";import"./createSimplePaletteValueFilter-Dk8LfQw2.js";import"./createSvgIcon-cYtzdOwk.js";import"./Close-NLvB7XHm.js";import"./IconButton-BFqyrDq4.js";import"./useTimeout-YGtm5ulj.js";import"./ButtonBase-Xz_eRae2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ePAruf6a.js";import"./Paper-B6p4m8Ct.js";import"./useTheme-DC3v4V5z.js";import"./useTheme-CE_afK7b.js";import"./Stack-CAodq4L2.js";import"./useThemeProps-Q4q-imGj.js";import"./getThemeProps-CB6wP6r1.js";import"./extendSxProp-68QBnwPw.js";import"./Box-CJ_mc_KC.js";import"./AlertTitle-ysdi09bF.js";import"./Typography-DBeu9HJZ.js";import"./index-Byhwwvse.js";import"./ClickAwayListener-DHpiF-gd.js";import"./getReactElementRef-o5Cru5cj.js";import"./index-dVVgrbsH.js";import"./index-DZrE4oxZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-OlzdlbwJ.js";import"./Tooltip-D5KeB_wU.js";import"./index-BTEM2iTZ.js";import"./useControlled-CI2yt4-5.js";import"./Popper-DIHHlKWR.js";import"./Button-C6MKCi2u.js";import"./uniqueId-CZXu24eu.js";import"./toString-c2hWB_jG.js";import"./isArray-fTt9doPm.js";import"./isSymbol-BaLaqVNf.js";import"./times-Bj8erGIf.js";import"./_Uint8Array-CY2fm9S_.js";import"./identity-DKeuBCMA.js";import"./toInteger-Dz1HtPbN.js";import"./mockTableEntity-B-5bU1Mh.js";import"./mockFileEntityACLVariants-Cm-h-Nw1.js";import"./fakerUtils-ClQAz1UW.js";import"./mockFileEntity-DPgruogS.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DsADbgwm.js";import"./mockSchema-4Xr3XL9Z.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DUgtzxZD.js";import"./QueryClientProvider-Db2j_WHz.js";import"./Link-Cez3cIoy.js";import"./Collapse-DrBAZrf0.js";import"./_baseUniq-C6s3Loyy.js";import"./_getTag-wZmIsRPD.js";import"./isEqual-CSeg9Uiq.js";import"./noop-DX6rZLP_.js";import"./merge-D2adZoeu.js";import"./_initCloneObject-BfCQnLPN.js";import"./tinycolor-Begke6kS.js";import"./Fade-D7n7NZNC.js";import"./inputBaseClasses-CVINOxDr.js";import"./calculateFriendlyFileSize-BvXrAxXk.js";import"./CheckCircleTwoTone-D4WLn7r6.js";import"./InfoTwoTone-Cd8riuW_.js";import"./useMutation-DbSD0zUI.js";import"./dayjs.min-Bq55Fdj0.js";import"./chunk-AYJ5UCUI-C9vLqfh1.js";import"./cloneDeep-D1-JOxW9.js";import"./Skeleton-C0B6B6Td.js";import"./HelpPopover-R79mRVb5.js";import"./MarkdownPopover-DmG-PuWd.js";import"./LightTooltip-D_pJ7RDv.js";import"./MarkdownSynapse-CqSHDIow.js";import"./SkeletonButton-CraWa5E9.js";import"./SkeletonInlineBlock-ChqDOmvw.js";import"./SkeletonTable-CgpiacY2.js";import"./SkeletonParagraph-DSnwyRng.js";import"./HelpOutlineTwoTone-XGcNpEm7.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var _,P,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,u,j;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const yr=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,yr as __namedExportsOrder,jr as default};
