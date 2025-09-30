import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BMPmhWyK.js";import{d as s}from"./ToastMessage-BlAXrom5.js";import{R as n,a as t}from"./RequirementItem-t1iJK3lw.js";import{P as O}from"./Paper-C6vQplp2.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DPmKtaqp.js";import"./SynapseConstants-BbI0AJBI.js";import"./OrientationBanner-lZgnnZcG.js";import"./index-Be2xkMBW.js";import"./index-C4bFWea_.js";import"./iframe-DR_wcsJ3.js";import"./spreadSx-CwcO6WA9.js";import"./react-Diy3wJ2J.js";import"./FullWidthAlert-Bm8mD_nI.js";import"./Alert-Gm8LkqSS.js";import"./createTheme-BKtT3vHL.js";import"./DefaultPropsProvider-CsIOc2_l.js";import"./useSlot-ChH1W-cP.js";import"./useForkRef-CReL5Qun.js";import"./createSimplePaletteValueFilter-foGX4r19.js";import"./createSvgIcon-NOjMq3CR.js";import"./Close-MzmSqWNs.js";import"./IconButton-D1l0t7O6.js";import"./useTimeout-Ch_01VeS.js";import"./ButtonBase-DIEaJI0n.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D37HSALL.js";import"./Stack-wvYbR1wo.js";import"./extendSxProp-T8cT23Rr.js";import"./getThemeProps-DrmqKevn.js";import"./useTheme-BXNQ9Oj4.js";import"./Box-BV9qkT5w.js";import"./AlertTitle-CN8BhV3h.js";import"./Typography-8oN0kMzT.js";import"./index-BgV9qtHJ.js";import"./useTheme-C3LmMcRI.js";import"./ClickAwayListener-DGKw14OH.js";import"./getReactElementRef-C5BUXneH.js";import"./index-BqTtgb23.js";import"./index-D8zxXPsW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BSXzewNv.js";import"./Tooltip-Dnd3ZbUN.js";import"./index-BgIpVkb_.js";import"./useControlled-ibM83Vh5.js";import"./Popper-Bg-xoKDy.js";import"./Button-DlngBMCX.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-eVv6WEkZ.js";import"./QueryClientProvider-Bhgh6MhR.js";import"./Link-CzopMOzZ.js";import"./Collapse-C2O0PVYE.js";import"./_baseUniq-o-vnUTJB.js";import"./_Uint8Array-BTv2MYuK.js";import"./isArray-DZRaET66.js";import"./_getTag-D8MmAh0k.js";import"./isEqual-BaO30kUk.js";import"./merge-ykGFvrTe.js";import"./_initCloneObject-RtGkh5Y0.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DiIvNAK2.js";import"./inputBaseClasses-B6_bqzpm.js";import"./calculateFriendlyFileSize-D4ChoND8.js";import"./CheckCircleTwoTone-BO-FnXe-.js";import"./InfoTwoTone-CYADDrkm.js";import"./useMutation-CmFUdHTM.js";import"./dayjs.min-ClxLSL3W.js";import"./chunk-AYJ5UCUI-BOl_xBJE.js";import"./cloneDeep-B1_bHtD-.js";import"./Skeleton-DplS7Xu7.js";import"./SkeletonButton-BB1wHKKn.js";import"./SkeletonInlineBlock-BXWq-2P2.js";import"./SkeletonTable-BnM8LOBk.js";import"./times-D1l0oIKD.js";import"./toInteger-7BbEDMrt.js";import"./isSymbol-oe11Mw4O.js";import"./SkeletonParagraph-Bj3mpYEA.js";import"./uniqueId-vxyFupZU.js";import"./toString-D29nv_O4.js";import"./CSSTransition-Dz2HwWQA.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-IZ-FwFcE.js";import"./Avatar-CqagxlMF.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
