import{g as i}from"./entityHandlers-C6yeHHzf.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CoUOOnVS.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-A58qAGTG.js";import{g as m}from"./userProfileHandlers-DLD5fCpy.js";import{P as L}from"./ProjectDataAvailability-DJBEGKPk.js";import"./index-eiPaiVfP.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-esvCXCCP.js";import"./mockTeam-BuvxOenJ.js";import"./SynapseConstants-aXu1tDOr.js";import"./OrientationBanner-BWBFJ0yy.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-e6oeiiS4.js";import"./index-CHVMFH7M.js";import"./iframe-ClVMoJvW.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNW0viHv.js";import"./FullWidthAlert-D-Y85AGg.js";import"./Alert-DBkyC7v2.js";import"./createTheme-Dh0f-PI4.js";import"./DefaultPropsProvider-CBzoMWiB.js";import"./useSlot-CPBRkNk2.js";import"./useForkRef-DoDgdNBT.js";import"./createSimplePaletteValueFilter-CJ4RsiJ_.js";import"./createSvgIcon-1VmyitDI.js";import"./Close-DT5SYQ5j.js";import"./IconButton-CQJFqUxJ.js";import"./useTimeout-_MPtwmvh.js";import"./ButtonBase-C6tiUzg6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DssauoHK.js";import"./Paper-CscxC-nZ.js";import"./useTheme-xwvFlxes.js";import"./useTheme-CXK0bmkJ.js";import"./Stack-DNPip1HK.js";import"./extendSxProp-DlCy7HXm.js";import"./getThemeProps-Bw20A-vb.js";import"./Box-3JYTO1WU.js";import"./AlertTitle-T3qK4lpH.js";import"./Typography-CceGoqtm.js";import"./index-zQj8wIhf.js";import"./ClickAwayListener-BYjt3j0D.js";import"./getReactElementRef-ERmAiXQ4.js";import"./index-BxoVh5lP.js";import"./index-D0ejypGL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BlQIFe45.js";import"./Tooltip-Bsspg9XV.js";import"./index-YAqICTwX.js";import"./useControlled-CMLV-P_i.js";import"./Popper-jRWuHQW0.js";import"./Button-D88emua3.js";import"./uniqueId-CYzg0bjW.js";import"./toString-BGPxifEX.js";import"./isArray-D2RVMlgB.js";import"./isSymbol-v-QfZ1AY.js";import"./times-CfRbgfJN.js";import"./_Uint8Array-W6b_8ZQL.js";import"./identity-DKeuBCMA.js";import"./toInteger-CjWX7q7R.js";import"./mockTableEntity-BDVfm0Dx.js";import"./mockFileEntityACLVariants-BmLz1gqh.js";import"./fakerUtils-C_T-V5d2.js";import"./mockFileEntity-C4DS0Cbw.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-iPOZeMsS.js";import"./mockSchema-u02zVvZ8.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DRP9e10O.js";import"./QueryClientProvider-eW7_5tl_.js";import"./Link-DXQkQAZf.js";import"./Collapse-CQU-jh41.js";import"./_baseUniq-ChE4L4Qu.js";import"./_getTag-C3EbY4Ni.js";import"./isEqual-CYsEo0q4.js";import"./merge-C0nipVuY.js";import"./_initCloneObject-CMOQzCqQ.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2i4us37.js";import"./inputBaseClasses-DwHiXH96.js";import"./calculateFriendlyFileSize-BnpOZOH-.js";import"./CheckCircleTwoTone-DFLozXHx.js";import"./InfoTwoTone-DjBjCg4X.js";import"./useMutation-Db9mxQyg.js";import"./dayjs.min-BdWLMgSP.js";import"./chunk-AYJ5UCUI-6ko_yZTB.js";import"./cloneDeep-BpRUwq2a.js";import"./Skeleton-CEGItXWQ.js";import"./HelpPopover-CLky0nFv.js";import"./MarkdownPopover-IsNpiamV.js";import"./LightTooltip-Dd5mB-K5.js";import"./MarkdownSynapse-U32NW5Az.js";import"./SkeletonButton-Bd_vzPoo.js";import"./SkeletonInlineBlock-DBsZPe8E.js";import"./SkeletonTable-Mvokz47V.js";import"./SkeletonParagraph-Ds9YC-ap.js";import"./HelpOutlineTwoTone-DwvzCYNq.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
