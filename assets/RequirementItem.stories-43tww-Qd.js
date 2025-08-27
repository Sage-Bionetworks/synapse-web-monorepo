import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-xbvn6IL_.js";import{d as s}from"./ToastMessage-CNBApHI3.js";import{R as n,a as t}from"./RequirementItem-dE78_MbT.js";import{P as O}from"./Paper-Cl3IGk_S.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-CUiolQtu.js";import"./SynapseConstants-vhsZtUjo.js";import"./OrientationBanner-BFdTeK-_.js";import"./index-C1J3TF4n.js";import"./index-BWYAF8lU.js";import"./iframe-yyANH0os.js";import"./spreadSx-CwcO6WA9.js";import"./react-D8Qeut8Q.js";import"./FullWidthAlert-BEZ4ORhM.js";import"./Alert-23XrgefS.js";import"./createTheme-BIkK4vAx.js";import"./DefaultPropsProvider-rerTD_WB.js";import"./useSlot-9cyZ6jgL.js";import"./useForkRef-3RAnBlw2.js";import"./createSimplePaletteValueFilter-Db0Nak9e.js";import"./createSvgIcon-Dp5pXPxK.js";import"./Close-D46JNv69.js";import"./IconButton-BYc-lBIW.js";import"./useTimeout-Cj7Ad7uF.js";import"./ButtonBase-k3fET7tS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CF22j_wE.js";import"./Stack-Dp6jq4N4.js";import"./extendSxProp-CAI-rqjs.js";import"./getThemeProps-BBH5x4Xu.js";import"./useTheme-BvqfD93n.js";import"./Box-DVmmo7o0.js";import"./AlertTitle-C4APA_m_.js";import"./Typography-fee9a3WB.js";import"./index-DJ3RBYQ3.js";import"./useTheme-Bdzv-Cyq.js";import"./ClickAwayListener-DEOiO8wg.js";import"./getReactElementRef-Dhk2uDEE.js";import"./index-CYb0fCN1.js";import"./index-qGeDa7OH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-99E260oC.js";import"./Tooltip-D11GPAI5.js";import"./index-CpgqNKCb.js";import"./useControlled-BhJABjDl.js";import"./Popper-Dd9ZCGgG.js";import"./Button-ChvyBgQs.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BmiE0y30.js";import"./useQuery-kP5bDzxo.js";import"./QueryClientProvider-BNTU3bEl.js";import"./Link-BHnRdTee.js";import"./Collapse-6d7tJFAU.js";import"./_baseUniq-5PKrMJpi.js";import"./_Uint8Array-DM_d1Jz_.js";import"./isArray-DMpRDESY.js";import"./_getTag-DFeirRww.js";import"./isEqual-CPSyp1EL.js";import"./merge-CZZIB5B1.js";import"./_initCloneObject-Dn7RHs7d.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-LPHQT0EL.js";import"./inputBaseClasses-DVJUYt1O.js";import"./calculateFriendlyFileSize-CXbkyRqM.js";import"./CheckCircleTwoTone-BgnJHJ-3.js";import"./InfoTwoTone-Br0yDVnb.js";import"./useMutation-BlaYELbj.js";import"./dayjs.min-CYOliFU3.js";import"./chunk-AYJ5UCUI-VuZVNL9M.js";import"./cloneDeep-FAtHP8s_.js";import"./Skeleton-QExJC7b2.js";import"./SkeletonButton-CbbF7GM-.js";import"./SkeletonInlineBlock-ZIcve0kU.js";import"./SkeletonTable-CytrP16p.js";import"./times-j8ymOn6e.js";import"./toInteger-cpVm-g8l.js";import"./isSymbol-CtQJT7_P.js";import"./SkeletonParagraph-Bd3sbAsA.js";import"./uniqueId-CGB7xmYc.js";import"./toString-6t4NPN1p.js";import"./CSSTransition-BvAF_8r3.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D5uZOC6l.js";import"./Avatar-CvWMSDqJ.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
