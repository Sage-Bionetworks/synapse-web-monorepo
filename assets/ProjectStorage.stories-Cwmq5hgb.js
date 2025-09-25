import{g as i}from"./entityHandlers-DRlegO8B.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Ck0SAQJm.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DY96DRX8.js";import{g as m}from"./userProfileHandlers-DVYUzynl.js";import{P as L}from"./ProjectDataAvailability-BP8aeT1W.js";import"./index-BK5Db5kN.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-B_3GyJ73.js";import"./mockTeam-bWew3SUh.js";import"./SynapseConstants-H2H4uJUY.js";import"./OrientationBanner-CK4-pjte.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Dp7LC-uS.js";import"./index-CPLnAWAL.js";import"./iframe-Cw_yZaV2.js";import"./spreadSx-CwcO6WA9.js";import"./react-CT2CPoKP.js";import"./FullWidthAlert-l1-NGKjy.js";import"./Alert-li6zxXuR.js";import"./createTheme-ChtqmcTg.js";import"./DefaultPropsProvider-CC2kaeZR.js";import"./useSlot-omfmVDzD.js";import"./useForkRef-C5BUgNSS.js";import"./createSimplePaletteValueFilter-pT0uCa3p.js";import"./createSvgIcon-B9ptMgVS.js";import"./Close-C0YdDub3.js";import"./IconButton-29B3UHc_.js";import"./useTimeout-Betqu8W3.js";import"./ButtonBase-Bqm1GJY2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-yW_HmXon.js";import"./Paper-ieaJEv4g.js";import"./useTheme-Nym6qI7j.js";import"./useTheme-BhYP72KB.js";import"./Stack-LiOQB_FT.js";import"./extendSxProp-Buxb_804.js";import"./getThemeProps-CJPvSiqT.js";import"./Box-nyneOUy5.js";import"./AlertTitle-BmjQYwBY.js";import"./Typography-1GfpkFqt.js";import"./index-NVuPnC3E.js";import"./ClickAwayListener-XweM7X4K.js";import"./getReactElementRef-_LpF0Sxi.js";import"./index-Cw5q5fsG.js";import"./index-hd-48767.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cj47bIQe.js";import"./Tooltip-Xzq95ZNX.js";import"./index-Bpvbg0qk.js";import"./useControlled-DiXAzLHp.js";import"./Popper-0YxxjHE0.js";import"./Button-GGnGFuhO.js";import"./uniqueId-mlR-3UF9.js";import"./toString-Cd2YTHKy.js";import"./isArray-CtmyCLSC.js";import"./isSymbol-CpYpzfJO.js";import"./times-CozXW8XX.js";import"./_Uint8Array-CuCmzQhK.js";import"./identity-DKeuBCMA.js";import"./toInteger-BCn72wV8.js";import"./mockTableEntity-BQ4Ti0_s.js";import"./mockFileEntityACLVariants-xn8iDYXd.js";import"./fakerUtils-Bu-V2G6b.js";import"./mockFileEntity-CShQ-I8L.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-xDFdu6ac.js";import"./mockSchema-Fvu5W5kp.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-WlLeMRk4.js";import"./QueryClientProvider-h3dPF_D_.js";import"./Link-CgzQNGBC.js";import"./Collapse-PwrV_8LN.js";import"./_baseUniq-DYWY_jNP.js";import"./_getTag-CTKZEpNQ.js";import"./isEqual-CaRsZTl5.js";import"./merge-T85d_cJJ.js";import"./_initCloneObject-D9NhiOWJ.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHH7H9w2.js";import"./inputBaseClasses-CPehs8P6.js";import"./calculateFriendlyFileSize-CYetzTdg.js";import"./CheckCircleTwoTone-BaJiyXQW.js";import"./InfoTwoTone-jSNHxiDk.js";import"./useMutation-2r_PMyuf.js";import"./dayjs.min-w8p9vUsD.js";import"./chunk-AYJ5UCUI-BO41wFUG.js";import"./cloneDeep-BIbNGKVC.js";import"./Skeleton-eCubiaGi.js";import"./HelpPopover-DzKtfKNS.js";import"./MarkdownPopover-DY85TJKb.js";import"./LightTooltip-DVLA8R-O.js";import"./MarkdownSynapse-ByZT2Kfc.js";import"./SkeletonButton-pFV7Kj0C.js";import"./SkeletonInlineBlock-BgQVdgPp.js";import"./SkeletonTable-BkO81sTx.js";import"./SkeletonParagraph-Dm--44AH.js";import"./HelpOutlineTwoTone-BXk-VyPf.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
