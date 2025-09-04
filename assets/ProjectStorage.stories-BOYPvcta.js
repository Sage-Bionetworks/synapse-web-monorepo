import{g as i}from"./entityHandlers-Dfq-Y-Ku.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-DLIOTyrS.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-CISEm9VK.js";import{g as m}from"./userProfileHandlers-D23inFQj.js";import{P as L}from"./ProjectDataAvailability-BgjFKLnw.js";import"./index-DS6fBZWg.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Dvp-gEPW.js";import"./mockTeam-B9B_pyv9.js";import"./SynapseConstants-BkOa3sXi.js";import"./OrientationBanner-BVDH2MzU.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BXOdbnPZ.js";import"./index-jbxe4qnf.js";import"./iframe-Csk0P4iV.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cup9Wpmf.js";import"./FullWidthAlert-XjP6IbA0.js";import"./Alert-CSaRUXVh.js";import"./createTheme-QTfNIHND.js";import"./DefaultPropsProvider-C4ttJDz_.js";import"./useSlot-CSa8e3oq.js";import"./useForkRef-wDv3ts2U.js";import"./createSimplePaletteValueFilter-CFdyQ8cQ.js";import"./createSvgIcon-lCvAzxxC.js";import"./Close-aJAmR6rq.js";import"./IconButton-DBbxkGzb.js";import"./useTimeout-hWOZoqao.js";import"./ButtonBase-iBx1-ak6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D4qUYTVZ.js";import"./Paper-BEpt9DOD.js";import"./useTheme-CIoHEpFD.js";import"./useTheme-rEQ5k3ZP.js";import"./Stack-CH6zs4CJ.js";import"./extendSxProp-CmGMGW33.js";import"./getThemeProps-mTF8rg2g.js";import"./Box-NmarTIzp.js";import"./AlertTitle-vvBOfH00.js";import"./Typography-B2nrfcQB.js";import"./index-DeDVaIci.js";import"./ClickAwayListener-CpmfBYEj.js";import"./getReactElementRef-DVxXf28N.js";import"./index--FkLQ4Xz.js";import"./index-lKZlVmyo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DiQPLxxn.js";import"./Tooltip-qF9vFCxj.js";import"./index-Bgii8hnK.js";import"./useControlled-BKjVu3OC.js";import"./Popper-DxO4RVb4.js";import"./Button-BoXndE0m.js";import"./uniqueId-Dm32IkqC.js";import"./toString-CapwZo1z.js";import"./isArray-BK6K0JW6.js";import"./isSymbol-AscnRFWd.js";import"./times-DyytoIB2.js";import"./_Uint8Array-BPaHv55i.js";import"./identity-DKeuBCMA.js";import"./toInteger-Dpi0NPcf.js";import"./mockTableEntity-BFkE-rks.js";import"./mockFileEntityACLVariants-C5v4SID8.js";import"./fakerUtils-DHedGyVb.js";import"./mockFileEntity-CFv7ZFUU.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-Bzsy4q_a.js";import"./mockSchema-BNf7WWsI.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BH1fdT2O.js";import"./QueryClientProvider-BlzrW-Yp.js";import"./Link-DoaJtmS-.js";import"./Collapse-BCXifEe6.js";import"./_baseUniq-BPTUWCw_.js";import"./_getTag-Cqra_tga.js";import"./isEqual-B6B5D0Bt.js";import"./merge-BdRt6DVn.js";import"./_initCloneObject-et7WGEHT.js";import"./tinycolor-Begke6kS.js";import"./Fade-CJ4j-VUz.js";import"./inputBaseClasses-B7PHTgh5.js";import"./calculateFriendlyFileSize-B9lMuR0e.js";import"./CheckCircleTwoTone-B47WEstA.js";import"./InfoTwoTone-TFHJlf05.js";import"./useMutation-BFWcW8eU.js";import"./dayjs.min-C4WBa-1y.js";import"./chunk-AYJ5UCUI-CSrZGdWP.js";import"./cloneDeep-Dc2FF7e1.js";import"./Skeleton-9lEgPNC3.js";import"./HelpPopover-CUxn9mhF.js";import"./MarkdownPopover-DQ7HVVGd.js";import"./LightTooltip-BlfxrBmD.js";import"./MarkdownSynapse-CoDma9R9.js";import"./SkeletonButton-BFV816MJ.js";import"./SkeletonInlineBlock-CBx7kl82.js";import"./SkeletonTable-BH4J2Stw.js";import"./SkeletonParagraph-S2ApxKSe.js";import"./HelpOutlineTwoTone-C2PSJauU.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
