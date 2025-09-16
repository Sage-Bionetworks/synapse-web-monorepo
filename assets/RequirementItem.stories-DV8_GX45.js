import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CD3p4k-z.js";import{d as s}from"./ToastMessage-DGQyKmiI.js";import{R as n,a as t}from"./RequirementItem-CGCoeFT-.js";import{P as O}from"./Paper-C1zodLdI.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DqXWRdLP.js";import"./SynapseConstants-BcS6pAr3.js";import"./OrientationBanner-CG03QXVu.js";import"./index-BDHVF7zq.js";import"./index-CyaC6C9M.js";import"./iframe-DVO2sOA7.js";import"./spreadSx-CwcO6WA9.js";import"./react-JIiKIcnf.js";import"./FullWidthAlert-Dm9wjr4x.js";import"./Alert-CX_6dWjM.js";import"./createTheme-H1Dsx0f2.js";import"./DefaultPropsProvider-igusQ6nr.js";import"./useSlot-DtqzQqwD.js";import"./useForkRef-BdoLN6De.js";import"./createSimplePaletteValueFilter-DXhg1chW.js";import"./createSvgIcon-D26Ik47l.js";import"./Close-36WCucuH.js";import"./IconButton-B4lJlp-J.js";import"./useTimeout-DnzmxlwV.js";import"./ButtonBase-DeKe3_Pq.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-HR6r5QDp.js";import"./Stack-DuNoS5UG.js";import"./extendSxProp-aFKfhcg8.js";import"./getThemeProps-DUb0x1pd.js";import"./useTheme-2WTqdYsP.js";import"./Box-TtuRu3g-.js";import"./AlertTitle-LRTkPzvh.js";import"./Typography-st_y82mL.js";import"./index-CV5xniWo.js";import"./useTheme-Dzwgi_yn.js";import"./ClickAwayListener-DJZi5PU9.js";import"./getReactElementRef-C9kSLM4V.js";import"./index-Oc3CgUQO.js";import"./index-DxB4MPXu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-UQ58OAOl.js";import"./Tooltip-6R1JgVQo.js";import"./index-CXR7n0Cv.js";import"./useControlled-j4hQ7Q1o.js";import"./Popper-ROR_DG8Z.js";import"./Button-DY4-erp3.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CHsUcFhx.js";import"./QueryClientProvider-B3zHAd0y.js";import"./Link-BW12XdVC.js";import"./Collapse-BynCIxJe.js";import"./_baseUniq-D4p32fKM.js";import"./_Uint8Array-Cy6t9XcF.js";import"./isArray-Cc0W7s7X.js";import"./_getTag-BAhJrBE8.js";import"./isEqual-BykgLa6_.js";import"./merge-7a-O-WLR.js";import"./_initCloneObject-CGLRXhCQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-YGgjrwuC.js";import"./inputBaseClasses-aQr5mJnX.js";import"./calculateFriendlyFileSize-JYrc0r5a.js";import"./CheckCircleTwoTone-BH5aKRhu.js";import"./InfoTwoTone-CoaCnS3M.js";import"./useMutation-BAQZYviv.js";import"./dayjs.min-BArBwRfF.js";import"./chunk-AYJ5UCUI-B1YFZTwg.js";import"./cloneDeep-BLJr3MDv.js";import"./Skeleton-BHuZd6hg.js";import"./SkeletonButton-CL1lXRyE.js";import"./SkeletonInlineBlock-Cu9uqQ8F.js";import"./SkeletonTable-D3Bj0gXB.js";import"./times-DCSZbjZG.js";import"./toInteger-CcBmA2Tm.js";import"./isSymbol-DmZ26p2l.js";import"./SkeletonParagraph-CqYmfj3e.js";import"./uniqueId-DnPE9Qyw.js";import"./toString-CnzATqzj.js";import"./CSSTransition-pR3ZA1Bg.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B1jxoEsm.js";import"./Avatar-CYLUF1__.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
