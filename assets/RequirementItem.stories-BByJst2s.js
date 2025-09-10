import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-Ma7Oe5XE.js";import{M as x}from"./MarkdownSynapse-8bFlGhaT.js";import{d as s}from"./ToastMessage-ftMHJUrN.js";import{R as n,a as t}from"./RequirementItem-D4Ha10N2.js";import{P as O}from"./Paper-CWKIHkyO.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-t2fDWYxy.js";import"./VerificationSubmission-16RBrwfH.js";import"./useFiles-BClQzPd_.js";import"./SynapseConstants-Crbzn_Ry.js";import"./OrientationBanner-C_2KtTva.js";import"./index-XveTqWY_.js";import"./index-DIPSma-8.js";import"./iframe-pWHG4-V3.js";import"./spreadSx-CwcO6WA9.js";import"./react-CjJLDf9z.js";import"./FullWidthAlert-DvmfQSAA.js";import"./Alert-BfqlhAYB.js";import"./createTheme-BCnyntTH.js";import"./DefaultPropsProvider-DRRP-kkU.js";import"./useSlot-BVhmAZ83.js";import"./useForkRef-Dv2QyeiQ.js";import"./createSimplePaletteValueFilter-CJ76haHv.js";import"./createSvgIcon-K8XbMlBz.js";import"./Close-BYbvh11N.js";import"./IconButton-hjV5rJrJ.js";import"./useTimeout-BUI4x_UF.js";import"./ButtonBase-8tnM0huU.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DV9Z8mDC.js";import"./Stack-Ct5i1zqe.js";import"./extendSxProp-BeCKLOzc.js";import"./getThemeProps-y-ympami.js";import"./useTheme-Ca9VRux3.js";import"./Box-DSQr_iBE.js";import"./AlertTitle-CC_vgB7h.js";import"./Typography-CTgpIH-9.js";import"./index-CYzCfksS.js";import"./useTheme-DowF8vRz.js";import"./ClickAwayListener-Du3jAaWR.js";import"./getReactElementRef-CO4QYdXs.js";import"./index-v_FsnXN-.js";import"./index-BWgRnEhe.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C-KuP9oD.js";import"./Tooltip-Dsds8E7o.js";import"./index-tTnYKPjc.js";import"./useControlled-BgooqvV4.js";import"./Popper-DgwcAogc.js";import"./Button-C6SFKzVC.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-B_EIkN_W.js";import"./useQuery-CUKGBENZ.js";import"./QueryClientProvider-Bbt4pomw.js";import"./Link-Cwbmr7vy.js";import"./Collapse-BsNO_Q98.js";import"./_baseUniq-_xM4gfSS.js";import"./_Uint8Array-Vsu_wDeX.js";import"./isArray-DqpAAoDI.js";import"./_getTag-Cg5v_2BY.js";import"./isEqual-DAP8G2kJ.js";import"./merge-zw24CFQr.js";import"./_initCloneObject-BWhrDYUc.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-zTaIdEKH.js";import"./inputBaseClasses-CrrDRKY9.js";import"./calculateFriendlyFileSize-B9UWs5PM.js";import"./CheckCircleTwoTone-01_4eItM.js";import"./InfoTwoTone-j3edDpIk.js";import"./useMutation-BHgD24e-.js";import"./dayjs.min-BKB3tabp.js";import"./chunk-AYJ5UCUI-CR13MX7l.js";import"./cloneDeep-Edtnkvi7.js";import"./Skeleton-Cl33dgaN.js";import"./SkeletonButton-Tnux8QPX.js";import"./SkeletonInlineBlock-mjGdl3jK.js";import"./SkeletonTable-DOwj5Pmf.js";import"./times-C9TbONpW.js";import"./toInteger-Dl2JES5A.js";import"./isSymbol-D0R0L29N.js";import"./SkeletonParagraph-V3yZ__T0.js";import"./uniqueId-cgH6QQh1.js";import"./toString-GlcMFLOV.js";import"./CSSTransition-BqFf2o-Z.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DtOOl77A.js";import"./Avatar-D4vhi58n.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
