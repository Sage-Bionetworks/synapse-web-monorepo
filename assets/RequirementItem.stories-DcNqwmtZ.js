import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-DBBMjrcw.js";import{d as s}from"./ToastMessage-DFWwSy6l.js";import{R as n,a as t}from"./RequirementItem-WufpCrGI.js";import{P as O}from"./Paper-D6s_ZdQS.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-Byx12y_p.js";import"./SynapseConstants-fQXdVJ-c.js";import"./OrientationBanner-Y2-1qgzb.js";import"./index-Co0cmdyX.js";import"./index-CnKwGr1y.js";import"./iframe-BU8JiGFx.js";import"./spreadSx-CwcO6WA9.js";import"./react-DfG7gNXj.js";import"./FullWidthAlert-DzkgBCTU.js";import"./Alert-Bmd5ZNXS.js";import"./createTheme-rlsKoCaI.js";import"./DefaultPropsProvider-DOcNzQ9R.js";import"./useSlot-yZIb9gbZ.js";import"./useForkRef-dt3m--Ki.js";import"./createSimplePaletteValueFilter-1OM3Zajm.js";import"./createSvgIcon-Bta1rE4w.js";import"./Close-CsGLNGYR.js";import"./IconButton-DOb2mOZL.js";import"./useTimeout-BErCNBpu.js";import"./ButtonBase-B9wNdFQY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CaLxGmIR.js";import"./Stack-DBk8sxSV.js";import"./extendSxProp-CwDJNcxu.js";import"./getThemeProps-BQ8nwEqe.js";import"./useTheme-R60J1bs9.js";import"./Box-BBXWKHrY.js";import"./AlertTitle-DBXhSchx.js";import"./Typography-eceePh8m.js";import"./index-Bqlegoam.js";import"./useTheme-IAvPa7pt.js";import"./ClickAwayListener-BggZ74LF.js";import"./getReactElementRef-qmrSwM0o.js";import"./index-CrVRpWIU.js";import"./index-qzqpRhr6.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BmG_Rl5o.js";import"./Tooltip-CcQtZRnu.js";import"./index-C6Kpllp9.js";import"./useControlled-7Ocvyg46.js";import"./Popper-Bjhq1YSD.js";import"./Button-BtM-gMQx.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DUVBYySx.js";import"./QueryClientProvider-B34cSsln.js";import"./Link-BqIyIHSp.js";import"./Collapse-B35jjpe2.js";import"./_baseUniq-8lFMhfOv.js";import"./_Uint8Array-DDgzCeGk.js";import"./isArray-C-J5KbEh.js";import"./_getTag-ByxgOAps.js";import"./isEqual-leovmj5N.js";import"./merge-Bft55LJ1.js";import"./_initCloneObject-Dnsp8Jos.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D7Joq1MA.js";import"./inputBaseClasses-BquIgVUE.js";import"./calculateFriendlyFileSize-DlivtD4b.js";import"./CheckCircleTwoTone-BvbSxHSY.js";import"./InfoTwoTone-DZpdjobH.js";import"./useMutation-Czr-HM9X.js";import"./dayjs.min-CJD9nsEW.js";import"./chunk-AYJ5UCUI-DiOLbsSA.js";import"./cloneDeep-BYe4LT1C.js";import"./Skeleton-Clk01pg8.js";import"./SkeletonButton-DTKh801I.js";import"./SkeletonInlineBlock-_jSHsMdD.js";import"./SkeletonTable-DQeGSyMS.js";import"./times-DhA2AJrc.js";import"./toInteger-DgyqgABQ.js";import"./toNumber-C6EYWoaS.js";import"./isSymbol-CoJzd8IK.js";import"./SkeletonParagraph-D6Bzg657.js";import"./uniqueId-Bz1e8r9y.js";import"./toString-DlBqVtu9.js";import"./CSSTransition-CLDNJY4v.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-9LSHzQ80.js";import"./Avatar-BfhgzPPg.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
