import{g as s}from"./entityHandlers-BW70Oqsc.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-DfbAmMh0.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-BcoA1BdE.js";import{g as a}from"./userProfileHandlers-DusKxxYT.js";import{P as N}from"./ProjectDataAvailability-CvzzprKo.js";import"./index--AV8rF-F.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CHizevoX.js";import"./mockTeam-DHjAdERj.js";import"./SynapseConstants-BcNR6UVe.js";import"./OrientationBanner-Stv6OLE_.js";import"./jsx-runtime-Bv99z4dA.js";import"./index-CF0uzcjZ.js";import"./iframe-BGHbsuBY.js";import"./index-BjW319T1.js";import"./spreadSx-CwcO6WA9.js";import"./react-C0_LrvjC.js";import"./FullWidthAlert-CTTU8S7m.js";import"./Alert-BxPsGBYe.js";import"./createTheme-Bw_q8xoX.js";import"./resolveComponentProps-CKpD1PaC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CR5Lr8iG.js";import"./createSvgIcon-DYUB9sIM.js";import"./DefaultPropsProvider-Du8GyagO.js";import"./Close-Cn1wJK3o.js";import"./IconButton-ByhlliFY.js";import"./ButtonBase-D9Xa11JY.js";import"./useTimeout-D0voTyHk.js";import"./TransitionGroupContext-CcdTK9uz.js";import"./useIsFocusVisible-BREXiXd7.js";import"./useEventCallback-B52rbrpi.js";import"./Paper-3DUu0WIH.js";import"./Stack-DOpWO4At.js";import"./getThemeProps-B6Zyu7l2.js";import"./useTheme-DMGyK5v9.js";import"./Box-CBOI_66A.js";import"./AlertTitle-CUlu-O_E.js";import"./Typography-DzYp-gx0.js";import"./useTheme-B2hHvz9R.js";import"./Grow-DQ9AjbB6.js";import"./index-Tn3qadKg.js";import"./utils-BbVrO47L.js";import"./ClickAwayListener-CEWBU0B0.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Dyps0rkr.js";import"./index-D80nYRsb.js";import"./useControlled-YvkHZGdj.js";import"./useId-CETeX-Gn.js";import"./Popper-BDcRHdTY.js";import"./Button-rQ4_7pWR.js";import"./uniqueId-B_W1ZYYh.js";import"./toString-CY2V_kra.js";import"./isObjectLike-Eui5bRYR.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BRqq2NTe.js";import"./times-BSt-OOmR.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CrB09Qip.js";import"./mockTableEntity-DbF7Dckm.js";import"./mockFileEntityACLVariants-fzosrEXG.js";import"./fakerUtils-Cq7ZDwo_.js";import"./mockFileEntity-Bhy8Pz69.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-4F3eU1he.js";import"./mockSchema-DjYReM-B.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-Brk-0fy0.js";import"./utils-fj-tQrRX.js";import"./Link-nOr9EzS9.js";import"./Collapse-CfSLrk2G.js";import"./isNil-BLECkZ0t.js";import"./_Uint8Array-C9b-PzRe.js";import"./_baseIsEqual-D0dXxHzC.js";import"./_getTag-C45n9TB1.js";import"./tinycolor-Begke6kS.js";import"./Fade-DpYMkibC.js";import"./Skeleton-CSx2cjkl.js";import"./inputBaseClasses-BuIFm7nN.js";import"./calculateFriendlyFileSize-CttCZT0w.js";import"./CheckCircleTwoTone-CeSmIQGa.js";import"./InfoTwoTone-CgTBjUs_.js";import"./useMutation-BD58zpYn.js";import"./isEqual-JGHzCGNG.js";import"./dayjs.min-B6HdU3vP.js";import"./chunk-AYJ5UCUI-CzysO3QB.js";import"./cloneDeep-CxCk-B3s.js";import"./_initCloneObject-yXBc5QAf.js";import"./merge-BL56xzl6.js";import"./util-BjaDKoNr.js";import"./HelpPopover-CLjIn7eh.js";import"./MarkdownPopover-C3QTqfhq.js";import"./LightTooltip-BdYjHfeV.js";import"./MarkdownSynapse-CwZv9bbD.js";import"./SkeletonButton-9PT_1GBq.js";import"./SkeletonInlineBlock-BKKpD_Fh.js";import"./SkeletonTable-BnASqwCK.js";import"./SkeletonParagraph-DS1b0li8.js";import"./HelpOutlineTwoTone-LfWKG8m6.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
