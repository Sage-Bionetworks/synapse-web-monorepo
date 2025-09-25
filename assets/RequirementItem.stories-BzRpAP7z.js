import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CMEiPMsD.js";import{d as s}from"./ToastMessage-wB9p7yG9.js";import{R as n,a as t}from"./RequirementItem-Cno8_5Cw.js";import{P as O}from"./Paper-DASBMk3C.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-CeqoVw1o.js";import"./SynapseConstants-CPCmN-gi.js";import"./OrientationBanner-CQIm-Ey1.js";import"./index-BcLN8RXQ.js";import"./index-B2AGccKG.js";import"./iframe-eFKYoG0j.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxcobhRw.js";import"./FullWidthAlert-BIez5okj.js";import"./Alert-BBi6u3qT.js";import"./createTheme-DPxGCk7e.js";import"./DefaultPropsProvider-BzWAken2.js";import"./useSlot-DbYJ23lg.js";import"./useForkRef-DmkJa-bD.js";import"./createSimplePaletteValueFilter-BZRticgE.js";import"./createSvgIcon-CrjzRFSh.js";import"./Close-CwrIQBfZ.js";import"./IconButton-ByH8Kolw.js";import"./useTimeout-CUZLOZF-.js";import"./ButtonBase-DIrjwtNY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DFqmzg7D.js";import"./Stack-CbTviNUh.js";import"./extendSxProp-DPlEdwEe.js";import"./getThemeProps-BwGkw9Dq.js";import"./useTheme-BpFXk7Pw.js";import"./Box-DHqzE0KV.js";import"./AlertTitle-cUB69DsC.js";import"./Typography-Cm6ZNAW-.js";import"./index-BjkGhtTa.js";import"./useTheme-B4bAnXTN.js";import"./ClickAwayListener-Dhz2ywRL.js";import"./getReactElementRef-BY9sPS19.js";import"./index-ZBSk-buD.js";import"./index-D5UfxxD5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BYbIhAFm.js";import"./Tooltip-D6WWxUQx.js";import"./index-Y3VDk8SE.js";import"./useControlled-BkANWM5f.js";import"./Popper-7a6yE7es.js";import"./Button-PQgF7jJQ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BWzyFAd_.js";import"./QueryClientProvider-CRKWWU78.js";import"./Link-c4vBsqYa.js";import"./Collapse-3gCBuOnS.js";import"./_baseUniq-B5SLkIvU.js";import"./_Uint8Array-nwwAmTj4.js";import"./isArray-Dpn4sx4n.js";import"./_getTag-bITFctIo.js";import"./isEqual-Dxe0NAh8.js";import"./merge-D1CwwhmI.js";import"./_initCloneObject-D2f-QGXU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D3Qy40VT.js";import"./inputBaseClasses-CY7MzjF7.js";import"./calculateFriendlyFileSize-XuDPvr9B.js";import"./CheckCircleTwoTone-B0-qzMIh.js";import"./InfoTwoTone-DSitWCJH.js";import"./useMutation-B17C9-3a.js";import"./dayjs.min-CjB-a8se.js";import"./chunk-AYJ5UCUI-DPDI74MQ.js";import"./cloneDeep-Dl2F-bJn.js";import"./Skeleton-DbvZ5cWo.js";import"./SkeletonButton-BJ10trZP.js";import"./SkeletonInlineBlock-CreQRsUy.js";import"./SkeletonTable-Dpex71Pv.js";import"./times-VIorgX3n.js";import"./toInteger-CC7N9fZB.js";import"./isSymbol-Cjo_G4mn.js";import"./SkeletonParagraph-DLjrTkgH.js";import"./uniqueId-PGzIZYPZ.js";import"./toString-Db-DxRjw.js";import"./CSSTransition-BeXC_I1v.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-I1dUgnug.js";import"./Avatar-BDQEJfI-.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
