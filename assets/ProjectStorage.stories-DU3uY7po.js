import{g as i}from"./entityHandlers-OKN-UHzs.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-Bdk-rDlY.js";import"./VerificationSubmission-CTjJb3hu.js";import"./StringUtils-B8-nnzJN.js";import{h as d,H as l}from"./index-6kThrmlh.js";import{g as m}from"./userProfileHandlers-BQ2unPx2.js";import{P as L}from"./ProjectDataAvailability-DQhcsezp.js";import"./index-NaGLS9CG.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bz6vA01T.js";import"./mockTeam-eme9I7MK.js";import"./SynapseConstants-CPxMpVHW.js";import"./OrientationBanner-C06D94Hm.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-B3ZoRi4-.js";import"./index-BFe7OOCO.js";import"./iframe-Bha8qMdA.js";import"./spreadSx-CwcO6WA9.js";import"./react-D4DcjIMi.js";import"./FullWidthAlert-DrhjjluB.js";import"./Alert-CS4qrGXV.js";import"./createTheme-r53sen1H.js";import"./DefaultPropsProvider-DhKH4jS5.js";import"./useSlot-BjGwbouw.js";import"./useForkRef-C3S72d_h.js";import"./createSimplePaletteValueFilter-BKD40Yni.js";import"./createSvgIcon-BlYLmz2K.js";import"./Close-BIGKj7ED.js";import"./IconButton-RLYr2FEe.js";import"./useTimeout-BjZ1pB1q.js";import"./ButtonBase-BTDiO5jL.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-tBTi4oIf.js";import"./Paper-cGemMgWu.js";import"./useTheme-dw00mKTl.js";import"./useTheme-BVgbn6l0.js";import"./Stack-CZIpFnrG.js";import"./extendSxProp-BYVH58vt.js";import"./getThemeProps-ugVUIFn4.js";import"./Box-CteZFSuz.js";import"./AlertTitle-tYv3ugNo.js";import"./Typography-BvT1XRjO.js";import"./index-DYSwa5Xm.js";import"./ClickAwayListener-DFw4-2za.js";import"./getReactElementRef-CrfOFAx4.js";import"./index-Bl_SermX.js";import"./index-CR-e9Su5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DuTgCd74.js";import"./Tooltip-Dx6Egvgv.js";import"./index-CMkzAbFp.js";import"./useControlled-D0iW-7vO.js";import"./Popper-BO3NETWT.js";import"./Button-C0QtNNNQ.js";import"./uniqueId-D4-l-flb.js";import"./toString--A387rSg.js";import"./isArray-Bq1Bv-Mm.js";import"./isSymbol-DgpUL_L6.js";import"./times-CFf8C9TJ.js";import"./_Uint8Array-BmRAF-l6.js";import"./identity-DKeuBCMA.js";import"./toInteger-Ddxgkesh.js";import"./mockTableEntity-D_yJEliW.js";import"./mockFileEntityACLVariants-DRR__gPC.js";import"./fakerUtils-CotL92t6.js";import"./mockFileEntity-HNOLho_i.js";import"./mock_file_handle-CfZD9Mvn.js";import"./mockEntity-Bc27OGPT.js";import"./mockSchema-B75iIQsz.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CHHYNMj4.js";import"./QueryClientProvider-DRK6s_Dv.js";import"./Link-DY_VTRxM.js";import"./Collapse-DKZz63NR.js";import"./_baseUniq-DXFjNF0a.js";import"./_getTag-Dw30EhU3.js";import"./isEqual-BRRciehP.js";import"./merge-c-k0AbhX.js";import"./_initCloneObject-NVlBGhuH.js";import"./tinycolor-Begke6kS.js";import"./Fade-Xf5NEG7w.js";import"./inputBaseClasses-BxOJtLF2.js";import"./calculateFriendlyFileSize-DI3CDhm2.js";import"./CheckCircleTwoTone-CZ1rOWLg.js";import"./InfoTwoTone-DAGfyDTy.js";import"./useMutation-Bbj9coTz.js";import"./dayjs.min-I_SVux8b.js";import"./chunk-AYJ5UCUI-D1KYLbuL.js";import"./cloneDeep-CBO0jsPD.js";import"./Skeleton-E--vr7y2.js";import"./HelpPopover-Cz5EeQSJ.js";import"./MarkdownPopover-RpoDoQj6.js";import"./LightTooltip-Cbz5qUHh.js";import"./MarkdownSynapse-Df30U1Hn.js";import"./SkeletonButton-cMRNZ__f.js";import"./SkeletonInlineBlock-CJG5hxVo.js";import"./SkeletonTable-vky-mQpv.js";import"./SkeletonParagraph-CpGGXxR9.js";import"./HelpOutlineTwoTone-BB4Pkymk.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
