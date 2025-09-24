import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DYrbXNwN.js";import{M as x}from"./MarkdownSynapse-U32NW5Az.js";import{d as s}from"./ToastMessage-ScE-VJij.js";import{R as n,a as t}from"./RequirementItem-FSxHzwuh.js";import{P as O}from"./Paper-CscxC-nZ.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-BSSHlK6B.js";import"./VerificationSubmission-BDh1zA9f.js";import"./useFiles-CoUOOnVS.js";import"./SynapseConstants-aXu1tDOr.js";import"./OrientationBanner-BWBFJ0yy.js";import"./index-e6oeiiS4.js";import"./index-CHVMFH7M.js";import"./iframe-ClVMoJvW.js";import"./spreadSx-CwcO6WA9.js";import"./react-CNW0viHv.js";import"./FullWidthAlert-D-Y85AGg.js";import"./Alert-DBkyC7v2.js";import"./createTheme-Dh0f-PI4.js";import"./DefaultPropsProvider-CBzoMWiB.js";import"./useSlot-CPBRkNk2.js";import"./useForkRef-DoDgdNBT.js";import"./createSimplePaletteValueFilter-CJ4RsiJ_.js";import"./createSvgIcon-1VmyitDI.js";import"./Close-DT5SYQ5j.js";import"./IconButton-CQJFqUxJ.js";import"./useTimeout-_MPtwmvh.js";import"./ButtonBase-C6tiUzg6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DssauoHK.js";import"./Stack-DNPip1HK.js";import"./extendSxProp-DlCy7HXm.js";import"./getThemeProps-Bw20A-vb.js";import"./useTheme-CXK0bmkJ.js";import"./Box-3JYTO1WU.js";import"./AlertTitle-T3qK4lpH.js";import"./Typography-CceGoqtm.js";import"./index-zQj8wIhf.js";import"./useTheme-xwvFlxes.js";import"./ClickAwayListener-BYjt3j0D.js";import"./getReactElementRef-ERmAiXQ4.js";import"./index-BxoVh5lP.js";import"./index-D0ejypGL.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-BlQIFe45.js";import"./Tooltip-Bsspg9XV.js";import"./index-YAqICTwX.js";import"./useControlled-CMLV-P_i.js";import"./Popper-jRWuHQW0.js";import"./Button-D88emua3.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DRP9e10O.js";import"./QueryClientProvider-eW7_5tl_.js";import"./Link-DXQkQAZf.js";import"./Collapse-CQU-jh41.js";import"./_baseUniq-ChE4L4Qu.js";import"./_Uint8Array-W6b_8ZQL.js";import"./isArray-D2RVMlgB.js";import"./_getTag-C3EbY4Ni.js";import"./isEqual-CYsEo0q4.js";import"./merge-C0nipVuY.js";import"./_initCloneObject-CMOQzCqQ.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-B2i4us37.js";import"./inputBaseClasses-DwHiXH96.js";import"./calculateFriendlyFileSize-BnpOZOH-.js";import"./CheckCircleTwoTone-DFLozXHx.js";import"./InfoTwoTone-DjBjCg4X.js";import"./useMutation-Db9mxQyg.js";import"./dayjs.min-BdWLMgSP.js";import"./chunk-AYJ5UCUI-6ko_yZTB.js";import"./cloneDeep-BpRUwq2a.js";import"./Skeleton-CEGItXWQ.js";import"./SkeletonButton-Bd_vzPoo.js";import"./SkeletonInlineBlock-DBsZPe8E.js";import"./SkeletonTable-Mvokz47V.js";import"./times-CfRbgfJN.js";import"./toInteger-CjWX7q7R.js";import"./isSymbol-v-QfZ1AY.js";import"./SkeletonParagraph-Ds9YC-ap.js";import"./uniqueId-CYzg0bjW.js";import"./toString-BGPxifEX.js";import"./CSSTransition-FYkgH4k6.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BWbnt7vY.js";import"./Avatar-_RS5lqdT.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
