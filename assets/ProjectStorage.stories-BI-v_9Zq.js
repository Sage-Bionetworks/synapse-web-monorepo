import{g as s}from"./entityHandlers-pHhiEzJz.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-QsHV2q1R.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-CaZRYjfA.js";import{g as a}from"./userProfileHandlers-CepmxdVv.js";import{P as N}from"./ProjectDataAvailability-DOIWUVar.js";import"./index-C7-o_222.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-C2IylWFG.js";import"./mockTeam-CQThp78w.js";import"./SynapseConstants-BtQ24Nut.js";import"./OrientationBanner-Bqf4PnT9.js";import"./jsx-runtime-CZmUC0kc.js";import"./index-D48dKAGK.js";import"./iframe-DXxs8wzV.js";import"./index-Bqph6avf.js";import"./spreadSx-CwcO6WA9.js";import"./react-DnH3PGz_.js";import"./FullWidthAlert-WrZ35eIA.js";import"./Alert-CrX7ZBHc.js";import"./createTheme-DdUHwKDu.js";import"./resolveComponentProps-DBk_bQ3w.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B4VymO4y.js";import"./createSvgIcon-CGfU68f8.js";import"./DefaultPropsProvider-DnsYkYhu.js";import"./Close-B2Put2a1.js";import"./IconButton-MNk6eaK_.js";import"./ButtonBase-DijL8LGZ.js";import"./useTimeout-CfJSgBAN.js";import"./TransitionGroupContext-xk93-I-l.js";import"./useIsFocusVisible-pZRnHMmE.js";import"./useEventCallback-CfXeTH2v.js";import"./Paper-BWc9QIn7.js";import"./Stack-s10dd2v_.js";import"./getThemeProps-DpFYsVdH.js";import"./useTheme-Cdkd9-zl.js";import"./Box-EZ-Kz8mO.js";import"./AlertTitle-qABI-vcz.js";import"./Typography-CDDEj6bd.js";import"./useTheme-CDkkRwMy.js";import"./Grow-DPoxz4OE.js";import"./index-CTlj-uEa.js";import"./utils-BgEZDT5t.js";import"./ClickAwayListener-CyT30qp6.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B0EkgW6k.js";import"./index-7Uf9BQgU.js";import"./useControlled-DZ97s39z.js";import"./useId-Buvf4Xiv.js";import"./Popper-DgH4d2MR.js";import"./Button-CYaahIbs.js";import"./uniqueId-BNVOIyXj.js";import"./toString-BtL3po-k.js";import"./isObjectLike-DKyqGUYf.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-Db5oJ-yg.js";import"./times-DpG8gG-S.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-g29JVhcw.js";import"./mockTableEntity-DXbFk5gC.js";import"./mockFileEntityACLVariants-XuqLsmiR.js";import"./fakerUtils-BY-5Y8VT.js";import"./mockFileEntity-U9FMP1i_.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-BCbRCpX_.js";import"./mockSchema-D0abhxBO.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-DWbROD4e.js";import"./utils-DnrSKvOR.js";import"./Link-Cbjql7oX.js";import"./Collapse-DQpZ3-gN.js";import"./isNil-BEj-5XkN.js";import"./_Uint8Array-K-J4cL1T.js";import"./_baseIsEqual-DH-XEyfw.js";import"./_getTag-CYk1drFw.js";import"./tinycolor-Begke6kS.js";import"./Fade-B1FcSJEt.js";import"./Skeleton-DJgc57tZ.js";import"./inputBaseClasses-DcQwlFr_.js";import"./calculateFriendlyFileSize-9m6yHg2A.js";import"./CheckCircleTwoTone-BY4FzlSL.js";import"./InfoTwoTone-DL9tebAy.js";import"./useMutation-hkATgPdp.js";import"./isEqual-b23C5zIw.js";import"./dayjs.min-DlNJuh2r.js";import"./chunk-AYJ5UCUI-S23a5Wq1.js";import"./cloneDeep-hNZImc-4.js";import"./_initCloneObject-02v0DsxF.js";import"./merge-Dd1BqavR.js";import"./util-RMwz9FGd.js";import"./HelpPopover-uajD5hUq.js";import"./MarkdownPopover-BKWV683N.js";import"./LightTooltip-sHA6cHH-.js";import"./MarkdownSynapse-CFzu2KcT.js";import"./SkeletonButton-CMbg4Bdv.js";import"./SkeletonInlineBlock-BrxzpBUR.js";import"./SkeletonTable-BIbnUYiA.js";import"./SkeletonParagraph-CYjIXPs8.js";import"./HelpOutlineTwoTone-D5GuTbzU.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
