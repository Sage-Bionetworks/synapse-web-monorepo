import{g as i}from"./entityHandlers-Dot8P-HR.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DP5r_8h_.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-4ixb_EbX.js";import{g as m}from"./userProfileHandlers-CyZwz-1U.js";import{P as L}from"./ProjectDataAvailability-U_bVP2IF.js";import"./index-c-xpl4vI.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Cxg12xXV.js";import"./mockTeam-DqOJgXIq.js";import"./SynapseConstants-B374GTlB.js";import"./OrientationBanner-BU-7X07a.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DOh4s_-E.js";import"./index-BtGDcTvp.js";import"./iframe-CBNphiDP.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cn6UXufh.js";import"./FullWidthAlert-DNI0u40D.js";import"./Alert-C_0F6J7S.js";import"./createTheme-C4xHNGdh.js";import"./DefaultPropsProvider-BHwoOyH7.js";import"./useSlot-4Dt2bm7X.js";import"./useForkRef-BiijcE59.js";import"./createSimplePaletteValueFilter-C_Cdnk9R.js";import"./createSvgIcon-s4G4qou3.js";import"./Close-Cg5bmZHm.js";import"./IconButton-DwyAerDa.js";import"./useTimeout-Cmz87tz9.js";import"./ButtonBase-DBuVifEX.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BMJ4Jv0_.js";import"./Paper-q9JuhaB3.js";import"./useTheme-Dx4TqPEY.js";import"./useTheme-DwROfidY.js";import"./Stack-DYtdGJnP.js";import"./useThemeProps-BpG_5eyZ.js";import"./getThemeProps-gvKTAKTt.js";import"./extendSxProp-B_iH4oL0.js";import"./Box-DcHUT-iR.js";import"./AlertTitle-Cc_aOr1q.js";import"./Typography-C87QV3YC.js";import"./index-DValAcPx.js";import"./ClickAwayListener-C8du9OzG.js";import"./getReactElementRef-Bvp3nBcK.js";import"./index-umcRd70c.js";import"./index-ChFLTI6y.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-7xCOvQFP.js";import"./Tooltip-BVGISXDf.js";import"./index-VuQkd2dy.js";import"./useControlled-ChZzA-b3.js";import"./Popper-1yvfHCmZ.js";import"./Button-X-aMYJSh.js";import"./uniqueId-ejRe9Idn.js";import"./toString-zDFlmQqe.js";import"./isArray-DJCEQSyb.js";import"./isSymbol-jJgaIxLY.js";import"./times-C6sZ1Dzv.js";import"./_Uint8Array-CtW1SfOY.js";import"./identity-DKeuBCMA.js";import"./toInteger-Yff7iR8r.js";import"./mockTableEntity-CgVOFpA7.js";import"./mockFileEntityACLVariants-bu9PYnRc.js";import"./fakerUtils-DJpuENSH.js";import"./mockFileEntity-__I2ffJZ.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-B-KonPA2.js";import"./mockSchema-DDkiwKHN.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DKU6Kxm0.js";import"./QueryClientProvider-Drv3DDYU.js";import"./Link-DNZklxO1.js";import"./Collapse-Bo6KiRDL.js";import"./_baseUniq-D9WPqwKE.js";import"./_getTag-C_b1pV5H.js";import"./isEqual-XYNdVziB.js";import"./noop-DX6rZLP_.js";import"./merge-BiadW8tB.js";import"./_initCloneObject-KGx9qkw7.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bp6vP_zE.js";import"./inputBaseClasses-ESUxP_6L.js";import"./calculateFriendlyFileSize-BGNYAu__.js";import"./CheckCircleTwoTone-B_j1OfQE.js";import"./InfoTwoTone-Fe5W6L4i.js";import"./useMutation-CR2RaXsm.js";import"./dayjs.min-BFapz5wS.js";import"./chunk-AYJ5UCUI-C5f8fAX_.js";import"./cloneDeep-BD-s7-9R.js";import"./Skeleton-DdZWbvza.js";import"./HelpPopover-DiGHY4zD.js";import"./MarkdownPopover-CpgP-YPo.js";import"./LightTooltip-Xm35K9xA.js";import"./MarkdownSynapse-D4SmAEKI.js";import"./SkeletonButton-DYtdjqSY.js";import"./SkeletonInlineBlock-CN0uCq7x.js";import"./SkeletonTable-CWS9ay58.js";import"./SkeletonParagraph-DpLHM0PJ.js";import"./HelpOutlineTwoTone-B_7QM99L.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
