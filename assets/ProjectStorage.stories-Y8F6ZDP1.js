import{g as s}from"./entityHandlers-DJfEyYVC.js";import{x as C,g as L,b9 as d,B as k,M as r}from"./useFiles-wPL3noqa.js";import"./VerificationSubmission-dxY1kvC5.js";import"./StringUtils-lE31obNl.js";import{l as O}from"./index-8YOVsS5k.js";import{g as a}from"./userProfileHandlers-DrfBHGYp.js";import{P as N}from"./ProjectDataAvailability-BQQxpBIE.js";import"./index-LhLQxkzK.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-Wczm4-d-.js";import"./mockTeam-D9SmVmxX.js";import"./SynapseConstants-DVzzGxGK.js";import"./OrientationBanner-D3UsPxXx.js";import"./jsx-runtime-N6ye8Cll.js";import"./index-Lo42Gh79.js";import"./iframe-BeLSOqK0.js";import"./index-Bf7y0XZD.js";import"./spreadSx-CwcO6WA9.js";import"./react-D7WMFHc_.js";import"./FullWidthAlert-pApCjOvL.js";import"./Alert-DnAYteIA.js";import"./createTheme-zUoByXU0.js";import"./resolveComponentProps-BJ8uhEQv.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BG5ZtOCT.js";import"./createSvgIcon-B7Fm4obF.js";import"./DefaultPropsProvider-CNnQMBV4.js";import"./Close-DGWi-3t4.js";import"./IconButton-CPNT-u2D.js";import"./ButtonBase-lRXedyLt.js";import"./useTimeout-Fspxp6pC.js";import"./TransitionGroupContext-GoISSeOA.js";import"./useIsFocusVisible-DsSc-LK2.js";import"./useEventCallback-Co6pa197.js";import"./Paper-13cV-0Of.js";import"./Stack-BeytxLtO.js";import"./getThemeProps-Bv2-5X3N.js";import"./useTheme-COBO9Fob.js";import"./Box-atqS-zJr.js";import"./AlertTitle-BbIYRcBk.js";import"./Typography-tG7EFsUv.js";import"./useTheme-CFiH-FLy.js";import"./Grow-C1bIe5cL.js";import"./index-cN61rZYG.js";import"./utils-DiIkWdd2.js";import"./ClickAwayListener-BuLQRAHV.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-lA2laYzz.js";import"./index-DYutZETn.js";import"./useControlled-DZUuzM-I.js";import"./useId-G0RrJkXu.js";import"./Popper-ouRmnn8F.js";import"./Button-Bdir9JO_.js";import"./uniqueId-CeoDGpp8.js";import"./toString-BVOVI4sj.js";import"./isObjectLike-Bl8WEi7v.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BgsEVFJf.js";import"./times-CasrlZO6.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-Ds-kg_-y.js";import"./mockTableEntity-CFsx0bzR.js";import"./mockFileEntityACLVariants-QzSZq7uE.js";import"./fakerUtils-DnnqTHM4.js";import"./mockFileEntity-Dx6CJ4A_.js";import"./mock_file_handle-3wYKbysY.js";import"./mockEntity-S3I7Y0Yn.js";import"./mockSchema-CC4WEl_Z.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-D1RrcX2T.js";import"./utils-DSX88CCK.js";import"./Link-029SLwqk.js";import"./Collapse-thXyZuvh.js";import"./isNil-DAzj2u8t.js";import"./_Uint8Array-BrkH6h_h.js";import"./_baseIsEqual-DIkf-jLy.js";import"./_getTag-dgEDOUa8.js";import"./tinycolor-Begke6kS.js";import"./Fade-B4sfEdAe.js";import"./Skeleton-zk9T0ahk.js";import"./inputBaseClasses-BQUdFaBR.js";import"./calculateFriendlyFileSize-DJRIw0Wx.js";import"./CheckCircleTwoTone-Dm-a3uAR.js";import"./InfoTwoTone-P5w7WfcN.js";import"./mutation-DrD0YQPG.js";import"./dayjs.min-CvwiUaiC.js";import"./chunk-AYJ5UCUI-Dc_jcqd8.js";import"./cloneDeep-EMhmsPM9.js";import"./_initCloneObject-SveHNOq9.js";import"./isEqual-7SDsHlZH.js";import"./merge-DPBYIowj.js";import"./util-CvVmwgLX.js";import"./HelpPopover-CzdTSXjv.js";import"./MarkdownPopover-40zcY8Gg.js";import"./LightTooltip-Bf6vfXL-.js";import"./MarkdownSynapse-BJAUhtaE.js";import"./SkeletonButton-BRl78l5U.js";import"./SkeletonInlineBlock-ixzYcb3a.js";import"./SkeletonTable-CyLitWLR.js";import"./SkeletonParagraph-Bxb6rwDB.js";import"./HelpOutlineTwoTone-BkCI6dx1.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
