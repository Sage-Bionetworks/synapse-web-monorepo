import{g as i}from"./entityHandlers-CrN7YOm9.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-B1qLIkzS.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-DcQEmvhX.js";import{g as m}from"./userProfileHandlers-B-Iy-z51.js";import{P as L}from"./ProjectDataAvailability-CCiCzeGv.js";import"./index-DWqZJBMK.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BAgmZpaJ.js";import"./mockTeam--UauFqoj.js";import"./SynapseConstants-BY0D-OP_.js";import"./OrientationBanner-Cng4AXI7.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-C-tNTDG3.js";import"./index-DqdBbDO8.js";import"./iframe-Bscbx4yJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-CurQ8RHm.js";import"./FullWidthAlert-CO4KYYf2.js";import"./Alert-BHPQbSFU.js";import"./createTheme-B_Ol_SGM.js";import"./DefaultPropsProvider-NLw5xhj0.js";import"./useSlot-BXDp-GLk.js";import"./useForkRef-DOKoFcdj.js";import"./createSimplePaletteValueFilter-IPuPUECy.js";import"./createSvgIcon-DDgh6Xid.js";import"./Close-CZRhNBSW.js";import"./IconButton-CUYRsHcj.js";import"./useTimeout-d-KGj_IM.js";import"./ButtonBase-DOP0xNZr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ueQLis1i.js";import"./Paper-U0cK4HBP.js";import"./useTheme-CYJMJKLP.js";import"./useTheme-C7guiOJZ.js";import"./Stack-kCm0vDNS.js";import"./extendSxProp-BKGAgVYg.js";import"./getThemeProps-DV1Unc6F.js";import"./Box-BM9usSYA.js";import"./AlertTitle-DnXLKxO4.js";import"./Typography-BCZ0WOI8.js";import"./index-OhczQznD.js";import"./ClickAwayListener-DmRnLi5_.js";import"./getReactElementRef-BxWWKsOF.js";import"./index-i7tYzgne.js";import"./index-CQyiV8a0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CM_jMmlK.js";import"./Tooltip-BJ3NsGkm.js";import"./index-B8FA-M0N.js";import"./useControlled-BhMBs8Uu.js";import"./Popper-GFYTG-1I.js";import"./Button-eHv0vqs7.js";import"./uniqueId-D-QSU24K.js";import"./toString-4oBISV9q.js";import"./isArray-CsrBVXxZ.js";import"./isSymbol-Dd0ybAOG.js";import"./times-CtaqNhXn.js";import"./_Uint8Array-BH4_uO8n.js";import"./identity-DKeuBCMA.js";import"./toInteger-B-PDAa_Z.js";import"./mockTableEntity-JCMdT7KC.js";import"./mockFileEntityACLVariants-Bsoi-syx.js";import"./fakerUtils-C8nQODpO.js";import"./mockFileEntity-DXzCIJfu.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-7_kJBMjB.js";import"./mockSchema-BMPVAHsk.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-QtQ0oXLq.js";import"./QueryClientProvider-Dh2enzOq.js";import"./Link-DOHlnlBk.js";import"./Collapse-BHNRRWil.js";import"./_baseUniq-BIbvDF98.js";import"./_getTag-zxu8Qdc7.js";import"./isEqual-FLq9Pc_X.js";import"./merge-Dwa05pYk.js";import"./_initCloneObject-ntAgbFOg.js";import"./tinycolor-Begke6kS.js";import"./Fade-D-6_yJFg.js";import"./inputBaseClasses-DDS4gDmL.js";import"./calculateFriendlyFileSize-IUUKm2Ca.js";import"./CheckCircleTwoTone-BXAr9Xv6.js";import"./InfoTwoTone-Cj21ugug.js";import"./useMutation-5Y6tQ73r.js";import"./dayjs.min-Mo35SBAh.js";import"./chunk-AYJ5UCUI-CYhRgAbg.js";import"./cloneDeep-BpXQur1c.js";import"./Skeleton-DBOrl0In.js";import"./HelpPopover-DPK3PwXb.js";import"./MarkdownPopover-CIpepKWz.js";import"./LightTooltip-DA3kSX74.js";import"./MarkdownSynapse-BdOWqOtn.js";import"./SkeletonButton-BDpRc2jn.js";import"./SkeletonInlineBlock-BD8MFII2.js";import"./SkeletonTable-MEylhMBG.js";import"./SkeletonParagraph-Pt0mRQ28.js";import"./HelpOutlineTwoTone-BoTXiJRM.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var _,P,R;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var E,u,j;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const ur=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,ur as __namedExportsOrder,Er as default};
