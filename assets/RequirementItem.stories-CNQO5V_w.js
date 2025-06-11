import{j as a}from"./jsx-runtime-CcC0El_l.js";import{m as P}from"./mockWiki-BApATWET.js";import{M as x}from"./MarkdownSynapse-4vhgejAW.js";import{d as s}from"./ToastMessage-DVCxI0uQ.js";import{R as n,a as t}from"./RequirementItem-CjG99vt8.js";import{P as O}from"./Paper-e82N6CUc.js";import"./index-B68G30BL.js";import"./iframe-BhDmSVr3.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CnMBfpEV.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./useFiles-DqNsHYE2.js";import"./SynapseConstants-BdACTRHb.js";import"./OrientationBanner-wsXBDVnB.js";import"./index-BW3PCXjh.js";import"./spreadSx-CwcO6WA9.js";import"./react-BqOYHZeW.js";import"./FullWidthAlert-DyITlB3W.js";import"./Alert-JkMAwdP_.js";import"./createTheme-uH0JWPXs.js";import"./resolveComponentProps-BlPPQYt3.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CJhLMqiy.js";import"./createSvgIcon-CLp3pTmR.js";import"./DefaultPropsProvider-CFtxA7R5.js";import"./Close-yJHZgjvL.js";import"./IconButton-C8Z2107h.js";import"./ButtonBase-uT-bVZ8Z.js";import"./useTimeout-IiKmTybS.js";import"./TransitionGroupContext-qMTvxwff.js";import"./useIsFocusVisible-CWkv9bHS.js";import"./useEventCallback-CT6ESdV1.js";import"./Stack-CrEhumFf.js";import"./getThemeProps-CPiIGKdl.js";import"./useTheme-DmWCeBzk.js";import"./Box-Dfy5DiVK.js";import"./AlertTitle-CARXOnCR.js";import"./Typography-CexizsGO.js";import"./useTheme-D2wHp5z5.js";import"./Grow-Cc3QFLpJ.js";import"./index-DBrU7HLq.js";import"./index-9l0LHN3Q.js";import"./utils-DrB9Djcb.js";import"./ClickAwayListener-dr7M7gUP.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-D3zE2KP_.js";import"./index-CGBjJezI.js";import"./useControlled-Cxwn0Bse.js";import"./useId-D1bj6Ezy.js";import"./Popper-C3TYFz4O.js";import"./Button-CKTM6a-Q.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-etW1RJAA.js";import"./utils-CkMob-h2.js";import"./Link-BsMwYZcC.js";import"./Collapse-Bvlc19JG.js";import"./isNil-DMGNENX_.js";import"./_Uint8Array-Ce0zAvtV.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CCb2uYv7.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bv38uHXe.js";import"./_getTag-DL_rFxlP.js";import"./tinycolor-Begke6kS.js";import"./Fade-CjdL0uLB.js";import"./Skeleton-DIbiOgAZ.js";import"./inputBaseClasses-DQW81ah8.js";import"./calculateFriendlyFileSize-eeYADzxW.js";import"./CheckCircleTwoTone-BxRyKYVR.js";import"./InfoTwoTone-DOMYMkSD.js";import"./useMutation-yvVj1gsv.js";import"./isEqual-zfkFeRpC.js";import"./dayjs.min-CbFjNGZU.js";import"./chunk-AYJ5UCUI-BMpn7eIV.js";import"./cloneDeep-B8r50GAX.js";import"./_initCloneObject-B86KfcnX.js";import"./merge-DWlXz-uv.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-DQ5OT-IG.js";import"./SkeletonInlineBlock-D_3kd_Tp.js";import"./SkeletonTable-Px5vaXaW.js";import"./times-BNou_5v_.js";import"./toInteger-CFw7ZycG.js";import"./isSymbol-7YZSFn5O.js";import"./SkeletonParagraph-BvHeXwGq.js";import"./uniqueId-XaZJ6HYR.js";import"./toString-D5B49XBW.js";import"./CSSTransition-CBMcoXum.js";import"./ConditionalWrapper-BIxKU9np.js";import"./LockTwoTone-C72D6Np6.js";import"./Avatar-CfoQsZLb.js";const ur={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const lr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,lr as __namedExportsOrder,ur as default};
