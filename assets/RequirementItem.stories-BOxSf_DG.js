import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-BZ3bfxga.js";import{d as s}from"./ToastMessage-CtdklwA1.js";import{R as n,a as t}from"./RequirementItem-CkPPuXWZ.js";import{P as O}from"./Paper-ttVskSGJ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-CKcUsXxo.js";import"./SynapseConstants-f1HHzz_j.js";import"./OrientationBanner-m-cOM088.js";import"./index-Dr34NRIV.js";import"./index-Dvc8DXNj.js";import"./iframe-BwvIV_wz.js";import"./spreadSx-CwcO6WA9.js";import"./react-PzVUkSXC.js";import"./FullWidthAlert-CUjAN9qZ.js";import"./Alert-BpXwWVSg.js";import"./createTheme-D21a6jVE.js";import"./DefaultPropsProvider-DUqZ9kBw.js";import"./useSlot-DJuYx4Uy.js";import"./useForkRef-Dhz7ykZQ.js";import"./createSimplePaletteValueFilter-slgZ3hH6.js";import"./createSvgIcon-DW48BYr9.js";import"./Close-DwkY6Qiq.js";import"./IconButton-BPZiwUaT.js";import"./useTimeout-n8UuqgZm.js";import"./ButtonBase-DLjfdFYs.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BTmW-fZF.js";import"./Stack-DrKhoQrj.js";import"./extendSxProp-B4WGgZTT.js";import"./getThemeProps-B50kq3gk.js";import"./useTheme-Dc8HS8-T.js";import"./Box-CTY3I0FB.js";import"./AlertTitle-gzg991Kd.js";import"./Typography-BhPtSSz2.js";import"./index-BLJFs8HZ.js";import"./useTheme-Dmw3ER-A.js";import"./ClickAwayListener-BucHVlrs.js";import"./getReactElementRef-IfbnFzgG.js";import"./index-CqCBL84x.js";import"./index--qtQ6bhr.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CDAsFndF.js";import"./Tooltip-snkrOiqJ.js";import"./index-DxUDSVJR.js";import"./useControlled-IlM_E7l9.js";import"./Popper-C8rE9mDK.js";import"./Button-CuRvemX1.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-Bup0EY49.js";import"./QueryClientProvider-ChpI_0EU.js";import"./Link-CLvRSdAZ.js";import"./Collapse-MKzszx7X.js";import"./_baseUniq-WnlZjegG.js";import"./_Uint8Array-DayFYAX9.js";import"./isArray-9GOQtFcp.js";import"./_getTag-BkCGiN6B.js";import"./isEqual-Dks0Mg8j.js";import"./merge-Dy633DfB.js";import"./_initCloneObject-Dqf9gVZ1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bok-lFku.js";import"./inputBaseClasses-AHLU7mnu.js";import"./calculateFriendlyFileSize-tudez9ms.js";import"./CheckCircleTwoTone-B4GsZuMD.js";import"./InfoTwoTone-cRma8_X6.js";import"./useMutation-CnqeAjOr.js";import"./dayjs.min-DtZNiT87.js";import"./chunk-AYJ5UCUI-C5dJESas.js";import"./cloneDeep-DozhuijG.js";import"./Skeleton-B2H4n811.js";import"./SkeletonButton-DX_35qgn.js";import"./SkeletonInlineBlock-CJElzRNk.js";import"./SkeletonTable-Bi6Qng0B.js";import"./times-CJm66HwN.js";import"./toInteger-DMvinDWJ.js";import"./isSymbol-BxQi0hMS.js";import"./SkeletonParagraph-BuL4Zb7n.js";import"./uniqueId-BIZmBIpK.js";import"./toString-FiUiE8JL.js";import"./CSSTransition-kswIckUt.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BBWlat42.js";import"./Avatar-Dy3CCCws.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
