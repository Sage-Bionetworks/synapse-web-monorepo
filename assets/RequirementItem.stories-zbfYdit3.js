import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CFfD1pQ6.js";import{d as s}from"./ToastMessage-D-9VPJYU.js";import{R as n,a as t}from"./RequirementItem-CwtAkcmj.js";import{P as O}from"./Paper-DjjbmjWh.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DFd5b1XQ.js";import"./SynapseConstants-DnnDD9S4.js";import"./OrientationBanner-BKD3mXs2.js";import"./index-Bukyj4O5.js";import"./index-BETkQVTs.js";import"./iframe-DR00MtQa.js";import"./spreadSx-CwcO6WA9.js";import"./react-COIuWRyg.js";import"./FullWidthAlert-lZwpVcfv.js";import"./Alert-PoDNxqsT.js";import"./createTheme-BH_THfxa.js";import"./DefaultPropsProvider-DGSUwyrZ.js";import"./useSlot-DO3YmjNd.js";import"./useForkRef-C4r6o0mS.js";import"./createSimplePaletteValueFilter-BKXYzHpo.js";import"./createSvgIcon-Uprnm4UY.js";import"./Close-BN20Ndtb.js";import"./IconButton-BMqupDK0.js";import"./useTimeout-C_0QQQPC.js";import"./ButtonBase-C8k3v_8l.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C6LFjy3p.js";import"./Stack-B_EGg9Xt.js";import"./useThemeProps-O0oaPQsO.js";import"./getThemeProps-4QQKnSwF.js";import"./useTheme-m71gqaUa.js";import"./extendSxProp-CpK08kBd.js";import"./Box-B9ThoOBq.js";import"./AlertTitle-CI7HLN44.js";import"./Typography-COE6duH8.js";import"./index-DBYQapkN.js";import"./useTheme-DFG--JId.js";import"./ClickAwayListener-ImhnVk8c.js";import"./getReactElementRef-Bz4vM71q.js";import"./index-CmnwMZoC.js";import"./index-Cxyl9LGV.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DXq3JD5F.js";import"./Tooltip-Cy35VhK6.js";import"./index-DJuPeuUq.js";import"./useControlled-CHLGFfK2.js";import"./Popper-MqYOJopP.js";import"./Button-CpvAnFlJ.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DS0RhEjV.js";import"./QueryClientProvider-CsYE3JnP.js";import"./Link-BvOhnWpV.js";import"./Collapse-jSswtkK8.js";import"./_baseUniq-DV1niuS7.js";import"./_Uint8Array-Bgnh0Mur.js";import"./isArray-D-j8zubJ.js";import"./_getTag-K4XAuv8J.js";import"./isEqual-D2N_ZygK.js";import"./noop-DX6rZLP_.js";import"./merge-CdXNYD4z.js";import"./_initCloneObject-CiGbOdta.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CWljGQaI.js";import"./inputBaseClasses-7vLKzToA.js";import"./calculateFriendlyFileSize-BzDK5ry9.js";import"./CheckCircleTwoTone-DceYN4QX.js";import"./InfoTwoTone-DZlBy9ZW.js";import"./useMutation-B0TMRoqc.js";import"./dayjs.min-BoIqCcg2.js";import"./chunk-AYJ5UCUI-iVW4Bb0p.js";import"./cloneDeep-DyZAojRt.js";import"./Skeleton-BvWNufUl.js";import"./SkeletonButton-CUKSVA28.js";import"./SkeletonInlineBlock-D3NjzP2j.js";import"./SkeletonTable-4uOPdQdI.js";import"./times-C1ULb67C.js";import"./toInteger-Bz4QGsEW.js";import"./isSymbol-BCpXns4G.js";import"./SkeletonParagraph-DxxDU0Vv.js";import"./uniqueId-BEq31VMM.js";import"./toString-C5fj-T_0.js";import"./CSSTransition-CSmNoywF.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DcelrK0M.js";import"./Avatar-DnMCheM_.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
