import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-Cy1Qvfhu.js";import{d as s}from"./ToastMessage-Z4DuTDLV.js";import{R as n,a as t}from"./RequirementItem-Cung_67L.js";import{P as O}from"./Paper-BqG7mEz-.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-S06PjAvD.js";import"./SynapseConstants-dQCFsE3i.js";import"./OrientationBanner-j-cZ3R3X.js";import"./index-DvboFt9i.js";import"./index-BFt-kCns.js";import"./iframe-BkSR-qmL.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cwd-ZDVN.js";import"./FullWidthAlert-D9PrSEnV.js";import"./Alert-DcMM7aLS.js";import"./createTheme-DBcr5Ze-.js";import"./DefaultPropsProvider-DUvQZAvc.js";import"./useSlot-E9Y6G3Qh.js";import"./useForkRef-Cqml73TA.js";import"./createSimplePaletteValueFilter-DRHG1jQt.js";import"./createSvgIcon-CttGmGJG.js";import"./Close-B1dynM7p.js";import"./IconButton-CcZKCjbJ.js";import"./useTimeout-BBxsofLl.js";import"./ButtonBase-O6v8WT9c.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DIJdjpxt.js";import"./Stack-C1vT0niC.js";import"./extendSxProp-B6hqwN5r.js";import"./getThemeProps-Ds55W40A.js";import"./useTheme-juTxtaXW.js";import"./Box-gHZjr62r.js";import"./AlertTitle-CbAF6C0-.js";import"./Typography-C-daSuH-.js";import"./index-DzgWRzl2.js";import"./useTheme-BwGwlFiU.js";import"./ClickAwayListener-DhxOx_gt.js";import"./getReactElementRef-DSub8oZl.js";import"./index-C-kMeRMp.js";import"./index-B9nWus-h.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGC7Jk7p.js";import"./Tooltip-CYPwHyOs.js";import"./index-CsR2r3uk.js";import"./useControlled-pote1Ppd.js";import"./Popper-DZKABHu6.js";import"./Button-DOSR-9oh.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-C_kBIk68.js";import"./QueryClientProvider-mCVT3njF.js";import"./Link-DksPbLJd.js";import"./Collapse-4iqd6Oxl.js";import"./_baseUniq-gvahgWTI.js";import"./_Uint8Array-CLL54xUM.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dj-EqCVy.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CT6a0cTP.js";import"./isEqual-DgYAS2ec.js";import"./merge-D3wjv0T3.js";import"./_initCloneObject-BPJXS-H9.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DdJQRxaR.js";import"./inputBaseClasses-BThjxOQs.js";import"./calculateFriendlyFileSize-CuVDgWLK.js";import"./CheckCircleTwoTone-DETDhuzv.js";import"./InfoTwoTone-DZCtVAq2.js";import"./useMutation-BFrqJzF1.js";import"./dayjs.min-MQ8AEYdS.js";import"./chunk-AYJ5UCUI-CJ-PZnvH.js";import"./cloneDeep-BA9iNEBH.js";import"./Skeleton-DGfshh32.js";import"./SkeletonButton-DiQY4_7P.js";import"./SkeletonInlineBlock-Cgh1c5ux.js";import"./SkeletonTable-YjU6tDS5.js";import"./times-C6deZI1a.js";import"./toInteger-Bw3p0ZMC.js";import"./isSymbol-B78K1mEq.js";import"./SkeletonParagraph-Df3kkxYL.js";import"./uniqueId--MWyom-x.js";import"./toString-D_Nyp2qd.js";import"./CSSTransition-DZt6KWNn.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-yYa_VZXC.js";import"./Avatar-ChaKK63S.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
