import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Da4j8K_j.js";import{d as s}from"./ToastMessage-ml7saS2o.js";import{R as n,a as t}from"./RequirementItem-IhoVpT59.js";import{P as O}from"./Paper-d1YgxWUg.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-MN-D_6YK.js";import"./SynapseConstants-Dpo-4-F5.js";import"./OrientationBanner-e9CrJnDC.js";import"./index-7ZdLlOWA.js";import"./index-BgSjUAuI.js";import"./iframe-B2LJi_cW.js";import"./spreadSx-CwcO6WA9.js";import"./react-D1t48EgC.js";import"./FullWidthAlert-h7Wmupj2.js";import"./Alert-BZ2_6v5t.js";import"./createTheme-B99gvztp.js";import"./DefaultPropsProvider-BwisLJoN.js";import"./useSlot-BoOzURrI.js";import"./useForkRef-BWEHjpp5.js";import"./createSimplePaletteValueFilter-BqHZnY8j.js";import"./createSvgIcon-C3_cIczA.js";import"./Close-CYHpGdnA.js";import"./IconButton-BzXaqEAH.js";import"./useTimeout-B9vSmm-b.js";import"./ButtonBase-C9ld3sfo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CETpK90r.js";import"./Stack-D3AUxOwk.js";import"./extendSxProp-BG_8YU1P.js";import"./getThemeProps-tRf3h7Hu.js";import"./useTheme-B6PPiyBh.js";import"./Box-DFEf2Lca.js";import"./AlertTitle-DMPrYQyA.js";import"./Typography-f_AbgqFl.js";import"./index-y7GTiB0o.js";import"./useTheme-Crep25JH.js";import"./ClickAwayListener-p7Foeo8l.js";import"./getReactElementRef-TAJJAPvj.js";import"./index-3jGRQJto.js";import"./index-DJx0aOeo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BMIyt8WB.js";import"./Tooltip-BHlbKeDB.js";import"./index-0KhxVFZN.js";import"./useControlled-CCREmJrl.js";import"./Popper-C-cVjFlV.js";import"./Button-i6WpB6BV.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-wFNB3FP4.js";import"./QueryClientProvider-Ck7orVaD.js";import"./Link-vTlZ9-pl.js";import"./Collapse-nircCAWM.js";import"./_baseUniq-DYuCTHDT.js";import"./_Uint8Array-JB1OFgus.js";import"./isArray-CaLyojua.js";import"./_getTag-B3_puU6c.js";import"./isEqual-CnJzKHIU.js";import"./merge-D8QSzr4_.js";import"./_initCloneObject-J-koMtFl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BQGvqggR.js";import"./inputBaseClasses-CW6CuO6Z.js";import"./calculateFriendlyFileSize-Blvrn06H.js";import"./CheckCircleTwoTone-qAglj5RI.js";import"./InfoTwoTone-CCdFqQd_.js";import"./useMutation-DlDOzlwr.js";import"./dayjs.min-fnKViZjk.js";import"./chunk-AYJ5UCUI-BIXu2e9s.js";import"./cloneDeep-BVaUE9Dw.js";import"./Skeleton-C9fzDANc.js";import"./SkeletonButton-BzRDYJ2Y.js";import"./SkeletonInlineBlock-DGkFismK.js";import"./SkeletonTable-D9tNVUKR.js";import"./times-DR5UoTQG.js";import"./toInteger-BHTcfcZB.js";import"./isSymbol-BWjS2f0j.js";import"./SkeletonParagraph-BqHjIyk3.js";import"./uniqueId--R7Av8wA.js";import"./toString-BpcfFMdu.js";import"./CSSTransition-wFYEwpzY.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-YCUrajKW.js";import"./Avatar-RN61E2mW.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
