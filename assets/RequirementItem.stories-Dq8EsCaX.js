import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-ATXkuWRL.js";import{d as s}from"./ToastMessage-DeOqU0v-.js";import{R as n,a as t}from"./RequirementItem-BnUpx63d.js";import{P as O}from"./Paper-DgCuzQY7.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BKiZGHsB.js";import"./SynapseConstants-hncumMYe.js";import"./OrientationBanner-BdfkjDii.js";import"./index-DR0Vn37Y.js";import"./index-DgaCf7Kz.js";import"./iframe-B1CNHrWE.js";import"./spreadSx-CwcO6WA9.js";import"./react-DqgvTDss.js";import"./FullWidthAlert-Cvt8XxfM.js";import"./Alert-C_f5FC7V.js";import"./createTheme-BIoZiSJF.js";import"./DefaultPropsProvider-Cpn2jCy0.js";import"./useSlot-Dy_r826j.js";import"./useForkRef-1fgEFBgR.js";import"./createSimplePaletteValueFilter-hBRB8UPE.js";import"./createSvgIcon-DVOgd3qF.js";import"./Close-DOV8wEbL.js";import"./IconButton-v1J1wQJp.js";import"./useTimeout-Cc9RCyEJ.js";import"./ButtonBase-LKp-H-Rx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bkq51cd7.js";import"./Stack-CWFEgpO9.js";import"./extendSxProp-C908ClJ5.js";import"./getThemeProps-BuTfeov7.js";import"./useTheme-BEQFPRS7.js";import"./Box-Bi2d1Mae.js";import"./AlertTitle-HdlLyYGk.js";import"./Typography-VYH7Cv1h.js";import"./index-0bNTE8cr.js";import"./useTheme-CYPUqhXU.js";import"./ClickAwayListener-KhVrE1U0.js";import"./getReactElementRef-BRntU3LT.js";import"./index-Ba10pb3e.js";import"./index-Bb424CdL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BkJWwYGk.js";import"./Tooltip-DsrESnup.js";import"./index-iXl4ujZe.js";import"./useControlled-bBCZXbID.js";import"./Popper-CCWzRaqT.js";import"./Button-BW8GRwAx.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BVu5VKZr.js";import"./QueryClientProvider-BFTr2_QR.js";import"./Link-CrKQi2Jv.js";import"./Collapse-Df8_z2WK.js";import"./_baseUniq-CAmuLWKY.js";import"./_Uint8Array-CuNQ3Fit.js";import"./isArray-BpFyLbwO.js";import"./_getTag-BK9Z1jQS.js";import"./isEqual-BKkzowDt.js";import"./merge-KTtcIXdU.js";import"./_initCloneObject-CUVT1ALz.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BuQWl4aG.js";import"./inputBaseClasses-CEusdrPr.js";import"./calculateFriendlyFileSize-zFBVC2De.js";import"./CheckCircleTwoTone-BWsVejfq.js";import"./InfoTwoTone-DzKvWQ4a.js";import"./useMutation-TGL0rs6W.js";import"./dayjs.min-BoEbmQNB.js";import"./chunk-AYJ5UCUI-9qlfKxLQ.js";import"./cloneDeep-DnRuPh51.js";import"./Skeleton-DL99pBr1.js";import"./SkeletonButton-DLPm_ue7.js";import"./SkeletonInlineBlock-B1b2BaOv.js";import"./SkeletonTable-DUoSGj14.js";import"./times-zRWrxyS6.js";import"./toInteger-CBzymsOa.js";import"./toNumber-Jh0RVH1L.js";import"./isSymbol-DkzXqfJ8.js";import"./SkeletonParagraph-O1wJtLyA.js";import"./uniqueId-C2w4VQVK.js";import"./toString-DmkxObZb.js";import"./CSSTransition-BIn4iYwR.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CPDU0um4.js";import"./Avatar-8FRdtplZ.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
