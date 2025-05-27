import{g as s}from"./entityHandlers-C2p6NYPV.js";import{x as C,g as L,b6 as d,B as k,M as r}from"./useFiles-Ct8yHZV5.js";import"./VerificationSubmission-DsgC4t7y.js";import"./StringUtils-tNCAfVhp.js";import{l as O}from"./index-DKUUlkag.js";import{g as a}from"./userProfileHandlers-CWjS88hX.js";import{P as N}from"./ProjectDataAvailability-coCiDU3z.js";import"./index-BRU84yEH.js";import"./mock_user_profile-CijvmO8r.js";import"./mockProject-uY0poS_U.js";import"./mockTeam-BnOUaZZC.js";import"./SynapseConstants-udfJhW5T.js";import"./OrientationBanner-DJri4Kzp.js";import"./jsx-runtime-Ba9fMlvA.js";import"./index-Dt8RCK4S.js";import"./iframe-JOL0DIag.js";import"./index-BEgggBqy.js";import"./spreadSx-CwcO6WA9.js";import"./react-D_Md03mS.js";import"./FullWidthAlert-Db4YYATT.js";import"./Alert-C19m3Cgy.js";import"./createTheme-DJv4KxAa.js";import"./resolveComponentProps-BzkYWVeC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DpIKFJcv.js";import"./createSvgIcon-BXRachk3.js";import"./DefaultPropsProvider-CC3RmJFF.js";import"./Close-DK3CWPJx.js";import"./IconButton-QPgr3jad.js";import"./ButtonBase-BzBJSv7k.js";import"./useTimeout-Cb7XUfzj.js";import"./TransitionGroupContext-DCPGH_5I.js";import"./useIsFocusVisible-DJ0VMGRG.js";import"./useEventCallback-nA6SeeXV.js";import"./Paper-C8bYjZ05.js";import"./Stack-DYgZuVBh.js";import"./getThemeProps-FNrSmzJU.js";import"./useTheme-RaTCH1LG.js";import"./Box-C2U2Cla2.js";import"./AlertTitle-DnEBj5ck.js";import"./Typography-DW07qzJw.js";import"./useTheme-Dx1-xZeI.js";import"./Grow-BjBn3HwU.js";import"./index-zJECZUC7.js";import"./utils-DOUzCTI2.js";import"./ClickAwayListener-C_4AhYce.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-D90On-M6.js";import"./index-BAcXyNSJ.js";import"./useControlled-ZTZ0Etwt.js";import"./useId-D7asr5CX.js";import"./Popper-Dig447md.js";import"./Button-DQx1S7a-.js";import"./uniqueId-Dh8Eo-F7.js";import"./toString-nwJ1m07f.js";import"./isObjectLike-DNalVVPe.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-D-tqd1gC.js";import"./times-CKMRw9f7.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger--fdXjpa-.js";import"./mockTableEntity-B13RmRee.js";import"./mockFileEntityACLVariants-BWS_c6Lw.js";import"./fakerUtils-Da0PH_zc.js";import"./mockFileEntity-DYno0U1r.js";import"./mock_file_handle-DS_yjaGE.js";import"./mockEntity--AfzzAgP.js";import"./mockSchema-C1UqCNlZ.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-CwaWMnsJ.js";import"./utils-DM63yWLX.js";import"./Link-uk-18KNT.js";import"./Collapse-jddULD66.js";import"./isNil-DfPOP6hp.js";import"./_Uint8Array-BkBwBmmf.js";import"./_baseIsEqual-D7Le_Dhe.js";import"./_getTag-Dz-F_7de.js";import"./tinycolor-Begke6kS.js";import"./Fade-CILW4bK-.js";import"./Skeleton-DT9L0_5S.js";import"./inputBaseClasses-DtdDEN5W.js";import"./calculateFriendlyFileSize-DkjKyaJA.js";import"./CheckCircleTwoTone-C5t_bAXs.js";import"./InfoTwoTone-B0Nnp4Au.js";import"./mutation-CUQob5G8.js";import"./dayjs.min-tmZNEDTt.js";import"./chunk-AYJ5UCUI-D-lxXuxw.js";import"./cloneDeep-CKKH_joM.js";import"./_initCloneObject-B09Yb8G1.js";import"./isEqual-BRN3P_WC.js";import"./merge-CO9M1S60.js";import"./util-B5s4jM1D.js";import"./HelpPopover-DXQrLbng.js";import"./MarkdownPopover-DrdM6Zx8.js";import"./LightTooltip-Cl8FJVq9.js";import"./MarkdownSynapse-Dx3KK2L6.js";import"./useMutation-C_Cy9bj7.js";import"./SkeletonButton-C9j-UIVc.js";import"./SkeletonInlineBlock-BCH-gab1.js";import"./SkeletonTable-ucykrqSH.js";import"./SkeletonParagraph-B4TCPpu7.js";import"./HelpOutlineTwoTone-0s6MD2QR.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],Lt={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(_=(I=o.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,R;e.parameters={...e.parameters,docs:{...(P=e.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    projectId: 'syn31415123'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getProjectStorageHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const kt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,kt as __namedExportsOrder,Lt as default};
