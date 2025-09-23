import{g as i}from"./entityHandlers-CJEBYfo8.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Beh68O0r.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-CEWmuCXB.js";import{g as m}from"./userProfileHandlers-yJ8UYEvT.js";import{P as L}from"./ProjectDataAvailability-DYcvhDu8.js";import"./index-Cd-o48YU.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-ChtdZghv.js";import"./mockTeam-CAbGDFQy.js";import"./SynapseConstants-D0NSmgCZ.js";import"./OrientationBanner-BZ8oNh3t.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BBkAb27i.js";import"./index-DqVY_MdG.js";import"./iframe-B5rs55Pd.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cy3MuSEQ.js";import"./FullWidthAlert-BtCkhzZ3.js";import"./Alert-BKYnRrQJ.js";import"./createTheme-CCW9jeh0.js";import"./DefaultPropsProvider---V3OlnO.js";import"./useSlot-HxkH3zom.js";import"./useForkRef-BjME3TBq.js";import"./createSimplePaletteValueFilter-DMImf7ZH.js";import"./createSvgIcon-excwm1Bq.js";import"./Close-L3mo_2vy.js";import"./IconButton-D6h92Nv_.js";import"./useTimeout-Cn7Uzbmj.js";import"./ButtonBase-uwFg90Zi.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-_VcLKcI3.js";import"./Paper-ByAOIlTc.js";import"./useTheme-BQ11NupA.js";import"./useTheme-CAAyb6Hf.js";import"./Stack-Dz_8zDqt.js";import"./extendSxProp-eoSEBB6W.js";import"./getThemeProps-BvRhKV-H.js";import"./Box-O9YaUbMX.js";import"./AlertTitle-D8M-AeO7.js";import"./Typography-CmzLS_3x.js";import"./index-Cm_4ILsu.js";import"./ClickAwayListener-D_fSXknu.js";import"./getReactElementRef-BHEdfli1.js";import"./index-wGYHSRzj.js";import"./index-CZaeG_Zw.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-amcfaYIw.js";import"./Tooltip-BfyIksiy.js";import"./index-EjTZ2IHQ.js";import"./useControlled-CCY7r0wx.js";import"./Popper-YRgzSLhl.js";import"./Button-Dq-oY-14.js";import"./uniqueId-CQ_AaOgz.js";import"./toString-Ct2O2woV.js";import"./isArray-BtIqvJez.js";import"./isSymbol-BXNXa0aU.js";import"./times-DbYfL1oY.js";import"./_Uint8Array-DVWjLwzM.js";import"./identity-DKeuBCMA.js";import"./toInteger-cjaqhma4.js";import"./mockTableEntity-CBWjb5zt.js";import"./mockFileEntityACLVariants-ZFHg82qv.js";import"./fakerUtils-CiTEMOuT.js";import"./mockFileEntity-DSLmJEDi.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-KYco3UYc.js";import"./mockSchema-C1Ll0cRH.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-u57ZdOBo.js";import"./QueryClientProvider-D1Z109eC.js";import"./Link-CZH2FWuL.js";import"./Collapse-CTNMUOeL.js";import"./_baseUniq-5JOGYzKc.js";import"./_getTag-NbEUeoAA.js";import"./isEqual-DD744pPA.js";import"./merge-B8auVx-M.js";import"./_initCloneObject-BBfrylM9.js";import"./tinycolor-Begke6kS.js";import"./Fade-DJjZuyOW.js";import"./inputBaseClasses-C-wk8k42.js";import"./calculateFriendlyFileSize-DOc3ApXu.js";import"./CheckCircleTwoTone-BjPNSBnS.js";import"./InfoTwoTone-C06WRRzI.js";import"./useMutation-DdOlkJWg.js";import"./dayjs.min-CVRkaDCo.js";import"./chunk-AYJ5UCUI-CXz_weJf.js";import"./cloneDeep-cgBlVPgb.js";import"./Skeleton-CFdSDccd.js";import"./HelpPopover-C8JPLrME.js";import"./MarkdownPopover-C-K8wlsr.js";import"./LightTooltip-CjhFmxn9.js";import"./MarkdownSynapse-CNkPN_bc.js";import"./SkeletonButton-DQe85F23.js";import"./SkeletonInlineBlock-DJspSBMv.js";import"./SkeletonTable-BPVbgSvO.js";import"./SkeletonParagraph-B0GBzdM9.js";import"./HelpOutlineTwoTone-BBP6OYPb.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
