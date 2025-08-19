import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DjgWv88l.js";import{d as s}from"./ToastMessage-k-x9ZG0q.js";import{R as n,a as t}from"./RequirementItem-CX36XL7f.js";import{P as O}from"./Paper-BO5epkPB.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-d4kpjNGQ.js";import"./SynapseConstants-BH4LLXmY.js";import"./OrientationBanner-Yieju6se.js";import"./index-CfpbnZNI.js";import"./index-BnsAmEtq.js";import"./iframe-B4TujuON.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bnk5KY85.js";import"./FullWidthAlert-BS_TZWyp.js";import"./Alert-CoysFjkK.js";import"./createTheme-BlVEnTR5.js";import"./DefaultPropsProvider-OmFXGUgd.js";import"./useSlot-BHAGHt0n.js";import"./useForkRef-B5w0ReP-.js";import"./createSimplePaletteValueFilter-BGampqua.js";import"./createSvgIcon-kvxBrd-t.js";import"./Close-LwTSue0v.js";import"./IconButton-5P6iShNd.js";import"./useTimeout-C2orhFSZ.js";import"./ButtonBase-Dl_5hXw0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Sv7dHwXp.js";import"./Stack-DYZqiZ6i.js";import"./extendSxProp-koO_2w88.js";import"./getThemeProps-Bh_q7kvm.js";import"./useTheme-CNMaTEWn.js";import"./Box-B5vRZfzY.js";import"./AlertTitle-BWBdfgnl.js";import"./Typography-BFH2hiN4.js";import"./index-BKheZmbu.js";import"./useTheme-1YICGajx.js";import"./ClickAwayListener-aRsUnuQe.js";import"./getReactElementRef-DLRXomsv.js";import"./index-KcgmlDz6.js";import"./index-BLtIAzY4.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-EO0f-oq1.js";import"./Tooltip-BPrOIWIK.js";import"./index-I4ofRSQS.js";import"./useControlled-Bp6TR6mf.js";import"./Popper-DvFhUK6r.js";import"./Button-DvVXu8mn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-04RYnwEz.js";import"./QueryClientProvider-CMlW2tF1.js";import"./Link-xr0WhLoh.js";import"./Collapse-DSz046KH.js";import"./_baseUniq-Defz6Y26.js";import"./_Uint8Array-zr0PqO_f.js";import"./isArray-pEgRuqDv.js";import"./_getTag-B6wfRYtY.js";import"./isEqual-BLb2ZH25.js";import"./merge-Bn1fK-_l.js";import"./_initCloneObject-DcsVX5be.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C_6V6RV4.js";import"./inputBaseClasses-CGUn8g5c.js";import"./calculateFriendlyFileSize-DjmXNXd1.js";import"./CheckCircleTwoTone-Biso3ktg.js";import"./InfoTwoTone-BXK2g6US.js";import"./useMutation-8Dd83spH.js";import"./dayjs.min-Dyj_DlME.js";import"./chunk-AYJ5UCUI-Bjt3vE5l.js";import"./cloneDeep-CoFd_ir3.js";import"./Skeleton-BN7SCgP4.js";import"./SkeletonButton-DfENviIj.js";import"./SkeletonInlineBlock-5icSm-T5.js";import"./SkeletonTable-ByksoN0m.js";import"./times-BSoOY_U3.js";import"./toInteger-BPehz3op.js";import"./isSymbol-0yNK3rIl.js";import"./SkeletonParagraph-6z2t5qZp.js";import"./uniqueId-6TjR7Ky-.js";import"./toString-1EJjss1g.js";import"./CSSTransition-CcMeU5F5.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BrpELlas.js";import"./Avatar-DjmUZ-9c.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
