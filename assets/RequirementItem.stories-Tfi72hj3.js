import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BRtDGDYi.js";import{d as s}from"./ToastMessage-CsSxyXXR.js";import{R as n,a as t}from"./RequirementItem-6jVxjuu4.js";import{P as O}from"./Paper-BDvRMvlD.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BaMpUgRF.js";import"./SynapseConstants-BRUlnsmD.js";import"./OrientationBanner-HNbL1TGL.js";import"./index-1w2TTrBh.js";import"./index-CBfPRsLX.js";import"./iframe-BW6JEyK_.js";import"./spreadSx-CwcO6WA9.js";import"./react-XyY8nHR8.js";import"./FullWidthAlert-BAQZSi58.js";import"./Alert-vGMwbP_z.js";import"./createTheme-BQUJAjgK.js";import"./DefaultPropsProvider-B4LZRkCM.js";import"./useSlot-B9lcFwxe.js";import"./useForkRef-Tm9G3NYj.js";import"./createSimplePaletteValueFilter-5y3emdse.js";import"./createSvgIcon-DcP4g_ya.js";import"./Close-COGFSJZj.js";import"./IconButton-0IVNrtrc.js";import"./useTimeout-BGZ3xCEB.js";import"./ButtonBase-8Z9A3MQE.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce53bUKn.js";import"./Stack-YtjVbKKd.js";import"./extendSxProp-XTMZWoyV.js";import"./getThemeProps-04CPpPQO.js";import"./useTheme-DQC57DiK.js";import"./Box-Bc-90VAx.js";import"./AlertTitle-DDY4r4P1.js";import"./Typography-C5aMCJ4O.js";import"./index-CKdCwKST.js";import"./useTheme-Dj820_fk.js";import"./ClickAwayListener-DeQJwmKr.js";import"./getReactElementRef-CPCCm0If.js";import"./index-nyMMnnmb.js";import"./index-DIHMMwdQ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Gz3UorJ-.js";import"./Tooltip-DirOuoyD.js";import"./index-Cywkhedm.js";import"./useControlled-DyHOSNBP.js";import"./Popper--hGQ_Vmk.js";import"./Button-M2vuYRBN.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-CgYxw4RF.js";import"./QueryClientProvider-C_XgAa0e.js";import"./Link-BURlIMsF.js";import"./Collapse-DfFpa9z7.js";import"./_baseUniq-C6EJpBwW.js";import"./_Uint8Array-C_ZTd6pO.js";import"./isArray-C2EAbzcP.js";import"./_getTag-DzU_Pvij.js";import"./isEqual-T1nr5fhG.js";import"./merge-BTfS-Knx.js";import"./_initCloneObject-CTEvesnt.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D90A6vuJ.js";import"./inputBaseClasses-CowIdqFg.js";import"./calculateFriendlyFileSize-B1Q0dtu7.js";import"./CheckCircleTwoTone-CWBvn9GO.js";import"./InfoTwoTone-BEOG3uKl.js";import"./useMutation-DREPiXeT.js";import"./dayjs.min-CbgDg3VQ.js";import"./chunk-AYJ5UCUI-BAFgS2VU.js";import"./cloneDeep-BsKsinQ1.js";import"./Skeleton-BRb3V-oH.js";import"./SkeletonButton-C40G9v6r.js";import"./SkeletonInlineBlock-Cqdwk1oy.js";import"./SkeletonTable-MjJVcslV.js";import"./times-CJMlcc_7.js";import"./toInteger-B19knTwk.js";import"./toNumber-5KTsE6fE.js";import"./isSymbol-Du1vYY83.js";import"./SkeletonParagraph-CNdpbKsC.js";import"./uniqueId-C8nFd232.js";import"./toString-BXbyVAuw.js";import"./CSSTransition-7IVSF-k9.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B5v5x4FM.js";import"./Avatar-Dx5hFDmU.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
