import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-CdllPIWZ.js";import{d as s}from"./ToastMessage-CdZ8srCn.js";import{R as n,a as t}from"./RequirementItem-qawgL5jU.js";import{P as O}from"./Paper-rZJCvNdw.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DBJXDwof.js";import"./SynapseConstants-Bbk9d4oX.js";import"./OrientationBanner-Dz6hdISR.js";import"./index-BSmYBrAM.js";import"./index-CHRY80Wk.js";import"./iframe-CROfmG2r.js";import"./spreadSx-CwcO6WA9.js";import"./react-BSMTXBLF.js";import"./FullWidthAlert-C4LbhNS1.js";import"./Alert-D195tW_E.js";import"./createTheme-f-wPrVvU.js";import"./DefaultPropsProvider-BZ593aJ2.js";import"./useSlot-D9mysiKz.js";import"./useForkRef-D5oOxVAR.js";import"./createSimplePaletteValueFilter-CJWgStPp.js";import"./createSvgIcon-BzDBPHl6.js";import"./Close-BcZzt1yo.js";import"./IconButton-CRPhTWfq.js";import"./useTimeout-CjdkA4mY.js";import"./ButtonBase-CtR-QrJJ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CSlw_2l-.js";import"./Stack-Dz6FNCh8.js";import"./extendSxProp-BQG31UNs.js";import"./getThemeProps-BP49VJRc.js";import"./useTheme-BhtrbXDK.js";import"./Box-Cnq3UVt_.js";import"./AlertTitle-CPkoSTIL.js";import"./Typography-BLqAVBqX.js";import"./index-Djpketd-.js";import"./useTheme-CO6sJo1b.js";import"./ClickAwayListener-euUktDpk.js";import"./getReactElementRef-DYMZr397.js";import"./index-B2W7djG6.js";import"./index-DAn3TN-s.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-PfMUypAK.js";import"./Tooltip-B_sSJT2h.js";import"./index-LOyePG7w.js";import"./useControlled-CLCsFO06.js";import"./Popper-DE2guRwR.js";import"./Button-bfdx_ZwC.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-C_3ZuEwo.js";import"./QueryClientProvider-BCjXIc_t.js";import"./Link-BwEOvYlx.js";import"./Collapse-CHkYBJLt.js";import"./_baseUniq-DuUElwjR.js";import"./_Uint8Array-BxwMKCNr.js";import"./isArray-CPhGnzFe.js";import"./_getTag-CGgG71W-.js";import"./isEqual-BoYtKexc.js";import"./merge-f7jIc8iq.js";import"./_initCloneObject-DRjI7vWd.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B5UxiS9r.js";import"./inputBaseClasses-DXOcE_b_.js";import"./calculateFriendlyFileSize-Ccl7c3cP.js";import"./CheckCircleTwoTone-BF_yKUh0.js";import"./InfoTwoTone-BCoc74i4.js";import"./useMutation-DpBMagcy.js";import"./dayjs.min-Ddj_UNiI.js";import"./chunk-AYJ5UCUI-B-J7afgE.js";import"./cloneDeep-CVhe5dWx.js";import"./Skeleton-CAGLPHTV.js";import"./SkeletonButton-H2dA0rhf.js";import"./SkeletonInlineBlock-CRcfTde3.js";import"./SkeletonTable-Bk2U48MB.js";import"./times-HlGb0wRd.js";import"./toInteger-CPZZBz62.js";import"./toNumber-UuNLkLf_.js";import"./isSymbol-BTqngm13.js";import"./SkeletonParagraph-SrRmS-lY.js";import"./uniqueId-s6VeJ1rr.js";import"./toString-CqMWArNE.js";import"./CSSTransition-BcJbLgl1.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CRF2V7xp.js";import"./Avatar-BidMgPqr.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const dr=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,dr as __namedExportsOrder,cr as default};
