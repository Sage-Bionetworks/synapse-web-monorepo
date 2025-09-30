import{g as i}from"./entityHandlers-DMq7n3tT.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DgHx6Fcc.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-DFyMaur5.js";import{g as m}from"./userProfileHandlers-BcGZWtC_.js";import{P as L}from"./ProjectDataAvailability-D00KCAv2.js";import"./index-Qznrckzd.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-ESMYNg1w.js";import"./mockTeam-wXqiUvvc.js";import"./SynapseConstants-DGyiOG2g.js";import"./OrientationBanner-Dg3sFsFB.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BFkvzL3d.js";import"./index-BdUAYS9h.js";import"./iframe-CpJoLHmY.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1smhX9V.js";import"./FullWidthAlert-NrRGzUzR.js";import"./Alert-BZkkNxmN.js";import"./createTheme-CyTLEU3i.js";import"./DefaultPropsProvider-CrrxgVPq.js";import"./useSlot-BFkGEdWp.js";import"./useForkRef-BYJIK3bI.js";import"./createSimplePaletteValueFilter-C6dToHOG.js";import"./createSvgIcon-CQtqRFBT.js";import"./Close-BveyDO89.js";import"./IconButton-CV35gqz1.js";import"./useTimeout-Cde0jI0k.js";import"./ButtonBase-DQ_Dc5W1.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-PI0728JC.js";import"./Paper-uMerSr0J.js";import"./useTheme-IErwV-Ug.js";import"./useTheme-ClrSPtrJ.js";import"./Stack-zXk8gjNn.js";import"./extendSxProp-CPzueTmv.js";import"./getThemeProps-DtfOwbG6.js";import"./Box-Dyy71dSi.js";import"./AlertTitle-C2NB19_E.js";import"./Typography-DtWAgXAy.js";import"./index-CqQRnKb9.js";import"./ClickAwayListener-l3nc9S5t.js";import"./getReactElementRef-DLKh61Wu.js";import"./index-C6AkVaeY.js";import"./index-DPcBfgK1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CuumPSVk.js";import"./Tooltip-BRwDLAyh.js";import"./index-CWp-JoAj.js";import"./useControlled-oba0F23J.js";import"./Popper-B4kjXWcz.js";import"./Button-DC_qvPIS.js";import"./uniqueId-De3n_EJw.js";import"./toString-DnWpOsn1.js";import"./isArray-DbAuuatd.js";import"./isSymbol-BlJuLY72.js";import"./times-uLWaNwR8.js";import"./_Uint8Array-DKtfINLr.js";import"./identity-DKeuBCMA.js";import"./toInteger-2aQRskTw.js";import"./mockTableEntity-DUqi783m.js";import"./mockFileEntityACLVariants-BE1qPgtq.js";import"./fakerUtils-B6Aoa70W.js";import"./mockFileEntity-ipyjI26T.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Q8HxyOxO.js";import"./mockSchema-pQClhpoY.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-8wNQI5yr.js";import"./QueryClientProvider-COZl3LvE.js";import"./Link-HYpi97nk.js";import"./Collapse-CHQWLyDp.js";import"./_baseUniq-CFJWH6fy.js";import"./_getTag-D3pOfrS4.js";import"./isEqual-Bob0DS1n.js";import"./merge-Xtgp757m.js";import"./_initCloneObject-D_ChcyVf.js";import"./tinycolor-Begke6kS.js";import"./Fade-BbISf70S.js";import"./inputBaseClasses-D_EUhFSv.js";import"./calculateFriendlyFileSize-DN2lkErt.js";import"./CheckCircleTwoTone-CZFnuvZG.js";import"./InfoTwoTone-A_M6B1fv.js";import"./useMutation-eF8r02NM.js";import"./dayjs.min-CdID1Wrq.js";import"./chunk-AYJ5UCUI-D8grMOqq.js";import"./cloneDeep-C6yg3ATo.js";import"./Skeleton-CVb7LHcV.js";import"./HelpPopover-DBM-3GJA.js";import"./MarkdownPopover-BeEFuuwg.js";import"./LightTooltip-pw9wg_qp.js";import"./MarkdownSynapse-PMFIzsVk.js";import"./SkeletonButton-DrC6zcAp.js";import"./SkeletonInlineBlock-ghUbppzv.js";import"./SkeletonTable-CycJSkzc.js";import"./SkeletonParagraph-DgxOEBAl.js";import"./HelpOutlineTwoTone-CaZh3IUe.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
