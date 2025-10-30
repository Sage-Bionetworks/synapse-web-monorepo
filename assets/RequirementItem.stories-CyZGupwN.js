import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CW0fmQ3Q.js";import{d as s}from"./ToastMessage-D3rJBo8u.js";import{R as n,a as t}from"./RequirementItem-HYTxJ6gs.js";import{P as O}from"./Paper-DB8P-rkI.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-zOESdhzI.js";import"./SynapseConstants-hreeKAiu.js";import"./OrientationBanner-CYdEM79E.js";import"./index-DznES9q-.js";import"./index-Z_niMZcI.js";import"./iframe-9d_xT48Y.js";import"./spreadSx-CwcO6WA9.js";import"./react-CYczaA45.js";import"./FullWidthAlert-CAXTHdyF.js";import"./Alert-fhf9ZcTF.js";import"./createTheme-Ckpp2aJZ.js";import"./DefaultPropsProvider-DNj85cPU.js";import"./useSlot-CGhf7FeQ.js";import"./useForkRef-RZxkIAYG.js";import"./createSimplePaletteValueFilter-DgrzAZvi.js";import"./createSvgIcon-CyMI1MCl.js";import"./Close-DKqsZ7f0.js";import"./IconButton-D8dvWPnB.js";import"./useTimeout-Lo-a2r10.js";import"./ButtonBase-D3TfkVgz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bk44l8uz.js";import"./Stack-D6h9mjEk.js";import"./useThemeProps-DwadHsRm.js";import"./getThemeProps-C_wawT9I.js";import"./useTheme-BTCL84tt.js";import"./extendSxProp-D-Q_-68W.js";import"./Box-B0N2xX3m.js";import"./AlertTitle-DRXY24RG.js";import"./Typography-CO7fscfq.js";import"./index-BmRs8eVL.js";import"./useTheme-De4w3W1h.js";import"./ClickAwayListener-CuOvNdFo.js";import"./getReactElementRef-DjY0RuEK.js";import"./index-qAeAYKDl.js";import"./index-pthXlbu6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B5ZRnJdx.js";import"./Tooltip-DkoGxs3D.js";import"./index-4CrF3sPv.js";import"./useControlled-BO3AYCap.js";import"./Popper-D7dI-vcX.js";import"./Button-CE2q8GZa.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-D7eNVn05.js";import"./QueryClientProvider-wm4deiul.js";import"./Link-CkNjpNVk.js";import"./Collapse-B3lfXU47.js";import"./_baseUniq-BfPE21S4.js";import"./_Uint8Array-CxEDNqDG.js";import"./isArray-DEVg6Y6f.js";import"./_getTag-CyB7UJq2.js";import"./isEqual-CjQ0xsUP.js";import"./noop-DX6rZLP_.js";import"./merge-w5SVnV7S.js";import"./_initCloneObject-BXD3EUEW.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTsGKFOx.js";import"./inputBaseClasses-BquiKfq4.js";import"./calculateFriendlyFileSize-CV2UvVgj.js";import"./CheckCircleTwoTone-DsSnAxaE.js";import"./InfoTwoTone-OsnIp2rF.js";import"./useMutation-CwPhuXlo.js";import"./dayjs.min-BstykqR9.js";import"./chunk-AYJ5UCUI-CpTQ0xdT.js";import"./cloneDeep-Ba0G_3Y-.js";import"./Skeleton-DaUiC_M2.js";import"./SkeletonButton-Ds2Q6XmI.js";import"./SkeletonInlineBlock-CnqdYumQ.js";import"./SkeletonTable-7rz2uNeX.js";import"./times-7k16maVn.js";import"./toInteger-MqhnAcu0.js";import"./isSymbol-Ctb34mAm.js";import"./SkeletonParagraph--rzBUvwb.js";import"./uniqueId-BvvkfpDr.js";import"./toString-CHOvSEI8.js";import"./CSSTransition-4tsyerpn.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CfwdTuCV.js";import"./Avatar-DJWieDfW.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
