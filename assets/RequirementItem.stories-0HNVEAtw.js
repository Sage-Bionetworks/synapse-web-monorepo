import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-sCcxACVe.js";import{d as s}from"./ToastMessage-B9-g3Cy7.js";import{R as n,a as t}from"./RequirementItem-2vA2TgXQ.js";import{P as O}from"./Paper-D9hajRDM.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-CzKjjYtp.js";import"./SynapseConstants-DhETcuUG.js";import"./OrientationBanner-BO2Urp1Z.js";import"./index-DmNLJKNh.js";import"./index-D4HCKe9w.js";import"./iframe-DmVsNHze.js";import"./spreadSx-CwcO6WA9.js";import"./react-Cf5Ec-mS.js";import"./FullWidthAlert-DTnEraAC.js";import"./Alert-DZeS4a6d.js";import"./createTheme-DDjBIDwT.js";import"./DefaultPropsProvider-ZG31g4it.js";import"./useSlot-B6tvNwBv.js";import"./useForkRef-CtbIu23o.js";import"./createSimplePaletteValueFilter-BfnPoD90.js";import"./createSvgIcon-KWX4yQl-.js";import"./Close-BXYzJc-1.js";import"./IconButton-C_01hWEL.js";import"./useTimeout-B3vqbFY1.js";import"./ButtonBase-5xAiWb9k.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ClcLOpgT.js";import"./Stack-pvEbUifr.js";import"./extendSxProp-BRR-amD5.js";import"./getThemeProps-vcNQnBjM.js";import"./useTheme-B-XUUHR4.js";import"./Box-CnC4K3Hl.js";import"./AlertTitle-B8t1dWfY.js";import"./Typography-COIcc1hS.js";import"./index-Dv8t99-T.js";import"./useTheme-CMCRSdXO.js";import"./ClickAwayListener-DTjm8Qvd.js";import"./getReactElementRef-Cq2rgrLM.js";import"./index-CDdDji97.js";import"./index-ij53IW3H.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAl4bw2D.js";import"./Tooltip-BiehG5fl.js";import"./index-Cr6df_e3.js";import"./useControlled-CG4yijLR.js";import"./Popper-D6_eAqlt.js";import"./Button-B4c76i7l.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-c65xEHlU.js";import"./QueryClientProvider-C2sJR7rF.js";import"./Link-D-8puque.js";import"./Collapse-TlU8ywi5.js";import"./_baseUniq-BWQ-3uky.js";import"./_Uint8Array-v1dD2eCV.js";import"./isArray-DGXFKXW_.js";import"./_getTag-nqsjAOYQ.js";import"./isEqual-CR012Pz3.js";import"./merge-h4l3whDn.js";import"./_initCloneObject-DBdarpnq.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CQjdMO4r.js";import"./inputBaseClasses-ByCdm5ps.js";import"./calculateFriendlyFileSize-DXggbpxX.js";import"./CheckCircleTwoTone-BcVs8xEZ.js";import"./InfoTwoTone-QwWHAuS5.js";import"./useMutation-Ddf_PzNC.js";import"./dayjs.min-CwuDG8BM.js";import"./chunk-AYJ5UCUI-CwOFpPmP.js";import"./cloneDeep-ChqpFpcu.js";import"./Skeleton-BWhOU1Pc.js";import"./SkeletonButton-D8F-osuW.js";import"./SkeletonInlineBlock-C8_IBTRt.js";import"./SkeletonTable-Q-mqnuga.js";import"./times-CqWp89Mi.js";import"./toInteger-DyvaWaYA.js";import"./isSymbol-C0RTHsY7.js";import"./SkeletonParagraph-C9JmycIn.js";import"./uniqueId-DySWb7yp.js";import"./toString-D5g_QE-Z.js";import"./CSSTransition-Bz-XY7j2.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-JhSH1GaM.js";import"./Avatar-Bru-Wtja.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
