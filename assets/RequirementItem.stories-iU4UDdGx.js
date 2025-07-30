import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DDxMldeE.js";import{d as s}from"./ToastMessage-CsN0Bop0.js";import{R as n,a as t}from"./RequirementItem-zeof9RTd.js";import{P as O}from"./Paper-_hjMoFje.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-CGy5Z_At.js";import"./SynapseConstants-B-LC1ypq.js";import"./OrientationBanner-BbBfl_YH.js";import"./index-Bjcc8c1r.js";import"./index-CCx7LtbX.js";import"./iframe-CXkN_bjh.js";import"./spreadSx-CwcO6WA9.js";import"./react-D8sJYU4U.js";import"./FullWidthAlert-4g268GZ6.js";import"./Alert-mSRVcikz.js";import"./createTheme-BGipwrSZ.js";import"./DefaultPropsProvider-C9mJXSlS.js";import"./useSlot-CL9Tm_iu.js";import"./useForkRef-D0tAio4i.js";import"./createSimplePaletteValueFilter-Cx2IpYcE.js";import"./createSvgIcon-Dn1e9c9m.js";import"./Close-ALHvqgO_.js";import"./IconButton-BxhC3Er-.js";import"./useTimeout-gBVtjGWN.js";import"./ButtonBase-C0vKM8oB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B3mrrbKE.js";import"./Stack-CNsyzmPM.js";import"./extendSxProp-DFE9sSAY.js";import"./getThemeProps-CeD3wcUs.js";import"./useTheme-C6Hms8rT.js";import"./Box-DxttMfmA.js";import"./AlertTitle-B47zWGCp.js";import"./Typography-BeXEtM59.js";import"./index-7Nlp89ok.js";import"./useTheme-Ccnn5CDs.js";import"./ClickAwayListener-BopzRr-s.js";import"./getReactElementRef-B_W85HoF.js";import"./index-CoD41yc1.js";import"./index-Cl-WCWPX.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-f0ioJdsi.js";import"./Tooltip-BSMMEp4O.js";import"./index-BqN4AehO.js";import"./useControlled-7LyiC2MA.js";import"./Popper-BWw2OTmL.js";import"./Button-C2r8JxxF.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BAMs9skl.js";import"./QueryClientProvider-CTjZIdYp.js";import"./Link-DjUqzp-g.js";import"./Collapse-x5dCqbpD.js";import"./_baseUniq-BT4GANo1.js";import"./_Uint8Array-YMIauZjz.js";import"./isArray-8WYU2MbI.js";import"./_getTag-DCb-KCZR.js";import"./isEqual-BPvSjkwI.js";import"./merge-B6kKGF8W.js";import"./_initCloneObject-CmMQaoK8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BxMIOZQV.js";import"./inputBaseClasses-CEmDwYah.js";import"./calculateFriendlyFileSize-C_8OiygM.js";import"./CheckCircleTwoTone-CpDhgK8q.js";import"./InfoTwoTone-DcM4CCDR.js";import"./useMutation-DkuvOR_-.js";import"./dayjs.min-Did3EpXL.js";import"./chunk-AYJ5UCUI-BdecK6oV.js";import"./cloneDeep-BneUL77Z.js";import"./Skeleton-Dk9RX1Ib.js";import"./SkeletonButton-ew_40Dyv.js";import"./SkeletonInlineBlock-E4UTXhvf.js";import"./SkeletonTable-B1wbbH8S.js";import"./times-tKk62g8L.js";import"./toInteger-BVJAmaas.js";import"./toNumber-KcrXdJBs.js";import"./isSymbol-CEm6RQ_3.js";import"./SkeletonParagraph-DfjIm47p.js";import"./uniqueId-BX3slaGm.js";import"./toString-iVY1XlMy.js";import"./CSSTransition-D13qlzzv.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-TxGYnVGY.js";import"./Avatar-CW9ih4cl.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
