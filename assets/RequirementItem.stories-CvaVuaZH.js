import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BhJbw5i3.js";import{d as s}from"./ToastMessage-D23yYIkZ.js";import{R as n,a as t}from"./RequirementItem-DwxXDBDE.js";import{P as O}from"./Paper-B_nq9U7K.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DdzLlC9U.js";import"./SynapseConstants-DQ1ikS1O.js";import"./OrientationBanner-BN07fH5k.js";import"./index-IZ5_zrdr.js";import"./index-B1uhWlq_.js";import"./iframe-VtWkBZYO.js";import"./spreadSx-CwcO6WA9.js";import"./react-CbQ15yAK.js";import"./FullWidthAlert-5zc-3E-b.js";import"./Alert-BEvdQcEL.js";import"./createTheme-TOjNz6fB.js";import"./DefaultPropsProvider-CBD8PJSe.js";import"./useSlot-DTgu3gQR.js";import"./useForkRef-CTUlL3cJ.js";import"./createSimplePaletteValueFilter-DH3QwEOz.js";import"./createSvgIcon--x6u5jRF.js";import"./Close-QsKxVASE.js";import"./IconButton-iBwdBh2s.js";import"./useTimeout-Cq7I2zGO.js";import"./ButtonBase-DiuPscxo.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-J852iPP_.js";import"./Stack-RIyXZZPo.js";import"./useThemeProps-Bltw_p2W.js";import"./getThemeProps-Doj4gqGt.js";import"./useTheme-DBSqUBnf.js";import"./extendSxProp-CX7cLBRq.js";import"./Box-BOKOlDky.js";import"./AlertTitle-Bm305o05.js";import"./Typography-DG3oGzan.js";import"./index-CAtNbYm6.js";import"./useTheme-CC-fCbti.js";import"./ClickAwayListener-DQtezAF7.js";import"./getReactElementRef-BqKh0nRS.js";import"./index-CGCoPhrt.js";import"./index-BJGbXTcu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-fV3jiCXF.js";import"./Tooltip-Dd4SE6TD.js";import"./index-DW0mVMzq.js";import"./useControlled-Nrfb0-dw.js";import"./Popper-D_KZqDAp.js";import"./Button-br2rykF0.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BIw3Jdz_.js";import"./QueryClientProvider-BVns6KNT.js";import"./Link-CDPFvNbB.js";import"./Collapse-Dvs5y-JN.js";import"./_baseUniq-G4kodMhE.js";import"./_Uint8Array-Bbw8m_zR.js";import"./isArray-z0RNZAmn.js";import"./_getTag-zEg92QQd.js";import"./isEqual-Dx5MNSQ5.js";import"./noop-DX6rZLP_.js";import"./merge-DsuvQUlG.js";import"./_initCloneObject-DgFdk6lj.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5eJ5m-a.js";import"./inputBaseClasses-CgsGgCf9.js";import"./calculateFriendlyFileSize-Dnl93bHk.js";import"./CheckCircleTwoTone-Y1ulybgg.js";import"./InfoTwoTone-D9uaXFDU.js";import"./useMutation-BXPzwztc.js";import"./dayjs.min-BZOatc1q.js";import"./chunk-AYJ5UCUI-CPmmeiVV.js";import"./cloneDeep-DaBFDYMX.js";import"./Skeleton-CMYh7EwU.js";import"./SkeletonButton-DyITtScr.js";import"./SkeletonInlineBlock-S9rMohad.js";import"./SkeletonTable-CTnvpoLb.js";import"./times-C5x8yjU-.js";import"./toInteger-5aALg26Z.js";import"./isSymbol-C6Ds9g64.js";import"./SkeletonParagraph-COR9_K_1.js";import"./uniqueId-TLikt6xJ.js";import"./toString-jrftSDAf.js";import"./CSSTransition-D-I5_8bk.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CqbiK5KN.js";import"./Avatar-RbAwpmGa.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
