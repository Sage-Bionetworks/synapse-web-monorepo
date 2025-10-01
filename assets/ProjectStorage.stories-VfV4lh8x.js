import{g as i}from"./entityHandlers-DJmt9wTp.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DBEctmab.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-CeM3xIAk.js";import{g as m}from"./userProfileHandlers-DaD-aYn7.js";import{P as L}from"./ProjectDataAvailability-Dt3206_2.js";import"./index-NvQAC86z.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B-7_J7n0.js";import"./mockTeam-BkY2Kb5y.js";import"./SynapseConstants-CbAC6j7A.js";import"./OrientationBanner-DpVC70dt.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Ct3r44PU.js";import"./index-BoC9mbPI.js";import"./iframe-D_Fqsfq4.js";import"./spreadSx-CwcO6WA9.js";import"./react-BH467_GQ.js";import"./FullWidthAlert-Bj9eHiJK.js";import"./Alert-Ds3NZtv3.js";import"./createTheme-DKmQ0T8u.js";import"./DefaultPropsProvider-DX1Tm6hX.js";import"./useSlot-DHgN7HRG.js";import"./useForkRef-DuJEVWZk.js";import"./createSimplePaletteValueFilter-C5zma5o1.js";import"./createSvgIcon-D0lTdNMg.js";import"./Close-C6pR0wvq.js";import"./IconButton-jj7u6pzf.js";import"./useTimeout-D2L2hKd5.js";import"./ButtonBase-CVi0DzxW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CkE3_q69.js";import"./Paper-bVT9BLiU.js";import"./useTheme-DOeDq_FU.js";import"./useTheme-BCF8IGAN.js";import"./Stack-86eFiKCQ.js";import"./extendSxProp-CsGDdDwy.js";import"./getThemeProps-DawfSU79.js";import"./Box-F0f29abT.js";import"./AlertTitle-CAoDvZac.js";import"./Typography-Ch2gxwNH.js";import"./index-BQwSpiiQ.js";import"./ClickAwayListener-gJuMmyJa.js";import"./getReactElementRef-Bemv---L.js";import"./index-BNyjnn7z.js";import"./index-CIfKdjTQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DW5gViin.js";import"./Tooltip-B8qmX082.js";import"./index-LLHf2Rll.js";import"./useControlled-Fn_6fmgT.js";import"./Popper-D90A6WnX.js";import"./Button-Dvv07PAX.js";import"./uniqueId-3_UfNhdF.js";import"./toString-W3Ng2Dl1.js";import"./isArray-DrXY-ag7.js";import"./isSymbol-DiwKEYKx.js";import"./times-BaW9nck_.js";import"./_Uint8Array-I8Q0tngj.js";import"./identity-DKeuBCMA.js";import"./toInteger-DFei6qGl.js";import"./mockTableEntity-DQx6EKop.js";import"./mockFileEntityACLVariants-DJL5MX4N.js";import"./fakerUtils-DxEAErZL.js";import"./mockFileEntity-mNFzPKp-.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-C7zNmQzo.js";import"./mockSchema-CoCmohS-.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-B9gAQeEx.js";import"./QueryClientProvider-D1-MD6zl.js";import"./Link-CeAlzF0F.js";import"./Collapse-BPGnxPXh.js";import"./_baseUniq-CoHdZ8H5.js";import"./_getTag-CnqFMyCR.js";import"./isEqual-OqqYJb0M.js";import"./merge-DV3Kq0zA.js";import"./_initCloneObject-CmSiAr5t.js";import"./tinycolor-Begke6kS.js";import"./Fade-DC6uyZ5B.js";import"./inputBaseClasses-CZ5eTaNL.js";import"./calculateFriendlyFileSize-C67i4Vi9.js";import"./CheckCircleTwoTone-DBrdLgIO.js";import"./InfoTwoTone-CsFI_uty.js";import"./useMutation-C76vb5A5.js";import"./dayjs.min-BAmezIeJ.js";import"./chunk-AYJ5UCUI-zMqkVHKR.js";import"./cloneDeep-DqSuasmx.js";import"./Skeleton-EPd-3t_-.js";import"./HelpPopover-B0sbpcuy.js";import"./MarkdownPopover-ChT7WL2-.js";import"./LightTooltip-0j6dGkFp.js";import"./MarkdownSynapse-6iO57Q-W.js";import"./SkeletonButton-BUBbV4JZ.js";import"./SkeletonInlineBlock-CJp5nn7M.js";import"./SkeletonTable-CXldc8KD.js";import"./SkeletonParagraph-DcTnO7rN.js";import"./HelpOutlineTwoTone-BE-W-6Xo.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
