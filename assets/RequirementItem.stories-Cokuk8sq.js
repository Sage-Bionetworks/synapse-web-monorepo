import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-C7UtXkkN.js";import{d as s}from"./ToastMessage-E54mUfBm.js";import{R as n,a as t}from"./RequirementItem-DaguiJLv.js";import{P as O}from"./Paper-C6idgaEO.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Xhru7nLd.js";import"./SynapseConstants-BqhDifOr.js";import"./OrientationBanner-DzfNzdUh.js";import"./index-B4XRG68x.js";import"./index-DaTBybXe.js";import"./iframe--yFez3Al.js";import"./spreadSx-CwcO6WA9.js";import"./react-Pb0NEBSA.js";import"./FullWidthAlert-_tFDAG69.js";import"./Alert-CS0ZjUJW.js";import"./createTheme-BKPwUAfk.js";import"./DefaultPropsProvider-CdZ-TRIM.js";import"./useSlot-B1igJx-T.js";import"./useForkRef-BZAA15f3.js";import"./createSimplePaletteValueFilter-DiD2ONol.js";import"./createSvgIcon-CbCm1XK6.js";import"./Close-DYZja2kY.js";import"./IconButton-CAHC7YYx.js";import"./useTimeout-rL_18_XW.js";import"./ButtonBase-CgPIXsM6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Wi5tu9JN.js";import"./Stack-CWfHCwRC.js";import"./extendSxProp-Djycy254.js";import"./getThemeProps-D9AtXPyY.js";import"./useTheme-DlM204bG.js";import"./Box-BztlAJDN.js";import"./AlertTitle-C_XUz4ZV.js";import"./Typography-D1rsUm_t.js";import"./index-Vh8bh29G.js";import"./useTheme-C6LfNkUQ.js";import"./ClickAwayListener-BQz92f_7.js";import"./getReactElementRef-Dt3Z1NPg.js";import"./index-DXfrIQQF.js";import"./index-Qf1tKrE8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DStkP8oW.js";import"./Tooltip-1tUD6Zst.js";import"./index-CiHMej98.js";import"./useControlled-EryUCQh-.js";import"./Popper-CjsY8qE4.js";import"./Button-BYG8DFHi.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DgnJ03lX.js";import"./QueryClientProvider-H2N9izuu.js";import"./Link-cMf7melx.js";import"./Collapse-BJ4yZBkl.js";import"./_baseUniq-CeDH7iT-.js";import"./_Uint8Array-qeTLqarC.js";import"./isArray-6LMrQIXo.js";import"./_getTag-OFAcIPOT.js";import"./isEqual-DWRi7yzo.js";import"./merge-CWvqfBqd.js";import"./_initCloneObject-C9H3eTJC.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CG0WdJOG.js";import"./inputBaseClasses-V6DwAvLl.js";import"./calculateFriendlyFileSize-BpMPpPoy.js";import"./CheckCircleTwoTone-Ddxtix5i.js";import"./InfoTwoTone-DxpXp-8o.js";import"./useMutation-CoYFm7AG.js";import"./dayjs.min-Cmx1FqwA.js";import"./chunk-AYJ5UCUI-IxvEqZR4.js";import"./cloneDeep-oCPUZlQ9.js";import"./Skeleton-CILfjMmk.js";import"./SkeletonButton-fuB66Qs4.js";import"./SkeletonInlineBlock-C3IhzCWR.js";import"./SkeletonTable-CB__Bzh7.js";import"./times-TLOS8nto.js";import"./toInteger-iI0_Ye9X.js";import"./isSymbol-DlEEa_5c.js";import"./SkeletonParagraph-DCsdZIsU.js";import"./uniqueId-DE9H7rqe.js";import"./toString-CWW0d0FN.js";import"./CSSTransition-E4ZK4P_P.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DBHHklJm.js";import"./Avatar-BCRsDfz3.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
