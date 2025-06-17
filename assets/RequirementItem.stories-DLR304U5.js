import{j as a}from"./jsx-runtime-CQPQXr52.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-DLqw-Rwo.js";import{d as s}from"./ToastMessage-DfUCvxLR.js";import{R as n,a as t}from"./RequirementItem-_Wjpdpl1.js";import{P as O}from"./Paper-jcbo9BO-.js";import"./index-KKmRTF5s.js";import"./iframe-DRiXRSY5.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-CwDpHdTz.js";import"./SynapseConstants-pq2jxX2i.js";import"./OrientationBanner-DyZBz6DX.js";import"./index-lUjIlAO0.js";import"./spreadSx-CwcO6WA9.js";import"./react-B4ldvmD6.js";import"./FullWidthAlert-DtTI913S.js";import"./Alert-C_ZZXjq8.js";import"./createTheme-BqgKvQ8G.js";import"./DefaultPropsProvider-CWjJlZr6.js";import"./useSlot-CLNHE8BT.js";import"./useForkRef-D79-SeVS.js";import"./createSimplePaletteValueFilter-BTPJzFbr.js";import"./createSvgIcon-B8xlFo8P.js";import"./Close-DwV5UBXB.js";import"./IconButton-m3tI1RB4.js";import"./useTimeout-BCXwqZGe.js";import"./ButtonBase-BaArPKRC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bq52wuuH.js";import"./Stack-9Hc468Wb.js";import"./extendSxProp-CQpNTWbd.js";import"./getThemeProps-DjdTtCv_.js";import"./useTheme-HEqh14Zh.js";import"./Box-Xg0w7t2C.js";import"./AlertTitle-DFGqbxHs.js";import"./Typography-DVQWdlVG.js";import"./index-DLQYH-hE.js";import"./useTheme-DBGU2jzI.js";import"./ClickAwayListener-ChCwd6mN.js";import"./getReactElementRef-Bvh2yZ15.js";import"./index-CbuTK_hw.js";import"./index-CS9z8aEe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-lyiR1ZA0.js";import"./Tooltip-CCpJJKI-.js";import"./index-ygp4hJLM.js";import"./useControlled-DKh-KTFM.js";import"./Popper-C9xFKDlU.js";import"./Button-CDG2w3Q3.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-DH7Ym7ZZ.js";import"./utils-CtWK0csr.js";import"./Link-BuOcEBSX.js";import"./Collapse-D4K7Ux3-.js";import"./isNil-B_BJKF3J.js";import"./_Uint8Array-Dx0fLmqC.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-Dd4dGT1V.js";import"./isArray-Dxzbedgu.js";import"./isEqual-CAN5-Gd-.js";import"./_getTag-D0V2SLmd.js";import"./tinycolor-Begke6kS.js";import"./Fade-HbE-yoUa.js";import"./inputBaseClasses-D0lO1Juj.js";import"./calculateFriendlyFileSize-DQ8c_zc0.js";import"./CheckCircleTwoTone-DpMtbz9w.js";import"./InfoTwoTone-BNWQZzrY.js";import"./useMutation-DLlT5jgZ.js";import"./dayjs.min-CZ_KWEVN.js";import"./chunk-AYJ5UCUI-sa7DX7t9.js";import"./cloneDeep-BGb7d97h.js";import"./_initCloneObject-B4x6wi9T.js";import"./Skeleton-DRAPXtU3.js";import"./merge-iQbBRW5N.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-xzkQhglH.js";import"./SkeletonInlineBlock-BGAl80hI.js";import"./SkeletonTable-DwJmd6vu.js";import"./times-DwnHVqG8.js";import"./toInteger-BzwIgAfw.js";import"./isSymbol-h4R5yMGb.js";import"./SkeletonParagraph-D1ln8JBC.js";import"./uniqueId-Ci8UCdS7.js";import"./toString-CE_mjtl-.js";import"./CSSTransition-BIo74eI0.js";import"./ConditionalWrapper-xvpsN7CC.js";import"./LockTwoTone-x937C-te.js";import"./Avatar-C3uG-oMe.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
