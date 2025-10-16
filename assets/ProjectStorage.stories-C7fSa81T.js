import{g as i}from"./entityHandlers-BN5AkWNS.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-CpIQf7bR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DzpJkOoW.js";import{g as m}from"./userProfileHandlers-D8O8t596.js";import{P as L}from"./ProjectDataAvailability-1oaeVkVR.js";import"./index-C4KfaBZD.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-XnPPmpYD.js";import"./mockTeam-Dbo3LQRm.js";import"./SynapseConstants-DCuj7v5A.js";import"./OrientationBanner-BhIo1itP.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D6sMuhjc.js";import"./index-BTX2eULV.js";import"./iframe-CVMtvJ31.js";import"./spreadSx-CwcO6WA9.js";import"./react-jWqjiESD.js";import"./FullWidthAlert-DBESnlHJ.js";import"./Alert-B_Lb3ke9.js";import"./createTheme-Bg0JnvG-.js";import"./DefaultPropsProvider-DkJRQOmc.js";import"./useSlot-DJ96S8JZ.js";import"./useForkRef-Bz6GVi3q.js";import"./createSimplePaletteValueFilter-B_zFUBoe.js";import"./createSvgIcon-kaLa9Vb4.js";import"./Close-CNSmPYq1.js";import"./IconButton-mOjBei70.js";import"./useTimeout-DyBAzNlF.js";import"./ButtonBase-DKKQqZi5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BZ-3rWL4.js";import"./Paper-BpMud_ox.js";import"./useTheme-D4cJ8PRi.js";import"./useTheme-C7YDFSZ_.js";import"./Stack-B07vM9bz.js";import"./useThemeProps-seSFSWsk.js";import"./getThemeProps-DkOrQpuL.js";import"./extendSxProp-DU89cOAM.js";import"./Box-ZnuoGFaU.js";import"./AlertTitle-CgDFnc1E.js";import"./Typography-DuRdq6Lg.js";import"./index-BIflH0jO.js";import"./ClickAwayListener-DegMn6iM.js";import"./getReactElementRef-CVLdZIi_.js";import"./index-DUzyVIzd.js";import"./index-B3i8jk0i.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqVF91XP.js";import"./Tooltip-B4Kq9yHi.js";import"./index-iQpWDSyN.js";import"./useControlled-Sbp9FKKD.js";import"./Popper-CX1lmSaJ.js";import"./Button-B7-P1hWd.js";import"./uniqueId-BgWg1yl2.js";import"./toString-1oDI86Nf.js";import"./isArray-CKHxsLMS.js";import"./isSymbol-D6LPlgVh.js";import"./times-CiqniwQk.js";import"./_Uint8Array-Bs5hmJ22.js";import"./identity-DKeuBCMA.js";import"./toInteger-CtW9ySE_.js";import"./mockTableEntity-DJVmOyfr.js";import"./mockFileEntityACLVariants-BCUb8EHi.js";import"./fakerUtils-BjJm3mb3.js";import"./mockFileEntity-CQarKuXp.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DX2cV7lF.js";import"./mockSchema-D7ojKxdG.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-BS_xL6BT.js";import"./QueryClientProvider-CNvDTIKR.js";import"./Link-BKm2vjdi.js";import"./Collapse-ByANM13v.js";import"./_baseUniq-CqcjZw0e.js";import"./_getTag-kUTcptDD.js";import"./isEqual-BQVT-dYG.js";import"./noop-DX6rZLP_.js";import"./merge-BnOw64jq.js";import"./_initCloneObject-CdUFhJ45.js";import"./tinycolor-Begke6kS.js";import"./Fade-rzidtFwW.js";import"./inputBaseClasses-DNGH4K0e.js";import"./calculateFriendlyFileSize-AZUrqDHi.js";import"./CheckCircleTwoTone-BOy-Ivpu.js";import"./InfoTwoTone-DZGvo72n.js";import"./useMutation-CqYbiywW.js";import"./dayjs.min-CzGsWT9o.js";import"./chunk-AYJ5UCUI-BJiwWrYx.js";import"./cloneDeep-ztC9flu2.js";import"./Skeleton-Clpsi09M.js";import"./HelpPopover-BDQaFA3O.js";import"./MarkdownPopover-XkX4TMkY.js";import"./LightTooltip-Y849-S-k.js";import"./MarkdownSynapse-BP9Wm1nl.js";import"./SkeletonButton-BNDIMfsc.js";import"./SkeletonInlineBlock-BpdH0ExQ.js";import"./SkeletonTable-BlI6RnJM.js";import"./SkeletonParagraph-BcW2Gtm3.js";import"./HelpOutlineTwoTone--M4SP2LF.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
