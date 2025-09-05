import{g as i}from"./entityHandlers-BsC5Zb-H.js";import{N as y,g as C,b7 as c,B as S,M as t}from"./useFiles-CBJ856AZ.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-DFUnBTis.js";import{g as m}from"./userProfileHandlers-Cl1hXtel.js";import{P as L}from"./ProjectDataAvailability-D1nzxBoQ.js";import"./index-qY43RhJl.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-8kuXmuiW.js";import"./mockTeam-HEgUfeYj.js";import"./SynapseConstants-ikhpTMSi.js";import"./OrientationBanner-Bevn196W.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CKUFoVF8.js";import"./index-Bx6rHiCc.js";import"./iframe-CmlFyz22.js";import"./spreadSx-CwcO6WA9.js";import"./react-BegF-bgY.js";import"./FullWidthAlert-BcJLpMsp.js";import"./Alert-BwcDOzUk.js";import"./createTheme-DW7Vrlzw.js";import"./DefaultPropsProvider-ConE9Vnz.js";import"./useSlot-BSVMef9l.js";import"./useForkRef-Cvl4b66U.js";import"./createSimplePaletteValueFilter-B4ekfyK6.js";import"./createSvgIcon-Dp5r_z1b.js";import"./Close-D_HVX8Of.js";import"./IconButton-Dugf8IuD.js";import"./useTimeout-CVQUoJUi.js";import"./ButtonBase-DdvhFXiU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DuBYbEIJ.js";import"./Paper-BOku699h.js";import"./useTheme-Z9lGwbET.js";import"./useTheme-C309Wcvj.js";import"./Stack-BjnY0P-K.js";import"./extendSxProp-D0JP_WBX.js";import"./getThemeProps-BXfajUm-.js";import"./Box-DvJ0ErCQ.js";import"./AlertTitle-B7zYsG91.js";import"./Typography-C6mIpVDc.js";import"./index-BK-imeYc.js";import"./ClickAwayListener-muvdENkP.js";import"./getReactElementRef-BKX2ZP_E.js";import"./index-DmUisdaW.js";import"./index-CqNaTZ9O.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-p1Rl7bOw.js";import"./Tooltip-DAC7ZfT2.js";import"./index-Cnxet5a5.js";import"./useControlled-DMcYHGA2.js";import"./Popper-DZo1fAVo.js";import"./Button-WSwqzpWb.js";import"./uniqueId-C_4t0xlp.js";import"./toString-j-h78WmF.js";import"./isArray-Cf6JBw9S.js";import"./isSymbol-Cer8UQw-.js";import"./times-BVZNZLd-.js";import"./_Uint8Array-eEAzFJ_P.js";import"./identity-DKeuBCMA.js";import"./toInteger-ByGriXs5.js";import"./mockTableEntity-CYxERNJ_.js";import"./mockFileEntityACLVariants-Bv8czwxh.js";import"./fakerUtils-BsMAg07s.js";import"./mockFileEntity-DF7ST6Kf.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-DWeezRbY.js";import"./mockSchema-CR6tl4zP.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DQjr7ojL.js";import"./QueryClientProvider-BsTfFufl.js";import"./Link-BHuJNOVj.js";import"./Collapse-YIUEr55v.js";import"./_baseUniq-BFKSe-s-.js";import"./_getTag-CWmy7owM.js";import"./isEqual-BCIIkq8x.js";import"./merge-DVgg1N05.js";import"./_initCloneObject-b_ydy7AP.js";import"./tinycolor-Begke6kS.js";import"./Fade-hyn8D1TG.js";import"./inputBaseClasses-Diynf-VS.js";import"./calculateFriendlyFileSize-Ydbps-9H.js";import"./CheckCircleTwoTone-CVHWRI0h.js";import"./InfoTwoTone-B5e9fPYt.js";import"./useMutation-BqdsOGtV.js";import"./dayjs.min-BisTLcGd.js";import"./chunk-AYJ5UCUI-B4H_lHh-.js";import"./cloneDeep-T5a5yhy5.js";import"./Skeleton-BBd8yoFk.js";import"./HelpPopover-DCHNmbO0.js";import"./MarkdownPopover-DV72QmHC.js";import"./LightTooltip-BqFB4dg1.js";import"./MarkdownSynapse-Bv_l-j33.js";import"./SkeletonButton-C4nKU5jr.js";import"./SkeletonInlineBlock-BUkjr-hA.js";import"./SkeletonTable-DtBiNBMf.js";import"./SkeletonParagraph-Dui_ViLs.js";import"./HelpOutlineTwoTone-frXhKbA5.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
