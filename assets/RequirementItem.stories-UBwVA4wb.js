import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Bs_NhmPW.js";import{d as s}from"./ToastMessage-BX5LsO3m.js";import{R as n,a as t}from"./RequirementItem-Dnntim1Z.js";import{P as O}from"./Paper-Cw0PaRlC.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-CBpHv58P.js";import"./SynapseConstants-BB8wbkbM.js";import"./OrientationBanner-Du3f-tR9.js";import"./index-Fm8jQeAM.js";import"./index-BtWix9sQ.js";import"./iframe-Cv08yFa4.js";import"./spreadSx-CwcO6WA9.js";import"./react-BlbjaeUH.js";import"./FullWidthAlert-BnEnBl4x.js";import"./Alert-DVtdStBt.js";import"./createTheme-ktoUkPej.js";import"./DefaultPropsProvider-BXNHIkBI.js";import"./useSlot-DKWeBjnc.js";import"./useForkRef-BuSSinlC.js";import"./createSimplePaletteValueFilter-CnmFT5tX.js";import"./createSvgIcon-HzOZLsjw.js";import"./Close-BVcsR9b3.js";import"./IconButton-CZsUpVAN.js";import"./useTimeout--jObxLEa.js";import"./ButtonBase-CgmUOH-l.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-E03wEDwK.js";import"./Stack-BeDeiKwc.js";import"./extendSxProp-UwSZzXSO.js";import"./getThemeProps-BWNd5nOj.js";import"./useTheme-CuAibK35.js";import"./Box-DuA_Yce2.js";import"./AlertTitle-Dv_TOEDI.js";import"./Typography-B226LmTj.js";import"./index-DEPF9eb4.js";import"./useTheme-D-5USdIe.js";import"./ClickAwayListener-BNCBCfT8.js";import"./getReactElementRef-Da_aLcHY.js";import"./index-B2f0J6Vc.js";import"./index-CzUAW5xC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CYCPiNwF.js";import"./Tooltip-DmIpRQZQ.js";import"./index-cY0kajKP.js";import"./useControlled-Ce6JMIHi.js";import"./Popper-0EWmF52X.js";import"./Button-CQOwTSmt.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-D-yII9Pz.js";import"./QueryClientProvider-DDjkFc3A.js";import"./Link-CzF4559g.js";import"./Collapse-Bz60PVFd.js";import"./_baseUniq-j_CNo3xg.js";import"./_Uint8Array-DlN12aa0.js";import"./isArray-B3BvSCZr.js";import"./_getTag-BkVkr5Zs.js";import"./isEqual-B2VBGXuO.js";import"./merge-Cvx1cDVZ.js";import"./_initCloneObject-M-LN7Wl9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-gDQRZwXb.js";import"./inputBaseClasses-CJII4L4B.js";import"./calculateFriendlyFileSize-Auh6VuaX.js";import"./CheckCircleTwoTone-juGziiOy.js";import"./InfoTwoTone-CHYqAfpV.js";import"./useMutation-onc65qmw.js";import"./dayjs.min-DmHnQHi3.js";import"./chunk-AYJ5UCUI-d_EWPP8k.js";import"./cloneDeep-mpSPLoHa.js";import"./Skeleton-BB8Tg6m6.js";import"./SkeletonButton-DHHySF3U.js";import"./SkeletonInlineBlock-BQZvMyJy.js";import"./SkeletonTable-BDeiFL3I.js";import"./times-cSS90Xer.js";import"./toInteger-D-O9-r00.js";import"./isSymbol-tqL8RBQO.js";import"./SkeletonParagraph-CnajRI0l.js";import"./uniqueId-DJ0Hwc_g.js";import"./toString-BoO405QA.js";import"./CSSTransition-jWS9ErIX.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Fii-sV0w.js";import"./Avatar-BwkTChI_.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.PENDING,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,k,C;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...(C=(k=e.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,E,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,I,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [{
      variant: 'outlined',
      children: 'Accept terms',
      onClick: () => {
        displayToast('Accept terms clicked');
      }
    }]
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const cr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,cr as __namedExportsOrder,pr as default};
