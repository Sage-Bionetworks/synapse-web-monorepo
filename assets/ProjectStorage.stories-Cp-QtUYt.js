import{g as s}from"./entityHandlers-DjDnN2tn.js";import{x as C,g as L,b6 as d,B as k,M as r}from"./useFiles-DesDA-4w.js";import"./VerificationSubmission-DsgC4t7y.js";import"./StringUtils-tNCAfVhp.js";import{l as O}from"./index-CkbZWNyQ.js";import{g as a}from"./userProfileHandlers-CLma8H4n.js";import{P as N}from"./ProjectDataAvailability-CXDZ3qWF.js";import"./index-DMQ4lGKk.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-DRRNBEaF.js";import"./mockTeam-BR0WOWUo.js";import"./SynapseConstants-CkNL9tfS.js";import"./OrientationBanner-T98nrl-y.js";import"./jsx-runtime-B8p3sbYp.js";import"./index-w9WeLW3c.js";import"./iframe-Asvj3i57.js";import"./index-BsCR_eh5.js";import"./spreadSx-CwcO6WA9.js";import"./react-dUjTuPER.js";import"./FullWidthAlert-DJCHcIx-.js";import"./Alert-BjpfLK2B.js";import"./createTheme-DfE_l7fh.js";import"./resolveComponentProps-DK3a2xv6.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BikEN9Oe.js";import"./createSvgIcon-CFiQ1ApI.js";import"./DefaultPropsProvider-B8LU8o9q.js";import"./Close-ChfM_AlY.js";import"./IconButton-DoJdjScg.js";import"./ButtonBase-BI1CiCIR.js";import"./useTimeout-DtkCtw32.js";import"./TransitionGroupContext-E5HcsAwp.js";import"./useIsFocusVisible-yzb205lP.js";import"./useEventCallback-H7A-SEZM.js";import"./Paper-DCHmdWJj.js";import"./Stack-CotbFTt2.js";import"./getThemeProps-BDyn-BEF.js";import"./useTheme-9PQSeyW-.js";import"./Box-CnxWcHOe.js";import"./AlertTitle-DitZ3tPO.js";import"./Typography-BvS3uuok.js";import"./useTheme-CQr96cnb.js";import"./Grow-s44nII5P.js";import"./index-DgLB2t6n.js";import"./utils-DNh8IEA0.js";import"./ClickAwayListener-D8lghhOx.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BnJQ2gnX.js";import"./index-GtvJuuzD.js";import"./useControlled-D1WSYfsz.js";import"./useId-BQ-eUGSB.js";import"./Popper-8eBb15T8.js";import"./Button-DlKIFd8I.js";import"./uniqueId-SeJWhHXZ.js";import"./toString-D7KqsNPL.js";import"./isObjectLike-DimCDoBQ.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BquGUEY5.js";import"./times-6Wxkx8NU.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-COdfDz0w.js";import"./mockTableEntity-7xQXJ-X2.js";import"./mockFileEntityACLVariants-xU6rHJ7-.js";import"./fakerUtils-CQBCSlAQ.js";import"./mockFileEntity-BkpLlGXg.js";import"./mock_file_handle-DS_yjaGE.js";import"./mockEntity-IWT6NH5j.js";import"./mockSchema-BrabJjph.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CgQSlLpx.js";import"./utils-DIJ1YRVE.js";import"./Link-OJK74gkl.js";import"./Collapse-DF4Jc8cn.js";import"./isNil-BXRYPzmI.js";import"./_Uint8Array-oLKfr7O_.js";import"./_baseIsEqual-BmBs-yHc.js";import"./_getTag-BjkIdouv.js";import"./tinycolor-Begke6kS.js";import"./Fade-flmyQvY4.js";import"./Skeleton-CkdkB3Ve.js";import"./inputBaseClasses-DQaoDeQ9.js";import"./calculateFriendlyFileSize-DpR2ltQV.js";import"./CheckCircleTwoTone-oHlSZvuV.js";import"./InfoTwoTone-fltNCXgD.js";import"./mutation-BE5QGJq0.js";import"./dayjs.min-C2QKGBMu.js";import"./chunk-AYJ5UCUI-pJeN8JWb.js";import"./cloneDeep-DLb1zHSL.js";import"./_initCloneObject-wFbTLhun.js";import"./isEqual-DvQ_cDaS.js";import"./merge-DRxhOKVw.js";import"./util-CS-MxvAn.js";import"./HelpPopover-DuFyY1BU.js";import"./MarkdownPopover-B1xHnzWN.js";import"./LightTooltip-BfVCC2Ko.js";import"./MarkdownSynapse-DFKnmtl_.js";import"./useMutation-1QQPCB8E.js";import"./SkeletonButton-BC2YHFS7.js";import"./SkeletonInlineBlock-CkxRhav5.js";import"./SkeletonTable-DwklkASW.js";import"./SkeletonParagraph-Pt6HGN5V.js";import"./HelpOutlineTwoTone-DF5xHyn9.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
