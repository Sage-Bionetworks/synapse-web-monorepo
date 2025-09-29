import{g as i}from"./entityHandlers-BR5NxmKW.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-S2V5XiQ5.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DPg2Qv-0.js";import{g as m}from"./userProfileHandlers-B2Qv3B9K.js";import{P as L}from"./ProjectDataAvailability-DGxpjW1i.js";import"./index-C95klW55.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bg7bDmAu.js";import"./mockTeam-Cx9yM2LM.js";import"./SynapseConstants-v0apzKoO.js";import"./OrientationBanner-DFmDuf7j.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-C7cfG45a.js";import"./index-sbO4x94I.js";import"./iframe-B7VjNHo_.js";import"./spreadSx-CwcO6WA9.js";import"./react-4SSRkyYe.js";import"./FullWidthAlert-CNH_Dqfb.js";import"./Alert-DZ8CbtWA.js";import"./createTheme-iVg2ALkG.js";import"./DefaultPropsProvider-CRtidxfI.js";import"./useSlot-C9f_lDyM.js";import"./useForkRef-CYTdLXIx.js";import"./createSimplePaletteValueFilter-C8f66SCi.js";import"./createSvgIcon-D3jU8-M9.js";import"./Close-B3lKWl3N.js";import"./IconButton-tGIn719_.js";import"./useTimeout-CGLlUFdL.js";import"./ButtonBase-COsjseQ1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D013myXI.js";import"./Paper-Cpv8FcM0.js";import"./useTheme-DhBETySk.js";import"./useTheme-CYmu3bRJ.js";import"./Stack-BEg7pLQM.js";import"./extendSxProp-DFEfVq7i.js";import"./getThemeProps-DM9gIAd0.js";import"./Box-DravUX6M.js";import"./AlertTitle-BQ770Cwf.js";import"./Typography-DRTW8NuR.js";import"./index-DZ4LX7su.js";import"./ClickAwayListener-BSIiFOtQ.js";import"./getReactElementRef-BtsaYvD6.js";import"./index-DzYd1Bc_.js";import"./index-BKNU1Rjh.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ChyhBvRk.js";import"./Tooltip-CJHx95Zp.js";import"./index-R2QlNZel.js";import"./useControlled-CfdyZ7Xn.js";import"./Popper-BuFN7FXQ.js";import"./Button-BK6paxd1.js";import"./uniqueId-BYQQpX8l.js";import"./toString-BL0OxC_V.js";import"./isArray-BgCSpe1l.js";import"./isSymbol-DsPf4Jsh.js";import"./times-DRBzd2y5.js";import"./_Uint8Array-C4QD7eya.js";import"./identity-DKeuBCMA.js";import"./toInteger-DhBeNU-T.js";import"./mockTableEntity-D3SvbUfM.js";import"./mockFileEntityACLVariants-F08FucNR.js";import"./fakerUtils-DU1yZH1G.js";import"./mockFileEntity-Bq6FvrO-.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BphVP-8V.js";import"./mockSchema-B8jRrzpA.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CBEaN3hw.js";import"./QueryClientProvider-CQeOfp_m.js";import"./Link-BJq7PyxB.js";import"./Collapse--UWddqzL.js";import"./_baseUniq-SRsv_8xH.js";import"./_getTag-CFPOCuEk.js";import"./isEqual-C3QkQYs2.js";import"./merge-DYvHUG4s.js";import"./_initCloneObject-DwZJqav8.js";import"./tinycolor-Begke6kS.js";import"./Fade-dEjfEC7w.js";import"./inputBaseClasses-Buwfxq9X.js";import"./calculateFriendlyFileSize-8dDJSstk.js";import"./CheckCircleTwoTone-3LbkrL10.js";import"./InfoTwoTone-BBLBptou.js";import"./useMutation-DxiTHEyI.js";import"./dayjs.min-d7VTqjeN.js";import"./chunk-AYJ5UCUI-D7s1T1vu.js";import"./cloneDeep-BOvso_ns.js";import"./Skeleton-lznIIFIC.js";import"./HelpPopover-DSVYXFpa.js";import"./MarkdownPopover-Dzh4G3KF.js";import"./LightTooltip-C8QEL9OI.js";import"./MarkdownSynapse-Dx5uMMSh.js";import"./SkeletonButton-BfnxXOab.js";import"./SkeletonInlineBlock-Xy-wwnM5.js";import"./SkeletonTable-CRk7h5Zb.js";import"./SkeletonParagraph-D_p2L1Wx.js";import"./HelpOutlineTwoTone-DRdgsGsY.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
