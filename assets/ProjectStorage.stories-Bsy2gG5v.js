import{g as s}from"./entityHandlers-DPQyCXtW.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-CAlHmr5T.js";import"./VerificationSubmission-BI5WaB2N.js";import"./StringUtils-BXg3aRdm.js";import{l as O}from"./index-CJca-8Gt.js";import{g as a}from"./userProfileHandlers-YCeqWjJW.js";import{P as N}from"./ProjectDataAvailability-BPq_Kjv8.js";import"./index-MZNyO3KY.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-JUZW5yQT.js";import"./mockTeam-naHc2c-e.js";import"./SynapseConstants-bJg229mq.js";import"./OrientationBanner-DGngaujv.js";import"./jsx-runtime-CbE1-_Hu.js";import"./index-DRsegcgA.js";import"./iframe-DRSrCG1x.js";import"./index-LifXYACQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxM2qjbL.js";import"./FullWidthAlert-3uSpNraA.js";import"./Alert-Bw1ywpIE.js";import"./createTheme-C7_V6wpJ.js";import"./resolveComponentProps-BN9HfiQD.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C78wZDeC.js";import"./createSvgIcon-18JsIaS-.js";import"./DefaultPropsProvider-C12ceKGQ.js";import"./Close-DOqyLWj4.js";import"./IconButton-sxPalBtr.js";import"./ButtonBase-CmnTtM5f.js";import"./useTimeout-DQT_LAZn.js";import"./TransitionGroupContext-OZASuHiR.js";import"./useIsFocusVisible-obP2HoUH.js";import"./useEventCallback-BvBBsNbH.js";import"./Paper-CqJ40SAY.js";import"./Stack-Dg2xMObN.js";import"./getThemeProps-BLKeHxpS.js";import"./useTheme-CQ-aVgZE.js";import"./Box-D2GFn1fE.js";import"./AlertTitle-BCwKsMwc.js";import"./Typography-lU14u2GV.js";import"./useTheme-CRuycb0z.js";import"./Grow-CPE-J13k.js";import"./index-CziNeJdu.js";import"./utils-cOnYn6rO.js";import"./ClickAwayListener-D_gLR8Uu.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-v1tj7X5H.js";import"./index-C7UNvflh.js";import"./useControlled-CujF-W-N.js";import"./useId-C6f6WTtB.js";import"./Popper-IFEDVLcM.js";import"./Button-BVRJ5q5Y.js";import"./uniqueId-CkX8RXYg.js";import"./toString-CmzALc6y.js";import"./isObjectLike-Cqjtje0X.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-C30cp9od.js";import"./times-CvYdDYV5.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-huepMrbI.js";import"./mockTableEntity-DoWWpSzP.js";import"./mockFileEntityACLVariants-HY9S-Wf_.js";import"./fakerUtils-CqqkKSib.js";import"./mockFileEntity-BAlt1Fl3.js";import"./mock_file_handle-DwnN5i7-.js";import"./mockEntity-C3Dq6sUK.js";import"./mockSchema-BLBAFWw9.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-szSrlcgI.js";import"./utils-CsQgGKbD.js";import"./Link-Cm7aV6n7.js";import"./Collapse-CPeMUQEz.js";import"./isNil-qGzJk0AT.js";import"./_Uint8Array-D2WfOTdE.js";import"./_baseIsEqual-CV2sNz5h.js";import"./_getTag-C1ILiECS.js";import"./tinycolor-Begke6kS.js";import"./Fade-vW6FvaYU.js";import"./Skeleton-Dgpvxrx_.js";import"./inputBaseClasses-DIfFvLjN.js";import"./calculateFriendlyFileSize-D9Fs0pNs.js";import"./CheckCircleTwoTone-DGPS0HlM.js";import"./InfoTwoTone-DBfE9lFd.js";import"./useMutation-DBuu9s3L.js";import"./isEqual-DE_dUMMt.js";import"./dayjs.min-rU54EIQ-.js";import"./chunk-AYJ5UCUI-CRE7f-_Q.js";import"./cloneDeep-BgDpPnkU.js";import"./_initCloneObject-Dh3qvFnp.js";import"./merge-Bw0szGHI.js";import"./util-pPivCuBa.js";import"./HelpPopover-BXpgmgIv.js";import"./MarkdownPopover-e1vaQpgo.js";import"./LightTooltip-PCl5UWXu.js";import"./MarkdownSynapse-feYU6r02.js";import"./SkeletonButton-DYVaAb0X.js";import"./SkeletonInlineBlock-CNo-zot-.js";import"./SkeletonTable-CX6FtGwf.js";import"./SkeletonParagraph-CcLfVfMY.js";import"./HelpOutlineTwoTone-BoKP6I7c.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
