import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CqSHDIow.js";import{d as s}from"./ToastMessage-DnGjsI-E.js";import{R as n,a as t}from"./RequirementItem-DKAa9RXa.js";import{P as O}from"./Paper-B6p4m8Ct.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-D9eBDzux.js";import"./SynapseConstants-BzHhhFhS.js";import"./OrientationBanner-D3KAsP4w.js";import"./index-Ceq_OOHv.js";import"./index-BAUB8VxZ.js";import"./iframe-CEgLHbLB.js";import"./spreadSx-CwcO6WA9.js";import"./react-YFCJrhYh.js";import"./FullWidthAlert-T2yM82RP.js";import"./Alert-CXVLc8vo.js";import"./createTheme-QOrAiC8v.js";import"./DefaultPropsProvider-BNmp3YDg.js";import"./useSlot-DvaOHrx3.js";import"./useForkRef-BOC0myPy.js";import"./createSimplePaletteValueFilter-Dk8LfQw2.js";import"./createSvgIcon-cYtzdOwk.js";import"./Close-NLvB7XHm.js";import"./IconButton-BFqyrDq4.js";import"./useTimeout-YGtm5ulj.js";import"./ButtonBase-Xz_eRae2.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-ePAruf6a.js";import"./Stack-CAodq4L2.js";import"./useThemeProps-Q4q-imGj.js";import"./getThemeProps-CB6wP6r1.js";import"./useTheme-CE_afK7b.js";import"./extendSxProp-68QBnwPw.js";import"./Box-CJ_mc_KC.js";import"./AlertTitle-ysdi09bF.js";import"./Typography-DBeu9HJZ.js";import"./index-Byhwwvse.js";import"./useTheme-DC3v4V5z.js";import"./ClickAwayListener-DHpiF-gd.js";import"./getReactElementRef-o5Cru5cj.js";import"./index-dVVgrbsH.js";import"./index-DZrE4oxZ.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-OlzdlbwJ.js";import"./Tooltip-D5KeB_wU.js";import"./index-BTEM2iTZ.js";import"./useControlled-CI2yt4-5.js";import"./Popper-DIHHlKWR.js";import"./Button-C6MKCi2u.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DUgtzxZD.js";import"./QueryClientProvider-Db2j_WHz.js";import"./Link-Cez3cIoy.js";import"./Collapse-DrBAZrf0.js";import"./_baseUniq-C6s3Loyy.js";import"./_Uint8Array-CY2fm9S_.js";import"./isArray-fTt9doPm.js";import"./_getTag-wZmIsRPD.js";import"./isEqual-CSeg9Uiq.js";import"./noop-DX6rZLP_.js";import"./merge-D2adZoeu.js";import"./_initCloneObject-BfCQnLPN.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D7n7NZNC.js";import"./inputBaseClasses-CVINOxDr.js";import"./calculateFriendlyFileSize-BvXrAxXk.js";import"./CheckCircleTwoTone-D4WLn7r6.js";import"./InfoTwoTone-Cd8riuW_.js";import"./useMutation-DbSD0zUI.js";import"./dayjs.min-Bq55Fdj0.js";import"./chunk-AYJ5UCUI-C9vLqfh1.js";import"./cloneDeep-D1-JOxW9.js";import"./Skeleton-C0B6B6Td.js";import"./SkeletonButton-CraWa5E9.js";import"./SkeletonInlineBlock-ChqDOmvw.js";import"./SkeletonTable-CgpiacY2.js";import"./times-Bj8erGIf.js";import"./toInteger-Dz1HtPbN.js";import"./isSymbol-BaLaqVNf.js";import"./SkeletonParagraph-DSnwyRng.js";import"./uniqueId-CZXu24eu.js";import"./toString-c2hWB_jG.js";import"./CSSTransition-9PNegUcz.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-gjfB4o2z.js";import"./Avatar-DYi9SycJ.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
