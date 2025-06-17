import{j as a}from"./jsx-runtime-CguOVfHD.js";import{m as P}from"./mockWiki-CfZ4orwO.js";import{M as x}from"./MarkdownSynapse-BRA91kPQ.js";import{d as s}from"./ToastMessage-ChdPYBWv.js";import{R as n,a as t}from"./RequirementItem-CDb2h5NY.js";import{P as O}from"./Paper-D6ksFxPp.js";import"./index-BPLjgkvc.js";import"./iframe-HsP_CKag.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-qAzg5fnb.js";import"./VerificationSubmission-DKyendrM.js";import"./useFiles-Dg7eR79m.js";import"./SynapseConstants-BxpxSwZg.js";import"./OrientationBanner-C0kyK34I.js";import"./index-9yjLkDDq.js";import"./spreadSx-CwcO6WA9.js";import"./react-tnRwdzGP.js";import"./FullWidthAlert-D6eLCa6A.js";import"./Alert-B5AVurxH.js";import"./createTheme-DSQpJzsh.js";import"./DefaultPropsProvider-BFT5Y31i.js";import"./useSlot-IIo6VvIg.js";import"./useForkRef-C8XUjv9b.js";import"./createSimplePaletteValueFilter-CQ41cGYC.js";import"./createSvgIcon-dnX2B-sC.js";import"./Close-SfuOdAFJ.js";import"./IconButton-BwxFgBKe.js";import"./useTimeout-Iw5I26ua.js";import"./ButtonBase-Dh8mOJ4H.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CiFyp6L0.js";import"./Stack-CZLd3YjP.js";import"./extendSxProp-BMJn0HH0.js";import"./getThemeProps-Dfy_7JRT.js";import"./useTheme-Bz8qIJiG.js";import"./Box-ov5DWmLq.js";import"./AlertTitle-vhhceDVB.js";import"./Typography-B2Whpmc6.js";import"./index-CT6kAEcw.js";import"./useTheme-D_FaDKRS.js";import"./ClickAwayListener-D9ee_HqF.js";import"./getReactElementRef-D-mRAnyG.js";import"./index-BLYj9l4G.js";import"./index-D4coSwQD.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAMsuofr.js";import"./Tooltip-C_eS1gRK.js";import"./index-6eOWtwI5.js";import"./useControlled-CCxX1tZW.js";import"./Popper-n-GOgUYn.js";import"./Button-txH2CBk9.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-BcSmk1fX.js";import"./useQuery-Cpcl1qQp.js";import"./utils-DLVmLcJd.js";import"./Link-p85Y9p0X.js";import"./Collapse-C-5hsue_.js";import"./isNil-DexuwFSn.js";import"./_Uint8Array-RSwHdnNb.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-BpJD8AE3.js";import"./isArray-Dxzbedgu.js";import"./isEqual-B_PFPNDj.js";import"./_getTag-BVfIJeFy.js";import"./tinycolor-Begke6kS.js";import"./Fade-C0pPIw3E.js";import"./inputBaseClasses-DajRJ63n.js";import"./calculateFriendlyFileSize-DHNphkMw.js";import"./CheckCircleTwoTone-CzmQ4BzX.js";import"./InfoTwoTone-DKYXWrg4.js";import"./useMutation-BZ9E3-1P.js";import"./dayjs.min-Dv3fukef.js";import"./chunk-AYJ5UCUI-DoXlqfXr.js";import"./cloneDeep-B6usTqsl.js";import"./_initCloneObject-D0FHna8U.js";import"./Skeleton-CB7phFqE.js";import"./merge-CGet5vcJ.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-Cn1qTLze.js";import"./SkeletonInlineBlock-CSR7ARPV.js";import"./SkeletonTable-CxoQlhW4.js";import"./times-CbmPbrR7.js";import"./toInteger-Bf9zWw1u.js";import"./isSymbol-BD4h7GP6.js";import"./SkeletonParagraph-BotdWLxi.js";import"./uniqueId-BMwk9WWL.js";import"./toString-DwusrVHA.js";import"./CSSTransition-BeSekNTU.js";import"./ConditionalWrapper-D8oR0p5_.js";import"./LockTwoTone-DxheyorN.js";import"./Avatar-CbgXLo6x.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
