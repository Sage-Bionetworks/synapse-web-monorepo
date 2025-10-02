import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-g90MzaAQ.js";import{d as s}from"./ToastMessage-qZHtJJL8.js";import{R as n,a as t}from"./RequirementItem-DBH1AEtM.js";import{P as O}from"./Paper-BytkjR6o.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-C5GiG6iR.js";import"./SynapseConstants-DR3ZY5to.js";import"./OrientationBanner-DTwv04dt.js";import"./index-Cttw0ji8.js";import"./index-DhkrNZP9.js";import"./iframe-7mSOVxB4.js";import"./spreadSx-CwcO6WA9.js";import"./react-DNGujwIQ.js";import"./FullWidthAlert-DqSJWw0w.js";import"./Alert-Bcu7YUGe.js";import"./createTheme-BEG23Ggb.js";import"./DefaultPropsProvider-D8qfDHRM.js";import"./useSlot-Cgv1l8f6.js";import"./useForkRef-DUgLIqtH.js";import"./createSimplePaletteValueFilter-DZHcTxQ7.js";import"./createSvgIcon-qNmQe6T_.js";import"./Close-BDpIkTE7.js";import"./IconButton-DUJ3IKSK.js";import"./useTimeout-Dsks5eoH.js";import"./ButtonBase-ChUbS1mW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BSbUa5om.js";import"./Stack-ChEyF6Lm.js";import"./extendSxProp-k92RHa9w.js";import"./getThemeProps-Bvz_Yv-K.js";import"./useTheme-CJKuA382.js";import"./Box-GerujGRq.js";import"./AlertTitle-C1GLrwYc.js";import"./Typography-N2x2sTVo.js";import"./index-mhILb2ra.js";import"./useTheme-DCbcQagQ.js";import"./ClickAwayListener-tdz5sGJK.js";import"./getReactElementRef-DX99WyYx.js";import"./index-lsxcFOrl.js";import"./index-DLyeVumG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-j8gNrfr7.js";import"./Tooltip-DytzHFyA.js";import"./index-DCR3wo31.js";import"./useControlled-qZ-DKamJ.js";import"./Popper-DajLVUbX.js";import"./Button-Dze9PDvM.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-IRTxbv8J.js";import"./QueryClientProvider-BvgHDx5W.js";import"./Link-C0xIS8o2.js";import"./Collapse-CMsDtAkp.js";import"./_baseUniq-BNFfhkx0.js";import"./_Uint8Array-CYqUimyu.js";import"./isArray-DyXgv0Dp.js";import"./_getTag-B054JqLn.js";import"./isEqual-CZijml2n.js";import"./merge-DLdcbeqX.js";import"./_initCloneObject-D3LEGgk4.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DivBPYoP.js";import"./inputBaseClasses-DS1hE1Od.js";import"./calculateFriendlyFileSize-CRiqTUTG.js";import"./CheckCircleTwoTone-h7KWLQ_B.js";import"./InfoTwoTone-DiY69-1L.js";import"./useMutation-Bd72eRV1.js";import"./dayjs.min-DzXHqPwj.js";import"./chunk-AYJ5UCUI-rnSQre8c.js";import"./cloneDeep-qVXU3mzn.js";import"./Skeleton-BELkBN0u.js";import"./SkeletonButton-DhAxEJNt.js";import"./SkeletonInlineBlock-pqAvYpmW.js";import"./SkeletonTable-Bz4BZ-L2.js";import"./times-iyTCHHDT.js";import"./toInteger-2PGZO6RB.js";import"./isSymbol-DkZtFhjU.js";import"./SkeletonParagraph-C7MtYQwW.js";import"./uniqueId-BK5vgBGN.js";import"./toString-Dstvm05g.js";import"./CSSTransition-DkUb5Hmj.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-sbtMabQv.js";import"./Avatar-4lzCVxNc.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
