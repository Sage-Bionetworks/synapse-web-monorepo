import{g as i}from"./entityHandlers-DhCQY5ut.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-BPLHvMvR.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-_BY2npJD.js";import{h as d,H as l}from"./index-B8nQ6FPE.js";import{g as m}from"./userProfileHandlers-C_ECi7QY.js";import{P as L}from"./ProjectDataAvailability-BZ5ABQ5Q.js";import"./index-DaVij2Ru.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CI_JFP_A.js";import"./mockTeam-BVYIB1mN.js";import"./SynapseConstants-DrCh_kdL.js";import"./OrientationBanner-VKXiGHYb.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-B24iHAqT.js";import"./index-CQIGBc1V.js";import"./iframe-Btd2HHqG.js";import"./spreadSx-CwcO6WA9.js";import"./react-DAda01Jv.js";import"./FullWidthAlert-CSg7um0z.js";import"./Alert-CeS2DVz6.js";import"./createTheme-CGDCJSPZ.js";import"./DefaultPropsProvider-DQ6R5GBJ.js";import"./useSlot-CY2J-DXD.js";import"./useForkRef-BomXF6Jf.js";import"./createSimplePaletteValueFilter-B7mx9_xn.js";import"./createSvgIcon-BYl9tErA.js";import"./Close-BG9NJg6x.js";import"./IconButton-a7sHWGoK.js";import"./useTimeout-yWZRAzgc.js";import"./ButtonBase-FedZLqF7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B6Ebxn-f.js";import"./Paper-DZgcFg1z.js";import"./useTheme-CqlqvvjI.js";import"./useTheme-BOBbHa5R.js";import"./Stack-CeqpGUjS.js";import"./extendSxProp-4nhTMu5I.js";import"./getThemeProps-DElxbgAZ.js";import"./Box-DTwKNAeW.js";import"./AlertTitle-oYeDsIVg.js";import"./Typography-mrNgtu5t.js";import"./index-DVUrkwNx.js";import"./ClickAwayListener-WijnqYS9.js";import"./getReactElementRef-HUgpiq-4.js";import"./index-C7YFv4kW.js";import"./index-BmyLYUcK.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Co_9QBfH.js";import"./Tooltip-KM72jp_q.js";import"./index-CMbZ97T8.js";import"./useControlled-D1bjab3Z.js";import"./Popper-CWkQLibq.js";import"./Button-D3b_nwUa.js";import"./uniqueId-DF1FMhX7.js";import"./toString-Dsxfr8mS.js";import"./isArray-Ct2qTZu_.js";import"./isSymbol-BM5bkjt7.js";import"./times-OzaH5tX7.js";import"./_Uint8Array-O6GMs0Ty.js";import"./identity-DKeuBCMA.js";import"./toInteger--8B6ELtu.js";import"./mockTableEntity-CKGO-lXi.js";import"./mockFileEntityACLVariants-CDTjGAOs.js";import"./fakerUtils-BcYOSJ9J.js";import"./mockFileEntity-DUIgZh-D.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-Ctl_7m7R.js";import"./mockSchema-B-3Indtn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-D2poep1E.js";import"./QueryClientProvider-Du5Ep3LS.js";import"./Link-BMgGJGqF.js";import"./Collapse-DJ86565F.js";import"./_baseUniq-BE_JtR4S.js";import"./_getTag-Cj0yh0pL.js";import"./isEqual-ukfK57kz.js";import"./merge-Cw-pBLvU.js";import"./_initCloneObject-peehwC1z.js";import"./tinycolor-Begke6kS.js";import"./Fade-URV8wb9u.js";import"./inputBaseClasses-Ds1n6_Ea.js";import"./calculateFriendlyFileSize-GNYX37MO.js";import"./CheckCircleTwoTone-8PYVvi3U.js";import"./InfoTwoTone-DEVw7o0q.js";import"./useMutation-C50fm1Gv.js";import"./dayjs.min-B6eIZka3.js";import"./chunk-AYJ5UCUI-DaetwfwG.js";import"./cloneDeep-BnzNgpeO.js";import"./Skeleton-BWhj9oCM.js";import"./HelpPopover-C9YeEIRL.js";import"./MarkdownPopover-ugLF_uns.js";import"./LightTooltip-kDgtlm3I.js";import"./MarkdownSynapse-CDjQiECZ.js";import"./SkeletonButton-5Lw36nOc.js";import"./SkeletonInlineBlock-BFocS3ON.js";import"./SkeletonTable-BNYNpBTm.js";import"./SkeletonParagraph-BZLJLv14.js";import"./HelpOutlineTwoTone-B0VI6r7D.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
