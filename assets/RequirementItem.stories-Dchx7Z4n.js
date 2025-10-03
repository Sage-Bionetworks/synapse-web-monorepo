import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BF7WHtTr.js";import{d as s}from"./ToastMessage-DAq5xRO7.js";import{R as n,a as t}from"./RequirementItem-CNZvEJoB.js";import{P as O}from"./Paper-DqrrvOAH.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-nz_G27ZD.js";import"./SynapseConstants-QIqdlNPs.js";import"./OrientationBanner-CPj0PuP9.js";import"./index-BMYyeuyr.js";import"./index-B3YonXtA.js";import"./iframe-BZuF5Rk5.js";import"./spreadSx-CwcO6WA9.js";import"./react-BuDUhSyG.js";import"./FullWidthAlert-BAt_LGWT.js";import"./Alert-DxUMyYvX.js";import"./createTheme-BJKfy1iC.js";import"./DefaultPropsProvider-DuSIaWNU.js";import"./useSlot-BXLighSu.js";import"./useForkRef-BtqTZArO.js";import"./createSimplePaletteValueFilter-CxzoQfv0.js";import"./createSvgIcon-Bs0uwjDd.js";import"./Close-Cpf8yWN0.js";import"./IconButton-DnWxZwUa.js";import"./useTimeout-N1XqQ7Tv.js";import"./ButtonBase-B7_bMh0J.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce4Ta4eA.js";import"./Stack-Cij852nX.js";import"./useThemeProps-CnowrksF.js";import"./getThemeProps-B0O8BOmA.js";import"./useTheme-BqUAtbKs.js";import"./extendSxProp-D1NEKyNb.js";import"./Box-PoNijjGW.js";import"./AlertTitle-rtt8k-JU.js";import"./Typography-BlpiGXay.js";import"./index-SV-CQluw.js";import"./useTheme-Bb3tF0fY.js";import"./ClickAwayListener-CPlRAx9Y.js";import"./getReactElementRef-uQKecpNl.js";import"./index-B7I8xQtn.js";import"./index-Dmzd7xWV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGI5WGEZ.js";import"./Tooltip-BStWPht6.js";import"./index-BvINnhAG.js";import"./useControlled-C_6BPMUf.js";import"./Popper-BfvQl467.js";import"./Button-Ch1wz1oD.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BsSbosha.js";import"./QueryClientProvider-BRz6sphI.js";import"./Link-Bpl0ygdi.js";import"./Collapse-COA2sox0.js";import"./_baseUniq-BuOmYGlr.js";import"./_Uint8Array-szfHHksL.js";import"./isArray-D7cLY-Ue.js";import"./_getTag-BZgbHbgT.js";import"./isEqual-BQl5jUFq.js";import"./noop-DX6rZLP_.js";import"./merge-BLtkJLx6.js";import"./_initCloneObject-IL6c6Kxn.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-hXWdH60e.js";import"./inputBaseClasses-CTMFoWXf.js";import"./calculateFriendlyFileSize-D7pBFWpU.js";import"./CheckCircleTwoTone-DGwA4b8a.js";import"./InfoTwoTone-LXUWHOi0.js";import"./useMutation-DYD3J3xj.js";import"./dayjs.min-CGFBeRSw.js";import"./chunk-AYJ5UCUI-BiQJU0O1.js";import"./cloneDeep-BGmY4GVF.js";import"./Skeleton-ClHaAhyN.js";import"./SkeletonButton-CMtka5Ag.js";import"./SkeletonInlineBlock-CzXc2U9L.js";import"./SkeletonTable-C68Wlp19.js";import"./times-Bjyl5IyC.js";import"./toInteger-DRY3A2Wi.js";import"./isSymbol-CpU8lUWz.js";import"./SkeletonParagraph-BSkKGl-r.js";import"./uniqueId-DmupjK_F.js";import"./toString-DgG0SSWT.js";import"./CSSTransition-CJceyd-6.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cd10Btcy.js";import"./Avatar-BxkppA5o.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
