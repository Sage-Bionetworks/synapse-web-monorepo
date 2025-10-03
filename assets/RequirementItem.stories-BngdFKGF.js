import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CtIGluzr.js";import{d as s}from"./ToastMessage-B9-WS8nP.js";import{R as n,a as t}from"./RequirementItem-CnOsREKr.js";import{P as O}from"./Paper-wIcb_i9m.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BcOp3J9q.js";import"./SynapseConstants-Djz1eDCb.js";import"./OrientationBanner-0SatnoWN.js";import"./index-Cgp7Fr2y.js";import"./index-DVkvcA_X.js";import"./iframe-DXTuuIB8.js";import"./spreadSx-CwcO6WA9.js";import"./react-JO-gccfv.js";import"./FullWidthAlert-eBuHzIDT.js";import"./Alert-BY5VRYB8.js";import"./createTheme-CLaEDdPQ.js";import"./DefaultPropsProvider-CuIKnw1u.js";import"./useSlot-C_1XBrUD.js";import"./useForkRef-D52SqoyK.js";import"./createSimplePaletteValueFilter-aDgbEVGf.js";import"./createSvgIcon-C5j-w5qY.js";import"./Close-DfOEo3ot.js";import"./IconButton-DGIQFJcy.js";import"./useTimeout-DXFIOS9o.js";import"./ButtonBase-DDJ8Zik5.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-WyX1suUl.js";import"./Stack-DiF77Lkk.js";import"./extendSxProp-DSZ__TYT.js";import"./getThemeProps-OHGuBYlk.js";import"./useTheme-C1P9mfNV.js";import"./Box-DEh918aS.js";import"./AlertTitle-D_ekppPW.js";import"./Typography-B1PObzbp.js";import"./index-B3S2GMAT.js";import"./useTheme-B62f1yoy.js";import"./ClickAwayListener--qQuedCY.js";import"./getReactElementRef-DTGtnvkV.js";import"./index-BzJMSVrG.js";import"./index-MAwSiZZZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BWoXoFY0.js";import"./Tooltip-DGMS6sKu.js";import"./index-2_-RNHTx.js";import"./useControlled-DMZfhKvt.js";import"./Popper-Bj4y9GNA.js";import"./Button-D1pRKzJ5.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-2oV4dAcJ.js";import"./QueryClientProvider-NT-Ok-dU.js";import"./Link-HDokgQ6f.js";import"./Collapse-DMxkdKx1.js";import"./_baseUniq-B-3xrBnc.js";import"./_Uint8Array-DYT8ocWE.js";import"./isArray-DO6yf-4A.js";import"./_getTag-DUjOkMuI.js";import"./isEqual-CWB7x7bo.js";import"./merge-CJQInoiv.js";import"./_initCloneObject-dH7HCR6T.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DuYHphZs.js";import"./inputBaseClasses-DyQj29gk.js";import"./calculateFriendlyFileSize-CzSgR5ke.js";import"./CheckCircleTwoTone-B5xperQI.js";import"./InfoTwoTone-k2lsfCRJ.js";import"./useMutation-CRoKKj0V.js";import"./dayjs.min-DpfhmZH9.js";import"./chunk-AYJ5UCUI-BxVsfoL4.js";import"./cloneDeep-BIlo70rr.js";import"./Skeleton-BUuixYV7.js";import"./SkeletonButton-73IIYRvI.js";import"./SkeletonInlineBlock-uFg6tSx6.js";import"./SkeletonTable-CRr4I9pB.js";import"./times-o6xd_Wsx.js";import"./toInteger-DdMUJFLp.js";import"./isSymbol-0KRDkVlb.js";import"./SkeletonParagraph-BN7CAjVN.js";import"./uniqueId-_0XsBeQ8.js";import"./toString-eb1JqBSx.js";import"./CSSTransition-LiDjEjcI.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DWrW7qDX.js";import"./Avatar-BhObhZ8B.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
