import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-RfYZAI_W.js";import{d as s}from"./ToastMessage-DWQXZHc8.js";import{R as n,a as t}from"./RequirementItem-CPKy7Nlv.js";import{P as O}from"./Paper-_-PoF_c7.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DzpLvPyG.js";import"./SynapseConstants-rUPxR7Yc.js";import"./OrientationBanner-t173fekd.js";import"./index-ZhrB7fIQ.js";import"./index-DSkVdhrf.js";import"./iframe-DYeF287a.js";import"./spreadSx-CwcO6WA9.js";import"./react-p7CCM9Kc.js";import"./FullWidthAlert-D_pY0MvE.js";import"./Alert-yfsCI1Uq.js";import"./createTheme-B_zC4xf3.js";import"./DefaultPropsProvider-DzRiX1xR.js";import"./useSlot-DW6hEZC9.js";import"./useForkRef-CYgCZhxb.js";import"./createSimplePaletteValueFilter-t_V-XiMr.js";import"./createSvgIcon-YQCSlHK0.js";import"./Close-BIVj7De7.js";import"./IconButton-Bo7k1tr3.js";import"./useTimeout-BAqBF6lB.js";import"./ButtonBase-B5hFWQuv.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CosGYM1x.js";import"./Stack-hea32SzM.js";import"./extendSxProp-DAsRLwVq.js";import"./getThemeProps-C3jqbSrb.js";import"./useTheme-Cym59Nt6.js";import"./Box-BMSgzQAg.js";import"./AlertTitle-DvplFeT5.js";import"./Typography-CyWUTtXN.js";import"./index-DCjjB6Mt.js";import"./useTheme-CV8KRl2q.js";import"./ClickAwayListener-CAWvQwZB.js";import"./getReactElementRef-CGvdkwYh.js";import"./index-B_05Cg5Y.js";import"./index-wPQ0IiXn.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Tn7aC0Mr.js";import"./Tooltip-DNwnDvqE.js";import"./index-BHkBa_FS.js";import"./useControlled-DwIZwnDy.js";import"./Popper-MBWBO-b7.js";import"./Button-aqwJXSce.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CZolMSVi.js";import"./QueryClientProvider-Ci5Hg-vp.js";import"./Link-DpsHsyH0.js";import"./Collapse-BNkf-Q_O.js";import"./_baseUniq-BigHUiwX.js";import"./_Uint8Array-BOn-FcwP.js";import"./isArray-BlUZsipK.js";import"./_getTag-Dmk0aOnu.js";import"./isEqual-BsahL1ut.js";import"./merge-DLD6Pxo_.js";import"./_initCloneObject-BeI6Ken0.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DzXsEJ83.js";import"./inputBaseClasses-BiN3BCCk.js";import"./calculateFriendlyFileSize-DXtfxGKv.js";import"./CheckCircleTwoTone-C_SCJO_4.js";import"./InfoTwoTone-BvmJpf6Z.js";import"./useMutation-CfLUXx7H.js";import"./dayjs.min-CM3QBd8M.js";import"./chunk-AYJ5UCUI-CJ-mOY9f.js";import"./cloneDeep-CZzYrGxO.js";import"./Skeleton-muhm2lVo.js";import"./SkeletonButton-Be7Q4zR-.js";import"./SkeletonInlineBlock-CfgPOENQ.js";import"./SkeletonTable-Dpb8aZii.js";import"./times-Nh9U7Nen.js";import"./toInteger-9EcWoHc3.js";import"./toNumber-D8b7pPvy.js";import"./isSymbol-lWqf4hfT.js";import"./SkeletonParagraph-CSlpaQjO.js";import"./uniqueId-DC1CRz1w.js";import"./toString-CPO1Z0HC.js";import"./CSSTransition-CwA4jIR4.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DBVC4JHU.js";import"./Avatar-MwYXNcpd.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
