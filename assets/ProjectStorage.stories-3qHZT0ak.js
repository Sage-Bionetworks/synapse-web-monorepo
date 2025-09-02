import{g as i}from"./entityHandlers-4Dl812lC.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-CJN3kP-B.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-_BY2npJD.js";import{h as d,H as l}from"./index-BA4GQQw2.js";import{g as m}from"./userProfileHandlers-CuNmcVkc.js";import{P as L}from"./ProjectDataAvailability-BxuzTL79.js";import"./index-QAo7cVOI.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BKZ-pC_C.js";import"./mockTeam-DPFs1ZF0.js";import"./SynapseConstants-CiX6Gvr2.js";import"./OrientationBanner-D-aNPlud.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-MNm9JVKb.js";import"./index-8E8AJVLG.js";import"./iframe-CzLjpwC-.js";import"./spreadSx-CwcO6WA9.js";import"./react-CwZBqyfL.js";import"./FullWidthAlert-D_VdwJ38.js";import"./Alert-CMhD3tNE.js";import"./createTheme-Bx9zg2Aq.js";import"./DefaultPropsProvider-COWWULUE.js";import"./useSlot-C-J-wYvm.js";import"./useForkRef-C_PXFLFs.js";import"./createSimplePaletteValueFilter-DDzZQsPH.js";import"./createSvgIcon-pAqF6Sga.js";import"./Close-CAAkSTlU.js";import"./IconButton-CDLYYfzu.js";import"./useTimeout-BP57oaAx.js";import"./ButtonBase-Cyxw6Mpk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dwx7-res.js";import"./Paper-MzL6UsMi.js";import"./useTheme-BiqLUHW5.js";import"./useTheme-BGF5cY2j.js";import"./Stack-l6MPWt0d.js";import"./extendSxProp-BzCNwJ73.js";import"./getThemeProps-C3zF82al.js";import"./Box-DzK9TEyW.js";import"./AlertTitle-BcbX6m1C.js";import"./Typography-CuUtzz6d.js";import"./index-Ul9lyVXm.js";import"./ClickAwayListener-ct0gOahX.js";import"./getReactElementRef-CjntyuAB.js";import"./index-CSs9NJT0.js";import"./index-Tff9hZ9I.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cf8vHn8q.js";import"./Tooltip-soL0zlaW.js";import"./index-CtD269za.js";import"./useControlled-otgNWUVW.js";import"./Popper-CrvShqtU.js";import"./Button-ywBIoKZb.js";import"./uniqueId-U9rQ3u8t.js";import"./toString-DhZXjtWL.js";import"./isArray-BLHhTiIE.js";import"./isSymbol-sAfAr4sp.js";import"./times-ek0rDpb0.js";import"./_Uint8Array-CGGeiCCw.js";import"./identity-DKeuBCMA.js";import"./toInteger-CJbHmwS_.js";import"./mockTableEntity-BCcqLePj.js";import"./mockFileEntityACLVariants-Cs_KmBkF.js";import"./fakerUtils-WsGncDP2.js";import"./mockFileEntity-DFtAWaKL.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-VI78iZ5t.js";import"./mockSchema-DJ7clzZ4.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BnbbyIhE.js";import"./QueryClientProvider-COgRCJUL.js";import"./Link-CGU2rv-S.js";import"./Collapse-CDYVdUa-.js";import"./_baseUniq-AXqUKFNv.js";import"./_getTag-Du58puFw.js";import"./isEqual-D2oP3hG9.js";import"./merge-42V_qSrK.js";import"./_initCloneObject-CrEU1V4a.js";import"./tinycolor-Begke6kS.js";import"./Fade-BPXFur0f.js";import"./inputBaseClasses-AhrTDcKT.js";import"./calculateFriendlyFileSize-CMMha0yD.js";import"./CheckCircleTwoTone-CejlYcpI.js";import"./InfoTwoTone-Ba1eQKjs.js";import"./useMutation-CZgqQHx5.js";import"./dayjs.min-BQGfd5_o.js";import"./chunk-AYJ5UCUI-D2oE-vF0.js";import"./cloneDeep-DPn60SEG.js";import"./Skeleton-BAJjCxjE.js";import"./HelpPopover-Pn_0JDyQ.js";import"./MarkdownPopover-vRCl9ovb.js";import"./LightTooltip-DX6CTUA_.js";import"./MarkdownSynapse-C43ceo34.js";import"./SkeletonButton-BZsoDJNs.js";import"./SkeletonInlineBlock-Dxj5oJ09.js";import"./SkeletonTable-B8VgCseh.js";import"./SkeletonParagraph-Bu7i7PAX.js";import"./HelpOutlineTwoTone-Bj6G1kbq.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
