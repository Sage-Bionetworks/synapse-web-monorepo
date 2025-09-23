import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-DVnd68Dv.js";import{d as s}from"./ToastMessage-CGEj9ykc.js";import{R as n,a as t}from"./RequirementItem-D7C4LSPJ.js";import{P as O}from"./Paper-DkuZylpL.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-DGDTxZYQ.js";import"./SynapseConstants-B1E3c0aq.js";import"./OrientationBanner-D7k3-QFh.js";import"./index-CmXUi2FL.js";import"./index-Bx7qxNz6.js";import"./iframe-oxiAqt3n.js";import"./spreadSx-CwcO6WA9.js";import"./react-DdL6hUDw.js";import"./FullWidthAlert-DNYkg2ty.js";import"./Alert-CrPo9ras.js";import"./createTheme-CIw9KUZV.js";import"./DefaultPropsProvider-Bm9EWdCB.js";import"./useSlot-Do7Q0LkH.js";import"./useForkRef-C--zO68W.js";import"./createSimplePaletteValueFilter-C7kcEEIl.js";import"./createSvgIcon-D4V7E9uK.js";import"./Close-oipHD91r.js";import"./IconButton-Dm-Kouzk.js";import"./useTimeout-DnSoaJbv.js";import"./ButtonBase-BuLMg0uO.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CfiXH_Rk.js";import"./Stack-BYBjgcjC.js";import"./extendSxProp-DIhkEDJC.js";import"./getThemeProps-DEWIJyCD.js";import"./useTheme-S-XYqDcy.js";import"./Box-DZHSTnWO.js";import"./AlertTitle-jBrq7hxW.js";import"./Typography-7uTmWE9G.js";import"./index-DZIDIo0P.js";import"./useTheme-DtItw25X.js";import"./ClickAwayListener-5G5OKMq_.js";import"./getReactElementRef-pzoxrQJz.js";import"./index-DBYClo48.js";import"./index-xoTw1gRu.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BWERmVKf.js";import"./Tooltip-D1wdw83J.js";import"./index-ka5kuvCs.js";import"./useControlled-CBZmQst1.js";import"./Popper-CHWsK8nH.js";import"./Button-DC0Z6N20.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-C6S4eixI.js";import"./QueryClientProvider-C1R7g-OG.js";import"./Link-CLP81lMM.js";import"./Collapse-CAb26MWD.js";import"./_baseUniq-BdQbLaOf.js";import"./_Uint8Array-BLZKSuky.js";import"./isArray-qqpWvSAV.js";import"./_getTag-un9JyNDF.js";import"./isEqual-BdjFDA1t.js";import"./merge-CxrTOCc8.js";import"./_initCloneObject-BaOl87LU.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-lUhhxWxn.js";import"./inputBaseClasses-BX8uqVyC.js";import"./calculateFriendlyFileSize-Bn7tHELT.js";import"./CheckCircleTwoTone-Bzxp8M2J.js";import"./InfoTwoTone-CBQ80vHJ.js";import"./useMutation-CK6zHCSY.js";import"./dayjs.min-CnWJMgNC.js";import"./chunk-AYJ5UCUI-X-KGLRdk.js";import"./cloneDeep-C0UUJMWd.js";import"./Skeleton-IyX7bYK-.js";import"./SkeletonButton-Bym4su5K.js";import"./SkeletonInlineBlock-BBVXXZdM.js";import"./SkeletonTable-C14xsmpV.js";import"./times-C1PArz_4.js";import"./toInteger-Cp3hQ31E.js";import"./isSymbol-CNws_ZIg.js";import"./SkeletonParagraph-DjkR0pZx.js";import"./uniqueId-D5oCbJE9.js";import"./toString-BSE71CYf.js";import"./CSSTransition-DPRcwDFS.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-By02jjBh.js";import"./Avatar-DUJS-gcn.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
