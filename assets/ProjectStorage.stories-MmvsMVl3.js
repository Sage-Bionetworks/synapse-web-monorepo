import{g as i}from"./entityHandlers-9LZUf0Qm.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-LypvG-sj.js";import"./VerificationSubmission-CDh9xETu.js";import"./StringUtils-CsrYFBZo.js";import{h as d,H as l}from"./index-Ba0Ez_aF.js";import{g as m}from"./userProfileHandlers-BOE0CzOD.js";import{P as L}from"./ProjectDataAvailability-B9P0Yhyu.js";import"./index-BeyplD_z.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-D1RilI3u.js";import"./mockTeam-_7MtjEQk.js";import"./SynapseConstants-CScskaqw.js";import"./OrientationBanner-BMZuIlKD.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-B4Tfv9JA.js";import"./index-DrlcO71a.js";import"./iframe-BS54MGHI.js";import"./spreadSx-CwcO6WA9.js";import"./react-yogpPmFf.js";import"./FullWidthAlert-CH-cCpej.js";import"./Alert-CekN_gAj.js";import"./createTheme-CQKuB-_w.js";import"./DefaultPropsProvider-BHDhaDyJ.js";import"./useSlot-C0OwMX66.js";import"./useForkRef-B8jEnRHG.js";import"./createSimplePaletteValueFilter--mtY5h6t.js";import"./createSvgIcon-BE2wnaae.js";import"./Close-CitnM-9o.js";import"./IconButton-Cy1b-xZD.js";import"./useTimeout-BEy-pgWT.js";import"./ButtonBase-B3T3xak3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-m8ZQtMFl.js";import"./Paper-B8xuQxDa.js";import"./useTheme-BZDRc6_Y.js";import"./useTheme-CC_pEuHP.js";import"./Stack-B9Gh8FGk.js";import"./extendSxProp-X6PGK1e5.js";import"./getThemeProps-DOng6F_8.js";import"./Box-CBr-jezS.js";import"./AlertTitle-Bpgzqi1b.js";import"./Typography-z3tfaaqZ.js";import"./index-Cxa_fUkM.js";import"./ClickAwayListener-CL0a72jO.js";import"./getReactElementRef-DIEgKyGp.js";import"./index-CqbrU4vx.js";import"./index-D1_q4pmj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-nNbLLGck.js";import"./Tooltip-CV3o7Hpq.js";import"./index-DsI7_zIK.js";import"./useControlled-CH2X2Kjk.js";import"./Popper-DlOgYa4m.js";import"./Button-B3gyn6j9.js";import"./uniqueId-94o3PPg5.js";import"./toString-H7lpIhf9.js";import"./isArray-ChU27Tqx.js";import"./isSymbol-BfAfjnV0.js";import"./times-CSUnDT6N.js";import"./_Uint8Array-2kJvgqyS.js";import"./identity-DKeuBCMA.js";import"./toInteger-D-4gdyLJ.js";import"./mockTableEntity-KqEMD4rr.js";import"./mockFileEntityACLVariants-CFx1rwIU.js";import"./fakerUtils-_kh3gN9a.js";import"./mockFileEntity-BzYHyHpb.js";import"./mock_file_handle-7frMWCuU.js";import"./mockEntity-BLjARbI_.js";import"./mockSchema-BxH1g1io.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BivmK9vh.js";import"./QueryClientProvider-CmwllrS-.js";import"./Link-BPw2xZaR.js";import"./Collapse-uBNTtc7v.js";import"./_baseUniq-CCe_IvzI.js";import"./_getTag-Dw9hviqI.js";import"./isEqual-DNLmBAqh.js";import"./merge-BalVbPlS.js";import"./_initCloneObject-Cw-AraIh.js";import"./tinycolor-Begke6kS.js";import"./Fade-B1PMJSO0.js";import"./inputBaseClasses-Csi6HknA.js";import"./calculateFriendlyFileSize-cjExqW_T.js";import"./CheckCircleTwoTone-CElUS0wl.js";import"./InfoTwoTone-C66I5sSc.js";import"./useMutation-tX66Xwvj.js";import"./dayjs.min-DB2WO_9H.js";import"./chunk-AYJ5UCUI-BaGfju-u.js";import"./cloneDeep-ab1FlSuT.js";import"./Skeleton-C8MjlDZQ.js";import"./HelpPopover-CFJPVGYC.js";import"./MarkdownPopover-DlafDgID.js";import"./LightTooltip-iYTpuLgM.js";import"./MarkdownSynapse-DIuNzvad.js";import"./SkeletonButton-DgxzUQPq.js";import"./SkeletonInlineBlock-3sXfglcG.js";import"./SkeletonTable-Bqv3KxsX.js";import"./SkeletonParagraph-A6NKsw3v.js";import"./HelpOutlineTwoTone-BdxkEN6b.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
