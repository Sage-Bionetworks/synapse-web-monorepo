import{D as w}from"./DownloadConfirmationUI-xjz8RrEf.js";import{f as a}from"./index-CVAUwOAi.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./useFiles-CZmZBm21.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./OrientationBanner-Dto5BQb9.js";import"./FullWidthAlert-DEIFRXi9.js";import"./Alert-CFMVYrhF.js";import"./createTheme-KpOM0lcD.js";import"./index-GEGPABih.js";import"./styled-BBrRP0Md.js";import"./mergeSlotProps-HzkJhcwJ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-DTfImBwS.js";import"./Paper-1rWVnzjH.js";import"./IconButton-Dr0cGlMc.js";import"./ButtonBase-D5yFTmEe.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-D7-BSZET.js";import"./Box-BaZAwz5V.js";import"./AlertTitle-D3sbju9B.js";import"./Typography-Cf0oTcRj.js";import"./utils-tKVbghIn.js";import"./index-zcEXKDIA.js";import"./Grow-B7DzSRwx.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-UqEOsFTY.js";import"./index-hbniaWjI.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-D1yxts2k.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./SynapseConstants-DRP7luG1.js";import"./RegularExpressions-CmcMRs19.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-DQQIp0BO.js";import"./CheckCircleTwoTone-DEnKZsx0.js";import"./calculateFriendlyFileSize-DWT38p8X.js";import"./Skeleton-BfmxkurM.js";import"./inputBaseClasses-DMmjJS2A.js";import"./Fade-AJK8kXQa.js";import"./Link-bWbmw0vG.js";import"./cloneDeep-BhVrLcRV.js";import"./_initCloneObject-CKdTzPLh.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-DvLBLCla.js";import"./dayjs.min-D1RcYm3-.js";import"./merge-CCcBxO6N.js";import"./identity-DKeuBCMA.js";import"./useDownloadList-LO7bhKpR.js";import"./useMutation-BUHlmdy0.js";import"./useInfiniteQuery-Bn8a2E2f.js";import"./SynapseTableConstants-2qH3fDlQ.js";import"./SkeletonInlineBlock-Wf_2EmvG.js";import"./LayersTwoTone-DIObRqme.js";import"./index-D0JCpg9J.js";const xt={title:"Download/DownloadConfirmationUI",component:w,tags:["autodocs"],argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0,onAddToDownloadCart:a(),onCancel:a()}},t={args:{isAuthenticated:!0,fileCount:1e4,fileSize:1e9,isLoadingStats:!1,isAddingToDownloadCart:!1}},i={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}},o={args:{isAuthenticated:!0,fileCount:0,fileSize:void 0,isLoadingStats:!0,isAddingToDownloadCart:!1}},e={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!0}},r={args:{isAuthenticated:!1,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}};var n,s,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(D=(h=r.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const yt=["ConfirmationWithFileSize","ConfirmationWithoutFileSize","LoadingStats","AddingToCart","Unauthenticated"];export{e as AddingToCart,t as ConfirmationWithFileSize,i as ConfirmationWithoutFileSize,o as LoadingStats,r as Unauthenticated,yt as __namedExportsOrder,xt as default};
