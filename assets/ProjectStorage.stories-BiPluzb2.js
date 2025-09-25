import{g as i}from"./entityHandlers-BvlkYp3A.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BUlyPuDq.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DcVJYLqu.js";import{g as m}from"./userProfileHandlers-FugFq4-D.js";import{P as L}from"./ProjectDataAvailability-B5Z1fJRM.js";import"./index-DreQrsgJ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DnmntofU.js";import"./mockTeam-BXSwaLnP.js";import"./SynapseConstants-BXxexPNB.js";import"./OrientationBanner-Dwbo18mI.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Cc4jlaqh.js";import"./index-Conua9G2.js";import"./iframe-DINMmeF0.js";import"./spreadSx-CwcO6WA9.js";import"./react-CcAHcoXJ.js";import"./FullWidthAlert-BdeJokJU.js";import"./Alert-NYlgKHCU.js";import"./createTheme-D08z8tOW.js";import"./DefaultPropsProvider-DT8CdkBr.js";import"./useSlot-DE448mYQ.js";import"./useForkRef-BOOPc1N3.js";import"./createSimplePaletteValueFilter-DliqdM69.js";import"./createSvgIcon-DsUJVPN3.js";import"./Close-C5Fd5xBA.js";import"./IconButton-CO_T40ac.js";import"./useTimeout-yzxxGqTd.js";import"./ButtonBase-CI1QBf81.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BAB5lzGK.js";import"./Paper-D8BNceYg.js";import"./useTheme-c4-KANp3.js";import"./useTheme-DWNjemT5.js";import"./Stack-B5tIAd5T.js";import"./extendSxProp-CQjXTKEM.js";import"./getThemeProps-Comk8tGO.js";import"./Box-21u2VOup.js";import"./AlertTitle-DdSQuuvw.js";import"./Typography-Dk4r4gKE.js";import"./index-BOQNH-ld.js";import"./ClickAwayListener-CAR9WkBC.js";import"./getReactElementRef-BYxl9ReH.js";import"./index-BeXPOtKG.js";import"./index-DEPw-8TP.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-rrQjLqz3.js";import"./Tooltip-Wnc6hSS_.js";import"./index-D6GytKF2.js";import"./useControlled-D6_D2B3V.js";import"./Popper-OG1QSaYS.js";import"./Button-Bdba21BO.js";import"./uniqueId-DqdmD3Tn.js";import"./toString-iLOXdbSh.js";import"./isArray-BEZx63XQ.js";import"./isSymbol-DI3YjOnR.js";import"./times-BCCmqcvk.js";import"./_Uint8Array-CCAngnKw.js";import"./identity-DKeuBCMA.js";import"./toInteger-CtLJbbJ1.js";import"./mockTableEntity-ohWZrckT.js";import"./mockFileEntityACLVariants-D6ijeWq7.js";import"./fakerUtils-CnQDNY1J.js";import"./mockFileEntity-CUg2SPDi.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CmZZP1oA.js";import"./mockSchema-BWuqn9OJ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BC3X2hnG.js";import"./QueryClientProvider-CAKhw4C9.js";import"./Link-BJBYKH9W.js";import"./Collapse-5L_tchsD.js";import"./_baseUniq-CQAbdrFR.js";import"./_getTag-CPVtyb7j.js";import"./isEqual-OsnJ8CjH.js";import"./merge-C-LaIOn_.js";import"./_initCloneObject-BvlKiu5a.js";import"./tinycolor-Begke6kS.js";import"./Fade-DswKjK0I.js";import"./inputBaseClasses-tFw5dEmI.js";import"./calculateFriendlyFileSize-D45TlB4L.js";import"./CheckCircleTwoTone-iWPuj-gd.js";import"./InfoTwoTone-a6I8wWJp.js";import"./useMutation-OR9-iA6C.js";import"./dayjs.min-DqoIjlsg.js";import"./chunk-AYJ5UCUI-_J62a5MN.js";import"./cloneDeep-C040B9cs.js";import"./Skeleton-CvhPcUKQ.js";import"./HelpPopover-Bp8CThTe.js";import"./MarkdownPopover-CmIIIXqC.js";import"./LightTooltip-CqIFaC61.js";import"./MarkdownSynapse-Imxm1xrQ.js";import"./SkeletonButton--6tAI1_Y.js";import"./SkeletonInlineBlock-BTsrrFLh.js";import"./SkeletonTable-CByADTO7.js";import"./SkeletonParagraph-Dj_aIp90.js";import"./HelpOutlineTwoTone-DHMRCLzu.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
