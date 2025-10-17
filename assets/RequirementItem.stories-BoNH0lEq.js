import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-BI5Y3gcr.js";import{d as s}from"./ToastMessage-BWzLohgB.js";import{R as n,a as t}from"./RequirementItem-Bb4kFL8C.js";import{P as O}from"./Paper-C8Tlt3sf.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BCul-Kto.js";import"./SynapseConstants-BhTPdqIw.js";import"./OrientationBanner-CpM7feV-.js";import"./index-Dde0MMRw.js";import"./index-I47wiYIl.js";import"./iframe-BIRVXKtz.js";import"./spreadSx-CwcO6WA9.js";import"./react-57OIsDQs.js";import"./FullWidthAlert-BdZiiicp.js";import"./Alert-LFuot4nI.js";import"./createTheme-pm8LRWbk.js";import"./DefaultPropsProvider-Co2U1lMc.js";import"./useSlot-DuiEseUx.js";import"./useForkRef-F5lBvnNp.js";import"./createSimplePaletteValueFilter-COdju6vm.js";import"./createSvgIcon-DyrDxnX7.js";import"./Close-J--QK8Cg.js";import"./IconButton-RK8r0xoX.js";import"./useTimeout-15wWwOfh.js";import"./ButtonBase-DFqyxasY.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DlzCVn2P.js";import"./Stack-BN2JubgB.js";import"./useThemeProps-C7_WbH6p.js";import"./getThemeProps-C5epIPj9.js";import"./useTheme-BOR1hqnI.js";import"./extendSxProp-B3jQw9QO.js";import"./Box-eSr-YAL7.js";import"./AlertTitle-CG27oB8x.js";import"./Typography-CZHcTN_R.js";import"./index-CXcybxh3.js";import"./useTheme-Bjk-I74T.js";import"./ClickAwayListener-CXjYouvN.js";import"./getReactElementRef-yWR0RLTL.js";import"./index-nu_gismG.js";import"./index-DSWuzwrE.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BAInw1zM.js";import"./Tooltip-CxD1G1sD.js";import"./index-B93jVWeB.js";import"./useControlled-d8tFX0ZU.js";import"./Popper-CtTY4Mia.js";import"./Button-BI3Kszfw.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-D4xRRBQP.js";import"./QueryClientProvider-dbCAoZAQ.js";import"./Link-DKOI-_XW.js";import"./Collapse-CHjz_AqJ.js";import"./_baseUniq-1B8GuVm1.js";import"./_Uint8Array-DS-5GFdR.js";import"./isArray-Ctrc6fnc.js";import"./_getTag-CleDswLE.js";import"./isEqual-CXvU_izF.js";import"./noop-DX6rZLP_.js";import"./merge-CQisCZUP.js";import"./_initCloneObject-CR2LMhD8.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BNmhwNHo.js";import"./inputBaseClasses-ejL_XemP.js";import"./calculateFriendlyFileSize-tXFygyJT.js";import"./CheckCircleTwoTone-BrqBPp1W.js";import"./InfoTwoTone-CFBOiOe6.js";import"./useMutation-ChkO_Gzl.js";import"./dayjs.min-BvbWT1W4.js";import"./chunk-AYJ5UCUI-COIl7r1G.js";import"./cloneDeep-CC58hguY.js";import"./Skeleton-CgDjgcaK.js";import"./SkeletonButton-DDP6gYj6.js";import"./SkeletonInlineBlock-DYNPLLaK.js";import"./SkeletonTable-C1x9u-pO.js";import"./times-BW9WjH4U.js";import"./toInteger-Sos9jOwB.js";import"./isSymbol-Bh97b_Nu.js";import"./SkeletonParagraph-DjzEQ1Ih.js";import"./uniqueId-Cje7sxZB.js";import"./toString-98Z2_ExE.js";import"./CSSTransition-D72lFsCz.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-DDorp9IM.js";import"./Avatar-BjsbZ-jM.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
