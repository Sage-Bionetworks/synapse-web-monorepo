import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DljeaZar.js";import{d as s}from"./ToastMessage-tH_47Hbo.js";import{R as n,a as t}from"./RequirementItem-CnGQeRlA.js";import{P as O}from"./Paper-MTbdUUir.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DbMxoHOY.js";import"./SynapseConstants-DUBmK1sl.js";import"./OrientationBanner-mREqntXU.js";import"./index-UtsK7tNU.js";import"./index-BXKz6aQc.js";import"./iframe-MMJy9CQd.js";import"./spreadSx-CwcO6WA9.js";import"./react-CCtG6Zbc.js";import"./FullWidthAlert-usx1AJOX.js";import"./Alert-CWHP2pB9.js";import"./createTheme-C_wRPl7y.js";import"./DefaultPropsProvider-vF5CnCif.js";import"./useSlot-ExIhixvG.js";import"./useForkRef-CKBDIvfI.js";import"./createSimplePaletteValueFilter-BRqATs5r.js";import"./createSvgIcon-CXVdsj8-.js";import"./Close-DmrlnO_8.js";import"./IconButton-hrPMD4_P.js";import"./useTimeout-BK6HSxCV.js";import"./ButtonBase-D6fT5JND.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CDNCmXiM.js";import"./Stack-Cdp_GKVU.js";import"./extendSxProp-Ohl157Sw.js";import"./getThemeProps-3bpTcI1W.js";import"./useTheme-D5Wadm_k.js";import"./Box-CIgf6-IL.js";import"./AlertTitle-BemNAMM0.js";import"./Typography-xiYCCLrN.js";import"./index-DPLtfnrZ.js";import"./useTheme-BQVHpxoO.js";import"./ClickAwayListener-DU_4-MjF.js";import"./getReactElementRef-CJrJOS35.js";import"./index-DJp0rd-F.js";import"./index-7uKmVFf-.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ih-rarU-.js";import"./Tooltip-Cfxqtttq.js";import"./index-Bu3XuMqV.js";import"./useControlled-CBdhJZcP.js";import"./Popper-D9qy2WGi.js";import"./Button-DFPesTt6.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DMCvaQaX.js";import"./QueryClientProvider-BsCDU4xM.js";import"./Link-qVspRApL.js";import"./Collapse-D3QTnWrZ.js";import"./_baseUniq-BMiY0grt.js";import"./_Uint8Array-D30nXqKn.js";import"./isArray-CpvOlceI.js";import"./_getTag-BuX4-b08.js";import"./isEqual-BebYc4Xr.js";import"./merge-CjdSI1l4.js";import"./_initCloneObject-DPCH_UNA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByP9BbwY.js";import"./inputBaseClasses-DHNJkdoH.js";import"./calculateFriendlyFileSize-BIPaggqz.js";import"./CheckCircleTwoTone-B64HwfWe.js";import"./InfoTwoTone-DPDPtONu.js";import"./useMutation-vjHCjOpM.js";import"./dayjs.min-Buk06FN_.js";import"./chunk-AYJ5UCUI-pSO0FO9S.js";import"./cloneDeep-Dr0xKFAf.js";import"./Skeleton-Dl2LBOvA.js";import"./SkeletonButton-BClesJL0.js";import"./SkeletonInlineBlock-C7GW0w08.js";import"./SkeletonTable-Z--ohYk2.js";import"./times-DQhE74if.js";import"./toInteger-rkzrD4I0.js";import"./toNumber-XDI8Pc8c.js";import"./isSymbol-DigwcN2b.js";import"./SkeletonParagraph-9QVdw57W.js";import"./uniqueId-ULVNzqF3.js";import"./toString-CGiPHoVC.js";import"./CSSTransition-DayKw4sH.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DA9xEru9.js";import"./Avatar-CYZPdbvm.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
