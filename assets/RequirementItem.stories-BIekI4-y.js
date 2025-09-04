import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-ZIjo91pc.js";import{M as x}from"./MarkdownSynapse-CbGJu2ky.js";import{d as s}from"./ToastMessage-DQXl1f2F.js";import{R as n,a as t}from"./RequirementItem-a90QVVnI.js";import{P as O}from"./Paper-DuTz12zY.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-7frMWCuU.js";import"./VerificationSubmission-CDh9xETu.js";import"./useFiles-DMCaKYx_.js";import"./SynapseConstants-Bwr8pSXM.js";import"./OrientationBanner-Du-Bw8Mf.js";import"./index-Ctrt0GTW.js";import"./index-dRMNsM6r.js";import"./iframe-C1GxMnSF.js";import"./spreadSx-CwcO6WA9.js";import"./react-BVjGH0qj.js";import"./FullWidthAlert-D44pg8w2.js";import"./Alert-COQ3nnEa.js";import"./createTheme-II-gce0K.js";import"./DefaultPropsProvider-DpDTlY9g.js";import"./useSlot-DNSvN4UU.js";import"./useForkRef-A6I0jKwp.js";import"./createSimplePaletteValueFilter-D_QP2TIw.js";import"./createSvgIcon-CYX0Tew8.js";import"./Close-DWgxR1B3.js";import"./IconButton-DIOOSn47.js";import"./useTimeout-vUNmq_Ja.js";import"./ButtonBase-4leAHaA8.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ch5OpiUe.js";import"./Stack-C8Za8DAU.js";import"./extendSxProp-Djd_jGwW.js";import"./getThemeProps-BPzt8l9W.js";import"./useTheme-r15zWzow.js";import"./Box-D5Fxj2nM.js";import"./AlertTitle-DvEksnrC.js";import"./Typography-CqEvxqsG.js";import"./index-DcmlVU4e.js";import"./useTheme-CvXzZeki.js";import"./ClickAwayListener-BDjF2LUg.js";import"./getReactElementRef-DKRUGJMP.js";import"./index-BhOHl5zu.js";import"./index-D1wMG73m.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DbqcAO5i.js";import"./Tooltip-BjtJtB3s.js";import"./index-CecS_nQt.js";import"./useControlled-DAPaJ43j.js";import"./Popper-CiMmGBvk.js";import"./Button-Cfsde_36.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-_BY2npJD.js";import"./useQuery-BEloXky3.js";import"./QueryClientProvider-Ze6iADVs.js";import"./Link-D_PCEKs0.js";import"./Collapse-DgpS2Hov.js";import"./_baseUniq-D2tVVG5U.js";import"./_Uint8Array-CwKcyaa6.js";import"./isArray-Ba9Vt-uY.js";import"./_getTag-1Ee3ZuLF.js";import"./isEqual-DffE9IoK.js";import"./merge-CVA6Ete2.js";import"./_initCloneObject-B5PifE7N.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BI1VlvIU.js";import"./inputBaseClasses-332p_dKL.js";import"./calculateFriendlyFileSize-COMcZm57.js";import"./CheckCircleTwoTone-B-hwok2b.js";import"./InfoTwoTone-CKY1kk3g.js";import"./useMutation-DxXMTOE2.js";import"./dayjs.min-B7hk726v.js";import"./chunk-AYJ5UCUI-D2JU_FS7.js";import"./cloneDeep-Dkw8GaT_.js";import"./Skeleton-CwMQHgSR.js";import"./SkeletonButton-CSisM0XE.js";import"./SkeletonInlineBlock-BQGAjQNt.js";import"./SkeletonTable-DItx5p4Q.js";import"./times-IbYjmemR.js";import"./toInteger-BuOiAxM7.js";import"./isSymbol-CP8YDRGU.js";import"./SkeletonParagraph-Cm_iuFcp.js";import"./uniqueId-AcO0xpCS.js";import"./toString-CkrrfWKO.js";import"./CSSTransition-CK9Tdev9.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-FU_XTqxV.js";import"./Avatar-BOU7GXrh.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
