import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-GKzUe7wB.js";import{d as s}from"./ToastMessage-BuBQVtgy.js";import{R as n,a as t}from"./RequirementItem-eCY_yVAa.js";import{P as O}from"./Paper-5zmbLrbd.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-4auXP0HE.js";import"./SynapseConstants-DgvD2GSf.js";import"./OrientationBanner-CdA_N81g.js";import"./index-Btojeglz.js";import"./index-DY9mdyPi.js";import"./iframe-foaHJy_d.js";import"./spreadSx-CwcO6WA9.js";import"./react-D8btsb_W.js";import"./FullWidthAlert-BNsug2BQ.js";import"./Alert-BSA3wL1o.js";import"./createTheme-805fwRnW.js";import"./DefaultPropsProvider-CossAyJe.js";import"./useSlot-DRgbk0MI.js";import"./useForkRef-BM8yPrHv.js";import"./createSimplePaletteValueFilter-DyvNuA5n.js";import"./createSvgIcon-BPzUoahr.js";import"./Close-CFREto0o.js";import"./IconButton-CyOD0ivW.js";import"./useTimeout-C44WAk2R.js";import"./ButtonBase-DTXci-DT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Chhkm6cO.js";import"./Stack-Ds9V3v2E.js";import"./extendSxProp-BNcg_9Kx.js";import"./getThemeProps-CE04HLlV.js";import"./useTheme-BMnvZPWl.js";import"./Box-U43iDY-R.js";import"./AlertTitle-Cjpu7TC-.js";import"./Typography-D46yYVKI.js";import"./index-C7uFXVHy.js";import"./useTheme-CemLkdiZ.js";import"./ClickAwayListener-DsaPV5nr.js";import"./getReactElementRef-BDAa_hCW.js";import"./index-CPZzWBSL.js";import"./index-Cwn0dq2o.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CSjIhoje.js";import"./Tooltip-Cqj1ZLU8.js";import"./index-Bkr87tKu.js";import"./useControlled-DsLo-4-V.js";import"./Popper-DudO-GPp.js";import"./Button-3mgletA9.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-8y-s5Pjc.js";import"./QueryClientProvider-DyDsuevu.js";import"./Link-CBhfnUs8.js";import"./Collapse-DwI0-2AC.js";import"./_baseUniq-CWzK8lQ2.js";import"./_Uint8Array-DjQqamw2.js";import"./isArray-D4kTfiKp.js";import"./_getTag-CwqD0vF9.js";import"./isEqual-Cu31opz6.js";import"./merge-H_UyJaym.js";import"./_initCloneObject-BUPoaIeA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B9TGkY69.js";import"./inputBaseClasses-DjFPwRJg.js";import"./calculateFriendlyFileSize-dPQB9gIu.js";import"./CheckCircleTwoTone-B0uaPTts.js";import"./InfoTwoTone-7OESuLhA.js";import"./useMutation-Dm55FjBv.js";import"./dayjs.min-Dv1AES53.js";import"./chunk-AYJ5UCUI-DDyJQ7LG.js";import"./cloneDeep-UlK_jgh2.js";import"./Skeleton-BFMyuLob.js";import"./SkeletonButton-pL3g9Npy.js";import"./SkeletonInlineBlock-BusVNSX9.js";import"./SkeletonTable-CvCNZNii.js";import"./times-DDCNXsvp.js";import"./toInteger-K0ImKn82.js";import"./isSymbol-Dkp3y99P.js";import"./SkeletonParagraph-BIQmiFdD.js";import"./uniqueId-NmC5tK-S.js";import"./toString-BC-XjRaP.js";import"./CSSTransition-DaQQ_cgD.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CybpMxXh.js";import"./Avatar-BWj_kXh6.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
