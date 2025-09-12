import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-D-tOs994.js";import{M as x}from"./MarkdownSynapse-DE5wmMdD.js";import{d as s}from"./ToastMessage-BNnt-EXh.js";import{R as n,a as t}from"./RequirementItem-By7i5BA-.js";import{P as O}from"./Paper-BPJSyr-F.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BIJh-7D7.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./useFiles-Db54t-tY.js";import"./SynapseConstants-DaRxMVmF.js";import"./OrientationBanner-B1qNwquP.js";import"./index-DGL3HO56.js";import"./index-BuJDQnUk.js";import"./iframe-Cr6ezPsl.js";import"./spreadSx-CwcO6WA9.js";import"./react-AlFvuvNv.js";import"./FullWidthAlert-mRZoSYPq.js";import"./Alert-Be0A-LgM.js";import"./createTheme-BK6UElHJ.js";import"./DefaultPropsProvider-Dvr-tTK6.js";import"./useSlot-DalP7ee8.js";import"./useForkRef-CF7zyPlu.js";import"./createSimplePaletteValueFilter-Cpx97Rr9.js";import"./createSvgIcon-D2yClPAP.js";import"./Close-UkcISrWM.js";import"./IconButton-Ck0nC-my.js";import"./useTimeout-DM9L0rxB.js";import"./ButtonBase-D82xi4uS.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DcfM6f79.js";import"./Stack-B7Qpj5Ki.js";import"./extendSxProp-DLwRLLo9.js";import"./getThemeProps-sKYYbfmA.js";import"./useTheme-C-Nrlkd0.js";import"./Box-D7QdnBU4.js";import"./AlertTitle-C-dr4K0A.js";import"./Typography-BHnBpTHA.js";import"./index-BKX1-w9C.js";import"./useTheme-B7yNuM8W.js";import"./ClickAwayListener-CmfTuM2N.js";import"./getReactElementRef-BRpsy5_3.js";import"./index-DLfqkzAN.js";import"./index-YcRuu0bH.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D254RFQI.js";import"./Tooltip-2iC1TBx7.js";import"./index-Ci5oPOxK.js";import"./useControlled-DgIckgW6.js";import"./Popper-CucXU77N.js";import"./Button-DDnrRDpv.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-DYvqTKcd.js";import"./QueryClientProvider-D35J8jSd.js";import"./Link-B4y9rQD-.js";import"./Collapse-Bd3x3sfg.js";import"./_baseUniq-BL-JTcV7.js";import"./_Uint8Array-okef9fpr.js";import"./isArray-CQL2Omy9.js";import"./_getTag-oDqqQs_x.js";import"./isEqual-D3NjyQZR.js";import"./merge-d6zHDzVE.js";import"./_initCloneObject-zeb2rLvj.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B3b9dqgH.js";import"./inputBaseClasses-BKILOaiU.js";import"./calculateFriendlyFileSize-D-5lh9-e.js";import"./CheckCircleTwoTone-BWGId32i.js";import"./InfoTwoTone-BSHHymaY.js";import"./useMutation-d2WF_4zr.js";import"./dayjs.min-D3lvmW2A.js";import"./chunk-AYJ5UCUI-qjDTf1To.js";import"./cloneDeep-Ct9R0eu9.js";import"./Skeleton-B7QVWXYf.js";import"./SkeletonButton-AU737DlS.js";import"./SkeletonInlineBlock-CFBBV12t.js";import"./SkeletonTable-BcYRfnrM.js";import"./times-CowncrEP.js";import"./toInteger-XmTA-Ygd.js";import"./isSymbol-CoBgEu09.js";import"./SkeletonParagraph-DYb909WB.js";import"./uniqueId-NfKwKjxg.js";import"./toString-DKSUWCSU.js";import"./CSSTransition-c0yFd_rl.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-V48amtGw.js";import"./Avatar-DNTmdeNR.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
