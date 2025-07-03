import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-Brb1EUp5.js";import{d as s}from"./ToastMessage-0R42rZrb.js";import{R as n,a as t}from"./RequirementItem-CbHI31sT.js";import{P as O}from"./Paper-DiNvo0OR.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BZn2zwij.js";import"./SynapseConstants-CZppcqKY.js";import"./OrientationBanner-2w8GnB88.js";import"./index-BFLTeMN7.js";import"./index-RrA2ZeU8.js";import"./iframe-Cl7yHxey.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dnp_5-VT.js";import"./FullWidthAlert-D-7kzovJ.js";import"./Alert-HXCm2ukD.js";import"./createTheme-BL3Erky_.js";import"./DefaultPropsProvider-COwJEhlj.js";import"./useSlot-DPCj5w37.js";import"./useForkRef-7FksC7Wk.js";import"./createSimplePaletteValueFilter-BTUUkyHX.js";import"./createSvgIcon-bnX5AEip.js";import"./Close-DM2leFU3.js";import"./IconButton-S1pQl1Qb.js";import"./useTimeout-DGdq9XXh.js";import"./ButtonBase-DZeD6OmU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-JqIc0wtk.js";import"./Stack-r6VQu8BX.js";import"./extendSxProp-C9QzDRlU.js";import"./getThemeProps-BILLkI9C.js";import"./useTheme-99fH-d8E.js";import"./Box-C4n8VpXx.js";import"./AlertTitle-DX3Er_xV.js";import"./Typography-C3KVIo5J.js";import"./index-CeXYih2O.js";import"./useTheme-Ct7FFNBK.js";import"./ClickAwayListener-0-8j9UKu.js";import"./getReactElementRef-C_WWxu9h.js";import"./index-Bsynu-fh.js";import"./index--rNMgt8r.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BjkRkIh9.js";import"./Tooltip-QNoITWuX.js";import"./index-u7SOeJ0n.js";import"./useControlled-D-DOyfjM.js";import"./Popper-D2G1xZsN.js";import"./Button-BEEyN1i5.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-vKaTDWF8.js";import"./QueryClientProvider-DKALCs-s.js";import"./Link-DWy4Krdn.js";import"./Collapse-Dn5clTlB.js";import"./_baseUniq-DHWoN2oF.js";import"./_Uint8Array-Bhyyg1TJ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-UDjeZMJA.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Cpn6i2oH.js";import"./isEqual-D_YUXdZO.js";import"./merge-D_xgEugG.js";import"./_initCloneObject-VZ4ZIpDG.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DvuAdk7a.js";import"./inputBaseClasses-9iEejl7P.js";import"./calculateFriendlyFileSize-Bj-tb9VL.js";import"./CheckCircleTwoTone-C2zsmKmG.js";import"./InfoTwoTone-Dj4324tE.js";import"./useMutation-Zc9HGuUS.js";import"./dayjs.min-y9IVFdO2.js";import"./chunk-AYJ5UCUI-CsQTRQBd.js";import"./cloneDeep-ClT3OHhm.js";import"./Skeleton-CAuWZ4Jn.js";import"./SkeletonButton-C94AiOW7.js";import"./SkeletonInlineBlock-CU2gJ4uU.js";import"./SkeletonTable-D_LbkH9O.js";import"./times-BKzcZ1kW.js";import"./toInteger-DYYQqnXt.js";import"./isSymbol-YTM7rOnd.js";import"./SkeletonParagraph-DVJ3wFD6.js";import"./uniqueId-ClPpn1zI.js";import"./toString-CqfWIDWC.js";import"./CSSTransition-Cs_o1vPi.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DhDmIw05.js";import"./Avatar-CrhaMbJ5.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
