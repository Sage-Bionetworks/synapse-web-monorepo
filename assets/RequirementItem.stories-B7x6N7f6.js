import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-xRRJL7hS.js";import{d as s}from"./ToastMessage-NJ-xQ7Wp.js";import{R as n,a as t}from"./RequirementItem-B3PjSqOo.js";import{P as O}from"./Paper-BaQ9wGuk.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-DBKLnBhU.js";import"./SynapseConstants-Cf2IvIMd.js";import"./OrientationBanner-DGsT6Byd.js";import"./index-B8A8l2gJ.js";import"./index-C8_-xO9z.js";import"./iframe-D4GfFzpq.js";import"./spreadSx-CwcO6WA9.js";import"./react-HsrREZVI.js";import"./FullWidthAlert-B414p8-Y.js";import"./Alert-ZdCqqW67.js";import"./createTheme-B6Lo4ZED.js";import"./DefaultPropsProvider-B3Z6d7cd.js";import"./useSlot-aolT_R-h.js";import"./useForkRef-BUNGokmg.js";import"./createSimplePaletteValueFilter-BO0vWEti.js";import"./createSvgIcon-CYBMDAOL.js";import"./Close-XMwLoZpf.js";import"./IconButton-IGGC8VbQ.js";import"./useTimeout-CNsX2D-4.js";import"./ButtonBase-PBhvszGq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DEPIic2u.js";import"./Stack-DsYO_YqT.js";import"./extendSxProp-Dx4u8pgT.js";import"./getThemeProps-K5kW8-AJ.js";import"./useTheme-6zkbiB4i.js";import"./Box-C1CMpwHK.js";import"./AlertTitle-DryrJGv0.js";import"./Typography-CuNt_Raz.js";import"./index-DfEZuSiJ.js";import"./useTheme-BLLd2G7c.js";import"./ClickAwayListener-Bvd5lGVf.js";import"./getReactElementRef-B9dtttgM.js";import"./index-RcggQRry.js";import"./index-B5NA_6ph.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BkxUsJGb.js";import"./Tooltip-1t4QqBuE.js";import"./index-pYCdg-1c.js";import"./useControlled-C1H5CV1T.js";import"./Popper-pAYhUujr.js";import"./Button-BiRQv90a.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-DZw2U2Bh.js";import"./QueryClientProvider-CRWXaDQK.js";import"./Link-DnBeaHc4.js";import"./Collapse-uRyCInYg.js";import"./_baseUniq-B1cLkrhm.js";import"./_Uint8Array-BQnIyb4e.js";import"./isArray-DhvEetYU.js";import"./_getTag-sTGbf34T.js";import"./isEqual-CRZ6MpvO.js";import"./merge-Cyse0J_S.js";import"./_initCloneObject-bMjAFI63.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-bm54aEoZ.js";import"./inputBaseClasses-BoW5TwFg.js";import"./calculateFriendlyFileSize-lxyJTl9W.js";import"./CheckCircleTwoTone-BXe916XB.js";import"./InfoTwoTone-DwDxmgRy.js";import"./useMutation-DfXyzvsj.js";import"./dayjs.min-DjfB_4vT.js";import"./chunk-AYJ5UCUI-CdIa_0T-.js";import"./cloneDeep-DsDZvi6Z.js";import"./Skeleton-1wBICD1d.js";import"./SkeletonButton-BI2REpZs.js";import"./SkeletonInlineBlock-IvhjV_bj.js";import"./SkeletonTable-7i2ai9sQ.js";import"./times-Cs8vgqz1.js";import"./toInteger-Swju-sLj.js";import"./toNumber-QOgK7d6E.js";import"./isSymbol-CbvmYLVe.js";import"./SkeletonParagraph-kGCMfk8Y.js";import"./uniqueId-C1U9yYRz.js";import"./toString-DmrLOQi1.js";import"./CSSTransition-WZ2r-VOv.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BSeizO63.js";import"./Avatar-j4KFQTTg.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
