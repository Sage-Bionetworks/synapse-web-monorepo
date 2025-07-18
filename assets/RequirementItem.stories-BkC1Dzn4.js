import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-CPrB_Pak.js";import{M as x}from"./MarkdownSynapse-CbBFCFC6.js";import{d as s}from"./ToastMessage-BCfd6Eu9.js";import{R as n,a as t}from"./RequirementItem-DdHL8GRS.js";import{P as O}from"./Paper-BVfddmgd.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-ByLg6Hzw.js";import"./VerificationSubmission-NmfK1W18.js";import"./useFiles-C1KqnXzG.js";import"./SynapseConstants-Cp6uR9La.js";import"./OrientationBanner-YDuv3oL5.js";import"./index-DWu3LH1b.js";import"./index-C045nZJo.js";import"./iframe-Bg19SH8_.js";import"./spreadSx-CwcO6WA9.js";import"./react-CO_fLa7Q.js";import"./FullWidthAlert-MQrW5CBX.js";import"./Alert-DHIs3rBU.js";import"./createTheme-DHuxjkGy.js";import"./DefaultPropsProvider-DLZzrGai.js";import"./useSlot-6MrHq_bU.js";import"./useForkRef-CE4bbMId.js";import"./createSimplePaletteValueFilter-BIfczF7D.js";import"./createSvgIcon-CKY2FmG4.js";import"./Close-C6mZFMHo.js";import"./IconButton-BMZtRkCL.js";import"./useTimeout-CveBny2q.js";import"./ButtonBase-3B5SDrqt.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-5pfiVIje.js";import"./Stack-CxNlQAPN.js";import"./extendSxProp-DKjB3YeG.js";import"./getThemeProps-CfQcXNXI.js";import"./useTheme-DBZnhqg9.js";import"./Box-BZQooeEd.js";import"./AlertTitle-CniBYMPE.js";import"./Typography-DFjn6MN_.js";import"./index-caYvnNGc.js";import"./useTheme-0wGv3fbU.js";import"./ClickAwayListener-Dicgb---.js";import"./getReactElementRef-DrfBVC7T.js";import"./index--7Wf1_nO.js";import"./index-CKs0NhYm.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Di0MZsBA.js";import"./Tooltip-CGZlolgu.js";import"./index-LRGMY2LF.js";import"./useControlled-BZc2g0D3.js";import"./Popper-CIekPOcM.js";import"./Button-h-3-8qlu.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-BvUHfP_r.js";import"./QueryClientProvider-Dnbczliu.js";import"./Link-BxbwKL-u.js";import"./Collapse-CZvLj_1L.js";import"./_baseUniq-DNUqmfhB.js";import"./_Uint8Array-_PB4x22l.js";import"./isArray-UwOYPmBF.js";import"./_getTag-D36lfOnb.js";import"./isEqual-D810Zby2.js";import"./merge-DxqqUWyI.js";import"./_initCloneObject-BTciHt-h.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CzZPgyvZ.js";import"./inputBaseClasses-DrhMVsbw.js";import"./calculateFriendlyFileSize-jiJnc5Ro.js";import"./CheckCircleTwoTone-C0gUn0WH.js";import"./InfoTwoTone-6D-QNEwY.js";import"./useMutation-BfL6Bx-Y.js";import"./dayjs.min-5GTZRxmA.js";import"./chunk-AYJ5UCUI-CPY0ZgBB.js";import"./cloneDeep-DSr3G_r4.js";import"./Skeleton-B8tOQT9J.js";import"./SkeletonButton-BqxpLUoG.js";import"./SkeletonInlineBlock-HBbsDZOV.js";import"./SkeletonTable-BrQaD9BF.js";import"./times-BBgjfgu_.js";import"./toInteger-nT4YfLus.js";import"./toNumber-BQwzKCMl.js";import"./isSymbol-BYv_Xkrq.js";import"./SkeletonParagraph-ewLNTMzz.js";import"./uniqueId-CmpGj1B7.js";import"./toString-CgKdsauc.js";import"./CSSTransition-5z9ruDEu.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B2-dcyR-.js";import"./Avatar-CuRUu_NL.js";const cr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
