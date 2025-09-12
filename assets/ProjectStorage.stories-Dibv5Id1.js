import{g as i}from"./entityHandlers-9fLqDyGr.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-DfV3g7j3.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./StringUtils-DP1EOPFU.js";import{h as d,H as l}from"./index-B4qEVUho.js";import{g as m}from"./userProfileHandlers-D8ZcPVoO.js";import{P as L}from"./ProjectDataAvailability-BkRMcIm0.js";import"./index-Br5qNedP.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject--R5k8wMU.js";import"./mockTeam-B4QkKGjC.js";import"./SynapseConstants-BeeeLEMb.js";import"./OrientationBanner-Do4jzaCq.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BFZGQ6OZ.js";import"./index-B6sCHtko.js";import"./iframe-Dyc1tvxa.js";import"./spreadSx-CwcO6WA9.js";import"./react-D7gwMTFz.js";import"./FullWidthAlert-Bewi29vo.js";import"./Alert-Cz1bM932.js";import"./createTheme-BWzdH0Tw.js";import"./DefaultPropsProvider-CCvcxJNd.js";import"./useSlot-Db71F0Ap.js";import"./useForkRef-DUqjROYa.js";import"./createSimplePaletteValueFilter-CMkrO5Gi.js";import"./createSvgIcon-C--GKjVa.js";import"./Close-oTdZr2QN.js";import"./IconButton-TfKmbk1q.js";import"./useTimeout-DUwBfTM5.js";import"./ButtonBase-CUnnAwa6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CT39lesf.js";import"./Paper-CI2WrX6i.js";import"./useTheme-C3WRzWQr.js";import"./useTheme-DrGalr3E.js";import"./Stack-CYHPltJP.js";import"./extendSxProp-D8MMv9HH.js";import"./getThemeProps-cCUYVmNA.js";import"./Box-B4DT_63e.js";import"./AlertTitle-C0GFUGtD.js";import"./Typography-CjHB-jF7.js";import"./index-COs8OngO.js";import"./ClickAwayListener-9Td87dKe.js";import"./getReactElementRef-6O_b0WmK.js";import"./index-5LQf57Zc.js";import"./index-f60bxPXB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DCOXsKMM.js";import"./Tooltip-CgudnGYK.js";import"./index-Bedvx39d.js";import"./useControlled-CkNRWmXj.js";import"./Popper-Cv8b6PxU.js";import"./Button-8h_8cD3R.js";import"./uniqueId-BEcpnsI3.js";import"./toString-BsB0_4zq.js";import"./isArray-NVQNoNUM.js";import"./isSymbol-BsM13KWl.js";import"./times-DaOGDYas.js";import"./_Uint8Array-CuRypYcz.js";import"./identity-DKeuBCMA.js";import"./toInteger-17ZRF0UA.js";import"./mockTableEntity-gmq6HXZz.js";import"./mockFileEntityACLVariants-BDCFv_aR.js";import"./fakerUtils-CLlHKje1.js";import"./mockFileEntity-DzAKa2c5.js";import"./mock_file_handle-BIJh-7D7.js";import"./mockEntity-Dfm7eFmZ.js";import"./mockSchema-CXR0jy53.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CO7ddoea.js";import"./QueryClientProvider-Bsm8Viqu.js";import"./Link-BqVElqqF.js";import"./Collapse-CpLblW_e.js";import"./_baseUniq-9gO7m8Ct.js";import"./_getTag-BL5NJBfU.js";import"./isEqual-BogDr9UX.js";import"./merge-BOVQlJlI.js";import"./_initCloneObject-BD93w92L.js";import"./tinycolor-Begke6kS.js";import"./Fade-DGN7jsVH.js";import"./inputBaseClasses-LiHImfCr.js";import"./calculateFriendlyFileSize-EeAcNQrV.js";import"./CheckCircleTwoTone-B107xYF1.js";import"./InfoTwoTone-D2pybSip.js";import"./useMutation-DJj0HLy6.js";import"./dayjs.min-DDBsyKwq.js";import"./chunk-AYJ5UCUI-0eZLL8Z-.js";import"./cloneDeep-DopPwT4s.js";import"./Skeleton-Cifl5Ozt.js";import"./HelpPopover-BUlFW9eW.js";import"./MarkdownPopover-B6VKP_DE.js";import"./LightTooltip-C4lYclSl.js";import"./MarkdownSynapse-DQEmBEcr.js";import"./SkeletonButton-Hv7eHZtl.js";import"./SkeletonInlineBlock-Bb5_zCTg.js";import"./SkeletonTable-Dgt4HG_b.js";import"./SkeletonParagraph-dwV57w-B.js";import"./HelpOutlineTwoTone-Cnd3fVzG.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
