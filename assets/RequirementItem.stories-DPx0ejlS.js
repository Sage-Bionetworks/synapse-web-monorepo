import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-Vjn_dSYb.js";import{d as s}from"./ToastMessage-IUq2aOze.js";import{R as n,a as t}from"./RequirementItem-ClhKdUcO.js";import{P as O}from"./Paper-WLG-MfiP.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-D7R6W0Po.js";import"./SynapseConstants-BF-cq9I-.js";import"./OrientationBanner-BPE7jN4H.js";import"./index-DRmLmgSG.js";import"./index-BUsvr3pR.js";import"./iframe-BOf6LPjK.js";import"./spreadSx-CwcO6WA9.js";import"./react-CqXSjSjN.js";import"./FullWidthAlert-CyxVaTo-.js";import"./Alert-Bk5JlffV.js";import"./createTheme-UonGQGw4.js";import"./DefaultPropsProvider-Df1PfarS.js";import"./useSlot-wrl7o3Ug.js";import"./useForkRef-CRv5njRE.js";import"./createSimplePaletteValueFilter-CJ-IbVpc.js";import"./createSvgIcon-DKQD7mOV.js";import"./Close-CeUTRSXW.js";import"./IconButton-BLusjQnA.js";import"./useTimeout-BMsv0ZJ3.js";import"./ButtonBase-On86KBDi.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BCAN28JR.js";import"./Stack-Be1fl8B2.js";import"./extendSxProp-6X8i3Ual.js";import"./getThemeProps-CiHhwHIs.js";import"./useTheme-Cf0y_-BP.js";import"./Box-CjXe8gIr.js";import"./AlertTitle-D0l0ox_T.js";import"./Typography-CBmUgXmK.js";import"./index-knRHlM1X.js";import"./useTheme-B7irvlgN.js";import"./ClickAwayListener-CenNq_25.js";import"./getReactElementRef-CRfSQGz0.js";import"./index-Bv-8_qSa.js";import"./index-BJ97qXsD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BCPuHGGV.js";import"./Tooltip-yDHB8MiT.js";import"./index-CjNVpIRd.js";import"./useControlled-DeIG_K28.js";import"./Popper-Dpckc59n.js";import"./Button-CkV_4l2j.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BzsoOeu3.js";import"./QueryClientProvider-B1Ol8Yry.js";import"./Link-Bfy-wYj9.js";import"./Collapse-B5BlCAjr.js";import"./_baseUniq-jQ8xeg2H.js";import"./_Uint8Array-XpvvWAw1.js";import"./isArray-7pzLm2zZ.js";import"./_getTag-C6gRbf3L.js";import"./isEqual-D7UROsmS.js";import"./merge-DK1gT9qk.js";import"./_initCloneObject-DK2bw49X.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-fuokgPOZ.js";import"./inputBaseClasses-C7UFnbtn.js";import"./calculateFriendlyFileSize-Do506Vrw.js";import"./CheckCircleTwoTone-CnMK8m3r.js";import"./InfoTwoTone-UlfRuzPu.js";import"./useMutation-CcZ13Imf.js";import"./dayjs.min-DIAzs0dw.js";import"./chunk-AYJ5UCUI-D_jbnITc.js";import"./cloneDeep-Czp6lS9T.js";import"./Skeleton-Bvxz5ehu.js";import"./SkeletonButton-BVkzLLaH.js";import"./SkeletonInlineBlock-DYLvpgvg.js";import"./SkeletonTable-Dzj-ObLw.js";import"./times-BoW8UahK.js";import"./toInteger-DFNK8MIL.js";import"./isSymbol-DfQVpcSz.js";import"./SkeletonParagraph-Bre6bKv-.js";import"./uniqueId-DDFQ-Lq0.js";import"./toString-DprhbMhn.js";import"./CSSTransition-Dv2e3GUb.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-k1MLWKPt.js";import"./Avatar-DZ_fzmIr.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
