import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-igGz_Ur-.js";import{d as s}from"./ToastMessage-C1U5Cygu.js";import{R as n,a as t}from"./RequirementItem-C2EEZQ8U.js";import{P as O}from"./Paper-wVWwCaVf.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-CSpN989q.js";import"./SynapseConstants-BYmnDa2q.js";import"./OrientationBanner-VaVGF65z.js";import"./index-ho4g8501.js";import"./index-DTiucX1-.js";import"./iframe-BPdeJRIc.js";import"./spreadSx-CwcO6WA9.js";import"./react-F5ucaG-H.js";import"./FullWidthAlert-Ba9F-jmT.js";import"./Alert-B41bfpeU.js";import"./createTheme-CdBGe3A9.js";import"./DefaultPropsProvider-GHBqEJT2.js";import"./useSlot-I8FLieFo.js";import"./useForkRef-DLJbdNV-.js";import"./createSimplePaletteValueFilter-DxGY06TG.js";import"./createSvgIcon-BTFgaDhp.js";import"./Close-lSmauOAH.js";import"./IconButton-DYtoyTee.js";import"./useTimeout-C3q3_1GQ.js";import"./ButtonBase-CODV-5ol.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DgaFUJOs.js";import"./Stack-08nnDyO9.js";import"./extendSxProp-lrmHIORZ.js";import"./getThemeProps-DD6PYkmp.js";import"./useTheme-DjT_8-R5.js";import"./Box-m6d38t7d.js";import"./AlertTitle-D4RtFlat.js";import"./Typography-SEe_jd4g.js";import"./index-Bcg5C1w6.js";import"./useTheme-BI99mBpH.js";import"./ClickAwayListener-BqkOztd0.js";import"./getReactElementRef-D4EdHFTt.js";import"./index-EXgdFXVC.js";import"./index-DHZ9XFHD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bxaf_lLg.js";import"./Tooltip-lkEFrFtR.js";import"./index-DeTyZKLb.js";import"./useControlled-ChiK7g5q.js";import"./Popper-3uMhxsXW.js";import"./Button-RFo2xAOi.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DySft6ts.js";import"./QueryClientProvider-Br6Pa3c6.js";import"./Link-DkqxuGR5.js";import"./Collapse-B0SFoJWz.js";import"./_baseUniq-kecnPfBf.js";import"./_Uint8Array-BPSdPbUW.js";import"./isArray-4pmS_fD6.js";import"./_getTag-Bq4R2FwC.js";import"./isEqual-BojHzzbq.js";import"./merge-Xk0KA-e4.js";import"./_initCloneObject-QfqTw_-S.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bh3JWz5y.js";import"./inputBaseClasses-DHVG9zCC.js";import"./calculateFriendlyFileSize-CBs-QxsO.js";import"./CheckCircleTwoTone-vWDfNogy.js";import"./InfoTwoTone-DNofee99.js";import"./useMutation-QRG3uNAG.js";import"./dayjs.min-Brm1XBLT.js";import"./chunk-AYJ5UCUI-DnCbA0Sb.js";import"./cloneDeep-CYQ_RdzJ.js";import"./Skeleton-B-x23h3k.js";import"./SkeletonButton-CYC1L5mG.js";import"./SkeletonInlineBlock-C1-ytsmf.js";import"./SkeletonTable-ClTmUJZQ.js";import"./times-D0TetY3b.js";import"./toInteger-DCqYpy_N.js";import"./isSymbol-DuyNHKdV.js";import"./SkeletonParagraph-DKH1Tv8K.js";import"./uniqueId-Y_JtGaxs.js";import"./toString-BC7U3RQ1.js";import"./CSSTransition-DLEf4ju2.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D1Rl3mYI.js";import"./Avatar-BE7mDRf1.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
