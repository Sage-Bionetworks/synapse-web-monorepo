import{g as i}from"./entityHandlers-lK_UTMTo.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-mkQvhsfp.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-BhWhkAut.js";import{g as m}from"./userProfileHandlers-hW_vbRDT.js";import{P as L}from"./ProjectDataAvailability-DxTjZ4PQ.js";import"./index-Lxi3dReE.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-DRWLEIpm.js";import"./mockTeam-BDEB-Asu.js";import"./SynapseConstants-BE1dCm6q.js";import"./OrientationBanner-ByfGCVhh.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CuiiqCn7.js";import"./index-DJB1qF2z.js";import"./iframe-c5QjURjd.js";import"./spreadSx-CwcO6WA9.js";import"./react-BBKcbch5.js";import"./FullWidthAlert-CAacvDiW.js";import"./Alert-D3J6MamD.js";import"./createTheme-CgsFvkwA.js";import"./DefaultPropsProvider-BnDOUeJq.js";import"./useSlot-BJ1CRAdA.js";import"./useForkRef-fM2IrCKB.js";import"./createSimplePaletteValueFilter-DGGr4raR.js";import"./createSvgIcon-D0F9NJty.js";import"./Close-CD6hdFxs.js";import"./IconButton-D9Wo9i95.js";import"./useTimeout-DgY8E2MB.js";import"./ButtonBase-R1zAEHht.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DF87QtHc.js";import"./Paper-f9F1rBkl.js";import"./useTheme-D2vwtQz8.js";import"./useTheme-DouzHGjt.js";import"./Stack-YMNswqAL.js";import"./extendSxProp-BTTcXXOw.js";import"./getThemeProps-CElrGHOX.js";import"./Box-B2zh_4B1.js";import"./AlertTitle-N6XY5bvj.js";import"./Typography-u2K4Np03.js";import"./index-KdogHW2F.js";import"./ClickAwayListener-DLQRhqqv.js";import"./getReactElementRef-hSa5zvl9.js";import"./index-DSCMbWyT.js";import"./index-VaRDmsAV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BuzsStj7.js";import"./Tooltip-DJ_zQ3Xt.js";import"./index-BFJo53wU.js";import"./useControlled-DM7TiFWR.js";import"./Popper-BpGY4_Yk.js";import"./Button-DWZzM1YQ.js";import"./uniqueId-hAupmQuU.js";import"./toString-Bh5H_-sK.js";import"./isArray-BQlUsOuq.js";import"./isSymbol-DdAHaBoP.js";import"./times-BK2KZWZz.js";import"./_Uint8Array-CbO669vH.js";import"./identity-DKeuBCMA.js";import"./toInteger-BE81kN5Y.js";import"./mockTableEntity-ev3o4evU.js";import"./mockFileEntityACLVariants-DRBLyqDM.js";import"./fakerUtils-BzrC2EiY.js";import"./mockFileEntity-9AgYBCyr.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-3wGMWQcW.js";import"./mockSchema-hWGpo2c6.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-CuGZc_4o.js";import"./QueryClientProvider-BpXWIHcQ.js";import"./Link-B1acHzcw.js";import"./Collapse-DdpJ9wk5.js";import"./_baseUniq-B0jgxF2n.js";import"./_getTag-C3oiTjc9.js";import"./isEqual-CHbIB85-.js";import"./merge-Ovpzi0cD.js";import"./_initCloneObject-DpqlTgho.js";import"./tinycolor-Begke6kS.js";import"./Fade-4pjdx6uQ.js";import"./inputBaseClasses-BU9UMIzD.js";import"./calculateFriendlyFileSize-p0rEqxiA.js";import"./CheckCircleTwoTone-C5JDYzCA.js";import"./InfoTwoTone-VMAFVZ4G.js";import"./useMutation-DGzs3t2j.js";import"./dayjs.min-DGLiMftP.js";import"./chunk-AYJ5UCUI-Dcahf3fb.js";import"./cloneDeep-DJFF_FoF.js";import"./Skeleton-BV5yBlWE.js";import"./HelpPopover-D7ybgDnQ.js";import"./MarkdownPopover-BGS8y4AW.js";import"./LightTooltip-2ckKVmMs.js";import"./MarkdownSynapse-BWYq7xh8.js";import"./SkeletonButton-Cqqs6UmB.js";import"./SkeletonInlineBlock-CtE-j46P.js";import"./SkeletonTable-BbBRqYUQ.js";import"./SkeletonParagraph-BSRB5goQ.js";import"./HelpOutlineTwoTone-DB0GoDcs.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
