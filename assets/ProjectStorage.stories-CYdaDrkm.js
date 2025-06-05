import{g as s}from"./entityHandlers-D3bupF9p.js";import{y as C,g as L,b8 as d,B as k,M as r}from"./useFiles-DH0hZnW0.js";import"./VerificationSubmission-DHPhgAH7.js";import"./StringUtils-Bj0SG9ce.js";import{l as O}from"./index-csKsYlnZ.js";import{g as a}from"./userProfileHandlers-pnqVNHvH.js";import{P as N}from"./ProjectDataAvailability-kXJ-qWZ2.js";import"./index-BkzgUzfw.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CDmFtK9G.js";import"./mockTeam-BYZJd-Bp.js";import"./SynapseConstants-B43XihpB.js";import"./OrientationBanner-Bn70Goou.js";import"./jsx-runtime-BoocIWMh.js";import"./index-BYsW-UGM.js";import"./iframe-CvStSd8l.js";import"./index-CcVtSZI1.js";import"./spreadSx-CwcO6WA9.js";import"./react-ClgVEHpJ.js";import"./FullWidthAlert-DCsaqEW2.js";import"./Alert-UkVPZ6lx.js";import"./createTheme-CD9FYzWa.js";import"./resolveComponentProps-BFawuUKo.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CrKJLQLu.js";import"./createSvgIcon-CJNY7FN1.js";import"./DefaultPropsProvider-D7kCmuDE.js";import"./Close-B6CzrqbK.js";import"./IconButton-DWqxDXo3.js";import"./ButtonBase-CSQbkZfT.js";import"./useTimeout-3f2ojJp1.js";import"./TransitionGroupContext-BhvU_wXg.js";import"./useIsFocusVisible-DEWRbVzD.js";import"./useEventCallback-Ck__gsyr.js";import"./Paper-aoD8x6kl.js";import"./Stack-vXmPvWOy.js";import"./getThemeProps-V6bVpuH7.js";import"./useTheme-DObaY_2L.js";import"./Box-Crx_KkJs.js";import"./AlertTitle-DlWqoNQG.js";import"./Typography-B2rL68hj.js";import"./useTheme-B8HxMTzh.js";import"./Grow-BZWyJZLH.js";import"./index-1dw1k-mu.js";import"./utils-IzrHSjbr.js";import"./ClickAwayListener-J_XnNFqp.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-B9mLlwV6.js";import"./index-CUnMnMI3.js";import"./useControlled-DRov2nO8.js";import"./useId-e6r5XecO.js";import"./Popper-DRhu15Is.js";import"./Button-DIhDyw4D.js";import"./uniqueId-CAIHFYEr.js";import"./toString-Dw3XAiZg.js";import"./isObjectLike-DLnZxQK6.js";import"./isArray-Dxzbedgu.js";import"./isSymbol-B9qkrgeE.js";import"./times-B3tP24wu.js";import"./_baseTimes-36S_kd0L.js";import"./identity-DKeuBCMA.js";import"./toInteger-G7RJxeEd.js";import"./mockTableEntity-C8IE_z4z.js";import"./mockFileEntityACLVariants-0FSXfAeA.js";import"./fakerUtils-B4GY8MR2.js";import"./mockFileEntity-kXKChEGV.js";import"./mock_file_handle-C2NjfX48.js";import"./mockEntity-bgo7v3-C.js";import"./mockSchema-Cn2XYvNL.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./useQuery-8tRvAzYp.js";import"./utils-Bt3D-rUS.js";import"./Link-ju7JKeKA.js";import"./Collapse-CEHOIevo.js";import"./isNil-DCGkC4xE.js";import"./_Uint8Array-Baslgj2I.js";import"./_baseIsEqual-BADauply.js";import"./_getTag-Bvap34EV.js";import"./tinycolor-Begke6kS.js";import"./Fade-BPG5TcKR.js";import"./Skeleton-B-GAbu1S.js";import"./inputBaseClasses-CNrzxZep.js";import"./calculateFriendlyFileSize-Dx0b0pRy.js";import"./CheckCircleTwoTone-Def5yWF9.js";import"./InfoTwoTone-8mf67b7v.js";import"./useMutation-D-m5yZ5O.js";import"./isEqual-65PRO3at.js";import"./dayjs.min-BJZESKrl.js";import"./chunk-AYJ5UCUI-ByvWxCXR.js";import"./cloneDeep-DJYJ4ACu.js";import"./_initCloneObject-BMoAasIP.js";import"./merge-BiFf4Tsw.js";import"./util-BnsFuA_v.js";import"./HelpPopover-D5iWqZ9O.js";import"./MarkdownPopover-Dy8DSbWV.js";import"./LightTooltip-DZhxnvZS.js";import"./MarkdownSynapse-DFxQNJy_.js";import"./SkeletonButton-pGOEsAam.js";import"./SkeletonInlineBlock-CnpwSlNc.js";import"./SkeletonTable-BzAamuHw.js";import"./SkeletonParagraph-Bl58aql1.js";import"./HelpOutlineTwoTone-BLTIqxuM.js";const p="syn54321",n="syn12345",D={projectId:p,locations:[{storageLocationId:C,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},M={projectId:n,locations:[{storageLocationId:C,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},c=(l=L(k.REPO_ENDPOINT))=>[O.rest.get(`${l}${d(p)}`,async(S,m,t)=>m(t.status(201),t.json(D))),O.rest.get(`${l}${d(n)}`,async(S,m,t)=>m(t.status(201),t.json(M)))],St={title:"Synapse/ProjectStorage",component:N,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},o={args:{projectId:n,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},e={args:{projectId:p,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}},i={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...c(r)]}}};var g,I,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const Lt=["ProjectDataUnderLimit","ProjectDataOverLimit","ProjectDataStorageNotSet"];export{e as ProjectDataOverLimit,i as ProjectDataStorageNotSet,o as ProjectDataUnderLimit,Lt as __namedExportsOrder,St as default};
