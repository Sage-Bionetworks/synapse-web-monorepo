import{g as i}from"./entityHandlers-H7vKLtGh.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-BlF8TPl5.js";import"./VerificationSubmission-D0sL2gwz.js";import"./StringUtils-Bt2r5KGg.js";import{h as d,H as l}from"./index-DDR8W_OP.js";import{g as m}from"./userProfileHandlers-oTFDGj8G.js";import{P as L}from"./ProjectDataAvailability-Dox9PUAT.js";import"./index-CMWYD7lo.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-CzOQP-Tz.js";import"./mockTeam-2cTjN04j.js";import"./SynapseConstants-CPmaicpC.js";import"./OrientationBanner-CJ1ESR_n.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DiXyMZPQ.js";import"./index-CmvBv4Ni.js";import"./iframe-n5mwkj0K.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cs0n9kFQ.js";import"./FullWidthAlert-B8v9piRr.js";import"./Alert-xAoisqCg.js";import"./createTheme-DekxhsWr.js";import"./DefaultPropsProvider-DurKmMsP.js";import"./useSlot-BA0kN4AN.js";import"./useForkRef-BCeimwSg.js";import"./createSimplePaletteValueFilter-BqCAAfVF.js";import"./createSvgIcon-DgFDwm57.js";import"./Close-BIhyvXJQ.js";import"./IconButton-i3mZ6Ezw.js";import"./useTimeout-CcoqqpEg.js";import"./ButtonBase-XDzeNizs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BGQJ8oah.js";import"./Paper-84Q1WhB6.js";import"./useTheme-BvD-CNZH.js";import"./useTheme-DS1z3Y1X.js";import"./Stack-CBcPcYcV.js";import"./extendSxProp-Dh-qlJOe.js";import"./getThemeProps-jaih5qkn.js";import"./Box-BhLrdYXi.js";import"./AlertTitle-ByGWvG3o.js";import"./Typography-CLeqY5_n.js";import"./index-C7caafkY.js";import"./ClickAwayListener-CBV7B09E.js";import"./getReactElementRef-C0n-5JA5.js";import"./index-C3w_Pjwj.js";import"./index-nIDE90q0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BY_78XwL.js";import"./Tooltip-BvV6KBuI.js";import"./index-tHFahJkl.js";import"./useControlled-CyRm7kwD.js";import"./Popper-BGRgwHFZ.js";import"./Button-CI5AcPJ7.js";import"./uniqueId-DCbPiQr7.js";import"./toString-Di8UJasC.js";import"./isArray-BkbdtJTH.js";import"./isSymbol-CzPCjI13.js";import"./times-DKm1aQOU.js";import"./_Uint8Array-CyN-wuBs.js";import"./identity-DKeuBCMA.js";import"./toInteger-D3BzJgox.js";import"./mockTableEntity-CuCgcubp.js";import"./mockFileEntityACLVariants-G_h2AHHx.js";import"./fakerUtils-DOqbQoaB.js";import"./mockFileEntity-C4u6YUKb.js";import"./mock_file_handle-BgkszYEk.js";import"./mockEntity-Bd3EqGJ7.js";import"./mockSchema-Bh6GOY3Y.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-BWXoVlNJ.js";import"./QueryClientProvider-Bs1L9MD9.js";import"./Link-CTR14mAv.js";import"./Collapse-aOJwFLzA.js";import"./_baseUniq-CKpk02ye.js";import"./_getTag-CltEB6Q0.js";import"./isEqual-PuORISZF.js";import"./merge-CKiJq7bQ.js";import"./_initCloneObject-CazOt6n1.js";import"./tinycolor-Begke6kS.js";import"./Fade-BtxUg5az.js";import"./inputBaseClasses-Dwl_TlYP.js";import"./calculateFriendlyFileSize-Du7Eq0-o.js";import"./CheckCircleTwoTone-7SP1PUwv.js";import"./InfoTwoTone-B8ckXdFt.js";import"./useMutation-DImeJWvL.js";import"./dayjs.min-BYlmw0LD.js";import"./chunk-AYJ5UCUI-CG-M0tOp.js";import"./cloneDeep-v-ROnd35.js";import"./Skeleton-DMznnk0J.js";import"./HelpPopover-CwjwtoZU.js";import"./MarkdownPopover-BKy7sqSZ.js";import"./LightTooltip-BIQ_h7fD.js";import"./MarkdownSynapse-CH8rN77J.js";import"./SkeletonButton-CAxZMTH8.js";import"./SkeletonInlineBlock-DYgxuoaF.js";import"./SkeletonTable-CfJST3Et.js";import"./SkeletonParagraph-Be8mt8hr.js";import"./HelpOutlineTwoTone-DYyFsJa6.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
