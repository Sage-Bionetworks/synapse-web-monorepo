import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-D68YJhTQ.js";import{d as s}from"./ToastMessage-Cl-uSrqf.js";import{R as n,a as t}from"./RequirementItem-CGd69rwX.js";import{P as O}from"./Paper-Cje9dWPp.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-CtxO9x8p.js";import"./SynapseConstants-CI_K8LaY.js";import"./OrientationBanner-DAmiSc00.js";import"./index-CQQcttyB.js";import"./index-C3nj_fG2.js";import"./iframe-BDBfVSKg.js";import"./spreadSx-CwcO6WA9.js";import"./react-CqJFq3qs.js";import"./FullWidthAlert-UQuqXn6f.js";import"./Alert-C1hJ4Z-y.js";import"./createTheme-CWG0cW6y.js";import"./DefaultPropsProvider-CdO6L0Pk.js";import"./useSlot-Dgg782u-.js";import"./useForkRef-DHnp6OMB.js";import"./createSimplePaletteValueFilter-BlzGvdSq.js";import"./createSvgIcon-CVDzM-Yp.js";import"./Close-CcfzD6eO.js";import"./IconButton-x-kANNti.js";import"./useTimeout-C4rLKdn2.js";import"./ButtonBase-DS44odlx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DQo2XILu.js";import"./Stack-CNoJqn02.js";import"./extendSxProp-Cs4_b5go.js";import"./getThemeProps-D5cSSqxK.js";import"./useTheme-DE8xzC4Q.js";import"./Box-DBpIvjQ1.js";import"./AlertTitle-bc4vF6jv.js";import"./Typography-BJGOlnOW.js";import"./index-qtpbYGz0.js";import"./useTheme-1oHqtnzX.js";import"./ClickAwayListener-BE9w4MIS.js";import"./getReactElementRef-B6qVbtvW.js";import"./index-D8917n5i.js";import"./index-3syzP3pj.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CLWDFLja.js";import"./Tooltip-IVO2_Dmw.js";import"./index-TGKDGBko.js";import"./useControlled-DT8cewLf.js";import"./Popper-DhKK_zwe.js";import"./Button-DyfF777x.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BRMyBt73.js";import"./QueryClientProvider-CPQ6Oj_G.js";import"./Link-D0i1Vnel.js";import"./Collapse-DojPvq5i.js";import"./_baseUniq-CrUh03pQ.js";import"./_Uint8Array-xgfglyII.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-10sIIJZj.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CfV5mstV.js";import"./isEqual-DLQCrc3U.js";import"./merge-B3nj5qzg.js";import"./_initCloneObject-CKK6YiUV.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D0ZbppsZ.js";import"./inputBaseClasses-Cw-3KtZn.js";import"./calculateFriendlyFileSize-BjGnrfzV.js";import"./CheckCircleTwoTone-C-PIsQg6.js";import"./InfoTwoTone-w8pZJCEs.js";import"./useMutation-Dk6C_iA4.js";import"./dayjs.min-DM6YuFz3.js";import"./chunk-AYJ5UCUI-BLGARkf6.js";import"./cloneDeep-DUWud5eC.js";import"./Skeleton-BzOWywy2.js";import"./SkeletonButton-D4K77rCF.js";import"./SkeletonInlineBlock-bpRBZ3K9.js";import"./SkeletonTable-C4AFj8mZ.js";import"./times-uLkrpfnz.js";import"./toInteger-CxJuCrEF.js";import"./isSymbol-BJHnSgiF.js";import"./SkeletonParagraph-DkY335s8.js";import"./uniqueId-DMKJP21Y.js";import"./toString-CIsVPF8v.js";import"./CSSTransition-CmTav2tN.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DNgUH0DT.js";import"./Avatar-JN6TdqNE.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
