import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BChfeZ3l.js";import{d as s}from"./ToastMessage-DMSGhLBT.js";import{R as n,a as t}from"./RequirementItem-BcedgCg7.js";import{P as O}from"./Paper-SRl-J5j-.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-CiWZBkKO.js";import"./SynapseConstants-BF0xI1nm.js";import"./OrientationBanner-CMi5J3Xm.js";import"./index-DxhPwj9j.js";import"./index-DVXuPh3J.js";import"./iframe-CcdBVske.js";import"./spreadSx-CwcO6WA9.js";import"./react-BxKwmmbS.js";import"./FullWidthAlert-D8GNbXzy.js";import"./Alert-Dhfyg0x0.js";import"./createTheme-DhCIHWzU.js";import"./DefaultPropsProvider-P-wA5QFY.js";import"./useSlot-sJj7T_V9.js";import"./useForkRef-DINnoC6x.js";import"./createSimplePaletteValueFilter-t7pPNWrv.js";import"./createSvgIcon-BupLM2YH.js";import"./Close-Xv7jIJH3.js";import"./IconButton-C5Mr8mVs.js";import"./useTimeout-lMzTsu5c.js";import"./ButtonBase-C7m_tL04.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-xe4givlB.js";import"./Stack-8QssDc1d.js";import"./extendSxProp-CTnaCTz_.js";import"./getThemeProps-CWmg3UDs.js";import"./useTheme-C0vPMqs4.js";import"./Box-DHdI_VIg.js";import"./AlertTitle-DWvpSUlS.js";import"./Typography-B5kl18Sk.js";import"./index-Ebch7RO5.js";import"./useTheme-Bw8q8KD5.js";import"./ClickAwayListener-9C0d15Hg.js";import"./getReactElementRef-CbfwcKB1.js";import"./index-C9FXgNRy.js";import"./index-CJUR3CjR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-J7OzO2bk.js";import"./Tooltip-CdyQ0dq6.js";import"./index-DxiwdZ50.js";import"./useControlled-BfSlMi9Y.js";import"./Popper-DsgILYQG.js";import"./Button-CTAUiiqM.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DB03csRo.js";import"./QueryClientProvider-BDV_sZ5X.js";import"./Link-DjvlLkni.js";import"./Collapse-tnSpEh-M.js";import"./_baseUniq-BZvbcYpQ.js";import"./_Uint8Array-B_QpfvPN.js";import"./isArray-Cl2ALenN.js";import"./_getTag-D4hgnD7J.js";import"./isEqual-B7q4kpMQ.js";import"./merge-lG9uDrSF.js";import"./_initCloneObject-LbJB5-xz.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BQVsj24k.js";import"./inputBaseClasses-4PWin2zj.js";import"./calculateFriendlyFileSize-Ci7_l22M.js";import"./CheckCircleTwoTone-C_TFawf0.js";import"./InfoTwoTone-wfilD4hN.js";import"./useMutation-BE_nYNq6.js";import"./dayjs.min-BjRyZKBT.js";import"./chunk-AYJ5UCUI-CRi1VNEj.js";import"./cloneDeep-Cgj8pCn6.js";import"./Skeleton-Ced94OUm.js";import"./SkeletonButton-BT1TjPSL.js";import"./SkeletonInlineBlock-CCuugtxf.js";import"./SkeletonTable-CFK-Ww2S.js";import"./times-B5Zk2SNp.js";import"./toInteger-DwVRmScC.js";import"./isSymbol-U5ztrPps.js";import"./SkeletonParagraph-D1vBYK5a.js";import"./uniqueId-TyUCqP8Y.js";import"./toString-u7Ie6P0T.js";import"./CSSTransition-Bq54B9cJ.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-fUbbcLxG.js";import"./Avatar-BO4i6kDQ.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
