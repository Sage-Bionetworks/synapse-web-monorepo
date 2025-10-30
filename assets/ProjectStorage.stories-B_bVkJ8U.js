import{g as i}from"./entityHandlers-5lXyp_R_.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-BAtCl2zW.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DLsV80Rd.js";import{g as m}from"./userProfileHandlers-D3H-ezrq.js";import{P as L}from"./ProjectDataAvailability-BuT_WkB2.js";import"./index-aJwDHizO.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DpQQZMjN.js";import"./mockTeam-WnLgVhbx.js";import"./SynapseConstants-XI6dYRWk.js";import"./OrientationBanner-B7q8lOlz.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CRCyvnZ0.js";import"./index-BNUkr42D.js";import"./iframe-Ba3BTMJQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-Be8tiLW3.js";import"./FullWidthAlert-BzIUXwFm.js";import"./Alert-D3sOM9Xh.js";import"./createTheme-NhmqE9dQ.js";import"./DefaultPropsProvider-BIfpEvA2.js";import"./useSlot-BwQ6-TBw.js";import"./useForkRef-pDyZK79X.js";import"./createSimplePaletteValueFilter-nQ38Im-Z.js";import"./createSvgIcon-CFqKoRuC.js";import"./Close-DYrdwFiE.js";import"./IconButton-O8RH6c-u.js";import"./useTimeout-BrN7Q3E4.js";import"./ButtonBase-LA74b3wr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DPMtitov.js";import"./Paper-SGfBtoXB.js";import"./useTheme-C9UhfCaZ.js";import"./useTheme-BiiIEuaW.js";import"./Stack-CCWpXknc.js";import"./useThemeProps-CJIv2GwV.js";import"./getThemeProps-BReT4yLP.js";import"./extendSxProp-BpCHN6MP.js";import"./Box-DkpXgkjV.js";import"./AlertTitle-DRUFccnV.js";import"./Typography-BKcjb63t.js";import"./index-Bdrj1x6q.js";import"./ClickAwayListener-BLlYXqUz.js";import"./getReactElementRef-CkK36AdJ.js";import"./index-ClZPHG2a.js";import"./index-CI1meWOo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C_KrjD6B.js";import"./Tooltip-BmMZYRk4.js";import"./index-DxH38UvO.js";import"./useControlled-1x59BUu5.js";import"./Popper-Dm6K9cls.js";import"./Button-SB8XScyN.js";import"./uniqueId-Dx2PAJQ8.js";import"./toString-CZOSv4OH.js";import"./isArray-0Sc2E1VG.js";import"./isSymbol-D-0WRXwa.js";import"./times-Cz7G22nA.js";import"./_Uint8Array-BISLfDEB.js";import"./identity-DKeuBCMA.js";import"./toInteger-SXBPu43b.js";import"./mockTableEntity-B5Fyy6h0.js";import"./mockFileEntityACLVariants-OjGL_gd6.js";import"./fakerUtils-CNwqiyPY.js";import"./mockFileEntity-DOJf13yB.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-CfkHcOtM.js";import"./mockSchema-3QYMIJa4.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-U8UshR-7.js";import"./QueryClientProvider-B5zoqy2B.js";import"./Link-BqlhdZwN.js";import"./Collapse-DYtNuVOV.js";import"./_baseUniq-9RbHjxe5.js";import"./_getTag-CAM6QWbM.js";import"./isEqual-D_xj1UAB.js";import"./noop-DX6rZLP_.js";import"./merge-CWvb3TbJ.js";import"./_initCloneObject-D6-ehKcT.js";import"./tinycolor-Begke6kS.js";import"./Fade-CkpH8R1u.js";import"./inputBaseClasses-B9NzViCC.js";import"./calculateFriendlyFileSize-BpYlpajp.js";import"./CheckCircleTwoTone-B-9ZAYCH.js";import"./InfoTwoTone-Cc5V3tEz.js";import"./useMutation-B97dIDX4.js";import"./dayjs.min-C4odYbRz.js";import"./chunk-AYJ5UCUI-CV2ognkv.js";import"./cloneDeep-C1b6fvoG.js";import"./Skeleton-Btsuz_Uy.js";import"./HelpPopover-BPMTa9y2.js";import"./MarkdownPopover-b4Hmi8My.js";import"./LightTooltip-S6UsZIR6.js";import"./MarkdownSynapse-CsWmzYxF.js";import"./SkeletonButton-CSP6Z-v9.js";import"./SkeletonInlineBlock-DdGufwJt.js";import"./SkeletonTable-iO2N5zjo.js";import"./SkeletonParagraph-get2FHze.js";import"./HelpOutlineTwoTone-BGOaBDba.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
