import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-Xbm5Jz7l.js";import{d as s}from"./ToastMessage-CwNUSb3u.js";import{R as n,a as t}from"./RequirementItem-CkR1B5Yf.js";import{P as O}from"./Paper-iByHW3jK.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-BrvpFcHE.js";import"./SynapseConstants-D7sLaKy_.js";import"./OrientationBanner-C0XTaJMW.js";import"./index-obCXUC8H.js";import"./index-7kUQIJda.js";import"./iframe-Bufyq7gT.js";import"./spreadSx-CwcO6WA9.js";import"./react-CKAq3oVa.js";import"./FullWidthAlert-PJ8urHsT.js";import"./Alert-BMSC638d.js";import"./createTheme-D4aPuV1u.js";import"./DefaultPropsProvider-Bn8LRgKh.js";import"./useSlot-D0mFnmL3.js";import"./useForkRef-DL0inOAS.js";import"./createSimplePaletteValueFilter-BEt-i54Y.js";import"./createSvgIcon-ZiAuN7BE.js";import"./Close-Bl3LK6CA.js";import"./IconButton-CY5UwIMQ.js";import"./useTimeout-DKXj7ZoE.js";import"./ButtonBase-X43DuaPS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Do_fn7Gj.js";import"./Stack-wKihdjB8.js";import"./extendSxProp-BP-eLuwj.js";import"./getThemeProps-B3fA16IA.js";import"./useTheme-DYE74pi0.js";import"./Box-DUMek0QV.js";import"./AlertTitle-Tv9KCYDf.js";import"./Typography-BZFFdM9O.js";import"./index-BTbDipTT.js";import"./useTheme-B9hs1vf7.js";import"./ClickAwayListener-Dx5z9E1D.js";import"./getReactElementRef-CMCqw8Si.js";import"./index-C50bOCgW.js";import"./index-CUUOnlbp.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-r_DCaGO6.js";import"./Tooltip-BdYw0Ui8.js";import"./index-D4vj2bi1.js";import"./useControlled-BmyrkJhm.js";import"./Popper-Dx1QT2Hf.js";import"./Button-BHZrD0a2.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BmLt0lw7.js";import"./QueryClientProvider-BD4tEhHC.js";import"./Link-CGBiOtpH.js";import"./Collapse-o-ca4Bd7.js";import"./_baseUniq-TPiJtr0Z.js";import"./_Uint8Array-CGeEjqws.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BbwlYwBr.js";import"./isArray-Dxzbedgu.js";import"./_getTag-C_ExSknu.js";import"./isEqual-PpuJ5c99.js";import"./merge-DZLKoClN.js";import"./_initCloneObject-CvCjrSzO.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BeG5-ZVA.js";import"./inputBaseClasses-o89gsDaC.js";import"./calculateFriendlyFileSize-BVrjJ4AN.js";import"./CheckCircleTwoTone-XpSzkXr7.js";import"./InfoTwoTone-B1O3nL8U.js";import"./useMutation-DroixX2q.js";import"./dayjs.min-D-tGVyTP.js";import"./chunk-AYJ5UCUI-BeWs92Yf.js";import"./cloneDeep-DDXqHXmK.js";import"./Skeleton-DD0AE17B.js";import"./SkeletonButton-C0ECqp1J.js";import"./SkeletonInlineBlock-B6Q9C_9G.js";import"./SkeletonTable-B2aoZse0.js";import"./times-RsvDQ340.js";import"./toInteger-CiKMmaRD.js";import"./isSymbol-CLf58nd8.js";import"./SkeletonParagraph-DwATtZ4a.js";import"./uniqueId-dsPC6Ick.js";import"./toString-sS658viE.js";import"./CSSTransition-CC_HzCAX.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BwpNBwC7.js";import"./Avatar-BEMfpLoA.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
