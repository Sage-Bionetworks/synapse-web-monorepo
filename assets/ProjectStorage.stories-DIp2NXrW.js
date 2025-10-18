import{g as i}from"./entityHandlers-DYcbxNNa.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Doa42xrB.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CcEdLBWn.js";import{g as m}from"./userProfileHandlers-CL1-gJmt.js";import{P as L}from"./ProjectDataAvailability-Cuy4TVEM.js";import"./index-DsYws6tY.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-3DNQJNms.js";import"./mockTeam-D_oqpHE9.js";import"./SynapseConstants-BFOqWDQA.js";import"./OrientationBanner-TCfC_H3L.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BVee_ffb.js";import"./index-BbU4aETC.js";import"./iframe-BX7CAi87.js";import"./spreadSx-CwcO6WA9.js";import"./react-QiGgL7yD.js";import"./FullWidthAlert-u71Fe4AT.js";import"./Alert-CWDPuPjT.js";import"./createTheme-BZKeiz7F.js";import"./DefaultPropsProvider-DPTWajoX.js";import"./useSlot-Coso6cuj.js";import"./useForkRef-DR_w4f00.js";import"./createSimplePaletteValueFilter-CIoWQpVR.js";import"./createSvgIcon-DOjZs8H3.js";import"./Close-DfaBktiu.js";import"./IconButton-2ClfUHAI.js";import"./useTimeout-BQmg3tV4.js";import"./ButtonBase-oFCZPY0b.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-mTIStDYE.js";import"./Paper-BtMJMCrb.js";import"./useTheme-Cey4q2bx.js";import"./useTheme-CcXBUw_1.js";import"./Stack-Dkk8Xa7g.js";import"./useThemeProps-D9O9WAY6.js";import"./getThemeProps-CHgFTbzR.js";import"./extendSxProp-DTdvSIHJ.js";import"./Box-Bycse9BW.js";import"./AlertTitle-uJCriyqk.js";import"./Typography-Ck3rri_r.js";import"./index-DIpubuKK.js";import"./ClickAwayListener-DJnMgcYy.js";import"./getReactElementRef-r96q0QeR.js";import"./index-P5ijQna_.js";import"./index-A1z-KzpE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BVNeYH1n.js";import"./Tooltip-i3RfmkJe.js";import"./index-CFklzSJo.js";import"./useControlled-BeW8yXpV.js";import"./Popper-WEnZTTxD.js";import"./Button-BQsAdChS.js";import"./uniqueId-CE1wYfGn.js";import"./toString-BwmnW4nE.js";import"./isArray-D3G7sFso.js";import"./isSymbol-Du-9wEEV.js";import"./times-CzCyu-RU.js";import"./_Uint8Array-CEg26PaB.js";import"./identity-DKeuBCMA.js";import"./toInteger-CboIHU7e.js";import"./mockTableEntity-DmyoR_eY.js";import"./mockFileEntityACLVariants-DrYFSl3c.js";import"./fakerUtils-B_HXNGlY.js";import"./mockFileEntity-DVyL-DCG.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Cr8bizH-.js";import"./mockSchema-BGEU2c6h.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-C3jQoxqK.js";import"./QueryClientProvider-Bx1UJlnP.js";import"./Link-CnaFqnEf.js";import"./Collapse-39g-gMCj.js";import"./_baseUniq-CZ8adtBQ.js";import"./_getTag-DwYiCtlW.js";import"./isEqual-DJ5furX1.js";import"./noop-DX6rZLP_.js";import"./merge-DEChS73I.js";import"./_initCloneObject-DYz2LT-o.js";import"./tinycolor-Begke6kS.js";import"./Fade-SGKJTB9b.js";import"./inputBaseClasses-Df0a-hTu.js";import"./calculateFriendlyFileSize-2wXvVYCR.js";import"./CheckCircleTwoTone-DtjYqZqD.js";import"./InfoTwoTone-jdxUB-jN.js";import"./useMutation-RDVDSqRG.js";import"./dayjs.min-BJ7tfLc7.js";import"./chunk-AYJ5UCUI-DyVUVBHY.js";import"./cloneDeep-HprkIbek.js";import"./Skeleton-DfMrunuk.js";import"./HelpPopover-D8-Y3nZM.js";import"./MarkdownPopover-p7w148ld.js";import"./LightTooltip-C6gfu7bS.js";import"./MarkdownSynapse-CawGuG-E.js";import"./SkeletonButton-DavH1BHy.js";import"./SkeletonInlineBlock-CfLhQAN5.js";import"./SkeletonTable-DMkQYsl-.js";import"./SkeletonParagraph-B9RzV3Fm.js";import"./HelpOutlineTwoTone-BXj322q4.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
