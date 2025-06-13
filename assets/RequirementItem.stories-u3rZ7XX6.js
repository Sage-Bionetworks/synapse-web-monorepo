import{j as a}from"./jsx-runtime--VDmQxho.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-B87axYzJ.js";import{d as s}from"./ToastMessage-CvEG0MDl.js";import{R as n,a as t}from"./RequirementItem-ClucsqNd.js";import{P as O}from"./Paper-DbEaZNKI.js";import"./index-CuDCD8Cd.js";import"./iframe-BqzTMP-6.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-N2sWxoXQ.js";import"./SynapseConstants-wMEBUGx4.js";import"./OrientationBanner-BCQbNnza.js";import"./index-DmHdRDtR.js";import"./spreadSx-CwcO6WA9.js";import"./react-dbF9bnqN.js";import"./FullWidthAlert-1M5hpNih.js";import"./Alert-p-r8DxH1.js";import"./createTheme-BjDkboqX.js";import"./DefaultPropsProvider-B_Sofjtv.js";import"./useSlot-DS3iUyMI.js";import"./useForkRef-CsgOK780.js";import"./createSimplePaletteValueFilter-esMbi9-T.js";import"./createSvgIcon-DxUNcRk1.js";import"./Close-OfKhpn5t.js";import"./IconButton-CMsWyADJ.js";import"./useTimeout-DATmwXFk.js";import"./ButtonBase-AwvyoIOV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DqVQN-ep.js";import"./Stack-I2caYhOY.js";import"./extendSxProp-B48CrRxU.js";import"./getThemeProps-B_gV8fQl.js";import"./useTheme-D6w9qOOY.js";import"./Box-BXO-o3lc.js";import"./AlertTitle-B7-3cLF-.js";import"./Typography-DxMOu3Nh.js";import"./index-DGodYfXt.js";import"./useTheme-D1oNS_LI.js";import"./ClickAwayListener-Deska0ZP.js";import"./getReactElementRef-QT_YGi8b.js";import"./index--qVxq6-z.js";import"./index-Dgn98faf.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DGRSNWMN.js";import"./Tooltip-DrQgQo01.js";import"./index-Dh59YMo3.js";import"./useControlled-BhFUbj8p.js";import"./Popper-CTKKY7d_.js";import"./Button-D4VXSl38.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-q3zwWk44.js";import"./utils-A-KMXcap.js";import"./Link-DZQNNy4T.js";import"./Collapse-BDOLvwNe.js";import"./isNil-DkKNgmMM.js";import"./_Uint8Array-x6e4vkBj.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-D8j_XhY_.js";import"./isArray-Dxzbedgu.js";import"./isEqual-C90r3yLJ.js";import"./_getTag-BuRU9Bgy.js";import"./tinycolor-Begke6kS.js";import"./Fade-DDna5lT4.js";import"./inputBaseClasses-BS6ehBVH.js";import"./calculateFriendlyFileSize-DLpqeOM4.js";import"./CheckCircleTwoTone-OACbepET.js";import"./InfoTwoTone-89W568jB.js";import"./useMutation-Dngnwen0.js";import"./dayjs.min-BncQY9dT.js";import"./chunk-AYJ5UCUI-DEJIN_fb.js";import"./cloneDeep-nOAbP7jl.js";import"./_initCloneObject-C2EI-6Xb.js";import"./Skeleton-BVCwjyC9.js";import"./merge-BzBrfKpd.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Cof5H2bz.js";import"./SkeletonInlineBlock-CFYnbU-h.js";import"./SkeletonTable-CvMbDEkL.js";import"./times-CZUoS7da.js";import"./toInteger-CD9iJoTR.js";import"./isSymbol-b6S760dv.js";import"./SkeletonParagraph-Dc1ofT0h.js";import"./uniqueId-B2RitIGp.js";import"./toString-Cido_b79.js";import"./CSSTransition-BhRQLcFY.js";import"./ConditionalWrapper-C3mSAglj.js";import"./LockTwoTone-QxC93KSr.js";import"./Avatar-Cn-NjTFN.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
