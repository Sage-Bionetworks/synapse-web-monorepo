import{g as i}from"./entityHandlers-9A1UEnfi.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-D6LCpGCY.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-sD6AcGpj.js";import{g as m}from"./userProfileHandlers-jJEbk6K0.js";import{P as L}from"./ProjectDataAvailability-D78ObNDj.js";import"./index-DeDK1Smt.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CdYy71DT.js";import"./mockTeam-Ddjc9os5.js";import"./SynapseConstants-CYqjdTgk.js";import"./OrientationBanner-C9Jr3Oy3.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BoYeThVs.js";import"./index-DiBgT_g4.js";import"./iframe-uFLftcIy.js";import"./spreadSx-CwcO6WA9.js";import"./react-BiKiA-Iy.js";import"./FullWidthAlert-gNyb5TrV.js";import"./Alert-DHjgiXNM.js";import"./createTheme-Barucc3o.js";import"./DefaultPropsProvider-5BuMuhNk.js";import"./useSlot-BnoEaNVP.js";import"./useForkRef-D3B4tP8D.js";import"./createSimplePaletteValueFilter-Dxo_mhWY.js";import"./createSvgIcon-DiCPcpir.js";import"./Close-0lTZq7IP.js";import"./IconButton-D3dEJ89e.js";import"./useTimeout-Cg8KvPgb.js";import"./ButtonBase-CtFWPYLG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BbzGW1mt.js";import"./Paper-DdBQwrgv.js";import"./useTheme-Dk4dRd2j.js";import"./useTheme-BxqvYw5-.js";import"./Stack-YRUIF5uW.js";import"./useThemeProps-D_Baxmlh.js";import"./getThemeProps-Di5KybE1.js";import"./extendSxProp-B2jc7Sfx.js";import"./Box-B47wL6Kg.js";import"./AlertTitle-DfF1mpAn.js";import"./Typography-0IkQ6ATH.js";import"./index-B74TbmPh.js";import"./ClickAwayListener-luk8cFos.js";import"./getReactElementRef-DE7AlBDu.js";import"./index-BVru8Zw3.js";import"./index-CMfiAwEf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B7s8RAlS.js";import"./Tooltip-DMolmanq.js";import"./index-aEYNMko0.js";import"./useControlled-CqW2zA2Q.js";import"./Popper-JK9tjrQY.js";import"./Button-CmYxHs1i.js";import"./uniqueId-DxIV86Cn.js";import"./toString-Dp0EFG1Y.js";import"./isArray-BITIQEug.js";import"./isSymbol-ClGIrKZo.js";import"./times-OZOL83Bg.js";import"./_Uint8Array-BhbFImZZ.js";import"./identity-DKeuBCMA.js";import"./toInteger-B6IaJdT7.js";import"./mockTableEntity-C-mB4a1s.js";import"./mockFileEntityACLVariants-B0p7sjWq.js";import"./fakerUtils-ZC8T9eiv.js";import"./mockFileEntity-CIdCvZIM.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-PyXlNDOL.js";import"./mockSchema-DO9113t5.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-Bc5xDMAa.js";import"./QueryClientProvider-D9x5ThDG.js";import"./Link-Cch9Vp4a.js";import"./Collapse-BjlYt1Tn.js";import"./_baseUniq-D003bh-f.js";import"./_getTag-bbVfyQ26.js";import"./isEqual-_y4wzV7I.js";import"./noop-DX6rZLP_.js";import"./merge--RN6qcSW.js";import"./_initCloneObject-CNpKwYnX.js";import"./tinycolor-Begke6kS.js";import"./Fade-CySYR3x4.js";import"./inputBaseClasses-DM-InByo.js";import"./calculateFriendlyFileSize-BRfNISFB.js";import"./CheckCircleTwoTone-Cijhq7EN.js";import"./InfoTwoTone-DQS0zO3D.js";import"./useMutation-CKcr9VY9.js";import"./dayjs.min-CgJX-n-a.js";import"./chunk-AYJ5UCUI-C-W-DLcN.js";import"./cloneDeep-DG3WHv99.js";import"./Skeleton-CN97u2Kc.js";import"./HelpPopover-PlotByX2.js";import"./MarkdownPopover-uM5VEiEt.js";import"./LightTooltip-lk0i74OB.js";import"./MarkdownSynapse-CHjjqyZA.js";import"./SkeletonButton-CXp9eL6q.js";import"./SkeletonInlineBlock-Icy7iBdW.js";import"./SkeletonTable-CB0JFsSD.js";import"./SkeletonParagraph-C-QRIlLc.js";import"./HelpOutlineTwoTone-Dsd4uZcV.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const yr=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,yr as __namedExportsOrder,jr as default};
