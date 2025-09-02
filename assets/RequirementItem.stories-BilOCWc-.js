import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-C43ceo34.js";import{d as s}from"./ToastMessage-UogtnOLy.js";import{R as n,a as t}from"./RequirementItem-DIxsk-1_.js";import{P as O}from"./Paper-MzL6UsMi.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-CJN3kP-B.js";import"./SynapseConstants-CiX6Gvr2.js";import"./OrientationBanner-D-aNPlud.js";import"./index-MNm9JVKb.js";import"./index-8E8AJVLG.js";import"./iframe-CzLjpwC-.js";import"./spreadSx-CwcO6WA9.js";import"./react-CwZBqyfL.js";import"./FullWidthAlert-D_VdwJ38.js";import"./Alert-CMhD3tNE.js";import"./createTheme-Bx9zg2Aq.js";import"./DefaultPropsProvider-COWWULUE.js";import"./useSlot-C-J-wYvm.js";import"./useForkRef-C_PXFLFs.js";import"./createSimplePaletteValueFilter-DDzZQsPH.js";import"./createSvgIcon-pAqF6Sga.js";import"./Close-CAAkSTlU.js";import"./IconButton-CDLYYfzu.js";import"./useTimeout-BP57oaAx.js";import"./ButtonBase-Cyxw6Mpk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dwx7-res.js";import"./Stack-l6MPWt0d.js";import"./extendSxProp-BzCNwJ73.js";import"./getThemeProps-C3zF82al.js";import"./useTheme-BGF5cY2j.js";import"./Box-DzK9TEyW.js";import"./AlertTitle-BcbX6m1C.js";import"./Typography-CuUtzz6d.js";import"./index-Ul9lyVXm.js";import"./useTheme-BiqLUHW5.js";import"./ClickAwayListener-ct0gOahX.js";import"./getReactElementRef-CjntyuAB.js";import"./index-CSs9NJT0.js";import"./index-Tff9hZ9I.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Cf8vHn8q.js";import"./Tooltip-soL0zlaW.js";import"./index-CtD269za.js";import"./useControlled-otgNWUVW.js";import"./Popper-CrvShqtU.js";import"./Button-ywBIoKZb.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-BnbbyIhE.js";import"./QueryClientProvider-COgRCJUL.js";import"./Link-CGU2rv-S.js";import"./Collapse-CDYVdUa-.js";import"./_baseUniq-AXqUKFNv.js";import"./_Uint8Array-CGGeiCCw.js";import"./isArray-BLHhTiIE.js";import"./_getTag-Du58puFw.js";import"./isEqual-D2oP3hG9.js";import"./merge-42V_qSrK.js";import"./_initCloneObject-CrEU1V4a.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BPXFur0f.js";import"./inputBaseClasses-AhrTDcKT.js";import"./calculateFriendlyFileSize-CMMha0yD.js";import"./CheckCircleTwoTone-CejlYcpI.js";import"./InfoTwoTone-Ba1eQKjs.js";import"./useMutation-CZgqQHx5.js";import"./dayjs.min-BQGfd5_o.js";import"./chunk-AYJ5UCUI-D2oE-vF0.js";import"./cloneDeep-DPn60SEG.js";import"./Skeleton-BAJjCxjE.js";import"./SkeletonButton-BZsoDJNs.js";import"./SkeletonInlineBlock-Dxj5oJ09.js";import"./SkeletonTable-B8VgCseh.js";import"./times-ek0rDpb0.js";import"./toInteger-CJbHmwS_.js";import"./isSymbol-sAfAr4sp.js";import"./SkeletonParagraph-Bu7i7PAX.js";import"./uniqueId-U9rQ3u8t.js";import"./toString-DhZXjtWL.js";import"./CSSTransition-BWw9J4lv.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-_HlC1yJc.js";import"./Avatar-BhhpBbtP.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
