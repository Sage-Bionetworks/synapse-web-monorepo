import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-Bv_l-j33.js";import{d as s}from"./ToastMessage-CRtkLV_R.js";import{R as n,a as t}from"./RequirementItem-YfEj5LCQ.js";import{P as O}from"./Paper-BOku699h.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-CBJ856AZ.js";import"./SynapseConstants-ikhpTMSi.js";import"./OrientationBanner-Bevn196W.js";import"./index-CKUFoVF8.js";import"./index-Bx6rHiCc.js";import"./iframe-CmlFyz22.js";import"./spreadSx-CwcO6WA9.js";import"./react-BegF-bgY.js";import"./FullWidthAlert-BcJLpMsp.js";import"./Alert-BwcDOzUk.js";import"./createTheme-DW7Vrlzw.js";import"./DefaultPropsProvider-ConE9Vnz.js";import"./useSlot-BSVMef9l.js";import"./useForkRef-Cvl4b66U.js";import"./createSimplePaletteValueFilter-B4ekfyK6.js";import"./createSvgIcon-Dp5r_z1b.js";import"./Close-D_HVX8Of.js";import"./IconButton-Dugf8IuD.js";import"./useTimeout-CVQUoJUi.js";import"./ButtonBase-DdvhFXiU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DuBYbEIJ.js";import"./Stack-BjnY0P-K.js";import"./extendSxProp-D0JP_WBX.js";import"./getThemeProps-BXfajUm-.js";import"./useTheme-C309Wcvj.js";import"./Box-DvJ0ErCQ.js";import"./AlertTitle-B7zYsG91.js";import"./Typography-C6mIpVDc.js";import"./index-BK-imeYc.js";import"./useTheme-Z9lGwbET.js";import"./ClickAwayListener-muvdENkP.js";import"./getReactElementRef-BKX2ZP_E.js";import"./index-DmUisdaW.js";import"./index-CqNaTZ9O.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-p1Rl7bOw.js";import"./Tooltip-DAC7ZfT2.js";import"./index-Cnxet5a5.js";import"./useControlled-DMcYHGA2.js";import"./Popper-DZo1fAVo.js";import"./Button-WSwqzpWb.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DQjr7ojL.js";import"./QueryClientProvider-BsTfFufl.js";import"./Link-BHuJNOVj.js";import"./Collapse-YIUEr55v.js";import"./_baseUniq-BFKSe-s-.js";import"./_Uint8Array-eEAzFJ_P.js";import"./isArray-Cf6JBw9S.js";import"./_getTag-CWmy7owM.js";import"./isEqual-BCIIkq8x.js";import"./merge-DVgg1N05.js";import"./_initCloneObject-b_ydy7AP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-hyn8D1TG.js";import"./inputBaseClasses-Diynf-VS.js";import"./calculateFriendlyFileSize-Ydbps-9H.js";import"./CheckCircleTwoTone-CVHWRI0h.js";import"./InfoTwoTone-B5e9fPYt.js";import"./useMutation-BqdsOGtV.js";import"./dayjs.min-BisTLcGd.js";import"./chunk-AYJ5UCUI-B4H_lHh-.js";import"./cloneDeep-T5a5yhy5.js";import"./Skeleton-BBd8yoFk.js";import"./SkeletonButton-C4nKU5jr.js";import"./SkeletonInlineBlock-BUkjr-hA.js";import"./SkeletonTable-DtBiNBMf.js";import"./times-BVZNZLd-.js";import"./toInteger-ByGriXs5.js";import"./isSymbol-Cer8UQw-.js";import"./SkeletonParagraph-Dui_ViLs.js";import"./uniqueId-C_4t0xlp.js";import"./toString-j-h78WmF.js";import"./CSSTransition-Df5KaRkG.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DsQGvzI_.js";import"./Avatar-C2nWqCLk.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
