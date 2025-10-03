import{g as i}from"./entityHandlers-Bs7SRSmE.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Be6tFy5F.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-Bh5vwBzt.js";import{g as m}from"./userProfileHandlers-D_2hiCiJ.js";import{P as L}from"./ProjectDataAvailability-BUqn6R9g.js";import"./index-CRKtALrK.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DjmIB2jA.js";import"./mockTeam-Dkot8vnx.js";import"./SynapseConstants-BEZwovbV.js";import"./OrientationBanner-CtoXztzg.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-0unR9H4H.js";import"./index-BljgPFTo.js";import"./iframe-CyBU6Q7V.js";import"./spreadSx-CwcO6WA9.js";import"./react-CVn33jqE.js";import"./FullWidthAlert-BZgBYNyl.js";import"./Alert-DJPQ4QIM.js";import"./createTheme-CIrJTDOf.js";import"./DefaultPropsProvider-DbEdqidE.js";import"./useSlot-DVd3PzDD.js";import"./useForkRef-BPo1GnhT.js";import"./createSimplePaletteValueFilter-BwVtGIPT.js";import"./createSvgIcon-0kRQ-kbK.js";import"./Close-DaZgjw_6.js";import"./IconButton-BXR2LYXb.js";import"./useTimeout-Bpy0NDCv.js";import"./ButtonBase-Cd_tqh-g.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C5zAkQVG.js";import"./Paper-Cyv4dyLK.js";import"./useTheme-vHPl7Z18.js";import"./useTheme-C-hh5JcE.js";import"./Stack-Bsu_lXkI.js";import"./useThemeProps-CpST4J4d.js";import"./getThemeProps-gduYeenR.js";import"./extendSxProp-BUchhns_.js";import"./Box-B7np8nCS.js";import"./AlertTitle-DS7VlmPb.js";import"./Typography-CTlCFPS1.js";import"./index-DmDe8b2A.js";import"./ClickAwayListener-oKANEk0z.js";import"./getReactElementRef-BIbEb3Zr.js";import"./index-CLXOAuby.js";import"./index-CTWVO3q3.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BnuhUscm.js";import"./Tooltip-Cr3zvRH6.js";import"./index-D921uLT9.js";import"./useControlled-B5_NtMt5.js";import"./Popper-CrTqWDfV.js";import"./Button-BZXN9KrI.js";import"./uniqueId-CJxPQ7JK.js";import"./toString-Df23r9ia.js";import"./isArray-DqQflkTV.js";import"./isSymbol-GyhxyoV-.js";import"./times-CjQq_ry3.js";import"./_Uint8Array-6RqZOC7P.js";import"./identity-DKeuBCMA.js";import"./toInteger-Cf82bYKg.js";import"./mockTableEntity-CaEzWHT0.js";import"./mockFileEntityACLVariants-D-zszSJ0.js";import"./fakerUtils-BCzyT0Kn.js";import"./mockFileEntity-bCmrpWpw.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-V3zJyP1c.js";import"./mockSchema-LyB_QzM7.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-B-0wee67.js";import"./QueryClientProvider-DNTbqL71.js";import"./Link-BkUBKMhX.js";import"./Collapse-BYc6Wv8_.js";import"./_baseUniq-BCgHUW7P.js";import"./_getTag-OZNTQHEg.js";import"./isEqual-BKU_n09T.js";import"./noop-DX6rZLP_.js";import"./merge-Dru2-Hnn.js";import"./_initCloneObject-Bom0r3NW.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cj0EUrvW.js";import"./inputBaseClasses-DCwWV1lh.js";import"./calculateFriendlyFileSize-CzujXqM3.js";import"./CheckCircleTwoTone-FMrAv7pD.js";import"./InfoTwoTone-MGxkGzni.js";import"./useMutation-BdNABu1Z.js";import"./dayjs.min-CqZWhcNT.js";import"./chunk-AYJ5UCUI-D_3CYfsv.js";import"./cloneDeep-XPWNqf30.js";import"./Skeleton-Dw7_uGLe.js";import"./HelpPopover-BliC3SII.js";import"./MarkdownPopover-D8ZntrYw.js";import"./LightTooltip-B0tHFW5Q.js";import"./MarkdownSynapse--cLXO_N-.js";import"./SkeletonButton-BWbqsDJD.js";import"./SkeletonInlineBlock-BB_bM5HG.js";import"./SkeletonTable-GWXX48W3.js";import"./SkeletonParagraph-e4SRr6W8.js";import"./HelpOutlineTwoTone-fro68Ycj.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
