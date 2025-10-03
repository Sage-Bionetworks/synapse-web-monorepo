import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Cn291mYQ.js";import{d as s}from"./ToastMessage-DGDeV5I_.js";import{R as n,a as t}from"./RequirementItem-BObEC04Q.js";import{P as O}from"./Paper-BjTwNz8F.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-6WrTqGM5.js";import"./SynapseConstants-Cg_4Agmh.js";import"./OrientationBanner-D8ZR4pD2.js";import"./index-BxSlDoHW.js";import"./index-CsQ_dtFt.js";import"./iframe-BrZuctF3.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNQHEto8.js";import"./FullWidthAlert-BfiXHZxu.js";import"./Alert-Bw88P3_8.js";import"./createTheme-Cmip4D3k.js";import"./DefaultPropsProvider-DllTIwuT.js";import"./useSlot-DdaJYVUE.js";import"./useForkRef-ChoTOfXn.js";import"./createSimplePaletteValueFilter-tlZ8CI8S.js";import"./createSvgIcon-DJcBpyjP.js";import"./Close-BOsW5qMc.js";import"./IconButton-Ci8W1Yhy.js";import"./useTimeout-BfOIeXZu.js";import"./ButtonBase-DphK-mGP.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DSIdQNfw.js";import"./Stack-B0kdWABf.js";import"./extendSxProp-B3wFOf4h.js";import"./getThemeProps-DpnPGkbN.js";import"./useTheme-CBnc1aZ_.js";import"./Box-sYcFPFE4.js";import"./AlertTitle-Dl0ipMyg.js";import"./Typography-DrYL7mon.js";import"./index-BLf4na4t.js";import"./useTheme-DzUDjm22.js";import"./ClickAwayListener-DlAC2NUk.js";import"./getReactElementRef-MCnNlpng.js";import"./index-B57y3sov.js";import"./index-CiyvAaLz.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CuMuHmpZ.js";import"./Tooltip-wSUIYq70.js";import"./index-30FK6v6B.js";import"./useControlled-Oabr0Ps4.js";import"./Popper-TK99_ULZ.js";import"./Button-BC4TwfXN.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CON6sbsO.js";import"./QueryClientProvider-DrnsKFO0.js";import"./Link-CHIwKtz4.js";import"./Collapse-B5yca7Jx.js";import"./_baseUniq-C3U75rlo.js";import"./_Uint8Array-BSammFXB.js";import"./isArray-BBPx6tkp.js";import"./_getTag-CdV3gicE.js";import"./isEqual-Bkbn_e1j.js";import"./merge-8_g12ylz.js";import"./_initCloneObject-CFCSuk4S.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CupicnC-.js";import"./inputBaseClasses-CXyb78Fj.js";import"./calculateFriendlyFileSize-BR0yD13t.js";import"./CheckCircleTwoTone-qt2LfLaU.js";import"./InfoTwoTone-fzLd9iyA.js";import"./useMutation-CmpFDWM1.js";import"./dayjs.min-crYlBkAO.js";import"./chunk-AYJ5UCUI-DjQcL2EA.js";import"./cloneDeep-s7ZyiLW1.js";import"./Skeleton-CMFgpc0r.js";import"./SkeletonButton-D-P9p8y_.js";import"./SkeletonInlineBlock-CK7WeUvs.js";import"./SkeletonTable-CpI33Rz4.js";import"./times-v6ageF6D.js";import"./toInteger-r9Wtkp2I.js";import"./isSymbol-B4-_uRPL.js";import"./SkeletonParagraph-DEFBP7tl.js";import"./uniqueId-DD62n-Kh.js";import"./toString-Csx1xCop.js";import"./CSSTransition-Ble-Eq8q.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CBkivQfK.js";import"./Avatar-BEjSjegX.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
