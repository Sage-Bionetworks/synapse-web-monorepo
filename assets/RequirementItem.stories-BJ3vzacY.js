import{j as a}from"./jsx-runtime-DL_WWTnU.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-CFAWcmRb.js";import{d as s}from"./ToastMessage-jSv778QD.js";import{R as n,a as t}from"./RequirementItem-BTh96cq9.js";import{P as O}from"./Paper-yym3rEzG.js";import"./index-Ca0vgBE2.js";import"./iframe-vp13wGio.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-CmfAQj3A.js";import"./SynapseConstants-Dc-ttipk.js";import"./OrientationBanner-CVST6OVh.js";import"./index-D_DvTLsn.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ca9hZXji.js";import"./FullWidthAlert-DsbPAcmw.js";import"./Alert-BFVVhWFo.js";import"./createTheme-Dhyjv3xA.js";import"./DefaultPropsProvider-DTJ4Ledd.js";import"./useSlot-CBgVbdPc.js";import"./useForkRef-zY8Srn5B.js";import"./createSimplePaletteValueFilter-DYPT81bM.js";import"./createSvgIcon-w5N7BSNF.js";import"./Close-DUALyDjv.js";import"./IconButton-BxoUEiy4.js";import"./useTimeout-qrufc8Nw.js";import"./ButtonBase-Dc5nu1oB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-eRbwk2PT.js";import"./Stack-gdOpa8to.js";import"./extendSxProp-BA-YUD7e.js";import"./getThemeProps-yoa4ipGw.js";import"./useTheme-BV623lpF.js";import"./Box-qYBNUyDe.js";import"./AlertTitle-Bx6M0cYd.js";import"./Typography-EZSXaI3O.js";import"./index-BFzhBnlS.js";import"./useTheme-BNFTziT0.js";import"./ClickAwayListener-3oYh5tN2.js";import"./getReactElementRef-CWtkUCNU.js";import"./index-BVUsC3uq.js";import"./index-D3FxUHBg.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DEL0Kn5_.js";import"./Tooltip-BqzA40Wu.js";import"./index-BrcwApQH.js";import"./useControlled-T5yeju5l.js";import"./Popper-K4ot8jqr.js";import"./Button-B0IPsMBh.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ChvZ1ijm.js";import"./useQuery-ChVcGVsr.js";import"./utils-Dzrkucg8.js";import"./Link-DMdo9AUW.js";import"./Collapse-DHp1Ae9b.js";import"./_baseUniq-BEUHERND.js";import"./_Uint8Array-fCYA57F5.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ByfTA19Y.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BDlUNutQ.js";import"./isEqual-DBsGFs7h.js";import"./merge-DdeE93vC.js";import"./_initCloneObject-DGj_mOuF.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CHNlYjPZ.js";import"./inputBaseClasses-CdZo6ywH.js";import"./calculateFriendlyFileSize-CXGCRFJo.js";import"./CheckCircleTwoTone-BFS_hxgT.js";import"./InfoTwoTone-DLPiaRPA.js";import"./useMutation-B0m0Vaj5.js";import"./dayjs.min-BpDP_-lG.js";import"./chunk-AYJ5UCUI-fN7Lo2X2.js";import"./cloneDeep-Cm9WdDYd.js";import"./Skeleton-D1Ehl1Kx.js";import"./SkeletonButton-B1xoYq3v.js";import"./SkeletonInlineBlock-8J0yZpPM.js";import"./SkeletonTable-DIBDdjVd.js";import"./times-Bb29orUj.js";import"./toInteger-BHkXq0wj.js";import"./isSymbol-Bab_6cqM.js";import"./SkeletonParagraph-BcJYVCsz.js";import"./uniqueId-qvDQnh-N.js";import"./toString-DnR_ni0i.js";import"./CSSTransition-CRhZ9v9P.js";import"./ConditionalWrapper-DklbM5_x.js";import"./LockTwoTone-DoQqHYLk.js";import"./Avatar-B6upXp3G.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
