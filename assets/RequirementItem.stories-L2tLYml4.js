import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Dcglv2Xl.js";import{d as s}from"./ToastMessage-BXAHQrc6.js";import{R as n,a as t}from"./RequirementItem-7P3e85S-.js";import{P as O}from"./Paper-dcVYzYMj.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BQg2l_mC.js";import"./SynapseConstants-234bgPC3.js";import"./OrientationBanner-Ba_WLX69.js";import"./index-DRuXmisc.js";import"./index-BEjLIAR5.js";import"./iframe-CwGKoaIF.js";import"./spreadSx-CwcO6WA9.js";import"./react-fP1UZYcI.js";import"./FullWidthAlert-BueunzTy.js";import"./Alert-CL0zz-8I.js";import"./createTheme-gXr55H0m.js";import"./DefaultPropsProvider-BlmQpHue.js";import"./useSlot-D6L-ORg2.js";import"./useForkRef-I1dv9UDr.js";import"./createSimplePaletteValueFilter-BOXH4uIn.js";import"./createSvgIcon-C6p_F7p2.js";import"./Close-CmIFNtKx.js";import"./IconButton-BVkKIzAo.js";import"./useTimeout-BgSeNLNv.js";import"./ButtonBase-ksp5zqqD.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jnMXXNDb.js";import"./Stack-BIZFhOmX.js";import"./extendSxProp-DelytbQg.js";import"./getThemeProps-Bsoevkdv.js";import"./useTheme-C3VYIg5j.js";import"./Box-DFln69uE.js";import"./AlertTitle-CO6GLx2J.js";import"./Typography-CoIbKr7l.js";import"./index-qd5JykJS.js";import"./useTheme-DXEcceH2.js";import"./ClickAwayListener-P3VkkFbs.js";import"./getReactElementRef-BLYsTnAm.js";import"./index-TKWJ5sXr.js";import"./index-CPXD-uRb.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BbBJN9Bb.js";import"./Tooltip-D0dK4Slt.js";import"./index-BE838Nkr.js";import"./useControlled-BHX0J-8f.js";import"./Popper-Bzy4Jbyt.js";import"./Button-C5PiRzoR.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CrW5nkBB.js";import"./QueryClientProvider-6UyNw7x6.js";import"./Link-Bq8ymdbG.js";import"./Collapse-RaZHU9Wm.js";import"./_baseUniq-gWU3IFtJ.js";import"./_Uint8Array-B2-F3GF1.js";import"./isArray-29EfBsKk.js";import"./_getTag-BwYISoq0.js";import"./isEqual-BxMVxjXA.js";import"./merge-DyG2PJVv.js";import"./_initCloneObject-Cokl0rF2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BQZZIYWG.js";import"./inputBaseClasses-BI4UakU4.js";import"./calculateFriendlyFileSize-DTUMM0RF.js";import"./CheckCircleTwoTone-B_hMD9N9.js";import"./InfoTwoTone-DxkkeeGX.js";import"./useMutation-B59eIzkm.js";import"./dayjs.min-BBXC49jR.js";import"./chunk-AYJ5UCUI-D1bRiwJ_.js";import"./cloneDeep-DzrI_yLo.js";import"./Skeleton-CR-iryCa.js";import"./SkeletonButton-CIgE9K_V.js";import"./SkeletonInlineBlock-Bw4UXacQ.js";import"./SkeletonTable-SXv9ewKp.js";import"./times-BzMgaTyJ.js";import"./toInteger-DIt91Y5R.js";import"./isSymbol-BHh9s-Qb.js";import"./SkeletonParagraph-DbvwwXxs.js";import"./uniqueId-DoI5JSaB.js";import"./toString-D0f1gbCj.js";import"./CSSTransition-CjLTZBHA.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DSPHi4Y-.js";import"./Avatar-D0seZheI.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
