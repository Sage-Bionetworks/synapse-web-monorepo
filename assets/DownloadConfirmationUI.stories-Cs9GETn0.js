import{D as w}from"./DownloadConfirmationUI-lLkx32Wu.js";import{f as a}from"./index-CVAUwOAi.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./useFiles-DEblaM3k.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./OrientationBanner-CW2K3-RQ.js";import"./FullWidthAlert-L3bJILOo.js";import"./Alert-DOXScrWE.js";import"./createTheme-BDTvfUpa.js";import"./index-GEGPABih.js";import"./extends-CF3RwP-h.js";import"./styled-DuixqW8V.js";import"./mergeSlotProps-BRYxW-OX.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-L3-Z4vl2.js";import"./Paper-GgpZwKOl.js";import"./IconButton-G5owOEKj.js";import"./ButtonBase-CIP26XmV.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-BRvuPf6D.js";import"./Box-Bma8Ps0t.js";import"./AlertTitle--w70ZYZx.js";import"./Typography-Jzf0ov00.js";import"./utils-BfTmAAcW.js";import"./index-zcEXKDIA.js";import"./Grow-BlYLCNLi.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Cao-5103.js";import"./index-Ch2PWkM5.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-DCzP6lNj.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./SynapseConstants-03FNPEMB.js";import"./RegularExpressions-kZf2njeX.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-C3QaTlDw.js";import"./CheckCircleTwoTone-Ctfh99h-.js";import"./calculateFriendlyFileSize-BNaAOc5m.js";import"./Skeleton-DaHZPytj.js";import"./inputBaseClasses-3kXRnYVz.js";import"./Fade-YgxkoC1K.js";import"./Link-CNcyCMpI.js";import"./cloneDeep-BifXcKf5.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-DKnRzacY.js";import"./dayjs.min-D1RcYm3-.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./useDownloadList-v0OlxkFo.js";import"./useMutation-BUHlmdy0.js";import"./useInfiniteQuery-hfMs_xir.js";import"./SynapseTableConstants-2qH3fDlQ.js";import"./SkeletonInlineBlock-BMm0ty_S.js";import"./LayersTwoTone-DcC_cGFi.js";import"./index-D0JCpg9J.js";const yt={title:"Download/DownloadConfirmationUI",component:w,tags:["autodocs"],argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0,onAddToDownloadCart:a(),onCancel:a()}},t={args:{isAuthenticated:!0,fileCount:1e4,fileSize:1e9,isLoadingStats:!1,isAddingToDownloadCart:!1}},i={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}},o={args:{isAuthenticated:!0,fileCount:0,fileSize:void 0,isLoadingStats:!0,isAddingToDownloadCart:!1}},e={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!0}},r={args:{isAuthenticated:!1,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}};var n,s,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(D=(h=r.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const It=["ConfirmationWithFileSize","ConfirmationWithoutFileSize","LoadingStats","AddingToCart","Unauthenticated"];export{e as AddingToCart,t as ConfirmationWithFileSize,i as ConfirmationWithoutFileSize,o as LoadingStats,r as Unauthenticated,It as __namedExportsOrder,yt as default};
