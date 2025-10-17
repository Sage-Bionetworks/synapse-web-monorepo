import{g as i}from"./entityHandlers-D2JcrQIL.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-KjJsMF-p.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-CHKU6rT_.js";import{g as m}from"./userProfileHandlers-ai_uRsf1.js";import{P as L}from"./ProjectDataAvailability-Baw9cvuY.js";import"./index-ByoJTINW.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CHIuAKWe.js";import"./mockTeam-RUldL4fv.js";import"./SynapseConstants-DLx2cP4k.js";import"./OrientationBanner-Jb_O7Vhq.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-Is5_m3kz.js";import"./index-CgGWB-jV.js";import"./iframe-BUMkfsLU.js";import"./spreadSx-CwcO6WA9.js";import"./react-N-ryfbTF.js";import"./FullWidthAlert-Cbe1wvZw.js";import"./Alert-CeHdnxTK.js";import"./createTheme-CzqifIS2.js";import"./DefaultPropsProvider-ChnhiV7X.js";import"./useSlot-DJp30WUK.js";import"./useForkRef-Cg7exXTP.js";import"./createSimplePaletteValueFilter-DoKXWXAR.js";import"./createSvgIcon-CJyY65Ao.js";import"./Close-Ct4BeBDP.js";import"./IconButton-CiTuzBw7.js";import"./useTimeout-BaoekB3P.js";import"./ButtonBase-CFAyCW0o.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DJKpL5dd.js";import"./Paper-DDtB3wBD.js";import"./useTheme-7NPehFBl.js";import"./useTheme-BN-TwAsg.js";import"./Stack-DbagSvH3.js";import"./useThemeProps-C1npFjKE.js";import"./getThemeProps-DaX0KFEn.js";import"./extendSxProp-JVQTI-CD.js";import"./Box-BZ1lOftb.js";import"./AlertTitle-Cb7s4coE.js";import"./Typography-B9kkfmck.js";import"./index-q_vgnk4f.js";import"./ClickAwayListener-DRuGIOht.js";import"./getReactElementRef-CPho3O8d.js";import"./index-D2jwleMP.js";import"./index-BigBH4wQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BICR705K.js";import"./Tooltip-CuMkmQ11.js";import"./index-JClH4D6U.js";import"./useControlled-BvzDdtG-.js";import"./Popper-xa5ue3Yw.js";import"./Button-DEyRWKz6.js";import"./uniqueId-BWhkK37b.js";import"./toString-CQg49ten.js";import"./isArray-C9reyBA0.js";import"./isSymbol-DnFPJaTK.js";import"./times-CxvG_X9r.js";import"./_Uint8Array-CN0Ng_Ch.js";import"./identity-DKeuBCMA.js";import"./toInteger-B15ZtKM0.js";import"./mockTableEntity-a-wAm63V.js";import"./mockFileEntityACLVariants-Di3hLDui.js";import"./fakerUtils-CRlZO4Za.js";import"./mockFileEntity-BtfL-XaW.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-cnqYhb2N.js";import"./mockSchema-Cq1Gu_RM.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-NiW2zyRg.js";import"./QueryClientProvider-DW-f02xS.js";import"./Link-oef7RIge.js";import"./Collapse-D0tlUayk.js";import"./_baseUniq-Dytxu0zx.js";import"./_getTag-B2uaWzEd.js";import"./isEqual-C-hv45PE.js";import"./noop-DX6rZLP_.js";import"./merge-BNcXC3-S.js";import"./_initCloneObject-BEsO6nF6.js";import"./tinycolor-Begke6kS.js";import"./Fade-CslKpPQa.js";import"./inputBaseClasses-DC4K9515.js";import"./calculateFriendlyFileSize-Hzj1mxFN.js";import"./CheckCircleTwoTone-BhkaRfHQ.js";import"./InfoTwoTone-D3TwCEy5.js";import"./useMutation-CCNgT-2E.js";import"./dayjs.min-BQpchTlf.js";import"./chunk-AYJ5UCUI-D6YYAcr5.js";import"./cloneDeep-KI5YljVK.js";import"./Skeleton-HDLzVwIb.js";import"./HelpPopover-Clu25shn.js";import"./MarkdownPopover-Cs4tQg1i.js";import"./LightTooltip-CK5IotTA.js";import"./MarkdownSynapse-B-ppL6oM.js";import"./SkeletonButton-DXoTvKx8.js";import"./SkeletonInlineBlock-DTj_dYaw.js";import"./SkeletonTable-DqoNgDeh.js";import"./SkeletonParagraph-CasqnWrn.js";import"./HelpOutlineTwoTone-CNj9G6oQ.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
