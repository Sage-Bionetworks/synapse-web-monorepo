import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-ChPYGp60.js";import{d as s}from"./ToastMessage-Btbkzo98.js";import{R as n,a as t}from"./RequirementItem-BHEUCSxO.js";import{P as O}from"./Paper-BQ-oZy9Y.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DKVd1YTG.js";import"./SynapseConstants-B4Tpha3X.js";import"./OrientationBanner-D1Gj-0BO.js";import"./index-BTulVV7N.js";import"./index-BXzTDALf.js";import"./iframe-DqtMJ7kH.js";import"./spreadSx-CwcO6WA9.js";import"./react-CkRYgY7R.js";import"./FullWidthAlert-BvHis07F.js";import"./Alert-D5JDd2WV.js";import"./createTheme-Cm05LnB0.js";import"./DefaultPropsProvider-CQjsmjzx.js";import"./useSlot-D-kym-2K.js";import"./useForkRef-DxVghhL0.js";import"./createSimplePaletteValueFilter-VPPSjR6x.js";import"./createSvgIcon--QUYyvLe.js";import"./Close-CovftTFs.js";import"./IconButton-CSrxkIE2.js";import"./useTimeout-CAjSMdh0.js";import"./ButtonBase-C2aQNHr6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DF4qmzkO.js";import"./Stack-DpwU85K6.js";import"./extendSxProp-NTFwLVkN.js";import"./getThemeProps-Cdnw0_MW.js";import"./useTheme-Bw_VFAy_.js";import"./Box-Bc5MnF01.js";import"./AlertTitle-CZt34-cU.js";import"./Typography-ButTJgkW.js";import"./index-C6TBygr3.js";import"./useTheme-BEoXmG8b.js";import"./ClickAwayListener-TNChXEbJ.js";import"./getReactElementRef-12JOJnF4.js";import"./index-Bd4oQ-C2.js";import"./index-DseqZZS0.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DDeYcOcx.js";import"./Tooltip-D_YYABAH.js";import"./index-CNgLHgad.js";import"./useControlled-BVj0-e3Z.js";import"./Popper-Bf618VVA.js";import"./Button-CBJLa-RB.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DwiEHutI.js";import"./QueryClientProvider-Bbxj_eMn.js";import"./Link-BkSZL4Ts.js";import"./Collapse-DY2HFmzv.js";import"./_baseUniq-CPt4iqUN.js";import"./_Uint8Array-JgX0_gnb.js";import"./isArray-CKaypPRM.js";import"./_getTag-BLJc4KEH.js";import"./isEqual-Cl6IiOwx.js";import"./merge-CKRs6iQK.js";import"./_initCloneObject-CkmVyS0A.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D5e0KJGg.js";import"./inputBaseClasses-CUwZQaMG.js";import"./calculateFriendlyFileSize-CGKyyDbL.js";import"./CheckCircleTwoTone-BN5GUe2y.js";import"./InfoTwoTone-DpSCXbve.js";import"./useMutation-DxqLSNHg.js";import"./dayjs.min-Bbcgpwmw.js";import"./chunk-AYJ5UCUI-B53NyrOq.js";import"./cloneDeep-0sjnJFIY.js";import"./Skeleton-CejZ9epo.js";import"./SkeletonButton-BLtFad3n.js";import"./SkeletonInlineBlock-BZRMi8hL.js";import"./SkeletonTable-StKjsVhq.js";import"./times-CQ4zNNYh.js";import"./toInteger-BoZRhtQm.js";import"./isSymbol-CvPO_vNK.js";import"./SkeletonParagraph-miKbxvBv.js";import"./uniqueId-CYWfzcM9.js";import"./toString-Df1NouPK.js";import"./CSSTransition-DPTeRqdK.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Yz07Eev8.js";import"./Avatar-BkdF07U3.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
