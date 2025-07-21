import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BZeEk342.js";import{d as s}from"./ToastMessage-D6GMcbQz.js";import{R as n,a as t}from"./RequirementItem-dwTIo1X_.js";import{P as O}from"./Paper-Cm0ZKM3A.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-DW966Sxu.js";import"./SynapseConstants-CkvAnyYS.js";import"./OrientationBanner-B_V_8P-O.js";import"./index-CtHvokBV.js";import"./index-BnMe2I9X.js";import"./iframe-Dyk8IJ-S.js";import"./spreadSx-CwcO6WA9.js";import"./react-DtD5Y0AT.js";import"./FullWidthAlert-UbNPxrSF.js";import"./Alert-BjLLEYQE.js";import"./createTheme-CRQ7I_dX.js";import"./DefaultPropsProvider-BjHJDCJr.js";import"./useSlot-DaAbZ6g5.js";import"./useForkRef-DX3Y6Sj8.js";import"./createSimplePaletteValueFilter-cWNbIY60.js";import"./createSvgIcon-C2q1nMwu.js";import"./Close-C7SsaOD8.js";import"./IconButton-BpjBSXnW.js";import"./useTimeout-CaCqnfzd.js";import"./ButtonBase-C8vqs9WW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-By7awDiI.js";import"./Stack-C-HLu5NC.js";import"./extendSxProp-BKMPj3sl.js";import"./getThemeProps-DT-e-uqc.js";import"./useTheme-C0reHQDp.js";import"./Box-CAzztnMs.js";import"./AlertTitle-BHzRW8bN.js";import"./Typography-YqtMErXG.js";import"./index-DkcUolcj.js";import"./useTheme-DGSOp33U.js";import"./ClickAwayListener-Yo19yUA2.js";import"./getReactElementRef-ZqzxhBtP.js";import"./index-Dy1Bjgd_.js";import"./index-CYCi8QkA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DdJ2MXtp.js";import"./Tooltip-D0YpnBhP.js";import"./index-BvEgmguE.js";import"./useControlled-DNKL0F_F.js";import"./Popper-BdxdSPd9.js";import"./Button-ZtEOC2FI.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-D0ZIeSwo.js";import"./QueryClientProvider-B1B9bJpc.js";import"./Link-D5Q1X9eZ.js";import"./Collapse-BryfRUf4.js";import"./_baseUniq-C3xWzPcM.js";import"./_Uint8Array-WQu6sT7x.js";import"./isArray-_2Wn4RW0.js";import"./_getTag-BRueWzvo.js";import"./isEqual-CHx69R3G.js";import"./merge-Dz8auUWg.js";import"./_initCloneObject-T6ZxVYQi.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BVHiNZZI.js";import"./inputBaseClasses-D5snuY8I.js";import"./calculateFriendlyFileSize-DGWeS3EQ.js";import"./CheckCircleTwoTone-O3B4OxHZ.js";import"./InfoTwoTone-ZATdcR--.js";import"./useMutation-DYT2sKRm.js";import"./dayjs.min-BEz-0kVO.js";import"./chunk-AYJ5UCUI-CifHNI74.js";import"./cloneDeep-D2swbxo-.js";import"./Skeleton-P1Q-QFo6.js";import"./SkeletonButton-BeLS2JMV.js";import"./SkeletonInlineBlock-C7kIC6Jo.js";import"./SkeletonTable-BDQFVOtM.js";import"./times-BsHxc-DE.js";import"./toInteger-Dz5QnYQ9.js";import"./toNumber-Dj6uHqmM.js";import"./isSymbol--G4KAMsC.js";import"./SkeletonParagraph-cY1-XFwb.js";import"./uniqueId-DqfS3uIq.js";import"./toString-D_Gw6gIC.js";import"./CSSTransition-CyTj1q0I.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DNSGnz6R.js";import"./Avatar-WaWy2VXo.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
