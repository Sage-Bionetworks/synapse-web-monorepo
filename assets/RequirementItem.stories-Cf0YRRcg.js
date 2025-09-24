import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-Db88TmWw.js";import{d as s}from"./ToastMessage-CJrIFcEg.js";import{R as n,a as t}from"./RequirementItem-BXi22jBj.js";import{P as O}from"./Paper-OHiCXA0a.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DKBjGtH0.js";import"./SynapseConstants-BPxSYXRt.js";import"./OrientationBanner-BRUSGBks.js";import"./index-Dr7n8Bu6.js";import"./index-KGN7nUgE.js";import"./iframe-CMQeI9WK.js";import"./spreadSx-CwcO6WA9.js";import"./react-CMig-9PE.js";import"./FullWidthAlert-kwfi_d0a.js";import"./Alert-DJ8X3BSK.js";import"./createTheme-DO0GeJVN.js";import"./DefaultPropsProvider-TigZOw0c.js";import"./useSlot-BeLwitnn.js";import"./useForkRef--CXcjM6c.js";import"./createSimplePaletteValueFilter-DZ3Cd0ZY.js";import"./createSvgIcon-BwJ4Z0yb.js";import"./Close-B39SLtS7.js";import"./IconButton-DDxgpgKz.js";import"./useTimeout-CbCrOuyo.js";import"./ButtonBase-Dpm3dYIG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-tpeZfTSG.js";import"./Stack-SWup2UhN.js";import"./extendSxProp-BYQFtxYN.js";import"./getThemeProps-Bdh-DyuI.js";import"./useTheme-DNfJZ9a1.js";import"./Box-CvOrwV-N.js";import"./AlertTitle-DU-H4ICD.js";import"./Typography-Bx5U0C2d.js";import"./index-BKxVS2q8.js";import"./useTheme-DqFjo4Vk.js";import"./ClickAwayListener-BU9wvTpl.js";import"./getReactElementRef-CWKqg3UA.js";import"./index-DfI_pPk5.js";import"./index-CNJXOAct.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bj8lCSBe.js";import"./Tooltip-C0iVGWe9.js";import"./index-Ch-D0VSk.js";import"./useControlled-CYxMkq6A.js";import"./Popper-B69y1AqZ.js";import"./Button-3qFS6i5P.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BiFVnL5m.js";import"./QueryClientProvider-BM1sWabn.js";import"./Link-ChVk8ADt.js";import"./Collapse-BffAQEYD.js";import"./_baseUniq-CODlLnhx.js";import"./_Uint8Array-DL2TZi9X.js";import"./isArray-DjjF7-P3.js";import"./_getTag-Cgl2tQw4.js";import"./isEqual-wQQmtEJR.js";import"./merge-CTQFuPxa.js";import"./_initCloneObject-Ctr9Y8Ai.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Cv-DSv5P.js";import"./inputBaseClasses-4MqSuc0L.js";import"./calculateFriendlyFileSize-DcjtLEas.js";import"./CheckCircleTwoTone-D1Vqh63T.js";import"./InfoTwoTone-BXDH4Dcy.js";import"./useMutation-Dn2nWpvI.js";import"./dayjs.min-DKhR2V7G.js";import"./chunk-AYJ5UCUI-o4WQ5ozd.js";import"./cloneDeep-ChJ6elbg.js";import"./Skeleton-C3ppgLNp.js";import"./SkeletonButton-DGvCkdYz.js";import"./SkeletonInlineBlock-o7SDr7bI.js";import"./SkeletonTable-D-StE-y9.js";import"./times-D0_Iiw_N.js";import"./toInteger-BqTtVtag.js";import"./isSymbol-CslOALvZ.js";import"./SkeletonParagraph-K2Iq3sh3.js";import"./uniqueId-D34pUzrI.js";import"./toString-DqSm65F6.js";import"./CSSTransition-Bf_26eVV.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-D4x-VGey.js";import"./Avatar-9AypxkyD.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
