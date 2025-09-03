import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-CDjQiECZ.js";import{d as s}from"./ToastMessage-DVi2Yh4H.js";import{R as n,a as t}from"./RequirementItem-MSFxLtfm.js";import{P as O}from"./Paper-DZgcFg1z.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-BPLHvMvR.js";import"./SynapseConstants-DrCh_kdL.js";import"./OrientationBanner-VKXiGHYb.js";import"./index-B24iHAqT.js";import"./index-CQIGBc1V.js";import"./iframe-Btd2HHqG.js";import"./spreadSx-CwcO6WA9.js";import"./react-DAda01Jv.js";import"./FullWidthAlert-CSg7um0z.js";import"./Alert-CeS2DVz6.js";import"./createTheme-CGDCJSPZ.js";import"./DefaultPropsProvider-DQ6R5GBJ.js";import"./useSlot-CY2J-DXD.js";import"./useForkRef-BomXF6Jf.js";import"./createSimplePaletteValueFilter-B7mx9_xn.js";import"./createSvgIcon-BYl9tErA.js";import"./Close-BG9NJg6x.js";import"./IconButton-a7sHWGoK.js";import"./useTimeout-yWZRAzgc.js";import"./ButtonBase-FedZLqF7.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B6Ebxn-f.js";import"./Stack-CeqpGUjS.js";import"./extendSxProp-4nhTMu5I.js";import"./getThemeProps-DElxbgAZ.js";import"./useTheme-BOBbHa5R.js";import"./Box-DTwKNAeW.js";import"./AlertTitle-oYeDsIVg.js";import"./Typography-mrNgtu5t.js";import"./index-DVUrkwNx.js";import"./useTheme-CqlqvvjI.js";import"./ClickAwayListener-WijnqYS9.js";import"./getReactElementRef-HUgpiq-4.js";import"./index-C7YFv4kW.js";import"./index-BmyLYUcK.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Co_9QBfH.js";import"./Tooltip-KM72jp_q.js";import"./index-CMbZ97T8.js";import"./useControlled-D1bjab3Z.js";import"./Popper-CWkQLibq.js";import"./Button-D3b_nwUa.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-D2poep1E.js";import"./QueryClientProvider-Du5Ep3LS.js";import"./Link-BMgGJGqF.js";import"./Collapse-DJ86565F.js";import"./_baseUniq-BE_JtR4S.js";import"./_Uint8Array-O6GMs0Ty.js";import"./isArray-Ct2qTZu_.js";import"./_getTag-Cj0yh0pL.js";import"./isEqual-ukfK57kz.js";import"./merge-Cw-pBLvU.js";import"./_initCloneObject-peehwC1z.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-URV8wb9u.js";import"./inputBaseClasses-Ds1n6_Ea.js";import"./calculateFriendlyFileSize-GNYX37MO.js";import"./CheckCircleTwoTone-8PYVvi3U.js";import"./InfoTwoTone-DEVw7o0q.js";import"./useMutation-C50fm1Gv.js";import"./dayjs.min-B6eIZka3.js";import"./chunk-AYJ5UCUI-DaetwfwG.js";import"./cloneDeep-BnzNgpeO.js";import"./Skeleton-BWhj9oCM.js";import"./SkeletonButton-5Lw36nOc.js";import"./SkeletonInlineBlock-BFocS3ON.js";import"./SkeletonTable-BNYNpBTm.js";import"./times-OzaH5tX7.js";import"./toInteger--8B6ELtu.js";import"./isSymbol-BM5bkjt7.js";import"./SkeletonParagraph-BZLJLv14.js";import"./uniqueId-DF1FMhX7.js";import"./toString-Dsxfr8mS.js";import"./CSSTransition-BFvoXUBC.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DkXWaG-X.js";import"./Avatar-LUohXAnV.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
