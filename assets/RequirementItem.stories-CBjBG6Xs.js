import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUU_PTHo.js";import{M as x}from"./MarkdownSynapse-BNY04ARQ.js";import{d as s}from"./ToastMessage-DNMZhQNJ.js";import{R as n,a as t}from"./RequirementItem-DTn5W4Y5.js";import{P as O}from"./Paper-CFj-iwzR.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-Dl3vPZhE.js";import"./VerificationSubmission-CNoSrCdk.js";import"./useFiles-CiH3RjAX.js";import"./SynapseConstants-Dgm-hl2F.js";import"./OrientationBanner-C5RkxOxO.js";import"./index-CYkyUI0D.js";import"./index-Cwo7W8Q3.js";import"./iframe-BtEoy5Pi.js";import"./spreadSx-CwcO6WA9.js";import"./react-DINmqar4.js";import"./FullWidthAlert-VQ26Wohr.js";import"./Alert-CgZUdEqv.js";import"./createTheme-B3oloupt.js";import"./DefaultPropsProvider-DpCpUutu.js";import"./useSlot-mvKG6Wgh.js";import"./useForkRef-Bpui_Rog.js";import"./createSimplePaletteValueFilter-BdVFfA6R.js";import"./createSvgIcon-rlX8m3bd.js";import"./Close-COYMWJeW.js";import"./IconButton-Dtr_Byk4.js";import"./useTimeout-CubXWxzm.js";import"./ButtonBase-zX45zIy8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DpVN9MSn.js";import"./Stack-DxloL_Pr.js";import"./extendSxProp-CnnbPdZl.js";import"./getThemeProps-Cq16S1xU.js";import"./useTheme-QJ-q2rrh.js";import"./Box-DidoKigV.js";import"./AlertTitle-DUAUDP9r.js";import"./Typography-iLYEzmu9.js";import"./index-BmkogvA6.js";import"./useTheme-BplOPChe.js";import"./ClickAwayListener-KmNvIbDM.js";import"./getReactElementRef-ButuhwgZ.js";import"./index-v-nvGdj1.js";import"./index-BN3chRwR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dl0KNxbG.js";import"./Tooltip-CKZvCezQ.js";import"./index-Bd9SP0or.js";import"./useControlled-z9k1lOAa.js";import"./Popper-DcSxBs27.js";import"./Button-CEhhBQoQ.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-CwQ1lgbR.js";import"./useQuery-BCuPd4te.js";import"./QueryClientProvider-Di2vdjqh.js";import"./Link--7vwFeSR.js";import"./Collapse-Cw63Bxtw.js";import"./_baseUniq-lS6Hau16.js";import"./_Uint8Array-CmcRwmUk.js";import"./isArray-CnKdinKf.js";import"./_getTag-azHmxwvU.js";import"./isEqual-BDen11ft.js";import"./merge-Bz19LOV8.js";import"./_initCloneObject-BMJ-50ps.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-C9sFZx16.js";import"./inputBaseClasses-CQzdIqXJ.js";import"./calculateFriendlyFileSize-CgweHd8h.js";import"./CheckCircleTwoTone-DqiaR3hR.js";import"./InfoTwoTone-sx2IvFci.js";import"./useMutation-7jNvOIUs.js";import"./dayjs.min-C4CfR9Mw.js";import"./chunk-AYJ5UCUI-DAxvSOK2.js";import"./cloneDeep-h4gs_ZpB.js";import"./Skeleton-CCoTHJKu.js";import"./SkeletonButton--Z2pTtcK.js";import"./SkeletonInlineBlock-C2UkkSQu.js";import"./SkeletonTable-Ctka8zso.js";import"./times-BFLagf9l.js";import"./toInteger-D9StSSXw.js";import"./isSymbol-Cg20Bfxn.js";import"./SkeletonParagraph-BY8ebSZu.js";import"./uniqueId-CH_Qqd3p.js";import"./toString-BZ6Q1cUN.js";import"./CSSTransition-DglNXaqL.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-YNJMWzUu.js";import"./Avatar-O7rnjvPx.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
