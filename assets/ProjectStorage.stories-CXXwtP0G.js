import{g as s}from"./entityHandlers-DFt88O-2.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-Dj-FXM-L.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-Ck9jFART.js";import{g as a}from"./userProfileHandlers-C4gZ--k-.js";import{P as N}from"./ProjectDataAvailability-w1jYYJIY.js";import"./index-CbNftZ-M.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-h8y71P1u.js";import"./mockTeam-DYt6--3y.js";import"./SynapseConstants-CvFa0W_K.js";import"./OrientationBanner-PjngcMqb.js";import"./jsx-runtime-c_k80k9I.js";import"./index-CFoExgxD.js";import"./iframe-BHwFBJYA.js";import"./index-CnkVhKRA.js";import"./spreadSx-CwcO6WA9.js";import"./react-B8UeaaI_.js";import"./FullWidthAlert-BaQWXiCb.js";import"./Alert-DKeoXx0b.js";import"./createTheme-BDZE4uMs.js";import"./resolveComponentProps-4D1_Z3Bm.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CfZ3E6CK.js";import"./createSvgIcon-BymX_799.js";import"./DefaultPropsProvider--W6_3ozQ.js";import"./Close-Okesp8jA.js";import"./IconButton-D79m7hl9.js";import"./ButtonBase-BTR6eTk9.js";import"./useTimeout-CbEcjOlk.js";import"./TransitionGroupContext-D6TjaZAu.js";import"./useIsFocusVisible-tWDH5EMD.js";import"./useEventCallback-DUP60CIi.js";import"./Paper-erlyDIEj.js";import"./Stack-B8rIbmjf.js";import"./getThemeProps-sPCIqLtj.js";import"./useTheme-49FIxpUi.js";import"./Box-DdBwyzts.js";import"./AlertTitle-PiK4DqVr.js";import"./Typography-CGh2EmVu.js";import"./useTheme-2ElaYNDV.js";import"./Grow-DLNgfkhR.js";import"./index-DG19zpYB.js";import"./utils-Dn4vLk5n.js";import"./ClickAwayListener-Ci-zadZU.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-q_ZIkbT1.js";import"./index-DW85jSJq.js";import"./useControlled-CU7aBVd1.js";import"./useId-BAuQjYNJ.js";import"./Popper-Wax_LkTx.js";import"./Button-L64LPDJE.js";import"./uniqueId-BV9aGS_k.js";import"./toString-BRFHHJzT.js";import"./isObjectLike-B6QmiGa6.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-DuNHYRKv.js";import"./times-BLbh2K1u.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-CI2Abv_N.js";import"./mockTableEntity-DZsnfR1w.js";import"./mockFileEntityACLVariants-BW7YQytN.js";import"./fakerUtils-C-rKghqm.js";import"./mockFileEntity-BPi2lEND.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-B_F5VdxF.js";import"./mockSchema-BeR4jQYF.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-I3Pn_uCs.js";import"./utils-9_iaA6Vu.js";import"./Link-UyBJbg6D.js";import"./Collapse-Dctv52y4.js";import"./isNil-N0U-NUG2.js";import"./_Uint8Array-BQSRlu78.js";import"./_baseIsEqual-C5r3oqoi.js";import"./_getTag-I-MJ8Vq2.js";import"./tinycolor-Begke6kS.js";import"./Fade-CkJI4qnB.js";import"./Skeleton-BYIof9JZ.js";import"./inputBaseClasses-fwvdd0Ku.js";import"./calculateFriendlyFileSize-C_c7W2g4.js";import"./CheckCircleTwoTone-BC_pon7U.js";import"./InfoTwoTone-CadoO34Q.js";import"./useMutation-CeoIpbsA.js";import"./isEqual-CUz-YSyh.js";import"./dayjs.min-tBqVgBg5.js";import"./chunk-AYJ5UCUI-BEV2WUsM.js";import"./cloneDeep-DY4AX9-V.js";import"./_initCloneObject-C_4jir8C.js";import"./merge-Bh7rsJ71.js";import"./util-B_BGdMOp.js";import"./HelpPopover-BimzNNpC.js";import"./MarkdownPopover-B8H-elni.js";import"./LightTooltip-Bk-F-zTh.js";import"./MarkdownSynapse-rEAAKujO.js";import"./SkeletonButton-E_XXtAMz.js";import"./SkeletonInlineBlock-CpFq3ioh.js";import"./SkeletonTable-CHN6pOCc.js";import"./SkeletonParagraph-D5-Vxi0g.js";import"./HelpOutlineTwoTone-DZSxc1Fj.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
