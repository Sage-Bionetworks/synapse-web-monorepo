import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-D9r193lv.js";import{d as s}from"./ToastMessage-Cz-1XOv9.js";import{R as n,a as t}from"./RequirementItem-DiUeiS08.js";import{P as O}from"./Paper-Dqc9mm5b.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-DrqNmeIy.js";import"./SynapseConstants-BI6YoEJw.js";import"./OrientationBanner-BeN_TaQn.js";import"./index-DaUI7t1z.js";import"./index-D0zaLgG5.js";import"./iframe-CHJdwkcb.js";import"./spreadSx-CwcO6WA9.js";import"./react-BdOzyPAN.js";import"./FullWidthAlert-C5gjpjZu.js";import"./Alert-jUqGn7Vb.js";import"./createTheme-Bzp3Oebg.js";import"./DefaultPropsProvider-DAPNjWet.js";import"./useSlot-DiSzdLod.js";import"./useForkRef-CuivNDJr.js";import"./createSimplePaletteValueFilter-B-MvoJXT.js";import"./createSvgIcon-Dcr0Z45a.js";import"./Close-BYxRX3gz.js";import"./IconButton-BTLnF8u0.js";import"./useTimeout-t281HhHC.js";import"./ButtonBase-Bu9b7NmY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DlKJHBos.js";import"./Stack-Bj7c06tH.js";import"./extendSxProp-Cxiymmpb.js";import"./getThemeProps-Cdu9ZaST.js";import"./useTheme-BD4wcF5Z.js";import"./Box-DacBFjar.js";import"./AlertTitle-FNfB4L0h.js";import"./Typography-BsIa8Xjl.js";import"./index-3FGJ995p.js";import"./useTheme-B2DydEPb.js";import"./ClickAwayListener-DHWTmW7v.js";import"./getReactElementRef-BGcNRWrD.js";import"./index-m9qOAL3y.js";import"./index-Ctm9k-z4.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BNEREbcK.js";import"./Tooltip-D-TdaS6z.js";import"./index-eP8nXqQs.js";import"./useControlled-D2QqBVbi.js";import"./Popper-DFDQqJ6U.js";import"./Button-DMXr5qNB.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-3rFuJ5jS.js";import"./QueryClientProvider-DYNCjPRg.js";import"./Link-hmzR4kgp.js";import"./Collapse-Bw-ruChV.js";import"./_baseUniq-CDarwQKM.js";import"./_Uint8Array-CoUL8pcC.js";import"./isArray-KImGBjwy.js";import"./_getTag-BXma9e2y.js";import"./isEqual-CObDGRXD.js";import"./merge-iSY1Jn6x.js";import"./_initCloneObject-CPAze62e.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C8gO3Fgx.js";import"./inputBaseClasses-CXdJhbJw.js";import"./calculateFriendlyFileSize-D7z6QM2I.js";import"./CheckCircleTwoTone-DXTQ2ujL.js";import"./InfoTwoTone-xM9ka6cp.js";import"./useMutation-DrAgjQcR.js";import"./dayjs.min-DuzY92yz.js";import"./chunk-AYJ5UCUI-BNB_QKCv.js";import"./cloneDeep-a9Xfq6Xq.js";import"./Skeleton-C-Tmbz9Z.js";import"./SkeletonButton-C3EsblOd.js";import"./SkeletonInlineBlock-B3JbjlK8.js";import"./SkeletonTable-DG2qMh8V.js";import"./times-4exJvp1L.js";import"./toInteger-B5bShBXM.js";import"./toNumber-3xaYbVxr.js";import"./isSymbol-DGRP3ofD.js";import"./SkeletonParagraph-CH0SPJoH.js";import"./uniqueId-HbibWANQ.js";import"./toString-CDwYGPta.js";import"./CSSTransition-DmF_srQr.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CjLY6nsD.js";import"./Avatar-Ceqe_hxW.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
