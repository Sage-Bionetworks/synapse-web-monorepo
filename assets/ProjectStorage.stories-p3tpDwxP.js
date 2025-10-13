import{g as i}from"./entityHandlers-DmNIv3Gg.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BM92AjlG.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-BarfV7Mg.js";import{g as m}from"./userProfileHandlers-A-rLlChp.js";import{P as L}from"./ProjectDataAvailability-C4ccON1V.js";import"./index-Bi7X5j_3.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BbCeqJNa.js";import"./mockTeam-BuSdv9oh.js";import"./SynapseConstants-CSQZ8LdY.js";import"./OrientationBanner-B9vK_fOZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D-UvISqL.js";import"./index-Df_FdJl-.js";import"./iframe-DsTvFT6Q.js";import"./spreadSx-CwcO6WA9.js";import"./react-C6TP9ok4.js";import"./FullWidthAlert-Bu31KEHU.js";import"./Alert-BfEFHSpf.js";import"./createTheme-B4cUhGob.js";import"./DefaultPropsProvider-9yDVx9dT.js";import"./useSlot-DHoMpVG_.js";import"./useForkRef-C37ywrok.js";import"./createSimplePaletteValueFilter-CmcCRKj9.js";import"./createSvgIcon-Bx2dCIbF.js";import"./Close-DNuwum3q.js";import"./IconButton-BXTZx6ON.js";import"./useTimeout-B-uQAk7X.js";import"./ButtonBase-COtAfe0-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D859Rgox.js";import"./Paper-Cf1kvPYs.js";import"./useTheme-BCgVrM8U.js";import"./useTheme-BNWJT91L.js";import"./Stack-BnE5AZPR.js";import"./useThemeProps-Di9ozye9.js";import"./getThemeProps-DDS8aWDb.js";import"./extendSxProp-DGFMAjvY.js";import"./Box-CWKxjGZN.js";import"./AlertTitle-BrquGJFX.js";import"./Typography-DzNtFqki.js";import"./index-DvmyVfCT.js";import"./ClickAwayListener-CFjnMEqm.js";import"./getReactElementRef-q6KXtwDj.js";import"./index-LtSKZm9d.js";import"./index-Bj500_V6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CSPbf5zw.js";import"./Tooltip-CIfcREkL.js";import"./index-Bc5ECFUa.js";import"./useControlled-47FWtaLW.js";import"./Popper-DFTLUIEO.js";import"./Button-UK5ni8CN.js";import"./uniqueId-B-X-Pcad.js";import"./toString-C5D_JqWD.js";import"./isArray-CCt3-GU-.js";import"./isSymbol-BaBXEl4F.js";import"./times-AS42JGk1.js";import"./_Uint8Array-Tgc0IKEL.js";import"./identity-DKeuBCMA.js";import"./toInteger-TYVSzmyI.js";import"./mockTableEntity-DfUn7yZa.js";import"./mockFileEntityACLVariants-Dny6-VFM.js";import"./fakerUtils-CLXljtjK.js";import"./mockFileEntity-CLeaCwqX.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DKnF7Dmg.js";import"./mockSchema-CWIu2hLw.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BWAW2VGJ.js";import"./QueryClientProvider-OtgzlTZ3.js";import"./Link-DFZaBwQ-.js";import"./Collapse-BS71YIGZ.js";import"./_baseUniq-CmLy7hQ9.js";import"./_getTag-DDx0ez5Y.js";import"./isEqual-BrMooGWr.js";import"./noop-DX6rZLP_.js";import"./merge-DiyJyzhC.js";import"./_initCloneObject-CwDTQz61.js";import"./tinycolor-Begke6kS.js";import"./Fade-BnQ6e4Q4.js";import"./inputBaseClasses-C0c-AyIl.js";import"./calculateFriendlyFileSize-CvjtSy_b.js";import"./CheckCircleTwoTone-gDseQqaM.js";import"./InfoTwoTone-DfKGI0-a.js";import"./useMutation-Busowt2v.js";import"./dayjs.min-DK0WmqxW.js";import"./chunk-AYJ5UCUI-CSRoxWwe.js";import"./cloneDeep-CNI9lROB.js";import"./Skeleton-Da4ynUFT.js";import"./HelpPopover-4RlK0epy.js";import"./MarkdownPopover-B0nQa6el.js";import"./LightTooltip-DJymrmVG.js";import"./MarkdownSynapse-BXS9wRRN.js";import"./SkeletonButton-B6SlV21H.js";import"./SkeletonInlineBlock-CIzVl0ZL.js";import"./SkeletonTable-B3Zj-4ZO.js";import"./SkeletonParagraph-CM-XT7Cq.js";import"./HelpOutlineTwoTone-_LYu5zpY.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
