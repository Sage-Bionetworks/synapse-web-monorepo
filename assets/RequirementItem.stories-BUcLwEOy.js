import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BKTbSptn.js";import{M as x}from"./MarkdownSynapse-DpKtLZvN.js";import{d as s}from"./ToastMessage-DvQAXKQ3.js";import{R as n,a as t}from"./RequirementItem-BNq6PJCx.js";import{P as O}from"./Paper-M2B7o7bl.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Ctimzu5z.js";import"./VerificationSubmission-CeTJ0zsJ.js";import"./useFiles-DB0e0hPr.js";import"./SynapseConstants-CkDDb4nX.js";import"./OrientationBanner-B9qwIkMf.js";import"./index-BqFegMld.js";import"./index-B9OyQX1A.js";import"./iframe-BP07wQTd.js";import"./spreadSx-CwcO6WA9.js";import"./react-sEPuFSBp.js";import"./FullWidthAlert-OAdAocG4.js";import"./Alert-CULkja03.js";import"./createTheme-CInhu1jk.js";import"./DefaultPropsProvider-CeF2hwve.js";import"./useSlot-BHxKxjwn.js";import"./useForkRef-pLKXAdEO.js";import"./createSimplePaletteValueFilter-DDD03rs-.js";import"./createSvgIcon-qvaYmqZl.js";import"./Close-tKgndRYU.js";import"./IconButton-CSnfzuaL.js";import"./useTimeout-o50hQisp.js";import"./ButtonBase-C_jXD34S.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-bun6EuGk.js";import"./Stack-h7MpaAG4.js";import"./extendSxProp-B-dbdkUC.js";import"./getThemeProps-Bf9O57Lq.js";import"./useTheme-CTj6XPaI.js";import"./Box-Rvhx3he2.js";import"./AlertTitle-CM4Zufgn.js";import"./Typography-8PbpLowS.js";import"./index-PUfiHWKW.js";import"./useTheme-B2RdUQoD.js";import"./ClickAwayListener-CKCTU7Hr.js";import"./getReactElementRef-CBjh8eNi.js";import"./index-HQ1M5axI.js";import"./index-BfGC-F9L.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B6mZ4tx-.js";import"./Tooltip-DML62oGu.js";import"./index-CIP6CSIB.js";import"./useControlled-CbbNDYpt.js";import"./Popper-B4buaPr2.js";import"./Button-CHa3icr7.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Cb5gkxAY.js";import"./useQuery-CTnkseG7.js";import"./QueryClientProvider-ERQKxfhR.js";import"./Link-CEagi7As.js";import"./Collapse-DUIYxFRt.js";import"./_baseUniq-To6IgKKu.js";import"./_Uint8Array-CFpIIXDl.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CpneB495.js";import"./isArray-Dxzbedgu.js";import"./_getTag-K_H0Alg4.js";import"./isEqual-BtbKiwVM.js";import"./merge-CqU8LKYn.js";import"./_initCloneObject-r3Ku30rA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-R-BmApSw.js";import"./inputBaseClasses-B2yUi8zg.js";import"./calculateFriendlyFileSize-0sPzrG8j.js";import"./CheckCircleTwoTone-GSVLRlFB.js";import"./InfoTwoTone-DWDlvgmG.js";import"./useMutation-7S_5iV1F.js";import"./dayjs.min-CwPglUFt.js";import"./chunk-AYJ5UCUI-dLqhGQtZ.js";import"./cloneDeep-YzygmnfS.js";import"./Skeleton-BFGVvZk1.js";import"./SkeletonButton-Be_17pDH.js";import"./SkeletonInlineBlock-C_G0CuhQ.js";import"./SkeletonTable-pZ2qAkT0.js";import"./times-BlZsaLGv.js";import"./toInteger-qS8aUVA5.js";import"./isSymbol-B9s30Dkt.js";import"./SkeletonParagraph-C134Q_I9.js";import"./uniqueId-CHcehNxN.js";import"./toString-bh2lwzql.js";import"./CSSTransition-Bia6zakx.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-C06Ad2fc.js";import"./Avatar-CBBdqtcm.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
