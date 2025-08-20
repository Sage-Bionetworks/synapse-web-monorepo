import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BY95TdS-.js";import{d as s}from"./ToastMessage-HvfS5TVB.js";import{R as n,a as t}from"./RequirementItem-CRX-ldFM.js";import{P as O}from"./Paper-CXW8nM1b.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-C6BwGmgN.js";import"./SynapseConstants-CHfc5BRa.js";import"./OrientationBanner-CkE3LJzk.js";import"./index-DyKzhNf1.js";import"./index-rmXZupeT.js";import"./iframe-CnAxXqxV.js";import"./spreadSx-CwcO6WA9.js";import"./react-BslqEXOo.js";import"./FullWidthAlert-Cij9Lr9P.js";import"./Alert-Bd4EOZMs.js";import"./createTheme-7VwcU9MX.js";import"./DefaultPropsProvider-XLuEdgCM.js";import"./useSlot-D6xm9tOe.js";import"./useForkRef-B964cD4p.js";import"./createSimplePaletteValueFilter-BrqKSbt1.js";import"./createSvgIcon-C-kUqDRU.js";import"./Close-B2HfX8kl.js";import"./IconButton-BGihFqQO.js";import"./useTimeout-C7Qw7JlA.js";import"./ButtonBase-bRyxANaO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B7bm9t_J.js";import"./Stack-ZJG2wcld.js";import"./extendSxProp-CMhnceC8.js";import"./getThemeProps-CCWsl_Bt.js";import"./useTheme-CjWK0QVA.js";import"./Box-CMDBeJLc.js";import"./AlertTitle-Ba2SDaus.js";import"./Typography-C1bnshF6.js";import"./index-BQPAD3Qw.js";import"./useTheme-Dj_3GmAW.js";import"./ClickAwayListener-Dfg_Mgii.js";import"./getReactElementRef-ChnRrIQ2.js";import"./index-DEyJTSZg.js";import"./index-BFCDf8FD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-bzjsRX5V.js";import"./Tooltip-Byt5Qei4.js";import"./index-DwY_HY0j.js";import"./useControlled-PcFy2od8.js";import"./Popper-BIm3Cl6k.js";import"./Button-z7wIW46U.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-IHp_taKB.js";import"./QueryClientProvider-D0RjbjLi.js";import"./Link-LP8RV5_G.js";import"./Collapse-BwPnxzem.js";import"./_baseUniq-CxWngQTg.js";import"./_Uint8Array-DEe3OgvP.js";import"./isArray-CLQzkOlL.js";import"./_getTag-39rwr1vt.js";import"./isEqual-zjmzDneB.js";import"./merge-DvCmlctf.js";import"./_initCloneObject-BoJxgDin.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DbJe4Bd2.js";import"./inputBaseClasses-Dgezdmn3.js";import"./calculateFriendlyFileSize-O_GSSh-o.js";import"./CheckCircleTwoTone-UW5_dW2R.js";import"./InfoTwoTone-C_kTkL1y.js";import"./useMutation-CHebwS8k.js";import"./dayjs.min-CPnKhPbP.js";import"./chunk-AYJ5UCUI-ZuTesFP-.js";import"./cloneDeep-CODQJftl.js";import"./Skeleton-BziL8Y5z.js";import"./SkeletonButton-B-Tm9Q8s.js";import"./SkeletonInlineBlock-BoRyS2ag.js";import"./SkeletonTable-CyG8XVTX.js";import"./times-VRy4IDdy.js";import"./toInteger-tXcGozz3.js";import"./isSymbol-CT3JAaN1.js";import"./SkeletonParagraph--I_hz-Ir.js";import"./uniqueId-DG_Wn4wJ.js";import"./toString-Qc1qPfaZ.js";import"./CSSTransition-C6bvzqq6.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-v-NYa1Cb.js";import"./Avatar-doyTUOd7.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
