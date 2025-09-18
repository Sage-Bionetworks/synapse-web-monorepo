import{g as i}from"./entityHandlers-dNSqWeXV.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-K8DYYfbL.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-CRsUIbQM.js";import{g as m}from"./userProfileHandlers-DhOwUVQv.js";import{P as L}from"./ProjectDataAvailability-BKDsvl7O.js";import"./index-B9yipgfX.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CG36i_3t.js";import"./mockTeam-CteocHrt.js";import"./SynapseConstants-BNqJ1dmQ.js";import"./OrientationBanner-DO3atoak.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DMGiq-oD.js";import"./index-BWypuEAC.js";import"./iframe-DLoU1ahu.js";import"./spreadSx-CwcO6WA9.js";import"./react-DjBUmadF.js";import"./FullWidthAlert-CRt1fznC.js";import"./Alert-BV3pGEf4.js";import"./createTheme-CTYanVb6.js";import"./DefaultPropsProvider-BDt2e6U1.js";import"./useSlot-Bjs5jEzg.js";import"./useForkRef-BYimg5tu.js";import"./createSimplePaletteValueFilter-DyxFD1HT.js";import"./createSvgIcon-BtjRo1s8.js";import"./Close-TuaEvS9Q.js";import"./IconButton-CG40tOLN.js";import"./useTimeout-CV-UDPnG.js";import"./ButtonBase-B1Aawh7J.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cv2RV5mv.js";import"./Paper-CnCPZiGK.js";import"./useTheme-C5bnTO0C.js";import"./useTheme-vH2-3CZY.js";import"./Stack-B3sHXsJB.js";import"./extendSxProp-An3U-zM_.js";import"./getThemeProps-Ds-P6itY.js";import"./Box-BNUP0C4N.js";import"./AlertTitle-Co0RehR7.js";import"./Typography-BuQPwiWH.js";import"./index-B_N18MqX.js";import"./ClickAwayListener-DXEacgiq.js";import"./getReactElementRef-C59rUygw.js";import"./index-Dsh6_7g_.js";import"./index-OIClFg-6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow--ZE6kIjo.js";import"./Tooltip-LGtZ2wNx.js";import"./index-BTTxMwcY.js";import"./useControlled-zZFQr41i.js";import"./Popper-CqfbaZIs.js";import"./Button-Dcf2Uy6O.js";import"./uniqueId-DalZAxOt.js";import"./toString-sXWj2bS0.js";import"./isArray-OPNH0lK8.js";import"./isSymbol-DlvAnO-7.js";import"./times-IMrrZIta.js";import"./_Uint8Array-BMT3sbmx.js";import"./identity-DKeuBCMA.js";import"./toInteger-4L7jdfco.js";import"./mockTableEntity-Bdf68aN7.js";import"./mockFileEntityACLVariants-CRcIRjNh.js";import"./fakerUtils-CigWL0Pi.js";import"./mockFileEntity-DT5g8Uky.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-D0cRroNC.js";import"./mockSchema-CG0uzSd-.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DE-P6w3m.js";import"./QueryClientProvider-C0WTo0Yv.js";import"./Link-CTVAbhge.js";import"./Collapse-Csaq8Kqm.js";import"./_baseUniq-Di1qZggb.js";import"./_getTag-DHdisHvI.js";import"./isEqual-UFGSw-KB.js";import"./merge-CwLris3H.js";import"./_initCloneObject-lij9pG62.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4hRl5lB.js";import"./inputBaseClasses-6-j6zI35.js";import"./calculateFriendlyFileSize-Z2sNf6lN.js";import"./CheckCircleTwoTone-BGkZTGGE.js";import"./InfoTwoTone-DB8Ypec5.js";import"./useMutation-7J5H8WCt.js";import"./dayjs.min-CjfNKo90.js";import"./chunk-AYJ5UCUI-BocGNCD5.js";import"./cloneDeep-BDdpJTPu.js";import"./Skeleton-ZFgYUmdS.js";import"./HelpPopover-DbD20uqG.js";import"./MarkdownPopover-C9gpsv_H.js";import"./LightTooltip-l9NCQNlN.js";import"./MarkdownSynapse-DfUFcqb7.js";import"./SkeletonButton-BeNv1vHX.js";import"./SkeletonInlineBlock-BSqi2LGR.js";import"./SkeletonTable-2ZnI4IEP.js";import"./SkeletonParagraph-CAoWenhb.js";import"./HelpOutlineTwoTone-DPGK7R7U.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
