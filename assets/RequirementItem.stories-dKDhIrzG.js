import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-CHtWv9uM.js";import{d as s}from"./ToastMessage-BoftbiKI.js";import{R as n,a as t}from"./RequirementItem-CAGhLdoh.js";import{P as O}from"./Paper-DGfiId5j.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BZkk-Nb_.js";import"./SynapseConstants-CFDmXB66.js";import"./OrientationBanner-Dzbaa3iB.js";import"./index-k5Hu8eSZ.js";import"./index-CNOD_coP.js";import"./iframe-B7beX9fc.js";import"./spreadSx-CwcO6WA9.js";import"./react-D45Oek5q.js";import"./FullWidthAlert-C-KYctTm.js";import"./Alert-BdaEog2i.js";import"./createTheme-Dr8QaAop.js";import"./DefaultPropsProvider-0BNkwUkh.js";import"./useSlot-Cmo4uO1e.js";import"./useForkRef-Dh8WXGOQ.js";import"./createSimplePaletteValueFilter-Bi8T94Z2.js";import"./createSvgIcon-DoUBNCW0.js";import"./Close-Cf8-Cnex.js";import"./IconButton-XG9vKa8a.js";import"./useTimeout-C3wGn6Ja.js";import"./ButtonBase-BYXCgz1G.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CgzCiAbs.js";import"./Stack-BaCFBVeB.js";import"./extendSxProp-Bc2u4vrI.js";import"./getThemeProps-BTbN-bVN.js";import"./useTheme-DZEQxr-3.js";import"./Box-j1U5tBug.js";import"./AlertTitle-YXpZ_rlQ.js";import"./Typography-Cfe7s5kX.js";import"./index-Bed1RkRa.js";import"./useTheme-DTovFKgt.js";import"./ClickAwayListener-CYoYah1s.js";import"./getReactElementRef-FzNjKFPL.js";import"./index-ts2EtFAQ.js";import"./index-DmQ8Zlzm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-xMuuKoQQ.js";import"./Tooltip-BVpBX0Tl.js";import"./index-BDcq4vhx.js";import"./useControlled-Clk3odGP.js";import"./Popper-HBom_ZGM.js";import"./Button-D3Wh7UHU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Kd0L9zxX.js";import"./QueryClientProvider-BU9Nf1bS.js";import"./Link-DNz2LEpH.js";import"./Collapse-C0PAI9k5.js";import"./_baseUniq-3tq4cnpB.js";import"./_Uint8Array-BBklPthB.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C1Vf3me3.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BPgWCeD8.js";import"./isEqual-CImg_hBM.js";import"./merge-DCXe3tr_.js";import"./_initCloneObject-D0Zyj4v_.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CCyFKjzK.js";import"./inputBaseClasses-D28FMvSG.js";import"./calculateFriendlyFileSize-c_1sgylr.js";import"./CheckCircleTwoTone-BDMbfUlA.js";import"./InfoTwoTone-5ZSjfGa_.js";import"./useMutation-B17cM71k.js";import"./dayjs.min-tNmmlBRn.js";import"./chunk-AYJ5UCUI-DrYvtS15.js";import"./cloneDeep-B0cW39CL.js";import"./Skeleton-DlQYAId0.js";import"./SkeletonButton-CjmH9iz_.js";import"./SkeletonInlineBlock-BUyyAanT.js";import"./SkeletonTable-BxQqo2n_.js";import"./times-ByZvvplS.js";import"./toInteger-Dyb2evR2.js";import"./isSymbol-B9wmL-k8.js";import"./SkeletonParagraph-Bjc7acM9.js";import"./uniqueId-BFPRfsaL.js";import"./toString-4b_4fNxv.js";import"./CSSTransition-CJSatyxx.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BwBqwYs0.js";import"./Avatar-BHoeMrpK.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
