import{g as s}from"./entityHandlers-D3jM7i0y.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-Dr7u_Bva.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-D2UXnbti.js";import{g as a}from"./userProfileHandlers-CG-pKs5d.js";import{P as N}from"./ProjectDataAvailability-DaT80YdS.js";import"./index-CzaLJ53_.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject--WIjDl2v.js";import"./mockTeam-Bar3OoiW.js";import"./SynapseConstants-BanPYtN2.js";import"./OrientationBanner-DzTWIvmN.js";import"./jsx-runtime-CdKXYHq3.js";import"./index-pFihaiJB.js";import"./iframe-DGWk3dtm.js";import"./index-vb57DutA.js";import"./spreadSx-CwcO6WA9.js";import"./react-WVV_Bngv.js";import"./FullWidthAlert-3Lw8ZGai.js";import"./Alert-DsIOtgCY.js";import"./createTheme-6OKFmZq8.js";import"./resolveComponentProps-BuENAeaX.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-LxaFHDGW.js";import"./createSvgIcon-BkjJkEMb.js";import"./DefaultPropsProvider-B9KQWTTu.js";import"./Close-BJDJEVVG.js";import"./IconButton-BM_7udd3.js";import"./ButtonBase-CE1J5Bjq.js";import"./useTimeout-B3NVn0q2.js";import"./TransitionGroupContext-VJeEL-bF.js";import"./useIsFocusVisible-DtTWJUhG.js";import"./useEventCallback-Rz2loLNW.js";import"./Paper-BNcB9yJp.js";import"./Stack-DjjVVnDH.js";import"./getThemeProps-V7XIfBtU.js";import"./useTheme-TYTrCo8P.js";import"./Box-BksAr4qV.js";import"./AlertTitle-CrJmCFK9.js";import"./Typography-CYinS4Gd.js";import"./useTheme-BK0D5BzJ.js";import"./Grow-D8wu1iHX.js";import"./index-CX5jh9yq.js";import"./utils-8j5hwKUm.js";import"./ClickAwayListener-rrs22D9n.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DVMPSB7k.js";import"./index-rhqfbkIa.js";import"./useControlled-DH3KsJOY.js";import"./useId-CvtASGF1.js";import"./Popper-Dza_qJqA.js";import"./Button-B082zdSZ.js";import"./uniqueId-m19bO9oQ.js";import"./toString-CI-tOB9j.js";import"./isObjectLike-Blr26enQ.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-BYY1_bZL.js";import"./times-C-fa7jla.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-B2xRwE5d.js";import"./mockTableEntity-BBoLRlmw.js";import"./mockFileEntityACLVariants-IVWHizGT.js";import"./fakerUtils-VLRa_U07.js";import"./mockFileEntity-eyhmimx8.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-BVMZ9Rz6.js";import"./mockSchema-BECeZWVp.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-BEghArMJ.js";import"./utils-BTDzrboP.js";import"./Link-BXQgRgUp.js";import"./Collapse-CJtVz9c-.js";import"./isNil-Br_fGC8c.js";import"./_Uint8Array-01EqBUPq.js";import"./_baseIsEqual-BYN_PiCw.js";import"./_getTag-C1uljw8-.js";import"./tinycolor-Begke6kS.js";import"./Fade-DJO1wvNj.js";import"./Skeleton-Dyn6VGG3.js";import"./inputBaseClasses-BWvchspz.js";import"./calculateFriendlyFileSize-DIAohWT-.js";import"./CheckCircleTwoTone-B9avxx8U.js";import"./InfoTwoTone-DM8MXETk.js";import"./useMutation-CLVgkmvQ.js";import"./isEqual-pwBT1dbs.js";import"./dayjs.min-mMu8AzRI.js";import"./chunk-AYJ5UCUI-CQIGzzgu.js";import"./cloneDeep-D86TpKYV.js";import"./_initCloneObject-VZ8j85Z0.js";import"./merge-CKYP9hiF.js";import"./util-D2Mqgivw.js";import"./HelpPopover-BubLh1bp.js";import"./MarkdownPopover-pVQsit8Q.js";import"./LightTooltip-Bty75P62.js";import"./MarkdownSynapse-SGNPlq_P.js";import"./SkeletonButton-C5pjF938.js";import"./SkeletonInlineBlock-CW8_Uh7l.js";import"./SkeletonTable-CmDwwKSj.js";import"./SkeletonParagraph-HrWWCVZU.js";import"./HelpOutlineTwoTone-DSXyyE-x.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
