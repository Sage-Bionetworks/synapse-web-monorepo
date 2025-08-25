import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-Dq_VYrmZ.js";import{d as s}from"./ToastMessage-DsUxgzL4.js";import{R as n,a as t}from"./RequirementItem-D8YAo9lN.js";import{P as O}from"./Paper-BV_pZjF8.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CwxvEgQc.js";import"./SynapseConstants-vVsO59Ha.js";import"./OrientationBanner-B_J_bwDs.js";import"./index-B7gR80B6.js";import"./index-T3Ekci5F.js";import"./iframe-BRmCfrSH.js";import"./spreadSx-CwcO6WA9.js";import"./react-CnLrMEk_.js";import"./FullWidthAlert-eR_HT4PI.js";import"./Alert-Dj0vjMkf.js";import"./createTheme-BREx2ycU.js";import"./DefaultPropsProvider-CX5IAnvY.js";import"./useSlot-BzWgIWOe.js";import"./useForkRef-DDl9gleu.js";import"./createSimplePaletteValueFilter-FRuSWM5h.js";import"./createSvgIcon-CieythTx.js";import"./Close-Cqyflw8w.js";import"./IconButton-BwUndgtU.js";import"./useTimeout-DdbWpuJn.js";import"./ButtonBase-DwffoWQe.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClVna9-0.js";import"./Stack-DyTHHcW6.js";import"./extendSxProp-DoET83MS.js";import"./getThemeProps-DYLxosxu.js";import"./useTheme-CX3kqFhT.js";import"./Box-ChsFOQNH.js";import"./AlertTitle-DcEfJigg.js";import"./Typography-C1Pvtdxt.js";import"./index-BNpXIv6h.js";import"./useTheme-DMsHeVup.js";import"./ClickAwayListener-BhgKURRJ.js";import"./getReactElementRef-OtGns4Bk.js";import"./index-CNd3jG5r.js";import"./index-CawBriFs.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C9ssHFFN.js";import"./Tooltip-BBwryouL.js";import"./index-D171HpF6.js";import"./useControlled-CFSu4r3X.js";import"./Popper-ny7uQlkX.js";import"./Button-wUlNA4eh.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CTXt0L_P.js";import"./QueryClientProvider-CUniIWpF.js";import"./Link-Dry2tAGw.js";import"./Collapse-RvI5LdCX.js";import"./_baseUniq-M12b02au.js";import"./_Uint8Array-C48UOvul.js";import"./isArray-CbnDUNxj.js";import"./_getTag-Bn7Wript.js";import"./isEqual-C5IvVB7F.js";import"./merge-CQHxP4eV.js";import"./_initCloneObject-B3OWGSQP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CY_ivPaJ.js";import"./inputBaseClasses-NlXmQuAw.js";import"./calculateFriendlyFileSize-DBYvYRTA.js";import"./CheckCircleTwoTone-Dekm6AEb.js";import"./InfoTwoTone-DTPjvGeQ.js";import"./useMutation-B99jPK5W.js";import"./dayjs.min-DqgjXCuP.js";import"./chunk-AYJ5UCUI-BLo-f8sS.js";import"./cloneDeep-4H6nKNc_.js";import"./Skeleton-DxmjjPyf.js";import"./SkeletonButton-yHtX54NI.js";import"./SkeletonInlineBlock-CekNC129.js";import"./SkeletonTable-eMFwXknU.js";import"./times-X_FSlMgD.js";import"./toInteger-Cl6lFJ6-.js";import"./isSymbol-7e0TIp2a.js";import"./SkeletonParagraph-DBfeQYbL.js";import"./uniqueId-CT1TlhCC.js";import"./toString-CTYFimvj.js";import"./CSSTransition-DZtbOrx0.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-4jqIAntU.js";import"./Avatar-CRgPyNuJ.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
