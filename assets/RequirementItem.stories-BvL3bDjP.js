import{j as a}from"./jsx-runtime-CsNpV52b.js";import{m as P}from"./mockWiki-B6wTqEDI.js";import{M as x}from"./MarkdownSynapse-BmbYr6l5.js";import{d as s}from"./ToastMessage-KI8dqMxA.js";import{R as n,a as t}from"./RequirementItem-C-SBJtQR.js";import{P as O}from"./Paper-BzD9Caoq.js";import"./index-mFk7i4GH.js";import"./iframe-DEOEZpa7.js";import"./mock_user_profile-CijvmO8r.js";import"./mock_file_handle-3wYKbysY.js";import"./VerificationSubmission-dxY1kvC5.js";import"./useFiles-D_KC07Yn.js";import"./SynapseConstants-fzgxL-Wk.js";import"./OrientationBanner-D4K1PXbS.js";import"./index-BuZNpAEX.js";import"./spreadSx-CwcO6WA9.js";import"./react-BAmm9IRN.js";import"./FullWidthAlert-DBUNX5Z0.js";import"./Alert-BxOYpbq5.js";import"./createTheme-C3barXkp.js";import"./resolveComponentProps-fT-xUJV6.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-5vJwFTIC.js";import"./createSvgIcon-DxSwOgMO.js";import"./DefaultPropsProvider-Bb4a2h8s.js";import"./Close-DHLyXVKW.js";import"./IconButton-CQuDWsyU.js";import"./ButtonBase-CRJlWVnj.js";import"./useTimeout-D6spdY7I.js";import"./TransitionGroupContext-Dt8W7umX.js";import"./useIsFocusVisible-BD-HS5zK.js";import"./useEventCallback-PvtZRVx5.js";import"./Stack-CFcOoEe3.js";import"./getThemeProps-Dtctgm80.js";import"./useTheme-N8XaFENF.js";import"./Box-D1r6O6zj.js";import"./AlertTitle-BjYPAFw4.js";import"./Typography-BaVgdRVq.js";import"./useTheme-0AVLLlD6.js";import"./Grow-BBkh1Ns9.js";import"./index-C3e2HYL3.js";import"./utils-Bd5lfNuN.js";import"./ClickAwayListener-DCBWfrxW.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-JlwuiT4k.js";import"./index-Dyubesn9.js";import"./useControlled-DdQGOSQo.js";import"./useId-B7w4jRC1.js";import"./Popper-Dj3tlAHp.js";import"./Button-D1O-XNc3.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-lE31obNl.js";import"./useQuery-Tl1FAVUS.js";import"./utils-Dft4bglm.js";import"./Link-DVKciDBj.js";import"./Collapse-Dxre2Wpg.js";import"./isNil-BBBzVpoC.js";import"./_Uint8Array-gbqBABgH.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ysIE1Q2w.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-Bwmz0e7V.js";import"./_getTag-d-X6q6ru.js";import"./tinycolor-Begke6kS.js";import"./Fade-Co4SyzRo.js";import"./Skeleton-BZAwj2-9.js";import"./inputBaseClasses-CQNINzSQ.js";import"./calculateFriendlyFileSize-Dk0vHyM_.js";import"./CheckCircleTwoTone-CNETuQEN.js";import"./InfoTwoTone-Cv4uWze4.js";import"./mutation-CVFNbaq8.js";import"./dayjs.min-C2vS6YTT.js";import"./chunk-AYJ5UCUI-c6JhkQ8h.js";import"./cloneDeep-Ds3WadWA.js";import"./_initCloneObject-BEqGcqh-.js";import"./isEqual-Bj0Ibk1q.js";import"./merge-oP5qKHGM.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CfRPp5en.js";import"./SkeletonInlineBlock-DPJPf2BH.js";import"./SkeletonTable-DMGCE8A1.js";import"./times-DBoDqrm8.js";import"./toInteger-DXGJpQee.js";import"./isSymbol-BD4zGCJ0.js";import"./SkeletonParagraph-DqecZcP5.js";import"./uniqueId-BHP-G4Q6.js";import"./toString-C_9Aa7ya.js";import"./CSSTransition-BpADqBaw.js";import"./ConditionalWrapper-onN8tGpm.js";import"./LockTwoTone-0vgZCxhq.js";import"./Avatar-Zt6vwYGG.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
