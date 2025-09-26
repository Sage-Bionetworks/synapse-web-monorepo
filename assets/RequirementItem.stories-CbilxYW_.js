import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CeBhDznu.js";import{d as s}from"./ToastMessage-BLQ30_zb.js";import{R as n,a as t}from"./RequirementItem-BPla6i4e.js";import{P as O}from"./Paper-QA66fCso.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Cg_eAUDA.js";import"./SynapseConstants-BaFW-Hk1.js";import"./OrientationBanner-7A6I2Sts.js";import"./index-DrKws1ZS.js";import"./index-ByFgbSi1.js";import"./iframe-DQjbfcQ9.js";import"./spreadSx-CwcO6WA9.js";import"./react-4DRvf2RG.js";import"./FullWidthAlert-BmX-nqa8.js";import"./Alert-cq0Vou2L.js";import"./createTheme-i8RyPaYL.js";import"./DefaultPropsProvider-6pJ8FZcR.js";import"./useSlot-C0bdZSh0.js";import"./useForkRef-23rwbX6-.js";import"./createSimplePaletteValueFilter-Bc_Jnzdb.js";import"./createSvgIcon-Dx2LBnYP.js";import"./Close-D3BjbVZl.js";import"./IconButton-DxywuGM_.js";import"./useTimeout-CSjKXMwL.js";import"./ButtonBase-CTwLXAXZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DEGgbvx4.js";import"./Stack-DWAVfk6y.js";import"./extendSxProp-Dtt1Z7Rz.js";import"./getThemeProps-B9cF21qQ.js";import"./useTheme-d8TpmLbK.js";import"./Box-CZ8nomX1.js";import"./AlertTitle-Dpusuo1a.js";import"./Typography-CY333YIv.js";import"./index-OanGvPr5.js";import"./useTheme-BSYxzT2u.js";import"./ClickAwayListener-DiPtj9kP.js";import"./getReactElementRef-DnnqkrYN.js";import"./index-DXPb9-O7.js";import"./index-D164aDtB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B4czxb_I.js";import"./Tooltip-Z97fGrMz.js";import"./index-Dmk_WNz3.js";import"./useControlled-CEl4StEV.js";import"./Popper-Dj-99SyI.js";import"./Button-CYldgbV6.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DKynZEci.js";import"./QueryClientProvider--7WDvxPi.js";import"./Link-CtNtuiDF.js";import"./Collapse-CjU9t1fz.js";import"./_baseUniq-B5okjzLX.js";import"./_Uint8Array-CpLANe0M.js";import"./isArray-slhQyjYX.js";import"./_getTag-EGniEwS5.js";import"./isEqual-CZZqW4AH.js";import"./merge-UMFakapv.js";import"./_initCloneObject-wkm3rYXe.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-55a661Ax.js";import"./inputBaseClasses-QMrXpAyg.js";import"./calculateFriendlyFileSize-CWPY0s9D.js";import"./CheckCircleTwoTone-UKzD70d6.js";import"./InfoTwoTone-D2qSN7nc.js";import"./useMutation-BXPMCqV1.js";import"./dayjs.min-BfZA8BkT.js";import"./chunk-AYJ5UCUI-OavDP728.js";import"./cloneDeep-QdVPM6qo.js";import"./Skeleton-DdQ3uvfq.js";import"./SkeletonButton-vhmms5hD.js";import"./SkeletonInlineBlock-CwWUxANM.js";import"./SkeletonTable-B2O8d0ro.js";import"./times-DrYQZAZT.js";import"./toInteger-DC8bWbZD.js";import"./isSymbol-j4e5Mk_1.js";import"./SkeletonParagraph-Mm1FQiPz.js";import"./uniqueId-BSuY5neH.js";import"./toString-z8vEG3W4.js";import"./CSSTransition-BBV0aXLU.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D57iuzOj.js";import"./Avatar-Zz2CSqdT.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
