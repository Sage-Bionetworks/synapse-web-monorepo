import{g as s}from"./entityHandlers-DajgZjiC.js";import{x as C,g as L,b5 as d,B as k,M as r}from"./useFiles-DjXRh0_n.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-DN6u4g4A.js";import{l as O}from"./index-oly8ZZxj.js";import{g as a}from"./userProfileHandlers-D1K6tsFw.js";import{P as N}from"./ProjectDataAvailability-CFU8epKR.js";import"./index-B_CMFGN1.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-BggBAyCb.js";import"./mockTeam-D1Ut9b1b.js";import"./SynapseConstants-fQvBwSlx.js";import"./OrientationBanner-BhufqD1t.js";import"./jsx-runtime-DHIV3NgZ.js";import"./index-CiYMHn1W.js";import"./iframe-9bS_PLuc.js";import"./index-D-zz3DaY.js";import"./spreadSx-CwcO6WA9.js";import"./react-B3nk1sNR.js";import"./FullWidthAlert-C8QiR1e2.js";import"./Alert-LB2clXnU.js";import"./createTheme-Dr-FRt9h.js";import"./resolveComponentProps-Sf251QpC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C9IHRvmt.js";import"./createSvgIcon-BBEbPora.js";import"./DefaultPropsProvider-BAMSfddg.js";import"./Close-ByobNJAN.js";import"./IconButton-D-tqR65J.js";import"./ButtonBase-C-DypvYL.js";import"./useTimeout-BiQhycxo.js";import"./TransitionGroupContext-BBtvCtfD.js";import"./useIsFocusVisible-mZKnxQyk.js";import"./useEventCallback-JqRP_TZc.js";import"./Paper-Bc8Qqi_T.js";import"./Stack-DXiFrEmq.js";import"./getThemeProps-DLQUokRi.js";import"./useTheme-DcLbTF_6.js";import"./Box-BW1oPic-.js";import"./AlertTitle-qhIofB3L.js";import"./Typography-DmEMLsP4.js";import"./useTheme-nIT41qkF.js";import"./Grow-BC_xmw6o.js";import"./index-4OiUqoTL.js";import"./utils-GYwY21oY.js";import"./ClickAwayListener-B8xxEDtm.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-JzxXX3xe.js";import"./index-BFdM0H06.js";import"./useControlled-0q5EUitM.js";import"./useId-Bv47RgPy.js";import"./Popper-BqTYAN2h.js";import"./Button-Ca1xluWo.js";import"./uniqueId-C6WYovwQ.js";import"./toString-z0lluA1u.js";import"./isObjectLike-vEelmOLE.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-C4jnPpKO.js";import"./times-rmMWXUrn.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-BJwvUQ2x.js";import"./mockTableEntity-DJAXEdv_.js";import"./mockFileEntityACLVariants-D6GqWqn1.js";import"./fakerUtils-BXtmhd2V.js";import"./mockFileEntity-DQVCXvFU.js";import"./mock_file_handle-CFTRkxcS.js";import"./mockEntity-C81WAQ2X.js";import"./mockSchema-CiQ6251P.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CtFs5y4P.js";import"./utils-2YUT114m.js";import"./Link-CCpec3ar.js";import"./Collapse-Bya5aszg.js";import"./isNil-CQPdfDEX.js";import"./_Uint8Array-CtrrdRS6.js";import"./_baseIsEqual-KSbFY_iK.js";import"./_getTag-CGOAJCRD.js";import"./tinycolor-Begke6kS.js";import"./Fade-CJ8x8QLn.js";import"./Skeleton-sF-UrVUs.js";import"./inputBaseClasses-DdQjr_My.js";import"./calculateFriendlyFileSize-M5bk7f-W.js";import"./CheckCircleTwoTone-8R91UKy5.js";import"./InfoTwoTone-BvOnGl6w.js";import"./mutation-D54CMcpZ.js";import"./dayjs.min-C1-dRU45.js";import"./chunk-AYJ5UCUI-B7vmRBcT.js";import"./cloneDeep-jYEjTLhY.js";import"./_initCloneObject-BF1nDgPw.js";import"./isEqual-CQGRlhBE.js";import"./merge-CVJPWvx4.js";import"./util-DVWm2NNz.js";import"./HelpPopover-z3HT99dy.js";import"./MarkdownPopover-ByenzOmm.js";import"./LightTooltip-B82bQI8b.js";import"./MarkdownSynapse-CZ3bFOmU.js";import"./useMutation-BiU6JSNc.js";import"./SkeletonButton-BytHrszf.js";import"./SkeletonInlineBlock-DSwJ4nyw.js";import"./SkeletonTable-BnhxsxXu.js";import"./SkeletonParagraph-D0HInUtA.js";import"./HelpOutlineTwoTone-BUSX8EDv.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
