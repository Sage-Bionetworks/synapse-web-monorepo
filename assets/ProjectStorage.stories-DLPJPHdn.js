import{g as i}from"./entityHandlers-DLaqa96P.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-GM08LsrG.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-C81eqmbn.js";import{g as m}from"./userProfileHandlers-BnnzqnWm.js";import{P as L}from"./ProjectDataAvailability-CT_karGM.js";import"./index-uPs7tH6w.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Bz4L4moF.js";import"./mockTeam-C-SVkSQw.js";import"./SynapseConstants-CQGbYJZY.js";import"./OrientationBanner-D9LH13fs.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CJBSyepz.js";import"./index-Dv-Auh_6.js";import"./iframe-C98LgnIh.js";import"./spreadSx-CwcO6WA9.js";import"./react-CYEz1WY0.js";import"./FullWidthAlert-BQo4TeQt.js";import"./Alert-f48QNb2h.js";import"./createTheme-CmQ7L9FI.js";import"./DefaultPropsProvider-D7UrraQT.js";import"./useSlot-D-57qVPr.js";import"./useForkRef-aUOfydcE.js";import"./createSimplePaletteValueFilter-MBB8wY7q.js";import"./createSvgIcon-BLEghBNK.js";import"./Close-BYXn6ehd.js";import"./IconButton-CFgYDnd0.js";import"./useTimeout-CrbDv4W6.js";import"./ButtonBase-A9zHO6bs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-rsYMJ3_V.js";import"./Paper-Dt5MOLDV.js";import"./useTheme-BRwJ2BiM.js";import"./useTheme-B0hF4srd.js";import"./Stack-BrVSW58k.js";import"./extendSxProp-DgwqkoGF.js";import"./getThemeProps-CzMOA3dK.js";import"./Box-CuUhZXQS.js";import"./AlertTitle-DjtviQhk.js";import"./Typography-CVtis2FJ.js";import"./index-CCjom-eT.js";import"./ClickAwayListener-BscEfLN0.js";import"./getReactElementRef-DaUzJele.js";import"./index-0Ntr3xje.js";import"./index-DH8ZwtL1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BI3-bs-0.js";import"./Tooltip-BRjr85jo.js";import"./index-DQyNv6H4.js";import"./useControlled-BPUCCY57.js";import"./Popper-CXdg4K-k.js";import"./Button-HugWKABJ.js";import"./uniqueId-DJGqX-7m.js";import"./toString-DIVcxT2f.js";import"./isArray-CjLdZUWa.js";import"./isSymbol-73O3xJHn.js";import"./times-CQM6hN1x.js";import"./_Uint8Array-B1GgWYrH.js";import"./identity-DKeuBCMA.js";import"./toInteger-C6c1t912.js";import"./mockTableEntity-CHgdEmPQ.js";import"./mockFileEntityACLVariants-B-TcJFZ8.js";import"./fakerUtils-f_V31JDP.js";import"./mockFileEntity-CfneqFxI.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-CCwZjElM.js";import"./mockSchema-ByODhdRF.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BnV8m8MS.js";import"./QueryClientProvider-C8vVXgYp.js";import"./Link-CrDU1RWE.js";import"./Collapse-B_GDzTTw.js";import"./_baseUniq-CqX7G2j0.js";import"./_getTag-o-5Eopw1.js";import"./isEqual-nclDIja9.js";import"./merge-BX7tbRVV.js";import"./_initCloneObject-iMbuWMMe.js";import"./tinycolor-Begke6kS.js";import"./Fade-C0IATwVZ.js";import"./inputBaseClasses-CROUrq90.js";import"./calculateFriendlyFileSize-0imf3u_G.js";import"./CheckCircleTwoTone--JEdlD7D.js";import"./InfoTwoTone-BVVUUJao.js";import"./useMutation-DuSiyCX7.js";import"./dayjs.min-Bo9-7NDX.js";import"./chunk-AYJ5UCUI-FxR7alk-.js";import"./cloneDeep-B_QLLDkA.js";import"./Skeleton-C2rRnGCD.js";import"./HelpPopover-BbhU4DN6.js";import"./MarkdownPopover-Do31cD6h.js";import"./LightTooltip-BPk_d_ox.js";import"./MarkdownSynapse-CCEUdOgx.js";import"./SkeletonButton-DK56isUm.js";import"./SkeletonInlineBlock-BinR0KFv.js";import"./SkeletonTable-VIE-Blx7.js";import"./SkeletonParagraph-DsjECyO_.js";import"./HelpOutlineTwoTone-DM9iJFb6.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
