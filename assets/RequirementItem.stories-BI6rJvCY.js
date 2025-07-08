import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-BAMKyt_e.js";import{d as s}from"./ToastMessage-DAnwR93n.js";import{R as n,a as t}from"./RequirementItem-esJingON.js";import{P as O}from"./Paper-N2-Rl_Ug.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-dN7ewnVn.js";import"./SynapseConstants-B1D5mik2.js";import"./OrientationBanner-C8pDYmHe.js";import"./index-yKIbSChy.js";import"./index-roJ4vK9f.js";import"./iframe-usNaZGIV.js";import"./spreadSx-CwcO6WA9.js";import"./react-DZJk2r9-.js";import"./FullWidthAlert-Bzhn1pnU.js";import"./Alert-WRFaCAhz.js";import"./createTheme-CKTnRhf8.js";import"./DefaultPropsProvider-BKZXJlgr.js";import"./useSlot-DHnKQh3_.js";import"./useForkRef-CVKF0tln.js";import"./createSimplePaletteValueFilter-Cs5GTHcK.js";import"./createSvgIcon-ES-cxXT2.js";import"./Close-BzNvQxyl.js";import"./IconButton-CfK7Mq_z.js";import"./useTimeout-DCTApi_k.js";import"./ButtonBase-BFz5Sg4Z.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Bp0mZZnQ.js";import"./Stack-BokSKM_R.js";import"./extendSxProp-Cq9B16Aj.js";import"./getThemeProps-Cnl-jNMX.js";import"./useTheme-CfHcAony.js";import"./Box-BQqeNhLw.js";import"./AlertTitle-BRAVhBTZ.js";import"./Typography-DiV-TSAW.js";import"./index-BL8eoJay.js";import"./useTheme-z78Ru-D7.js";import"./ClickAwayListener-FeBMXEHd.js";import"./getReactElementRef-SxH9WasF.js";import"./index-C8GKbJq-.js";import"./index-NGl8JrjW.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-1_GvRgnD.js";import"./Tooltip-DxTN-iVj.js";import"./index-CCsjNeDE.js";import"./useControlled-Dj4md4a0.js";import"./Popper-trMMFIZR.js";import"./Button-Cm0_9C_z.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-B7ZDNP2g.js";import"./QueryClientProvider-CUfHPdrT.js";import"./Link-ClZEc3EU.js";import"./Collapse-DyljlfQj.js";import"./_baseUniq-C7ZN6g3_.js";import"./_Uint8Array-BLVPHFVS.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BifwuPRO.js";import"./isArray-Dxzbedgu.js";import"./_getTag-B-JVePcs.js";import"./isEqual-DWUflldK.js";import"./merge-DEBG73W6.js";import"./_initCloneObject-DMVGGUOr.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DbbtWcKt.js";import"./inputBaseClasses-rbsktaTm.js";import"./calculateFriendlyFileSize-C1VoIjSe.js";import"./CheckCircleTwoTone-CTTxY2FK.js";import"./InfoTwoTone-C-O9jrS3.js";import"./useMutation-D4EbnEX4.js";import"./dayjs.min-BgcTbgT5.js";import"./chunk-AYJ5UCUI-BpnLogmo.js";import"./cloneDeep-IitvVbLB.js";import"./Skeleton-FzfqYDZ_.js";import"./SkeletonButton-C5GDEk9l.js";import"./SkeletonInlineBlock-0kvj6mfy.js";import"./SkeletonTable-D8LzoPx2.js";import"./times-C4Idkdc2.js";import"./toInteger-CmBua0yl.js";import"./isSymbol-BEnhDbEl.js";import"./SkeletonParagraph-YRocbL_a.js";import"./uniqueId-CshGNdGU.js";import"./toString-BQWfjy8M.js";import"./CSSTransition-BkH1EW9G.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CEr2PIT0.js";import"./Avatar-BW0UHOq6.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
