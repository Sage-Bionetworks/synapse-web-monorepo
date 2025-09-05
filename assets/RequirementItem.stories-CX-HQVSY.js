import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-D7VIxLcB.js";import{d as s}from"./ToastMessage-CwdZkeLo.js";import{R as n,a as t}from"./RequirementItem-DWWxUg8E.js";import{P as O}from"./Paper-C20E8Cgc.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-FKGDO0i0.js";import"./SynapseConstants-1tup86se.js";import"./OrientationBanner-wFOLRJbA.js";import"./index-Dm9xm2_f.js";import"./index-BfVXz5Ag.js";import"./iframe-BPJnb6Jo.js";import"./spreadSx-CwcO6WA9.js";import"./react-DPdF_HDn.js";import"./FullWidthAlert-D7gQIHFu.js";import"./Alert-60dOS0Xa.js";import"./createTheme-DJo9Xwcd.js";import"./DefaultPropsProvider-D0yRXNne.js";import"./useSlot-C80kZXPi.js";import"./useForkRef-Bpzs6qo7.js";import"./createSimplePaletteValueFilter-r-PmHHmL.js";import"./createSvgIcon-Do0_SfU5.js";import"./Close-CPHWO9Va.js";import"./IconButton-DeQtcGLQ.js";import"./useTimeout-CsEW3D_k.js";import"./ButtonBase-Cv7odYKj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CIClC7Gy.js";import"./Stack-De9kMocI.js";import"./extendSxProp-CuFQzNrO.js";import"./getThemeProps-CtclWu-w.js";import"./useTheme-B8fsbezS.js";import"./Box-CS1Km4YM.js";import"./AlertTitle-CMg5aJHW.js";import"./Typography-D_5e3gyE.js";import"./index-DFR37g5z.js";import"./useTheme-C81SUhxs.js";import"./ClickAwayListener--cQ_J2-K.js";import"./getReactElementRef-B6TLCFd5.js";import"./index-Cea427Jc.js";import"./index-t2RIHcQ-.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C07EywNj.js";import"./Tooltip-D0rMrlze.js";import"./index-vHk_D0dD.js";import"./useControlled-CQJ1STOz.js";import"./Popper-Z30S9dVL.js";import"./Button-D2bAM9JV.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DELzMMV2.js";import"./QueryClientProvider-qgsuxj5j.js";import"./Link-Ce1G5oI1.js";import"./Collapse-DPxPsRRj.js";import"./_baseUniq-h81h2T5v.js";import"./_Uint8Array-DrmeFWPX.js";import"./isArray-BuXI0-0e.js";import"./_getTag-r_4sb1yJ.js";import"./isEqual-BIi-LOer.js";import"./merge-BeGPZ09a.js";import"./_initCloneObject-CmBTonNO.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C4mFIZyt.js";import"./inputBaseClasses-Cr2M0koQ.js";import"./calculateFriendlyFileSize-Dm5rKT8Q.js";import"./CheckCircleTwoTone-Dwa6jGH6.js";import"./InfoTwoTone-BPDpi3Ad.js";import"./useMutation-BxjyqccJ.js";import"./dayjs.min-BFzgc83H.js";import"./chunk-AYJ5UCUI-B1XrWbGW.js";import"./cloneDeep-Mq5iqCKt.js";import"./Skeleton-nQxz36_4.js";import"./SkeletonButton-BzXCbQ30.js";import"./SkeletonInlineBlock-Bl8WXAnb.js";import"./SkeletonTable-CaSRwDap.js";import"./times-uccdpEI3.js";import"./toInteger-CC76gooO.js";import"./isSymbol-hZJz7tyA.js";import"./SkeletonParagraph-CqIyv9bE.js";import"./uniqueId-BhnyMBVF.js";import"./toString-BjDBuBmB.js";import"./CSSTransition-DpOBXQ7M.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B-DHqeuE.js";import"./Avatar-oXAQpYsP.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
