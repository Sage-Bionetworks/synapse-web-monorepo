import{g as i}from"./entityHandlers-CD57mQyv.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-iVsE9X0U.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-Dar_Knfz.js";import{g as m}from"./userProfileHandlers-Dj1s_RMZ.js";import{P as L}from"./ProjectDataAvailability-RKqMEwKB.js";import"./index-ljZQ-iRQ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CCPnH3Iy.js";import"./mockTeam-BkTkorlr.js";import"./SynapseConstants-BAmU4k0g.js";import"./OrientationBanner-B6xN5fSu.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-B5Mtlgxp.js";import"./index-CLCXOIcb.js";import"./iframe-t2wJdwGi.js";import"./spreadSx-CwcO6WA9.js";import"./react-BjskdS-M.js";import"./FullWidthAlert-Dp0jOaAM.js";import"./Alert-CozJnD--.js";import"./createTheme-DWyGdLde.js";import"./DefaultPropsProvider-BVUiVDJJ.js";import"./useSlot-8Tg8yxZz.js";import"./useForkRef-C5Kxhg9M.js";import"./createSimplePaletteValueFilter-Bu6Rmtji.js";import"./createSvgIcon-BCKLSsq2.js";import"./Close-LtSBt6wu.js";import"./IconButton-BfYR4OmI.js";import"./useTimeout-HoSzxHZJ.js";import"./ButtonBase-DRt0AA36.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-fNOaoY57.js";import"./Paper-COBJrFNP.js";import"./useTheme-gTAEZSvX.js";import"./useTheme-KE0mEYul.js";import"./Stack-dOR7TZbk.js";import"./extendSxProp-uQt30Vh3.js";import"./getThemeProps-CevicY1j.js";import"./Box-B5UNecaX.js";import"./AlertTitle-C1Vcfseh.js";import"./Typography-Blc4WWJ7.js";import"./index-SzTH32SF.js";import"./ClickAwayListener-0MTpQFe5.js";import"./getReactElementRef-DkYC1Yp6.js";import"./index-CMtfxCZX.js";import"./index-BEXi3mBJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-4kvSm4pD.js";import"./Tooltip-Byzt_xyJ.js";import"./index-CGXlNM3G.js";import"./useControlled-IASeHKHZ.js";import"./Popper-B3d9BW8L.js";import"./Button-wLcILYxh.js";import"./uniqueId-C3BccmJG.js";import"./toString-oLRccSQr.js";import"./isArray-DwZDKjpx.js";import"./isSymbol-D1Bo8OiP.js";import"./times-DsswOknr.js";import"./_Uint8Array-ChkAt42x.js";import"./identity-DKeuBCMA.js";import"./toInteger-Y38Eiyfl.js";import"./mockTableEntity-DH3xHWwt.js";import"./mockFileEntityACLVariants-BVdz0i6H.js";import"./fakerUtils-BxvFMQy8.js";import"./mockFileEntity-ZW2vF9sa.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-QSdrAjO2.js";import"./mockSchema-4a1RDPUZ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CM4VhkzW.js";import"./QueryClientProvider-B-3FWRUH.js";import"./Link-D_PJAlIU.js";import"./Collapse-3PYCLEiX.js";import"./_baseUniq-CZpoU5rd.js";import"./_getTag-BPYr6ToM.js";import"./isEqual-CBEqrATC.js";import"./merge-D_lQC9Yt.js";import"./_initCloneObject-Cm5ry7Op.js";import"./tinycolor-Begke6kS.js";import"./Fade-CtBIba13.js";import"./inputBaseClasses-jpAddTzP.js";import"./calculateFriendlyFileSize-Ca97T7pk.js";import"./CheckCircleTwoTone-C7LPXUoS.js";import"./InfoTwoTone-CRl0Z4Gv.js";import"./useMutation-C3utT0DK.js";import"./dayjs.min-C_DSNH2k.js";import"./chunk-AYJ5UCUI-CZZfxgfF.js";import"./cloneDeep-KwGSFuPV.js";import"./Skeleton-CN3n86wp.js";import"./HelpPopover-dN-kfkzB.js";import"./MarkdownPopover-E7tlE14x.js";import"./LightTooltip-DjlCwnsO.js";import"./MarkdownSynapse-Bwt4uhRc.js";import"./SkeletonButton-D8bUmaQm.js";import"./SkeletonInlineBlock-CtPRolRR.js";import"./SkeletonTable-BvxJFe4A.js";import"./SkeletonParagraph-DhyOZp5y.js";import"./HelpOutlineTwoTone-TO5aOLpF.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
