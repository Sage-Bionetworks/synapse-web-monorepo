import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-BjlVU4HM.js";import{d as s}from"./ToastMessage-DeS0uHlc.js";import{R as n,a as t}from"./RequirementItem-K2Z07iJ1.js";import{P as O}from"./Paper-BMRqfWZY.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-DpBz1drY.js";import"./SynapseConstants-vnB_HOZG.js";import"./OrientationBanner-sCFG9l64.js";import"./index-CCWJyL-a.js";import"./index-BO2jx3fA.js";import"./iframe-CMsX0Oka.js";import"./spreadSx-CwcO6WA9.js";import"./react-u2dYu96Q.js";import"./FullWidthAlert-B611txsw.js";import"./Alert-CvfxxPZQ.js";import"./createTheme-ZS9J3-x4.js";import"./DefaultPropsProvider-C0MHQuNJ.js";import"./useSlot-CE8vY1FE.js";import"./useForkRef-C9RBuidL.js";import"./createSimplePaletteValueFilter-CHeJzd4k.js";import"./createSvgIcon-VZpkVwoM.js";import"./Close-Bf_4vcco.js";import"./IconButton-DEarKBZE.js";import"./useTimeout--pwFdnEc.js";import"./ButtonBase-C5kwased.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-N9LIirTi.js";import"./Stack-BYRbdvAb.js";import"./extendSxProp-DuJfRwpZ.js";import"./getThemeProps-DTRjvb2Z.js";import"./useTheme-CiXWVsbt.js";import"./Box-BezVuSzo.js";import"./AlertTitle-BfTTJ_di.js";import"./Typography-Y67zn1Pq.js";import"./index-D4Z-obyz.js";import"./useTheme-DntSS-nU.js";import"./ClickAwayListener-CRR3Owmd.js";import"./getReactElementRef-6FS4DLqJ.js";import"./index-hadyzqeZ.js";import"./index-B3VrTmIJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CB6hmzG5.js";import"./Tooltip-B5x4vZvl.js";import"./index-BjbFLSec.js";import"./useControlled-BYef6mrc.js";import"./Popper-DCGmpkTH.js";import"./Button-DAcq9_ut.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-CWngti3E.js";import"./QueryClientProvider-I7KmusgC.js";import"./Link-BXGMA5HG.js";import"./Collapse-CuIUJv_4.js";import"./_baseUniq-CP0o8ne-.js";import"./_Uint8Array-CtWZVNIN.js";import"./isArray-Dy8AbNFY.js";import"./_getTag-DuJ7DDp8.js";import"./isEqual-CAyciZWq.js";import"./merge-BM5nIJiA.js";import"./_initCloneObject-DiIfsv6A.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-NrLV8S1Z.js";import"./inputBaseClasses-CJlZY6KW.js";import"./calculateFriendlyFileSize-jiJD9GoL.js";import"./CheckCircleTwoTone-DQFwaHUN.js";import"./InfoTwoTone-zfNNXw23.js";import"./useMutation-ncIAEF0o.js";import"./dayjs.min-CuWcNf58.js";import"./chunk-AYJ5UCUI-0Rlz8zG8.js";import"./cloneDeep-CxL4ZTRa.js";import"./Skeleton-CH7Sx92t.js";import"./SkeletonButton-Cev5E2ib.js";import"./SkeletonInlineBlock-BgBFGkaA.js";import"./SkeletonTable-CnOcADy6.js";import"./times-DDGS7ZaW.js";import"./toInteger-BNoAMWsW.js";import"./isSymbol-DJL41Hm8.js";import"./SkeletonParagraph-DYW1Ev-j.js";import"./uniqueId-CTW364Je.js";import"./toString-UaoHtER3.js";import"./CSSTransition-B_6pIIOu.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CRJsYsyB.js";import"./Avatar-xyjNXLmw.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
