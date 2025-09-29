import{g as i}from"./entityHandlers-BbZUKVYC.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles--CcWu9gA.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DxrQlaKO.js";import{g as m}from"./userProfileHandlers-CKE12sYk.js";import{P as L}from"./ProjectDataAvailability-BtcrgDii.js";import"./index-CBAothUr.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-2ntjsuC_.js";import"./mockTeam-Obr_QFa_.js";import"./SynapseConstants-ghF4YRrd.js";import"./OrientationBanner-DU98_TTV.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Dxjk3aKI.js";import"./index-DfH0xLBM.js";import"./iframe-BBbPPlq-.js";import"./spreadSx-CwcO6WA9.js";import"./react-DpIdD-62.js";import"./FullWidthAlert-BQJVxlFp.js";import"./Alert-RljSBmGs.js";import"./createTheme-C4Li-FeX.js";import"./DefaultPropsProvider-C5HBAaLd.js";import"./useSlot-ij2OcnyH.js";import"./useForkRef-C38TISwS.js";import"./createSimplePaletteValueFilter-CewVvtaD.js";import"./createSvgIcon-DgQOn1iH.js";import"./Close-BvUVUi_-.js";import"./IconButton-Bl0V3heo.js";import"./useTimeout-ByqevPT1.js";import"./ButtonBase-BXFH7Ps4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C03GnYa5.js";import"./Paper-BguwlWAj.js";import"./useTheme-uHI12HV_.js";import"./useTheme-59sMrz1c.js";import"./Stack-B39t_pfr.js";import"./extendSxProp-5e-7qZGm.js";import"./getThemeProps-Cs-uvllJ.js";import"./Box-DatqpWAL.js";import"./AlertTitle-RGiJ7hWV.js";import"./Typography-BsfUTGyU.js";import"./index-CIGP8gNZ.js";import"./ClickAwayListener-DAStxRA2.js";import"./getReactElementRef-C8IOmuiS.js";import"./index-C8f7utTL.js";import"./index-CRBvO-yL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BgfT-li0.js";import"./Tooltip-BSuMYYSh.js";import"./index-CYsbSnLz.js";import"./useControlled-BITnwwUY.js";import"./Popper-BGskr9VS.js";import"./Button-CzBwcvk-.js";import"./uniqueId-Dm-yNi0K.js";import"./toString-BqKXGEo_.js";import"./isArray-CGdtKNqT.js";import"./isSymbol-CUEZzaKO.js";import"./times-D4UrFNax.js";import"./_Uint8Array-CwRGWxQt.js";import"./identity-DKeuBCMA.js";import"./toInteger-a_G3PH11.js";import"./mockTableEntity-10rBWFwU.js";import"./mockFileEntityACLVariants-pc6-V0lF.js";import"./fakerUtils-D0Ea5ZB0.js";import"./mockFileEntity-JaXa9Gkz.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BzalaZaQ.js";import"./mockSchema-ppvuMRav.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-Cf8hH_U4.js";import"./QueryClientProvider-BZgP8lHY.js";import"./Link-Cm8C0lxO.js";import"./Collapse-CDaWcrSI.js";import"./_baseUniq-DBAE-w05.js";import"./_getTag-BhZRMS_V.js";import"./isEqual-N_Vc746J.js";import"./merge-BKp98YdC.js";import"./_initCloneObject-DRIcQyEX.js";import"./tinycolor-Begke6kS.js";import"./Fade-0QiC2KlA.js";import"./inputBaseClasses-mE9zzfPQ.js";import"./calculateFriendlyFileSize-CoY_9rm3.js";import"./CheckCircleTwoTone-Cw0D955-.js";import"./InfoTwoTone-DDsNRkE8.js";import"./useMutation-DsxIvPaF.js";import"./dayjs.min-C2tPzWeM.js";import"./chunk-AYJ5UCUI-RArPt-D8.js";import"./cloneDeep-Slp46nnr.js";import"./Skeleton-C7wJ6onP.js";import"./HelpPopover-BEC8cjAH.js";import"./MarkdownPopover-BpvKEQNP.js";import"./LightTooltip-Ckkct5ng.js";import"./MarkdownSynapse-BnYDI6G-.js";import"./SkeletonButton-irVg13Ua.js";import"./SkeletonInlineBlock-BQHtrUDc.js";import"./SkeletonTable-Dqfl39px.js";import"./SkeletonParagraph-CD_gloE7.js";import"./HelpOutlineTwoTone-C9n4kVVi.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
