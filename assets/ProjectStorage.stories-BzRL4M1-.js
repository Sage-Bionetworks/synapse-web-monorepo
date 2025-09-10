import{g as i}from"./entityHandlers-Ch0FLKg0.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-DfvSHy59.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-Cqro5rR0.js";import{g as m}from"./userProfileHandlers-CREO6OWX.js";import{P as L}from"./ProjectDataAvailability-CnMbdj95.js";import"./index-D8RpO3e8.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-BRM3FQRG.js";import"./mockTeam-DSPv2xGP.js";import"./SynapseConstants-DBaXNK7e.js";import"./OrientationBanner-i6W0EBQp.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-B5ZWLZ5-.js";import"./index-D9ihYNBM.js";import"./iframe-pqb1pWSd.js";import"./spreadSx-CwcO6WA9.js";import"./react-CeveDELd.js";import"./FullWidthAlert-R0M4V0bV.js";import"./Alert-CjbkLLmN.js";import"./createTheme-BWIyDVrX.js";import"./DefaultPropsProvider-D2MKCCrb.js";import"./useSlot-DtUY8ilh.js";import"./useForkRef-B6xUNni8.js";import"./createSimplePaletteValueFilter-BNigTjTM.js";import"./createSvgIcon-BmRPqEb8.js";import"./Close-BEVHtHX9.js";import"./IconButton-DAJFbbML.js";import"./useTimeout-Bn2K5TYG.js";import"./ButtonBase-Z-MGLh88.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B0zbCkH8.js";import"./Paper-mhgVS_uG.js";import"./useTheme-DO7dZYA7.js";import"./useTheme-D1zuUO8e.js";import"./Stack-BSZBaPmG.js";import"./extendSxProp-9cMljFx5.js";import"./getThemeProps-DNYjrSwN.js";import"./Box-mWMALOus.js";import"./AlertTitle-m68_MPj5.js";import"./Typography-7LVqlzoQ.js";import"./index-CwGSJ5dj.js";import"./ClickAwayListener-DcwV8dky.js";import"./getReactElementRef-Ps-f7eKg.js";import"./index-XxObJK5o.js";import"./index-nNjREFEA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DzrXL7gM.js";import"./Tooltip-BKdee5xx.js";import"./index-D65xsDcS.js";import"./useControlled-CrGo9MTn.js";import"./Popper-BeeuG86A.js";import"./Button-D5076Oxi.js";import"./uniqueId-DoWsN8ZP.js";import"./toString-CO5YCBid.js";import"./isArray-xHMFFYhw.js";import"./isSymbol-BEwM0VUQ.js";import"./times-DLaYzIvl.js";import"./_Uint8Array-BWgfEmFY.js";import"./identity-DKeuBCMA.js";import"./toInteger-DeN10Eni.js";import"./mockTableEntity-BwP0Q-gv.js";import"./mockFileEntityACLVariants-CY02wY-G.js";import"./fakerUtils-C50MOkBU.js";import"./mockFileEntity-BYfpJqGT.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-DJa-p-dH.js";import"./mockSchema-QQnlM93p.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-DdLEtQxq.js";import"./QueryClientProvider-CGLdhYBU.js";import"./Link-lxWKc_ox.js";import"./Collapse-Bv5dU9k5.js";import"./_baseUniq-BmE0A_Xr.js";import"./_getTag-Gpw-hnp_.js";import"./isEqual-DhLJQUGp.js";import"./merge-C2LH0t1x.js";import"./_initCloneObject-CfrF0OoR.js";import"./tinycolor-Begke6kS.js";import"./Fade-BIiVZsiZ.js";import"./inputBaseClasses-BXrTwmtb.js";import"./calculateFriendlyFileSize-Da5J-8Wb.js";import"./CheckCircleTwoTone-BDAODfpi.js";import"./InfoTwoTone-CxGbcOZj.js";import"./useMutation-9nl8qwzg.js";import"./dayjs.min-fPgISjHY.js";import"./chunk-AYJ5UCUI-Be12IADQ.js";import"./cloneDeep-BDjbbeKs.js";import"./Skeleton-B7HWIVJV.js";import"./HelpPopover-rv0dJuV9.js";import"./MarkdownPopover-DuRAV91w.js";import"./LightTooltip-Cm_PoHec.js";import"./MarkdownSynapse-tBrP3dAz.js";import"./SkeletonButton-Bo5n7eSe.js";import"./SkeletonInlineBlock-CQ2cg9rb.js";import"./SkeletonTable-B__cBoGS.js";import"./SkeletonParagraph-Bqdfds8k.js";import"./HelpOutlineTwoTone-CeblfON8.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
