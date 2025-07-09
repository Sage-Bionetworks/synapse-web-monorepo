import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CUQx1XWq.js";import{M as x}from"./MarkdownSynapse-D44fUCsP.js";import{d as s}from"./ToastMessage-DFK1mGx7.js";import{R as n,a as t}from"./RequirementItem-C4pw6YT1.js";import{P as O}from"./Paper-BiHcAXhh.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-3Ozoui7p.js";import"./VerificationSubmission-CMrrYimb.js";import"./useFiles-DjcKRMVW.js";import"./SynapseConstants-CJdz_Y6G.js";import"./OrientationBanner-COV2ej6u.js";import"./index-0vKntbcb.js";import"./index-BWKRneOV.js";import"./iframe-BhricgUu.js";import"./spreadSx-CwcO6WA9.js";import"./react-Ps5VvxXi.js";import"./FullWidthAlert-CmqIKfwS.js";import"./Alert-CYyYr4Pz.js";import"./createTheme-DvbsM9Gd.js";import"./DefaultPropsProvider-CoGa70uG.js";import"./useSlot-DDQCBXbd.js";import"./useForkRef-CoWZJBIY.js";import"./createSimplePaletteValueFilter-gXd7lDZR.js";import"./createSvgIcon-CONqxTxe.js";import"./Close-BwUlOmQW.js";import"./IconButton-cT3ZjqEA.js";import"./useTimeout-DUOAKbFB.js";import"./ButtonBase-DjJZ3Tap.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-BLDG-J.js";import"./Stack-BlF66rx8.js";import"./extendSxProp-0xdvgH0b.js";import"./getThemeProps-DAZ7QmCk.js";import"./useTheme-BoL-FF8e.js";import"./Box-DpzMXl_-.js";import"./AlertTitle-Ca_FYDp_.js";import"./Typography-CgwzPzS4.js";import"./index-CEl4alCE.js";import"./useTheme-Uk70tDF_.js";import"./ClickAwayListener-BIK4ucG1.js";import"./getReactElementRef-DZq85MjR.js";import"./index-DpNKR-l2.js";import"./index-CfKD-UMg.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CZSvpLI6.js";import"./Tooltip-Bc_4Oics.js";import"./index-CcPBZI4z.js";import"./useControlled-C7swfzWb.js";import"./Popper-DjLUfmEs.js";import"./Button-BHI08wYr.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-ZWLpjIdm.js";import"./useQuery-DF3fh9cf.js";import"./QueryClientProvider-CIZjXG1o.js";import"./Link-BQbF7JxS.js";import"./Collapse-D6LSBqLU.js";import"./_baseUniq-5n8Q7RzC.js";import"./_Uint8Array-CYD9rB-G.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CWxeF1T8.js";import"./isArray-Dxzbedgu.js";import"./_getTag-DkXw7hlR.js";import"./isEqual-Cp5UmJIB.js";import"./merge-BViOEajO.js";import"./_initCloneObject-8DjFhKUY.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BgzPRQK5.js";import"./inputBaseClasses-4XkeR1Yh.js";import"./calculateFriendlyFileSize-BQzEVkul.js";import"./CheckCircleTwoTone-D8Cok0NF.js";import"./InfoTwoTone-CrbVitJJ.js";import"./useMutation-BWW6WqJ1.js";import"./dayjs.min-CPE1_-9E.js";import"./chunk-AYJ5UCUI-I-s4kGOL.js";import"./cloneDeep-p0a3Y1D4.js";import"./Skeleton-BgFwYveO.js";import"./SkeletonButton-BAy1NXzi.js";import"./SkeletonInlineBlock-ChLWT2Sn.js";import"./SkeletonTable-DvVyn4kT.js";import"./times-DG6dpqWQ.js";import"./toInteger-BbkYeArp.js";import"./isSymbol-DWzxk1Ve.js";import"./SkeletonParagraph-CCtl_mDt.js";import"./uniqueId-BxSmf7Pl.js";import"./toString-rxXlGdQw.js";import"./CSSTransition-DJrhs0bW.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BcHsZdaf.js";import"./Avatar-Df3I4lKw.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
