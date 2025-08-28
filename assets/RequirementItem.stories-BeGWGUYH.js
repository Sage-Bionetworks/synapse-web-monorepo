import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-CH79z1jT.js";import{d as s}from"./ToastMessage-BGwi_ZAR.js";import{R as n,a as t}from"./RequirementItem-kvhF-i02.js";import{P as O}from"./Paper-D5jfsf_T.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-GseVYpjW.js";import"./SynapseConstants-BecqIzhK.js";import"./OrientationBanner-CMmM2nyC.js";import"./index-qKI0Fo62.js";import"./index-DUnR2wGU.js";import"./iframe-DxIMUiis.js";import"./spreadSx-CwcO6WA9.js";import"./react-BtLSKeTf.js";import"./FullWidthAlert-CgwAdh3k.js";import"./Alert-OcKEIYp6.js";import"./createTheme-BeLomVuw.js";import"./DefaultPropsProvider-Ch4-9Ppr.js";import"./useSlot-QI6ENMq9.js";import"./useForkRef-12BzkMWI.js";import"./createSimplePaletteValueFilter-DXXCLVZW.js";import"./createSvgIcon-BP5oj4Nx.js";import"./Close-CNp0-j0C.js";import"./IconButton-CxtjwAaM.js";import"./useTimeout-NW5ssq_A.js";import"./ButtonBase-cWAJQrxa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B4vna3RV.js";import"./Stack-DiJhusha.js";import"./extendSxProp-CrNYGNvh.js";import"./getThemeProps-DmCS3g9S.js";import"./useTheme-Bz9krQHR.js";import"./Box-DdkmxDon.js";import"./AlertTitle-D82A8tMJ.js";import"./Typography-D4ivI4uJ.js";import"./index-DSC2q4_Y.js";import"./useTheme-DqJVsaV_.js";import"./ClickAwayListener-XLfp0UFq.js";import"./getReactElementRef-CFI6Vxtr.js";import"./index-C70ee6RX.js";import"./index-BcO9ILEt.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BqG2xl5N.js";import"./Tooltip-D3bJvEAc.js";import"./index-CNaEswH4.js";import"./useControlled-BEh-GGuG.js";import"./Popper-CZN6YGZz.js";import"./Button-B3GtIfhR.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CsrYFBZo.js";import"./useQuery-BoJvFqc3.js";import"./QueryClientProvider-CmpDJ9Jl.js";import"./Link-BLcNJuX4.js";import"./Collapse-DOavcrSg.js";import"./_baseUniq-BhG86eyQ.js";import"./_Uint8Array-DhmTz7H2.js";import"./isArray-CHk-r7uL.js";import"./_getTag-C-hzITuP.js";import"./isEqual-CRTjFSJk.js";import"./merge-DwBHZN9j.js";import"./_initCloneObject-Uix_53RU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BiglsW2E.js";import"./inputBaseClasses-C0Gy_uNc.js";import"./calculateFriendlyFileSize-DgnhvtUi.js";import"./CheckCircleTwoTone-BuvGG69W.js";import"./InfoTwoTone-DXv8Re3u.js";import"./useMutation-4FuFtcke.js";import"./dayjs.min-DjHfNNqw.js";import"./chunk-AYJ5UCUI-C211ZVfw.js";import"./cloneDeep-NhLAab3Z.js";import"./Skeleton-BpQQLQwA.js";import"./SkeletonButton-qO6NDYYY.js";import"./SkeletonInlineBlock-BSEr0iih.js";import"./SkeletonTable-C84jxVAM.js";import"./times-CyZ6BRW1.js";import"./toInteger-rN0-b999.js";import"./isSymbol-Ba5uo1Dt.js";import"./SkeletonParagraph-C3kdU6O9.js";import"./uniqueId-BUfkwSOZ.js";import"./toString-BKMzG6Be.js";import"./CSSTransition-CcRQdOSS.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B24HHPlU.js";import"./Avatar-Dp9OKqOv.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
