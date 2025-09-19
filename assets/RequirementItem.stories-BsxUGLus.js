import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CwUoSZ-E.js";import{d as s}from"./ToastMessage-DJ5n6TQ9.js";import{R as n,a as t}from"./RequirementItem-CwureR5C.js";import{P as O}from"./Paper-DTwSBB6m.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Do5IBH1c.js";import"./SynapseConstants-C_IwDCRv.js";import"./OrientationBanner-D7uInX_M.js";import"./index-D2v4tOag.js";import"./index-sd0YBnCi.js";import"./iframe-DVYlga3I.js";import"./spreadSx-CwcO6WA9.js";import"./react-BdgbTTL6.js";import"./FullWidthAlert-D-JIEHkV.js";import"./Alert-Lky9k3yL.js";import"./createTheme-DdIeWMhk.js";import"./DefaultPropsProvider-Yj25Mou0.js";import"./useSlot-B15kkZE-.js";import"./useForkRef-CHUct0W1.js";import"./createSimplePaletteValueFilter-zeUINUQY.js";import"./createSvgIcon-BB914k_q.js";import"./Close-B4WTN9qd.js";import"./IconButton-Drb2gRwi.js";import"./useTimeout-B_Tp_-WM.js";import"./ButtonBase-BTjmQqw3.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CVVcdaCj.js";import"./Stack-ec17v0Gb.js";import"./extendSxProp-mslzv5DB.js";import"./getThemeProps-9mJ2iQYz.js";import"./useTheme-BgNkO1EL.js";import"./Box-_qmyWplA.js";import"./AlertTitle-BiuU5EAB.js";import"./Typography-D5MbW9_J.js";import"./index-BmMoY9aL.js";import"./useTheme-DT7PkjGc.js";import"./ClickAwayListener-lzupNfXx.js";import"./getReactElementRef-Cu_0CXbf.js";import"./index-DdccfWLe.js";import"./index-FmDvS8Q8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-EJ2qm4Dg.js";import"./Tooltip-DVqhwzdl.js";import"./index-Djpzpj5X.js";import"./useControlled-DYvBVNIT.js";import"./Popper-DATX_HyC.js";import"./Button-KNb4UeA6.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-C6imdaHY.js";import"./QueryClientProvider-nJ0R6vFz.js";import"./Link-DXy5Fg4p.js";import"./Collapse-DWu1Ndrz.js";import"./_baseUniq-BPJPICvm.js";import"./_Uint8Array-CGDsgUvk.js";import"./isArray-BQwmoBWm.js";import"./_getTag-C2Lnsqb5.js";import"./isEqual-BnkqVwwC.js";import"./merge-BnaNBIC1.js";import"./_initCloneObject-DaiBktpY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C1-s1xYp.js";import"./inputBaseClasses-BGVgyZbo.js";import"./calculateFriendlyFileSize-CCEZ1tKZ.js";import"./CheckCircleTwoTone-BJMpAPc2.js";import"./InfoTwoTone-D_B42BPL.js";import"./useMutation-DCePfSwN.js";import"./dayjs.min-CvA7XRhY.js";import"./chunk-AYJ5UCUI-BNxn_8R-.js";import"./cloneDeep-gKltjWRB.js";import"./Skeleton-DJOP7Jrw.js";import"./SkeletonButton-B6JhjAw1.js";import"./SkeletonInlineBlock-CYmoFzMk.js";import"./SkeletonTable-C1xN2z18.js";import"./times-42h93ky7.js";import"./toInteger-C3uJvns3.js";import"./isSymbol-DWCTm7th.js";import"./SkeletonParagraph-DKweg1XM.js";import"./uniqueId-BVm9a9aF.js";import"./toString-B0yKhShP.js";import"./CSSTransition-D41Z4O8Q.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BnxSL1J6.js";import"./Avatar-hZJ4C6lu.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
