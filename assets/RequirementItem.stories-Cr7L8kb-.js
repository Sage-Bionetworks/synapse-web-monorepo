import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-B6rqjCYf.js";import{d as s}from"./ToastMessage-BTjRpDc9.js";import{R as n,a as t}from"./RequirementItem-B4iEicCP.js";import{P as O}from"./Paper-CA1sfC9c.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DOr2eiI0.js";import"./SynapseConstants-SICaIPpp.js";import"./OrientationBanner-YlGcQ8oA.js";import"./index-CeSfpRkX.js";import"./index-CJWOyIck.js";import"./iframe-DoTUlnRU.js";import"./spreadSx-CwcO6WA9.js";import"./react-CZondhIN.js";import"./FullWidthAlert-CTCf0_0y.js";import"./Alert-K5yXR8E3.js";import"./createTheme-joOF16y3.js";import"./DefaultPropsProvider-4-Nbo_PQ.js";import"./useSlot-pK9Rx4f9.js";import"./useForkRef-BwBAI-XY.js";import"./createSimplePaletteValueFilter-CriwX3Nq.js";import"./createSvgIcon-8zBnI0wH.js";import"./Close-o_-k88i3.js";import"./IconButton-CMDHKdOn.js";import"./useTimeout-DR3YPM4S.js";import"./ButtonBase-Dp-i_ss-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-bHi32ma4.js";import"./Stack-DsuCYzOE.js";import"./extendSxProp-CK0LILTo.js";import"./getThemeProps-ZNj3hCTU.js";import"./useTheme-8KgRob2p.js";import"./Box-C-mmB_q5.js";import"./AlertTitle-DsIfsLeR.js";import"./Typography-B0Q9QmtT.js";import"./index-9RqmjHB0.js";import"./useTheme-CerIELR_.js";import"./ClickAwayListener-CkaBAZBz.js";import"./getReactElementRef-AtSduVbi.js";import"./index-RFI4-CTC.js";import"./index-CLQ8OUAf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C2WkGHMq.js";import"./Tooltip-DJFZrf82.js";import"./index-B_VJ5W3d.js";import"./useControlled-DXqZCC6Q.js";import"./Popper-CgY2t-Jy.js";import"./Button-CxLdoTH8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CJ6zXZoE.js";import"./QueryClientProvider-oDqE1HUl.js";import"./Link-B7EB4ta7.js";import"./Collapse-Dv1ewoJy.js";import"./_baseUniq-BubK3-dV.js";import"./_Uint8Array-Ce48In0X.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-G8zwPoD_.js";import"./isArray-Dxzbedgu.js";import"./_getTag-n-EU0TN4.js";import"./isEqual-DRemrjEy.js";import"./merge-DQ6m7iup.js";import"./_initCloneObject-BAIB2BRc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-kTrZyV86.js";import"./inputBaseClasses-BR-v_UEh.js";import"./calculateFriendlyFileSize-B8OS6tmQ.js";import"./CheckCircleTwoTone-Cqsu8gS4.js";import"./InfoTwoTone-CLmpUWXV.js";import"./useMutation-CRVn1-QC.js";import"./dayjs.min-BZLa1BwX.js";import"./chunk-AYJ5UCUI-6pCYvLhm.js";import"./cloneDeep-BIkPzsIQ.js";import"./Skeleton-uaiLWYQK.js";import"./SkeletonButton-Buxz3llm.js";import"./SkeletonInlineBlock-BMEIqAJx.js";import"./SkeletonTable-CKPU8PCc.js";import"./times-DJ5xoCtI.js";import"./toInteger-DGuYa0Wm.js";import"./isSymbol-fjr4LfIj.js";import"./SkeletonParagraph-DICEepNR.js";import"./uniqueId-B7zAGKpj.js";import"./toString-Rivtcnv9.js";import"./CSSTransition-DkmDSQPC.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-z7YxXgr4.js";import"./Avatar-DKUDwQIG.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
