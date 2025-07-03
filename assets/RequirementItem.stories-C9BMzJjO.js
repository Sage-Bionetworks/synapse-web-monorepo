import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-CDZzKaEk.js";import{d as s}from"./ToastMessage-WiGKxFZ0.js";import{R as n,a as t}from"./RequirementItem-9ITfWvsH.js";import{P as O}from"./Paper-DtBiqJHv.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DEvOFmFa.js";import"./SynapseConstants-hOwjwdFE.js";import"./OrientationBanner-BPvudHr3.js";import"./index-CM8-5iHT.js";import"./index-Bdq4dmxh.js";import"./iframe-5yykBupe.js";import"./spreadSx-CwcO6WA9.js";import"./react-1IQ7WwpW.js";import"./FullWidthAlert-CuVItq3x.js";import"./Alert-D5J_QYyB.js";import"./createTheme-iPWGREpV.js";import"./DefaultPropsProvider-BBZIFPvR.js";import"./useSlot-B1AafxGW.js";import"./useForkRef-FkJ5xwJz.js";import"./createSimplePaletteValueFilter-B08EAaoN.js";import"./createSvgIcon-BAPuczsE.js";import"./Close-x0g1LbKt.js";import"./IconButton-Bm0mQzZG.js";import"./useTimeout-BgfxGmiP.js";import"./ButtonBase-K5QUFqmx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B3csqgbt.js";import"./Stack-IYrRXk3F.js";import"./extendSxProp-uGraOKmh.js";import"./getThemeProps-B5uRTLYs.js";import"./useTheme-CIm1AslH.js";import"./Box-CmW2E2u3.js";import"./AlertTitle-DbRisxUh.js";import"./Typography-Bfy3NAwK.js";import"./index-Gt54P5Cv.js";import"./useTheme-CX35NsQR.js";import"./ClickAwayListener-rcZhvlfv.js";import"./getReactElementRef-CO5JF6fA.js";import"./index-DNhnPR2V.js";import"./index-cD1hMmUR.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-mCCzwbDE.js";import"./Tooltip-CAaYHkt6.js";import"./index-DN-kZBvF.js";import"./useControlled-CuMNUpX-.js";import"./Popper-BcHEeLWk.js";import"./Button-B5BE5G75.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DlYhqM71.js";import"./QueryClientProvider-WVsmkAUI.js";import"./Link-C9U5o0S_.js";import"./Collapse-Da-lqXQN.js";import"./_baseUniq-BzXwBHbs.js";import"./_Uint8Array-okti9onC.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-HMheKOEV.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DgX4jnQH.js";import"./isEqual-L-KNPlIu.js";import"./merge-C55x1JO3.js";import"./_initCloneObject-B1qigGUv.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2n0ls8-.js";import"./inputBaseClasses-BDrUoQOh.js";import"./calculateFriendlyFileSize-vxbAcG0j.js";import"./CheckCircleTwoTone-CBXoT0Sj.js";import"./InfoTwoTone-Dw6Bdq5N.js";import"./useMutation-k3w03tVk.js";import"./dayjs.min-Bkrd2JzD.js";import"./chunk-AYJ5UCUI-CTppoZqK.js";import"./cloneDeep-DplcVtEj.js";import"./Skeleton-DUMrFc95.js";import"./SkeletonButton-BcIM4-Kr.js";import"./SkeletonInlineBlock-CSImffNu.js";import"./SkeletonTable-DWZuqF4I.js";import"./times-D9_qFZRL.js";import"./toInteger-D8Mi7YhP.js";import"./isSymbol-Bk99GZ-R.js";import"./SkeletonParagraph-Bu1AQfs1.js";import"./uniqueId-ONSXf3ai.js";import"./toString-BxcAtHvV.js";import"./CSSTransition-bVmdmHtT.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-krtZi60e.js";import"./Avatar-ROPrvyKx.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
