import{g as i}from"./entityHandlers-D8sc7c_D.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-DOT7Kf5e.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-DznhnKUY.js";import{g as m}from"./userProfileHandlers-BFtG59-C.js";import{P as L}from"./ProjectDataAvailability-ATaeSgp4.js";import"./index-C6EB0rvG.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-D9tsnfWb.js";import"./mockTeam-CDf0-pQs.js";import"./SynapseConstants-BFsckqND.js";import"./OrientationBanner-vm3Uug8o.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CBcMDjG5.js";import"./index-BvkzVhja.js";import"./iframe-D86gUYfY.js";import"./spreadSx-CwcO6WA9.js";import"./react-B7GgqiOd.js";import"./FullWidthAlert-DG03OKrG.js";import"./Alert-WcAu8OxA.js";import"./createTheme-BnKHTdnQ.js";import"./DefaultPropsProvider-CYw3Fks0.js";import"./useSlot-CpbBpyfC.js";import"./useForkRef-D6RYFZJE.js";import"./createSimplePaletteValueFilter-BID9b8gQ.js";import"./createSvgIcon-TqGA5GS4.js";import"./Close-CTF45zn1.js";import"./IconButton-xQjHQzJV.js";import"./useTimeout-BhJcJhho.js";import"./ButtonBase-C-uVUtTT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D9VUIaZV.js";import"./Paper-DZq6vmXR.js";import"./useTheme-CNZLKbAz.js";import"./useTheme-DOHmBU_Q.js";import"./Stack-C-KnMMTe.js";import"./extendSxProp-PG9lN2V8.js";import"./getThemeProps-aAOWIBG1.js";import"./Box-Ch_qkwG8.js";import"./AlertTitle-Vpnt_q-u.js";import"./Typography-ClJ7qrfT.js";import"./index-BpWTALmT.js";import"./ClickAwayListener-D2ZJQO-q.js";import"./getReactElementRef-CSwoQRSl.js";import"./index-D1ZhQdri.js";import"./index-nooAMcKr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-1U6ARRbe.js";import"./Tooltip-DlgKzRYd.js";import"./index-Djkai_n6.js";import"./useControlled-BqXuHVop.js";import"./Popper-BOpwvkY8.js";import"./Button-CFj-G6sD.js";import"./uniqueId-B3yeT0Cx.js";import"./toString-Drc6oQ77.js";import"./isArray-BWfjxlvB.js";import"./isSymbol-CT6Sckui.js";import"./times-B7h5UMHk.js";import"./_Uint8Array-6IB5bB9B.js";import"./identity-DKeuBCMA.js";import"./toInteger-BBLrcvzZ.js";import"./mockTableEntity-C6zwOi8D.js";import"./mockFileEntityACLVariants-cge-4hSI.js";import"./fakerUtils-B-BgqtzP.js";import"./mockFileEntity-ACvOHgBg.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-E7kxq2FI.js";import"./mockSchema-D06V9rtw.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-B5WZxfnm.js";import"./QueryClientProvider-Bw-sUfxd.js";import"./Link-BoxUl1rG.js";import"./Collapse-DgVb8QQQ.js";import"./_baseUniq-2UaCu3Jw.js";import"./_getTag-ZEhjLntR.js";import"./isEqual-h7ZjSABb.js";import"./merge-B5rBlFmL.js";import"./_initCloneObject-vgZXLCqG.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5Eu1XIh.js";import"./inputBaseClasses-DrFRH_VH.js";import"./calculateFriendlyFileSize-LIZWMyaA.js";import"./CheckCircleTwoTone-Dg7Y-mS9.js";import"./InfoTwoTone-CT5xw0TJ.js";import"./useMutation-BOFn0MGu.js";import"./dayjs.min-zWOubbPA.js";import"./chunk-AYJ5UCUI-nqgqpkF9.js";import"./cloneDeep-De6cZq_K.js";import"./Skeleton-Cz56GLNo.js";import"./HelpPopover-DA6uaHEO.js";import"./MarkdownPopover-CJaHfacB.js";import"./LightTooltip-wLZDSnzC.js";import"./MarkdownSynapse-C2tt-4rm.js";import"./SkeletonButton-D00laxeG.js";import"./SkeletonInlineBlock-DqlqFj-V.js";import"./SkeletonTable-DAsmIEfu.js";import"./SkeletonParagraph-GP3Vn81h.js";import"./HelpOutlineTwoTone-DwEbUyrp.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
