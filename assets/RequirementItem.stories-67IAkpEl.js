import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-BtqUTsq3.js";import{d as s}from"./ToastMessage-CPDwrlQN.js";import{R as n,a as t}from"./RequirementItem-H5_veD0n.js";import{P as O}from"./Paper-BMQ9bliB.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-C-nnLZH6.js";import"./SynapseConstants-Bd4_h58t.js";import"./OrientationBanner-cbKX41Kv.js";import"./index-Ce-DoZYC.js";import"./index-Bc3skFOa.js";import"./iframe-BtSaXkuM.js";import"./spreadSx-CwcO6WA9.js";import"./react-7i1wTRCj.js";import"./FullWidthAlert-DDY--klD.js";import"./Alert-CawsPOmr.js";import"./createTheme-BueTOkol.js";import"./DefaultPropsProvider-BpRUECsb.js";import"./useSlot-DzYM2NXh.js";import"./useForkRef-B-XQJunB.js";import"./createSimplePaletteValueFilter-C0etH01x.js";import"./createSvgIcon-DuBP14r-.js";import"./Close-B4YztUj-.js";import"./IconButton-DhrIHtmc.js";import"./useTimeout-CmS7swDh.js";import"./ButtonBase-Dth68TUA.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-cVYl0jD1.js";import"./Stack-SJgolWM_.js";import"./extendSxProp-A8hSLdSh.js";import"./getThemeProps-tTcTqxCF.js";import"./useTheme-CESjAg12.js";import"./Box-BM0uF6eN.js";import"./AlertTitle-B_ZKmDYB.js";import"./Typography-CCq_2k8T.js";import"./index-hdfdv7Z8.js";import"./useTheme-BdsV2UtN.js";import"./ClickAwayListener-DkMj7hy7.js";import"./getReactElementRef-BshGVvhA.js";import"./index-B3GonlML.js";import"./index-B_yUMdDC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-LPswSJij.js";import"./Tooltip-BJmPo455.js";import"./index-L24AK7Ts.js";import"./useControlled-D8fGF6t0.js";import"./Popper-DKZ5oZcV.js";import"./Button-BkrQibwj.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DaTlqfog.js";import"./QueryClientProvider-i7CmffhL.js";import"./Link-BTa2TnZw.js";import"./Collapse-BE1J1oKa.js";import"./_baseUniq-DaVelePf.js";import"./_Uint8Array-Bjb-AI1p.js";import"./isArray-BomWlQac.js";import"./_getTag-C4wX9zYW.js";import"./isEqual-B4npu7s9.js";import"./merge-MLtxKLuV.js";import"./_initCloneObject-Br6pXeAy.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BFpHeoSz.js";import"./inputBaseClasses-Dec7bLBK.js";import"./calculateFriendlyFileSize-CMIQVYOK.js";import"./CheckCircleTwoTone-CeziCU9H.js";import"./InfoTwoTone-CkavrGoq.js";import"./useMutation-PlwPtoOX.js";import"./dayjs.min-C2l0GvUg.js";import"./chunk-AYJ5UCUI-DDM9bpV7.js";import"./cloneDeep-Dz7n1ow1.js";import"./Skeleton-Kr-2WdY2.js";import"./SkeletonButton-CDqe-wQt.js";import"./SkeletonInlineBlock-JACfdKGg.js";import"./SkeletonTable-xDt7Tkxu.js";import"./times-vs3n5TPi.js";import"./toInteger-C6D2IDJF.js";import"./isSymbol-dVM8gOIk.js";import"./SkeletonParagraph-B2PbsTEb.js";import"./uniqueId-BMrlY7xr.js";import"./toString-CQE2fK0B.js";import"./CSSTransition-32ql7lsC.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-Cybkxv88.js";import"./Avatar-DlbiDmic.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
