import{g as i}from"./entityHandlers-BBFl-FGH.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-D_Jzezen.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-CoSCsSWx.js";import{g as m}from"./userProfileHandlers-C5-BLZDv.js";import{P as L}from"./ProjectDataAvailability-BVkA59Qa.js";import"./index-C3xDxtYv.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-fmYb7LH_.js";import"./mockTeam-CU0pi5o7.js";import"./SynapseConstants-B24uwL7H.js";import"./OrientationBanner-Bzpnatw7.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-5AUC81Rv.js";import"./index-DC_F6LC3.js";import"./iframe-Dzq2XZAY.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAQWyoiE.js";import"./FullWidthAlert-RK7cjeY8.js";import"./Alert-BBtsbdxl.js";import"./createTheme-uZyfii9J.js";import"./DefaultPropsProvider-IA8PyDsh.js";import"./useSlot-CMQ7l9V4.js";import"./useForkRef-D7I1FwBO.js";import"./createSimplePaletteValueFilter-D03VuJDr.js";import"./createSvgIcon-fotE-8V0.js";import"./Close-9I607_XN.js";import"./IconButton-BOqOkpuw.js";import"./useTimeout-CQQZ1-To.js";import"./ButtonBase-C7QCcZ9j.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BmYsIlrJ.js";import"./Paper-DqTB2d7e.js";import"./useTheme-BJnMudwe.js";import"./useTheme-Dbhdk_AW.js";import"./Stack-CsQgmpOy.js";import"./extendSxProp-Dubew6gA.js";import"./getThemeProps-CdHcYIvs.js";import"./Box-BMvETEd-.js";import"./AlertTitle-CF11nEVt.js";import"./Typography-6ljS8WSa.js";import"./index-5Vl8GNRO.js";import"./ClickAwayListener-cPSXo_7Q.js";import"./getReactElementRef-Dqx5Gd2m.js";import"./index-CxSdzjMe.js";import"./index-Cr3It6Nz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-gIniXPfT.js";import"./Tooltip-K10xvHWr.js";import"./index-Cp1Xui9X.js";import"./useControlled-BHKoj0WG.js";import"./Popper-DzbGTkmd.js";import"./Button-BF8aAEkM.js";import"./uniqueId-D0_UbeP7.js";import"./toString-BbBquw9e.js";import"./isArray-DVqPlFSm.js";import"./isSymbol-BX3MMBjX.js";import"./times-CzbyTmKw.js";import"./_Uint8Array-Dl24TG1b.js";import"./identity-DKeuBCMA.js";import"./toInteger-6wCYw44s.js";import"./mockTableEntity-BoKzX23m.js";import"./mockFileEntityACLVariants-C6O7UccZ.js";import"./fakerUtils-ktm8IqE1.js";import"./mockFileEntity-D9WvmNSb.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-CTg-Sqdy.js";import"./mockSchema-sI_RgYTV.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CgX23BOz.js";import"./QueryClientProvider-BJ02iD0i.js";import"./Link-BfaPB7SL.js";import"./Collapse-Ca7dhEVy.js";import"./_baseUniq-9aYP-DvN.js";import"./_getTag-B8uRlY8z.js";import"./isEqual-Cx0fd_nO.js";import"./merge-CwTy9me0.js";import"./_initCloneObject-CVT5RH-2.js";import"./tinycolor-Begke6kS.js";import"./Fade-VmjN6dao.js";import"./inputBaseClasses-K2LQzToB.js";import"./calculateFriendlyFileSize-Gdm1D_jE.js";import"./CheckCircleTwoTone-BfTHwYaO.js";import"./InfoTwoTone-DdxWIabw.js";import"./useMutation-FhdIYqNP.js";import"./dayjs.min-Bv7VhKIm.js";import"./chunk-AYJ5UCUI-cJ-Mesdm.js";import"./cloneDeep-DZzAGQd1.js";import"./Skeleton-BGNF9a_J.js";import"./HelpPopover-BgVYgTDp.js";import"./MarkdownPopover-BdfKe8IG.js";import"./LightTooltip-C8iUsEd7.js";import"./MarkdownSynapse-B4wZyiSY.js";import"./SkeletonButton-DA1spcop.js";import"./SkeletonInlineBlock-nCQaFi0I.js";import"./SkeletonTable-B2ewvBFl.js";import"./SkeletonParagraph-Dg2L9IU-.js";import"./HelpOutlineTwoTone-DASy4auz.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
