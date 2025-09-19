import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-CWhYYCmk.js";import{d as s}from"./ToastMessage-DL6ZLg2U.js";import{R as n,a as t}from"./RequirementItem-IKegTnGd.js";import{P as O}from"./Paper-Q2IEgrqh.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-BHvy6J25.js";import"./SynapseConstants-DhtbM-hg.js";import"./OrientationBanner-BMOzWmyx.js";import"./index-uswm353_.js";import"./index-WFGZkfGQ.js";import"./iframe-DE8stXB9.js";import"./spreadSx-CwcO6WA9.js";import"./react-ChMSZi63.js";import"./FullWidthAlert-Cw7ejPgA.js";import"./Alert-DCRiEVnW.js";import"./createTheme-5O93HVJl.js";import"./DefaultPropsProvider-CWWNlooN.js";import"./useSlot-DU_7KX09.js";import"./useForkRef-CyYB5Kx6.js";import"./createSimplePaletteValueFilter-OVNBhgRo.js";import"./createSvgIcon-C7Y92pv9.js";import"./Close-CNpDafw2.js";import"./IconButton-CS3CoVBF.js";import"./useTimeout-DUcSAsaz.js";import"./ButtonBase-iE-VM-jO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-Dvg-ZYdT.js";import"./Stack-D-2jqZf5.js";import"./extendSxProp-BIfBmP65.js";import"./getThemeProps-B78isNmh.js";import"./useTheme-CrHUFg5h.js";import"./Box-GHDzk8iC.js";import"./AlertTitle-C-svQxOb.js";import"./Typography-CbhbYSPG.js";import"./index-CNoXD2e7.js";import"./useTheme-DTvwicwG.js";import"./ClickAwayListener-FMjLV4qb.js";import"./getReactElementRef-oicLdd8e.js";import"./index-B1vVZwXe.js";import"./index-DLljrjFI.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CNV_tGPV.js";import"./Tooltip-D6w5RXxh.js";import"./index-CkHOP_FM.js";import"./useControlled-Bf8XxeTv.js";import"./Popper-CXSQlPF7.js";import"./Button-XWZFAulY.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-CC_Fs9a3.js";import"./QueryClientProvider-5Pkappvb.js";import"./Link-DULQ-qik.js";import"./Collapse-DBF0QCN7.js";import"./_baseUniq-DXCYBlUE.js";import"./_Uint8Array-CbNzLaeU.js";import"./isArray-CRez7Py_.js";import"./_getTag-Bx5kgCoR.js";import"./isEqual-BCKPWyF7.js";import"./merge-BlVKkzie.js";import"./_initCloneObject-Cjggmh7c.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-KSG4UTe1.js";import"./inputBaseClasses-D4jRMdEi.js";import"./calculateFriendlyFileSize-CX9y1s78.js";import"./CheckCircleTwoTone-BuWLjQ0I.js";import"./InfoTwoTone-Cayf5KPj.js";import"./useMutation-CFvMxEo-.js";import"./dayjs.min-Cht117Nf.js";import"./chunk-AYJ5UCUI-DKsCyvUv.js";import"./cloneDeep-DHY4QwXX.js";import"./Skeleton-Cu9UBnpu.js";import"./SkeletonButton-BCDfTIrY.js";import"./SkeletonInlineBlock-ChnNTDgr.js";import"./SkeletonTable-03HoaYMG.js";import"./times-CBelmJGF.js";import"./toInteger-ByBoX7aE.js";import"./isSymbol-CKen0w62.js";import"./SkeletonParagraph-CBnhp1R-.js";import"./uniqueId-T-ppXWxX.js";import"./toString-Sf6ezrgQ.js";import"./CSSTransition-DzQqCEAf.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-B3qrWzhn.js";import"./Avatar-VnImN-Hl.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
