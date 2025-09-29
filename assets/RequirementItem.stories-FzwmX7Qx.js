import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CtAwuiri.js";import{d as s}from"./ToastMessage-CZlP_pnT.js";import{R as n,a as t}from"./RequirementItem-CQEItHA4.js";import{P as O}from"./Paper-ABqWba6I.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DkJCHeA3.js";import"./SynapseConstants-DAiqgyg1.js";import"./OrientationBanner-D4wTKRw8.js";import"./index-DRNEewT0.js";import"./index-BiZonhDH.js";import"./iframe-KhA6412S.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bf6tZNz9.js";import"./FullWidthAlert-CEBDcxDb.js";import"./Alert-Si5Sm7uX.js";import"./createTheme-1jm5ezYP.js";import"./DefaultPropsProvider-CWzj9DzQ.js";import"./useSlot-xBg9ATiI.js";import"./useForkRef-BESM7ku1.js";import"./createSimplePaletteValueFilter-Cihnsp1l.js";import"./createSvgIcon-CrhVCK6n.js";import"./Close-C2_S8l8h.js";import"./IconButton-CzceikyK.js";import"./useTimeout-DJBvZtwQ.js";import"./ButtonBase-DbSCIXDh.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CWj0IvOC.js";import"./Stack-DWSzmDyR.js";import"./extendSxProp-A_0H_slr.js";import"./getThemeProps-Db880qGR.js";import"./useTheme-BMWmfRcC.js";import"./Box-BUnumDhd.js";import"./AlertTitle-BszRCW5W.js";import"./Typography-BETUzylk.js";import"./index-B3yBNt-L.js";import"./useTheme-B6M16tYP.js";import"./ClickAwayListener-DxBKDWMy.js";import"./getReactElementRef-d88flgGN.js";import"./index-Y07cJu9Y.js";import"./index-Xo5PhUpn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DyIUulWJ.js";import"./Tooltip-Bo4_h0TM.js";import"./index-Bs9Rydsp.js";import"./useControlled-DxMP8c3u.js";import"./Popper-I1BUdcss.js";import"./Button-BryWV2Kx.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DtcY72pw.js";import"./QueryClientProvider-CnMpTV32.js";import"./Link-DyfbRNUw.js";import"./Collapse-A2nC22g8.js";import"./_baseUniq-B6yOCfKH.js";import"./_Uint8Array-BuKzuZ_U.js";import"./isArray-CDuRcB0M.js";import"./_getTag-Bf7qzLHR.js";import"./isEqual-Bin5dEGo.js";import"./merge-CHIVU8Rn.js";import"./_initCloneObject-CMoDBQQ6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BtLpzY4K.js";import"./inputBaseClasses-CplbFm5w.js";import"./calculateFriendlyFileSize-CxNXhpME.js";import"./CheckCircleTwoTone-CJ92NpYr.js";import"./InfoTwoTone-39J4YKRz.js";import"./useMutation-CHMb5Grd.js";import"./dayjs.min-7SCA9Rrv.js";import"./chunk-AYJ5UCUI-C95cDugv.js";import"./cloneDeep-CR3aRAiR.js";import"./Skeleton-xaP9f2sv.js";import"./SkeletonButton-DJcFYvzr.js";import"./SkeletonInlineBlock-Dh6VUFge.js";import"./SkeletonTable-DGdS0HXy.js";import"./times-BMqDTTIB.js";import"./toInteger-Bduhqu2B.js";import"./isSymbol-BhkmuJt6.js";import"./SkeletonParagraph-DpugCB1g.js";import"./uniqueId-lLF_zJ3l.js";import"./toString-DimUG_hT.js";import"./CSSTransition-CIqSmyHr.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-tUlop-yt.js";import"./Avatar-Cqj_8gSz.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
