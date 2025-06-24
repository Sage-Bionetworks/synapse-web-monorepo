import{j as a}from"./jsx-runtime-BOssrIDV.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-CNbhnvFD.js";import{d as s}from"./ToastMessage-D_w9Lvk-.js";import{R as n,a as t}from"./RequirementItem-GzVTeVkX.js";import{P as O}from"./Paper-DmRNZxxk.js";import"./index-BXr5u63t.js";import"./iframe-jXusbjiN.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-Dk7Y_Nx5.js";import"./SynapseConstants-iLcJVUdE.js";import"./OrientationBanner-BA69Y1B_.js";import"./index-ChgzdHEn.js";import"./spreadSx-CwcO6WA9.js";import"./react-BiBE7bay.js";import"./FullWidthAlert-1swh-oi6.js";import"./Alert-Dj-jhBZf.js";import"./createTheme-Dkl7Y4yb.js";import"./DefaultPropsProvider-YuAh3bo4.js";import"./useSlot-71x-NEBk.js";import"./useForkRef-B7f5jpRB.js";import"./createSimplePaletteValueFilter-XZnksDVV.js";import"./createSvgIcon-BIqWz6KN.js";import"./Close-CsXX81aH.js";import"./IconButton-DppKuphb.js";import"./useTimeout-COW-I31o.js";import"./ButtonBase-CgqjwQZw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DHE3ItbA.js";import"./Stack-BVGU81rW.js";import"./extendSxProp-BNATOJDG.js";import"./getThemeProps-CygbOGhA.js";import"./useTheme-DncJ3SY5.js";import"./Box-B1ywKeef.js";import"./AlertTitle-jQTaOtnM.js";import"./Typography-DHX5VFhU.js";import"./index-C-KGKi86.js";import"./useTheme-BIdGBwOw.js";import"./ClickAwayListener-B-JuY7qH.js";import"./getReactElementRef-Dg_8_k5E.js";import"./index-Du3UB5VM.js";import"./index-Cws3gyQD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DHXcHxbb.js";import"./Tooltip-C4Ve-pRM.js";import"./index-BFRX0HOw.js";import"./useControlled-CcUhfYFU.js";import"./Popper-DSdT4H1W.js";import"./Button-Dkr2nqwA.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-Bl24eGam.js";import"./utils-Bjh2wWFO.js";import"./Link-DnPRzKJi.js";import"./Collapse-C70VOik0.js";import"./_baseUniq-vKA3Gk_K.js";import"./_Uint8Array-1QdDsNlj.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DYtMQQjs.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DSeeBTIW.js";import"./isEqual-BbZSPr7_.js";import"./merge-DBNXSsLA.js";import"./_initCloneObject-oBnhfAdD.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CZbPgA0i.js";import"./inputBaseClasses-DM6ptO9y.js";import"./calculateFriendlyFileSize-B3XNtTeU.js";import"./CheckCircleTwoTone-DLXzCQ85.js";import"./InfoTwoTone-DKzuQ3Gz.js";import"./useMutation-sYVm67BA.js";import"./dayjs.min-DPtZqfJ-.js";import"./chunk-AYJ5UCUI-BueI0DTQ.js";import"./cloneDeep-DIWeTv6i.js";import"./Skeleton-BrzN3685.js";import"./SkeletonButton-25q5Z91b.js";import"./SkeletonInlineBlock-yFeGFAHU.js";import"./SkeletonTable-mybGCaOm.js";import"./times-j6Y7xitd.js";import"./toInteger-BBkkgGRT.js";import"./isSymbol-DQ5xTbb7.js";import"./SkeletonParagraph-isatE1yP.js";import"./uniqueId-Cz5Z3YsK.js";import"./toString-kyORcZny.js";import"./CSSTransition-BoYXTEkS.js";import"./ConditionalWrapper-tJCnLfwP.js";import"./LockTwoTone-CXqUTci2.js";import"./Avatar-BBuV8bU6.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
