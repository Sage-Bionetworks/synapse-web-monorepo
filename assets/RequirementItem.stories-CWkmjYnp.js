import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-D-tOs994.js";import{M as x}from"./MarkdownSynapse-C1NYhXcB.js";import{d as s}from"./ToastMessage-CkFQzo64.js";import{R as n,a as t}from"./RequirementItem-DmbMjD3L.js";import{P as O}from"./Paper-CSLfVwPp.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BIJh-7D7.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./useFiles-C8pQ42sC.js";import"./SynapseConstants-BWEIGnwu.js";import"./OrientationBanner-CCfEbiwH.js";import"./index-CpmJTZ4x.js";import"./index-d3rqgMCN.js";import"./iframe-ClNwV9PY.js";import"./spreadSx-CwcO6WA9.js";import"./react-Bg_7O6IH.js";import"./FullWidthAlert-DnoeA5M1.js";import"./Alert-BzUj_4eQ.js";import"./createTheme-DvxOXisY.js";import"./DefaultPropsProvider-DbzGYC6R.js";import"./useSlot-B3TfMazm.js";import"./useForkRef-D3CdTM63.js";import"./createSimplePaletteValueFilter-BGU1NRjf.js";import"./createSvgIcon-877S8SfZ.js";import"./Close-DCJBwk8x.js";import"./IconButton-Cyq5--N7.js";import"./useTimeout-Ba8UwYs3.js";import"./ButtonBase-DY__CRx9.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BIWxjXOd.js";import"./Stack-D_7wB_A8.js";import"./extendSxProp-FnuzVdsZ.js";import"./getThemeProps-CIY2LghJ.js";import"./useTheme-CIBZr94v.js";import"./Box-DpHzd5pI.js";import"./AlertTitle-C9nDlQ1G.js";import"./Typography-CCVx77H_.js";import"./index-g0GcxGYP.js";import"./useTheme-qO_LFzDa.js";import"./ClickAwayListener-DuB1ADIA.js";import"./getReactElementRef-CEbG-EIy.js";import"./index-BhU5E2yG.js";import"./index--vTnsLgE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DIVOJwgj.js";import"./Tooltip-CPb4seuM.js";import"./index-SecRffPd.js";import"./useControlled-LqlwTi-d.js";import"./Popper-RXngH7Nw.js";import"./Button-CrXDoJqf.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-DYyOnCTL.js";import"./QueryClientProvider-BFF2BFJZ.js";import"./Link-DEQR3Bj0.js";import"./Collapse-IVJU_aLj.js";import"./_baseUniq-DbqMLa1W.js";import"./_Uint8Array-1H9Im2BA.js";import"./isArray-yr-f1zea.js";import"./_getTag-CJ6sfUGW.js";import"./isEqual-BafHoWgl.js";import"./merge-DGYilYtD.js";import"./_initCloneObject-DxuZsF47.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D4LvABf9.js";import"./inputBaseClasses-CUQGo_ih.js";import"./calculateFriendlyFileSize-BwWE2ebF.js";import"./CheckCircleTwoTone-CHuMDpy1.js";import"./InfoTwoTone-BINpw3Ae.js";import"./useMutation-DZbu7UUC.js";import"./dayjs.min-DjKPkMPs.js";import"./chunk-AYJ5UCUI-2UEh2evp.js";import"./cloneDeep-C2sTo4gJ.js";import"./Skeleton-D1wacr3-.js";import"./SkeletonButton-D2IHMibg.js";import"./SkeletonInlineBlock-B11ddKWv.js";import"./SkeletonTable-DZt1isCd.js";import"./times-uhXOCnO2.js";import"./toInteger-D9Fg3WJG.js";import"./isSymbol-n1cEv3Ae.js";import"./SkeletonParagraph-BSF6tPot.js";import"./uniqueId-1L9sLKnz.js";import"./toString-CpgPQIWO.js";import"./CSSTransition-CymebWUW.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-LuthSnzs.js";import"./Avatar-DZIkciw_.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
