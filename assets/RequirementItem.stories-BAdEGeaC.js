import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-HN4Uckap.js";import{d as s}from"./ToastMessage-Be1OCgzS.js";import{R as n,a as t}from"./RequirementItem-DJcggucU.js";import{P as O}from"./Paper-B7Sf59Qm.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-CtpAYHeN.js";import"./SynapseConstants-B20IWiKQ.js";import"./OrientationBanner-Cqm-nmkv.js";import"./index-BthYrhqK.js";import"./index-1kje7hbp.js";import"./iframe-P3oO2Icm.js";import"./spreadSx-CwcO6WA9.js";import"./react-c7S9S6V3.js";import"./FullWidthAlert-C0XuvKAZ.js";import"./Alert-DYTEWiub.js";import"./createTheme-OG4SESHy.js";import"./DefaultPropsProvider-h88qGke-.js";import"./useSlot-DXxgJls1.js";import"./useForkRef-D9dMJQ0q.js";import"./createSimplePaletteValueFilter-BUYDpYB7.js";import"./createSvgIcon-COTmfNQD.js";import"./Close-DPjoDAV3.js";import"./IconButton-DVCziVzo.js";import"./useTimeout-Dv-V-iGQ.js";import"./ButtonBase-BVH95p2m.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-RCFFSlDy.js";import"./Stack-DiwR9M8A.js";import"./extendSxProp-Ba4rz3fq.js";import"./getThemeProps-BV0JmN8D.js";import"./useTheme-C1oGBCFg.js";import"./Box-BSsC5_fo.js";import"./AlertTitle-DY2vZVnp.js";import"./Typography-UsUy27h4.js";import"./index-DY2CjuTt.js";import"./useTheme-74bKXp5k.js";import"./ClickAwayListener-D6k5Nu1Z.js";import"./getReactElementRef-DUePG06p.js";import"./index-BlODw5Ln.js";import"./index-Bx-o-xN8.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DcG1qn5x.js";import"./Tooltip-SiJ2L_4C.js";import"./index-jBLJh1fo.js";import"./useControlled-CXyTmM0a.js";import"./Popper-8XwYGZA6.js";import"./Button-B5AeWKRO.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-Pnsivd9m.js";import"./QueryClientProvider-CsWguKkd.js";import"./Link-DMonRavy.js";import"./Collapse-IxLkIakE.js";import"./_baseUniq-9RLn5ltf.js";import"./_Uint8Array-CZ5euGBW.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-ClkwTU3U.js";import"./isArray-Dxzbedgu.js";import"./_getTag-BCK38-UW.js";import"./isEqual-Hccqq_XK.js";import"./merge-CNAz1M9N.js";import"./_initCloneObject-9Ptb3yvA.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BLtm4mZl.js";import"./inputBaseClasses-BHIaVwMH.js";import"./calculateFriendlyFileSize-Bog6ZeEG.js";import"./CheckCircleTwoTone-BagqzJ7q.js";import"./InfoTwoTone-CoAhai06.js";import"./useMutation-CUuS3dzJ.js";import"./dayjs.min-CXJYOgSw.js";import"./chunk-AYJ5UCUI-C63Z2g3T.js";import"./cloneDeep-Dnx1G2Tq.js";import"./Skeleton-DenV4mbe.js";import"./SkeletonButton-BiKh53Ng.js";import"./SkeletonInlineBlock-BVWnRu5M.js";import"./SkeletonTable-D9HTxnq-.js";import"./times-BBtumozc.js";import"./toInteger-tyvFoK1B.js";import"./isSymbol-B_h6OIuR.js";import"./SkeletonParagraph-BSEmYsoL.js";import"./uniqueId-BoKIjeGF.js";import"./toString-Bos8CjKh.js";import"./CSSTransition-B8-92CNF.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BcUapYQe.js";import"./Avatar-CZjDfunB.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
