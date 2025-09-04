import{g as i}from"./entityHandlers-De3i2_wk.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-KQZnDEqY.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-u-D9u67q.js";import{g as m}from"./userProfileHandlers-B7dA1cu-.js";import{P as L}from"./ProjectDataAvailability-CbQwwkCv.js";import"./index-BiNARjcM.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-COyeySUq.js";import"./mockTeam-B3OxZWh_.js";import"./SynapseConstants-E9b7EaUq.js";import"./OrientationBanner-CmbPS0a4.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-RZq23un7.js";import"./index-CzGzXEn8.js";import"./iframe-uFVp_yWY.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbvsEyPG.js";import"./FullWidthAlert-D1yw4iHk.js";import"./Alert-CNLtvy8P.js";import"./createTheme-k23OqXGa.js";import"./DefaultPropsProvider-DIhp9cRI.js";import"./useSlot-C-gtFsMB.js";import"./useForkRef-BSQlPluY.js";import"./createSimplePaletteValueFilter-ByhsrVNu.js";import"./createSvgIcon-BMaNoRgk.js";import"./Close-D_tYQfNe.js";import"./IconButton-C9kv8evX.js";import"./useTimeout-Bco06NxJ.js";import"./ButtonBase--LE7YHRM.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C1rPjsSq.js";import"./Paper-BVxUU9_K.js";import"./useTheme-m-jJYqTk.js";import"./useTheme-BdRzPGfO.js";import"./Stack-BdenFWgB.js";import"./extendSxProp-BQjDsJY_.js";import"./getThemeProps-BlF0lh8z.js";import"./Box-B-VzN5Jx.js";import"./AlertTitle-B9QtK9uS.js";import"./Typography-C2XHzVQE.js";import"./index-CAod7njC.js";import"./ClickAwayListener-Du3ELzpP.js";import"./getReactElementRef-Dgr12Jgk.js";import"./index-B21--ivY.js";import"./index-D6SZASGo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-gVpppe5W.js";import"./Tooltip-BQoBuipX.js";import"./index-sNVsSmo5.js";import"./useControlled-3AOcwQZd.js";import"./Popper-DFhQZQac.js";import"./Button-Bzn_cVpu.js";import"./uniqueId-WBWHFwi-.js";import"./toString-eb50UqWN.js";import"./isArray-ChG02qwo.js";import"./isSymbol-nj6BaCVk.js";import"./times-LZPTVfy5.js";import"./_Uint8Array-LlKGp4K5.js";import"./identity-DKeuBCMA.js";import"./toInteger-BiVtqSir.js";import"./mockTableEntity-CIOOvQLM.js";import"./mockFileEntityACLVariants-B0zXK_3a.js";import"./fakerUtils-qT4wgKD2.js";import"./mockFileEntity-BOzAtkhz.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-BI81eVwS.js";import"./mockSchema-DHVZauFY.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DF84rRyD.js";import"./QueryClientProvider-csjxr0Oq.js";import"./Link-VKSHRpIP.js";import"./Collapse-B3cTWS02.js";import"./_baseUniq-Fd2G2IPR.js";import"./_getTag-cnLzI9NN.js";import"./isEqual-yp226Bbx.js";import"./merge-Y_2GYteb.js";import"./_initCloneObject-BpCV3dag.js";import"./tinycolor-Begke6kS.js";import"./Fade-DaG8l8BS.js";import"./inputBaseClasses-DKgm0JXr.js";import"./calculateFriendlyFileSize-HPCnRThz.js";import"./CheckCircleTwoTone-RDTFbucz.js";import"./InfoTwoTone-BPpuRQC9.js";import"./useMutation-BXU6_2Hh.js";import"./dayjs.min-Cml6m9_C.js";import"./chunk-AYJ5UCUI-CA4qBvwQ.js";import"./cloneDeep-mhbB0HAm.js";import"./Skeleton-CJd0uABn.js";import"./HelpPopover-CMOKKsDC.js";import"./MarkdownPopover-C_CnQkiI.js";import"./LightTooltip-D3BcFML7.js";import"./MarkdownSynapse-C6bdbFe8.js";import"./SkeletonButton-YTPN-fbM.js";import"./SkeletonInlineBlock-CCDx8nPO.js";import"./SkeletonTable-BjLnI14k.js";import"./SkeletonParagraph-D-KYwRg8.js";import"./HelpOutlineTwoTone-BVLBKiNi.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
