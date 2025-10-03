import{g as i}from"./entityHandlers-DHVbQm3j.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Ah-QMMVe.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CrP_BStR.js";import{g as m}from"./userProfileHandlers-BbfFYTA2.js";import{P as L}from"./ProjectDataAvailability-Blopm9av.js";import"./index-C10Z8_9R.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-Caq71aC-.js";import"./mockTeam-CopIhJ8Q.js";import"./SynapseConstants-XsXCMBgO.js";import"./OrientationBanner-DfVgOy4M.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BWJnohk0.js";import"./index-Rd2swjmm.js";import"./iframe-CXAxgruz.js";import"./spreadSx-CwcO6WA9.js";import"./react-BApqYDyB.js";import"./FullWidthAlert-BmqfxTfb.js";import"./Alert-CCZCxDnF.js";import"./createTheme-TuqmvCHd.js";import"./DefaultPropsProvider-BXgXJOYE.js";import"./useSlot-Dkzr42VA.js";import"./useForkRef-C6Hxgw1c.js";import"./createSimplePaletteValueFilter-I39MDwlM.js";import"./createSvgIcon-C9iQk-bv.js";import"./Close-DCDeVnbe.js";import"./IconButton-CyqRcr44.js";import"./useTimeout-B1Gaupyv.js";import"./ButtonBase-SlYjLBEH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DePpf9Xr.js";import"./Paper-BfdEPQLJ.js";import"./useTheme-COUAZuoX.js";import"./useTheme-D5J_Lubc.js";import"./Stack-BgMCCB8s.js";import"./useThemeProps-CsD4iJ62.js";import"./getThemeProps-C7aU0N0h.js";import"./extendSxProp-BEqNfaz4.js";import"./Box-C1rpSzmp.js";import"./AlertTitle-DigLp6pg.js";import"./Typography-BMdAKFRJ.js";import"./index-CNp3TF0s.js";import"./ClickAwayListener-BukZ-mWk.js";import"./getReactElementRef-C70_vEbO.js";import"./index-BnG4WIQw.js";import"./index-BdU_PVcS.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-frQ6Hdr3.js";import"./Tooltip-Bodc1hDc.js";import"./index-eFiUvJZl.js";import"./useControlled-DV9JfbO_.js";import"./Popper-B_NbVk8A.js";import"./Button-BbbnNSgV.js";import"./uniqueId-CQkmX5En.js";import"./toString-BBUCQoOW.js";import"./isArray-BKjPFGFw.js";import"./isSymbol-Bqq76GQu.js";import"./times-Dv-CFPqs.js";import"./_Uint8Array-DiPMYHJc.js";import"./identity-DKeuBCMA.js";import"./toInteger-S3CGaVI5.js";import"./mockTableEntity-CHexPHu9.js";import"./mockFileEntityACLVariants-BFEwmUpO.js";import"./fakerUtils-BxjvhNTw.js";import"./mockFileEntity-D3grX0rV.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BeF8xkXy.js";import"./mockSchema-B35tarL0.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-xEUhumnM.js";import"./QueryClientProvider-CKp6Cdu0.js";import"./Link-DJSxCMVl.js";import"./Collapse-Djxal_Co.js";import"./_baseUniq-DPC7unBD.js";import"./_getTag-B97qJZKn.js";import"./isEqual-CTDb6a_A.js";import"./noop-DX6rZLP_.js";import"./merge-Bi0YVhuS.js";import"./_initCloneObject-Du3oUuAw.js";import"./tinycolor-Begke6kS.js";import"./Fade-Dr4GrnsL.js";import"./inputBaseClasses-BUA8z3Qv.js";import"./calculateFriendlyFileSize-DFvfx4N-.js";import"./CheckCircleTwoTone-C7oNrQEJ.js";import"./InfoTwoTone-BlOTsixa.js";import"./useMutation-CCZv9b7z.js";import"./dayjs.min-HpAO55uO.js";import"./chunk-AYJ5UCUI-CQrmzzWS.js";import"./cloneDeep--SZltrec.js";import"./Skeleton-BgzeM125.js";import"./HelpPopover-CnwkVhEk.js";import"./MarkdownPopover-Dde9fKco.js";import"./LightTooltip-DYcJYOC8.js";import"./MarkdownSynapse-C-stTAs1.js";import"./SkeletonButton-BHdzXUDX.js";import"./SkeletonInlineBlock-DmDy72wJ.js";import"./SkeletonTable-BcSafx_S.js";import"./SkeletonParagraph-QM-ftTqD.js";import"./HelpOutlineTwoTone-DN5z1yyd.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(u=e.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const yr=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{o as ProjectDataOverLimit,e as ProjectDataStorageNotSet,r as ProjectDataUnderLimit,yr as __namedExportsOrder,jr as default};
