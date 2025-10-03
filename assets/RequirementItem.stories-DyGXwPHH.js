import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BaInImvb.js";import{d as s}from"./ToastMessage-Dx6E7ixQ.js";import{R as n,a as t}from"./RequirementItem-BRpb6jts.js";import{P as O}from"./Paper-S1fvqJVW.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-Dd0vPh_H.js";import"./SynapseConstants-DRPzlq-o.js";import"./OrientationBanner-CSetEjqk.js";import"./index-B0gefgMG.js";import"./index-CvyYqbbB.js";import"./iframe-B3xGRWau.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJmaa9HB.js";import"./FullWidthAlert-LRva0ICM.js";import"./Alert-UhYp6qY9.js";import"./createTheme-yhJZirTq.js";import"./DefaultPropsProvider-Dyop95cE.js";import"./useSlot-CWCXsuM6.js";import"./useForkRef-2hkVe3-e.js";import"./createSimplePaletteValueFilter-BkO8Qsnx.js";import"./createSvgIcon-B7YpWqx3.js";import"./Close-Cz4GiEbp.js";import"./IconButton-BfvyGdE-.js";import"./useTimeout-BifyLnyQ.js";import"./ButtonBase-Bd0MhjFr.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BjSx0fst.js";import"./Stack-KXRQ2qoN.js";import"./useThemeProps-CXcPGtyI.js";import"./getThemeProps-DFwGNQQM.js";import"./useTheme-Ctrn4LCN.js";import"./extendSxProp-CKP_yBEI.js";import"./Box-CDJoVLM4.js";import"./AlertTitle-CY1i-AXt.js";import"./Typography-D_4H52WI.js";import"./index-B-Pvp7yD.js";import"./useTheme-EtZCDR2R.js";import"./ClickAwayListener-9LiC0SA2.js";import"./getReactElementRef-CNb7xhSU.js";import"./index-Br3fcRxK.js";import"./index-DDLERCEI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CS2Zqaue.js";import"./Tooltip-bjvNYtJ9.js";import"./index-iomPLjn7.js";import"./useControlled-bz51c3bn.js";import"./Popper-C8sKl6Af.js";import"./Button-BqoZyXTP.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BPHiJ7LM.js";import"./QueryClientProvider-BcAhPAdQ.js";import"./Link-CzE4P4qz.js";import"./Collapse-DTdOrPcE.js";import"./_baseUniq-DbA25ysr.js";import"./_Uint8Array-BTKm1ZQB.js";import"./isArray-DbXmnvJN.js";import"./_getTag-DrnZ3UrD.js";import"./isEqual-DUeH-zW5.js";import"./noop-DX6rZLP_.js";import"./merge-DXAGUrVQ.js";import"./_initCloneObject-Dj57jkPY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-P4NxGNb5.js";import"./inputBaseClasses-CVaOacQt.js";import"./calculateFriendlyFileSize-BnFD44D5.js";import"./CheckCircleTwoTone-Cro7lWgF.js";import"./InfoTwoTone-DYvYDf7n.js";import"./useMutation-P9l519zQ.js";import"./dayjs.min-BXio50PZ.js";import"./chunk-AYJ5UCUI-DgTRugk4.js";import"./cloneDeep-LWRqqlyp.js";import"./Skeleton-209IQpVd.js";import"./SkeletonButton-CRK17zKv.js";import"./SkeletonInlineBlock-DjLqp715.js";import"./SkeletonTable-CaAUfgFk.js";import"./times-Cn4Ngxl9.js";import"./toInteger-k1Hbt4td.js";import"./isSymbol-Ba5_wEMY.js";import"./SkeletonParagraph-DgVlIY8v.js";import"./uniqueId-CSADMLuU.js";import"./toString-BfO6AUjw.js";import"./CSSTransition-Bkw3yqJC.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DBRiFWoE.js";import"./Avatar-C_XbQu-m.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
