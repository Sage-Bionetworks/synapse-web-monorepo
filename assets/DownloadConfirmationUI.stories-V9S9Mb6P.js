import{D as w}from"./DownloadConfirmationUI-cSkhrB8-.js";import{f as a}from"./index-CVAUwOAi.js";import"./jsx-runtime-DoxjgJx5.js";import"./index-Cu9bd8lq.js";import"./useFiles-BSWfpWHO.js";import"./useQuery-BEUP4ZKU.js";import"./utils-BECe8vEQ.js";import"./OrientationBanner-hnqIxEC8.js";import"./FullWidthAlert-Ch9QkDeJ.js";import"./Alert-B6PGsAkP.js";import"./createTheme-BIBP8v0l.js";import"./index-GEGPABih.js";import"./extends-CF3RwP-h.js";import"./styled-DKRXvDfM.js";import"./mergeSlotProps-D9SyexBH.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Bm_QQ74L.js";import"./createSvgIcon-Dn0UJ7ef.js";import"./Paper-BxvgHMc4.js";import"./IconButton-DhHKwBf8.js";import"./ButtonBase-DSnjMKVu.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./Stack-BbdlCzXz.js";import"./Box-Bt_N9PQN.js";import"./AlertTitle-CCxKidd9.js";import"./Typography-D6GCV-CB.js";import"./utils-B6ltzQPV.js";import"./index-zcEXKDIA.js";import"./Grow-Bb1htYw2.js";import"./ClickAwayListener-Ba-YFlDA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-CTVx2uGI.js";import"./index-Bn-p0IzE.js";import"./useControlled-JEQ1v-P8.js";import"./useId-g68bhPgm.js";import"./Button-j3jTttn9.js";import"./VerificationSubmission-DL9jxYsQ.js";import"./SynapseConstants-1iqjBrRY.js";import"./RegularExpressions-SKYrON-T.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-DHgeDUIO.js";import"./CheckCircleTwoTone-B0uYEdLD.js";import"./calculateFriendlyFileSize-DBeyIXBK.js";import"./Skeleton-DxEJ6_Wp.js";import"./inputBaseClasses-Db8tCxfW.js";import"./Fade-DPmnnOI3.js";import"./Link-DPsc3TBb.js";import"./cloneDeep-C-OZ4saa.js";import"./_initCloneObject-CKp18hZk.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-tKdMMErg.js";import"./dayjs.min-D1RcYm3-.js";import"./merge-DLQdEICg.js";import"./identity-DKeuBCMA.js";import"./useDownloadList-H4sKPNS1.js";import"./useMutation-BUHlmdy0.js";import"./useInfiniteQuery-uGV9Hjor.js";import"./SynapseTableConstants-2qH3fDlQ.js";import"./SkeletonInlineBlock-93re9Qzh.js";import"./LayersTwoTone-CUigHRcz.js";import"./index-D0JCpg9J.js";const yt={title:"Download/DownloadConfirmationUI",component:w,tags:["autodocs"],argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0,onAddToDownloadCart:a(),onCancel:a()}},t={args:{isAuthenticated:!0,fileCount:1e4,fileSize:1e9,isLoadingStats:!1,isAddingToDownloadCart:!1}},i={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}},o={args:{isAuthenticated:!0,fileCount:0,fileSize:void 0,isLoadingStats:!0,isAddingToDownloadCart:!1}},e={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!0}},r={args:{isAuthenticated:!1,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}};var n,s,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
