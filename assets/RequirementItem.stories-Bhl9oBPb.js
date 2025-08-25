import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-CFoWdFUM.js";import{d as s}from"./ToastMessage-BK_WTYUZ.js";import{R as n,a as t}from"./RequirementItem-C-27gZ1c.js";import{P as O}from"./Paper-Dik6GTog.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-2TyPXxt4.js";import"./SynapseConstants-psamMqWq.js";import"./OrientationBanner-BFYFv59n.js";import"./index-xjd9PeKK.js";import"./index-CNMTJ46z.js";import"./iframe-BJviWTqp.js";import"./spreadSx-CwcO6WA9.js";import"./react-CT8wgIwV.js";import"./FullWidthAlert-Bpuvfh1_.js";import"./Alert-ITpKP4sT.js";import"./createTheme-zhaCRmkM.js";import"./DefaultPropsProvider-DPtW3vxh.js";import"./useSlot-spgws4xY.js";import"./useForkRef-qN9Lg4wt.js";import"./createSimplePaletteValueFilter-BeNeyznZ.js";import"./createSvgIcon-D8PnHcXI.js";import"./Close-C7dYT7w0.js";import"./IconButton-C7Nw5lJf.js";import"./useTimeout-D5CpEaw_.js";import"./ButtonBase-BLePZJCP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BIKFNcu_.js";import"./Stack-BGpq_-To.js";import"./extendSxProp-wdNZDvym.js";import"./getThemeProps-Ccd5Mcjt.js";import"./useTheme-aLami-tv.js";import"./Box-BcE9yvph.js";import"./AlertTitle-BKpJvv99.js";import"./Typography-DtntXaKd.js";import"./index-CJ1gOIxh.js";import"./useTheme-ICdOAtbl.js";import"./ClickAwayListener-CVd4muIH.js";import"./getReactElementRef-C3gFMLhu.js";import"./index-BCwsOVmd.js";import"./index-By9oCF5Q.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CxbUMiqI.js";import"./Tooltip-DxSAO_PP.js";import"./index-Dgkqn9pp.js";import"./useControlled-KwZho2LT.js";import"./Popper-DFlTrhfk.js";import"./Button-BNOHA6TW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BrsdH-SX.js";import"./QueryClientProvider-C16TczSl.js";import"./Link-gmr1YpL6.js";import"./Collapse-Ccqe5DI2.js";import"./_baseUniq-D_rYiE-m.js";import"./_Uint8Array-BBrlSxhv.js";import"./isArray-CSGooqXb.js";import"./_getTag-hHn1v1FD.js";import"./isEqual-gq7oDh_t.js";import"./merge-BhfWzDjT.js";import"./_initCloneObject-sDs-YUjP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CulMwIXg.js";import"./inputBaseClasses-Cc_4do0e.js";import"./calculateFriendlyFileSize-Ccucj4mI.js";import"./CheckCircleTwoTone-B5WN67QL.js";import"./InfoTwoTone-D8kHcvjo.js";import"./useMutation-BLmWgYC_.js";import"./dayjs.min-CLjfTRTa.js";import"./chunk-AYJ5UCUI-C3d9T5HW.js";import"./cloneDeep-D2b6hgrH.js";import"./Skeleton-D2BAnm5-.js";import"./SkeletonButton-CInNVeOd.js";import"./SkeletonInlineBlock-Dmq4yw5R.js";import"./SkeletonTable-BiMI13wD.js";import"./times-BZh3QtlN.js";import"./toInteger-4gdszNNA.js";import"./isSymbol-CuEkol2g.js";import"./SkeletonParagraph-Cg4KuJje.js";import"./uniqueId-CNMUEalO.js";import"./toString-C1YEDMGF.js";import"./CSSTransition-BaesdFW7.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BBOGeaEI.js";import"./Avatar-DqTzfOqr.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
