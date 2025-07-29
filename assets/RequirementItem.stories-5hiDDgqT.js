import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-B6UJfcQd.js";import{d as s}from"./ToastMessage-Cr1yU2e9.js";import{R as n,a as t}from"./RequirementItem-wEFzDQHq.js";import{P as O}from"./Paper-BOGp1cIL.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-KiTy3Z3P.js";import"./SynapseConstants-DbzIcXKJ.js";import"./OrientationBanner-Br9QB-0q.js";import"./index-Cf2wQO0T.js";import"./index-BgqEGoYw.js";import"./iframe-BNzW0Vu_.js";import"./spreadSx-CwcO6WA9.js";import"./react-CQvrs41i.js";import"./FullWidthAlert-BWGXaJFy.js";import"./Alert-BwsUmVK7.js";import"./createTheme-C65121Eq.js";import"./DefaultPropsProvider-B93j11NS.js";import"./useSlot-Bqot826z.js";import"./useForkRef-BUCdoQJu.js";import"./createSimplePaletteValueFilter-BLmDH_bu.js";import"./createSvgIcon-D5Da5Jdz.js";import"./Close-OUoS5tCg.js";import"./IconButton-D5s8LN4k.js";import"./useTimeout-zV8pl8s0.js";import"./ButtonBase-bfqPe5-W.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BHzjVEsQ.js";import"./Stack-07kMQ-8X.js";import"./extendSxProp-Dw4EYBpz.js";import"./getThemeProps-BK3Hwaop.js";import"./useTheme-DjP_NvVt.js";import"./Box-BHzAAdtE.js";import"./AlertTitle-Q37-n-JO.js";import"./Typography-DZFu15BE.js";import"./index-DCwkHJnW.js";import"./useTheme-FoBl1a68.js";import"./ClickAwayListener-CniG53Ou.js";import"./getReactElementRef-bsTI1QOV.js";import"./index-BEdcGBiA.js";import"./index-pN3ZbJTp.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-C7dIUIOW.js";import"./Tooltip-D8xgGHq0.js";import"./index-BBzJ2h35.js";import"./useControlled-Bbz1rn0m.js";import"./Popper-C0J_iJHD.js";import"./Button-BRf54AUE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BYEtqtR3.js";import"./useQuery-DaHLg1Na.js";import"./QueryClientProvider-DKA2tRKY.js";import"./Link-BJVbZnYH.js";import"./Collapse-BUTezwaP.js";import"./_baseUniq-DvbkWL9Y.js";import"./_Uint8Array-BEjKHBXJ.js";import"./isArray-C7fdCft4.js";import"./_getTag-Dia_4dL4.js";import"./isEqual-EeoQ59Qx.js";import"./merge-jmjASqbE.js";import"./_initCloneObject-DN-dmQ1i.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CXHEFCpj.js";import"./inputBaseClasses-CSVpQyp-.js";import"./calculateFriendlyFileSize-B2w9M3PF.js";import"./CheckCircleTwoTone-91C58tG7.js";import"./InfoTwoTone-t3Ru72u9.js";import"./useMutation-C8RNElRf.js";import"./dayjs.min-Di4sf_5l.js";import"./chunk-AYJ5UCUI-BiGX4WeM.js";import"./cloneDeep-QNxhR9y6.js";import"./Skeleton-CaA-fJni.js";import"./SkeletonButton-tZMeoYp5.js";import"./SkeletonInlineBlock-Ba478tiR.js";import"./SkeletonTable-Dx0zqlxl.js";import"./times-fq0VS-6p.js";import"./toInteger-TRcQ2pW6.js";import"./toNumber-APtuUM49.js";import"./isSymbol-Pxbh8ryx.js";import"./SkeletonParagraph-BW5z1B30.js";import"./uniqueId-C5Zhm8X2.js";import"./toString-CN7mQLcv.js";import"./CSSTransition-geRkEQrE.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CAVsVRlP.js";import"./Avatar-D9wu643w.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
