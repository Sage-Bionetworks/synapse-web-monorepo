import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CpISO4Z-.js";import{d as s}from"./ToastMessage-D47tJexg.js";import{R as n,a as t}from"./RequirementItem-Dp5NrKbu.js";import{P as O}from"./Paper-CzObAxXu.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DAUKQIuz.js";import"./SynapseConstants-ptYewzyF.js";import"./OrientationBanner-_kC-PSdY.js";import"./index-DdSYxNDW.js";import"./index-F3OlDRPU.js";import"./iframe-DWrAiNuW.js";import"./spreadSx-CwcO6WA9.js";import"./react-CQiWL19i.js";import"./FullWidthAlert-C0tQO5dM.js";import"./Alert-CKgV8xSf.js";import"./createTheme-DAhIYT-q.js";import"./DefaultPropsProvider-Cd0Gz93F.js";import"./useSlot-BZid6he4.js";import"./useForkRef-BJo3Z_u-.js";import"./createSimplePaletteValueFilter-B4BYpzTy.js";import"./createSvgIcon-CifjPXpO.js";import"./Close-Bkkfhvag.js";import"./IconButton-BRQS4WU3.js";import"./useTimeout-BY1gF1wp.js";import"./ButtonBase-CE9Zydrz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DyPJ1xlt.js";import"./Stack-BnkLG2u3.js";import"./extendSxProp-CVuKJmNN.js";import"./getThemeProps-DopSKNma.js";import"./useTheme-GfoGaI95.js";import"./Box-BW-aRCkO.js";import"./AlertTitle-CLDWMYy3.js";import"./Typography-C3oNv7Lx.js";import"./index-BmZDKNdG.js";import"./useTheme-C8ob8KsR.js";import"./ClickAwayListener-BK2szM5u.js";import"./getReactElementRef-D-JNnrD6.js";import"./index-B25muIup.js";import"./index-xIDK1h82.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-VoMSPk_y.js";import"./Tooltip-DpuXVHKS.js";import"./index-BuwriByj.js";import"./useControlled-BTMnxbhY.js";import"./Popper-DHPObmJG.js";import"./Button-dxqTEXs9.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DdyJtvdB.js";import"./QueryClientProvider-3nZ8Vgn_.js";import"./Link-BLjn6yhp.js";import"./Collapse-yq6QQpA6.js";import"./_baseUniq-5rt_sj8d.js";import"./_Uint8Array-AzO7VDN6.js";import"./isArray-DzTtH0J2.js";import"./_getTag-DZd-TdrH.js";import"./isEqual-xC6FCH9I.js";import"./merge-DRz5Ifpb.js";import"./_initCloneObject-6FTFQYcl.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DoIPu-7y.js";import"./inputBaseClasses-YZuK0aY4.js";import"./calculateFriendlyFileSize-D8lL7o7B.js";import"./CheckCircleTwoTone-DwvVQvXI.js";import"./InfoTwoTone-DNgAn7mt.js";import"./useMutation-D94Q-XAu.js";import"./dayjs.min-Cha11me8.js";import"./chunk-AYJ5UCUI-Ca0YKpc9.js";import"./cloneDeep-jeYACF2d.js";import"./Skeleton-C-zuVtl_.js";import"./SkeletonButton-DRHDykKr.js";import"./SkeletonInlineBlock-DqGUZClc.js";import"./SkeletonTable-DPJTdzdr.js";import"./times-DbsTW-Jw.js";import"./toInteger-E61NVZyE.js";import"./isSymbol-Cvebtdw6.js";import"./SkeletonParagraph-DAmTyDHL.js";import"./uniqueId-CPofm9ap.js";import"./toString-D1GzTajV.js";import"./CSSTransition-DXIYHF86.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-uwwnWcIy.js";import"./Avatar-CGwip2lB.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
