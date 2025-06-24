import{j as a}from"./jsx-runtime-BMNmdmks.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-DIh2109A.js";import{d as s}from"./ToastMessage-BbRWy4Xr.js";import{R as n,a as t}from"./RequirementItem-BKWTNGor.js";import{P as O}from"./Paper-BMjkBm4S.js";import"./index-DW0LBurA.js";import"./iframe-ClT2PY5H.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-LVfmboon.js";import"./SynapseConstants-LHIf88id.js";import"./OrientationBanner-cXrnnDJl.js";import"./index-o-ZcXs9X.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dq9KLFkp.js";import"./FullWidthAlert-BOWnhoc0.js";import"./Alert-C3hHW8Ss.js";import"./createTheme-BdY77VP6.js";import"./DefaultPropsProvider-C4znEiUE.js";import"./useSlot-iN9WwSqt.js";import"./useForkRef-CzQCr4JB.js";import"./createSimplePaletteValueFilter-Dvsm1UxE.js";import"./createSvgIcon-C2Nt4yOs.js";import"./Close-DZ9dTHFV.js";import"./IconButton-C6d5-HOq.js";import"./useTimeout-Ba2YGpsZ.js";import"./ButtonBase-DbZZ4BWx.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DbjUFdcr.js";import"./Stack-CjAxTaE3.js";import"./extendSxProp-5NJ5D_8G.js";import"./getThemeProps-RHmuKqMk.js";import"./useTheme-lm-u5WWe.js";import"./Box-DAofjfOr.js";import"./AlertTitle-BVKQI0HF.js";import"./Typography-DPG6xZ8P.js";import"./index-CfZpgxKm.js";import"./useTheme-BqQBSBdf.js";import"./ClickAwayListener-CT7c1qCs.js";import"./getReactElementRef-DHNg_CKP.js";import"./index-BosE4YRb.js";import"./index-CsPck03e.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DLIa4n3u.js";import"./Tooltip-DNllSrzL.js";import"./index-DyZDKPzh.js";import"./useControlled-jN23sF3g.js";import"./Popper-Cfz3yOXG.js";import"./Button-DAdJze2H.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bdqa-HwM.js";import"./useQuery-BRiZJAAn.js";import"./utils-03tRPbj_.js";import"./Link-C0xwXBcC.js";import"./Collapse-idyiFB1C.js";import"./_baseUniq-BWbdnOiY.js";import"./_Uint8Array-B0t_xbaK.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-OSltXNR0.js";import"./isArray-Dxzbedgu.js";import"./_getTag-Ca-82pc_.js";import"./isEqual-D0rtyjzd.js";import"./merge-CzGC5PWB.js";import"./_initCloneObject-DJIUKQWm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CqmJhiz0.js";import"./inputBaseClasses-BCsNgKHL.js";import"./calculateFriendlyFileSize-BrgP4UIi.js";import"./CheckCircleTwoTone-Cg0xOSIx.js";import"./InfoTwoTone-BH1JR2-n.js";import"./useMutation-C_Kg3YRh.js";import"./dayjs.min-CkwocMA_.js";import"./chunk-AYJ5UCUI-CN-XOAx5.js";import"./cloneDeep-y8PkmVZF.js";import"./Skeleton-CRBvsylm.js";import"./SkeletonButton-DKATm5ct.js";import"./SkeletonInlineBlock-BR6rHUnp.js";import"./SkeletonTable-7kivha_l.js";import"./times-CcMQaYy7.js";import"./toInteger-BH8gq4ON.js";import"./isSymbol-Crx2oj1D.js";import"./SkeletonParagraph-DTBWVnLJ.js";import"./uniqueId-BKS0I0Tz.js";import"./toString-ZvhdLhFy.js";import"./CSSTransition-Dt0HVIw6.js";import"./ConditionalWrapper-BeBEvJHv.js";import"./LockTwoTone-DOldcYop.js";import"./Avatar-Cp7AnZHS.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
