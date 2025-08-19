import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as P}from"./mockWiki-DvmfJBaP.js";import{M as x}from"./MarkdownSynapse-eia88jNu.js";import{d as s}from"./ToastMessage-Clg0Ypyv.js";import{R as n,a as t}from"./RequirementItem-CPk7crB_.js";import{P as O}from"./Paper-BssQ7z_K.js";import"./mock_user_profile-CCzWeUML.js";import"./mock_file_handle-CidTpPtG.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./useFiles-JGbdqG3Z.js";import"./SynapseConstants-kWct_gQs.js";import"./OrientationBanner-Ck0cmJTU.js";import"./index-DY5eCRt3.js";import"./index-CWZWvv1W.js";import"./iframe-Dl6dwUMh.js";import"./spreadSx-CwcO6WA9.js";import"./react-041y4hcL.js";import"./FullWidthAlert-BVVPVNM_.js";import"./Alert-7WB9ky2v.js";import"./createTheme-DrHrTBAI.js";import"./DefaultPropsProvider-b_g8zUyE.js";import"./useSlot-W-35lwUb.js";import"./useForkRef-B7ScjJI-.js";import"./createSimplePaletteValueFilter-DQ6vsZ1N.js";import"./createSvgIcon-CGP5Vahk.js";import"./Close-CHvILsQT.js";import"./IconButton-CnA-Cp_o.js";import"./useTimeout-QsaiUxz8.js";import"./ButtonBase-BbrLiB8i.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-iciy9I-w.js";import"./Stack-BtAK458Q.js";import"./extendSxProp-bGo6jZzH.js";import"./getThemeProps-DsLLdsLt.js";import"./useTheme-W99C2NWG.js";import"./Box-BW7pWfnx.js";import"./AlertTitle-CGItHB3S.js";import"./Typography-lJ_1_SO5.js";import"./index-CZZGf4is.js";import"./useTheme-VP9MaFmI.js";import"./ClickAwayListener-CwoGzl_2.js";import"./getReactElementRef-v5yPsMqZ.js";import"./index-CDcwVaYq.js";import"./index-B6U5P1sA.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CWSVLSwQ.js";import"./Tooltip-C7ySumjD.js";import"./index-BjOTui5h.js";import"./useControlled-CQrAKh1A.js";import"./Popper-CkkCOvJq.js";import"./Button-CBChxZSW.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-DUZYe0ub.js";import"./QueryClientProvider-CX6pklzM.js";import"./Link-CimwTNCl.js";import"./Collapse-DVtgaf19.js";import"./_baseUniq-HMETs2Z2.js";import"./_Uint8Array-C9TiJjUd.js";import"./isArray-BJslNNN2.js";import"./_getTag-XmbY4FoW.js";import"./isEqual-DNkn9Q83.js";import"./merge-CqcSBB9I.js";import"./_initCloneObject-BGoKfN6L.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-D6tyxliU.js";import"./inputBaseClasses-LMGvHKbZ.js";import"./calculateFriendlyFileSize-B6ZKKM-n.js";import"./CheckCircleTwoTone-D_IhPaUf.js";import"./InfoTwoTone-B_CAKEKg.js";import"./useMutation-BJhaoQyM.js";import"./dayjs.min-BmvV46gs.js";import"./chunk-AYJ5UCUI-BeySss7E.js";import"./cloneDeep-HZfj7TcY.js";import"./Skeleton-B5sKivAV.js";import"./SkeletonButton-BhJK3t--.js";import"./SkeletonInlineBlock-DCPudg3g.js";import"./SkeletonTable-D5BuSzQm.js";import"./times-Dqjq4aLi.js";import"./toInteger-8HXnaP1z.js";import"./isSymbol-BN0nHDb6.js";import"./SkeletonParagraph-DESPP0Ya.js";import"./uniqueId-qe5CCRkb.js";import"./toString-CeIT5xAr.js";import"./CSSTransition-D2FNYTOP.js";import"./ConditionalWrapper-CpBCX7_r.js";import"./LockTwoTone-BEGEQQqC.js";import"./Avatar-CMW6rocJ.js";const pr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
