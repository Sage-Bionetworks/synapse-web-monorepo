import{j as a}from"./jsx-runtime-C5ysBaSF.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-YGfrF3Yf.js";import{d as s}from"./ToastMessage-Dl39DkPf.js";import{R as n,a as t}from"./RequirementItem-s1v2Owvk.js";import{P as O}from"./Paper-BkFXPQ0I.js";import"./index-nsQxvz3s.js";import"./iframe-Janl4OHm.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-Dhq64LD3.js";import"./SynapseConstants-nC0cy9NR.js";import"./OrientationBanner-BaOJTw1c.js";import"./index-Euv0kKX6.js";import"./spreadSx-CwcO6WA9.js";import"./react--bFTsUCT.js";import"./FullWidthAlert-DlFKq-DC.js";import"./Alert-RC7B8x0K.js";import"./createTheme-ByXOpdJz.js";import"./resolveComponentProps-CfpND56K.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Ceiq6s0j.js";import"./createSvgIcon-DeXJlgu_.js";import"./DefaultPropsProvider-AOp6TNyl.js";import"./Close-CT9yiP13.js";import"./IconButton-BtJv4fcx.js";import"./ButtonBase-D09UPZOY.js";import"./useTimeout-iGOOtj66.js";import"./TransitionGroupContext-BRGEgvEM.js";import"./useIsFocusVisible-B_yrjrHI.js";import"./useEventCallback-BxOaVHWE.js";import"./Stack-Bu6KB5fc.js";import"./getThemeProps-BR7frNLW.js";import"./useTheme-dh9DXsym.js";import"./Box-Dh_kMIqf.js";import"./AlertTitle-CTWcSjN8.js";import"./Typography-2ZaHckIm.js";import"./useTheme-faklcodD.js";import"./Grow-DQCtPGN8.js";import"./index-BNgdfWIu.js";import"./utils-CCZi6kcq.js";import"./ClickAwayListener-DyUGUeMv.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-rXWE94cF.js";import"./index-BEcPdF-J.js";import"./useControlled-B8KPlW55.js";import"./useId-C4BxQuWA.js";import"./Popper-i9E87YUZ.js";import"./Button-2ZkIkkeV.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-B-QxEfwh.js";import"./utils-NjyKKwdB.js";import"./Link-DTRRVZ6z.js";import"./Collapse-haV8wGjw.js";import"./isNil-DWkoTF96.js";import"./_Uint8Array-CJ-px7Q4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DIW4b2lw.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-CkMKoezu.js";import"./_getTag-BK3frtm6.js";import"./tinycolor-Begke6kS.js";import"./Fade-zN03jnnY.js";import"./Skeleton-CCW5pzar.js";import"./inputBaseClasses-DEtapqOK.js";import"./calculateFriendlyFileSize-C134mPnt.js";import"./CheckCircleTwoTone-DdehzE-y.js";import"./InfoTwoTone-DyKFxUVE.js";import"./useMutation-KCq28Paw.js";import"./isEqual-tsjY0vzA.js";import"./dayjs.min-CO0gnhwg.js";import"./chunk-AYJ5UCUI-DnzAy6h8.js";import"./cloneDeep-CKZCjTCX.js";import"./_initCloneObject-Bx7Kkndt.js";import"./merge-DPAljtzM.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CLJ0wCC8.js";import"./SkeletonInlineBlock-B54Jvxn9.js";import"./SkeletonTable-DU9_F4fF.js";import"./times-CAapsJ-A.js";import"./toInteger-nZ6sOvfN.js";import"./isSymbol-CpHMAUht.js";import"./SkeletonParagraph-BQEg-f88.js";import"./uniqueId-CgNFNXXh.js";import"./toString-CGhGPn4R.js";import"./CSSTransition-PspQzvm9.js";import"./ConditionalWrapper-F_5CuSHd.js";import"./LockTwoTone-degNeolS.js";import"./Avatar-BvxXvn-H.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
