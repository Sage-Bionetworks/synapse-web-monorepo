import{g as i}from"./entityHandlers-Br472Hyk.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-DqOED7Vm.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-B3E298OA.js";import{g as m}from"./userProfileHandlers-EVTSSrH-.js";import{P as L}from"./ProjectDataAvailability-1F_lsYyt.js";import"./index-HB_KUcSu.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-6Lhp-M75.js";import"./mockTeam-Deu_owND.js";import"./SynapseConstants-BthOpQLB.js";import"./OrientationBanner-xWDnb_8x.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CiGjdKGK.js";import"./index-0FUO4iVK.js";import"./iframe-DM38aeMQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-C2d4DyXu.js";import"./FullWidthAlert-Cx03XuvY.js";import"./Alert-udWcAUQY.js";import"./createTheme-BHAg5tEe.js";import"./DefaultPropsProvider-DR7_-YAs.js";import"./useSlot-DZfTNSFS.js";import"./useForkRef-DxePPmVc.js";import"./createSimplePaletteValueFilter-DERnL5M9.js";import"./createSvgIcon-CfvJ11Oa.js";import"./Close-Cg62tY8L.js";import"./IconButton-_bwpt4ca.js";import"./useTimeout-ByWjq-eU.js";import"./ButtonBase-CcjRDjmt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ByfLseIu.js";import"./Paper-lAHe8OpX.js";import"./useTheme-NzQR0i01.js";import"./useTheme-Bnf3h8G0.js";import"./Stack-CsZGKSJy.js";import"./extendSxProp-DoeCfCx7.js";import"./getThemeProps-CmMpLADq.js";import"./Box-DPFXD5kJ.js";import"./AlertTitle-BBIZ10VR.js";import"./Typography-B8zdMFE9.js";import"./index-Ozhlb9U6.js";import"./ClickAwayListener-BXtl8q7p.js";import"./getReactElementRef-DH0foITJ.js";import"./index-qN2NPw-a.js";import"./index-CGaPGV5L.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CYZ1JjRs.js";import"./Tooltip-CJb_CvWe.js";import"./index-BNBf6lAj.js";import"./useControlled-B6dAQYhR.js";import"./Popper-DOrV1LRN.js";import"./Button-DwRl1m3f.js";import"./uniqueId-DEpDD581.js";import"./toString-DlFGItZY.js";import"./isArray-DV5BwaHp.js";import"./isSymbol-Ct9O8yqX.js";import"./times-B9fnaU8O.js";import"./_Uint8Array-DEUqcpre.js";import"./identity-DKeuBCMA.js";import"./toInteger-BvPielbY.js";import"./mockTableEntity-b_3tllEs.js";import"./mockFileEntityACLVariants-RPmFutGC.js";import"./fakerUtils-V0z3qodb.js";import"./mockFileEntity-B1py2hF3.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-Bgx5Ly05.js";import"./mockSchema-D2ziRs9N.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-DEzStqmt.js";import"./QueryClientProvider-BV8zLBvL.js";import"./Link-NI2pPKYc.js";import"./Collapse-BbakI7R6.js";import"./_baseUniq-CwnmLVm2.js";import"./_getTag-BlOI61fG.js";import"./isEqual-CoMwnfdJ.js";import"./merge-_TaKl8B5.js";import"./_initCloneObject-C2F5HBS3.js";import"./tinycolor-Begke6kS.js";import"./Fade-C9uEJt8L.js";import"./inputBaseClasses-B4Lv6z-u.js";import"./calculateFriendlyFileSize-t9JGByLX.js";import"./CheckCircleTwoTone-DD06cB11.js";import"./InfoTwoTone-Dew1zR_M.js";import"./useMutation-B_FbfBom.js";import"./dayjs.min-REswNT-I.js";import"./chunk-AYJ5UCUI-QqhSiyQh.js";import"./cloneDeep-Ba2vXAv3.js";import"./Skeleton-D1xnNsuB.js";import"./HelpPopover-DubAcUzL.js";import"./MarkdownPopover-ChP0R-Ig.js";import"./LightTooltip-Dyt9f4yz.js";import"./MarkdownSynapse-JFYiILkj.js";import"./SkeletonButton-DhWzkjOA.js";import"./SkeletonInlineBlock-0nc8C8w4.js";import"./SkeletonTable-CYoBgceZ.js";import"./SkeletonParagraph-BQ-FZqNR.js";import"./HelpOutlineTwoTone-BfBktqiU.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
