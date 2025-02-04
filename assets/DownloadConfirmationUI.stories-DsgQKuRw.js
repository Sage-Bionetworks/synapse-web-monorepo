import{D as w}from"./DownloadConfirmationUI-D4ltNw64.js";import{f as a}from"./index-SqWy7oMY.js";import"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";import"./useFiles-slSSO9fC.js";import"./useQuery-6SsvXKRa.js";import"./utils-Bx1BRerw.js";import"./OrientationBanner-BJ9gW8Zk.js";import"./spreadSx-CwcO6WA9.js";import"./FullWidthAlert-BK7MPzqu.js";import"./Alert-CeaOJcfo.js";import"./createTheme-CiCSa2mH.js";import"./index-GEGPABih.js";import"./styled-CGsSw8UJ.js";import"./mergeSlotProps-B0sAykN9.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CEBgoE3Z.js";import"./createSvgIcon-CARPmhEq.js";import"./Paper-DfbYtKZb.js";import"./IconButton-BX1jAiHM.js";import"./ButtonBase-BtHCltnO.js";import"./TransitionGroupContext-TdpM2qIg.js";import"./useIsFocusVisible-ByxglBfx.js";import"./Stack-DiY0npK2.js";import"./Box-D0Jm1lZU.js";import"./AlertTitle-D5vyrqh6.js";import"./Typography-NAJ1jGoo.js";import"./utils-D1_9yZbw.js";import"./index-BIzb42Jq.js";import"./Grow-8_BQPAWr.js";import"./ClickAwayListener-D7YV5tOA.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DOWgCEwD.js";import"./index-CBeLH2jy.js";import"./useControlled-1Y2rT-1r.js";import"./useId-BkqTTtmk.js";import"./Button-0w0n5xUv.js";import"./VerificationSubmission-CjmU3lv6.js";import"./SynapseConstants-CmafGRmS.js";import"./StringUtils-CkZesiyJ.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-D_Raqnaw.js";import"./CheckCircleTwoTone-BBYOrcPX.js";import"./calculateFriendlyFileSize-B5Pk7maD.js";import"./Skeleton-DyxL95vN.js";import"./inputBaseClasses-yPUgEGHH.js";import"./Fade-BvpYcI5h.js";import"./Link-BXmnhkxu.js";import"./cloneDeep-CrT5BP8N.js";import"./_initCloneObject-CKp18hZk.js";import"./_baseTimes-36S_kd0L.js";import"./isArray-ggc3KxVp.js";import"./dayjs.min-d18Up55D.js";import"./chunk-K6AXKMTT-B5GX6HSq.js";import"./merge-DLQdEICg.js";import"./identity-DKeuBCMA.js";import"./SynapseTableConstants-DJtgLj7f.js";import"./useMutation-DjwfMZ6R.js";import"./useInfiniteQuery-CQ2Ll2AC.js";import"./SkeletonInlineBlock-BQhbazM2.js";import"./LayersTwoTone-wgKYXiHv.js";const Wt={title:"Download/DownloadConfirmationUI",component:w,tags:["autodocs"],argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0,onAddToDownloadCart:a(),onCancel:a()}},t={args:{isAuthenticated:!0,fileCount:1e4,fileSize:1e9,isLoadingStats:!1,isAddingToDownloadCart:!1}},i={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}},o={args:{isAuthenticated:!0,fileCount:0,fileSize:void 0,isLoadingStats:!0,isAddingToDownloadCart:!1}},e={args:{isAuthenticated:!0,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!0}},r={args:{isAuthenticated:!1,fileCount:1e4,fileSize:void 0,isLoadingStats:!1,isAddingToDownloadCart:!1}};var n,s,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
