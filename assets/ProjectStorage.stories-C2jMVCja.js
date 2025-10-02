import{g as i}from"./entityHandlers-C0Ez3zNq.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DKVd1YTG.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-B9gOQ_3F.js";import{g as m}from"./userProfileHandlers-Bq8CjAUk.js";import{P as L}from"./ProjectDataAvailability-5tcdUQFq.js";import"./index-BXHXM9cz.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-yLZ1SwcE.js";import"./mockTeam-C22NgMJ3.js";import"./SynapseConstants-B4Tpha3X.js";import"./OrientationBanner-D1Gj-0BO.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BTulVV7N.js";import"./index-BXzTDALf.js";import"./iframe-DqtMJ7kH.js";import"./spreadSx-CwcO6WA9.js";import"./react-CkRYgY7R.js";import"./FullWidthAlert-BvHis07F.js";import"./Alert-D5JDd2WV.js";import"./createTheme-Cm05LnB0.js";import"./DefaultPropsProvider-CQjsmjzx.js";import"./useSlot-D-kym-2K.js";import"./useForkRef-DxVghhL0.js";import"./createSimplePaletteValueFilter-VPPSjR6x.js";import"./createSvgIcon--QUYyvLe.js";import"./Close-CovftTFs.js";import"./IconButton-CSrxkIE2.js";import"./useTimeout-CAjSMdh0.js";import"./ButtonBase-C2aQNHr6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DF4qmzkO.js";import"./Paper-BQ-oZy9Y.js";import"./useTheme-BEoXmG8b.js";import"./useTheme-Bw_VFAy_.js";import"./Stack-DpwU85K6.js";import"./extendSxProp-NTFwLVkN.js";import"./getThemeProps-Cdnw0_MW.js";import"./Box-Bc5MnF01.js";import"./AlertTitle-CZt34-cU.js";import"./Typography-ButTJgkW.js";import"./index-C6TBygr3.js";import"./ClickAwayListener-TNChXEbJ.js";import"./getReactElementRef-12JOJnF4.js";import"./index-Bd4oQ-C2.js";import"./index-DseqZZS0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DDeYcOcx.js";import"./Tooltip-D_YYABAH.js";import"./index-CNgLHgad.js";import"./useControlled-BVj0-e3Z.js";import"./Popper-Bf618VVA.js";import"./Button-CBJLa-RB.js";import"./uniqueId-CYWfzcM9.js";import"./toString-Df1NouPK.js";import"./isArray-CKaypPRM.js";import"./isSymbol-CvPO_vNK.js";import"./times-CQ4zNNYh.js";import"./_Uint8Array-JgX0_gnb.js";import"./identity-DKeuBCMA.js";import"./toInteger-BoZRhtQm.js";import"./mockTableEntity-DJV7ossE.js";import"./mockFileEntityACLVariants-DXzajFBp.js";import"./fakerUtils-BF21bblg.js";import"./mockFileEntity-DSgykuGs.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DlwVdNi4.js";import"./mockSchema-CUxIh76V.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DwiEHutI.js";import"./QueryClientProvider-Bbxj_eMn.js";import"./Link-BkSZL4Ts.js";import"./Collapse-DY2HFmzv.js";import"./_baseUniq-CPt4iqUN.js";import"./_getTag-BLJc4KEH.js";import"./isEqual-Cl6IiOwx.js";import"./merge-CKRs6iQK.js";import"./_initCloneObject-CkmVyS0A.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5e0KJGg.js";import"./inputBaseClasses-CUwZQaMG.js";import"./calculateFriendlyFileSize-CGKyyDbL.js";import"./CheckCircleTwoTone-BN5GUe2y.js";import"./InfoTwoTone-DpSCXbve.js";import"./useMutation-DxqLSNHg.js";import"./dayjs.min-Bbcgpwmw.js";import"./chunk-AYJ5UCUI-B53NyrOq.js";import"./cloneDeep-0sjnJFIY.js";import"./Skeleton-CejZ9epo.js";import"./HelpPopover-Iwkwobap.js";import"./MarkdownPopover-BVMYkNAN.js";import"./LightTooltip-DgmLNoEa.js";import"./MarkdownSynapse-ChPYGp60.js";import"./SkeletonButton-BLtFad3n.js";import"./SkeletonInlineBlock-BZRMi8hL.js";import"./SkeletonTable-StKjsVhq.js";import"./SkeletonParagraph-miKbxvBv.js";import"./HelpOutlineTwoTone-BAEXosc7.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
