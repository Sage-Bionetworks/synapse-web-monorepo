import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BDbraBBg.js";import{d as s}from"./ToastMessage-u_d4BNms.js";import{R as n,a as t}from"./RequirementItem-D1t_nDz_.js";import{P as O}from"./Paper-CsXkdq0v.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-DgA4sua4.js";import"./SynapseConstants-zhQmHXV5.js";import"./OrientationBanner-DsTkx0ky.js";import"./index-DjodvIJ6.js";import"./index-FnFoRS2l.js";import"./iframe-BQgclLfy.js";import"./spreadSx-CwcO6WA9.js";import"./react-BSQxsnlC.js";import"./FullWidthAlert-B8IEykrY.js";import"./Alert-DnM99hfv.js";import"./createTheme-xxG_Y475.js";import"./DefaultPropsProvider-LSaRYRMW.js";import"./useSlot-CteJh10u.js";import"./useForkRef-BJPB9EdG.js";import"./createSimplePaletteValueFilter-B89P2Dui.js";import"./createSvgIcon-BMJln5th.js";import"./Close-DykoredG.js";import"./IconButton-CZDDDf23.js";import"./useTimeout-DZfUf5bC.js";import"./ButtonBase-CAhI8_mC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CJsjeJiY.js";import"./Stack-CUWnYNVz.js";import"./extendSxProp-BWUDsKqM.js";import"./getThemeProps-QKc8-Hqp.js";import"./useTheme-CfY3xsPY.js";import"./Box-DyKT-36E.js";import"./AlertTitle-_U30P438.js";import"./Typography-COutbzFt.js";import"./index-CvIgDNYY.js";import"./useTheme-Cpa7SYtl.js";import"./ClickAwayListener-DgVK_jOs.js";import"./getReactElementRef-DEnUjsW1.js";import"./index-DKvTqSYg.js";import"./index-BzKQHyrx.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BgEkX_7W.js";import"./Tooltip-DDWHVSDc.js";import"./index-BUAnQT2C.js";import"./useControlled-BUg4_r2X.js";import"./Popper-BDFe7_BE.js";import"./Button-Bfbd_Rk8.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-BF7bVPWQ.js";import"./QueryClientProvider-CqDDjuBT.js";import"./Link-CXFgKSkP.js";import"./Collapse-DbXwNbAg.js";import"./_baseUniq-BrlURNwb.js";import"./_Uint8Array-DZ13kat9.js";import"./isArray-W6YcrcUU.js";import"./_getTag-CK2ZhFSX.js";import"./isEqual-BoqKulYO.js";import"./merge-CLKi3xPO.js";import"./_initCloneObject-lvQYDOyD.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D88S9uD9.js";import"./inputBaseClasses-BxmTzBG0.js";import"./calculateFriendlyFileSize-CqeuH4m4.js";import"./CheckCircleTwoTone-C0axq3F9.js";import"./InfoTwoTone-DROq7EBW.js";import"./useMutation-B7DmEc4c.js";import"./dayjs.min-Bqzlt4CZ.js";import"./chunk-AYJ5UCUI-X23U4ZIo.js";import"./cloneDeep-8pg9jL2B.js";import"./Skeleton-GGWL1Irm.js";import"./SkeletonButton-DueoXPFh.js";import"./SkeletonInlineBlock-B9K6roya.js";import"./SkeletonTable-B402m2Mx.js";import"./times-COiBzNQ3.js";import"./toInteger-Dkh6Er-S.js";import"./isSymbol-Dl1y1v-B.js";import"./SkeletonParagraph-CLE3DR8E.js";import"./uniqueId-BgQw6AW6.js";import"./toString-CT6UzBjH.js";import"./CSSTransition-1t19K3i6.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BVy81lW4.js";import"./Avatar-D66eRZ0G.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
