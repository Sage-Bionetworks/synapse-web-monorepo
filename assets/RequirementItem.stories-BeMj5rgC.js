import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-BRyq1vFM.js";import{d as s}from"./ToastMessage-DY30oKyL.js";import{R as n,a as t}from"./RequirementItem-BreS-6ww.js";import{P as O}from"./Paper-xyOjuvD3.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-5cvKAYad.js";import"./SynapseConstants-C0Oof1mV.js";import"./OrientationBanner-ChfhgKIK.js";import"./index-DT0pxb4l.js";import"./index-BSauoGfH.js";import"./iframe-DWGvaAod.js";import"./spreadSx-CwcO6WA9.js";import"./react-DvWYcNrf.js";import"./FullWidthAlert-BjFxaKcs.js";import"./Alert-BSp4rsLj.js";import"./createTheme-D6cSveZq.js";import"./DefaultPropsProvider-BIK3-Fp6.js";import"./useSlot-CKwwXJIc.js";import"./useForkRef-l9YKqcDP.js";import"./createSimplePaletteValueFilter-BWAPHtgQ.js";import"./createSvgIcon-BaHS3xPA.js";import"./Close-BsTP-0ob.js";import"./IconButton-CYK1p1UC.js";import"./useTimeout-Ck3AelOe.js";import"./ButtonBase-ChuwbCIj.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cq-vDarp.js";import"./Stack-kDTTSjyS.js";import"./extendSxProp-D4_LNznW.js";import"./getThemeProps-pNkz1--F.js";import"./useTheme-BD4_qs7q.js";import"./Box-Gm5XzVTK.js";import"./AlertTitle-CYlWv99z.js";import"./Typography-DHm0M_nf.js";import"./index-CVqqfbay.js";import"./useTheme-BcEdJmmM.js";import"./ClickAwayListener-B2wPvcHr.js";import"./getReactElementRef-BQ2E9ykM.js";import"./index-CvIyfMno.js";import"./index-DzXs5bUm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-SOx8WHBZ.js";import"./Tooltip-Din95ZoG.js";import"./index-DjvCuIBi.js";import"./useControlled-CIuSvVaG.js";import"./Popper-BXl7GrUw.js";import"./Button-CGZDb9Y1.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-yaxXeeQ-.js";import"./QueryClientProvider-BnNBfSVg.js";import"./Link-BNKsM4Ur.js";import"./Collapse-d18fKv2o.js";import"./_baseUniq-tvr54zCu.js";import"./_Uint8Array-Bu2OVTOS.js";import"./isArray-C0X-wnSg.js";import"./_getTag-g2DuEzz2.js";import"./isEqual-BhH8zZbz.js";import"./merge-ClevoGJL.js";import"./_initCloneObject-BQ0OliXN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CA9d53gI.js";import"./inputBaseClasses-Cu4m9kbn.js";import"./calculateFriendlyFileSize-dXB7O8uO.js";import"./CheckCircleTwoTone-DxF39P8s.js";import"./InfoTwoTone-DybDK18U.js";import"./useMutation-BtGW8mOs.js";import"./dayjs.min-B2aQJTC-.js";import"./chunk-AYJ5UCUI-DB_-8FL4.js";import"./cloneDeep-NwMlNjcb.js";import"./Skeleton-CH21gXoa.js";import"./SkeletonButton-CZUldUCN.js";import"./SkeletonInlineBlock-Dtqqz1PB.js";import"./SkeletonTable-CHsmgoNb.js";import"./times-BnOuJ7xC.js";import"./toInteger-a7kDltlj.js";import"./toNumber-BTmms7hj.js";import"./isSymbol-BdvBAJw8.js";import"./SkeletonParagraph-ijiIpL0F.js";import"./uniqueId-DKq_DpyZ.js";import"./toString-JnpSIElY.js";import"./CSSTransition-hKIeJlNN.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CjX_GyIY.js";import"./Avatar-Ds-t215N.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
