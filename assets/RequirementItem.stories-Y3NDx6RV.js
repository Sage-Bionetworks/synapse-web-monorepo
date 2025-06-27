import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-CX9WlD73.js";import{d as s}from"./ToastMessage-Bpkh2Fu1.js";import{R as n,a as t}from"./RequirementItem-DvQi-uOr.js";import{P as O}from"./Paper-Bj08f0KH.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-8wN_2rUp.js";import"./SynapseConstants-BcZxOIBV.js";import"./OrientationBanner-Dc2tHOjk.js";import"./index-yH09oplz.js";import"./index-ByQ0enQ_.js";import"./iframe-qffJBPgR.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dgj0kz-P.js";import"./FullWidthAlert-D8ffswTQ.js";import"./Alert-Cf9K_aVL.js";import"./createTheme-RhL5bwVE.js";import"./DefaultPropsProvider-64Swdv2T.js";import"./useSlot-DRWAAySF.js";import"./useForkRef-Ckn1HaZS.js";import"./createSimplePaletteValueFilter-D0UDgssp.js";import"./createSvgIcon-CvoIu9Sh.js";import"./Close-BV7syacj.js";import"./IconButton-C4K_i--W.js";import"./useTimeout-Doxj9_dA.js";import"./ButtonBase-o7r7j6z6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C_fK4DGM.js";import"./Stack-4HJz7Trj.js";import"./extendSxProp-STyG-2xm.js";import"./getThemeProps-B2ultWce.js";import"./useTheme-aRp2Pb7j.js";import"./Box-T9uDT5Iy.js";import"./AlertTitle-Bafu7Id7.js";import"./Typography-CN7eQm76.js";import"./index-Dxr02uWA.js";import"./useTheme-YIUbe7eG.js";import"./ClickAwayListener-BLydFwEl.js";import"./getReactElementRef-CYVllaoK.js";import"./index-C1Cv6qSE.js";import"./index-BVRNkw6h.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-B8xivWT7.js";import"./Tooltip-CtnYvlL4.js";import"./index-YPTaOPvf.js";import"./useControlled-DI2UICES.js";import"./Popper-DaOitWJ-.js";import"./Button-De9dJMeU.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DiVXZU56.js";import"./QueryClientProvider-C-tMRmtI.js";import"./Link-Cqdpa6Et.js";import"./Collapse-DStggPpR.js";import"./_baseUniq-DqZluO96.js";import"./_Uint8Array-COloI7fd.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CutocSNB.js";import"./isArray-Dxzbedgu.js";import"./_getTag-C0UugZrc.js";import"./isEqual-idVdvqox.js";import"./merge-Bg8Q1B44.js";import"./_initCloneObject-DABeNlt7.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BKhuncpj.js";import"./inputBaseClasses-XuYOrCAZ.js";import"./calculateFriendlyFileSize-D-mSw0w0.js";import"./CheckCircleTwoTone-qxJWfbf1.js";import"./InfoTwoTone-BylvJCdW.js";import"./useMutation-BVVhdury.js";import"./dayjs.min-BlTyXE8F.js";import"./chunk-AYJ5UCUI-ZZaosZmT.js";import"./cloneDeep-DeelGcqm.js";import"./Skeleton-DRSaVcpI.js";import"./SkeletonButton-C9giX7w2.js";import"./SkeletonInlineBlock-DTU5iOE_.js";import"./SkeletonTable-B_pWQJk1.js";import"./times-BSOk1nBF.js";import"./toInteger-Bc7lpisA.js";import"./isSymbol-BFMke3vt.js";import"./SkeletonParagraph-_HcBdZLf.js";import"./uniqueId-DaviIJHr.js";import"./toString-Be-U0fvI.js";import"./CSSTransition-CJky7QEN.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CwLQj5i8.js";import"./Avatar-CX-x5ldW.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
