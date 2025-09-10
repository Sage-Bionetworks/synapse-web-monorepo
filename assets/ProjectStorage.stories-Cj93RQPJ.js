import{g as i}from"./entityHandlers-DtREcveI.js";import{N as y,g as C,b8 as c,B as S,M as t}from"./useFiles-DfmUZ-4E.js";import"./VerificationSubmission-16RBrwfH.js";import"./StringUtils-B_EIkN_W.js";import{h as d,H as l}from"./index-BsPAX0UU.js";import{g as m}from"./userProfileHandlers-WKgASeDb.js";import{P as L}from"./ProjectDataAvailability-BZytWONA.js";import"./index-tHQgv-TM.js";import"./mock_user_profile-Bg50HGfI.js";import"./mockProject-yu1F8_uw.js";import"./mockTeam-_dJ7ED1W.js";import"./SynapseConstants-DBjjddIw.js";import"./OrientationBanner-VFV71Tjc.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BHmtFBB_.js";import"./index-C9-TIdL_.js";import"./iframe-DeZrw8cL.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ck9EPeEi.js";import"./FullWidthAlert-Bmh1NRie.js";import"./Alert-EAD1eTrF.js";import"./createTheme-CE6qXHe9.js";import"./DefaultPropsProvider-mrWzkTQJ.js";import"./useSlot-DtPBphoa.js";import"./useForkRef-Cx9b2vUF.js";import"./createSimplePaletteValueFilter-Cua6TkTN.js";import"./createSvgIcon-B8DyheYB.js";import"./Close-BrwXfVJ8.js";import"./IconButton-DNzR0rYH.js";import"./useTimeout-B4nm8K8G.js";import"./ButtonBase-CL_IFWn3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DX21bKx9.js";import"./Paper-8UdBM9kL.js";import"./useTheme-pTqndlnn.js";import"./useTheme-CcEl__P7.js";import"./Stack-qqZTI9Mk.js";import"./extendSxProp-DYJ4qHcb.js";import"./getThemeProps-U5h5w87F.js";import"./Box-c1acJzBY.js";import"./AlertTitle-DrvONvNQ.js";import"./Typography-DFKsi_Yp.js";import"./index-DoRmc9IV.js";import"./ClickAwayListener-Csbn-psG.js";import"./getReactElementRef-CHn9vIIS.js";import"./index-BNzjogy-.js";import"./index-BlCl8FJn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CKjqUnz6.js";import"./Tooltip-aIej-TC0.js";import"./index-C4bFR0fr.js";import"./useControlled-CJ0jTomz.js";import"./Popper-CgflTmuC.js";import"./Button-DnYIz2mR.js";import"./uniqueId-CDHhO_Pm.js";import"./toString-DUqJ2cqP.js";import"./isArray-P9V5rfrS.js";import"./isSymbol-mR1shqCu.js";import"./times-C6ns9myY.js";import"./_Uint8Array-DJNgTM6y.js";import"./identity-DKeuBCMA.js";import"./toInteger-PCs3xOoR.js";import"./mockTableEntity-BM1Fi8Rg.js";import"./mockFileEntityACLVariants-BFnZNc3x.js";import"./fakerUtils-BkB6lNlt.js";import"./mockFileEntity-D6Z2syrL.js";import"./mock_file_handle-t2fDWYxy.js";import"./mockEntity-nDCSZE-X.js";import"./mockSchema-Cr7QPyR3.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./useQuery-B0zK9_y9.js";import"./QueryClientProvider-CrJTSCTY.js";import"./Link-dppmAxhW.js";import"./Collapse-Cj6ee3Yt.js";import"./_baseUniq-Bwu5nO20.js";import"./_getTag-B_GSssIH.js";import"./isEqual-CyfHpJRg.js";import"./merge-D2V9CcG9.js";import"./_initCloneObject-BuBhIP8E.js";import"./tinycolor-Begke6kS.js";import"./Fade-qoxQnxF9.js";import"./inputBaseClasses-ktaLCHeI.js";import"./calculateFriendlyFileSize-DsdtZKta.js";import"./CheckCircleTwoTone-DCRdFQaj.js";import"./InfoTwoTone-COSNQhZA.js";import"./useMutation-igh3-1pD.js";import"./dayjs.min-bQ2v5w_u.js";import"./chunk-AYJ5UCUI-CcGUCHcD.js";import"./cloneDeep-DlSGhKsq.js";import"./Skeleton-zcL_PViR.js";import"./HelpPopover-CcKwYYDP.js";import"./MarkdownPopover-CRjZLiuc.js";import"./LightTooltip-B4s5WeMZ.js";import"./MarkdownSynapse-DAUv1k7U.js";import"./SkeletonButton-CTL7IIUW.js";import"./SkeletonInlineBlock-Ee0kCjj4.js";import"./SkeletonTable-Dn_f8sfL.js";import"./SkeletonParagraph-UUVWZKz3.js";import"./HelpOutlineTwoTone-CqmE3Zh1.js";const s="syn54321",a="syn12345",N={projectId:s,locations:[{storageLocationId:y,sumFileBytes:12e8,maxAllowedFileBytes:1073741824,isOverLimit:!0},{storageLocationId:2,sumFileBytes:1e8,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},k={projectId:a,locations:[{storageLocationId:y,sumFileBytes:5420135,maxAllowedFileBytes:5571138,isOverLimit:!1},{storageLocationId:2,sumFileBytes:1e3,maxAllowedFileBytes:1073741824,isOverLimit:!1}]},p=(n=C(S.REPO_ENDPOINT))=>[d.get(`${n}${c(s)}`,()=>l.json(N,{status:201})),d.get(`${n}${c(a)}`,()=>l.json(k,{status:201}))],Er={title:"Synapse/ProjectStorage",component:L,argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},r={args:{projectId:a,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},o={args:{projectId:s,sx:{backgroundColor:"#375574"}},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}},e={args:{projectId:"syn31415123"},parameters:{stack:"mock",msw:{handlers:[...m(t),...i(t),...p(t)]}}};var O,g,I;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
