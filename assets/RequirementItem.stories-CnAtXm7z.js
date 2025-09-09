import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-BWYq7xh8.js";import{d as s}from"./ToastMessage-LLyNqkWQ.js";import{R as n,a as t}from"./RequirementItem-CRUIhlUl.js";import{P as O}from"./Paper-f9F1rBkl.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-mkQvhsfp.js";import"./SynapseConstants-BE1dCm6q.js";import"./OrientationBanner-ByfGCVhh.js";import"./index-CuiiqCn7.js";import"./index-DJB1qF2z.js";import"./iframe-c5QjURjd.js";import"./spreadSx-CwcO6WA9.js";import"./react-BBKcbch5.js";import"./FullWidthAlert-CAacvDiW.js";import"./Alert-D3J6MamD.js";import"./createTheme-CgsFvkwA.js";import"./DefaultPropsProvider-BnDOUeJq.js";import"./useSlot-BJ1CRAdA.js";import"./useForkRef-fM2IrCKB.js";import"./createSimplePaletteValueFilter-DGGr4raR.js";import"./createSvgIcon-D0F9NJty.js";import"./Close-CD6hdFxs.js";import"./IconButton-D9Wo9i95.js";import"./useTimeout-DgY8E2MB.js";import"./ButtonBase-R1zAEHht.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DF87QtHc.js";import"./Stack-YMNswqAL.js";import"./extendSxProp-BTTcXXOw.js";import"./getThemeProps-CElrGHOX.js";import"./useTheme-DouzHGjt.js";import"./Box-B2zh_4B1.js";import"./AlertTitle-N6XY5bvj.js";import"./Typography-u2K4Np03.js";import"./index-KdogHW2F.js";import"./useTheme-D2vwtQz8.js";import"./ClickAwayListener-DLQRhqqv.js";import"./getReactElementRef-hSa5zvl9.js";import"./index-DSCMbWyT.js";import"./index-VaRDmsAV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BuzsStj7.js";import"./Tooltip-DJ_zQ3Xt.js";import"./index-BFJo53wU.js";import"./useControlled-DM7TiFWR.js";import"./Popper-BpGY4_Yk.js";import"./Button-DWZzM1YQ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-CuGZc_4o.js";import"./QueryClientProvider-BpXWIHcQ.js";import"./Link-B1acHzcw.js";import"./Collapse-DdpJ9wk5.js";import"./_baseUniq-B0jgxF2n.js";import"./_Uint8Array-CbO669vH.js";import"./isArray-BQlUsOuq.js";import"./_getTag-C3oiTjc9.js";import"./isEqual-CHbIB85-.js";import"./merge-Ovpzi0cD.js";import"./_initCloneObject-DpqlTgho.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-4pjdx6uQ.js";import"./inputBaseClasses-BU9UMIzD.js";import"./calculateFriendlyFileSize-p0rEqxiA.js";import"./CheckCircleTwoTone-C5JDYzCA.js";import"./InfoTwoTone-VMAFVZ4G.js";import"./useMutation-DGzs3t2j.js";import"./dayjs.min-DGLiMftP.js";import"./chunk-AYJ5UCUI-Dcahf3fb.js";import"./cloneDeep-DJFF_FoF.js";import"./Skeleton-BV5yBlWE.js";import"./SkeletonButton-Cqqs6UmB.js";import"./SkeletonInlineBlock-CtE-j46P.js";import"./SkeletonTable-BbBRqYUQ.js";import"./times-BK2KZWZz.js";import"./toInteger-BE81kN5Y.js";import"./isSymbol-DdAHaBoP.js";import"./SkeletonParagraph-BSRB5goQ.js";import"./uniqueId-hAupmQuU.js";import"./toString-Bh5H_-sK.js";import"./CSSTransition-ClX7iLmG.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CoaKXOuE.js";import"./Avatar-CeTMf-rf.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
