import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-DWWFUrcd.js";import{d as s}from"./ToastMessage-B7Yw94I7.js";import{R as n,a as t}from"./RequirementItem-D00g0jak.js";import{P as O}from"./Paper-DtY-LtaX.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-CGW-jd1f.js";import"./SynapseConstants-BGT0B1ls.js";import"./OrientationBanner-BD5rKond.js";import"./index-CbaPxVoO.js";import"./index-De1Zq6J_.js";import"./iframe-E8oGcv1j.js";import"./spreadSx-CwcO6WA9.js";import"./react-u_1KPmwS.js";import"./FullWidthAlert-B3XOziTT.js";import"./Alert-aEGKfIxj.js";import"./createTheme-D7EPNL7b.js";import"./DefaultPropsProvider-CcfTARJV.js";import"./useSlot-3tuE-c2M.js";import"./useForkRef-C6KDMbou.js";import"./createSimplePaletteValueFilter-BqHZsxiX.js";import"./createSvgIcon-BFK5bQ8n.js";import"./Close-FdA3HKi-.js";import"./IconButton-BZ-jzTu8.js";import"./useTimeout-Dv9ZmSsd.js";import"./ButtonBase-DX38kEaJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B6nvT1pK.js";import"./Stack-BDxqZFkj.js";import"./extendSxProp-CRDkfaxY.js";import"./getThemeProps-CTXbjC0Y.js";import"./useTheme-BR8tto29.js";import"./Box-CR3xkiF7.js";import"./AlertTitle-BUhA3yvl.js";import"./Typography-Dqy4KUKl.js";import"./index-vnh1qUaf.js";import"./useTheme-xNbW70z-.js";import"./ClickAwayListener-BFmT95cs.js";import"./getReactElementRef-z7kCRJG8.js";import"./index-DYa4EW63.js";import"./index-C8LquKll.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-eiV7889k.js";import"./Tooltip-DU9LrmZk.js";import"./index-E7O__Phm.js";import"./useControlled-DMRUVe0w.js";import"./Popper-CcioxHhD.js";import"./Button-D-bx5MZt.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-DALRboo3.js";import"./QueryClientProvider-FUbP8408.js";import"./Link-DvLvJsbQ.js";import"./Collapse-CcwUCllw.js";import"./_baseUniq-CXI3CQZE.js";import"./_Uint8Array-Bpe28QCt.js";import"./isArray-DKCXyRjL.js";import"./_getTag-DSOAbaVw.js";import"./isEqual-Dg8dgpub.js";import"./merge-DckDRy64.js";import"./_initCloneObject-oQqNGLLJ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DY8MnK-W.js";import"./inputBaseClasses-BoUH4D83.js";import"./calculateFriendlyFileSize-DQKz6tFX.js";import"./CheckCircleTwoTone-D_cE2H8y.js";import"./InfoTwoTone-DH56TLJq.js";import"./useMutation-BX9VoBnj.js";import"./dayjs.min-D6shjXWv.js";import"./chunk-AYJ5UCUI-Qk_pfhhj.js";import"./cloneDeep-DuWLqYh-.js";import"./Skeleton-BAzE4-tl.js";import"./SkeletonButton-CdPlqbtL.js";import"./SkeletonInlineBlock-Gww6vO0T.js";import"./SkeletonTable-HXIXFq7J.js";import"./times-B1u6bRp2.js";import"./toInteger-TRAVrRY7.js";import"./isSymbol-CrdGgY1-.js";import"./SkeletonParagraph-SLAYWWnh.js";import"./uniqueId-C5MfKxqV.js";import"./toString-CktccFA4.js";import"./CSSTransition-D3e6kBv7.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-COUEnqej.js";import"./Avatar-DPft-3LI.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
