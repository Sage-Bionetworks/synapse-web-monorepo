import{j as a}from"./jsx-runtime-DZ2rmb3d.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-CzdqFx6e.js";import{d as s}from"./ToastMessage-hyNnIHG3.js";import{R as n,a as t}from"./RequirementItem-B7V2BF8c.js";import{P as O}from"./Paper-c3J7dilK.js";import"./index-BYKoeVFg.js";import"./iframe-CWhMQ2Vn.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-BqOHDcj-.js";import"./SynapseConstants-FNselSPB.js";import"./OrientationBanner-_8SDrY-C.js";import"./index-BhXS2p0q.js";import"./spreadSx-CwcO6WA9.js";import"./react-ByWiYQt3.js";import"./FullWidthAlert-B851SKqI.js";import"./Alert-DV47A-h3.js";import"./createTheme-C4Y7Q1zD.js";import"./DefaultPropsProvider-qIaUDKvM.js";import"./useSlot-EpJ7FVs5.js";import"./useForkRef-DimatEEv.js";import"./createSimplePaletteValueFilter-B7Tg97IJ.js";import"./createSvgIcon-BB6CXqP0.js";import"./Close-CjU0Vxis.js";import"./IconButton-Cns99SL2.js";import"./useTimeout-CMQCF7A4.js";import"./ButtonBase-CBeCMKH-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-boL6t39h.js";import"./Stack-DAlhJga5.js";import"./extendSxProp-Bok_DwHS.js";import"./getThemeProps-Bg6pJizB.js";import"./useTheme-CxztgSal.js";import"./Box-TBi4R_tx.js";import"./AlertTitle-C-sKRdd0.js";import"./Typography-DGHoOL1s.js";import"./index-DZM-DBuH.js";import"./useTheme-CB-K-L-k.js";import"./ClickAwayListener-RCtasomh.js";import"./getReactElementRef-CVtmtTR2.js";import"./index-C7rTPzP4.js";import"./index-DHwhTsG4.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAbDrD10.js";import"./Tooltip-ig667hYQ.js";import"./index-C6UxR57v.js";import"./useControlled-Cdgce0Fm.js";import"./Popper-CJxo7fWf.js";import"./Button-BeYUk6gb.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-B8P-H-CQ.js";import"./utils-ey8UtHD-.js";import"./Link-PEoapBOy.js";import"./Collapse-DNI6sBty.js";import"./isNil-ULxei-8y.js";import"./_Uint8Array-DPmZGDJx.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-xzhu7Y4X.js";import"./isArray-Dxzbedgu.js";import"./isEqual-CApB2fJy.js";import"./_getTag-Dt-GVugN.js";import"./tinycolor-Begke6kS.js";import"./Fade-Das0aMdZ.js";import"./inputBaseClasses-C_dxTE63.js";import"./calculateFriendlyFileSize-1jV16l2L.js";import"./CheckCircleTwoTone-CtWY67l1.js";import"./InfoTwoTone-D56-uGzp.js";import"./useMutation-DWWbLcgX.js";import"./dayjs.min-B3bp7WM9.js";import"./chunk-AYJ5UCUI-MFOh-52S.js";import"./cloneDeep-BMtsrdwr.js";import"./_initCloneObject-DPJUVdV7.js";import"./Skeleton-DA9Z_fDE.js";import"./merge-Browa7qW.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CxQcR2mu.js";import"./SkeletonInlineBlock-UI00qLQN.js";import"./SkeletonTable-D8gfrknY.js";import"./times-Rmi-8CQW.js";import"./toInteger-D48nwcsx.js";import"./isSymbol-DKOvSa_O.js";import"./SkeletonParagraph-CiiwocIV.js";import"./uniqueId-ePo8J07Q.js";import"./toString-IF5HzHVc.js";import"./CSSTransition-DpfJ6zGj.js";import"./ConditionalWrapper-BskcENGR.js";import"./LockTwoTone-Bzo05w_c.js";import"./Avatar-C4Ts9Fo9.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
