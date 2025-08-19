import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-B7t2izf1.js";import{d as s}from"./ToastMessage-BDeV4ewc.js";import{R as n,a as t}from"./RequirementItem-Dg5y2L6Q.js";import{P as O}from"./Paper-B8iPITrA.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-KkqJyoYZ.js";import"./SynapseConstants-BuxqniVA.js";import"./OrientationBanner-CQ4al9ts.js";import"./index-CqfvS4OY.js";import"./index-B_NH1tG1.js";import"./iframe-DHCImqeI.js";import"./spreadSx-CwcO6WA9.js";import"./react-D2T44UuD.js";import"./FullWidthAlert-Cnt4nJ8k.js";import"./Alert-XDLX-kgZ.js";import"./createTheme-CR4l9uHY.js";import"./DefaultPropsProvider-DObZu-x4.js";import"./useSlot-BgKGFXDJ.js";import"./useForkRef-LW0sx3G7.js";import"./createSimplePaletteValueFilter-B4F2o6yw.js";import"./createSvgIcon-DWa7O56I.js";import"./Close-Di3tbyvY.js";import"./IconButton-BJ3jKP03.js";import"./useTimeout-B2kCgEvL.js";import"./ButtonBase-Bkor91_R.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DoHiQExb.js";import"./Stack-CDLC3VVo.js";import"./extendSxProp-CPr-MONH.js";import"./getThemeProps-Ds3KKIqm.js";import"./useTheme-DIzPV2Gw.js";import"./Box-B3jqVByX.js";import"./AlertTitle-C2sBobMK.js";import"./Typography-i0V5tERP.js";import"./index-O1AecroA.js";import"./useTheme-D3T9ikY1.js";import"./ClickAwayListener-Cp_ppUmU.js";import"./getReactElementRef-ByWD4INQ.js";import"./index-BtONyuYK.js";import"./index-BqR61apv.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-PH4sX_uL.js";import"./Tooltip-xaz2F5ki.js";import"./index-VdUxzL5Z.js";import"./useControlled-D93q3dyv.js";import"./Popper-FEJGxMLG.js";import"./Button-DoIvstwE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BuLOb3lc.js";import"./QueryClientProvider-WI38r6wY.js";import"./Link-Dp5s2AVD.js";import"./Collapse-D3fprLKJ.js";import"./_baseUniq-CD_mmW-P.js";import"./_Uint8Array-CyA3Nt41.js";import"./isArray-BOhUVnS7.js";import"./_getTag-C4-01JXd.js";import"./isEqual-DikMqJ7x.js";import"./merge-CCMRKMk9.js";import"./_initCloneObject-Cn82PUw-.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BTOeofJf.js";import"./inputBaseClasses-CNuRHAx7.js";import"./calculateFriendlyFileSize-DJiWUp2i.js";import"./CheckCircleTwoTone-GQrVTNRb.js";import"./InfoTwoTone-DiCCtnov.js";import"./useMutation-CHIXNxbT.js";import"./dayjs.min-Wk8Alc5x.js";import"./chunk-AYJ5UCUI-C1dCOLZ7.js";import"./cloneDeep-DFZ6TNqL.js";import"./Skeleton-sOiy-Fvd.js";import"./SkeletonButton-CcQL5GYS.js";import"./SkeletonInlineBlock-B4qNnXPj.js";import"./SkeletonTable-BZz3ntN_.js";import"./times-D0GWJ3QC.js";import"./toInteger-DjnZoQei.js";import"./isSymbol-Dejodpo7.js";import"./SkeletonParagraph-DDIcEvWa.js";import"./uniqueId-CIBLvTe5.js";import"./toString-B1JWWrjh.js";import"./CSSTransition-BauSso4T.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Dc10cwgS.js";import"./Avatar-0NAqLIgr.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
