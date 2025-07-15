import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-DL5oFoWz.js";import{d as s}from"./ToastMessage-yBb3XFPh.js";import{R as n,a as t}from"./RequirementItem-CP01v7BB.js";import{P as O}from"./Paper-BY_NDt3Z.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-CTnFA4bu.js";import"./SynapseConstants-CvwR6iLA.js";import"./OrientationBanner-DV5DjAg7.js";import"./index-JKjjlUJ_.js";import"./index-C8bD_8RJ.js";import"./iframe-6NIrtisn.js";import"./spreadSx-CwcO6WA9.js";import"./react-L-tuU4f9.js";import"./FullWidthAlert-BYAzIMj3.js";import"./Alert-W7Fn9LAQ.js";import"./createTheme-rdXb4Z3n.js";import"./DefaultPropsProvider-BSJaRsTl.js";import"./useSlot-xRCA8-yW.js";import"./useForkRef-iNjtCg2u.js";import"./createSimplePaletteValueFilter-CnJEMf1_.js";import"./createSvgIcon-o81qpFfO.js";import"./Close-DkoDsS75.js";import"./IconButton-mB-mk9DV.js";import"./useTimeout-tSu105ec.js";import"./ButtonBase-s_N_k51K.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CJgqf_3y.js";import"./Stack-NnGJ5qne.js";import"./extendSxProp-CjG0KNf_.js";import"./getThemeProps-aTPmA6S6.js";import"./useTheme-B2ck8NEL.js";import"./Box-Cm0v7wfp.js";import"./AlertTitle-uJo3K6bg.js";import"./Typography-MIMEr5ls.js";import"./index-Co4awF9m.js";import"./useTheme-BMLVXfjV.js";import"./ClickAwayListener-j1E8ceys.js";import"./getReactElementRef-BXbGSLa4.js";import"./index-DNI5SuWC.js";import"./index-B01S0N5E.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqSfdBtc.js";import"./Tooltip-X3XBQeaA.js";import"./index-D3moNsfw.js";import"./useControlled-C2I-Fb0l.js";import"./Popper-BJsw6KEJ.js";import"./Button-BAI1H06J.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-c3aTz-1u.js";import"./QueryClientProvider-B0vgEJwN.js";import"./Link-DT1xrAE-.js";import"./Collapse-CkW4wqJc.js";import"./_baseUniq-Bh5IYYWn.js";import"./_Uint8Array-DvFvmNGE.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C0Gz5PSj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-D9xtNUPh.js";import"./isEqual-CRqgLt-Z.js";import"./merge-E1ABMEbN.js";import"./_initCloneObject-DPoQn5Vc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DteZvXvx.js";import"./inputBaseClasses-Ck21ZDTq.js";import"./calculateFriendlyFileSize-BhDEBuU0.js";import"./CheckCircleTwoTone-BX5nbuHN.js";import"./InfoTwoTone-DLogZ7mx.js";import"./useMutation-BvDubB4-.js";import"./dayjs.min-8GkHU6E7.js";import"./chunk-AYJ5UCUI-BLLTkN9d.js";import"./cloneDeep-Pu5ABENM.js";import"./Skeleton-0mTOQZYg.js";import"./SkeletonButton-Bfp3EH9p.js";import"./SkeletonInlineBlock-Ca-t4Vos.js";import"./SkeletonTable-DvygAVSa.js";import"./times-Bdnoy5Qt.js";import"./toInteger-m5ZzQBDn.js";import"./isSymbol-Bn_IRhge.js";import"./SkeletonParagraph-C3t9e3oU.js";import"./uniqueId-DomxvQ27.js";import"./toString-RkF0fKjm.js";import"./CSSTransition-Ch3R3rXN.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BEbA_E5J.js";import"./Avatar-DnQ_1lSu.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
