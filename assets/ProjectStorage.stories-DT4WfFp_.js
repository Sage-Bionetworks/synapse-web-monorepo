import{g as i}from"./entityHandlers-BI2c0xPX.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BMNFt-8g.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-uWJABxRk.js";import{g as m}from"./userProfileHandlers-D2ZHKXWP.js";import{P as L}from"./ProjectDataAvailability-DS3vQpXX.js";import"./index-CHVHgzOl.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-i9SVfrGj.js";import"./mockTeam-D7UkI6d3.js";import"./SynapseConstants-ruF53FsM.js";import"./OrientationBanner-DeOiH3yd.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D5GYg9hQ.js";import"./index-BD8T7zq6.js";import"./iframe-BCztISwF.js";import"./spreadSx-CwcO6WA9.js";import"./react-BmWlFtp9.js";import"./FullWidthAlert-DeCznv24.js";import"./Alert-DXEjMnWz.js";import"./createTheme-CTBtZ_cy.js";import"./DefaultPropsProvider-B9JV_CUS.js";import"./useSlot-fds4Yeop.js";import"./useForkRef-C_rm1XEs.js";import"./createSimplePaletteValueFilter-DeoxNqRG.js";import"./createSvgIcon-Pv2fR8IF.js";import"./Close-H9g7nKcO.js";import"./IconButton-BRuECVtO.js";import"./useTimeout-0eXle5dh.js";import"./ButtonBase-DzeUsUkN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BxBCqc4_.js";import"./Paper-_pmqSPmr.js";import"./useTheme-CQSNJTUG.js";import"./useTheme-DFpCyL4Y.js";import"./Stack-l4t04YEH.js";import"./useThemeProps-CGtS0plU.js";import"./getThemeProps-Fi8dnZUZ.js";import"./extendSxProp-iPj9BVlN.js";import"./Box-DQV0lxds.js";import"./AlertTitle-Bm25oWD_.js";import"./Typography-Cxv8qnpg.js";import"./index-CIL5iEm5.js";import"./ClickAwayListener-D0w7bfZZ.js";import"./getReactElementRef-JB-rNIYf.js";import"./index-C6FD6fLo.js";import"./index-CLf-jdg9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BkapnwIp.js";import"./Tooltip-BrvlfHcB.js";import"./index-CKxt-HAj.js";import"./useControlled-BDiO9zgL.js";import"./Popper-CPoBNdFa.js";import"./Button-D3ajUzUs.js";import"./uniqueId-B4WivU2M.js";import"./toString-DQNT6C4h.js";import"./isArray-DGqRpJYm.js";import"./isSymbol-DLj05rTF.js";import"./times-BbQaFKf0.js";import"./_Uint8Array-C6Z07qUy.js";import"./identity-DKeuBCMA.js";import"./toInteger-_gmo1qyA.js";import"./mockTableEntity-ttQEl9pb.js";import"./mockFileEntityACLVariants-BEfY0I5r.js";import"./fakerUtils-Yb73m1lJ.js";import"./mockFileEntity-WBj9cGbD.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DOAY1YeV.js";import"./mockSchema-B5_1HkWV.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DQtNzDr0.js";import"./QueryClientProvider-DStyJqXK.js";import"./Link-DckGLzQN.js";import"./Collapse-EXdIFGDf.js";import"./_baseUniq-4-5ousxn.js";import"./_getTag-Bu_44Cjs.js";import"./isEqual-BwYcoTf8.js";import"./noop-DX6rZLP_.js";import"./merge-DiV7m9Pu.js";import"./_initCloneObject-CmXH6YeZ.js";import"./tinycolor-Begke6kS.js";import"./Fade-DlP0g-24.js";import"./inputBaseClasses-BQe-pxTr.js";import"./calculateFriendlyFileSize-Dks1cdcZ.js";import"./CheckCircleTwoTone-HUw_GkW9.js";import"./InfoTwoTone-DFOS-ggU.js";import"./useMutation-O6IXzSsV.js";import"./dayjs.min-B3-A15Bv.js";import"./chunk-AYJ5UCUI-BsG23He-.js";import"./cloneDeep-f1dMV6ix.js";import"./Skeleton-whSO5RLo.js";import"./HelpPopover-DZzzXfj4.js";import"./MarkdownPopover-BtkVUZOx.js";import"./LightTooltip-CTsjd7VB.js";import"./MarkdownSynapse-D60oF5Ur.js";import"./SkeletonButton-BcbTJMaZ.js";import"./SkeletonInlineBlock-OvC2sURA.js";import"./SkeletonTable-BzjYkWzl.js";import"./SkeletonParagraph-dN9CjyMk.js";import"./HelpOutlineTwoTone-B0pRig9l.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
