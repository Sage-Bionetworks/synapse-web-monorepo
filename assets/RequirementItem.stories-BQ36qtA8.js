import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DR7-iZLf.js";import{d as s}from"./ToastMessage-BJoh4IuF.js";import{R as n,a as t}from"./RequirementItem-B7C9NMRg.js";import{P as O}from"./Paper-C5Va8tEQ.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-BQEO-69M.js";import"./SynapseConstants-ByJ4SBiX.js";import"./OrientationBanner-BUQ62TYj.js";import"./index-BDqCLLtG.js";import"./index-CcrsiwgI.js";import"./iframe-DkAN1I_g.js";import"./spreadSx-CwcO6WA9.js";import"./react-BSbW4s-G.js";import"./FullWidthAlert-5Ne4J_9o.js";import"./Alert-xBWLXl1Y.js";import"./createTheme-D0pL0qQP.js";import"./DefaultPropsProvider-H9_8ZvTU.js";import"./useSlot-CDWcpGsY.js";import"./useForkRef-CWW1kaxd.js";import"./createSimplePaletteValueFilter-CdCRSs_B.js";import"./createSvgIcon-EFbRc6ub.js";import"./Close-mR81D45w.js";import"./IconButton-B-H21jSi.js";import"./useTimeout-KPLmy49i.js";import"./ButtonBase-CixOXMZC.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D1i1Xybt.js";import"./Stack-DB53MkM8.js";import"./extendSxProp-BOrFJbhA.js";import"./getThemeProps-CqvZsTgu.js";import"./useTheme-C9aeDpm1.js";import"./Box-5WPD-AqJ.js";import"./AlertTitle-BRV0cPHG.js";import"./Typography-Blcis-6R.js";import"./index-D79hvqRM.js";import"./useTheme-Bv7DV3GC.js";import"./ClickAwayListener-BOUF5eQl.js";import"./getReactElementRef-DODCH2Uv.js";import"./index-FmU7P8-W.js";import"./index-BQKvVLPL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BGALCZc1.js";import"./Tooltip-DW8zSJ13.js";import"./index-EWxYWF3M.js";import"./useControlled-C9ig_TM1.js";import"./Popper-D-2uPAjO.js";import"./Button-xIVjleXs.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Ca66mrDJ.js";import"./QueryClientProvider-DhcOouJr.js";import"./Link-JpAHplQA.js";import"./Collapse-CoBc5Um2.js";import"./_baseUniq-DWDW-Ywk.js";import"./_Uint8Array-DP_PQern.js";import"./isArray-L2CpAKpI.js";import"./_getTag-DMmtDXrU.js";import"./isEqual-CxigYvVh.js";import"./merge-C9M7mJ3m.js";import"./_initCloneObject-16YS23Lt.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BlJ0L8LZ.js";import"./inputBaseClasses-DSbshDwR.js";import"./calculateFriendlyFileSize-D-Ld3tQe.js";import"./CheckCircleTwoTone-Co6ze5Ep.js";import"./InfoTwoTone-S22d2WfP.js";import"./useMutation-C2MhW39A.js";import"./dayjs.min-CYWw-vQ3.js";import"./chunk-AYJ5UCUI-HMrZDw_1.js";import"./cloneDeep-4lWfUU40.js";import"./Skeleton-CNNLcJzv.js";import"./SkeletonButton-Dl089ttf.js";import"./SkeletonInlineBlock-DU8-MJaz.js";import"./SkeletonTable-CuDhYiKq.js";import"./times-lnOhNviC.js";import"./toInteger-B2rtjwzt.js";import"./isSymbol-yAH-YvQ0.js";import"./SkeletonParagraph-DNsRlXEF.js";import"./uniqueId-DZqiAUwr.js";import"./toString-D107tVBm.js";import"./CSSTransition-FMAEm4w4.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BQNuPV9y.js";import"./Avatar-CiRXfdDQ.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
