import{j as a}from"./jsx-runtime-3f6CKeIF.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-TdzILyuQ.js";import{d as s}from"./ToastMessage-Cd6NFYj7.js";import{R as n,a as t}from"./RequirementItem-BufEc1pi.js";import{P as O}from"./Paper-Das1pTqY.js";import"./index-HP8SqD2K.js";import"./iframe-A6Im_5fY.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-hriiw4nD.js";import"./SynapseConstants-Ceuy4-oX.js";import"./OrientationBanner-C8RlHAux.js";import"./index-CQhGJ0-g.js";import"./spreadSx-CwcO6WA9.js";import"./react-CJyvR9hS.js";import"./FullWidthAlert-BfzTfdZT.js";import"./Alert-CMYV8MEC.js";import"./createTheme-BFTLXKdS.js";import"./DefaultPropsProvider-sc08Vmw-.js";import"./useSlot-C0a2qSe8.js";import"./useForkRef-Dn650N5T.js";import"./createSimplePaletteValueFilter-C9zAylia.js";import"./createSvgIcon-BKsi1Pri.js";import"./Close-C22AAyfL.js";import"./IconButton-DXZ3SooE.js";import"./useTimeout-C5CJYgcw.js";import"./ButtonBase-IY5BB0lZ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CHo5lmMq.js";import"./Stack-DnrBq6H8.js";import"./extendSxProp-zrENrKjp.js";import"./getThemeProps-BwuHKxRW.js";import"./useTheme-CZsUm9e8.js";import"./Box-CptHO48m.js";import"./AlertTitle-DcxbgZSu.js";import"./Typography-Cb5qF7iG.js";import"./index-2Yi9WqYj.js";import"./useTheme-BvSiOi-g.js";import"./ClickAwayListener-KxlpfaUF.js";import"./getReactElementRef-DcmQWZun.js";import"./index-DaeGJvZ4.js";import"./index-B6koSUCB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DJUNktmc.js";import"./Tooltip-uLIIXX-Y.js";import"./index-Cog4_wuj.js";import"./useControlled-CnzJCrVb.js";import"./Popper-TpWUk-Ct.js";import"./Button-Drfg9msN.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-CP1wMQ4l.js";import"./utils-Ct3imd5Z.js";import"./Link-BXdlCrAq.js";import"./Collapse-DSwc-iXw.js";import"./isNil-BQ10i-bW.js";import"./_Uint8Array-DkLkC21u.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-C7mb4Gwn.js";import"./isArray-Dxzbedgu.js";import"./isEqual-DTGk3u1r.js";import"./_getTag-CVuvZ6wz.js";import"./tinycolor-Begke6kS.js";import"./Fade-CX7Rf_YJ.js";import"./inputBaseClasses-D2hdx5fk.js";import"./calculateFriendlyFileSize-CP1nYJS_.js";import"./CheckCircleTwoTone-CA9f6Zes.js";import"./InfoTwoTone-XB0kwG84.js";import"./useMutation-Bh1f1kof.js";import"./dayjs.min-aXMALWM4.js";import"./chunk-AYJ5UCUI-CrGbwdEq.js";import"./cloneDeep-CYSMkJC9.js";import"./_initCloneObject-V0hT8lNO.js";import"./Skeleton-CLp_S6QR.js";import"./merge-CukRjkgn.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-BxyxJre-.js";import"./SkeletonInlineBlock-B5GnxB2v.js";import"./SkeletonTable-DIFPdwLC.js";import"./times-Do6cWgca.js";import"./toInteger-Zun92mdU.js";import"./isSymbol-DwVz0CKo.js";import"./SkeletonParagraph-44G8XGEf.js";import"./uniqueId-DsvKk8Tj.js";import"./toString-BlE5IUB_.js";import"./CSSTransition-DMAazQqT.js";import"./ConditionalWrapper-lXnk6sam.js";import"./LockTwoTone-BKxGAvPX.js";import"./Avatar-DtSsRwNx.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
