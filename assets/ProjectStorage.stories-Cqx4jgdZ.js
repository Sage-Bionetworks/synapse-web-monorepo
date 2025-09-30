import{g as i}from"./entityHandlers-DwB2wFDk.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DXugVBdN.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-BFfdZ_23.js";import{g as m}from"./userProfileHandlers-QFBpCiJI.js";import{P as L}from"./ProjectDataAvailability-D9zyV1wg.js";import"./index-DalYi54y.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BqB412mF.js";import"./mockTeam-DaWuOTUt.js";import"./SynapseConstants-C06Ch0Di.js";import"./OrientationBanner-DBXHK8nr.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Cr129Lwm.js";import"./index-BTixfpmo.js";import"./iframe-BR9Ja6hI.js";import"./spreadSx-CwcO6WA9.js";import"./react-zGOPWrfW.js";import"./FullWidthAlert-DUgF28iy.js";import"./Alert-Bzs890sv.js";import"./createTheme-Ct4hOUY0.js";import"./DefaultPropsProvider-C9lcJsco.js";import"./useSlot-DVAL2WEY.js";import"./useForkRef-ByyUlt6l.js";import"./createSimplePaletteValueFilter-BaklvuFn.js";import"./createSvgIcon-DkE23E6T.js";import"./Close-r5Eir0nI.js";import"./IconButton-DMbp8lhT.js";import"./useTimeout-BT71a5BG.js";import"./ButtonBase-CLhQYawW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CGHL4dKq.js";import"./Paper-CkXasqHE.js";import"./useTheme--DNYjqwV.js";import"./useTheme-C0qI9DFm.js";import"./Stack-3xN7A2um.js";import"./extendSxProp-DVTPON9k.js";import"./getThemeProps-M7RFjJi5.js";import"./Box-CApkhvtQ.js";import"./AlertTitle-CiWcZZaU.js";import"./Typography-CEi--Dpe.js";import"./index-C9fK3pkP.js";import"./ClickAwayListener-B29foLKR.js";import"./getReactElementRef-DrnFIYrE.js";import"./index-BXtdr2fX.js";import"./index-BUHx5KqL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqeXQhC3.js";import"./Tooltip-D-Bq3_L7.js";import"./index-BD7cvM_0.js";import"./useControlled-Cpbrkwwj.js";import"./Popper-CRYbaicA.js";import"./Button-CcoB3lWu.js";import"./uniqueId-C2IFdp_W.js";import"./toString-Xu7qx-rC.js";import"./isArray-BHu1IHx8.js";import"./isSymbol-iR7ee5nN.js";import"./times-sn4K5rrt.js";import"./_Uint8Array-D-glPVel.js";import"./identity-DKeuBCMA.js";import"./toInteger-CgR3WlyJ.js";import"./mockTableEntity-BLs-DWB8.js";import"./mockFileEntityACLVariants-lGIS_vcz.js";import"./fakerUtils-B62L2YGM.js";import"./mockFileEntity-LQGVl7TX.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-7ETQnIgv.js";import"./mockSchema-Dp73pChQ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CcZA1bE6.js";import"./QueryClientProvider-BCBx_4eV.js";import"./Link-a0CVLUjg.js";import"./Collapse-CtU4v-Lk.js";import"./_baseUniq-SSlWZVFw.js";import"./_getTag-B95UPAyz.js";import"./isEqual-BrkuIRuc.js";import"./merge-C4pBA74N.js";import"./_initCloneObject-B2AZAceM.js";import"./tinycolor-Begke6kS.js";import"./Fade-DOxyPF1-.js";import"./inputBaseClasses-CxLG9xAk.js";import"./calculateFriendlyFileSize-DuOTJlq3.js";import"./CheckCircleTwoTone-Cs68L0RV.js";import"./InfoTwoTone-DaXqbztf.js";import"./useMutation-DsMluRIG.js";import"./dayjs.min-DWGHZlck.js";import"./chunk-AYJ5UCUI-DVpYxvti.js";import"./cloneDeep-Igvd9DYO.js";import"./Skeleton-hVDOD6Fh.js";import"./HelpPopover-Dmqj3NXI.js";import"./MarkdownPopover-aQoh5lPy.js";import"./LightTooltip-twLn_bQi.js";import"./MarkdownSynapse-D1auKuid.js";import"./SkeletonButton-BneedwXN.js";import"./SkeletonInlineBlock-DcbHi6lF.js";import"./SkeletonTable-DSSXciDO.js";import"./SkeletonParagraph-FfSn5w_n.js";import"./HelpOutlineTwoTone-CTvfz2LX.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
