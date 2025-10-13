import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-B5gAKz_O.js";import{d as s}from"./ToastMessage-864EGvFe.js";import{R as n,a as t}from"./RequirementItem-DXnzB2dA.js";import{P as O}from"./Paper-BCS61ZLh.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-w6-CIEB7.js";import"./SynapseConstants-BvlkkbYT.js";import"./OrientationBanner-DQJGhgFu.js";import"./index-CWABsZZt.js";import"./index-50V2EGz2.js";import"./iframe-CnNyPxR5.js";import"./spreadSx-CwcO6WA9.js";import"./react-otK05ZBX.js";import"./FullWidthAlert-BQO2ZM0K.js";import"./Alert-B_-c_7mx.js";import"./createTheme-DSq-Mol7.js";import"./DefaultPropsProvider-C9wjepK5.js";import"./useSlot-DsxpMVrm.js";import"./useForkRef-BAPdpbNW.js";import"./createSimplePaletteValueFilter-CldMCLtR.js";import"./createSvgIcon-DGQsVitk.js";import"./Close-CVOLFbw1.js";import"./IconButton-BVSRfYlJ.js";import"./useTimeout-BhJq4kG5.js";import"./ButtonBase-BX83Z0VB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BGTymdZp.js";import"./Stack-BQvEapyr.js";import"./useThemeProps-CmnHZ3En.js";import"./getThemeProps-DlbFbBX7.js";import"./useTheme-CZTnF3AF.js";import"./extendSxProp-Et1BOirn.js";import"./Box-BDTYEpGC.js";import"./AlertTitle-D8cxvMZv.js";import"./Typography-fBjhrNMo.js";import"./index-CLkWSig2.js";import"./useTheme-CjTtqgxL.js";import"./ClickAwayListener-DDweZR_J.js";import"./getReactElementRef-DBAVQkW_.js";import"./index-D3DJx0X2.js";import"./index-CC6HTFNl.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BtgJxlwW.js";import"./Tooltip-C_M9hetJ.js";import"./index-Etco1RFO.js";import"./useControlled-DtifG75u.js";import"./Popper-C9tLJj2J.js";import"./Button-Cf0eu55O.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CH0n5MNt.js";import"./QueryClientProvider-Py7SAasE.js";import"./Link-DFtCODF5.js";import"./Collapse-BeiaCXPV.js";import"./_baseUniq-Cu_OF4Xp.js";import"./_Uint8Array-CzRmNIxi.js";import"./isArray-KvXH-Jx4.js";import"./_getTag-B8WXN5Nr.js";import"./isEqual-CzDcfwhI.js";import"./noop-DX6rZLP_.js";import"./merge-jd3NSUkd.js";import"./_initCloneObject-XmSwrlPI.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByV7WbF5.js";import"./inputBaseClasses-CtqzjeT7.js";import"./calculateFriendlyFileSize-uiD7W4tT.js";import"./CheckCircleTwoTone-DAKkXTN_.js";import"./InfoTwoTone-C_fE8DJq.js";import"./useMutation-0FRbsOeu.js";import"./dayjs.min-C2eBLBEm.js";import"./chunk-AYJ5UCUI-DBs_SlKK.js";import"./cloneDeep-7VEFdNK3.js";import"./Skeleton-Cb30zSej.js";import"./SkeletonButton-DYD3Ov2g.js";import"./SkeletonInlineBlock-m2Hdis6_.js";import"./SkeletonTable-Btk5G1lW.js";import"./times-5PU58L5-.js";import"./toInteger-B2v-gFfh.js";import"./isSymbol-prInbR1u.js";import"./SkeletonParagraph-DRD-GFd_.js";import"./uniqueId-DV-L56RM.js";import"./toString-DgvCpfGu.js";import"./CSSTransition-DJKhE4qN.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BYeRGwVl.js";import"./Avatar-DjlY2WYy.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
