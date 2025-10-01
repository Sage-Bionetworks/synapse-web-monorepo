import{g as i}from"./entityHandlers-Dj9h7ML4.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-vT9bfLDO.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-NPb0VexC.js";import{h as d,H as l}from"./index-WSXI5VxW.js";import{g as m}from"./userProfileHandlers-D1YnlyjD.js";import{P as L}from"./ProjectDataAvailability-2ANOjsDb.js";import"./index-DABhLg3f.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BaLkrmhr.js";import"./mockTeam-DpHTDGy0.js";import"./SynapseConstants-CrB-MIRZ.js";import"./OrientationBanner-BEKZjCeJ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DAVNkdVu.js";import"./index-B1zwXUFJ.js";import"./iframe-CEUpxgkq.js";import"./spreadSx-CwcO6WA9.js";import"./react-BzGc_DwC.js";import"./FullWidthAlert-B_vJzv8_.js";import"./Alert-TYEgmMtw.js";import"./createTheme-_pxiMefb.js";import"./DefaultPropsProvider-GsNV9x9z.js";import"./useSlot-D6M9SnNa.js";import"./useForkRef-5vAL7abv.js";import"./createSimplePaletteValueFilter-BWy-N_2A.js";import"./createSvgIcon-CM2amrIa.js";import"./Close-Cz9zQibY.js";import"./IconButton-BuZDhROp.js";import"./useTimeout-B5WP2A00.js";import"./ButtonBase-CrQcMVod.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-eY2NprPN.js";import"./Paper-CMiT_g2s.js";import"./useTheme-CpqbQ1th.js";import"./useTheme-BUiWg39J.js";import"./Stack-Dlv6zyOD.js";import"./extendSxProp-DOiWkfYu.js";import"./getThemeProps-Dr1zNmMJ.js";import"./Box-3Z_tla_z.js";import"./AlertTitle-ByY04oK7.js";import"./Typography-Bb10PgLN.js";import"./index-DCPzSk5o.js";import"./ClickAwayListener-BMakqtGy.js";import"./getReactElementRef-nx52Mdp2.js";import"./index-CehnuqZ2.js";import"./index-B9UKDQHV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DJhgm6K5.js";import"./Tooltip-SOMH60mq.js";import"./index-CXr-s7_R.js";import"./useControlled-CvHOTKrv.js";import"./Popper-DkenFVym.js";import"./Button-DQBYwH6j.js";import"./uniqueId-CYYpcJhP.js";import"./toString-gNEq0xSK.js";import"./isArray-DymSBOrs.js";import"./isSymbol-DLCWpi_u.js";import"./times-Bk6OUzNa.js";import"./_Uint8Array-B0g9CQUn.js";import"./identity-DKeuBCMA.js";import"./toInteger-m790T6g-.js";import"./mockTableEntity-DicLeki8.js";import"./mockFileEntityACLVariants-DxshK5FX.js";import"./fakerUtils-T8Z8PYQx.js";import"./mockFileEntity-DPsXhG-9.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CMb7-bCq.js";import"./mockSchema-COk-hpJV.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-Bq88K6KM.js";import"./QueryClientProvider-ucPfQinJ.js";import"./Link-CZHL3iKG.js";import"./Collapse-B2XhG2Kr.js";import"./_baseUniq-C8WjQg40.js";import"./_getTag-LXy-jlCp.js";import"./isEqual-C-YJy9nm.js";import"./merge-DyftSLCV.js";import"./_initCloneObject-uieqxzyK.js";import"./tinycolor-Begke6kS.js";import"./Fade-CDBEomBI.js";import"./inputBaseClasses-C3wEMl-z.js";import"./calculateFriendlyFileSize-DXUcCMMN.js";import"./CheckCircleTwoTone-BY2yex5b.js";import"./InfoTwoTone-DXgMPfdA.js";import"./useMutation-Dhe--Otn.js";import"./dayjs.min-DJDiWDDU.js";import"./chunk-AYJ5UCUI-CsiReavt.js";import"./cloneDeep-DOwnwYVf.js";import"./Skeleton-TxGxqHUi.js";import"./HelpPopover-C92Jgz7x.js";import"./MarkdownPopover-Cp6xpCfc.js";import"./LightTooltip-eB-hegEm.js";import"./MarkdownSynapse-DKhiYUtR.js";import"./SkeletonButton-DzVE-4bS.js";import"./SkeletonInlineBlock-BJviWV6f.js";import"./SkeletonTable-BpzY9tL6.js";import"./SkeletonParagraph-CGGUOqCJ.js";import"./HelpOutlineTwoTone-CmVmiShJ.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
