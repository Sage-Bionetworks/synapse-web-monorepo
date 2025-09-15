import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-D-tOs994.js";import{M as x}from"./MarkdownSynapse-C-2zgFaM.js";import{d as s}from"./ToastMessage-BNK30Hyw.js";import{R as n,a as t}from"./RequirementItem-Ce5gWQtZ.js";import{P as O}from"./Paper-DlQITwJL.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BIJh-7D7.js";import"./VerificationSubmission-DHtRxRPZ.js";import"./useFiles-B0U4gzY5.js";import"./SynapseConstants-Dtw8JT9K.js";import"./OrientationBanner-BFfM4kQK.js";import"./index-o3mbyDJ_.js";import"./index-C2PZBrLv.js";import"./iframe-CNTF6X_t.js";import"./spreadSx-CwcO6WA9.js";import"./react-C1E0WWj9.js";import"./FullWidthAlert-C_J5Noie.js";import"./Alert-DNb5zPwV.js";import"./createTheme-D-kospWj.js";import"./DefaultPropsProvider-CC2ZtPmq.js";import"./useSlot-BoukHlmH.js";import"./useForkRef-CUmErhp7.js";import"./createSimplePaletteValueFilter-D08C6jui.js";import"./createSvgIcon-CZi17tUa.js";import"./Close-raPQlKpe.js";import"./IconButton-DL9Auw19.js";import"./useTimeout-BUOTtkI_.js";import"./ButtonBase-ClEqCu4q.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Ce_-6k31.js";import"./Stack-Dy4-WgM_.js";import"./extendSxProp-DCZvLCZ1.js";import"./getThemeProps-BghImWoL.js";import"./useTheme-CnkkHqH9.js";import"./Box-YD4QvbDf.js";import"./AlertTitle-CJceuYZo.js";import"./Typography-5nQ2YQd7.js";import"./index-D39n2xwi.js";import"./useTheme-CWrjHpSC.js";import"./ClickAwayListener-C_f-0IT0.js";import"./getReactElementRef-QZCM3h1T.js";import"./index-BkdGZOWW.js";import"./index-D7wXRBOq.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D045avyu.js";import"./Tooltip-BP3wuRWq.js";import"./index-DgnACGHd.js";import"./useControlled-Chb41gWY.js";import"./Popper-DFXRF7a3.js";import"./Button-c0UHW0MR.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DP1EOPFU.js";import"./useQuery-DZqyF7W4.js";import"./QueryClientProvider-CTUgZ56q.js";import"./Link-S3cKxk76.js";import"./Collapse-B3YoQXgf.js";import"./_baseUniq-BRoY8VEw.js";import"./_Uint8Array-B4xmgUBf.js";import"./isArray-42N_5E-2.js";import"./_getTag-LSp1chIl.js";import"./isEqual-CMiPFqsp.js";import"./merge-FniWYtdi.js";import"./_initCloneObject-R9J6iBsV.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CUlhCYG9.js";import"./inputBaseClasses-DHiWbVro.js";import"./calculateFriendlyFileSize-B_omjKN-.js";import"./CheckCircleTwoTone-CiIEkiU2.js";import"./InfoTwoTone-60mfq9v0.js";import"./useMutation-CBu7Udma.js";import"./dayjs.min-CHEXfb8p.js";import"./chunk-AYJ5UCUI-Cxe4yrTd.js";import"./cloneDeep-DabqN8bB.js";import"./Skeleton-L-wdtKFv.js";import"./SkeletonButton-B9pJHKOb.js";import"./SkeletonInlineBlock-BV0-yJxG.js";import"./SkeletonTable-BYzdqBTE.js";import"./times-e_ekP7_6.js";import"./toInteger-C3HrJcJD.js";import"./isSymbol-BlIXNtev.js";import"./SkeletonParagraph-DngpqyaY.js";import"./uniqueId-C1XzCJDS.js";import"./toString-CIV4V4cB.js";import"./CSSTransition-DWqbDEh4.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-CFChSlCZ.js";import"./Avatar-DjfDz09D.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
