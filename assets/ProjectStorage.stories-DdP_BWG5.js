import{g as s}from"./entityHandlers-ClEPugwL.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-DngzFh3e.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-DdaanNjH.js";import{g as a}from"./userProfileHandlers-DLmgpPPO.js";import{P as N}from"./ProjectDataAvailability-1H3Olp5H.js";import"./index-DXqM5JJ5.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-hg-85Qyg.js";import"./mockTeam-F77IYQnl.js";import"./SynapseConstants-BdkZXYLP.js";import"./OrientationBanner-ew17TVg2.js";import"./jsx-runtime-CFF0IO7V.js";import"./index-BJ7ALwL2.js";import"./iframe-CEp3iVjq.js";import"./index-DMrxKmOb.js";import"./spreadSx-CwcO6WA9.js";import"./react-BaKqR22l.js";import"./FullWidthAlert-BEiywVvi.js";import"./Alert-BlzsnL1m.js";import"./createTheme-CkS4QZvJ.js";import"./resolveComponentProps-zYoat5PD.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-I_DnR4si.js";import"./createSvgIcon-D5G5uwJ2.js";import"./DefaultPropsProvider-BOxd0Sbo.js";import"./Close-emeGZ8Oh.js";import"./IconButton-CwxeWoqe.js";import"./ButtonBase-CTg1nl5M.js";import"./useTimeout-Bk89QPaF.js";import"./TransitionGroupContext-CXLwUvot.js";import"./useIsFocusVisible-C8TPXvxP.js";import"./useEventCallback-DbmQPL7x.js";import"./Paper-Cct9MIyy.js";import"./Stack-DS40NBuF.js";import"./getThemeProps-57vBxk9k.js";import"./useTheme-DLOkYWdY.js";import"./Box-CcK0P2x-.js";import"./AlertTitle-Ch5AT8_u.js";import"./Typography-DGjlBq7i.js";import"./useTheme-GCly8xFo.js";import"./Grow-CJ587jf8.js";import"./index-BKgV-8-K.js";import"./utils-N-VcAcuA.js";import"./ClickAwayListener-DMb0I8qX.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CuT-J_CD.js";import"./index-Cx7C3SmO.js";import"./useControlled-Bv_mN-Tz.js";import"./useId-GJMEvMLg.js";import"./Popper-CMhfExlC.js";import"./Button-ccYrDQpx.js";import"./uniqueId-mX5o-QpF.js";import"./toString-Cpz43v6z.js";import"./isObjectLike-DeBm8QAe.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-B6YS8LfR.js";import"./times-Zrawxmz7.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-uTnNySid.js";import"./mockTableEntity-DSbWRcoC.js";import"./mockFileEntityACLVariants-Cc_iwwNK.js";import"./fakerUtils-ewYVWfCO.js";import"./mockFileEntity-1m3QzhIm.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-BT0UW5f5.js";import"./mockSchema-CIq7xXl3.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-C8kIrZqY.js";import"./utils-B07lb4xZ.js";import"./Link-C4VUduzM.js";import"./Collapse-D9ccO4UN.js";import"./isNil-Bhqo1LuL.js";import"./_Uint8Array-CwY4XA2G.js";import"./_baseIsEqual-CCkvd24j.js";import"./_getTag-O2YfvaR4.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTPNk_kk.js";import"./Skeleton-BHIft4PN.js";import"./inputBaseClasses-LotBqPRG.js";import"./calculateFriendlyFileSize-N19TG0GH.js";import"./CheckCircleTwoTone-CKABL2ap.js";import"./InfoTwoTone-Dg1V0kNu.js";import"./mutation-QWAq6Bhb.js";import"./dayjs.min-pki8ZpMi.js";import"./chunk-AYJ5UCUI-Bf0CTJmh.js";import"./cloneDeep-Bs7Imfre.js";import"./_initCloneObject-DL14YJfm.js";import"./isEqual-B2v3mw20.js";import"./merge-BR1H3Nu7.js";import"./util-BC8VbY8H.js";import"./HelpPopover-CI_6_PWx.js";import"./MarkdownPopover-CBkCEapd.js";import"./LightTooltip-DYCPQOH2.js";import"./MarkdownSynapse-D1xjooFw.js";import"./SkeletonButton-CzjDsWD0.js";import"./SkeletonInlineBlock-Bx_4PQEz.js";import"./SkeletonTable-CquM1AQu.js";import"./SkeletonParagraph-Bi8804pR.js";import"./HelpOutlineTwoTone-bpbCD7ab.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
