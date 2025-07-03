import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-C1BC0Sr-.js";import{d as s}from"./ToastMessage-CLMENdzf.js";import{R as n,a as t}from"./RequirementItem-BR13e7FH.js";import{P as O}from"./Paper-BWKjBoPp.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BTMbMKS0.js";import"./SynapseConstants-BtmifUv6.js";import"./OrientationBanner-DoaIYAf3.js";import"./index-Bvnb8w-0.js";import"./index-DlUhpUTc.js";import"./iframe-kwdT_gk1.js";import"./spreadSx-CwcO6WA9.js";import"./react-C2x4yFKt.js";import"./FullWidthAlert-CpdlDHC-.js";import"./Alert-CxNXThTe.js";import"./createTheme-C6xqN3pM.js";import"./DefaultPropsProvider-ZknljbvO.js";import"./useSlot-h2t-XlqD.js";import"./useForkRef-C5oUk0jn.js";import"./createSimplePaletteValueFilter-Z6XeO5iR.js";import"./createSvgIcon-DrDQmURV.js";import"./Close-CPzFq2Bo.js";import"./IconButton-GyuCtgJk.js";import"./useTimeout-Dg3x6uxz.js";import"./ButtonBase-UNpQfVY-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-z5siZ5lQ.js";import"./Stack-Bgrkfz1N.js";import"./extendSxProp-C3CPfF_b.js";import"./getThemeProps-B1Qtp15k.js";import"./useTheme-Bco7y1aE.js";import"./Box-CySOkTPc.js";import"./AlertTitle-B2CehKyI.js";import"./Typography-BQKAxsEC.js";import"./index-BzF0Zbb_.js";import"./useTheme-DAI1kBpo.js";import"./ClickAwayListener-BZNVuDg3.js";import"./getReactElementRef-CMkytmwe.js";import"./index-Baaqchp8.js";import"./index-BRb218D6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bm1Z1TG3.js";import"./Tooltip-DwMFGR_2.js";import"./index-DAMS7aZF.js";import"./useControlled-CqqG4mPg.js";import"./Popper-Bx5KeZ6t.js";import"./Button-yc9m_HDy.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CaoMl1o0.js";import"./QueryClientProvider-gubLharG.js";import"./Link-3iSm5h_e.js";import"./Collapse-CnEwKJat.js";import"./_baseUniq-DjUOXJdb.js";import"./_Uint8Array-C8844KTU.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D7V8taiy.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DOlIleu7.js";import"./isEqual-DrKWKnfH.js";import"./merge-gf1E7D98.js";import"./_initCloneObject-BhRobUCF.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BgVJQMF-.js";import"./inputBaseClasses-CSVFbwIh.js";import"./calculateFriendlyFileSize-Cd8tFgn2.js";import"./CheckCircleTwoTone-EV8cvC11.js";import"./InfoTwoTone-CnZg-1g-.js";import"./useMutation-LsEFkyHF.js";import"./dayjs.min-Dh2U0qhW.js";import"./chunk-AYJ5UCUI-CIM6gl4h.js";import"./cloneDeep-DlQ8SRns.js";import"./Skeleton-B7OWO1pN.js";import"./SkeletonButton-DtparYgo.js";import"./SkeletonInlineBlock-vxTNqKSc.js";import"./SkeletonTable-Dv2U8a4Q.js";import"./times-C1tLlOHx.js";import"./toInteger-IyTMa7b9.js";import"./isSymbol-L4UXAW2_.js";import"./SkeletonParagraph-BS-X_8ig.js";import"./uniqueId-JlDTebFH.js";import"./toString-BN_mZnk1.js";import"./CSSTransition-D0HeTu6o.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B2h99fnJ.js";import"./Avatar-DnwG2Q6I.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
