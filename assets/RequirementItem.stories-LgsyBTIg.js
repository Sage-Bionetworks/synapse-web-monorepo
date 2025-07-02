import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DTjH7QpE.js";import{d as s}from"./ToastMessage-BQMyB8pM.js";import{R as n,a as t}from"./RequirementItem-BVZOqhsC.js";import{P as O}from"./Paper-CjbgwGhN.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-D04VbCHX.js";import"./SynapseConstants-BDg7pxzV.js";import"./OrientationBanner-CFdXDZTa.js";import"./index-aAdsPaRO.js";import"./index-D5M2_3G3.js";import"./iframe-VnvBbPjt.js";import"./spreadSx-CwcO6WA9.js";import"./react-DB59zw4q.js";import"./FullWidthAlert-Y7Kwlqi4.js";import"./Alert-h_ZqOy-R.js";import"./createTheme-DJXLoyL4.js";import"./DefaultPropsProvider-CQoP04Am.js";import"./useSlot-DXyNz7-0.js";import"./useForkRef-CpB3Rdo1.js";import"./createSimplePaletteValueFilter-CNKafHS4.js";import"./createSvgIcon-BeTmQEqT.js";import"./Close-BCD4Xzg2.js";import"./IconButton-Ct-1cHkm.js";import"./useTimeout-CFHsUIho.js";import"./ButtonBase-Cw6a0jrk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CrJiODmY.js";import"./Stack-DGaebw4f.js";import"./extendSxProp-C8ly7XkF.js";import"./getThemeProps-BTsMPG3o.js";import"./useTheme-B9kzyBem.js";import"./Box-CbwyQH91.js";import"./AlertTitle-jbzmrVKQ.js";import"./Typography-kp_OeXei.js";import"./index-DHredDN0.js";import"./useTheme-_EYAa35L.js";import"./ClickAwayListener-3k0whZQl.js";import"./getReactElementRef-CTKeNC3C.js";import"./index-ceiLpkOX.js";import"./index-BHNDTJUO.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DDp3-mAe.js";import"./Tooltip-DiMuQltE.js";import"./index-BTEZWKfo.js";import"./useControlled-CV0fJiZo.js";import"./Popper-DfELmAHW.js";import"./Button-gndjKYaP.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-BnTdor-E.js";import"./QueryClientProvider-BNdEVBzI.js";import"./Link-D3TUHQlA.js";import"./Collapse-CLxgAYXZ.js";import"./_baseUniq-DPMJLRLH.js";import"./_Uint8Array-CTsVmAuw.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CsCizWG1.js";import"./isArray-Dxzbedgu.js";import"./_getTag-CCJ1hUvQ.js";import"./isEqual-Boz_NY8h.js";import"./merge-DL3WTvwf.js";import"./_initCloneObject-Dx391l2S.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bj78bouL.js";import"./inputBaseClasses-C9rPflTt.js";import"./calculateFriendlyFileSize-DdiBStNf.js";import"./CheckCircleTwoTone-Cg6Zc16C.js";import"./InfoTwoTone-DXY7kIha.js";import"./useMutation-CZzltqcm.js";import"./dayjs.min-kQkHikLK.js";import"./chunk-AYJ5UCUI-D1D5QMg7.js";import"./cloneDeep-Lo2_optc.js";import"./Skeleton-C3mfVU1l.js";import"./SkeletonButton-lljkZGCC.js";import"./SkeletonInlineBlock-CyVMiAmD.js";import"./SkeletonTable-7oDeXBGr.js";import"./times-DLE8Y1Zy.js";import"./toInteger-BEUYuovx.js";import"./isSymbol-Cg860LCl.js";import"./SkeletonParagraph-BP-w1RfR.js";import"./uniqueId-B0THXi3c.js";import"./toString-BwydqMyN.js";import"./CSSTransition-Bzt5t6ze.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-AgWMSmsh.js";import"./Avatar-Dr6NvpZr.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
