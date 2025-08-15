import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-D9ESmNhh.js";import{d as s}from"./ToastMessage-C4W7HKmV.js";import{R as n,a as t}from"./RequirementItem-zI8CA-db.js";import{P as O}from"./Paper-Dy9tjFrv.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DKRZIanE.js";import"./SynapseConstants-BBoZDD4P.js";import"./OrientationBanner-BLAhke4h.js";import"./index-DKL9L_BY.js";import"./index-D4Q3ONxQ.js";import"./iframe-B4ilnuJG.js";import"./spreadSx-CwcO6WA9.js";import"./react-CAq8nAJq.js";import"./FullWidthAlert-DuP5wrYb.js";import"./Alert-C67NzIWU.js";import"./createTheme-eQRLfG40.js";import"./DefaultPropsProvider-Dhj4bf-l.js";import"./useSlot-CBd769ny.js";import"./useForkRef-CpvpfvrQ.js";import"./createSimplePaletteValueFilter-DtspGyG6.js";import"./createSvgIcon-Br-hcPq3.js";import"./Close-G4NEwhux.js";import"./IconButton-C6noyifK.js";import"./useTimeout-B1_K0-pY.js";import"./ButtonBase-Bv_bFBFO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B74R9xnJ.js";import"./Stack-DM2PFLKL.js";import"./extendSxProp-Duqnu7M_.js";import"./getThemeProps-DZf8MFcp.js";import"./useTheme-C37fkXB4.js";import"./Box--ACRCC9D.js";import"./AlertTitle-CMR2Kvl3.js";import"./Typography-DwouxU_H.js";import"./index-ByZNrIFb.js";import"./useTheme-CHGhrpTH.js";import"./ClickAwayListener-CFxDF2kG.js";import"./getReactElementRef-BmnoCqlY.js";import"./index-CLiK0qGk.js";import"./index-BNFLIj9_.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-NTzniY5l.js";import"./Tooltip-Vck-mLGE.js";import"./index-Beg8-miO.js";import"./useControlled-Ba29HQQf.js";import"./Popper-Bk_Ars4X.js";import"./Button-Bj_IwDEU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BFuwe7cX.js";import"./QueryClientProvider-DaEi_Twt.js";import"./Link-Dz2MRzFS.js";import"./Collapse-shGKBp_d.js";import"./_baseUniq-Dkz_1hma.js";import"./_Uint8Array-B2nHI9Ad.js";import"./isArray-CFVxwRPF.js";import"./_getTag-Cc9LAsVk.js";import"./isEqual-ZcdUzgZT.js";import"./merge-Bv9XZfxW.js";import"./_initCloneObject-CVyr40Wx.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DnAikE-j.js";import"./inputBaseClasses-BMZfyCm0.js";import"./calculateFriendlyFileSize-BgbVnmAq.js";import"./CheckCircleTwoTone-Bv4El-EC.js";import"./InfoTwoTone-B4GN6vaz.js";import"./useMutation-DWajAj7L.js";import"./dayjs.min-DuethHKS.js";import"./chunk-AYJ5UCUI-CD69_1OJ.js";import"./cloneDeep-DhOLnah7.js";import"./Skeleton-CgzjTWeY.js";import"./SkeletonButton-0nrIs_gp.js";import"./SkeletonInlineBlock-QpXIOHep.js";import"./SkeletonTable-CGpvbaf1.js";import"./times-CjwSKY4o.js";import"./toInteger-C2kWQAhd.js";import"./isSymbol-DSOVhZIk.js";import"./SkeletonParagraph-BfOxgfHz.js";import"./uniqueId-BCsJj1pw.js";import"./toString-o4SXh25s.js";import"./CSSTransition-ER_7squs.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-KeJmROTu.js";import"./Avatar-B420EHKF.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
