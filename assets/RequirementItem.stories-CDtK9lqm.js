import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-CoDma9R9.js";import{d as s}from"./ToastMessage-D2Ie5YXK.js";import{R as n,a as t}from"./RequirementItem-CcTpST-H.js";import{P as O}from"./Paper-BEpt9DOD.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-DLIOTyrS.js";import"./SynapseConstants-BkOa3sXi.js";import"./OrientationBanner-BVDH2MzU.js";import"./index-BXOdbnPZ.js";import"./index-jbxe4qnf.js";import"./iframe-Csk0P4iV.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cup9Wpmf.js";import"./FullWidthAlert-XjP6IbA0.js";import"./Alert-CSaRUXVh.js";import"./createTheme-QTfNIHND.js";import"./DefaultPropsProvider-C4ttJDz_.js";import"./useSlot-CSa8e3oq.js";import"./useForkRef-wDv3ts2U.js";import"./createSimplePaletteValueFilter-CFdyQ8cQ.js";import"./createSvgIcon-lCvAzxxC.js";import"./Close-aJAmR6rq.js";import"./IconButton-DBbxkGzb.js";import"./useTimeout-hWOZoqao.js";import"./ButtonBase-iBx1-ak6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D4qUYTVZ.js";import"./Stack-CH6zs4CJ.js";import"./extendSxProp-CmGMGW33.js";import"./getThemeProps-mTF8rg2g.js";import"./useTheme-rEQ5k3ZP.js";import"./Box-NmarTIzp.js";import"./AlertTitle-vvBOfH00.js";import"./Typography-B2nrfcQB.js";import"./index-DeDVaIci.js";import"./useTheme-CIoHEpFD.js";import"./ClickAwayListener-CpmfBYEj.js";import"./getReactElementRef-DVxXf28N.js";import"./index--FkLQ4Xz.js";import"./index-lKZlVmyo.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DiQPLxxn.js";import"./Tooltip-qF9vFCxj.js";import"./index-Bgii8hnK.js";import"./useControlled-BKjVu3OC.js";import"./Popper-DxO4RVb4.js";import"./Button-BoXndE0m.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-BH1fdT2O.js";import"./QueryClientProvider-BlzrW-Yp.js";import"./Link-DoaJtmS-.js";import"./Collapse-BCXifEe6.js";import"./_baseUniq-BPTUWCw_.js";import"./_Uint8Array-BPaHv55i.js";import"./isArray-BK6K0JW6.js";import"./_getTag-Cqra_tga.js";import"./isEqual-B6B5D0Bt.js";import"./merge-BdRt6DVn.js";import"./_initCloneObject-et7WGEHT.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CJ4j-VUz.js";import"./inputBaseClasses-B7PHTgh5.js";import"./calculateFriendlyFileSize-B9lMuR0e.js";import"./CheckCircleTwoTone-B47WEstA.js";import"./InfoTwoTone-TFHJlf05.js";import"./useMutation-BFWcW8eU.js";import"./dayjs.min-C4WBa-1y.js";import"./chunk-AYJ5UCUI-CSrZGdWP.js";import"./cloneDeep-Dc2FF7e1.js";import"./Skeleton-9lEgPNC3.js";import"./SkeletonButton-BFV816MJ.js";import"./SkeletonInlineBlock-CBx7kl82.js";import"./SkeletonTable-BH4J2Stw.js";import"./times-DyytoIB2.js";import"./toInteger-Dpi0NPcf.js";import"./isSymbol-AscnRFWd.js";import"./SkeletonParagraph-S2ApxKSe.js";import"./uniqueId-Dm32IkqC.js";import"./toString-CapwZo1z.js";import"./CSSTransition-CuQQawY7.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-cWdiatKf.js";import"./Avatar-Dpejga4m.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
