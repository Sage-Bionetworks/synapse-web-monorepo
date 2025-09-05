import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-BL6Ta7Bh.js";import{d as s}from"./ToastMessage-BvZFjGzu.js";import{R as n,a as t}from"./RequirementItem-DEODY_ck.js";import{P as O}from"./Paper-DP7YNfiE.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-BaHBnPCT.js";import"./SynapseConstants-BqMZZ0Uj.js";import"./OrientationBanner-D3mCNTls.js";import"./index-D9zPyMPU.js";import"./index-DG5WaW8A.js";import"./iframe-DnJ5JHSL.js";import"./spreadSx-CwcO6WA9.js";import"./react-DpPAoAus.js";import"./FullWidthAlert-C15S_5lN.js";import"./Alert-CqLArlEA.js";import"./createTheme-B8qtGaPA.js";import"./DefaultPropsProvider-WJKOyJT-.js";import"./useSlot-JvNPDeI7.js";import"./useForkRef-CW6ZjnOu.js";import"./createSimplePaletteValueFilter-DKnUICEw.js";import"./createSvgIcon-COjOD54i.js";import"./Close-COST_jYw.js";import"./IconButton-D4tlpKJ0.js";import"./useTimeout-C2yROX5q.js";import"./ButtonBase-HT1BmJkV.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-szAnAP88.js";import"./Stack-mJ9nGhMq.js";import"./extendSxProp-C3WEdxaP.js";import"./getThemeProps-nH5b3nzk.js";import"./useTheme-DoRa5GNx.js";import"./Box-Dwzdnkyq.js";import"./AlertTitle-D_6eYjWf.js";import"./Typography-DJYJum-Z.js";import"./index-C0MKoZk1.js";import"./useTheme-a817PGTf.js";import"./ClickAwayListener-BuTrm4_l.js";import"./getReactElementRef-Cn7e0r_1.js";import"./index-De9PzaEN.js";import"./index-BsQ9BBfm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DIlAcZ3T.js";import"./Tooltip-D9bXZBwE.js";import"./index-DepU4Aic.js";import"./useControlled-CEU-8lDi.js";import"./Popper-CRSbOcEy.js";import"./Button-DfdvB59M.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-Ba3IRlbK.js";import"./QueryClientProvider-CRM5FpDi.js";import"./Link-Don1gO5O.js";import"./Collapse-BifcPkpD.js";import"./_baseUniq-B4bOwasf.js";import"./_Uint8Array-93iIsemI.js";import"./isArray-BNx9SFw4.js";import"./_getTag-CC1IQGmn.js";import"./isEqual-DhexJtMb.js";import"./merge-COeUm6ZQ.js";import"./_initCloneObject-U8B2jDKi.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CvRe1w3X.js";import"./inputBaseClasses-Bj2LEIDd.js";import"./calculateFriendlyFileSize-Ddu106po.js";import"./CheckCircleTwoTone-C1fKEsD6.js";import"./InfoTwoTone-Cz9XMzuy.js";import"./useMutation-nRNz6yUF.js";import"./dayjs.min-DpTEiHjS.js";import"./chunk-AYJ5UCUI-DUTlC2ep.js";import"./cloneDeep-Bl5O9E0A.js";import"./Skeleton-Z_xAmh5P.js";import"./SkeletonButton-Dm6ZtGA6.js";import"./SkeletonInlineBlock-Ca8dv9Uu.js";import"./SkeletonTable-C3EaZc_V.js";import"./times-Biwrgnwl.js";import"./toInteger-C4MvgP0M.js";import"./isSymbol-hYURkEXL.js";import"./SkeletonParagraph-CODGbLfY.js";import"./uniqueId-Zmb2_QCn.js";import"./toString-CZBLh3Dy.js";import"./CSSTransition-CQEpyrS-.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-W0ehdhlf.js";import"./Avatar-CPzcJ5Qb.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
