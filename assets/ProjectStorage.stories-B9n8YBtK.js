import{g as i}from"./entityHandlers-COSZTL4K.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-CNFcQdml.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-BaXBuvdZ.js";import{g as m}from"./userProfileHandlers-B7Q1f-H8.js";import{P as L}from"./ProjectDataAvailability-WlgjQOPO.js";import"./index-C1eyc0Dt.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DjdxBu1P.js";import"./mockTeam-SCbxuipZ.js";import"./SynapseConstants-DBNLKtRP.js";import"./OrientationBanner-B8aBrx6p.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-C9togNJv.js";import"./index-BHJCzbh3.js";import"./iframe-dITNj0Hx.js";import"./spreadSx-CwcO6WA9.js";import"./react-DEWDKV7G.js";import"./FullWidthAlert-BeHQTUMX.js";import"./Alert-CgIRN3k3.js";import"./createTheme-CKqkwa7d.js";import"./DefaultPropsProvider-D5YzZChL.js";import"./useSlot-BGMO4Ps_.js";import"./useForkRef-Cl9Rp-dg.js";import"./createSimplePaletteValueFilter-D8THahFF.js";import"./createSvgIcon-hw5sef7_.js";import"./Close-Ca1w9KAM.js";import"./IconButton-D6fg4-JH.js";import"./useTimeout-D8YjTpcK.js";import"./ButtonBase-B4TRRvGR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-2gMhwz2x.js";import"./Paper-DEWk3Iwm.js";import"./useTheme-DOVonx1n.js";import"./useTheme-C7jBfA_o.js";import"./Stack-BrOi9MTv.js";import"./extendSxProp-DJfIiLD8.js";import"./getThemeProps-Ca39sDWE.js";import"./Box-CoN9Xcom.js";import"./AlertTitle-IM4UpBhk.js";import"./Typography-CWkdFRvd.js";import"./index-DN5FxpE6.js";import"./ClickAwayListener-CHohliHo.js";import"./getReactElementRef-VVl8u3pk.js";import"./index-Ctb1fTIi.js";import"./index-C4JV96Bq.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B7LlwP-G.js";import"./Tooltip-EB8Acvns.js";import"./index-DoXq1h2I.js";import"./useControlled-D1PVFx-p.js";import"./Popper-CU6WRkQu.js";import"./Button-A4JrCwSW.js";import"./uniqueId-Bm9fC-2t.js";import"./toString-D1VyyLj_.js";import"./isArray-Dhffyn_X.js";import"./isSymbol-GpfXkDnX.js";import"./times-DBpvTzmB.js";import"./_Uint8Array-C5QuASXD.js";import"./identity-DKeuBCMA.js";import"./toInteger-DI2xZEx7.js";import"./mockTableEntity-DmsIEWsF.js";import"./mockFileEntityACLVariants-CA_fmbSE.js";import"./fakerUtils-CgzyGgWr.js";import"./mockFileEntity-CXT3fb_D.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-CLEfO1Q0.js";import"./mockSchema-uT7b8PcK.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DlKbqV7m.js";import"./QueryClientProvider-BL9YT6Vs.js";import"./Link-Cao8rbg2.js";import"./Collapse-CsAoI-BE.js";import"./_baseUniq-C5SXyLOe.js";import"./_getTag-a5To3XUS.js";import"./isEqual-G3jbN0hm.js";import"./merge-C9xt5aZs.js";import"./_initCloneObject-Cz0cTzpK.js";import"./tinycolor-Begke6kS.js";import"./Fade-crWMwZ_Y.js";import"./inputBaseClasses-CJ7Qu9r4.js";import"./calculateFriendlyFileSize-BzH9ntlH.js";import"./CheckCircleTwoTone-Brx8IfwO.js";import"./InfoTwoTone-CQSVX7va.js";import"./useMutation-CaTGYQiO.js";import"./dayjs.min-Bjd3NTcv.js";import"./chunk-AYJ5UCUI-DoqxXuGW.js";import"./cloneDeep-CoKPu_b1.js";import"./Skeleton-DQoBJCRz.js";import"./HelpPopover-BFYc_qrI.js";import"./MarkdownPopover-B5E-PsBr.js";import"./LightTooltip-BdwefXkg.js";import"./MarkdownSynapse-BBczN6Rl.js";import"./SkeletonButton-BIeq27We.js";import"./SkeletonInlineBlock-rp-qcFU6.js";import"./SkeletonTable-CGYjuAVG.js";import"./SkeletonParagraph-CZaUYsDH.js";import"./HelpOutlineTwoTone-CCVx8cLn.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
