import{g as i}from"./entityHandlers-Bh7BTl1U.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-BY7RR_24.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-_BY2npJD.js";import{h as d,H as l}from"./index-CwGd-opX.js";import{g as m}from"./userProfileHandlers-DKCow-0Y.js";import{P as L}from"./ProjectDataAvailability-CkM44KJP.js";import"./index-B6PxL5aV.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BVkcnSZT.js";import"./mockTeam-jEDUJTG-.js";import"./SynapseConstants-5wFUozBC.js";import"./OrientationBanner-Bi-PGINz.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CtXvjQZG.js";import"./index-yvy-db2D.js";import"./iframe-1q_ZXoNJ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Z8wD_rYz.js";import"./FullWidthAlert-CoE9vDR_.js";import"./Alert-DCknF0A6.js";import"./createTheme-CiUfzjCM.js";import"./DefaultPropsProvider-DcOZysit.js";import"./useSlot-Z2GA-iSS.js";import"./useForkRef-beRYI9rx.js";import"./createSimplePaletteValueFilter-C1zgnp1T.js";import"./createSvgIcon-CL-Zh4hn.js";import"./Close-seSZeBuJ.js";import"./IconButton-dJCsQ0LH.js";import"./useTimeout-DNwjqBRA.js";import"./ButtonBase-Gt11VN7t.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B4CUiK17.js";import"./Paper-xpThwoIG.js";import"./useTheme-CVLuf0XX.js";import"./useTheme-BJkLbB1K.js";import"./Stack-xD0mjSDc.js";import"./extendSxProp-BVtlM31J.js";import"./getThemeProps-BueUQJN-.js";import"./Box-VPHC_qet.js";import"./AlertTitle-BToGfpRY.js";import"./Typography-C40mCnbz.js";import"./index-Dfz0lUif.js";import"./ClickAwayListener-D5QI5yc9.js";import"./getReactElementRef-ByzYBIwj.js";import"./index-xIq1_iwD.js";import"./index-C5pH_wbS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-A-RAayFp.js";import"./Tooltip-DCFIcbMu.js";import"./index-Q8rg9TUC.js";import"./useControlled-CPCJ5tB0.js";import"./Popper-DIjI2LY0.js";import"./Button-r7xQACsx.js";import"./uniqueId-BvyZjsML.js";import"./toString-Db0AdUqz.js";import"./isArray-CGnJ5Q6W.js";import"./isSymbol-D80MTqA0.js";import"./times-CGNryYZ_.js";import"./_Uint8Array-c111EMGA.js";import"./identity-DKeuBCMA.js";import"./toInteger-Mj7CpQY8.js";import"./mockTableEntity-BLH_Anpw.js";import"./mockFileEntityACLVariants-Bwt0tz6j.js";import"./fakerUtils-5t5FtoDa.js";import"./mockFileEntity-B--bhezy.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-DcOalJ8a.js";import"./mockSchema-CFgLiYu6.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-X6st-VlV.js";import"./QueryClientProvider-DdXPuLGz.js";import"./Link-CWqmhl9r.js";import"./Collapse-8g1xf4pi.js";import"./_baseUniq-CsyBfxx_.js";import"./_getTag-CvnuNdI4.js";import"./isEqual-CoOAKsPN.js";import"./merge-BIptyiay.js";import"./_initCloneObject-BRxCbDFA.js";import"./tinycolor-Begke6kS.js";import"./Fade-JTkPoVCR.js";import"./inputBaseClasses-CHfnDXYO.js";import"./calculateFriendlyFileSize-CbAXs_BD.js";import"./CheckCircleTwoTone-BmvHMB2T.js";import"./InfoTwoTone-Cq9CFdau.js";import"./useMutation-DGiPDpom.js";import"./dayjs.min-B9RRCe8t.js";import"./chunk-AYJ5UCUI-CnetVj3K.js";import"./cloneDeep-BzGc9IrP.js";import"./Skeleton-JmOEAHCD.js";import"./HelpPopover-DhBIfc1h.js";import"./MarkdownPopover-Dp1RsSVJ.js";import"./LightTooltip-C7jzOyw4.js";import"./MarkdownSynapse-2CwEb_nI.js";import"./SkeletonButton-1WQ8rnpx.js";import"./SkeletonInlineBlock-D2oQkChG.js";import"./SkeletonTable-Bxf7CoXV.js";import"./SkeletonParagraph-CjBcZ6DC.js";import"./HelpOutlineTwoTone-CK6hwF7i.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
