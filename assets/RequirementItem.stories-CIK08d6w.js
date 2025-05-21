import{j as a}from"./jsx-runtime-DmKnoNQ-.js";import{m as P}from"./mockWiki-CZdZHQnO.js";import{M as x}from"./MarkdownSynapse-CsjHmxuh.js";import{d as s}from"./ToastMessage-DUxKDZ7T.js";import{R as n,a as t}from"./RequirementItem-gJeDA_08.js";import{P as O}from"./Paper-Dn3hpbBt.js";import"./index-BFCc_wv0.js";import"./iframe-DVK1wk6d.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-Ct1MSfYs.js";import"./VerificationSubmission-B0kBNeMy.js";import"./useFiles-Bmp6q2a5.js";import"./SynapseConstants-DJnXKVNq.js";import"./OrientationBanner-DLwSvgHC.js";import"./index-7sMRgjqI.js";import"./spreadSx-CwcO6WA9.js";import"./react-B7JEe_9q.js";import"./FullWidthAlert-C2j0NeYe.js";import"./Alert-CKvIY_ZC.js";import"./createTheme-BXEwkt-l.js";import"./resolveComponentProps-DEEyNDFA.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BjgbR4nl.js";import"./createSvgIcon-CexmQeMX.js";import"./DefaultPropsProvider-DUkpy3gp.js";import"./Close-BLLYpaxl.js";import"./IconButton-CtoYFknA.js";import"./ButtonBase-BvXHS7E8.js";import"./useTimeout-B89Jbts_.js";import"./TransitionGroupContext-U6akLiTY.js";import"./useIsFocusVisible-BNNkxGZE.js";import"./useEventCallback-BViUXQES.js";import"./Stack-CilMpvcP.js";import"./getThemeProps-DEqWItKx.js";import"./useTheme-txGj-KA5.js";import"./Box-CnkquDgp.js";import"./AlertTitle-De-Y6WlG.js";import"./Typography-CoReq-7T.js";import"./useTheme-DbaDTwfd.js";import"./Grow-DRdE8lYO.js";import"./index-HtDB6D_8.js";import"./utils-CH6UHCvk.js";import"./ClickAwayListener-C935n3RT.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-BESuS2go.js";import"./index-zScYxpIZ.js";import"./useControlled-BCnvLdxA.js";import"./useId-B4FULkf-.js";import"./Popper-DjVyUDrD.js";import"./Button-DYb5I_h6.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-CzgJJW-6.js";import"./useQuery-BBtTkatK.js";import"./utils-DGVs3mxC.js";import"./Link-iK3V06Y5.js";import"./Collapse-BHBLFnaj.js";import"./isNil-DF8LcSjB.js";import"./_Uint8Array-BGMUFk-X.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CzyhUoMh.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-HSUY0yvO.js";import"./_getTag-B7_rEu3Z.js";import"./tinycolor-Begke6kS.js";import"./Fade-9Bau5x4J.js";import"./Skeleton-DlWq6871.js";import"./inputBaseClasses-DWCx47eo.js";import"./calculateFriendlyFileSize-BHEbv2lr.js";import"./CheckCircleTwoTone-D4_hhNK2.js";import"./InfoTwoTone-E9_F69oy.js";import"./mutation-DUrdKa48.js";import"./dayjs.min-TSt401mi.js";import"./chunk-AYJ5UCUI-BAlWt6x4.js";import"./cloneDeep-BBUYS9nA.js";import"./_initCloneObject-CB_EWvAd.js";import"./isEqual-36wh2HjX.js";import"./merge-CAkvabO_.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DSz-c8Kr.js";import"./SkeletonInlineBlock-DUpeltxx.js";import"./SkeletonTable-DZ993BOC.js";import"./times-DESQX_ub.js";import"./toInteger-DgKbkhK0.js";import"./isSymbol-DHimvwb5.js";import"./SkeletonParagraph-DL2I9A0y.js";import"./uniqueId-BgIHj4wm.js";import"./toString-CCI0wryq.js";import"./CSSTransition-CnCSDH8u.js";import"./ConditionalWrapper-DX3CIVXL.js";import"./LockTwoTone-CWb6YaqZ.js";import"./Avatar-BHSwm3dA.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
