import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BQN766RX.js";import{d as s}from"./ToastMessage-COP2-jmv.js";import{R as n,a as t}from"./RequirementItem-9SMsdOfm.js";import{P as O}from"./Paper-C3ljaFl1.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DyVKrfnz.js";import"./SynapseConstants-D5u4SM7Q.js";import"./OrientationBanner-DioMwN-d.js";import"./index-BY8E7Ck2.js";import"./index-DnLLVsSx.js";import"./iframe-BcfoM7fF.js";import"./spreadSx-CwcO6WA9.js";import"./react-CYbE_2Fh.js";import"./FullWidthAlert-BcAQ3oY4.js";import"./Alert-Cs--W5Rj.js";import"./createTheme-BEpdVMRU.js";import"./DefaultPropsProvider-Qo7oSsrQ.js";import"./useSlot-BO4LHlnr.js";import"./useForkRef-B9ZYh7Z-.js";import"./createSimplePaletteValueFilter-CRdqsfK_.js";import"./createSvgIcon-C8dizGNP.js";import"./Close-4pDLHMAi.js";import"./IconButton-Dwf6nyQC.js";import"./useTimeout-thgVV2oO.js";import"./ButtonBase-5haTo7cl.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BVQwjipO.js";import"./Stack-BMN8z-Q4.js";import"./extendSxProp-BYC18Z55.js";import"./getThemeProps-CcY3c29N.js";import"./useTheme-DTn1FyjR.js";import"./Box-Cpe7AX1D.js";import"./AlertTitle-BdK-BfXp.js";import"./Typography-CLfHpKLg.js";import"./index-Dl8PO9Nn.js";import"./useTheme-BQfmZos-.js";import"./ClickAwayListener-w9wbA2ba.js";import"./getReactElementRef-p1ymcQP3.js";import"./index-CV-fpmeq.js";import"./index-DCxT5mVo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ymxc9Ww9.js";import"./Tooltip-BcAzm78t.js";import"./index-0ybS0gTf.js";import"./useControlled-CW3VqTbP.js";import"./Popper-BJ7Wyrx4.js";import"./Button-B7nY5Hwz.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DV1R38Zz.js";import"./QueryClientProvider-DAfAf0Tj.js";import"./Link-CJN9zQKk.js";import"./Collapse-DeSwuB7t.js";import"./_baseUniq-FOT1em1B.js";import"./_Uint8Array-U3hVtwmZ.js";import"./isArray-BQd1KJct.js";import"./_getTag-DaZv14cv.js";import"./isEqual-DKDMgNC7.js";import"./merge-D0qz_gBt.js";import"./_initCloneObject-CflFE1Q7.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-2xZaPCmM.js";import"./inputBaseClasses-C-e1oPsU.js";import"./calculateFriendlyFileSize-BJG5XUC1.js";import"./CheckCircleTwoTone-BYYvvA8w.js";import"./InfoTwoTone-C9cV8nXc.js";import"./useMutation-34RxXcyI.js";import"./dayjs.min-CJjVq69r.js";import"./chunk-AYJ5UCUI-BbFN9-k1.js";import"./cloneDeep-BjHIkirm.js";import"./Skeleton-BhOh3kBH.js";import"./SkeletonButton-BNcUMOsO.js";import"./SkeletonInlineBlock-J3EUmikU.js";import"./SkeletonTable-C0XSaMj9.js";import"./times-CWROY6rx.js";import"./toInteger-07915_ZN.js";import"./toNumber-CqsHUh6S.js";import"./isSymbol-C5An8RPi.js";import"./SkeletonParagraph-BER9wt3B.js";import"./uniqueId-BETHBQlw.js";import"./toString-DbIrwi0-.js";import"./CSSTransition-DStOab2o.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Chms-bgk.js";import"./Avatar-Dag5ENT7.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
