import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BchEcHpA.js";import{d as s}from"./ToastMessage-C1TF_OWp.js";import{R as n,a as t}from"./RequirementItem-DzGIl5rH.js";import{P as O}from"./Paper-BpBXdwqK.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CUZOk7Jz.js";import"./SynapseConstants-DSt8DWul.js";import"./OrientationBanner-r53K2xh_.js";import"./index-Crkga5QL.js";import"./index-GsaBG8zw.js";import"./iframe-xzCVUG4Y.js";import"./spreadSx-CwcO6WA9.js";import"./react-DA-_H-S7.js";import"./FullWidthAlert-DduwY2NZ.js";import"./Alert-toDvvqGc.js";import"./createTheme-BFE69o89.js";import"./DefaultPropsProvider-BE0ry_NZ.js";import"./useSlot-Bnb_BrAZ.js";import"./useForkRef-BcSumWpH.js";import"./createSimplePaletteValueFilter-CVxb3bkw.js";import"./createSvgIcon-C7XgeMGx.js";import"./Close-B6lYOQEJ.js";import"./IconButton-MaLeM1Vu.js";import"./useTimeout-BCdgOQTg.js";import"./ButtonBase-CIatjECH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BaB00T0S.js";import"./Stack-JkKUVtGc.js";import"./extendSxProp-Rcv_0IQY.js";import"./getThemeProps-DMOl_SnU.js";import"./useTheme-BLfClJc5.js";import"./Box-CuWsxWCp.js";import"./AlertTitle-BwehuD66.js";import"./Typography-Cw2XNjg-.js";import"./index-DZevvUUp.js";import"./useTheme-BbLqDdC9.js";import"./ClickAwayListener-CUDdCrci.js";import"./getReactElementRef-Cfv1c7hh.js";import"./index-DGgDoFzh.js";import"./index-BBJA5RKi.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DD1LUtFX.js";import"./Tooltip-CHuqp0uT.js";import"./index-C987JzfV.js";import"./useControlled-CM_dYV_J.js";import"./Popper-BCcvQoKi.js";import"./Button-DpEdso7U.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BqRAiEMW.js";import"./QueryClientProvider-GT2kLsWY.js";import"./Link-D7hbXA01.js";import"./Collapse-D6GgNh6a.js";import"./_baseUniq-D3KJmumC.js";import"./_Uint8Array-BDzM8Wqv.js";import"./isArray-C4HGfEIw.js";import"./_getTag-D5H9nNTR.js";import"./isEqual-Bq7Iw1tg.js";import"./merge-BRE3rMyO.js";import"./_initCloneObject-DQGdPQGo.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CMbKBr8t.js";import"./inputBaseClasses-K2fdwEmf.js";import"./calculateFriendlyFileSize-DdbMjbNi.js";import"./CheckCircleTwoTone-wO_FwCG2.js";import"./InfoTwoTone-BFsX0rHi.js";import"./useMutation-vxsUYoHz.js";import"./dayjs.min-D-599zIW.js";import"./chunk-AYJ5UCUI-BybrNjxD.js";import"./cloneDeep-XgF1c9dW.js";import"./Skeleton-B2QfW8I_.js";import"./SkeletonButton-Cad-L5Bg.js";import"./SkeletonInlineBlock-B_0RFZc4.js";import"./SkeletonTable-DU7o9Zh-.js";import"./times-Bmbk05o0.js";import"./toInteger-CpLI7O7b.js";import"./isSymbol-DVY3Twrh.js";import"./SkeletonParagraph-CCYqSYVV.js";import"./uniqueId-WpR7Girk.js";import"./toString-CXxaPKIm.js";import"./CSSTransition-im2I3wqR.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CxF1UTL4.js";import"./Avatar-CSk6Qfj0.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
