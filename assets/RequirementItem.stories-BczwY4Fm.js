import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-BHeh6Qvj.js";import{d as s}from"./ToastMessage-B12AWcw5.js";import{R as n,a as t}from"./RequirementItem-BCaP2UXI.js";import{P as O}from"./Paper-Cl6BDWzj.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-BgDpzSnZ.js";import"./SynapseConstants-DGsf9P7A.js";import"./OrientationBanner-CTtXbnax.js";import"./index-9tLppOC1.js";import"./index-yCUnEpY5.js";import"./iframe-gNKfM8gk.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dul7Z0Mc.js";import"./FullWidthAlert-DNjDgXrI.js";import"./Alert-DpGXSR6i.js";import"./createTheme-B4aZ-Zb2.js";import"./DefaultPropsProvider-Cw4cD2Gs.js";import"./useSlot-aoyyrGdd.js";import"./useForkRef-M_noYJ9D.js";import"./createSimplePaletteValueFilter-51s7PY1W.js";import"./createSvgIcon-oOHEqfPt.js";import"./Close-CEW3NUG1.js";import"./IconButton-CY4FGYEd.js";import"./useTimeout-CuZ_JqjA.js";import"./ButtonBase-KeBM-9MT.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Cf6g4eFb.js";import"./Stack-STyAyUlw.js";import"./extendSxProp-CIrdn-hR.js";import"./getThemeProps-D8PjLR4-.js";import"./useTheme-6GaGjVsK.js";import"./Box-BpOhxbKA.js";import"./AlertTitle-CUoFin8k.js";import"./Typography-SZRRhZD9.js";import"./index-Dp2dJGDM.js";import"./useTheme-BmTDZfhV.js";import"./ClickAwayListener-DfC_WHzv.js";import"./getReactElementRef-XvbMGsPx.js";import"./index-CeNEsVvN.js";import"./index-ADdtT980.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CgDG11Ji.js";import"./Tooltip-B0dyqfMl.js";import"./index-Ju-LDmZ1.js";import"./useControlled-B6_8KTCH.js";import"./Popper-DF-ZzgM2.js";import"./Button-BfDj8hwD.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-CXRWCbXO.js";import"./QueryClientProvider-ciQTGKoG.js";import"./Link-DSFeBM2I.js";import"./Collapse-BBN76sqD.js";import"./_baseUniq-DrUqYJIw.js";import"./_Uint8Array-Bou5iouL.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BcAt8LvK.js";import"./isArray-Dxzbedgu.js";import"./_getTag-4mQ6siyT.js";import"./isEqual-RUS3s1a1.js";import"./merge-BQXjkqWm.js";import"./_initCloneObject-B3ZOc9-m.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-tqVDjiEK.js";import"./inputBaseClasses-BMS-bvkT.js";import"./calculateFriendlyFileSize-DRlc7BcI.js";import"./CheckCircleTwoTone-Db5nc3S1.js";import"./InfoTwoTone-Bo1e0FiV.js";import"./useMutation-Cyqe_83_.js";import"./dayjs.min-C35W30AG.js";import"./chunk-AYJ5UCUI-CQTlz4ZC.js";import"./cloneDeep-C-8X_Eyi.js";import"./Skeleton-BHgRHJw1.js";import"./SkeletonButton-CIH3Jw46.js";import"./SkeletonInlineBlock-E6ipA1J_.js";import"./SkeletonTable-lwjwQ3tg.js";import"./times-OQE7npaK.js";import"./toInteger-BmhGnNPr.js";import"./isSymbol-DszXGz9c.js";import"./SkeletonParagraph-HwKlLH2B.js";import"./uniqueId-BVWWyeKp.js";import"./toString-BqURqHdh.js";import"./CSSTransition-BSlzIoqf.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cxt4JuBH.js";import"./Avatar-94E01foN.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
