import{j as a}from"./jsx-runtime-fkddYsRa.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-B5fzcxC_.js";import{d as s}from"./ToastMessage-C5ZqHJjk.js";import{R as n,a as t}from"./RequirementItem-0yK1CIpA.js";import{P as O}from"./Paper-CRdKJZEk.js";import"./index-Cv6nX037.js";import"./iframe-DgCb13ZA.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-C2-6Q0yh.js";import"./SynapseConstants-B6O6HlOX.js";import"./OrientationBanner-B6u9ADNN.js";import"./index-Vb_Vm6Or.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dmo1sR7O.js";import"./FullWidthAlert-ps7c1lte.js";import"./Alert-DDBgpbQe.js";import"./createTheme-D0G-YdBM.js";import"./DefaultPropsProvider-MkP_nBB1.js";import"./useSlot-D9bUdOMX.js";import"./useForkRef-BhjVp7Fj.js";import"./createSimplePaletteValueFilter-CetX1-So.js";import"./createSvgIcon-BOkPVFng.js";import"./Close-CqKNMRrw.js";import"./IconButton-C7gfjzB0.js";import"./useTimeout-CWy7v3j4.js";import"./ButtonBase-LNl8xRHv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ci1F78nB.js";import"./Stack-53rHix6w.js";import"./extendSxProp-DwLH-5iL.js";import"./getThemeProps-D-_clwMN.js";import"./useTheme-5BzmGwuh.js";import"./Box-BhadhPsK.js";import"./AlertTitle-rtM38Mk8.js";import"./Typography-Cned48Hn.js";import"./index-DoLSYN_E.js";import"./useTheme-ew_Nfzhg.js";import"./ClickAwayListener-CZsKMghQ.js";import"./getReactElementRef-C8j0xIA6.js";import"./index-yKH7ayG0.js";import"./index-5fD7g6aK.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-vhaNN5gj.js";import"./Tooltip-B4z_2CfG.js";import"./index-A5Xj5tp_.js";import"./useControlled-C9uiSwtu.js";import"./Popper-CzOnVF7V.js";import"./Button-CmrMbQmW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-B8tUDD-z.js";import"./utils-DLIvMn1C.js";import"./Link-Cc7_4k2q.js";import"./Collapse-DpBQClav.js";import"./_baseUniq-Bj3tTBPP.js";import"./_Uint8Array-DSvqUWPA.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-pddUo-wZ.js";import"./isArray-Dxzbedgu.js";import"./_getTag-e_ukLjVm.js";import"./isEqual-CfffNHyk.js";import"./merge-CF373bos.js";import"./_initCloneObject-CBrcGSWB.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BqFRP1kA.js";import"./inputBaseClasses-cUXSQoU1.js";import"./calculateFriendlyFileSize-CMzKI-kY.js";import"./CheckCircleTwoTone-BgfHa_Vb.js";import"./InfoTwoTone-Csrt26-i.js";import"./useMutation-DytpqhvV.js";import"./dayjs.min-_KuDUFdc.js";import"./chunk-AYJ5UCUI-P89pSlIj.js";import"./cloneDeep-CwdKXb1h.js";import"./Skeleton-wOC2k2PG.js";import"./SkeletonButton-DWqGPdOh.js";import"./SkeletonInlineBlock-D6ncKH7D.js";import"./SkeletonTable-ChWTmo65.js";import"./times-BF0VuVwQ.js";import"./toInteger-DykcHzSj.js";import"./isSymbol-CHhO1Bz5.js";import"./SkeletonParagraph-DQ8x85WC.js";import"./uniqueId-CBoi-D9P.js";import"./toString-DvuKfUEq.js";import"./CSSTransition-D606O9_p.js";import"./ConditionalWrapper-BFDGQ65p.js";import"./LockTwoTone-BXkCvO82.js";import"./Avatar-Ck0-wSZ2.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
