import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-CH8rN77J.js";import{d as s}from"./ToastMessage-C9DqX38T.js";import{R as n,a as t}from"./RequirementItem-DILsVpeI.js";import{P as O}from"./Paper-84Q1WhB6.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-BlF8TPl5.js";import"./SynapseConstants-CPmaicpC.js";import"./OrientationBanner-CJ1ESR_n.js";import"./index-DiXyMZPQ.js";import"./index-CmvBv4Ni.js";import"./iframe-n5mwkj0K.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cs0n9kFQ.js";import"./FullWidthAlert-B8v9piRr.js";import"./Alert-xAoisqCg.js";import"./createTheme-DekxhsWr.js";import"./DefaultPropsProvider-DurKmMsP.js";import"./useSlot-BA0kN4AN.js";import"./useForkRef-BCeimwSg.js";import"./createSimplePaletteValueFilter-BqCAAfVF.js";import"./createSvgIcon-DgFDwm57.js";import"./Close-BIhyvXJQ.js";import"./IconButton-i3mZ6Ezw.js";import"./useTimeout-CcoqqpEg.js";import"./ButtonBase-XDzeNizs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BGQJ8oah.js";import"./Stack-CBcPcYcV.js";import"./extendSxProp-Dh-qlJOe.js";import"./getThemeProps-jaih5qkn.js";import"./useTheme-DS1z3Y1X.js";import"./Box-BhLrdYXi.js";import"./AlertTitle-ByGWvG3o.js";import"./Typography-CLeqY5_n.js";import"./index-C7caafkY.js";import"./useTheme-BvD-CNZH.js";import"./ClickAwayListener-CBV7B09E.js";import"./getReactElementRef-C0n-5JA5.js";import"./index-C3w_Pjwj.js";import"./index-nIDE90q0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BY_78XwL.js";import"./Tooltip-BvV6KBuI.js";import"./index-tHFahJkl.js";import"./useControlled-CyRm7kwD.js";import"./Popper-BGRgwHFZ.js";import"./Button-CI5AcPJ7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-BWXoVlNJ.js";import"./QueryClientProvider-Bs1L9MD9.js";import"./Link-CTR14mAv.js";import"./Collapse-aOJwFLzA.js";import"./_baseUniq-CKpk02ye.js";import"./_Uint8Array-CyN-wuBs.js";import"./isArray-BkbdtJTH.js";import"./_getTag-CltEB6Q0.js";import"./isEqual-PuORISZF.js";import"./merge-CKiJq7bQ.js";import"./_initCloneObject-CazOt6n1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BtxUg5az.js";import"./inputBaseClasses-Dwl_TlYP.js";import"./calculateFriendlyFileSize-Du7Eq0-o.js";import"./CheckCircleTwoTone-7SP1PUwv.js";import"./InfoTwoTone-B8ckXdFt.js";import"./useMutation-DImeJWvL.js";import"./dayjs.min-BYlmw0LD.js";import"./chunk-AYJ5UCUI-CG-M0tOp.js";import"./cloneDeep-v-ROnd35.js";import"./Skeleton-DMznnk0J.js";import"./SkeletonButton-CAxZMTH8.js";import"./SkeletonInlineBlock-DYgxuoaF.js";import"./SkeletonTable-CfJST3Et.js";import"./times-DKm1aQOU.js";import"./toInteger-D3BzJgox.js";import"./isSymbol-CzPCjI13.js";import"./SkeletonParagraph-Be8mt8hr.js";import"./uniqueId-DCbPiQr7.js";import"./toString-Di8UJasC.js";import"./CSSTransition-CYAEc_qN.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-onD0hQcf.js";import"./Avatar-G8iFFARo.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
