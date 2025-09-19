import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-oY78ic_Y.js";import{d as s}from"./ToastMessage-CPFydrZ9.js";import{R as n,a as t}from"./RequirementItem-Dqyx6OT8.js";import{P as O}from"./Paper-BoW1ah1V.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DCByO87-.js";import"./SynapseConstants-BMAUm8Mh.js";import"./OrientationBanner-BXT5kcDN.js";import"./index-DkgkjynE.js";import"./index-BGpI4ylO.js";import"./iframe-Ddr3cYxD.js";import"./spreadSx-CwcO6WA9.js";import"./react-CSPHiA2s.js";import"./FullWidthAlert-C6vfUEXZ.js";import"./Alert-B_HF-aRK.js";import"./createTheme-Cfmpslfc.js";import"./DefaultPropsProvider-CpQclCMM.js";import"./useSlot-BI50lNKR.js";import"./useForkRef-CNgEgA6-.js";import"./createSimplePaletteValueFilter-DCuN9org.js";import"./createSvgIcon-CPrM-54a.js";import"./Close-Bn8t9Ia6.js";import"./IconButton-B3zUX2nV.js";import"./useTimeout-BI73T8Sr.js";import"./ButtonBase-DZmSN1ru.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BaHbzjEU.js";import"./Stack-Jwztnp5F.js";import"./extendSxProp-DNeen8Fm.js";import"./getThemeProps-NK2C-o0r.js";import"./useTheme-CAQCYY1k.js";import"./Box-BWGLMhAv.js";import"./AlertTitle-6WsPcZ1k.js";import"./Typography-Ce-gAV9s.js";import"./index-DmZzpHOF.js";import"./useTheme-yHTffsOD.js";import"./ClickAwayListener-BZC0T7Te.js";import"./getReactElementRef-BlXlUd-1.js";import"./index-DjO-WukJ.js";import"./index-DItYd_fI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Bla6bBez.js";import"./Tooltip-D91tp4r9.js";import"./index-NoWNPlPw.js";import"./useControlled-BwO0sUuT.js";import"./Popper-BUj90CCi.js";import"./Button-BLxSkXO5.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-4Ouewk96.js";import"./QueryClientProvider-BqXXMi1s.js";import"./Link-DROnStHn.js";import"./Collapse-DZEzd_3A.js";import"./_baseUniq-_37OgCWp.js";import"./_Uint8Array-Dr6FQkiD.js";import"./isArray-BX1r13Kz.js";import"./_getTag-D_zj2wG3.js";import"./isEqual-DC322x5j.js";import"./merge-BqF55WgL.js";import"./_initCloneObject-DOXCAfP2.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2tIRQk5.js";import"./inputBaseClasses-DchpwRjT.js";import"./calculateFriendlyFileSize-xNaGc40C.js";import"./CheckCircleTwoTone-Dx02CEuE.js";import"./InfoTwoTone-D5epEgOk.js";import"./useMutation-ElpfEnJt.js";import"./dayjs.min-CEA64Lyb.js";import"./chunk-AYJ5UCUI-CbtXcOGv.js";import"./cloneDeep-CHRFS3Ni.js";import"./Skeleton-ChdKJR_r.js";import"./SkeletonButton-C7f1_62b.js";import"./SkeletonInlineBlock-B5R4f0KI.js";import"./SkeletonTable-C-BoLTiG.js";import"./times-BhyY-iQT.js";import"./toInteger-DLjPf7IJ.js";import"./isSymbol-NLed_lmQ.js";import"./SkeletonParagraph-CuqH1Dyb.js";import"./uniqueId-BSuG6xRH.js";import"./toString-Qp1mwJWo.js";import"./CSSTransition-CvHaSozO.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-0v2OTycY.js";import"./Avatar-CrcHRoYn.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
