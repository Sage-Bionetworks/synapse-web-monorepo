import{g as i}from"./entityHandlers-NU5duXjZ.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-t9v35U2i.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DRk3nLgu.js";import{g as m}from"./userProfileHandlers-ENsg11yB.js";import{P as L}from"./ProjectDataAvailability-Cpy3rjtR.js";import"./index-BFX2yun_.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-G4P4_Mme.js";import"./mockTeam-D9oV7Ydv.js";import"./SynapseConstants-CcfR0DIk.js";import"./OrientationBanner-B-04YSMJ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CtDKKa0U.js";import"./index-1HXtfYom.js";import"./iframe-BdjG-Zgk.js";import"./spreadSx-CwcO6WA9.js";import"./react-ClXGUsLa.js";import"./FullWidthAlert-KzKweQ9t.js";import"./Alert-bNm4mLGx.js";import"./createTheme-ciMni0qa.js";import"./DefaultPropsProvider-D_s83V3k.js";import"./useSlot-9UGUOyqF.js";import"./useForkRef-Cezz-HIx.js";import"./createSimplePaletteValueFilter-CkzcpCVo.js";import"./createSvgIcon-vewk6_f2.js";import"./Close-D7UnGgko.js";import"./IconButton-Ci7VaVnc.js";import"./useTimeout-BdQOCLhC.js";import"./ButtonBase-CF-pjlYU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DB8doLIA.js";import"./Paper-COGDEYw8.js";import"./useTheme-D4B7rRhu.js";import"./useTheme-MSQ1_xG-.js";import"./Stack-Ax3sx8_g.js";import"./extendSxProp-DxZMoEIV.js";import"./getThemeProps--ESrKTIJ.js";import"./Box-De_GBZN2.js";import"./AlertTitle-CmYIGw7T.js";import"./Typography-Cng5kB_f.js";import"./index-DD_KlTMz.js";import"./ClickAwayListener-BeRTEART.js";import"./getReactElementRef-IRVIlyva.js";import"./index-BgE1_T6z.js";import"./index-D7nbxaq_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C8SY8gNO.js";import"./Tooltip-OmIUu3rZ.js";import"./index-CLtaDG6d.js";import"./useControlled-CGaThIIN.js";import"./Popper-BuSknCam.js";import"./Button-DAEG6DBg.js";import"./uniqueId-Cn3Q50Jo.js";import"./toString-CeoNhWM5.js";import"./isArray-CeK0UB0C.js";import"./isSymbol-Cj-57wd3.js";import"./times-yXSO7mCc.js";import"./_Uint8Array-D4UkXCM5.js";import"./identity-DKeuBCMA.js";import"./toInteger-CnZynjVs.js";import"./mockTableEntity-CzPw6nAF.js";import"./mockFileEntityACLVariants-DMNo7A0T.js";import"./fakerUtils-CuD_tqcB.js";import"./mockFileEntity-B5GHQ0w_.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BqTL1mO9.js";import"./mockSchema-Dt1ofcGI.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-Bb_M0IAQ.js";import"./QueryClientProvider-i5wMljVB.js";import"./Link-D4lP-5yK.js";import"./Collapse-d51UqjZ9.js";import"./_baseUniq-CSvM0ryX.js";import"./_getTag-CbDSuN-L.js";import"./isEqual-46N-DEgD.js";import"./merge-Dc2gr-KW.js";import"./_initCloneObject-BIzIx0tv.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bc_RiEkF.js";import"./inputBaseClasses-UPMTAR_W.js";import"./calculateFriendlyFileSize-Bvdvbu0N.js";import"./CheckCircleTwoTone-kRLCQGNt.js";import"./InfoTwoTone-Bs3-yMB0.js";import"./useMutation-DSULcukd.js";import"./dayjs.min-B7WoX0WU.js";import"./chunk-AYJ5UCUI-Cdcs88LW.js";import"./cloneDeep-BcxmJbMi.js";import"./Skeleton-DeRguUhs.js";import"./HelpPopover-BQyPI_b0.js";import"./MarkdownPopover-CLv0mZPm.js";import"./LightTooltip-C4aBJWEK.js";import"./MarkdownSynapse-DUZJVcQU.js";import"./SkeletonButton-Dl6K5L0X.js";import"./SkeletonInlineBlock-y81hs7XG.js";import"./SkeletonTable-CxnFy7RP.js";import"./SkeletonParagraph-d6baLCQZ.js";import"./HelpOutlineTwoTone-BNC2ZO41.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
