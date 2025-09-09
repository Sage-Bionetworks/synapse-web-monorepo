import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-D_88BVAZ.js";import{d as s}from"./ToastMessage-BDZhjgCf.js";import{R as n,a as t}from"./RequirementItem-DoStWmhX.js";import{P as O}from"./Paper-BaJDg2gE.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-CDtyypvQ.js";import"./SynapseConstants-BoNlleXj.js";import"./OrientationBanner-DU08nB5M.js";import"./index-COgomViE.js";import"./index-4rQWsg7w.js";import"./iframe-CcbFInBH.js";import"./spreadSx-CwcO6WA9.js";import"./react-DB3GvYML.js";import"./FullWidthAlert-Dg71CEZ0.js";import"./Alert-C2I_KYn3.js";import"./createTheme-Bm_LWWer.js";import"./DefaultPropsProvider-Cc0Pr5n3.js";import"./useSlot-DbLKugs_.js";import"./useForkRef-BwCYdf5Y.js";import"./createSimplePaletteValueFilter-DE9cDTR6.js";import"./createSvgIcon-CvtTfXSY.js";import"./Close-jijW1zMn.js";import"./IconButton-DOeY9i8P.js";import"./useTimeout-B7hTnc20.js";import"./ButtonBase-CL-S2AlO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B_bRZkNu.js";import"./Stack-BjTTHAev.js";import"./extendSxProp-D4U4cllC.js";import"./getThemeProps-TCS4Lcys.js";import"./useTheme-BaHpITS4.js";import"./Box-B-z2Wn3T.js";import"./AlertTitle-C-_dyzvL.js";import"./Typography-zf9xiWio.js";import"./index-DL_3F7fc.js";import"./useTheme-BKqn0RbP.js";import"./ClickAwayListener-BCkMOy2i.js";import"./getReactElementRef-BaFO5tC3.js";import"./index-BMgcitHH.js";import"./index-CzdvnrNd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CdIC-B9C.js";import"./Tooltip-BTFCh_bD.js";import"./index-Bg_aIjO4.js";import"./useControlled-DYO_k7w0.js";import"./Popper-DG6dlf9c.js";import"./Button-BjQB2kT9.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-CAFEVghr.js";import"./QueryClientProvider-_RY6Yhiq.js";import"./Link-_nO4g-sD.js";import"./Collapse-C3OMEBr4.js";import"./_baseUniq-DWURcJHe.js";import"./_Uint8Array-B7K-43nq.js";import"./isArray-DdpjBUqz.js";import"./_getTag-DT_WTpYG.js";import"./isEqual-C_Nd6Dpx.js";import"./merge-DGQo8ukK.js";import"./_initCloneObject-CtYURX9T.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-I9obbtrd.js";import"./inputBaseClasses-ezG5ieVl.js";import"./calculateFriendlyFileSize-DsSMX6PZ.js";import"./CheckCircleTwoTone-CylHzlFL.js";import"./InfoTwoTone-DJFi4_MF.js";import"./useMutation-BbF47SYJ.js";import"./dayjs.min-DO5OZYrH.js";import"./chunk-AYJ5UCUI-CqqfLa0q.js";import"./cloneDeep-C8akjPpC.js";import"./Skeleton-DZpetao_.js";import"./SkeletonButton-Do0tQB-Q.js";import"./SkeletonInlineBlock-BFP0WUgc.js";import"./SkeletonTable-Cxx_e7B6.js";import"./times-DIDGctuV.js";import"./toInteger-Z2v_-jGf.js";import"./isSymbol-CpZhK5YU.js";import"./SkeletonParagraph-CDjNfcZT.js";import"./uniqueId-Ckzj7-HX.js";import"./toString-D2r9UWye.js";import"./CSSTransition-CwNI4vgg.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-g9hQGJPo.js";import"./Avatar-BeXu5Z8A.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
