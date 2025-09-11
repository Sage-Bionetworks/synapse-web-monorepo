import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-B_5oOpFD.js";import{d as s}from"./ToastMessage-DAqYurw_.js";import{R as n,a as t}from"./RequirementItem-CBELEHBY.js";import{P as O}from"./Paper-CU61ixE5.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-dk1thily.js";import"./SynapseConstants-KeGsajGR.js";import"./OrientationBanner-D437S5nk.js";import"./index-DEdxnbu2.js";import"./index-DUdYTmGT.js";import"./iframe-BdB6XJHD.js";import"./spreadSx-CwcO6WA9.js";import"./react-GmtzOC26.js";import"./FullWidthAlert-B3oyLgJH.js";import"./Alert-moQJ5G_4.js";import"./createTheme-DWFPzI--.js";import"./DefaultPropsProvider-DyEeNxXZ.js";import"./useSlot-BkaT3gs9.js";import"./useForkRef-Ck-u4s--.js";import"./createSimplePaletteValueFilter-uLvstcBV.js";import"./createSvgIcon-CaC1UKxt.js";import"./Close-CfWvUmDT.js";import"./IconButton-BBKovbiE.js";import"./useTimeout-V3giDCFR.js";import"./ButtonBase-DcQPpRud.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D4Nuac2l.js";import"./Stack-Bo4LyGjf.js";import"./extendSxProp-S57QbXtS.js";import"./getThemeProps-7dtkUy7e.js";import"./useTheme-C1Ce151G.js";import"./Box-nePxhetE.js";import"./AlertTitle-DJtNofrQ.js";import"./Typography-C2z_Zh6j.js";import"./index-D1afb3t5.js";import"./useTheme-B83Lx1Yt.js";import"./ClickAwayListener-DEf6_Xwi.js";import"./getReactElementRef-Cz-ckvWn.js";import"./index-DwSYObV4.js";import"./index-yS8BlOB_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B9hk4yxs.js";import"./Tooltip-bSFGcH92.js";import"./index-B4oHC8c-.js";import"./useControlled-DMxpFoel.js";import"./Popper-D12HzteZ.js";import"./Button-BR3jAR33.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-SO-6-VdB.js";import"./QueryClientProvider-3LpSImf3.js";import"./Link-DFKa6a8_.js";import"./Collapse-BMSdPa9t.js";import"./_baseUniq-sr8vBqLy.js";import"./_Uint8Array-Cw0eJEb3.js";import"./isArray-HsSskGIt.js";import"./_getTag-BuCIjrxV.js";import"./isEqual-1CR8dmm0.js";import"./merge-01PMaHOz.js";import"./_initCloneObject-ChW2f-gZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BrDAfqPP.js";import"./inputBaseClasses-BvzR5aac.js";import"./calculateFriendlyFileSize-CWTRee5o.js";import"./CheckCircleTwoTone-B0aYIoVs.js";import"./InfoTwoTone-BIM_DGH9.js";import"./useMutation-bbCrE7-i.js";import"./dayjs.min-BC_L2v2b.js";import"./chunk-AYJ5UCUI-B7YF2jCw.js";import"./cloneDeep-DtGhnbbh.js";import"./Skeleton-BvoupDet.js";import"./SkeletonButton-4kJXBsWi.js";import"./SkeletonInlineBlock-fk7f2_hO.js";import"./SkeletonTable-B7LKy_GN.js";import"./times-CebaOTze.js";import"./toInteger-CkXMamp4.js";import"./isSymbol-FSXbKjwY.js";import"./SkeletonParagraph-BFV2fqCs.js";import"./uniqueId-DIGXZYbK.js";import"./toString-ELhlQwan.js";import"./CSSTransition-CrNlCHrU.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-hKJ437d8.js";import"./Avatar-CyBHe0Qf.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
