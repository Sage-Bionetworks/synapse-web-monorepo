import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DBLKtCwW.js";import{d as s}from"./ToastMessage-CBkF38Ft.js";import{R as n,a as t}from"./RequirementItem-Bes0jtuj.js";import{P as O}from"./Paper-CV-B9zFQ.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Cbsnwjt3.js";import"./SynapseConstants-C9xfz5QX.js";import"./OrientationBanner-CW1l7Mqe.js";import"./index-BxSI5hVp.js";import"./index-2EIvOttE.js";import"./iframe-DpptiLI-.js";import"./spreadSx-CwcO6WA9.js";import"./react-4bRY5ye_.js";import"./FullWidthAlert-CITnWOfR.js";import"./Alert-C72wtLHY.js";import"./createTheme-imD3fCVn.js";import"./DefaultPropsProvider-CLKCV2Mi.js";import"./useSlot-DoBOlu1a.js";import"./useForkRef-CQBF0-9j.js";import"./createSimplePaletteValueFilter-DQPU1mUg.js";import"./createSvgIcon-DUQGFfak.js";import"./Close-B_G3Iub9.js";import"./IconButton-B0ZmnlWb.js";import"./useTimeout-LX_WXvhJ.js";import"./ButtonBase-2Al4R6rm.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CnOo6aT0.js";import"./Stack-5zoDyFv3.js";import"./extendSxProp-D7O4jEYO.js";import"./getThemeProps-Dtxv23iM.js";import"./useTheme-Ciobwydk.js";import"./Box-BG32HO33.js";import"./AlertTitle-BXFaL8WV.js";import"./Typography-BT3suWQB.js";import"./index-dfgY8llv.js";import"./useTheme-D_4w8MCh.js";import"./ClickAwayListener-CC69yVg5.js";import"./getReactElementRef-d5BjQxB2.js";import"./index-ByoKiG1s.js";import"./index-IMcdB26k.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-vaXZjNYk.js";import"./Tooltip-Ck3Rzo7Y.js";import"./index-DShgwOlG.js";import"./useControlled-DD36GO9l.js";import"./Popper-BHQPU2s8.js";import"./Button-CqnPIptI.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-D8KNzrSM.js";import"./QueryClientProvider-D12m3ESQ.js";import"./Link-CJL1KQjT.js";import"./Collapse-DeiysQkN.js";import"./_baseUniq-C08lmC_s.js";import"./_Uint8Array-CIxlcGRg.js";import"./isArray-DyfWaqSJ.js";import"./_getTag-EYLlIWYl.js";import"./isEqual-DaLj24Av.js";import"./merge-DvZzeZy3.js";import"./_initCloneObject-D4MI0F4s.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BOVbR8I6.js";import"./inputBaseClasses-CoMJ3N6h.js";import"./calculateFriendlyFileSize-CCsv7DKx.js";import"./CheckCircleTwoTone-BwGHibj0.js";import"./InfoTwoTone-DKwRulIF.js";import"./useMutation-DVU_Ff2F.js";import"./dayjs.min-Ddg9VyqD.js";import"./chunk-AYJ5UCUI-DsC9wD1H.js";import"./cloneDeep-VNPHphhQ.js";import"./Skeleton-COrlt5zJ.js";import"./SkeletonButton-eMZfqXYY.js";import"./SkeletonInlineBlock-BZf1vyiu.js";import"./SkeletonTable-CG6ex7Gn.js";import"./times-B1VCnVOQ.js";import"./toInteger-YoVQ3c91.js";import"./isSymbol-DZ4IeBvL.js";import"./SkeletonParagraph-DViUFeRz.js";import"./uniqueId-BBCl9AOY.js";import"./toString-D4gyrDio.js";import"./CSSTransition-C3pAsmou.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-W_-3hhza.js";import"./Avatar-Dt-DNwi4.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
