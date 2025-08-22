import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-Dyw6xW-3.js";import{d as s}from"./ToastMessage-D_-6QrMY.js";import{R as n,a as t}from"./RequirementItem-DS3KkcT0.js";import{P as O}from"./Paper-BtRLv9QE.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BotM9FxX.js";import"./SynapseConstants-BLHb5NQT.js";import"./OrientationBanner-C7fwD44_.js";import"./index-BKsYyMgB.js";import"./index-Fct1fJYK.js";import"./iframe-CdaSO_eF.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dzv6eqoj.js";import"./FullWidthAlert-BHvp60rx.js";import"./Alert-BbpltcOr.js";import"./createTheme-KT6ovmnU.js";import"./DefaultPropsProvider-D5VkK-GM.js";import"./useSlot-DToWd5Xc.js";import"./useForkRef-BejQGHNG.js";import"./createSimplePaletteValueFilter-Bn1ICdwZ.js";import"./createSvgIcon-DxxuQnaJ.js";import"./Close-ByQsBb02.js";import"./IconButton-BHwbAkE7.js";import"./useTimeout-CGysDwV5.js";import"./ButtonBase-BzMUbCTS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BPhMjjgU.js";import"./Stack-D36c7fPZ.js";import"./extendSxProp-CWnjY0x8.js";import"./getThemeProps-B9214kqk.js";import"./useTheme-BNWr4apX.js";import"./Box-BdQqh4Aq.js";import"./AlertTitle-CtxXO7s0.js";import"./Typography-DJMsLYCm.js";import"./index-CRCsf55N.js";import"./useTheme-CpppXMwN.js";import"./ClickAwayListener-DGulCAS9.js";import"./getReactElementRef-9rAAbMvM.js";import"./index-CkufiiNZ.js";import"./index-CRUr0FzG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Dekp173Y.js";import"./Tooltip-DM5GcwoG.js";import"./index-BTvSqKmm.js";import"./useControlled-DKD0UIT1.js";import"./Popper-DpM5olrR.js";import"./Button-DT2sB6xE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-CDo5Q5Z3.js";import"./QueryClientProvider-WmtJ9HUx.js";import"./Link-DTBVsOid.js";import"./Collapse-CmKZpyr5.js";import"./_baseUniq-CflXaZO6.js";import"./_Uint8Array-CsoACzV4.js";import"./isArray-g99Ar8f5.js";import"./_getTag-jXoVqQQH.js";import"./isEqual-B4-VOX98.js";import"./merge-CwmLDA8E.js";import"./_initCloneObject-BZXOr0F1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-amiIB_kc.js";import"./inputBaseClasses-gdVCUkrF.js";import"./calculateFriendlyFileSize-Bc5NU5Eo.js";import"./CheckCircleTwoTone-B29SNO7l.js";import"./InfoTwoTone-CGAeQS_q.js";import"./useMutation-CeP1vCsj.js";import"./dayjs.min-Ctz8f95b.js";import"./chunk-AYJ5UCUI-GVgUekA6.js";import"./cloneDeep-CiUfLbXh.js";import"./Skeleton-CtXnJt7s.js";import"./SkeletonButton-B3quJdQA.js";import"./SkeletonInlineBlock-Bjrqzwby.js";import"./SkeletonTable-D0i1uJYM.js";import"./times-B9gEeoGP.js";import"./toInteger-V_s355FP.js";import"./isSymbol-DntpYaZ4.js";import"./SkeletonParagraph-BAQslhsQ.js";import"./uniqueId-ogEYp1K2.js";import"./toString-BPVq3Y1x.js";import"./CSSTransition-CA6t6p-9.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-kGiydf7M.js";import"./Avatar-BvGAndfA.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
