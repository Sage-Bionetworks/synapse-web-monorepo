import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-D60oF5Ur.js";import{d as s}from"./ToastMessage-BFYlhcLE.js";import{R as n,a as t}from"./RequirementItem-991FttRW.js";import{P as O}from"./Paper-_pmqSPmr.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BMNFt-8g.js";import"./SynapseConstants-ruF53FsM.js";import"./OrientationBanner-DeOiH3yd.js";import"./index-D5GYg9hQ.js";import"./index-BD8T7zq6.js";import"./iframe-BCztISwF.js";import"./spreadSx-CwcO6WA9.js";import"./react-BmWlFtp9.js";import"./FullWidthAlert-DeCznv24.js";import"./Alert-DXEjMnWz.js";import"./createTheme-CTBtZ_cy.js";import"./DefaultPropsProvider-B9JV_CUS.js";import"./useSlot-fds4Yeop.js";import"./useForkRef-C_rm1XEs.js";import"./createSimplePaletteValueFilter-DeoxNqRG.js";import"./createSvgIcon-Pv2fR8IF.js";import"./Close-H9g7nKcO.js";import"./IconButton-BRuECVtO.js";import"./useTimeout-0eXle5dh.js";import"./ButtonBase-DzeUsUkN.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BxBCqc4_.js";import"./Stack-l4t04YEH.js";import"./useThemeProps-CGtS0plU.js";import"./getThemeProps-Fi8dnZUZ.js";import"./useTheme-DFpCyL4Y.js";import"./extendSxProp-iPj9BVlN.js";import"./Box-DQV0lxds.js";import"./AlertTitle-Bm25oWD_.js";import"./Typography-Cxv8qnpg.js";import"./index-CIL5iEm5.js";import"./useTheme-CQSNJTUG.js";import"./ClickAwayListener-D0w7bfZZ.js";import"./getReactElementRef-JB-rNIYf.js";import"./index-C6FD6fLo.js";import"./index-CLf-jdg9.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BkapnwIp.js";import"./Tooltip-BrvlfHcB.js";import"./index-CKxt-HAj.js";import"./useControlled-BDiO9zgL.js";import"./Popper-CPoBNdFa.js";import"./Button-D3ajUzUs.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DQtNzDr0.js";import"./QueryClientProvider-DStyJqXK.js";import"./Link-DckGLzQN.js";import"./Collapse-EXdIFGDf.js";import"./_baseUniq-4-5ousxn.js";import"./_Uint8Array-C6Z07qUy.js";import"./isArray-DGqRpJYm.js";import"./_getTag-Bu_44Cjs.js";import"./isEqual-BwYcoTf8.js";import"./noop-DX6rZLP_.js";import"./merge-DiV7m9Pu.js";import"./_initCloneObject-CmXH6YeZ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DlP0g-24.js";import"./inputBaseClasses-BQe-pxTr.js";import"./calculateFriendlyFileSize-Dks1cdcZ.js";import"./CheckCircleTwoTone-HUw_GkW9.js";import"./InfoTwoTone-DFOS-ggU.js";import"./useMutation-O6IXzSsV.js";import"./dayjs.min-B3-A15Bv.js";import"./chunk-AYJ5UCUI-BsG23He-.js";import"./cloneDeep-f1dMV6ix.js";import"./Skeleton-whSO5RLo.js";import"./SkeletonButton-BcbTJMaZ.js";import"./SkeletonInlineBlock-OvC2sURA.js";import"./SkeletonTable-BzjYkWzl.js";import"./times-BbQaFKf0.js";import"./toInteger-_gmo1qyA.js";import"./isSymbol-DLj05rTF.js";import"./SkeletonParagraph-dN9CjyMk.js";import"./uniqueId-B4WivU2M.js";import"./toString-DQNT6C4h.js";import"./CSSTransition-DlYw-11x.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CM5T4G5u.js";import"./Avatar-CBC2ZJPh.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
