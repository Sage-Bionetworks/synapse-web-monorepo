import{g as s}from"./entityHandlers-ByBa493c.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-BOR3GEax.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-Cx14NpOB.js";import{g as a}from"./userProfileHandlers-DHM6nNct.js";import{P as N}from"./ProjectDataAvailability-BwGQqXGK.js";import"./index-DCT9CedL.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bd91X9qo.js";import"./mockTeam-CruFvKMl.js";import"./SynapseConstants-BnRMD3Ad.js";import"./OrientationBanner-B5TTXIo1.js";import"./jsx-runtime-BhAJ9Y3L.js";import"./index-DOU8PYus.js";import"./iframe-B6_QaExc.js";import"./index-BT3_9142.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ce9ZDlA0.js";import"./FullWidthAlert-CBJigWFY.js";import"./Alert-D_KCgbxC.js";import"./createTheme-D3vVDGxc.js";import"./resolveComponentProps-Cjit2Pfx.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B6dY2QVl.js";import"./createSvgIcon-JfH61MHK.js";import"./DefaultPropsProvider-DhGy6nlm.js";import"./Close-CbL4oY-7.js";import"./IconButton-NaOCI8Aw.js";import"./ButtonBase-D0SP54zG.js";import"./useTimeout-oLXMGs4M.js";import"./TransitionGroupContext-jyNSIYMl.js";import"./useIsFocusVisible-DXSm2biM.js";import"./useEventCallback-hd3UIFn8.js";import"./Paper-Dk5V-YxU.js";import"./Stack-IAxykChz.js";import"./getThemeProps--AtUlah8.js";import"./useTheme-Da75Vo1i.js";import"./Box-CYTyMrXG.js";import"./AlertTitle-i5YQ8W7y.js";import"./Typography-Ct5R0hvY.js";import"./useTheme-ZaQ7CBOE.js";import"./Grow-BdWvYuX7.js";import"./index-DM9E6TvJ.js";import"./utils-iLK5s9y8.js";import"./ClickAwayListener-DqnJeGQQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DuAYmp6Z.js";import"./index-CFqG_Jpv.js";import"./useControlled-gMYeIHlS.js";import"./useId-CgSs2jjB.js";import"./Popper-BMfFCZeV.js";import"./Button-BoYMPhvT.js";import"./uniqueId-CD-QlU9Z.js";import"./toString-BupGuEnU.js";import"./isObjectLike-B80JG2sS.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DcRVdeYx.js";import"./times-DvX4Whvg.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-D0AG0Nxu.js";import"./mockTableEntity-8dpDDDwl.js";import"./mockFileEntityACLVariants-Cd8wl3je.js";import"./fakerUtils-okv9lHNQ.js";import"./mockFileEntity-DIUYLr7l.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-D0ghr2KI.js";import"./mockSchema-FY70Lze5.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DRIeZwaP.js";import"./utils-DXbw_cY9.js";import"./Link-C_cMubJU.js";import"./Collapse-CjFArZDB.js";import"./isNil-Ck-WrAnD.js";import"./_Uint8Array-DPQIIKW5.js";import"./_baseIsEqual-BJMDhiwP.js";import"./_getTag-29ZQCHUY.js";import"./tinycolor-Begke6kS.js";import"./Fade-BuJnQaLb.js";import"./Skeleton-DA4aoZ9E.js";import"./inputBaseClasses-Bn2kxj98.js";import"./calculateFriendlyFileSize-Bhr9QEPb.js";import"./CheckCircleTwoTone-Be32YNCB.js";import"./InfoTwoTone-ldp8P5kK.js";import"./useMutation-BvjgdMJk.js";import"./isEqual-BW52Ww6h.js";import"./dayjs.min-CyrBdQwZ.js";import"./chunk-AYJ5UCUI-CcAccbZB.js";import"./cloneDeep-wuRwbMo-.js";import"./_initCloneObject-DIw4QhPh.js";import"./merge-B-QEi8am.js";import"./util-6Uw6W2Lf.js";import"./HelpPopover-CZXSTJFY.js";import"./MarkdownPopover-BwmOnBa6.js";import"./LightTooltip-C-pkZaGO.js";import"./MarkdownSynapse-xuOC1rxB.js";import"./SkeletonButton-CwHbmIYM.js";import"./SkeletonInlineBlock-quN3Qk-S.js";import"./SkeletonTable-tqzVDH03.js";import"./SkeletonParagraph-Cg7SZrUs.js";import"./HelpOutlineTwoTone-BDnABxHK.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
