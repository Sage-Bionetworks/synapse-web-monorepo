import{j as a}from"./jsx-runtime-DAw_QoWs.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-DuDhK4qX.js";import{d as s}from"./ToastMessage-Cv_fHDlK.js";import{R as n,a as t}from"./RequirementItem-B8M8wWZx.js";import{P as O}from"./Paper-CLLam5eU.js";import"./index-B1D9r8pK.js";import"./iframe-BcOC2yHy.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-D5p9mEeJ.js";import"./SynapseConstants-ChwKCKUe.js";import"./OrientationBanner-oeQY9W6x.js";import"./index-CSHqL8lk.js";import"./spreadSx-CwcO6WA9.js";import"./react-CaHgI2xI.js";import"./FullWidthAlert-CqKKYlX-.js";import"./Alert-Bd4UixhE.js";import"./createTheme-C3x6mOsc.js";import"./resolveComponentProps-Bml2h3Vr.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BvktJw4g.js";import"./createSvgIcon-DFCLsq46.js";import"./DefaultPropsProvider-BRQN9N2m.js";import"./Close-DQBgDOSz.js";import"./IconButton-CQEpaTId.js";import"./ButtonBase-CxNTjvXH.js";import"./useTimeout-DOooaOO7.js";import"./TransitionGroupContext-Bl3cUyHW.js";import"./useIsFocusVisible-B_nwMbU_.js";import"./useEventCallback-C_4PLi3H.js";import"./Stack-MFmmhnKS.js";import"./getThemeProps-DX1gnVmC.js";import"./useTheme-ChDKy_2u.js";import"./Box-D-8YJusE.js";import"./AlertTitle-C83HUI2e.js";import"./Typography-VOjsn5Pz.js";import"./useTheme-bvUc0IYs.js";import"./Grow-BPCk84L6.js";import"./index-C88ldYJB.js";import"./utils-Bzb8CGjQ.js";import"./ClickAwayListener-BMStZymP.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-Dp2Znnys.js";import"./index-CHIJk7Ky.js";import"./useControlled-BzTXu6R5.js";import"./useId-BgwkmMHa.js";import"./Popper-Cbo0s97p.js";import"./Button-LzYkJm9V.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Df7AZImX.js";import"./useQuery-CWk1d_fS.js";import"./utils-D8g86RT1.js";import"./Link-C5RxPrJ3.js";import"./Collapse-DxRVa4rj.js";import"./isNil-trK1jsU5.js";import"./_Uint8Array-DpxWhSn9.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-l2stp93q.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-D9NgJpr4.js";import"./_getTag-BmfB6MEh.js";import"./tinycolor-Begke6kS.js";import"./Fade-C5PK1kHy.js";import"./Skeleton-BAZzAkN6.js";import"./inputBaseClasses-DXZf_3PC.js";import"./calculateFriendlyFileSize-DmhL_8oc.js";import"./CheckCircleTwoTone-CNnVInjh.js";import"./InfoTwoTone-BmfNDtit.js";import"./mutation-CINg4fey.js";import"./dayjs.min-DQJgKjZd.js";import"./chunk-AYJ5UCUI-B9_CWiKA.js";import"./cloneDeep-cFlRRiur.js";import"./_initCloneObject-X1pr-NFE.js";import"./isEqual-BZl8ciHp.js";import"./merge-TeTmR9Lg.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-C1ocO452.js";import"./SkeletonInlineBlock-i7c7PImv.js";import"./SkeletonTable-B9yUjImF.js";import"./times-BFOjRvrC.js";import"./toInteger-CceQtdBS.js";import"./isSymbol-EEZWc-Yf.js";import"./SkeletonParagraph-rclSDo9e.js";import"./uniqueId-BsecQqrz.js";import"./toString-CWaKz3gu.js";import"./CSSTransition-C7M4s-Vy.js";import"./ConditionalWrapper-CjyfB8gd.js";import"./LockTwoTone-CMMxvmZt.js";import"./Avatar-_KjESMVL.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
