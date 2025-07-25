import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-C0BHXoey.js";import{d as s}from"./ToastMessage-Ud8_iEIU.js";import{R as n,a as t}from"./RequirementItem-DQoTnnkr.js";import{P as O}from"./Paper-BmvjKgaV.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-2I2Fw3AC.js";import"./SynapseConstants-C5a1-Bbv.js";import"./OrientationBanner-Cc49ZOOw.js";import"./index-Br3sBrcJ.js";import"./index-BGezYTxZ.js";import"./iframe-B-2zDx2H.js";import"./spreadSx-CwcO6WA9.js";import"./react-BOMk47dA.js";import"./FullWidthAlert-BpR5S-5j.js";import"./Alert-BsV8gnep.js";import"./createTheme-UnFwGf94.js";import"./DefaultPropsProvider-BVuJ6NZ3.js";import"./useSlot-37k7k0l7.js";import"./useForkRef-DogPi97t.js";import"./createSimplePaletteValueFilter-_8l7Ukzj.js";import"./createSvgIcon-BRN6BuuI.js";import"./Close-BEIvBVp3.js";import"./IconButton-B3IjaecF.js";import"./useTimeout-CSdygWr5.js";import"./ButtonBase-OTZy9XRd.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DjMHo-jE.js";import"./Stack-C_8pH08J.js";import"./extendSxProp-BjYa3ogt.js";import"./getThemeProps-DHsonTJv.js";import"./useTheme-Cz-eQcfl.js";import"./Box-B-MoQy_G.js";import"./AlertTitle-CZZ4Ztun.js";import"./Typography-CVEGnLAD.js";import"./index-siACmn_K.js";import"./useTheme-Bayk6vGN.js";import"./ClickAwayListener-CAFxhAOq.js";import"./getReactElementRef-BJ1JrKvk.js";import"./index-D77oy7ww.js";import"./index-BoveFQlD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CReA6j2F.js";import"./Tooltip-DopGUg8J.js";import"./index-B5DCQxiA.js";import"./useControlled-Bae2hl1R.js";import"./Popper-DkEv5u0W.js";import"./Button-DW5TsUnn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-2UZU8E2g.js";import"./QueryClientProvider-xIaYfzD0.js";import"./Link-CsG24anU.js";import"./Collapse-C1ok1cmR.js";import"./_baseUniq-CYeDmsi6.js";import"./_Uint8Array-ClTzF4vT.js";import"./isArray-CALPxYtC.js";import"./_getTag-CCdegNGf.js";import"./isEqual-Bd0eeiCo.js";import"./merge-ByFc3pwa.js";import"./_initCloneObject-Vr_V56Xz.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CPowkdEu.js";import"./inputBaseClasses-D-YtLPUu.js";import"./calculateFriendlyFileSize-DES5VX1H.js";import"./CheckCircleTwoTone-BtOxk0u4.js";import"./InfoTwoTone-CtN2l-vk.js";import"./useMutation-mXy-AmvR.js";import"./dayjs.min-D5l8duxb.js";import"./chunk-AYJ5UCUI-udiJnvPu.js";import"./cloneDeep-Bg1OVVAX.js";import"./Skeleton-BPTrWMRq.js";import"./SkeletonButton-D3lY9l_R.js";import"./SkeletonInlineBlock-yTPL8FFl.js";import"./SkeletonTable-BLy6tHEo.js";import"./times-uV34X1IZ.js";import"./toInteger-jsg-Q1DK.js";import"./toNumber-Cs9lbVQl.js";import"./isSymbol-BY0VePyn.js";import"./SkeletonParagraph-Bmc5F3Tq.js";import"./uniqueId-DpsRQx9K.js";import"./toString-7ijzU2Uh.js";import"./CSSTransition-DLSibivW.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DcniLNGu.js";import"./Avatar-DG892l_T.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
