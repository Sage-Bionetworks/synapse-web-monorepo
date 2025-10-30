import{g as i}from"./entityHandlers-BXaitX__.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-oO7GrsV5.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DF43O7_g.js";import{g as m}from"./userProfileHandlers-CJRbbMhB.js";import{P as L}from"./ProjectDataAvailability-BejcST0B.js";import"./index-bd9Yf2L-.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CDZNRKuO.js";import"./mockTeam-DT2Kt3IK.js";import"./SynapseConstants-Bmu9G6LM.js";import"./OrientationBanner-BK_U_QS6.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D6IgxdMK.js";import"./index-CcTQ3WdX.js";import"./iframe-CYkumvO5.js";import"./spreadSx-CwcO6WA9.js";import"./react-DA31n1ZF.js";import"./FullWidthAlert-FejwYpUb.js";import"./Alert-CM8tkFFZ.js";import"./createTheme-BAQ3rZhl.js";import"./DefaultPropsProvider-DGXu47pl.js";import"./useSlot-DrlupqXw.js";import"./useForkRef-BljHSZVO.js";import"./createSimplePaletteValueFilter-Cplj6hkT.js";import"./createSvgIcon-CZ-GW4zL.js";import"./Close-jLj2T727.js";import"./IconButton-DkwgSArA.js";import"./useTimeout-DaidvoSY.js";import"./ButtonBase-D05d1-H-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-O9xTCaBT.js";import"./Paper-CylKyD4j.js";import"./useTheme-CY9JWpxK.js";import"./useTheme-CejdeoLN.js";import"./Stack-DkhwwS4g.js";import"./useThemeProps-DT73glV_.js";import"./getThemeProps-ByCJoaGS.js";import"./extendSxProp-BHvI69bl.js";import"./Box-CE5cjKbm.js";import"./AlertTitle-B89-U-6u.js";import"./Typography-DNHXQdFk.js";import"./index-pWe_y6eu.js";import"./ClickAwayListener-CJlLM5BK.js";import"./getReactElementRef-D4qxxYNU.js";import"./index-Du4HHj8v.js";import"./index-DQ-U_C86.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DlsUjMbS.js";import"./Tooltip-EVgy7Cv2.js";import"./index-Dq_74rXD.js";import"./useControlled-DngFEdhJ.js";import"./Popper-DCZu-ZtC.js";import"./Button-BXf8fhfi.js";import"./uniqueId-Hs_zmrMR.js";import"./toString-B5cyXdeJ.js";import"./isArray-BMB1XgSf.js";import"./isSymbol-C_Wt9aN3.js";import"./times-RkxcBH99.js";import"./_Uint8Array-DugeRibj.js";import"./identity-DKeuBCMA.js";import"./toInteger-BJ3IQUkh.js";import"./mockTableEntity-DJp-3O2m.js";import"./mockFileEntityACLVariants-Cp8sHcaq.js";import"./fakerUtils-D25kjY_R.js";import"./mockFileEntity-CHFkrlIH.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-C4J8vx-6.js";import"./mockSchema-d6UAySlu.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CndoBeOz.js";import"./QueryClientProvider-DvAzj1_f.js";import"./Link-BEZ_n53O.js";import"./Collapse-BUVbvzbA.js";import"./_baseUniq-DX2jmGNc.js";import"./_getTag-DrtrN6SG.js";import"./isEqual-DU5zUzGe.js";import"./noop-DX6rZLP_.js";import"./merge-CtKOImIh.js";import"./_initCloneObject-CS3p4FjZ.js";import"./tinycolor-Begke6kS.js";import"./Fade-BEn4SSZZ.js";import"./inputBaseClasses-BSqbkdlX.js";import"./calculateFriendlyFileSize-B8Lwwjn7.js";import"./CheckCircleTwoTone-DJt1hcfd.js";import"./InfoTwoTone-XSsxJQnA.js";import"./useMutation-BPfoSKCy.js";import"./dayjs.min-CjQ7llLN.js";import"./chunk-AYJ5UCUI-DNCVSZLe.js";import"./cloneDeep-BooNHHIp.js";import"./Skeleton-DETWlJEm.js";import"./HelpPopover-CTCwPrws.js";import"./MarkdownPopover-ju5Osadh.js";import"./LightTooltip-BiJi3fY6.js";import"./MarkdownSynapse-BrmNMCQd.js";import"./SkeletonButton-Bm07shXH.js";import"./SkeletonInlineBlock-DZ82tnzi.js";import"./SkeletonTable-DnG003pO.js";import"./SkeletonParagraph-1nbHL2i6.js";import"./HelpOutlineTwoTone-To16LUdk.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
