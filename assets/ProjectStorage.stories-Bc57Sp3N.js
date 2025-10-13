import{g as i}from"./entityHandlers-DG1KZ8ol.js";import{N as y,g as C,b6 as c,B as S,M as t}from"./useFiles-Ds_bREMK.js";import"./VerificationSubmission-BDh1zA9f.js";import"./StringUtils-C95LMFI-.js";import{h as d,H as l}from"./index-Bfn7_FLi.js";import{g as m}from"./userProfileHandlers-DJ0ibUpz.js";import{P as L}from"./ProjectDataAvailability-B7THM7on.js";import"./index-BighAukP.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-C8wPn8lp.js";import"./mockTeam-DnwrrP25.js";import"./SynapseConstants-D489MFxy.js";import"./OrientationBanner-DQLq-M9F.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CKFZHx8F.js";import"./index-KO5yBezO.js";import"./iframe-BWtzi3Fu.js";import"./spreadSx-CwcO6WA9.js";import"./react-D5Kw-Idf.js";import"./FullWidthAlert-COzh-JV3.js";import"./Alert-DxH2xLmB.js";import"./createTheme-BiMww641.js";import"./DefaultPropsProvider-BoHZ1rqc.js";import"./useSlot-HveTRmcP.js";import"./useForkRef-CTzi7RL5.js";import"./createSimplePaletteValueFilter-UnnRFOda.js";import"./createSvgIcon-C9ylNz7Z.js";import"./Close-BjY3tzYx.js";import"./IconButton-D1QHohjU.js";import"./useTimeout-D67sEVIl.js";import"./ButtonBase-CZrPHVPS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CIeVfw1I.js";import"./Paper-tceDeyQ-.js";import"./useTheme-BqZaM65K.js";import"./useTheme-CM4wnLKj.js";import"./Stack-CvutscYA.js";import"./useThemeProps-DfEwavVO.js";import"./getThemeProps-D-9myJJW.js";import"./extendSxProp-mBp2xHbV.js";import"./Box-BDifCyM8.js";import"./AlertTitle-BpztvcIe.js";import"./Typography-CxNE9IZM.js";import"./index-By9_PeXc.js";import"./ClickAwayListener-DVtkFkiL.js";import"./getReactElementRef-D7Qedxf3.js";import"./index-Dr_d-L0h.js";import"./index-Bh8b_a61.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bai82ClR.js";import"./Tooltip-v-ea6aM6.js";import"./index-B3fWEhVy.js";import"./useControlled-B7xU-BaO.js";import"./Popper-BD0dU3Wk.js";import"./Button-BDASUTyZ.js";import"./uniqueId-C7XJVwZH.js";import"./toString-4pmRbB0O.js";import"./isArray-ZF-H6sf6.js";import"./isSymbol-nb2lI7Ve.js";import"./times-B2NJ-ZD7.js";import"./_Uint8Array-B97Nrg_E.js";import"./identity-DKeuBCMA.js";import"./toInteger-DM8hGqiC.js";import"./mockTableEntity-DBSZpnEm.js";import"./mockFileEntityACLVariants-ChH6ZFME.js";import"./fakerUtils-giPgaDUT.js";import"./mockFileEntity-Bbq5X8UP.js";import"./mock_file_handle-BSSHlK6B.js";import"./mockEntity-BI4Y8OXF.js";import"./mockSchema-CG18zIRT.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./useQuery-C4kyH3KQ.js";import"./QueryClientProvider-CWGnu1_a.js";import"./Link-hRQmmRQx.js";import"./Collapse-vR8OSL7u.js";import"./_baseUniq-CLUAcwzD.js";import"./_getTag-Dv5kflz0.js";import"./isEqual-hUxn6nkp.js";import"./noop-DX6rZLP_.js";import"./merge-B4VAHq3z.js";import"./_initCloneObject-DiMowaiZ.js";import"./tinycolor-Begke6kS.js";import"./Fade-QhzadI6Z.js";import"./inputBaseClasses-DfpAAtBx.js";import"./calculateFriendlyFileSize-B_nf1MCd.js";import"./CheckCircleTwoTone-CERx72Pg.js";import"./InfoTwoTone-aw-Y5OVy.js";import"./useMutation-BYw0U5y_.js";import"./dayjs.min-CBt31E3Q.js";import"./chunk-AYJ5UCUI-DRnCpsds.js";import"./cloneDeep-BLJ74t8I.js";import"./Skeleton-BPL1hR_k.js";import"./HelpPopover-e2jv9DVV.js";import"./MarkdownPopover-CScFoShM.js";import"./LightTooltip-FS0iu1gF.js";import"./MarkdownSynapse-D3EMk6og.js";import"./SkeletonButton-b7Gcao7i.js";import"./SkeletonInlineBlock-DPhIpM8D.js";import"./SkeletonTable-DOEjWw_A.js";import"./SkeletonParagraph-5pEFRYdk.js";import"./HelpOutlineTwoTone-CoO0_vVD.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],jr={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
