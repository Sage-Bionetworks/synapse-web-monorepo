import{j as a}from"./jsx-runtime-CoXzOFQn.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-GECupzRz.js";import{d as s}from"./ToastMessage-Qxmi5EYP.js";import{R as n,a as t}from"./RequirementItem-DhbYRZkz.js";import{P as O}from"./Paper-DTlkPfUp.js";import"./index-Bv-s9W2u.js";import"./iframe-Cbn6Wioa.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-DkRsMa6G.js";import"./SynapseConstants-Bfg1qQ66.js";import"./OrientationBanner-BN7sc-yW.js";import"./index-BTAejVQp.js";import"./spreadSx-CwcO6WA9.js";import"./react-DOQBJuAS.js";import"./FullWidthAlert-Vqv0OtJl.js";import"./Alert-3vS49jrx.js";import"./createTheme-B2jVum5G.js";import"./resolveComponentProps-Da3g-n6Q.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CYGkZ_5i.js";import"./createSvgIcon-zGAR842g.js";import"./DefaultPropsProvider-CV1WaMnn.js";import"./Close-BLBNR7A4.js";import"./IconButton-EuepfCvL.js";import"./ButtonBase-DsKebiHo.js";import"./useTimeout-CxKGPiOF.js";import"./TransitionGroupContext-CntLVBsw.js";import"./useIsFocusVisible-CNLfUmJ0.js";import"./useEventCallback-BzaKhurB.js";import"./Stack-cKH5qMzO.js";import"./getThemeProps-BpylFmtp.js";import"./useTheme-BjBg_HQE.js";import"./Box-BCl-T6Nm.js";import"./AlertTitle-BN8ssDQ0.js";import"./Typography-mifgVkJr.js";import"./useTheme-BFXFTIwP.js";import"./Grow-DEaHBlcM.js";import"./index-CDrKje1t.js";import"./utils-Bov2-oov.js";import"./ClickAwayListener-CQQ6DDI4.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DfqKSysC.js";import"./index-ByVQsoFM.js";import"./useControlled-CDkZ20IG.js";import"./useId-BXknn2vZ.js";import"./Popper-BA5jVx5O.js";import"./Button-CQ-PKmTk.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-BRqwTfcM.js";import"./utils-Dml2HCW2.js";import"./Link-8rZT6qId.js";import"./Collapse-DUScFzSi.js";import"./isNil-IKS6J4hT.js";import"./_Uint8Array-CAE93Lp8.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D46PIp9S.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Cv659kD2.js";import"./_getTag-CYQCzpsu.js";import"./tinycolor-Begke6kS.js";import"./Fade-DfUGStCB.js";import"./Skeleton-C6cw4nQZ.js";import"./inputBaseClasses-CRfo2RbF.js";import"./calculateFriendlyFileSize-BVB5UzoH.js";import"./CheckCircleTwoTone-DLeaCtrD.js";import"./InfoTwoTone-ZwE3NCw_.js";import"./mutation-B83MkDYj.js";import"./dayjs.min-B7F5G4Hx.js";import"./chunk-AYJ5UCUI-DxylnMeD.js";import"./cloneDeep-Szv4Lrja.js";import"./_initCloneObject-DTpM-W_c.js";import"./isEqual-mmtDgPnd.js";import"./merge-Dt1OjAEO.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DR0N7GYk.js";import"./SkeletonInlineBlock-BFqLSwwy.js";import"./SkeletonTable-Ck6SYnBv.js";import"./times-CBusaBCX.js";import"./toInteger-7HU0D_N7.js";import"./isSymbol-DLlUdl0I.js";import"./SkeletonParagraph-Du53LuXu.js";import"./uniqueId-CEGstLjV.js";import"./toString-C3HlysTi.js";import"./CSSTransition-BAZqHvsm.js";import"./ConditionalWrapper-BGrtX1Ar.js";import"./LockTwoTone-uPdTF8gO.js";import"./Avatar-CO-h-O8y.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
