import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BdB4RFR8.js";import{d as s}from"./ToastMessage-B5xi6i4j.js";import{R as n,a as t}from"./RequirementItem-BaxzQ1yj.js";import{P as O}from"./Paper-CSESaBNh.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-B8v_yoVq.js";import"./SynapseConstants-D5MGXB0b.js";import"./OrientationBanner-DXfsKPKD.js";import"./index-CrtuBj0B.js";import"./index-C6CB2jWR.js";import"./iframe-BrY7ve3a.js";import"./spreadSx-CwcO6WA9.js";import"./react-C7XjUzLS.js";import"./FullWidthAlert-CKUNv5n5.js";import"./Alert-CY6v2Us8.js";import"./createTheme-BxrJIZZA.js";import"./DefaultPropsProvider-2rL3zKZZ.js";import"./useSlot-40XJx3zz.js";import"./useForkRef-Cpa6MheN.js";import"./createSimplePaletteValueFilter-CAMoPieZ.js";import"./createSvgIcon-BTXgHK0C.js";import"./Close-BPdP5AlG.js";import"./IconButton-CbdRsmZ_.js";import"./useTimeout-hVuR9U1q.js";import"./ButtonBase-DvVhWcii.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-81Z4_lZz.js";import"./Stack-DtCherd2.js";import"./extendSxProp-BpXXdIFm.js";import"./getThemeProps-BtEAG56k.js";import"./useTheme-XKQ19B89.js";import"./Box-Cy_lKH6E.js";import"./AlertTitle-CkzFa2mO.js";import"./Typography-BRpkhNhA.js";import"./index-CLQctDsx.js";import"./useTheme-B5LoXWfl.js";import"./ClickAwayListener-BmrFbcSi.js";import"./getReactElementRef-B9ecqkhl.js";import"./index-DDRx11n6.js";import"./index-C9S1haND.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-5B01QhkT.js";import"./Tooltip-bO2wIMLb.js";import"./index--2jRr67_.js";import"./useControlled-CprGF-Oj.js";import"./Popper-B-aCHUvm.js";import"./Button-ARfYFQRF.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-CSjhYa6F.js";import"./QueryClientProvider-D6vTImx2.js";import"./Link-CL9jvq0Z.js";import"./Collapse-DZ4hP59A.js";import"./_baseUniq-BxY9p7tT.js";import"./_Uint8Array-RSRR2-ef.js";import"./isArray-3Re1H6_m.js";import"./_getTag-DPkIZdby.js";import"./isEqual-C9Q3mZ9F.js";import"./merge-U0hqNhRx.js";import"./_initCloneObject-BO3X6uKd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D6mYJQm1.js";import"./inputBaseClasses-DISLeeEk.js";import"./calculateFriendlyFileSize-K8w4xgaX.js";import"./CheckCircleTwoTone-BJ-saQul.js";import"./InfoTwoTone-BZ1ttLwb.js";import"./useMutation-C3GuUf9J.js";import"./dayjs.min-zjrh0DVn.js";import"./chunk-AYJ5UCUI-DV9WKtjr.js";import"./cloneDeep-DeeuzNKv.js";import"./Skeleton-gFmRZZ7u.js";import"./SkeletonButton-DRTuqcOw.js";import"./SkeletonInlineBlock-C5aUcJ2r.js";import"./SkeletonTable-IJ35E9J4.js";import"./times-BriV-qC4.js";import"./toInteger-D1p5Dqsz.js";import"./toNumber-mRdWZhby.js";import"./isSymbol-BrAzQgXf.js";import"./SkeletonParagraph-D89kab59.js";import"./uniqueId-DtAj21rG.js";import"./toString-BDQxPLsT.js";import"./CSSTransition-CfwGvUhr.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B95OHkzP.js";import"./Avatar-PryAVuF-.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
