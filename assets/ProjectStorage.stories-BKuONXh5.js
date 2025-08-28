import{g as i}from"./entityHandlers-Dwd-jOUR.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-SRraC90P.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-DsAu2dxX.js";import{g as m}from"./userProfileHandlers-Pzkl2TeK.js";import{P as L}from"./ProjectDataAvailability-DnuiLufL.js";import"./index-CZrufMqq.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-FK7nspDr.js";import"./mockTeam-rNdSgbHT.js";import"./SynapseConstants-PNfEX-Ee.js";import"./OrientationBanner-C1RDTEFe.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BfGz0-rx.js";import"./index-COPlMTLH.js";import"./iframe-Dh7vrRpU.js";import"./spreadSx-CwcO6WA9.js";import"./react-Br1418uu.js";import"./FullWidthAlert-BdEFBuz2.js";import"./Alert-D_I4Da61.js";import"./createTheme-BUGEXAZ7.js";import"./DefaultPropsProvider-Cl_kOTzU.js";import"./useSlot-BkLAJCAz.js";import"./useForkRef-BBYXNeWj.js";import"./createSimplePaletteValueFilter-D0Hq8-6_.js";import"./createSvgIcon-GUC6M7fo.js";import"./Close-B2th-w95.js";import"./IconButton-Dny5oSWg.js";import"./useTimeout-CASSdLe8.js";import"./ButtonBase-D1oJct8N.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DLO471x8.js";import"./Paper-DRCE2cQE.js";import"./useTheme-KKgiytaP.js";import"./useTheme-Cyhg0lMD.js";import"./Stack-DTGKt6ID.js";import"./extendSxProp-Buq774I8.js";import"./getThemeProps-BH8LJhew.js";import"./Box-D-uimvGt.js";import"./AlertTitle-CHYbqgd8.js";import"./Typography-CmH3M1Ds.js";import"./index-BeT-zJSF.js";import"./ClickAwayListener-Dkyb_H4E.js";import"./getReactElementRef-CDtIlStC.js";import"./index-GNIoEsQh.js";import"./index-C9kE7G9Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BX6s5DFQ.js";import"./Tooltip-Dsx7YQ3j.js";import"./index-Jg77emZI.js";import"./useControlled-DMsQxF37.js";import"./Popper-CJ3GQeEU.js";import"./Button-seLAaY-z.js";import"./uniqueId-BG5WBqAZ.js";import"./toString-CrL6CxhE.js";import"./isArray-C_29kE4-.js";import"./isSymbol-vpsHx3GN.js";import"./times-BLcu-U0w.js";import"./_Uint8Array-IVjl8hkw.js";import"./identity-DKeuBCMA.js";import"./toInteger-xNfQ4hRe.js";import"./mockTableEntity-DCQM001H.js";import"./mockFileEntityACLVariants-BfPxCH64.js";import"./fakerUtils-DGFmn6Bs.js";import"./mockFileEntity-Dn7OR-lK.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-BUa-WGTe.js";import"./mockSchema-BjaTtATL.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-C0_YrBpr.js";import"./QueryClientProvider--HygutHk.js";import"./Link-1iYcYmRG.js";import"./Collapse-BCkD2TRw.js";import"./_baseUniq-B0CxpJpC.js";import"./_getTag-D-CvqH-C.js";import"./isEqual-CcVe2o0k.js";import"./merge-Bjs4ZByV.js";import"./_initCloneObject-BfmCOVO5.js";import"./tinycolor-Begke6kS.js";import"./Fade-6BTbwAew.js";import"./inputBaseClasses-DNxBSNA3.js";import"./calculateFriendlyFileSize-Dio-ngoW.js";import"./CheckCircleTwoTone-lIj_wBp0.js";import"./InfoTwoTone-Bz5QJbm9.js";import"./useMutation-BvwePRm3.js";import"./dayjs.min-DhbqjnF4.js";import"./chunk-AYJ5UCUI-BD7rHHbc.js";import"./cloneDeep-C5RiGzwl.js";import"./Skeleton-Cv60quvj.js";import"./HelpPopover-CrVFGbrc.js";import"./MarkdownPopover-CAkhq1wC.js";import"./LightTooltip-CQ1Qmtqf.js";import"./MarkdownSynapse-bi-LcI5M.js";import"./SkeletonButton-CjE_0vIp.js";import"./SkeletonInlineBlock-Cz-9MPE3.js";import"./SkeletonTable-CszXZ9Xi.js";import"./SkeletonParagraph-CwjADhHN.js";import"./HelpOutlineTwoTone-BTT-kXcr.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
