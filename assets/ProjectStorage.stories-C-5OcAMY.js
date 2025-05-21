import{g as s}from"./entityHandlers-1O88llWu.js";import{x as C,g as L,ba as d,B as k,M as r}from"./useFiles-CvqXu3qP.js";import"./VerificationSubmission-B0kBNeMy.js";import"./StringUtils-CzgJJW-6.js";import{l as O}from"./index-BE71bAqU.js";import{g as a}from"./userProfileHandlers-B7pDEFqX.js";import{P as N}from"./ProjectDataAvailability-CMENfipB.js";import"./index--fw_KklQ.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-B0KiAiju.js";import"./mockTeam-9eVd25o0.js";import"./SynapseConstants-BlsqOTHC.js";import"./OrientationBanner-2QI37Wfz.js";import"./jsx-runtime-CmUBiTSS.js";import"./index-B2mmVxOD.js";import"./iframe-DsjoRgeV.js";import"./index-D5VFXiz7.js";import"./spreadSx-CwcO6WA9.js";import"./react-C4gcExyr.js";import"./FullWidthAlert-BvgWiVQR.js";import"./Alert-B-cn8V0o.js";import"./createTheme-BYqAVevx.js";import"./resolveComponentProps-DIVgucYq.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-B7GgJKmZ.js";import"./createSvgIcon-CXv11Dc8.js";import"./DefaultPropsProvider-HrPDOaQj.js";import"./Close-8Hs4OiKc.js";import"./IconButton-C2H3UkEd.js";import"./ButtonBase-Ba5_fvQa.js";import"./useTimeout-DfID44yi.js";import"./TransitionGroupContext-CNQWmoPq.js";import"./useIsFocusVisible-DNP6iLGB.js";import"./useEventCallback-DTUVY-xC.js";import"./Paper-C5IK7UQQ.js";import"./Stack-nY20Dr3r.js";import"./getThemeProps-eRGJN_py.js";import"./useTheme-GMYttHBr.js";import"./Box-B5_L4GWb.js";import"./AlertTitle-CjTD5uFs.js";import"./Typography-BM-M-p3D.js";import"./useTheme-DODxR0TP.js";import"./Grow-CLzqoJXl.js";import"./index-DILzB3oy.js";import"./utils-Co3IOaXm.js";import"./ClickAwayListener-C2W41t9R.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-D8GA7O7E.js";import"./index-B1J7WTRX.js";import"./useControlled-B2db4EWk.js";import"./useId-B2N2XShu.js";import"./Popper-CBcXCHhQ.js";import"./Button-MnbgKpIJ.js";import"./uniqueId-BxhAah8S.js";import"./toString-BkYqruvC.js";import"./isObjectLike-DP5A2EKp.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-jhg71ZvJ.js";import"./times-CPC6xvmp.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-D1qWWQGl.js";import"./mockTableEntity-ewGucJ1t.js";import"./mockFileEntityACLVariants-B1u6RZDg.js";import"./fakerUtils-5YUaYIkA.js";import"./mockFileEntity-lOsbNXT6.js";import"./mock_file_handle-Ct1MSfYs.js";import"./mockEntity-CV7km0PO.js";import"./mockSchema-DBRSdCBz.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Bx5eY2jj.js";import"./utils-DKTCckgQ.js";import"./Link-C7sf-qNT.js";import"./Collapse-beDlu7I0.js";import"./isNil-CZYLZObm.js";import"./_Uint8Array-BgOhq7U8.js";import"./_baseIsEqual-DA4b58eN.js";import"./_getTag-DQ9vJk3b.js";import"./tinycolor-Begke6kS.js";import"./Fade-DFW6SVXN.js";import"./Skeleton--p_DRxXi.js";import"./inputBaseClasses-DiOO8wJ9.js";import"./calculateFriendlyFileSize-DSmqR10B.js";import"./CheckCircleTwoTone-DoCCywjP.js";import"./InfoTwoTone-ZuwsmNOx.js";import"./mutation-BIqmHUfI.js";import"./dayjs.min-Due_NQNo.js";import"./chunk-AYJ5UCUI-BafslQL4.js";import"./cloneDeep-w5MjdiAW.js";import"./_initCloneObject-DiF2uFhN.js";import"./isEqual-BohAHrtr.js";import"./merge-BKjEj6FU.js";import"./util-DQ61J2Bl.js";import"./HelpPopover-DImnpYDn.js";import"./MarkdownPopover-C5Q0nVND.js";import"./LightTooltip-CnPUiGwY.js";import"./MarkdownSynapse-CxoQsrlL.js";import"./SkeletonButton-qf1roUqK.js";import"./SkeletonInlineBlock-FTQSFqiF.js";import"./SkeletonTable-Dr01XARY.js";import"./SkeletonParagraph-CZDAN-o-.js";import"./HelpOutlineTwoTone-C-5gYRNj.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
