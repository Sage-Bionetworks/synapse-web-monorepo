import{g as i}from"./entityHandlers-DcPzTO45.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-C5IkgHKR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-DFwYiTBW.js";import{g as m}from"./userProfileHandlers-CG0bQW2n.js";import{P as L}from"./ProjectDataAvailability-Be3MW-jY.js";import"./index-BtFALSpp.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-t30aP5dM.js";import"./mockTeam-pwVdryF8.js";import"./SynapseConstants-BZ1xM3T_.js";import"./OrientationBanner-CaftPmJ0.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Dc7oXtx5.js";import"./index-BvwUSpoE.js";import"./iframe-CSh-yyb9.js";import"./spreadSx-CwcO6WA9.js";import"./react-CnOFtkUB.js";import"./FullWidthAlert-rH7PBXfB.js";import"./Alert-BNsJ0XmI.js";import"./createTheme-CLEJyU4o.js";import"./DefaultPropsProvider-CQ9vr5Fg.js";import"./useSlot-CPjqoygj.js";import"./useForkRef-C4hZLQ5F.js";import"./createSimplePaletteValueFilter-BgsLGErn.js";import"./createSvgIcon-cTCJaS7a.js";import"./Close-B26ASiW2.js";import"./IconButton-C1az1_o5.js";import"./useTimeout-D2Typ0WN.js";import"./ButtonBase-CAx0EV6B.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-13Ka8rlw.js";import"./Paper-CgmbLxaC.js";import"./useTheme-DPLPxQnc.js";import"./useTheme-z89Ynh4-.js";import"./Stack-x99x_t8V.js";import"./useThemeProps-DJ1xyvk8.js";import"./getThemeProps-HpT_6znR.js";import"./extendSxProp-BJJBLbQS.js";import"./Box-Dehh3oxZ.js";import"./AlertTitle-IP3qXvli.js";import"./Typography-BE4rHoNc.js";import"./index-IXTkT_FC.js";import"./ClickAwayListener-H_84-Aw-.js";import"./getReactElementRef-F8_OyX7G.js";import"./index-DMH_OaqC.js";import"./index-Cd_E_qr9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D4OCuCHp.js";import"./Tooltip-DyZrSW_o.js";import"./index-B01-020F.js";import"./useControlled-BgGRQ0g4.js";import"./Popper-BVenD2n_.js";import"./Button-BPLc_V13.js";import"./uniqueId-D3m-L9WO.js";import"./toString-BwgvZH57.js";import"./isArray-D8ZdJY-6.js";import"./isSymbol-KbPNZ9sy.js";import"./times-ITYPdN0b.js";import"./_Uint8Array-CADqMcwt.js";import"./identity-DKeuBCMA.js";import"./toInteger-BAtd_Kq7.js";import"./mockTableEntity-BYcRaHEv.js";import"./mockFileEntityACLVariants-C0WXZDFY.js";import"./fakerUtils-CJSQFERm.js";import"./mockFileEntity-CkJQBKo_.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-DuLDckLW.js";import"./mockSchema-pGMAwpmQ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-CLTeTbBo.js";import"./QueryClientProvider--YwERgDS.js";import"./Link-DlDLrxWt.js";import"./Collapse-CD-W84BO.js";import"./_baseUniq-DbXnkPVl.js";import"./_getTag-CirUuiqi.js";import"./isEqual-DlYHZiLm.js";import"./noop-DX6rZLP_.js";import"./merge-D-Dam4qi.js";import"./_initCloneObject-CJz6qKry.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cw-PXPOF.js";import"./inputBaseClasses-DPwHkifs.js";import"./calculateFriendlyFileSize-BfZPBZKW.js";import"./CheckCircleTwoTone-C44u5emq.js";import"./InfoTwoTone-mT_LStKZ.js";import"./useMutation-BQl0KsC5.js";import"./dayjs.min-DxypZ_oT.js";import"./chunk-AYJ5UCUI-3iV-Oige.js";import"./cloneDeep-GqePjE_a.js";import"./Skeleton-CKT5zskH.js";import"./HelpPopover-DOPQO5j1.js";import"./MarkdownPopover-Dv0O8RJf.js";import"./LightTooltip-Cq4KYnlk.js";import"./MarkdownSynapse-_B7zxlyi.js";import"./SkeletonButton-D5PtZFHX.js";import"./SkeletonInlineBlock-DqJUOdnP.js";import"./SkeletonTable-Bq5Dz7Xr.js";import"./SkeletonParagraph-Bou7kSp7.js";import"./HelpOutlineTwoTone-CcafOAht.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
