import{j as a}from"./jsx-runtime-pz7QQOmo.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-bJ-CqzZD.js";import{d as s}from"./ToastMessage-CNx8wUh8.js";import{R as n,a as t}from"./RequirementItem-B2Up6sTm.js";import{P as O}from"./Paper-LNXwjcQq.js";import"./index-BkKaf4Ho.js";import"./iframe-N1NjX4sZ.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BWuLPj2y.js";import"./SynapseConstants-DqbwpJte.js";import"./OrientationBanner-DLGwKdIZ.js";import"./index-3beyqzOm.js";import"./spreadSx-CwcO6WA9.js";import"./react-C3MJ79ut.js";import"./FullWidthAlert-FMrKqPy0.js";import"./Alert-DZ1-YJ5J.js";import"./createTheme-DuUL91l1.js";import"./DefaultPropsProvider-C6A-qVkx.js";import"./useSlot-CseuYiCV.js";import"./useForkRef-eaA_P2jt.js";import"./createSimplePaletteValueFilter-CkIxcuNr.js";import"./createSvgIcon-CKu4rHpW.js";import"./Close-DeVmZdlb.js";import"./IconButton-jzK83RDC.js";import"./useTimeout-BnD3DM9b.js";import"./ButtonBase-DWWY2pSR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D_SqX67-.js";import"./Stack-BBjhye3J.js";import"./extendSxProp-CHVZ7BAY.js";import"./getThemeProps-Co--yioZ.js";import"./useTheme-imrqGidV.js";import"./Box-6XLjaT8E.js";import"./AlertTitle-DFP-OzT0.js";import"./Typography-BpEg9lnQ.js";import"./index-Dq4jw88k.js";import"./useTheme-BDljqhle.js";import"./ClickAwayListener-B1qmSzfh.js";import"./getReactElementRef-D4-PQAOY.js";import"./index-BgycnQqH.js";import"./index-BP3TMka1.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D5vDP2u6.js";import"./Tooltip-WBrotzIj.js";import"./index-ClAHp6dc.js";import"./useControlled-DTMPcRAW.js";import"./Popper-CkYnXUnB.js";import"./Button-Qd13FJKn.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-RMpGeomP.js";import"./utils-BWibdo-S.js";import"./Link-xhuw0OcQ.js";import"./Collapse-B1KAEHuI.js";import"./_baseUniq-BLvPIbux.js";import"./_Uint8Array-7x4Mh3s-.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BuDkcWZ-.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DxNqHPDO.js";import"./isEqual-G1MPuDt_.js";import"./merge-CQYn9gHb.js";import"./_initCloneObject-y7vXpgAY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-wXtwH8d6.js";import"./inputBaseClasses-BeK6_XdW.js";import"./calculateFriendlyFileSize-BXRB4AoI.js";import"./CheckCircleTwoTone-C1MTqsoH.js";import"./InfoTwoTone-HVwsLyYe.js";import"./useMutation-D2BXtkSL.js";import"./dayjs.min-Z4mswLOl.js";import"./chunk-AYJ5UCUI-DhqXvRZD.js";import"./cloneDeep-DFx8R1y8.js";import"./Skeleton-BYFliYg3.js";import"./SkeletonButton-ToV5ngvG.js";import"./SkeletonInlineBlock-C_jUML-G.js";import"./SkeletonTable-BKHIROO0.js";import"./times-CDt-3EZI.js";import"./toInteger-IPUHDOyO.js";import"./isSymbol-C7byGtnP.js";import"./SkeletonParagraph-aPe8TLcY.js";import"./uniqueId-Ci-fUOvw.js";import"./toString-BSAfEQtx.js";import"./CSSTransition-CquhRwz5.js";import"./ConditionalWrapper-Cibg9kpH.js";import"./LockTwoTone-DBno7uIO.js";import"./Avatar-MeCJM9NU.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
