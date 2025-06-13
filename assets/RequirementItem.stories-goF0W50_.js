import{j as a}from"./jsx-runtime-O8TkLtV5.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-9lYxy7pD.js";import{d as s}from"./ToastMessage-DMcGvQpc.js";import{R as n,a as t}from"./RequirementItem-BahaJs3b.js";import{P as O}from"./Paper-D4hJvkH0.js";import"./index-BdL7riv0.js";import"./iframe-DBj53tT_.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-DxC7nl3D.js";import"./SynapseConstants-CXTFm1VN.js";import"./OrientationBanner-BKv79mXg.js";import"./index-CeY3lIrK.js";import"./spreadSx-CwcO6WA9.js";import"./react-CF5aTxTJ.js";import"./FullWidthAlert-BF1VMUNH.js";import"./Alert-DM7UWADG.js";import"./createTheme-Bv5mYTu1.js";import"./DefaultPropsProvider-BEcU5m4O.js";import"./useSlot-DzGficUl.js";import"./useForkRef-edQmTpSu.js";import"./createSimplePaletteValueFilter-CsQijxTZ.js";import"./createSvgIcon-BvN6BTm-.js";import"./Close-BzD5K2sc.js";import"./IconButton-22JwbE8M.js";import"./useTimeout-CSNp5plk.js";import"./ButtonBase-CxbkP8LH.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D4ntz8sa.js";import"./Stack-CDbBDHOE.js";import"./extendSxProp-DrqXgrYI.js";import"./getThemeProps-BNlrmySa.js";import"./useTheme-DY_86peL.js";import"./Box-CT9i0kfz.js";import"./AlertTitle-G6vHreez.js";import"./Typography-BqmMHzok.js";import"./index-CsB3u6p3.js";import"./useTheme-BkQG1Vvc.js";import"./ClickAwayListener-D1RUcE6c.js";import"./getReactElementRef-CWFCGlr1.js";import"./index-D_l0Au_c.js";import"./index-BWcaaVS5.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DzQd8rZb.js";import"./Tooltip-D_X6aErI.js";import"./index-DoS5ZV3O.js";import"./useControlled-BtOEwbLw.js";import"./Popper-nnkyRMWB.js";import"./Button-wemfiAHD.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CkCu-w-q.js";import"./utils-Cs3LXMa6.js";import"./Link-Dng4sksw.js";import"./Collapse-BRjmE_en.js";import"./isNil-D60xMXao.js";import"./_Uint8Array-BBVtwR3V.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BoiNzNpU.js";import"./isArray-Dxzbedgu.js";import"./isEqual-BFeuiteO.js";import"./_getTag-BlJpn61a.js";import"./tinycolor-Begke6kS.js";import"./Fade-BtlJADv1.js";import"./inputBaseClasses-CAWV7teM.js";import"./calculateFriendlyFileSize-DhqizIil.js";import"./CheckCircleTwoTone-BjvZNhmr.js";import"./InfoTwoTone-DhOnXhJt.js";import"./useMutation-CweL2dWa.js";import"./dayjs.min-7Nt2QYG2.js";import"./chunk-AYJ5UCUI-Bhv9tQyJ.js";import"./cloneDeep-DkNLZXx1.js";import"./_initCloneObject-B3MBXCb2.js";import"./Skeleton-DrSkd8hR.js";import"./merge-BlmsI-Yg.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-B524-Umv.js";import"./SkeletonInlineBlock-TY9LSV4p.js";import"./SkeletonTable-CE8bQnU5.js";import"./times-aaBD3S_o.js";import"./toInteger-C_YyRNT4.js";import"./isSymbol-Cn0ViDdg.js";import"./SkeletonParagraph-DRTTPV4U.js";import"./uniqueId-RZ_GTOkZ.js";import"./toString-BYgR7s65.js";import"./CSSTransition-DE8ahUk7.js";import"./ConditionalWrapper-CBRMzEd4.js";import"./LockTwoTone-BYmpBu3n.js";import"./Avatar-BosjEQXj.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
