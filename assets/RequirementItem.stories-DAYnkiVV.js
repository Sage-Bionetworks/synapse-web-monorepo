import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-DFrK0YYM.js";import{d as s}from"./ToastMessage-CiK94AiS.js";import{R as n,a as t}from"./RequirementItem-0LjqwOEH.js";import{P as O}from"./Paper-BMZBcLke.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-CvkLCgvb.js";import"./SynapseConstants-C9l08Y0T.js";import"./OrientationBanner-CkJeDWbe.js";import"./index-CFGa6oS-.js";import"./index-DY3OEpIc.js";import"./iframe-5G1creHY.js";import"./spreadSx-CwcO6WA9.js";import"./react-du1M-3g5.js";import"./FullWidthAlert-DtqWDIT4.js";import"./Alert-CfDw6kgn.js";import"./createTheme-DolW38o8.js";import"./DefaultPropsProvider-B7rH05j0.js";import"./useSlot-BwPxmdEK.js";import"./useForkRef-BuTdfqyw.js";import"./createSimplePaletteValueFilter-DH_f5Q0y.js";import"./createSvgIcon-BkxlEEde.js";import"./Close-DQ0imrdY.js";import"./IconButton-Bh5-L8Vh.js";import"./useTimeout-mVgk-OEX.js";import"./ButtonBase-DiwyAVK4.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-IoPbused.js";import"./Stack-CQq6BAXa.js";import"./extendSxProp-DAVZLGTZ.js";import"./getThemeProps-CSsj0YYT.js";import"./useTheme-Bk-9zqNg.js";import"./Box-B62GPBkO.js";import"./AlertTitle-C08CnuZ6.js";import"./Typography-sABE_9NT.js";import"./index-C-XptRMi.js";import"./useTheme-BX6Sw0fI.js";import"./ClickAwayListener-D_EltHT6.js";import"./getReactElementRef-DMTqY5TQ.js";import"./index-um_XUqMv.js";import"./index-4aVnsOHZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DPoUdyMf.js";import"./Tooltip-CfspOjMw.js";import"./index-y_SU34WU.js";import"./useControlled-DcLwo5kp.js";import"./Popper-BxS1SMUl.js";import"./Button-D4hsDkIF.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BzjRZEbq.js";import"./QueryClientProvider-ZdnXoWE-.js";import"./Link-D0BnBx3E.js";import"./Collapse-DDmwW3NY.js";import"./_baseUniq-bA_A-iJ6.js";import"./_Uint8Array-D3pmos-z.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CErJF2LU.js";import"./isArray-Dxzbedgu.js";import"./_getTag-C7eoyW69.js";import"./isEqual-Bb9Get5N.js";import"./merge-CUDYmyEs.js";import"./_initCloneObject-BQLQ2z7h.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DcC4Ey4y.js";import"./inputBaseClasses-eUwvjpv9.js";import"./calculateFriendlyFileSize-BjTXUzYU.js";import"./CheckCircleTwoTone-DBzjgsv2.js";import"./InfoTwoTone-rdOob-oL.js";import"./useMutation-D3-ukzm0.js";import"./dayjs.min-BVuutMqG.js";import"./chunk-AYJ5UCUI-B9xju9eP.js";import"./cloneDeep-C249KZrC.js";import"./Skeleton-B2JH7j6y.js";import"./SkeletonButton-BqEmcsw2.js";import"./SkeletonInlineBlock-BpQbTkYG.js";import"./SkeletonTable-Bi6ebLAO.js";import"./times-B44n9U73.js";import"./toInteger-D-LFwgjx.js";import"./isSymbol-SSMfp-bx.js";import"./SkeletonParagraph-DeO8YVmf.js";import"./uniqueId-G7Cme8Dr.js";import"./toString-CAKeMNJg.js";import"./CSSTransition-DfurxO4h.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cz4G8yFM.js";import"./Avatar-CwgCEG66.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
