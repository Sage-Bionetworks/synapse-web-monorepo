import{g as i}from"./entityHandlers-Bbi7M6GW.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BQg2l_mC.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-CqDvZtPB.js";import{g as m}from"./userProfileHandlers-DiTFIyqH.js";import{P as L}from"./ProjectDataAvailability-D3SLJe7J.js";import"./index-6PkaAEe9.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BNw3nO0k.js";import"./mockTeam-stPrAhM0.js";import"./SynapseConstants-234bgPC3.js";import"./OrientationBanner-Ba_WLX69.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DRuXmisc.js";import"./index-BEjLIAR5.js";import"./iframe-CwGKoaIF.js";import"./spreadSx-CwcO6WA9.js";import"./react-fP1UZYcI.js";import"./FullWidthAlert-BueunzTy.js";import"./Alert-CL0zz-8I.js";import"./createTheme-gXr55H0m.js";import"./DefaultPropsProvider-BlmQpHue.js";import"./useSlot-D6L-ORg2.js";import"./useForkRef-I1dv9UDr.js";import"./createSimplePaletteValueFilter-BOXH4uIn.js";import"./createSvgIcon-C6p_F7p2.js";import"./Close-CmIFNtKx.js";import"./IconButton-BVkKIzAo.js";import"./useTimeout-BgSeNLNv.js";import"./ButtonBase-ksp5zqqD.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jnMXXNDb.js";import"./Paper-dcVYzYMj.js";import"./useTheme-DXEcceH2.js";import"./useTheme-C3VYIg5j.js";import"./Stack-BIZFhOmX.js";import"./extendSxProp-DelytbQg.js";import"./getThemeProps-Bsoevkdv.js";import"./Box-DFln69uE.js";import"./AlertTitle-CO6GLx2J.js";import"./Typography-CoIbKr7l.js";import"./index-qd5JykJS.js";import"./ClickAwayListener-P3VkkFbs.js";import"./getReactElementRef-BLYsTnAm.js";import"./index-TKWJ5sXr.js";import"./index-CPXD-uRb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BbBJN9Bb.js";import"./Tooltip-D0dK4Slt.js";import"./index-BE838Nkr.js";import"./useControlled-BHX0J-8f.js";import"./Popper-Bzy4Jbyt.js";import"./Button-C5PiRzoR.js";import"./uniqueId-DoI5JSaB.js";import"./toString-D0f1gbCj.js";import"./isArray-29EfBsKk.js";import"./isSymbol-BHh9s-Qb.js";import"./times-BzMgaTyJ.js";import"./_Uint8Array-B2-F3GF1.js";import"./identity-DKeuBCMA.js";import"./toInteger-DIt91Y5R.js";import"./mockTableEntity-QdRBajlB.js";import"./mockFileEntityACLVariants-IKnZa1w2.js";import"./fakerUtils-B6imqheO.js";import"./mockFileEntity-BaWY81PH.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BOe_flvY.js";import"./mockSchema-DZXQI4Rp.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CrW5nkBB.js";import"./QueryClientProvider-6UyNw7x6.js";import"./Link-Bq8ymdbG.js";import"./Collapse-RaZHU9Wm.js";import"./_baseUniq-gWU3IFtJ.js";import"./_getTag-BwYISoq0.js";import"./isEqual-BxMVxjXA.js";import"./merge-DyG2PJVv.js";import"./_initCloneObject-Cokl0rF2.js";import"./tinycolor-Begke6kS.js";import"./Fade-BQZZIYWG.js";import"./inputBaseClasses-BI4UakU4.js";import"./calculateFriendlyFileSize-DTUMM0RF.js";import"./CheckCircleTwoTone-B_hMD9N9.js";import"./InfoTwoTone-DxkkeeGX.js";import"./useMutation-B59eIzkm.js";import"./dayjs.min-BBXC49jR.js";import"./chunk-AYJ5UCUI-D1bRiwJ_.js";import"./cloneDeep-DzrI_yLo.js";import"./Skeleton-CR-iryCa.js";import"./HelpPopover-D20NdrH-.js";import"./MarkdownPopover-Dd1ovGQI.js";import"./LightTooltip-BbZQg-l6.js";import"./MarkdownSynapse-Dcglv2Xl.js";import"./SkeletonButton-CIgE9K_V.js";import"./SkeletonInlineBlock-Bw4UXacQ.js";import"./SkeletonTable-SXv9ewKp.js";import"./SkeletonParagraph-DbvwwXxs.js";import"./HelpOutlineTwoTone-BKO2mCAI.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
