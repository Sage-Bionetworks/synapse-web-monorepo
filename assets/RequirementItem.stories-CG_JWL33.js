import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-BjsSPAW9.js";import{M as x}from"./MarkdownSynapse-HtYtnbK9.js";import{d as s}from"./ToastMessage-UgaY3xmb.js";import{R as n,a as t}from"./RequirementItem-CR6jEzPg.js";import{P as O}from"./Paper-Jv25uXd0.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BgkszYEk.js";import"./VerificationSubmission-D0sL2gwz.js";import"./useFiles-CQZM7AjY.js";import"./SynapseConstants-D1Rd9Fix.js";import"./OrientationBanner-CQSEzNQc.js";import"./index-CmJRSThR.js";import"./index-kApR6eUD.js";import"./iframe-C1nR21KR.js";import"./spreadSx-CwcO6WA9.js";import"./react-DHAib5XX.js";import"./FullWidthAlert-_-vUMgq2.js";import"./Alert-B2tMfc0Q.js";import"./createTheme-CSYFy0tJ.js";import"./DefaultPropsProvider-BQKHGYt3.js";import"./useSlot-BJdZFJin.js";import"./useForkRef-ClT4czLv.js";import"./createSimplePaletteValueFilter-BXSts7e0.js";import"./createSvgIcon-CaNkmE0v.js";import"./Close-C_G8zN6d.js";import"./IconButton-CajfBzdr.js";import"./useTimeout-qFNtREIo.js";import"./ButtonBase-Ul-e6mur.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BdT7iClJ.js";import"./Stack-YS6NY2uD.js";import"./extendSxProp-CXwrbAFG.js";import"./getThemeProps-D9JdBzab.js";import"./useTheme-Cm7toniF.js";import"./Box-CTd7KeGu.js";import"./AlertTitle-TjF0o3BZ.js";import"./Typography-CKnFtURh.js";import"./index-CeYZXjHS.js";import"./useTheme-CB1lVSGz.js";import"./ClickAwayListener-DhMDdb_T.js";import"./getReactElementRef-DnTIc2Hk.js";import"./index-BpvY6iLc.js";import"./index-DmsJ0_Ye.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D--k5b0i.js";import"./Tooltip-BSA_yst_.js";import"./index-DVkUNgxp.js";import"./useControlled-6B2E2-2f.js";import"./Popper-DCKxGQ65.js";import"./Button-vFqvsZ_S.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Bt2r5KGg.js";import"./useQuery-EF-nh5FZ.js";import"./QueryClientProvider-D7uLIhi_.js";import"./Link-BfpLPVbK.js";import"./Collapse-DcHWYaIp.js";import"./_baseUniq-Dl2e6RlB.js";import"./_Uint8Array-BepIjRsc.js";import"./isArray-iHViX0It.js";import"./_getTag-CTo9qp6D.js";import"./isEqual-BiownIIs.js";import"./merge-Cg28nVdS.js";import"./_initCloneObject-BPrGxJGL.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DqWfp0OJ.js";import"./inputBaseClasses-B7QkOVaL.js";import"./calculateFriendlyFileSize-BFr0UfNA.js";import"./CheckCircleTwoTone-BYpjdEsB.js";import"./InfoTwoTone-mxiRZzIp.js";import"./useMutation-DihXsUK8.js";import"./dayjs.min-BBH-MskI.js";import"./chunk-AYJ5UCUI-CvWcFBw0.js";import"./cloneDeep-8BIV-kZZ.js";import"./Skeleton-Dkoro0nH.js";import"./SkeletonButton-DDoPuzII.js";import"./SkeletonInlineBlock-_yKfbSF6.js";import"./SkeletonTable-Dk8YTaLF.js";import"./times-B3un19ue.js";import"./toInteger-ngdKq_TG.js";import"./isSymbol-D_icVQ5J.js";import"./SkeletonParagraph-CbK6rOVM.js";import"./uniqueId-BkTLsJ7l.js";import"./toString-aMdDXBic.js";import"./CSSTransition-vocAL81k.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BAX-kjCL.js";import"./Avatar-BmPIxJSN.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
