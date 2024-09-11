import{D as w}from"./DownloadConfirmationUI-BXBSMU-5.js";import{f as a}from"./index-CVAUwOAi.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./SynapseClient-D4ATx1tI.js";import"./OrientationBanner-Ct6IgTPI.js";import"./FullWidthAlert-CpohRhD9.js";import"./Alert-DevAguyB.js";import"./createTheme-CFwAOJQC.js";import"./index-GEGPABih.js";import"./styled-uoyYAB-L.js";import"./mergeSlotProps-bXd1ns9H.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon--fcRVpp9.js";import"./Paper-C3XTRciO.js";import"./IconButton-rjGZl5Ij.js";import"./ButtonBase-CwAnxZmp.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-BCUKu9qx.js";import"./Box-tOdEuW_y.js";import"./AlertTitle-F01TNSvq.js";import"./Typography-Ctk8_6Bo.js";import"./utils-Cz4ynwjU.js";import"./index-BlO3JfGB.js";import"./Grow-Dczl5MLz.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cr4lETRB.js";import"./index-_EfqdWAV.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-BkvFhVsL.js";import"./index--5FOymzB.js";import"./SynapseConstants-DKOAl3NQ.js";import"./RegularExpressions-C2ZZh8jv.js";import"./useQuery-ChYzlhEH.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-C882d77b.js";import"./CheckCircleTwoTone-nCTn5zJK.js";import"./colorManipulator-CSxSE2hh.js";import"./inputBaseClasses-CcXvGEyU.js";import"./Fade-BXejYtqq.js";import"./dayjs.min-D1RcYm3-.js";import"./index-SDyqs4cU.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-ceK_fu-q.js";import"./_getTag-CC1n5fj9.js";import"./_Map-BfIf8dAI.js";import"./isArray-ggc3KxVp.js";import"./isObject-C3e4t58V.js";import"./StringUtils-DvQ2IdRE.js";import"./useDownloadList-B03xw6FN.js";import"./useMutation-DAMF4D7y.js";import"./useInfiniteQuery-BbwADs8A.js";import"./SynapseTableConstants-2qH3fDlQ.js";import"./SkeletonInlineBlock-xinjJ1wr.js";import"./Skeleton-D3uxr_0h.js";import"./LayersTwoTone-qdhO3ukl.js";import"./index-D0JCpg9J.js";const Wt={title:"Download/DownloadConfirmationUI",component:w,tags:["autodocs"],argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0,onAddToDownloadCart:a(),onCancel:a()}},t={args:{isAuthenticated:!0,fileCount:1e4,fileSize:1e9,isLoadingStats:!1,isAddingToDownloadCart:!1}},i={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}},o={args:{isAuthenticated:!0,fileCount:0,fileSize:void 0,isLoadingStats:!0,isAddingToDownloadCart:!1}},e={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!0}},r={args:{isAuthenticated:!1,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}};var n,s,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    fileCount: 10_000,
    fileSize: 1_000_000_000,
    isLoadingStats: false,
    isAddingToDownloadCart: false
  }
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var m,p,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    fileCount: 10_000,
    fileSize: undefined,
    isLoadingStats: false,
    isAddingToDownloadCart: false
  }
}`,...(l=(p=i.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    fileCount: 0,
    fileSize: undefined,
    isLoadingStats: true,
    isAddingToDownloadCart: false
  }
}`,...(f=(c=o.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var g,S,C;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    fileCount: 10_000,
    fileSize: undefined,
    isLoadingStats: false,
    isAddingToDownloadCart: true
  }
}`,...(C=(S=e.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var A,h,D;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isAuthenticated: false,
    fileCount: 10_000,
    fileSize: undefined,
    isLoadingStats: false,
    isAddingToDownloadCart: false
  }
}`,...(D=(h=r.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const xt=["ConfirmationWithFileSize","ConfirmationWithoutFileSize","LoadingStats","AddingToCart","Unauthenticated"];export{e as AddingToCart,t as ConfirmationWithFileSize,i as ConfirmationWithoutFileSize,o as LoadingStats,r as Unauthenticated,xt as __namedExportsOrder,Wt as default};
