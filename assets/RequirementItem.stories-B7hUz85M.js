import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse--LedYpEO.js";import{d as s}from"./ToastMessage-CzhAK1C1.js";import{R as n,a as t}from"./RequirementItem-DxOH5FoF.js";import{P as O}from"./Paper-DyztGkog.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-6Eopo0xs.js";import"./SynapseConstants-Bd5uMFWd.js";import"./OrientationBanner-BSDlOhEl.js";import"./index-BgcdhoxH.js";import"./index-Hq9GMvWN.js";import"./iframe-Cz0yRYSQ.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNQEch4T.js";import"./FullWidthAlert-BRRQ8k9I.js";import"./Alert-Q-zP0WQf.js";import"./createTheme-BYmso0tz.js";import"./DefaultPropsProvider-0orHMIEF.js";import"./useSlot-DsnxFfh1.js";import"./useForkRef-Ba32e_nF.js";import"./createSimplePaletteValueFilter-W2Zo5aou.js";import"./createSvgIcon-AN35XKd_.js";import"./Close-DfokZKzC.js";import"./IconButton-DyX-TFkE.js";import"./useTimeout-h73ObAmM.js";import"./ButtonBase-EgupweKT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B04Cl_da.js";import"./Stack-BWD33RJX.js";import"./useThemeProps-xhGgonhN.js";import"./getThemeProps-D-XMYL24.js";import"./useTheme-D3m_In28.js";import"./extendSxProp-CaJIvMa_.js";import"./Box-Coa0Hm63.js";import"./AlertTitle-CAGvnUl-.js";import"./Typography-Bn1QEpSJ.js";import"./index-vkeMoorD.js";import"./useTheme-D93wozFQ.js";import"./ClickAwayListener-Tz4LQtH4.js";import"./getReactElementRef-ZSL1cRU-.js";import"./index-Dz78O9fy.js";import"./index-BsWHRc5B.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Mg9gNMCu.js";import"./Tooltip-PLHpmtuF.js";import"./index-bI8fuLwa.js";import"./useControlled-DjqDKOV6.js";import"./Popper-BdXdlnhi.js";import"./Button-BTB592up.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-C632Gpdg.js";import"./QueryClientProvider-BNaKABDx.js";import"./Link-D4cnvwEL.js";import"./Collapse-C7CbTo5y.js";import"./_baseUniq-y6CeNGmm.js";import"./_Uint8Array-Nn_bOMDG.js";import"./isArray-DqrD0I4d.js";import"./_getTag-CCxMSq7g.js";import"./isEqual-CdAtuOnJ.js";import"./noop-DX6rZLP_.js";import"./merge-Ds3aECQA.js";import"./_initCloneObject-B9n5P3J6.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-Bb6hCor6.js";import"./inputBaseClasses-CYg77Bp9.js";import"./calculateFriendlyFileSize-DAK12mf4.js";import"./CheckCircleTwoTone-Dt6znZiS.js";import"./InfoTwoTone-B7HNLyVQ.js";import"./useMutation-DkUvZSje.js";import"./dayjs.min-BvJHBx7G.js";import"./chunk-AYJ5UCUI-BVFhXq1p.js";import"./cloneDeep-B0KeqOcz.js";import"./Skeleton-Bp3OxjtJ.js";import"./SkeletonButton-C1JSj4Cg.js";import"./SkeletonInlineBlock-DJB2EYD9.js";import"./SkeletonTable-D0VrWirv.js";import"./times-BR3Bm9UJ.js";import"./toInteger-BWDKPG0A.js";import"./isSymbol-6x7f5015.js";import"./SkeletonParagraph-BG0c53x3.js";import"./uniqueId-D_0v6F0y.js";import"./toString-IG9H0QgB.js";import"./CSSTransition-3vKDz5er.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BLA-W1D8.js";import"./Avatar-BAftHFxO.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
