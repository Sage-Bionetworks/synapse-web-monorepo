import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-TAsbYiKO.js";import{d as s}from"./ToastMessage-DHyrIikG.js";import{R as n,a as t}from"./RequirementItem-Dxyca9xH.js";import{P as O}from"./Paper-BMdE1Mph.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-C5DfrOX2.js";import"./SynapseConstants-BtfgJM_H.js";import"./OrientationBanner-CESHpiba.js";import"./index-p1fR2xqG.js";import"./index-Jc_eG4r1.js";import"./iframe-CTmacDku.js";import"./spreadSx-CwcO6WA9.js";import"./react-CIEhwhZI.js";import"./FullWidthAlert-Dm9STOpq.js";import"./Alert-EdsWXdCF.js";import"./createTheme-CxdfWgKh.js";import"./DefaultPropsProvider-_fK4D_BE.js";import"./useSlot-C5-wXulw.js";import"./useForkRef-B8PDOisR.js";import"./createSimplePaletteValueFilter-D4ybAlfP.js";import"./createSvgIcon-BID9TOzH.js";import"./Close-_Bg-NS2F.js";import"./IconButton-B0gM3RNI.js";import"./useTimeout-CYs9VsFc.js";import"./ButtonBase-VPtjm-X0.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B_QldSXU.js";import"./Stack-Bsxn6uz-.js";import"./useThemeProps-DtLMzKZm.js";import"./getThemeProps-VmGcPAe8.js";import"./useTheme-CwxiJJWM.js";import"./extendSxProp-CFAVQVV3.js";import"./Box-BopbBMQ6.js";import"./AlertTitle-CznnuSBX.js";import"./Typography-CRJ_ISqb.js";import"./index-kHHJ3bf5.js";import"./useTheme-DsqwfTCV.js";import"./ClickAwayListener-DlNBvYZP.js";import"./getReactElementRef-Dz6-H50b.js";import"./index-LMTS2VXQ.js";import"./index-Dn-VaGZx.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CxvOX0jG.js";import"./Tooltip-COCcWJnq.js";import"./index-D_qELEFq.js";import"./useControlled-DRzjUrHA.js";import"./Popper-GeS_izA2.js";import"./Button-SLwSyWGH.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-D2bOA0bn.js";import"./QueryClientProvider-DOeXm9PL.js";import"./Link-91nnDMEk.js";import"./Collapse-BbC5ixbW.js";import"./_baseUniq-C00xECjX.js";import"./_Uint8Array-z9m6gYPX.js";import"./isArray-CIWQgFvO.js";import"./_getTag-B7gq1p6y.js";import"./isEqual-BRSPUeiL.js";import"./noop-DX6rZLP_.js";import"./merge-Cqa8GyUa.js";import"./_initCloneObject-CGVsVo7k.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DGoGkDAH.js";import"./inputBaseClasses-DDoXAkPR.js";import"./calculateFriendlyFileSize-CEfHY39V.js";import"./CheckCircleTwoTone-D9VSLiCt.js";import"./InfoTwoTone-C9wWK-2h.js";import"./useMutation-T2xtG7Fn.js";import"./dayjs.min-BjteLV8S.js";import"./chunk-AYJ5UCUI-Dqj8kGjG.js";import"./cloneDeep-HqG_US3S.js";import"./Skeleton-6dtuXFOP.js";import"./SkeletonButton-Co7k1K2j.js";import"./SkeletonInlineBlock-D9MAgRlT.js";import"./SkeletonTable-2cbq90Ft.js";import"./times-D3kaTYlr.js";import"./toInteger-5QKGi6Dy.js";import"./isSymbol-pbjDexES.js";import"./SkeletonParagraph-BuxrZSVd.js";import"./uniqueId-Bw4v3m0e.js";import"./toString-DKp363l0.js";import"./CSSTransition-Dx7c_Qb7.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CtJh6nVq.js";import"./Avatar-CQtuM2zf.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
